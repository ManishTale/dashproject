<?php
/**
 * @author 		tshirtecommerce - www.tshirtecommerce.com
 * @date  		May 24, 2017
 * @version 	1.3
 * @copyright  	Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license	   	GNU General Public License version 2 or later; see LICENSE
 *
 */
/* check post data */
error_reporting(0);
define('ROOT', dirname(__FILE__));
define('DS', DIRECTORY_SEPARATOR);
if(isset($_POST) && count($_POST) > 0)
{
	$data = $_POST;
	
	$result 	= array();
	foreach ($data as $index => $value)
	{
		$file 	= $index.'.png';
		$path 	= ROOT .DS. 'uploaded' .DS. 'cache-images' .DS. $file;
		if(file_exists($path))
		{
			unset($data[$index]);
			$result[$index] = $file;
		}
	}
	setcookie('data_design_img', json_encode($data), time() + 3000 );
	echo json_encode($result);
	exit();
}
header("Content-Type: image/png");
include_once ROOT .DS. 'includes' .DS. 'functions.php';
$dg 	= new dg();

$params 	= explode('images.php/', $_SERVER['REQUEST_URI']);
if(empty($params[1])) exit();
$index 	= str_replace('.png', '', $params[1]);

if(empty($_COOKIE['data_design_img'])) exit();
$data = json_decode($_COOKIE['data_design_img'], true);

if( empty($data[$index]) ) exit();

$items = explode('/', $data[$index]);
$options = array();
for($i=0; $i<count($items); $i++)
{
	$temp = explode('=', $items[$i]);
	$options[$temp[0]] = $temp[1];
}
if(empty($options['data'])) exit();

/* check if exists */
$file 	= $index.'.png';
$path 	= ROOT .DS. 'uploaded' .DS. 'cache-images' .DS.$file;
if(file_exists($path))
{
	$content 	= file_get_contents($path);
	echo $content;
	exit;
}

$str = base64_decode($options['data']);
$json = str_replace("'", '"', $str);
$design = json_decode($json, true);

/* create image */
$im 		= imagecreatetruecolor($options['width'], $options['height']);
imagesavealpha($im, true);
$color 	= imagecolorallocatealpha($im, 0, 0, 0, 127);
imagefill($im, 0, 0, $color);

$items = array_reverse($design);

foreach ($items as $item) 
{
	if($item['id'] == 'area-design')
	{
		$thumb = base64_decode($options['design']);
		if( stripos($thumb, 'http') == 0)
		{
			$content 	= $dg->openURL($thumb);
			if($content === false ) continue;
		}
		else
		{
			$content 	= $thumb;
		}
		$size 	= getimagesizefromstring($content);
		$image1 	= imagecreatefromstring($content);
		
		$str 		= base64_decode($options['area']);
		$str 		= str_replace("'", '"', $str);
		$area 	= json_decode( $str, true );
		$width 	= (int) $area['width'];
		$height 	= (int) $area['height'];
		$top 		= (int) $area['top'];
		$left 	= (int) $area['left'];

		if($width > $height)
		{
			$new_width 	= ($size[0] * $height)/$size[1];
			$left 	= $left + ($width - $new_width)/2;
			$width 	= $new_width;
		}
		else
		{
			$new_height 	= ($size[1] * $width)/$size[0];
			$top 			= $top + ($height - $new_height)/2;
			$height 		= $new_height;
		}
	}
	else
	{
		$src 		= $item['img'];
		if( stripos($src, 'http') )
		{
			$content 	= $dg->openURL($src);
			if($content === false ) continue;

			$size 	= getimagesizefromstring($content);
			$image1 	= imagecreatefromstring($content);
		}
		else
		{
			$temp = explode('tshirtecommerce', $src);
			if(count($temp) > 1)
			{
				$file = ROOT .DS. str_replace('/', DS, $temp[1]);
			}
			else
			{
				$file = ROOT .DS. str_replace('/', DS, $temp[0]);
			}
			$file = str_replace(DS.DS.DS, DS, $file);

			$size		= getimagesize($file);
			if($size["mime"] == 'image/gif')
			{
				$image1 = imagecreatefromgif($file);
			}
			elseif($size["mime"] == 'image/jpeg')
			{
				$image1 = imagecreatefromjpeg($file);
			}
			elseif($size["mime"] == 'image/png')
			{
				$image1 = imagecreatefrompng($file);
			}
			else
			{
				continue;
			}

			$width 	= (int) $item['width'];
			$height 	= (int) $item['height'];
			$top 		= (int) $item['top'];
			$left 	= (int) $item['left'];
		}
	}
	if(isset($image1))
	{	
		imagecopyresampled($im, $image1, $left, $top, 0, 0, $width, $height, $size[0], $size[1]);
		imagedestroy($image1);
	}
}
imagepng($im, $path);
imagepng($im);
imagedestroy($im);
?>