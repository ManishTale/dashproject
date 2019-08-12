<?php
/**
* Load layout of product in page product detail
*/
class tshirtecommerce_package
{
	function __construct()
	{
		global $TSHIRTECOMMERCE_ROOT, $P9f;
		$file 	= $TSHIRTECOMMERCE_ROOT.'/platforms/wordpress/init.php';
		if( file_exists($file) )
		{
			include_once($file);

			$options = array(
				'PLUGIN_PATH' => dirname(__FILE__)
			);
			$P9f->package = new P9f_addons($options);
		}
	}
}
new tshirtecommerce_package();
?>