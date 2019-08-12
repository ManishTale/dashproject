<?php
/**
 * show list colors of product design in page list product
 *
 * @class       tshirtecommerce_product_colors
 * @version     1.0.0
 * @author      tshirtecommerce
 */

class tshirtecommerce_product_colors
{
	public $product;

	public function __construct() 
	{
		add_action( 'init', array( $this, 'init' ), 30 );
	}

	public function init()
	{
		$this->get_products();
		global $P9f;
		
		$settings = $P9f->settings;
		if( isset($settings['products_colors']) && $settings['products_colors'] == 1 )
		{
			if (extension_loaded('gd') && function_exists('gd_info')) 
			{
				add_action('wp_enqueue_scripts', array($this, 'addjs'), 10);
				add_action( 'woocommerce_loaded', array( $this, 'init' ), 30 );
				add_action( 'woocommerce_before_shop_loop_item_title', array($this, 'show_colors'), 5 );
				add_action( 'wp_ajax_load_product_image', array($this, 'load_product_image') );
				add_action( 'wp_ajax_nopriv_load_product_image', array($this, 'load_product_image') );
			}
		}
	}

	public function addjs()
	{
		if(is_shop())
		{
			wp_enqueue_script( 'tshirtecommerce_colors', plugins_url( 'assets/js/product_colors.js', dirname(__FILE__ )), array(), '4.2.1', true );
		}
	}

	// get all product of tshirtecommerce
	public function get_products()
	{
		$json = ABSPATH .'tshirtecommerce/data/products.json';
		if (file_exists($json))
		{
			$string = file_get_contents($json);
			if ($string !== false)
			{
				$products = json_decode($string);
				if ( isset($products->products) && count($products->products) > 0)
				{
					$data = array();
					foreach($products->products as $row)
					{
						$data[$row->id] = $row;
					}
					$GLOBALS['tshirtecommerce_products'] = $data;
				}
			}
		}
	}

	// ajax load product image with colors index
	function load_product_image()
	{
		$result 	= array(
			'error'	=> 1,
			'image'	=> ''
		);
		if( isset($_GET['product_id']) && isset($_GET['index']) )
		{
			global $tshirtecommerce_products;

			$product_id 	= $_GET['product_id'];
			$index 			= $_GET['index'];
			if( isset($tshirtecommerce_products[$product_id]) )
			{
				$product 	= $tshirtecommerce_products[$product_id];
				if ( isset($product->design->front) )
				{
					$data = $product->design->front;
				}
				elseif ( isset($product->design->back) )
				{
					$data = $product->design->front;
				}

				if( isset($data) && isset($data[$index]) )
				{
					$str 		= str_replace("'", '"', $data[$index]);
					$design 	= json_decode($str, true);

					$items 		= array();
					foreach($design as $item)
					{
						if( isset($item['id']) && $item['id'] != 'area-design')
						{
							$items[]	= $item;
						}
					}
					if(count($items) > 1)
					{
						// call GD and create image
					}
					elseif(count($items) == 1)
					{
						$img = $items[0]['img'];
						$result['error']	= 0;
						if ( strpos($img, 'tshirtecommerce/') === false)
						{
							$result['image']	= home_url('/tshirtecommerce/'.$img);
						}
						else
						{
							$result['image']	= $img;
						}
					}
				}
			}
		}
		header("Content-Type: application/json", true);
		echo json_encode($result);
		exit();
	}

	public function set_product($product)
	{
		$this->product = $product;
	}

	// show list colors in page list products
	function show_colors()
	{
		global $product, $wc_cpdf, $tshirtecommerce_products;

		if( !is_shop() ) return false;

		$product_id = get_the_ID();

		$id = $wc_cpdf->get_value($product_id, '_product_id');
		if( strpos($id, ':') === false )
		{
			if( isset($tshirtecommerce_products[$id]) )
			{
				$this->set_product($tshirtecommerce_products[$id]);
				echo $this->html_colors($id);
			}
		}
	}

	// get colors
	public function get_colors()
	{
		$colors 	= array();
		if( isset($this->product->design->color_hex) && count($this->product->design->color_hex) > 0 )
		{
			$hexs 		= $this->product->design->color_hex;
			$titles 	= $this->product->design->color_title;
			for( $ii=0; $ii<count($hexs); $ii++ )
			{
				$colors[$hexs[$ii]] = $titles[$ii];
			}
		}

		return $colors;
	}

	// show html colors
	public function html_colors($product_id)
	{
		$html 	= '';
		$colors = $this->get_colors();
		if( count($colors) )
		{
			$html 	= '<div class="designer-attributes">';
			$html 	.= 		'<div class="list-colors">';
			$index 	= 0;
			foreach($colors as $color => $title)
			{
				$array 		= explode(';', $color);
				$n 			= count($array);
				$width 		= (int) (24/$n);
				
				$html 		.= '<a href="javascript:void(0);" onclick="tshirtecommerce_colors(this)" data-id="'.$product_id.'" data-color="'.$color.'" data-index="'.$index.'" class="bg-colors" title="'.$title.'">';
				
				for($ij=0; $ij<$n; $ij++)
				{
					$html  	.= '<span style="width:'.$width.'px;background-color:#'.$array[$ij].';"></span>';
				}
				
				$html 		.= '</a>';

				$index++;
			}

			$html 	.= 		'</div>';
			$html 	.= '</div>';
		}
		return $html;
	}
}
//$tshirtecommerce_product_colors	= new tshirtecommerce_product_colors();
?>