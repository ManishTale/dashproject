<?php
/**
 * Create vectors of file upload when customers upload in page product detail.
 */
if ( empty($_POST['data']) || empty($_POST['design']) ) return '';

$data 	= json_decode($_POST['data'], true);
$design 	= $_POST['design'];
$area 	= json_decode($design['design'], true);

$url 		= $dg->url();
$src 		= $url . imageURL($data['item']['thumb']);

$svg 	= '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="'.$area['width'].'" height="'.$area['height'].'" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink"><g>'
		.'<image x="0" y="0" width="'.$area['width'].'" height="'.$area['height'].'" preserveAspectRatio="none" xlink:href="'.$src.'"></image>'
	.'</g></svg>';

$item 	= array(
	'id' 			=> 0,
	'type' 		=> 'clipart',
	'upload' 		=> '1',
	'change_color' 	=> 0,
	'confirmColor' 	=> true,
	'edit' 		=> false,
	'lockedProportion' => 0,
	'remove' 		=> true,
	'rotate' 		=> 0,
	'file' 		=> array('type'=>'image'),
	'file_name' 	=> $data['item']['title'],
	'title' 		=> $data['item']['title'],
	'thumb' 		=> $src,
	'url' 		=> $src,
	'svg' 		=> $svg,
	'width' 		=> $area['width'].'px',
	'height' 		=> $area['height'].'px',
	'left' 		=> $area['area_left'].'px',
	'top' 		=> $area['area_top'].'px',
	'zIndex' 		=> 6,
);

$vectors = array(
	'front' => array()
);
$vectors['front'][] = $item;

$rowid	= md5(time() . rand());
$cache 	= $dg->cache('cart');
$designs	= array(
	'print' 	=> array(
		'colors'	=> array(),
		'sizes' 	=> $design['sizes'],
	),
	'cliparts' 	=> '',
	'color' 	=> $design['colors'],
	'images' 	=> $src,
	'vectors' => json_encode($vectors),
	'fonts' => '',
	'attributes' => '',
	'options' => array()
);
$cache->set($rowid, $designs);
echo $rowid;
exit();
?>