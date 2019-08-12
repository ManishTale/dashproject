<?php 

if (!defined('DS')) define('DS', DIRECTORY_SEPARATOR);

$platform = 'wordpress';

$file = dirname(dirname(__FILE__)).DS.'version.json';

if (file_exists($file)) {
	$json = json_decode(file_get_contents($file), true);
	
	if (isset($json['platforms'])) {
		$platform = $json['platforms'];
	}
}

echo $platform;
return;