<?php
function pixaBay($search = '', $page = 1, $category = '', $colors = '', $per_page = 30)
{
	/**
	* USE: pixaBay('9687241-3b579a4df514e0aa1cc5ce32e', 'en', 'all', 'all', 0, 0, 'popular', 1, 20, 'fashion', 'grayscale', 'yellow flowers');
	*
	* OPTIONS:
	* $api_key: 9687241-3b579a4df514e0aa1cc5ce32e
	* $lang: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
	* $image_type: "all", "photo", "illustration", "vector"
	* $orientation: "all", "horizontal", "vertical" 
	* $category: fashion, nature, backgrounds, science, education, people, feelings, religion, health, places, animals, industry, food, computer, sports, transportation, travel, buildings, business, music
	* $min_width: 0
	* $min_height: 0
	* $colors: (multi select) "grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"
	* $order: "popular", "latest" 
	* $page: 1
	* $per_page: 3 -> 200
	* $search: search by string.
	*
	**/
	
	$api_key 		= '2990506-2ece5363a63c8f21a514ba37e';
	$lang 		= 'en';
	$image_type 	= 'photo';
	$orientation 	= 'all';
	$min_width 		= 0;
	$min_height 	= 0;
	$order 		= 'popular'; 

	$url = 'https://pixabay.com/api/?key='.$api_key.'&lang='.$lang.'&image_type='.$image_type.'&orientation='.$orientation.'&min_width='.$min_width.'&min_height='.$min_height.'&order='.$order.'&page='.$page.'&per_page='.$per_page;
	if($search != '')
		$url .= '&q='.urlencode($search);
	
	if($category != '')
		$url .= '&category='.$category;
	
	if($colors != '')
		$url .= '&colors='.$colors;
	
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL,$url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
	$result = curl_exec($ch);
	curl_close($ch);
	
	$res = json_decode($result, true);
	
	return $res;
}
?>