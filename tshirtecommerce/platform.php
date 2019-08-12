<?php 

if (!defined('DS')) define('DS', DIRECTORY_SEPARATOR);

$platform = 'wordpress';

$file = dirname(__FILE__).DS.'version.json';

$json = json_decode(file_get_contents($file), true);

if (isset($json['platforms'])) {
	$platform = $json['platforms'];
}

echo $platform;
return;