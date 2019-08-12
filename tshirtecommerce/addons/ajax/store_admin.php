<?php
if(empty($_SESSION['is_admin']) && isset($_GET['token']))
{
	$token	= $_GET['token'];
	session_id($token);
	session_start();
	if(empty($_SESSION['is_admin']))
	{
		exit('No direct script access allowed');
	}
}

$data = array(
	'error' => 1,	
);
$settings = $dg->getSetting();
if(isset($settings->store))
{
	$store 		= $settings->store;
	if(isset($store->api) && $store->api != '' && isset($store->verified) && $store->verified == 1)
	{
		ini_set('max_execution_time', 30000);
		ini_set("memory_limit",-1);		
		include_once(ROOT .DS. 'api.php');
		$api 		= new API($store->api);
		$data	 	= $api->download();
	}
}
echo json_encode($data);
exit;
?>