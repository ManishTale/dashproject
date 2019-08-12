<?php
define( 'MAIN_STORE_URL', 'https://9file.net/');

define( 'URL_MINIFY', MAIN_STORE_URL . 'minify/index.php');
define( 'URL_GALLERY', MAIN_STORE_URL . 'gallery/');

define( 'DEVELOPER', 0);

if(DEVELOPER == 1)
{
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);
}
else
{
	error_reporting(0);
}
date_default_timezone_set('America/Los_Angeles');
?>