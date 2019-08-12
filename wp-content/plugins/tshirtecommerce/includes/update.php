<?php
/**
 * Show after admin updated new version
 * sync data of new version with file json, database
 * Show link changelog
 */
class update_9file
{
	public function __construct()
	{
		add_action( 'admin_footer', array($this, 'init'), 10 );
		add_action( 'wp_ajax_designer_syn', array($this, 'syn') );
	}

	function init()
	{
		global $TSHIRTECOMMERCE_ROOT;

		$file = $TSHIRTECOMMERCE_ROOT . 'version.json';
		if( file_exists($file) )
		{
			$content = file_get_contents($file);
			$version = json_decode($content, true);
			if( isset($version['update']) && $version['update'] == 1 )
			{
				include_once('setup/update.php');
			}
		}
	}

	function syn()
	{
		global $TSHIRTECOMMERCE_ROOT;
		// update data
		$this->printing();
		do_action( 'update_9file_syn' );

		// update file version
		$file = $TSHIRTECOMMERCE_ROOT . 'version.json';
		if( file_exists($file) )
		{
			$content = file_get_contents($file);
			$version = json_decode($content, true);
			unset($version['update']);
			unset($version['about']);
			unset($version['changelog']);

			write_to_file(json_encode($version), $file);
		}
		exit();
	}

	function printing()
	{
		global $TSHIRTECOMMERCE_ROOT;

		$printings = $this->getData('printings');

		/* check if updated printing */
		$index = 0;
		$is_updated = false;
		for($i=0; $i<count($printings); $i++)
		{
			if($printings[$i]['printing_code'] == 'DTG99'){
				$is_updated = true;
				break;
			}
			if($printings[$i]['id'] > $index)
			{
				$index = $printings[$i]['id'];
			}
		}
		if($is_updated === true)
		{
			return false;
		}

		/* Start move printi from settings to menu printing type */
		$printings_default = array(
			'DTG' => array(
				'title' 			=> 'DTG',
				'printing_code' 		=> 'DTG99',
				'price_type' 		=> 'size',
				'short_description' 	=> 'DTG Printing',
				'description' 		=> 'DTG Printing',
			),
			'screen' => array(
				'title' 			=> 'Screen',
				'printing_code' 		=> 'SCR99',
				'price_type' 		=> 'color_size',
				'short_description' 	=> 'Screen Printing',
				'description' 		=> 'Screen Printing',
			), 
			'sublimation' => array(
				'title' 			=> 'Sublimation',
				'printing_code' 		=> 'SUB99',
				'price_type' 		=> 'size',
				'short_description' 	=> 'Sublimation Printing',
				'description' 		=> 'Sublimation Printing',
			), 
			'embroidery' => array(
				'title' 			=> 'Embroidery',
				'printing_code' 		=> 'EMB99',
				'price_type' 		=> 'color_size',
				'short_description' 	=> 'Embroidery',
				'description' 		=> 'Embroidery',
			)
		);
		$settings = $this->getData('settings');

		$printings_update = array();
		foreach($printings_default as $key => $option)
		{
			$printings_update[$key] = $option['printing_code'];
			$index++;

			$option['id'] 		= $index;
			$option['view'] 		= 0;
			$option['price_extra'] 	= 0;

			$print_addon_key = strtolower('printing_type_'.$key);

			if(isset($settings[$print_addon_key]))
			{
				$option['description'] = $settings[$print_addon_key];
			}

			$prices = array();
			if( isset($settings['prints']) && isset($settings['prints'][$key]) )
			{
				foreach($settings['prints'][$key] as $size=>$price)
				{
					$prices[]	= $price;
				}
			}
			else
			{
				$prices = array(0, 0, 0, 0, 0, 0, 0);
			}
			$option['values'] = array(
				'front' => array(
					'quatity' => array(0=>10),
					'prices' => array(0=>$prices),
				),
				'back' => array(
					'quatity' => array(0=>10),
					'prices' => array(0=>$prices),
				),
				'left' => array(
					'quatity' => array(0=>10),
					'prices' => array(0=>$prices),
				),
				'right' => array(
					'quatity' => array(0=>10),
					'prices' => array(0=>$prices),
				)
			);

			$printings[] = $option;
		}
		/* move description of addon change printing type to page edit printing */

		if( isset($settings['printing_type_dtg']) )
		{
			foreach($printings as $i => $printing)
			{
				$print_addon_key = 'printing_type_'.$printing['printing_code'];
				if( isset($settings[$print_addon_key]) )
				{
					$printing[$i]['description'] = $settings[$print_addon_key];
				}

			}
		}
		$this->saveData('printings', $printings);
		/* End move printing */

		/* update printing from products */
		$products 	= $this->getData('products');
		$changed 	= false;
		if(isset($products['products'])) //print_type
		{
			$n = count($products['products']);
			for($i=0; $i<$n; $i++)
			{
				$print_type = $products['products'][$i]['print_type'];
				if( isset($printings_update[$print_type]) )
				{
					$changed = true;
					$products['products'][$i]['print_type'] = $printings_update[$print_type];
				}

				/* update addon change printing type */
				if( isset($products['products'][$i]['allow_change_printing_type']) )
				{
					foreach($printings_update as $old_type => $new_type)
					{
						$key_old = 'allow_'.$old_type.'_printing';
						$key_new = 'allow_'.$new_type.'_printing';
						if( isset($products['products'][$i][$key_old]) )
						{
							$products['products'][$i][$key_new] = $products['products'][$i][$key_old];
							unset($products['products'][$i][$key_old]);
						}
					}
				}
			}
		}
		if($changed == true)
		{
			$this->saveData('products', $products);
		}
		/* end update products */
	}

	function getData($file)
	{
		global $TSHIRTECOMMERCE_ROOT;
		$file = $TSHIRTECOMMERCE_ROOT . 'data/'.$file.'.json';

		$data = array();
		if(file_exists($file))
		{
			$content = file_get_contents($file);
			if($content !== false)
			{
				$data = json_decode($content, true);
			}
		}
		return $data;
	}

	function saveData($file, $data)
	{
		global $TSHIRTECOMMERCE_ROOT;
		$file = $TSHIRTECOMMERCE_ROOT . 'data/'.$file.'.json';
		if(file_exists($file))
		{
			write_to_file(json_encode($data), $file);
		}

	}
}
new update_9file();
?>