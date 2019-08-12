<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: November 26 2015; December 01 2015
 *
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
*/
if(isset($params['data']['variation_id']))
{
	$dg		= $GLOBALS['dg'];
	$price 	= $dg->openURL($dg->url().'wp-admin/admin-ajax.php?action=woo_products_variation&variation_id='.$params['data']['variation_id']);
	if(is_numeric($price) && $price > 0)
	{
		$product = $params['product'];
		$product->price = $price;
		$GLOBALS['product'] = $product;
	}	
}
?>