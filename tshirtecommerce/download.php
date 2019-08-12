<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-01-10
 * 
 * API
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
error_reporting(0);
ini_set('max_execution_time', 300);
ini_set('memory_limit', -1);
define('ROOT', dirname(__FILE__));
define('DS', DIRECTORY_SEPARATOR);
function openURL($url)
{
	$user_agent = 'User-Agent: curl/7.39.0';
	if (isset($_SERVER['HTTP_USER_AGENT'])) {
		$user_agent = $_SERVER['HTTP_USER_AGENT'];
	}

	if(strpos($url, '/tshirtecommerce/') > 0)
	{
		$temp = explode('/tshirtecommerce/', $url);
		$file = ROOT .DS. str_replace('/', DS, $temp[1]);
		if( file_exists($file) )
		{
			$data = file_get_contents($file);
			return $data;
		}
		else
		{
			return false;
		}
	}
	$data = false;
	if( function_exists('curl_exec') )
	{
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_VERBOSE, 1);
      	curl_setopt($ch, CURLOPT_USERAGENT, $user_agent);
		$data = curl_exec($ch);
		curl_close($ch);
	}
	
	if( $data == false && function_exists('file_get_contents') )
	{
		$data = file_get_contents($url);
	}
	
	return $data;
}
if ( isset($_GET['key']) && isset($_GET['view']) )
{
	$position 	= $_GET['view'];
	include_once ROOT .DS. 'includes' .DS. 'functions.php';
	$dg = new dg();
	
	$key 		= $_GET['key'];
	$key		= str_replace('cart:', '', $key);
	$params	= explode(':', $key);
	$cache 	= $dg->cache('cart');
	$data		= $cache->get($params[0]);
	if($data == null)
	{
		$cache 	= $dg->cache('design');
		$params 	= explode(':', $key);
		$user_id 	= $cache->get($params[0]);
		if( isset($params[1]) && isset($user_id[$params[1]]) )
		{
			$data = $user_id[$params[1]];
		}
	}
	if($data == null)
	{
		$cache 	= $dg->cache('admin');
		$params 	= explode(':', $key);
		$user_id 	= $cache->get($params[0]);
		if( isset($params[1]) && isset($user_id[$params[1]]) )
		{
			$data = $user_id[$params[1]];
		}
	}

	if (isset($params[1]) && !isset($data['vectors']) && !isset($data['vector'])) {
		$fcache = $cache->get($params[1]);
		$data['vectors'] = isset($fcache['vectors']) ? $fcache['vectors'] : (isset($fcache['vector']) ? $fcache['vector'] : array());
	}
	
	if ( count($data) > 0)
	{
		if( empty($data['fonts']) )
		{
			if(empty($params[1])) $params[1] = 'cart';
			$detail 			= $cache->get($params[1]);
			if($detail != null)
			{
				$data 		= array_merge($detail, $data);
			}
		}
				
		if(isset($data['item']['product_id']))
		{
			$product_id 	= $data['item']['product_id'];
		}
		elseif(isset($data['product_id']))
		{
			$product_id 	= $data['product_id'];
		}
		else
		{
			$product_id 	= 0;
		}
		
		// get product
		$products = $dg->getProducts();
		for($i=0; $i<count($products); $i++)
		{
			if ($products[$i]->id == $product_id)
			{
				$product = $products[$i];
				break;
			}
		}
		
		if (isset($product))
		{
			$design = $product->design;
			if (count($design))
			{
				$files = array();
				
				if (isset($_GET['type']))
				{
					$file = $_GET['type'];
				}
				else
				{
					$file = 'svg';
				}
				
				// get size info of area design
				$zoom = 1;
				if (isset($product) && isset($product->design))
				{
					$design = $product->design;
					if ( isset($design->area) && isset($design->params) )
					{
						$area 		= json_decode( json_encode($design->area), true );
						$params 	= json_decode( json_encode($design->params), true );
						if ( isset($area[$position]) && isset($params[$position]) )
						{
							$sizes_cm = json_decode( str_replace("'", '"', $params[$position]), true );
							$sizes_px = json_decode( str_replace("'", '"', $area[$position]), true );
							
							if ($file == 'png')
								$zoom_inc = 0.393700787 * $sizes_cm['width'] * 300;
							else
								$zoom_inc = 0.393700787 * $sizes_cm['width'] * 96; // DPI html on browser is 96.
						
							$zoom = $zoom_inc / $sizes_px['width'];
							
						}
					}
				}
				if($zoom == 0) $zoom = 1;

				$design_zoom = 1;
				$move_top_left = '';
				if(isset($data['design']))
				{
					$data_zoom = json_decode(str_replace('\\"', '"', $data['design']), true);
					
					$design_zoom 	= $data_zoom['width']/$data_zoom['old_width'];
					$move_top_left 	= 'data-move="0:0"';
				}
					
				$area = $design->area;
				if (isset($area->$position) && $area->$position != '')
				{
					$view 	= json_decode(str_replace("'", '"', $area->$position));	
					$radius 	= str_replace('px', '', $view->radius);

					if($move_top_left != '')
					{
						$view->height = $data_zoom['old_height'];
						$view->width = $data_zoom['old_width'];
					}

					$svg 		= '<svg xmlns="http://www.w3.org/2000/svg" '.$move_top_left.' xmlns:xlink="http://www.w3.org/1999/xlink" data-zoom="'.$zoom.'" height="'. $view->height .'" width="'.$view->width.'" data-main="1">';
					$svgPNG 	= '<svg xmlns="http://www.w3.org/2000/svg" '.$move_top_left.' xmlns:xlink="http://www.w3.org/1999/xlink" data-zoom="'.$zoom.'" height="'. $view->height .'" width="'.$view->width.'" data-main="1">';
					
					// GET DESIGN OF ORDER
					if(isset($data['vector']))
					{
						$data['vectors'] = $data['vector'];
						unset($data['vector']);
					}
					else
					{
						$data['vectors'] = $data['vectors'];
					}
					
					/* download with page */
					if( isset($data['options']) && isset($data['options']['pages']) )
					{
						$pages 	= $data['options']['pages'];

						$page_number = 1;
						if(isset($_GET['page']))
						{
							$page_number = $_GET['page'];
						}
						if($page_number > 1)
						{
							$data['vectors'] = array();
							if(isset($pages[$page_number][$position]))
							{
								$data['vectors'][$position] = $pages[$page_number][$position];
							}
						}
					}

					if(is_string($data['vectors']))
					{
						$vectors = json_decode($data['vectors']);
					}
					elseif(is_array($data['vectors']))
					{
						$vectors = json_decode(json_encode($data['vectors']));
					}
					else
					{
						$vectors = $data['vectors'];
					}
	
					$items			= $vectors->$position;
					$items			= json_decode ( json_encode($items), true);
					function cmp($a, $b)
					{
						return $a['zIndex'] - $b['zIndex'];
					}
					usort($items, 'cmp');				
					
					$items	= json_decode ( json_encode($items) );
					$min_top 	= 10000;
					$min_left 	= 10000;
					$index 	= 0;
					foreach($items as $item)
					{
						$index++;
						if(empty($item->id)) $item->id = $index;
						if (isset($item->clipar_type) && isset($item->price) && empty($item->clipar_paid))
						{
							echo 'This design using clipart of T-Shirt eCommerce Store. Please payment to use clipart and download file output.';
							exit;
						}
						$top 		= str_replace('px', '', $item->top);
						if($min_top > $top)
						{
							$min_top = $top;
						}
						$left 		= str_replace('px', '', $item->left);
						if($min_left > $left)
						{
							$min_left = $left;
						}
						
						$item->svg 	= str_replace('\\"', '"', $item->svg);
						$item->svg 	= str_replace('XML/1998/namespace', '1999/xlink', $item->svg); 	// IF IE
						$item->svg 	= str_replace('NS3:ns2:ns1:xmlns:xml="http://www.w3.org/1999/xlink"', '', $item->svg); 	// IF IE
						$item->svg 	= str_replace('NS5:ns1:xmlns:xml="http://www.w3.org/1999/xlink"', '', $item->svg); 	// IF IE
						$item->svg 	= str_replace('NS7:xmlns:xml="http://www.w3.org/1999/xlink"', '', $item->svg); 	// IF IE
						$item->svg 	= str_replace('NS1:ns1:xmlns:xml="http://www.w3.org/1999/xlink"', '', $item->svg); 	// IF IE
						$item->svg 	= str_replace('NS3:xmlns:xml="http://www.w3.org/1999/xlink"', '', $item->svg); 	// IF IE
						$item->svg 	= str_replace('NS1:ns1:xmlns:xml="http://www.w3.org/1999/xlink"', '', $item->svg); 	// IF IE
						$item->svg 	= str_replace('NS1:xmlns:xml="http://www.w3.org/1999/xlink"', '', $item->svg); 	// IF IE => fix IE.
						$item->svg 	= str_replace('xmlns:xml="http://www.w3.org/1999/xlink"', 'xmlns:xlink="http://www.w3.org/1999/xlink"', $item->svg); 	// IF IE
						
						$item->svg 	= str_replace('NS1:ns3:xmlns:ns1=""', '', $item->svg); 	// IF IE
						$item->svg 	= str_replace('NS3:xmlns:ns1=""', '', $item->svg); // IF IE	
						$item->svg 	= str_replace('xmlns:NS2=""', '', $item->svg); 	// IF IE
						$item->svg 	= str_replace('NS2:xmlns:ns3=""', '', $item->svg); 	// IF IE
						$item->svg 	= str_replace('xmlns:NS3=""', '', $item->svg); 	// IF IE
						$item->svg 	= str_replace('xmlns:NS4=""', '', $item->svg); 	// IF IE
						$item->svg 	= str_replace('xmlns:NS5=""', '', $item->svg); 	// IF IE
						$item->svg 	= str_replace('xmlns:NS6=""', '', $item->svg); 	// IF IE
						$item->svg 	= str_replace('NS6:xmlns:ns1=""', '', $item->svg); 	// IF IE
						$item->svg 	= str_replace('xmlns:NS7=""', '', $item->svg); 	// IF IE
						$item->svg 	= str_replace('NS2:xmlns:ns1=""', '', $item->svg); 	// IF IE
 						$item->svg 	= str_replace('xmlns:NS1=""', 'xmlns:xlink', $item->svg); 	// IF IE
						$item->svg 	= str_replace('xmlns:ns2=""', '', $item->svg); 	// IF IE
						
						$item->svg 	= str_replace('NS4:', '', $item->svg); 	// IF IE
						$item->svg 	= str_replace('NS1:xmlns:xlink', '', $item->svg); 	// IF IE
 						$item->svg 	= str_replace('xmlns:xml', 'xmlns:xlink', $item->svg); 	// IF IE
						$item->svg 	= str_replace(' xmlns:xlink ', ' ', $item->svg); 	// IF IE
						$item->svg 	= str_replace('viewBox=""', '', $item->svg); 	// IF IE

						$item->svg 	= str_replace('url(#affTextFilteritem-0)', 'url(#affTextFilteritem-'.$item->id.')', $item->svg);
						$item->svg 	= str_replace('id="affTextFilteritem-0"', 'id="affTextFilteritem-'.$item->id.'"', $item->svg);
						
						// remove transform
						if($file != 'svg')
						{
							$str_temp = explode('transform="', $item->svg);
							if(count($str_temp) > 1)
							{
								preg_match_all('/transform="translate\(([^"]*)\) /', $item->svg, $temp_array);
								if(isset($temp_array[1][0]))
								{
									$translate = $temp_array[1][0];
									$array = explode(", ", $translate);
									$translate_new = $array[0] * $zoom;
									$translate_new = 'translate('.$translate_new.', '.$array[1].')';
									$translate = 'translate('.$translate.')';
									$item->svg = str_replace($translate, $translate_new, $item->svg);
								}
							}
						}
						
						$count = explode('xmlns:xlink="http://www.w3.org/1999/xlink"', $item->svg);
						if (count($count) > 2)
						{
							$item->svg = $count[0]. ' xmlns:xlink="http://www.w3.org/1999/xlink"';
							for($iz=1; $iz < count($count); $iz ++)
							{
								$item->svg .= $count[$iz];
							}
						}					
						
						
						if ( isset($item->file) && isset($item->file->type) && $item->file->type == 'image')
						{
							$item->svg 	= str_replace(' /></g>', '></image></g>', $item->svg); 	// IF IE
							$tempStr = explode('<image', $item->svg);
							$item->svg = $tempStr[0] . '<image'. str_replace('xmlns:xlink="http://www.w3.org/1999/xlink"', '', $tempStr[1]);

							preg_match_all('/xlink:href="([^"]*)"/', $item->svg, $links);
							
							if (isset($links[1][0]))
							{
								if ( strpos($links[1][0], '"') > 0)
								{
									$ex_temp = explode('"', $links[1][0]);
									$links[1][0]	= $ex_temp[0];
								}
								$link 	= str_replace('_thumb', '', $links[1][0]);
															
								if (isset($item->file_name) && isset($item->url))
								{
									if ($item->url != $item->thumb)
										$link = $item->url .'print/'. $item->file_name;
								}
								
								if (strpos($link, 'image/PNG;base64') === false)
								{
									if(strpos($link, 'http') === false)
									{
										$temp = explode('tshirtecommerce', $link);
										if(isset($temp[1]))
										{
											$link = $dg->url() .'tshirtecommerce'. $temp[1];
										}											
									}
									$data_img 	= openURL($link);
									if(isset($item->onecolor) && $item->onecolor != '')
									{
										$data_img = $dg->photoColor($data_img, $item->onecolor);
									}
									$base64 = 'data:image/PNG;base64,' . base64_encode($data_img);
									$temp = explode($links[1][0], $item->svg);
									if (isset($temp[1]))
									{
										$item->svg = $temp[0].$base64.$temp[1];
									}
								}								
							}
						}						
						$dom = new DOMDocument();
						$item->svg = str_replace('&nbsp;', '', $item->svg);
						if (version_compare(LIBXML_VERSION, '20700', '>=')) {
							$dom->loadXML($item->svg, LIBXML_PARSEHUGE);
						} else {
							$dom->loadXML($item->svg);
						}
						
						// team
						if($item->type == 'team')
						{
							$texts = $dom->getElementsByTagName("text");
							foreach ($texts as $text)
							{						
								if ($text->getAttribute('class') != '')
								{
									$action = '';
									if($text->getAttribute('class') == 'team-number')
									{
										$action = 'number';
									}
									else if($text->getAttribute('class') == 'team-name')
									{
										$action = 'name';
									}
																		
									if ($text->hasChildNodes() && $action != '')
									{
										foreach ($text->childNodes as $tspan) {
											if ($action == 'number')
											{
												$team_number = $tspan->nodeValue;
											}											
											else
											{
												$team_name = $tspan->nodeValue;
											}												
										}
									}
								}
							}
						}
						else if($item->type == 'text1')
						{							
							$texts = $dom->getElementsByTagName("text");
							$count_child = 0;
							$dy = 0;
							foreach ($texts as $text){
								$txt = array();
								if ($text->hasChildNodes()) {
									foreach ($text->childNodes as $tspan) {
										$txt[$count_child] = array();
										$txt[$count_child]['text'] = $tspan->nodeValue;
										$txt[$count_child]['x'] = $tspan->getAttribute('x');
										if ($tspan->getAttribute('dy') > $dy)
											$dy = $tspan->getAttribute('dy');
										$count_child++;										
									}
								}
							}
													
							
							foreach ($texts as $text){								
								$note = $text;
								$parent = $text->parentNode;
								for($i=0; $i< $count_child; $i++)
								{																		
									$elm = $dom->createElement('text', htmlentities($txt[$i]['text']));
									foreach ($note->attributes as $attr)
									{
										if ($attr->nodeName == 'y')
										{
											if ($dy == 0) $dy = $attr->nodeValue;
											$elm->setAttribute($attr->nodeName, $dy * ($i + 1) - ($i * 2));
										}
										else if($attr->nodeName == 'text-anchor')
										{
											//$elm->setAttribute($attr->nodeName, 'start');
										}
										else if($attr->nodeName == 'x')
										{
											if ($txt[$i]['x'] == '0')
											{
												$elm->setAttribute($attr->nodeName, 0);
												$elm->setAttribute('text-anchor', 'start');
											}
											else if ($txt[$i]['x'] == '50%')
											{
												$elm->setAttribute($attr->nodeName, '50%');
												$elm->setAttribute('text-anchor', 'middle');
											}
											else
											{
												$elm->setAttribute($attr->nodeName, '100%');
												$elm->setAttribute('text-anchor', 'end');
											}
										}
										else
										{
											$elm->setAttribute($attr->nodeName, $attr->nodeValue);
										}
									}
									$parent->appendChild($elm);
								}
								$text->parentNode->removeChild($text);
								break;								
							}						
						}						
						
						$x = $dom->getElementsByTagName("svg");
						foreach ($x as $xx){
							$xx->removeAttribute("x");
							$xx->removeAttribute("y");
						}

						/* Begin fix when add to cart design template from page product detail */
						if($move_top_left != '')
						{
							$left = $left * 1.5;
							$top = $top * 1.5;
							foreach ($x as $xx){
								$swidth 	= $xx->getAttribute('width') * 1.5;
								if ($swidth > 0) $xx->setAttribute('width', $swidth);
								$sheight 	= $xx->getAttribute('height') * 1.5;
								if ($sheight > 0) $xx->setAttribute('height', $sheight);

								if(isset($item->viewBox))
								{
									$xx->setAttribute('viewBox', $item->viewBox);
								}
							}
						}
						/* End fix */

						$item->svg = $dom->saveXML();

						if (isset($item->rotate) && $item->rotate != 0)
						{
							$width 		= str_replace('px', '', $item->width);
							$height 		= str_replace('px', '', $item->height);
							$width		= (int) $width/2;
							$height		= (int) $height/2;

							$strsvg 	= str_replace('<svg ', '<svg ', $item->svg);
							
							
							$svgPNG 	.= '<g transform="translate('.($left*$zoom).', '.($top*$zoom).')  rotate('.$item->rotate.' '.($width*$zoom).' '.($height*$zoom).')">'.$strsvg.'</g>';							
							$svg 		.= '<g transform="translate('.$left.', '.$top.')  rotate('.$item->rotate.' '.$width.' '.$height.')">'.$strsvg.'</g>';
						}
						else
						{
							$svg 		.= str_replace('<svg ', '<svg y="'.$top.'" x="'.$left.'" ', $item->svg);
							if (isset($svgPNG))
								$svgPNG		.= str_replace('<svg ', '<svg y="'.$top.'" x="'.$left.'" ', $item->svg);
							else
								$svgPNG		= $svg;
						}
					}

					$viewBox = '';
					$viewBox_PNG = '';
					if($move_top_left != '')
					{
						$min_top = $min_top * 1.5;
						$min_left = $min_left * 1.5;
						$viewBox = 'viewBox="'.$min_left.' '.$min_top.' '.$data_zoom['old_width'].' '.$data_zoom['old_height'].'"';
						$svg = str_replace('data-move="0:0"', $viewBox, $svg);

						$viewBox_PNG = 'viewBox="'.($min_left*$zoom).' '.($min_top*$zoom).' '.($data_zoom['old_width']*$zoom).' '.($data_zoom['old_height']*$zoom).'"';
						$svgPNG = str_replace('data-move="0:0"', $viewBox_PNG, $svgPNG);
					}

					if(isset($radius) && $radius > 0)
					{
						if($viewBox != '')
						{
							$svg_min_top = 'y="'.$min_top.'"';
							$svg_min_left = 'x="'.$min_left.'"';
						}
						if($radius == '50%')
						{
							$svg 	.= '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'.$view->width.'" height="'.$view->height.'">'
									.'<rect x="0" y="0" rx="'.$radius.'" ry="'.$radius.'" width="'.$view->width.'" height="'.$view->height.'" style="fill:none;stroke:#FFFFFF;stroke-width:5"/>'
										.'</svg>';
							
							$rs 		= (($view->width*$zoom)/2);
							$svgPNG	.= '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'.($view->width).'" height="'.($view->height).'">'
										.'<rect x="0" y="0" rx="'.$rs.'" ry="'.$rs.'" width="'.($view->width * $zoom).'" height="'.($view->height * $zoom).'" style="fill:none;stroke:#FFFFFF;stroke-width:5"/>'
										.'</svg>';
						}
						else
						{
							$svg 	.= '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'.$view->width.'" '.$svg_min_top.' '.$svg_min_left.' height="'.$view->height.'">'
									.'<rect x="0" y="0" rx="'.$radius.'" ry="'.$radius.'" width="'.$view->width.'" height="'.$view->height.'" style="fill:none;stroke:#000;stroke-width:3"/>'
								.'</svg>';

							$svgPNG .= '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'.($view->width).'" '.$svg_min_top.' '.$svg_min_left.' height="'.($view->height).'">'
									.'<rect x="0" y="0" rx="'.($radius*$zoom).'" '.$viewBox_PNG.' ry="'.($radius*$zoom).'" width="'.($view->width*$zoom).'" height="'.($view->height*$zoom).'" style="fill:none;stroke:#000;stroke-width:3"/>'
									.'</svg>';
						}
					}
					
					// add mask
					if ( isset($product->download_mask) && $product->download_mask == 1)
					{						
						$designProduct = $design->$position;
						$elms = str_replace("'", '"', $designProduct[0]);
						$elms = str_replace('["', '[', $elms);
						$elms = str_replace('"]', ']', $elms);
						$elms = json_decode($elms);
						
						if (isset($elms) && count($elms) > 0)
						{
							function cmp1($a, $b)
							{
								return $a['zIndex'] - $b['zIndex'];
							}
							$arr_temp = json_decode( json_encode($elms), true);
							//usort($arr_temp, 'cmp1');
							
							$arr_temp = array_reverse($arr_temp);
							$elms = json_decode( json_encode($arr_temp));

							// get all options of addon product builder when customers change colors
							if(isset($data['options']) && isset($data['options']['productColors']))
							{
								$productColors = $data['options']['productColors'];
							}
							else
							{
								$productColors = array();
							}

							$is_area_design = 0;
							foreach($elms as $elm)
							{
								if($elm->id == 'area-design')
								{
									$is_area_design = 1;	
								}

								if (isset($elm->ismask) && $elm->ismask == 1)
								{
									if( isset($elm->obj) && isset($productColors[$elm->obj]) && isset($productColors[$elm->obj]['hex']) )
									{
										$attributes_load_color = 'class="set-colors" data-color="'.$productColors[$elm->obj]['hex'].'"';
									}
									else
									{
										$attributes_load_color	= '';
									}
									$data_img 	= openURL(str_replace('https', 'http', $elm->img));
									$file_name = 'data:image/PNG;base64,' . base64_encode($data_img);

									$mask_top = 0;
									$mask_left = 0;
									if((float) $view->top < (float) $elm->height)
									{
										$mask_top = (float) $elm->top - $view->top;
									}
									if((float) $view->left < (float) $elm->width)
									{
										$mask_left = (float) $elm->left - (float) $view->left;
									}
									
									$temp_svg = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" height="'.$elm->height.'" width="'.$elm->width.'" x="'.$mask_left.'px" y="'.$mask_top.'px">'
											.'<image '.$attributes_load_color.' preserveAspectRatio="none" xlink:href="'.$file_name.'" height="'.$elm->height.'" width="'.$elm->width.'" y="0" x="0"/>'
											.'</svg>';
											
									$temp_svgPNG = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" height="'.$elm->height.'" width="'.$elm->width.'" x="'.$mask_left.'px" y="'.$mask_top.'px">'
											.'<image '.$attributes_load_color.' preserveAspectRatio="none" xlink:href="'.$file_name.'" height="'.$elm->height.'" width="'.$elm->width.'" y="0" x="0"/>'
											.'</svg>';

									if( $is_area_design == 0)
									{
										$svg 		= str_replace('data-main="1">', 'data-main="1">'.$temp_svg, $svg);
										$svgPNG 		= str_replace('data-main="1">', 'data-main="1">'.$temp_svgPNG, $svgPNG);
									}
									else
									{
										$svg 		= $svg . $temp_svg;
										$svgPNG 	= $svgPNG . $temp_svgPNG;
									}
								}
							}
						}
					}
						
					$svg .= '</svg>';
					$svgPNG .= '</svg>';
					
					$svg 	= str_replace('<?xml version="1.0"?>', '', $svg);
					$svgPNG = str_replace('<?xml version="1.0"?>', '', $svgPNG);
					
					// create folder of order
					$path = ROOT .DS. 'uploaded' .DS. 'orders';
					if (!file_exists($path))
						mkdir($path, 0755);
					
					if (isset($_GET['order']))
						$order = $_GET['order'];
					else
						$order = $_GET['key'];
					
					$path = $path .DS. $order;
					if (!file_exists($path))
						mkdir($path, 0755);
		
					$setting 	= $dg->getSetting();					
					include_once(ROOT .DS. 'includes' .DS. 'addons.php');					
					$addons 	= new addons();
					$addons->view('hooks' .DS. 'download');
					
					// Fix create many svg files.
					if(is_dir($path))
					{
						$svgFiles = $dg->getFiles($path, '.svg');
						$check = false;
						if(is_array($svgFiles) && count($svgFiles))
						{
							foreach($svgFiles as $val)
							{
								if(strpos($val, $position) !== false)
								{
									$check = true;
									$file_name = $val;
								}
							}
						}
						if($check == false)
						{
							$file_name = $position .'-'. rand() .'.svg';
							$svg_temp = preg_replace('/<style>(.*)<\/style>/i', "", $svg);
							$dg->WriteFile($path .DS. $file_name, $svg_temp);
						}
					}
					
					if ($file == 'svg')
					{
						if (!empty($_GET['download']))
						{							
							// zip files
							if (count($files))
							{
								$ij = 0;								
								foreach($files as $file)
								{
									$string = str_replace($dg->url(), '', $file);
									$string = str_replace('/', DS, $string);
									$string = dirname(ROOT) .DS. $string;
									$array[$ij] = $string;
									$ij++;
								}
								$files = $array;
							}
							$files[] = $path .DS. $file_name;

							// zip all file
							$zipname = $path .DS. $position .'-'. $key.'.zip';							
							$zip = new ZipArchive();
							if ($zip->open($zipname, ZipArchive::CREATE) === TRUE)
							{
								foreach ($files as $file_oput)
								{
									$string = explode(DS, $file_oput);
									$file_name = $string[count($string)-1];
									
									$zip->addFile($file_oput, $file_name);
								}
								$zip->close();
							}
							// download file
							header('Content-Type: application/zip');
							header('Content-disposition: attachment; filename='.$key.'_'.$position.'.zip');
							header('Content-Length: ' . filesize($zipname));
							readfile($zipname);
							exit;
						}
						echo $svg;
					}
					else
					{
						$dom = new DOMDocument;
						
						if (version_compare(LIBXML_VERSION, '20700', '>=')) {
							$dom->loadXML($svgPNG, LIBXML_PARSEHUGE);
						} else {
							$dom->loadXML($svgPNG);
						}
						
						$books = $dom->getElementsByTagName('svg');
						$check = false;
						foreach ($books as $book)
						{
							if($check)
							{
								$width 	= $book->getAttribute('width') * $zoom;
								if ($width > 0)
									$book->setAttribute('width', $width);
														
								$height 	= $book->getAttribute('height') * $zoom;
								if ($height > 0)
									$book->setAttribute('height', $height);
							}else
							{
								// Fix size download file pdf.
								$w = $book->getAttribute('width');
								$width 	= $w * $zoom;
								if ($width > 0)
									$book->setAttribute('width', $width);
								
								$height 	= $w * ($sizes_cm['height']/$sizes_cm['width']) * $zoom;
								if ($height > 0)
									$book->setAttribute('height', $height);
								$check = true;
							}						
							
							$x 	= $book->getAttribute('x') * $zoom;
							$book->setAttribute('x', $x);
							
							$y 	= $book->getAttribute('y') * $zoom;
							$book->setAttribute('y', $y);
						}
												
						$image 	= $dom->getElementsByTagName('image');						
						foreach ($image as $img)
						{
							$width 	= $img->getAttribute('width') * $zoom;							
							$img->setAttribute('width', $width);
							$height 	= $img->getAttribute('height') * $zoom;
							$img->setAttribute('height', $height);	
						}
						$svgPNG = $dom->saveXML();						
												
						$svgPNG = str_replace('<?xml version="1.0"?>', '', $svgPNG);							
						echo ltrim($svgPNG);
					}
					exit;
				}
			}
			else
			{
				echo 'Design not found';
			}
		}
		else
		{
			echo 'Design not found';
		}
	}
	else
	{
		echo 'Design not found';
	}
}
else
{
	echo 'Design not found';
}
?>