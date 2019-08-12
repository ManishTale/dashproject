<?php
error_reporting(E_ALL);

$handle = curl_init();
 
$url = "https://api.us-sandbox.afterpay.com/v1/orders";
 
// Set the url
curl_setopt($handle, CURLOPT_URL, $url);
// Set the result output to be a string.
curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);
 
$output = curl_exec($handle);
 
curl_close($handle);
 
echo $output;

echo 'end';