<?php
// list attribute of product
add_action('tshirtecommerce_product_attribute', 'designer_product_attribute', 10, 2);
function designer_product_attribute($values)
{
	global $TSHIRTECOMMERCE_ROOT, $P9f;

	if(isset($_GET['user_design']))
	{
		$values = explode(':', $_GET['user_design']);
	}

	if (count($values) == 1) /* blank product */
	{
		$product_id 	= $values[0];
		$rowid		= 'blank';
	}
	else 	/* design template */
	{
		$rowid		= $values[0].':'.$values[1];
		if (isset($values[2]))
			$product_id = $values[2];
		else
			$product_id = 0;		
	}
	
	// get product
	$data = $P9f->product_design;
	if (count($data))
	{
		$dg 				= $P9f->dgClass();
		$lang 			= $P9f->getLang();
		$P9f->lang 			= $lang;

		$data = json_decode(json_encode($data));

		//if (!isset($data->show_attribute) || (isset($data->show_attribute) && $data->show_attribute == 0)) return false;
		
		include_once(dirname(dirname(__FILE__)).'/helper/functions.php');
		$html = array();
		if (isset($data->design) && isset($data->design->color_hex))
		{
			echo '<div class="designer-attributes">';
			
			$extra_html = '';
			$extra_html = apply_filters( 'tshirt_product_before_attribute', $extra_html, $values);
			echo $extra_html;
			
			if(count($data->design->color_hex) > 0)
			{
				echo '<input type="hidden" value="'.$data->id.'" name="product_id">';
				echo '<input type="hidden" value="'.$data->design->color_hex[0].'" name="color_hex" class="designer_color_hex">';
				echo '<input type="hidden" value="'.$data->design->color_hex[0].'" name="colors[0]" class="designer_color_index">';
				echo '<input type="hidden" value="'.$data->design->color_title[0].'" name="color_title" class="designer_color_title">';
				echo '<input type="hidden" value="'.$rowid.'" name="rowid" class="designer_rowid">';
				echo "<input type='hidden' value='1' name='is_page_detail'>";
				
				$css = '';
				if(count($data->design->color_hex) == 1)
				{
					$css = 'style="display:none;"';
				}
				echo '<div class="product-colors" '.$css.'><label for="fields">'.$lang['designer_product_product_colors'].'</label><div class="list-colors">';
				foreach($data->design->color_hex as $index => $value)
				{
					$colors 		= explode(';', $data->design->color_hex[$index]);
					$n 			= count($colors);
					$width 		= (int) (24/$n);
					
					if (isset($values[3]) && $values[3] == $data->design->color_hex[$index])
					{
						$active = 'active';
					}
					elseif( isset($_GET['index']) && $index == $_GET['index'] )
					{
						$active = 'active';
					}
					else
					{
						$active = '';
					}
					
					echo '<a href="javascript:void(0);" onclick="e_productColor(this)" data-color="'.$data->design->color_hex[$index].'" data-index="'.$index.'" class="bg-colors '.$active.'" title="'.$data->design->color_title[$index].'">';
					
					for($i=0; $i<$n; $i++)
					{
						echo '<span style="width:'.$width.'px;background-color:#'.$colors[$i].';"></span>';
					}
					
					echo '</a>';
				}
				echo '</div></div>';
			}
			
			$html['attributes'] = getAttributes($data->attributes);
			
			$css = '';
			if($html['attributes'] == '')
			{
				$css = 'style="display:none;"';
			}
			echo '<div class="product-attributes" '.$css.'>';
			
			echo $html['attributes'];
			
			$html_attribute = '';
			$html_attribute = apply_filters( 'tshirt_product_after_attribute', $html_attribute, $data);
			
			echo $html_attribute;
			
			echo '</div>';
			
			if ($data->min_order < 1)
			{
				$data->min_order = 1;
			}
			if ($data->max_oder < $data->min_order)
				$data->max_oder = 10000;
			
			echo '<script type="text/javascript"> var min_order = '.$data->min_order.', max_order = '.$data->max_oder.', txt_min_order = "'.$lang['min_quantity'].'";</script>';			
			
			echo '</div>';
		}
	}
}

/* update attribute when click add to cart */
/*
$data_items = array(
		'design_price' => $price,
		'design_id' => $rowid,
		'color_hex' => $color_hex,
		'color_title' => $color_title,
		'teams' => $teams,
		'options' => $options,
		'images' => $images,
);
*/
//add_filter('tshirtecommerce_product_set_attribute', 'product_update_attribute', 20, 2);
function product_update_attribute($data_items, $product_id)
{
	if (isset($_POST['product_id']) && isset($_POST['is_page_detail']) )
	{
		$data = array();
		if(isset($_POST['attribute']))
		{
			$data['attribute']	= $_POST['attribute'];
		}
		$data['product_id']	= $_POST['product_id'];
		$data['quantity']		= $_POST['quantity'];
		$data['colors']		= $_POST['colors'];
		$data['cliparts']		= $_POST['cliparts'];
		$data['print']		= $_POST['print'];
		
		$update_price = true;
		
		if (defined('ROOT') == false)
			define('ROOT', dirname(dirname(dirname(dirname(dirname(__FILE__))))). '/tshirtecommerce');
		if (defined('DS') == false)
			define('DS', DIRECTORY_SEPARATOR);
		include_once (ROOT .DS. 'includes' .DS. 'functions.php');
		$dg = new dg();
		
		$rowid	= $_POST['rowid'];
		if ($data_items['design_id'] != 'blank')
		{
			$params = explode(':', $data_items['design_id']);
			if (count($params) > 1)
			{
				$cache = $dg->cache();
				$designs = $cache->get($params[0]);
				if ($designs == null || empty($designs[$params[1]]))
				{
					$cache = $dg->cache('admin');
					$designs = $cache->get($params[0]);
				}
				
				if (isset($designs[$params[1]]))
				{
					$design = $designs[$params[1]];
					
					if ($data['print']['colors'] == '{}' && $data['print']['sizes'] == '{}')
					{
						if (isset($design['print']))
						{
							$data['print'] 		= $design['print'];
							$data['cliparts'] 	= $design['cliparts'];
						}
						else
						{
							$update_price = false;
						}
					}
					
					if(!isset($data_items['price']))
						$data_items['price'] = 0;
					$cache = $dg->cache('cart');

					$item			= array(
						'id'			=> '',
						'product_id'	=> $_POST['product_id'],
						'qty'			=> $data['quantity'],
						'teams'			=> $data_items['teams'],
						'price'			=> $data_items['price'],
						'cliparts'		=> $data['cliparts'],
						'options'		=> $data_items['options'],
						'prices'		=> '{}',
					);
					
					$images	= $_POST['images'];
					if ($images != '')
					{
						$temp = str_replace('\"', '"', $images);
						$images = json_decode($temp);
					}
					
					$content		= array(
						'color' 	=> $_POST['color_hex'],
						'images' 	=> $images,
						'vector'	=> $design['vectors'],
						'fonts' 	=> $design['fonts'],
						'item' 		=> $item
					);
					
					$rowid = md5($rowid);
					$cache->set($rowid, $content);
					
					$data_items['design_id'] = $rowid;
				}
			}
		}
		
		if ($update_price == true)
		{
			if (isset($data['print']['colors']) && $data['print']['colors'] != '{}')
				$data['print']['colors']	= str_replace('\"', '"', $data['print']['colors']);
			if (isset($data['print']['sizes']) && $data['print']['sizes'] != '{}')
				$data['print']['sizes']		= str_replace('\"', '"', $data['print']['sizes']);
			
			$prices = $dg->prices($data, false);
			$data_items['prices_options']	= $prices;
			
			if (isset($prices->sale))
			{
				$setting 			= $dg->getSetting();
				$price_thousand 		= setValue($setting, 'price_thousand', ',');
				$price_decimal 		= setValue($setting, 'price_decimal', '.');
				
				$price = str_replace($price_thousand, '', $prices->sale);
				$price = str_replace($price_decimal, '.', $price);
				$data_items['design_price'] = ($price/$data['quantity']);
			}
		}
	}
		
	return $data_items;
}
?>