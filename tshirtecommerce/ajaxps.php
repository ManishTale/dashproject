<?php 

// Only using for Prestashop
// From v 1.0.3

error_reporting(0);
@session_start();
date_default_timezone_set('America/Los_Angeles');
define('ROOT', dirname(__FILE__));
define('DS', DIRECTORY_SEPARATOR);

if (isset($_GET['type'])) {
	$type = $_GET['type'];
} else {
	$type = '';
}

require_once ROOT.DS.'includes'.DS.'functions.php';
$dg = new dg();
$lang = $dg->lang();

include_once (ROOT.DS.'includes'.DS.'addons.php');					
$addons = new addons();

require_once ROOT.DS.'includes'.DS.'functionsps.php';
$dgps = new dgps();

switch ($type) {
	case 'saveDesignAdmin':
		$dgps->saveDesignAdmin();
		break;

	default:
		break;
}

?>