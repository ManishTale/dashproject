<?php
if ( ! defined('ROOT') ) exit('No direct script access allowed');
include_once ROOT .DS. 'includes' .DS. 'config.php';
if( file_exists(ROOT .DS. 'admin' .DS. 'session.php') )
{
	include_once ROOT .DS. 'admin' .DS. 'session.php';
}
if ( isset($_GET['session_id']) )
{
	$session_id = $_GET['session_id'];
	$_COOKIE['designer_session_id'] = $session_id;
	session_id($session_id);			
}
session_start();

include_once ROOT .DS. 'includes' .DS. 'functions.php';
include_once ROOT .DS. 'includes' .DS. 'addons.php';

// call language
$dg = new dg();
$lang = $dg->lang();

// call products
$products	= $dg->getProducts();
$product	= $products[0];
if (isset($_GET['product']))
{
	$product_id = $_GET['product'];
}

if (isset($_GET['cart_id']))
{
	$cache 	= $dg->cache('cart');
	$design = $cache->get($_GET['cart_id']);
	if ($design != null && isset($design['item']) && isset($design['item']['product_id']))
	{
		$product_id = $design['item']['product_id'];
	}
}
elseif(isset($_GET['design']))
{
	$ids = explode(':', $_GET['design']);
	if(isset($ids[2]))
		$product_id = $ids[2];
}

if(isset($product_id)){
	for($i=0; $i< count($products); $i++)
	{
		if ($product_id == $products[$i]->id)
			$product = $products[$i];
	}
}

// get attribute
if (isset($product->attributes->name))
{
	$product->attribute = $dg->getAttributes($product->attributes);
}
else
{
	$product->attribute = '';
}
if (!isset($product->min_order)) $product->min_order = 1;
$product->attribute .= $dg->quantity($product->min_order, lang('quantity', true), lang('min_quantity', true));

// get getSetting
$settings			= $dg->getSetting();
$settings->site_url = $dg->url();

if($product->image == '')
{
	$product->image = $settings->site_url .'tshirtecommerce/assets/images/photo.png';
}

$dg->settings		= $settings;

// fix link with www
if (strpos($_SERVER['HTTP_HOST'], 'www.') !== false)
{
	$temp = explode('www.', $settings->site_url);
	if (count($temp) == 1)
	{
		$settings->site_url = str_replace('http://', 'http://www.', $settings->site_url);
	}
}
else
{
	$settings->site_url = str_replace('//www.', '//', $settings->site_url);
}

// check session
if (isset($_SESSION['is_logged']) && $_SESSION['is_logged'] !== false)
{
	$is_logged = $_SESSION['is_logged'];	
	$user = md5($is_logged['id']);
}
else
{
	$user = 0;
}
$dg->product	= $product;
// load add-on
$addons = new addons();
?>