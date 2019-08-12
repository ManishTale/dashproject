<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-01-10
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
error_reporting(0);
ini_set('max_execution_time', 3000);
ini_set('memory_limit', -1);
if ( isset($_GET['session_id']) )
{
	$session_id = $_GET['session_id'];
	session_id($session_id);			
}
session_start();

define('ROOT', dirname(__FILE__));
define('DS', DIRECTORY_SEPARATOR);
include_once( ROOT .DS. 'includes' .DS. 'config.php');

include_once ROOT .DS. 'includes' .DS. 'functions.php';
$dg = new dg();

if ( empty($_GET['key']) || empty($_GET['view']) )
{
	echo 'Directory access is forbidden'; exit;
}

// check is download
if ($dg->platform == 'wordpress' && !isset($_SESSION['download_design']))
{
	echo 'Directory access is forbidden'; exit;
}

if ($dg->platform == 'opencart') {
	$url_ajax_store = $dg->url().'tshirtecommerce/opencart/ajax.php';
} elseif ($dg->platform == 'prestashop') {
	$url_ajax_store = $dg->url().'tshirtecommerce/prestashop/ajax.php';
} else {
	$url_ajax_store = $dg->url().'wp-admin/admin-ajax.php';
}

function openURL($url)
{
	$user_agent = 'User-Agent: curl/7.39.0';
	if (isset($_SERVER['HTTP_USER_AGENT'])) {
		$user_agent = $_SERVER['HTTP_USER_AGENT'];
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
		$arrContextOptions=array(
			"ssl"=>array(
				"verify_peer"=>false,
				"verify_peer_name"=>false,
			),
		);
		$data = file_get_contents($url, false, stream_context_create($arrContextOptions));
	}
	
	return $data;
}
$payment = false;
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">   
    <title>Download File Output</title>
    <link href="assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="assets/css/print.css" type="text/css" media="print">
	<style type="text/css">
	.container.loading{opacity: 0.2;}
	svg{max-width: 100%;height: auto;}
	@media print {
		body{background: transparent none repeat scroll 0 0!important;}
		body .container {visibility: hidden;height: 1px; overflow: hidden;}
		body a{display:none;}
		#download-pdf{background: transparent none repeat scroll 0 0;height: 100%;width: 100%;position: fixed;top: 0;left: 0;margin: 0;padding: 0;visibility: visible;display: block!important;}
	}
	#store-cliparts{width: 600px;position: absolute;left: 0px;right: 0px;margin: auto;top:100px;font-size:12px;}
	.mask-clipart {position: fixed;background-color: #000;top: 0px;right: 0px;left: 0px;bottom: 0px;opacity: 0.5;transition: opacity .3s linear;}
	h3.mask-status { color: #fff;position: absolute;margin: auto;top: 0px;left: 0px;right: 0px;bottom: 0px;text-align: center;width: 300px;height: 31px;}
	.img-thumbnail span.glyphicon-download-alt{background: #fff;color: #ff0000;cursor: pointer;padding: 5px;position: absolute;}
	.img-thumbnail img {max-width: 100%; width: 100px;}
	</style>
  </head>
  <body>
    <div class="container">
		<div class="row">
			<center><h2>Download File Output</h2></center>
		</div>
		
		<br />
		
		<div class="row">
			<?php				
				$design_id = $_GET['key'];
				$key = $_GET['key'];
				$position = $_GET['view'];
				$is_admin = 0;
				
				include_once ROOT .DS. 'includes' .DS. 'functions.php';				
				
				$dg = new dg();			
				$data = array();
				$chk_user = false;			
				
				if (empty($_GET['idea']))
				{
					$key		= str_replace('cart:', '', $key);
					$file 	= 'download.php';
					$chk_user 	= false;
					$cache	= $dg->cache('cart');
					$data 	= $cache->get($key);
						
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
				}
				else
				{
					$file 		= 'download_idea.php';
					if(strpos($key, 'cart:') !== false)
					{
						$key			= str_replace('cart:', '', $key);
						$cache 		= $dg->cache('cart');
						$params 		= explode(':', $key);
						$data 		= $cache->get($params[0]);
						$chk_user = false;
					}
					else
					{
						$cache 	= $dg->cache('design');
						$chk_user 	= true;
						$params 	= explode(':', $key);
						$user_id 	= $cache->get($params[0]);						
						if ($user_id != false && isset($user_id[$params[1]]) && count($user_id[$params[1]]) > 0)
						{
							$data = $user_id[$params[1]];
							if(file_exists(ROOT.DS.'cache'.DS.'design'. DS .$params[1].'.txt'))
							{
								$arrs = $cache->get($params[1]);
								foreach($arrs as $k=>$v)
								{
									$data[$k] = $v;
								}
							}
						}
						else
						{
							$cache = $dg->cache('admin');
							$params = explode(':', $key);
							$user_id = $cache->get($params[0]);
							if ($user_id != false && count($user_id[$params[1]]) > 0)
							{
								$data = $user_id[$params[1]];
								if(file_exists(ROOT.DS.'cache'.DS.'admin'. DS .$params[1].'.txt'))
								{
									$arrs = $cache->get($params[1]);
									foreach($arrs as $k=>$v)
									{
										$data[$k] = $v;
									}
								}
								$is_admin = 1;
							}
						}
					}
				}

				if( empty($data['fonts']) )
				{
					if(empty($params[1])) $params[1] = 'cart';
					$detail 			= $cache->get($params[1]);
					if($detail != null && $data != NULL)
					{
						$data 		= array_merge($detail, $data);
					}
				}
				if ( isset($data['vectors']) || isset($data['vector']) )
				{
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

					if(isset($data['vectors']))
					{
						$vectors = $data['vectors'];
					}
					else
					{
						$vectors = $data['vector'];
					}
					if(is_string($vectors))
					{
						$vectors = json_decode($vectors);
					}
					elseif(is_array($vectors))
					{
						$vectors = json_decode(json_encode($vectors));
					}
					
					if (isset($vectors->$position))
					{
						$views = (array) $vectors->$position;
						if (count($views) == 0)
							$data = array();
					}
					else
					{
						$data = array();
					}
				}
				
				$file = $dg->url().'tshirtecommerce/'.$file;
				
				$design_url = $dg->url().'tshirtecommerce/design.php?key='.$key.'&view='.$position;
				if(isset($session_id))
				{
					$design_url .= '&session_id='.$session_id;
				}

				if ( count($data) > 0)
				{
					// get product design
					$check = true;
					$products = $dg->getProducts();
					
					for($i=0; $i<count($products); $i++)
					{
						$product_a = $products[$i];
						if ( isset($data['product_id']) )
							$product_id 		= $data['product_id'];
						else if ( isset ($data['item']['product_id']) )
							$product_id 		= $data['item']['product_id'];
						else
							$product_id			= 0;
							
						if ($products[$i]->id == $product_id)
						{
							$product	 = $products[$i];
							break;
						}
					}
					
					// call store
					$items			= $vectors->$position;
					$items			= json_decode ( json_encode($items), true);
					if(count($items))
					{
						$qty = 1;
						if( isset($data['item']) && isset($data['item']['qty']) )
						{
							$qty = (int) ($data['item']['qty']/10);
							if($data['item']['qty'] % 10 > 0)
							{
								$qty = $qty + 1;
							}									
						}
						if($qty < 1) $qty = 1;
						$store_ids = array();
						foreach($items as $i => $item)
						{
							if (isset($item['clipar_type']) && isset($item['price']) && empty($item['clipar_paid']))
							{
								if(is_string($item['file']))
									$item_file = $item['file'];
								else
									$item_file = '';
								
								$store_ids[$item['clipart_id']] = array(
									'id'	=> $item['clipart_id'],
									'title'	=> $item['title'],
									'thumb'	=> $item['thumb'],
									'file'	=> $item_file,
									'price'	=> $item['price'],
								);
							}
						}
						
						// check clipart of store
						if (count($store_ids))
						{
							$payment = true;
							
							$settings 	= $dg->getSetting();
							if( empty($settings->store->api) || (isset($settings->store->api) && $settings->store->api == '') || (isset($settings->store->verified) && $settings->store->verified ==0) )
							{
								echo '<p class="alert alert-danger">Your order using premium design of <a href="'.MAIN_STORE_URL.'" target="_blank">9file Store</a> but you missing setup active this site. <br />Please go to admin page of your site and find menu <strong>Product Designer > Imports</strong> and active store after download file output.</p>';
							}
							else
							{
								$api 		= $settings->store->api;								
								$html 		= '';
								$credits	= 0;
								$str_ids	= '';
								foreach($store_ids as $art)
								{
									if ($art['price'] > 0)
									{
										$credits 	= $art['price'] * $qty;
									}
									if($str_ids == '')
									{
										$str_ids = $art['id'];
									}
									else
									{
										$str_ids = $str_ids.'_'.$art['id'];
									}
								}
							}
						}
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
							
								$zoom = (float)$sizes_cm['height'] / (float)$sizes_px['height'];
								$check = false;
							}
						}
					}
					
					if ($check === true)
					{
						echo '<div class="col-md-12 alert alert-danger" role="alert"><strong>Product Not Found!</strong></div>';
						return false;
					}
					
					if (is_string($data['images']))
					{
						$images = str_replace('\"', '"', $data['images']);
						$data['images'] = json_decode($images, true);
					}
					if (count($data['images']))
						$data['images'] = json_decode ( json_encode($data['images']), true );
				?>
				
				<style type="text/css" media="print">
					@page { size: <?php echo (float)$sizes_cm['width']*10; ?>mm <?php echo (float)$sizes_cm['height']*10; ?>mm; margin: 0;}
				</style>
				<div class="col-sm-6 col-md-6">
					<?php 
					if(isset($pages)) {
						$page_title = 'Page';
						if(isset($design->page_title))
							$page_title = $design->page_title;
					?>
						<center>
							<h4>Downloading <?php echo $page_title; ?> <?php echo $page_number; ?></h4>
							<br />
							<div class="btn-group" role="group">
								<a href="<?php echo $design_url; ?>&page=1" class="btn btn-default <?php if($page_number == 1) echo 'active'; ?>">1</a>
								<?php foreach($pages as $page_i => $page) { ?>
								<a href="<?php echo $design_url; ?>&page=<?php echo $page_i; ?>" class="btn btn-default <?php if($page_number == $page_i) echo 'active'; ?>"><?php echo $page_i; ?></a>
								<?php } ?>
							</div>
						</center>
					<?php } ?>

					<?php if (isset($data['images'][$position]) && $data['images'][$position] != '') { ?>
					<center>
					<img src="<?php echo $data['images'][$position]; ?>" class="img-responsive" alt="Responsive image">
					</center>
					<?php }else{ ?>
					<img src="<?php echo $data['image']; ?>" class="img-responsive" alt="Responsive image">
					<?php } ?>
					
					
					<?php
					$download_svg = $file.'?key='.$_GET['key'].'&view='.$position.'&type=svg&download=1&is_admin='.$is_admin;
					$download_png = $file.'?key='.$_GET['key'].'&view='.$position.'&type=png&is_admin='.$is_admin;
					$download_pdf = $file.'?key='.$_GET['key'].'&view='.$position.'&type=pdf&is_admin='.$is_admin;
					if(isset($pages) && isset($page_number))
					{
						$download_svg .= '&page='.$page_number;
						$download_png .= '&page='.$page_number;
						$download_pdf .= '&page='.$page_number;
					}
					if($payment == false)
					{
					?>
					<span style="display:none;" id="download-png"></span>
					<hr />
					<center>Click to download: 						
						<a href="<?php echo $download_svg; ?>"><strong>SVG</strong></a>
						 or 
						<a href="#" onclick="window.print();"><strong>PDF</strong></a>						
						 or 
						<a href="#" onclick="downloadPNG('<?php echo $position; ?>')"><strong>PNG</strong></a>
						
						<hr />
						<div style="text-align: left;">
							<strong>Note:</strong>
							<ol style="padding-left: 20px;">
								<li>Download file PDF only works on Chrome.</li>
								<li>Download file PNG only support file size < 2MB. If file is large, please download PDF.</li>
							</ol>
						</div>
						<br />
						<a href="https://youtu.be/yJ9qMW28O_Q" target="_blank" class="btn btn-primary">View Video Guide</a>
						
					</center>
					<?php }else{$download_pdf = ''; } ?>
					
				</div>
				
				<div class="col-sm-6 col-md-6">
					<div class="panel panel-default">
						<div class="panel-heading">Design detail <small class="text-danger">(Click font name to download and install font to your computer)</small></div>
						<div class="panel-body" style="max-height: 450px;overflow: auto;">
							<p>
								<strong>Area Design: </strong>
								<br />
								<div class="row">
									<div class="col-md-3">Width: <strong><?php echo number_format((float)$sizes_cm['width'], 2); ?></strong>CM</div>
									<div class="col-md-3">Height: <strong><?php echo number_format((float)$sizes_cm['height'], 2); ?></strong>CM</div>
									<div class="col-md-3">Top: <strong><?php echo number_format(((float)$sizes_px['top'] * $zoom), 2); ?></strong>CM</div>
									<div class="col-md-3">Left: <strong><?php echo number_format(((float)$sizes_px['left'] * $zoom), 2); ?></strong>CM</div>
								</div>
								<hr />
							</p>
							
							<?php 
							if (isset($data['print']) && isset($data['print']['sizes']) && $data['print']['sizes'] != '') {
								$print_size = json_decode($data['print']['sizes'], true);
								$print_colors = json_decode($data['print']['colors'], true);
								
								if (isset($print_size[$position])) {
							?>
							<p>
								<strong>Size Design:</strong>
								<br />
								<div class="row">
									
									<?php if ( isset($print_size[$position]['width']) ) { ?>
									<div class="col-md-3">Width: <strong><?php echo number_format($print_size[$position]['width'], 2); ?></strong>CM</div>
									<?php } ?>
									
									<?php if ( isset($print_size[$position]['height']) ) { ?>
									<div class="col-md-3">Height: <strong><?php echo number_format($print_size[$position]['height'], 2); ?></strong>CM</div>
									<?php } ?>
									
									<?php if ( isset($print_size[$position]['size']) ) { ?>
									<div class="col-md-3">Page: <strong>A<?php echo $print_size[$position]['size']; ?></strong></div>
									<?php } ?>
								</div>
								
								<?php if (count($print_colors) && isset($print_colors[$position])) { ?>
								<br />
								<p>									
									<?php foreach($print_colors[$position] as $p_color) { if($p_color == 'none' || strlen($p_color)>6) continue; ?>
										<button type="button" style="background-color:#<?php echo $p_color; ?>" class="btn btn-default btn-xs"><?php echo $p_color; ?></button>
									<?php } ?>
									
								</p>
								<?php } ?>
								
								<hr />
							</p>
							<?php }} ?>
							<?php
							
							$items			= $vectors->$position;
							$items			= json_decode ( json_encode($items), true);
							
							if (count($items))
							{
								$design_zoom = 1;
								if(isset($data['design']))
								{
									$data_zoom = json_decode(str_replace('\\"', '"', $data['design']), true);
									$design_zoom = $data_zoom['width']/$data_zoom['old_width'];
								}
								foreach($items as $item)
								{
									echo '<div class="row">';
									$item['svg'] = str_replace('\\"', '"', $item['svg']);
									
									preg_match_all("/xlink:href=\"(.*)\">/i", $item['svg'], $src); // add allow download image upload.
									echo '<div class="col-md-6">';
									if ($item['type'] == 'text')
									{
										$font = $item['fontFamily'];
										echo "<link href='https://fonts.googleapis.com/css?family=".str_replace(' ', '+', $font)."' rel='stylesheet' type='text/css'>";
										echo '<p><strong>Add text:</strong></p>';
										
										if(strpos($item['svg'], '<tspan dy="0" x="50%"></tspan>') > 0)
										{
											$svg = strstr($item['svg'], '<tspan dy="0" x="50%"></tspan>');
											
											$repsvg = '';
											$svgs = explode('<tspan dy="24" x="50%">', $svg);
											if(count($svgs))
											{
												$check = false; 
												foreach($svgs as $val)
												{ 
													if(strpos($val, 'defs') == false)
													{
														if($check)
														{
															$repsvg .= '<tspan dy="24" x="50%">'.strip_tags($val).'</tspan>';
														}
														elseif(strip_tags($val) != '')
														{
															$check = true;
															$repsvg = '<tspan dy="0" x="50%">'.$val.'</tspan>';
														}
													}else
													{
														$repsvg .= $val;
													}
												}
												
												$item['svg'] = str_replace($svg, $repsvg, $item['svg']);
												$item['svg'] = str_replace('</tspan></tspan>', '</tspan>', $item['svg']);
											}
										}
										
										echo '<p style="position: relative;"><a href="javascript:void(0);" onclick="downloadSVG(this)" title="click to download">'.$item['svg'].'</a></p>';
										
										echo '<p>Font name: <a title="click here to download font" target="_blank" href="https://www.google.com/fonts/specimen/'.str_replace(' ', '+', $font).'"><strong>'.$font.'</strong></a></p>';
										
										if (isset($item['color']))
											echo '<p>Color: <strong>'.$item['color'].'</strong></p>';
										
										if (isset($item['outlineC']) && isset($item['outlineW']))
											echo '<p>Outline: <strong>'.$item['outlineC'].' '.number_format(($item['outlineW'] * $zoom), 2).'CM</strong></p>';
									}
									else if($item['type'] == 'team')
									{
										echo '<p><strong>Add Team:</strong></p>';

										if(isset($src[1][0]) && strpos($src[1][0], '://')) // add allow download image upload.
											echo '<p class="img-thumbnail" style="position: relative;"><span class="glyphicon glyphicon-download-alt" onclick="downloadImage(\''.$src[1][0].'\')"></span><a href="javascript:void(0);" onclick="downloadSVG(this)" title="click to download">'.$item['svg'].'</a></p>';
										else
											echo '<p class="img-thumbnail style="position: relative;"><a href="javascript:void(0);" onclick="downloadSVG(this)" title="click to download">'.$item['svg'].'</a></p>';
									}
									else
									{
										echo '<p><strong>Add art:</strong></p>';
										if(strpos('<svg', $item['svg']) > 0)
										{
											if(isset($src[1][0]) && strpos($src[1][0], '://')) // add allow download image upload.
												echo '<p class="img-thumbnail" style="position: relative;"><span class="glyphicon glyphicon-download-alt" onclick="downloadImage(\''.$src[1][0].'\')"></span><a href="javascript:void(0);" onclick="downloadSVG(this)" title="click to download">'.$item['svg'].'</a></p>';
											else
												echo '<p class="img-thumbnail" style="position: relative;"><a href="javascript:void(0);" onclick="downloadSVG(this)" title="click to download">'.$item['svg'].'</a></p>';
										}
										else
										{
											echo '<p class="img-thumbnail" style="position: relative;"><span class="glyphicon glyphicon-download-alt" onclick="downloadImage(\''.$item['thumb'].'\')"></span><img src="'.$item['thumb'].'" alt=""></p>';
										}
									}
									
									if (isset($item['colors']) && is_array($item['colors']) && count($item['colors']) > 0)
									{
										echo '<p>';
										$colors = $item['colors'];
										foreach($colors as $itemColor)
										{
											$itemColor = str_replace('#', '', $itemColor);
											
											if($itemColor == 'none'  || strlen($itemColor)>6) continue;
											echo '<button type="button" style="background-color:#'.$itemColor.'" class="btn btn-default btn-xs">#'.$itemColor.'</button>';
											if(isset($item['pattern']))
											{
												if(isset($item['pattern']['list_name']))
												{
													echo '<strong class="text-warning">'.$item['pattern']['list_name'].': '.$item['pattern']['name'].'</strong>';
												}
											}
										}
										
										if(isset($item['pattern'])&& isset($item['pattern']['file']))
										{
											if(isset($item['pattern']['list_name']))
											{
												echo '<strong class="text-warning">'.$item['pattern']['list_name'].':</strong> <a href="'.$item['pattern']['file'].'" target="_blank" title="click download file"><strong>'.$item['pattern']['name'].'</strong></strong>';
											}
										}
										echo '</p>';
									}
									echo '</div>';
									echo '<div class="col-md-6">';
									echo '<h5>Positions</h5>';
									echo '<p>Width: <strong>'.number_format(((float)$item['width'] * $zoom * $design_zoom), 2).'CM</strong></p>';									
									echo '<p>Height: <strong>'.number_format(((float)$item['height'] * $zoom * $design_zoom), 2).'CM</strong></p>';									
									echo '<p>Top: <strong>'.number_format(((float)$item['top'] * $zoom * $design_zoom), 2).'CM</strong></p>';									
									echo '<p>Left: <strong>'.number_format(((float)$item['left'] * $zoom * $design_zoom), 2).'CM</strong></p>';

									if (empty($item['rotate'])) $item['rotate'] = 0;
									echo '<p>Rotate: '.$item['rotate'].'</p>';
									
									echo '</div>';
									echo '</div>';
									echo '<hr />';
								}
							}
							?>
							</div>
						</div>
					</div>
				</div>
			<?php 
				}
				else
				{
					echo '<div class="col-md-12 alert alert-danger" role="alert"><strong>Design Not Found!</strong></div>';
				?>
					<?php 
					if(isset($pages)) {
						$page_title = 'Page';
						if(isset($design->page_title))
							$page_title = $design->page_title;
					?>
						<center>
							<h4>Downloading <?php echo $page_title; ?> <?php echo $page_number; ?></h4>
							<br />
							<div class="btn-group" role="group">
								<a href="<?php echo $design_url; ?>&page=1" class="btn btn-default <?php if($page_number == 1) echo 'active'; ?>">1</a>
								<?php foreach($pages as $page_i => $page) { ?>
								<a href="<?php echo $design_url; ?>&page=<?php echo $page_i; ?>" class="btn btn-default <?php if($page_number == $page_i) echo 'active'; ?>"><?php echo $page_i; ?></a>
								<?php } ?>
							</div>
						</center>
					<?php } ?>
				<?php 
				}	
			?>
		</div>
	</div>
	
	<script src="assets/js/jquery.min.js"></script>
	<script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
	
	<?php if($payment == false) { ?>
	<span id="download-pdf" style="display:none;"></span>

	<span id="download"></span>
	<script type="text/javascript">
		var download_pdf = '<?php echo $download_pdf; ?>';
		var download_png = '<?php echo $download_png; ?>';
	</script>
	<script type="text/javascript" src="assets/js/download.js"></script>
	<?php } ?>
	
	<!-- payment of store -->
	<?php if(isset($str_ids)) { ?>
		<div class="mask-clipart"></div>
		
		<?php if(isset($credits) && $credits > 0 && empty($_GET['e_order_id'])){ ?>
		
			<div class="panel panel-default" id="store-cliparts">
				<div class="panel-body">
					<iframe id="store-art-payment" scrolling="no" frameborder="0" noresize="noresize" width="100%" height="600px" src="<?php echo MAIN_STORE_URL; ?>api/index/<?php echo $api; ?>/<?php echo $str_ids; ?>/<?php echo $design_id; ?>"></iframe>
				</div>
				<div class="panel-body">
					Your order using premium design of <a href="<?php echo MAIN_STORE_URL; ?>" target="_blank">9file Store</a>. Please payment to download file output of this order.
				</div>
			</div>
		
		<?php }elseif(isset($credits) && $credits > 0 && isset($_GET['e_order_id'])){ ?>
		
			<h3 class="mask-status">Creating File Output...</h3>
			
			<script type="text/javascript">
				var data = {};
				data.e_order_id = '<?php echo $_GET['e_order_id']; ?>';
				data.params 	= '<?php echo $_GET['params']; ?>';
				data.api 		= '<?php echo $api; ?>';
				jQuery.ajax({
					type: "POST",
					url: '<?php echo $url_ajax_store ?>?action=store_payment_art',
					data: data,
				}).done(function(response) {
					location.reload();
					return false;
				});
			</script>
		
		<?php }else{ ?>
			<h3 class="mask-status">Creating File Output...</h3>
			
			<script type="text/javascript">
				jQuery.ajax({
					url: '<?php echo $url_ajax_store ?>?action=store_ajax_key&api_key=<?php echo $api; ?>&arts=<?php echo $str_ids; ?>&order_id=<?php echo $design_id; ?>',
				}).done(function(response) {
					if(response != '')
					{
						var data = eval ("(" + response + ")");
						if(typeof data.error != 'undefined')
						{
							if(data.error == 0)
							{
								location.reload();
								return false;
							}
							else
							{
								alert(data.msg);
							}
						}
						else
						{
							alert('Can not create file output');
						}
					}
					else
					{
						alert('Can not create file output');
					}
				});
			</script>
		<?php } ?>
		
	<?php } ?>
  </body>
</html>