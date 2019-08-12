<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-11-26
 *
 * API
 *
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
$addons 	= $GLOBALS['addons'];
$dg 		= $GLOBALS['dg'];
$product 	= $GLOBALS['product'];
$settings	= $GLOBALS['settings'];

$check_dpi = 0;
if(isset($settings->settings_check_dpi) && $settings->settings_check_dpi == 1)
{
	$check_dpi = 1;
}

$printing_method = '';
if (isset($product->print_type) && $product->print_type != '')
{
	$printing = $dg->getPrintingType($product->print_type);
	
	if ( isset($printing->price_type) )
	{
		$printing_method = $printing->price_type;
	}		
}

// setting DPI of file upload
$dpioutput			= 72;
$dpioutput_default	= 72;
if(empty($product->dpioutput))
{
	if(isset($settings->dpioutput))
	{
		$dpioutput 			= $settings->dpioutput;
		$dpioutput_default 	= $settings->dpioutput;
	}
}
else
{
	$dpioutput = $product->dpioutput;
}

// setting change color of photo
if(isset($settings->photo_color) && $settings->photo_color == 0)
{
	$change_photo = 0;
}
else
{
	$change_photo = 1;
}
$photo_color_default = '#000000';
if(isset($settings->photo_color_default))
{
	$photo_color_default = $settings->photo_color_default;
}

/* update attribute when choose in page product detail */
if(isset($_GET['options']))
{
	$attr_options = $_GET['options'];
}
else
{
	$attr_options = '';
}

$min_order 			= setValue($product, 'min_order', 1);
$max_order 			= setValue($product, 'max_oder', 9999);
$site_upload_max 	= setValue($settings, 'site_upload_max', 10);
$site_upload_min 	= setValue($settings, 'site_upload_min', 0.05);

$min_order	= (int) $min_order;
$max_order	= (int) $max_order;
if ($min_order < 1) $min_order = 1;

if ($max_order < $min_order) $max_order = 9999;

if ($site_upload_min < 0) $site_upload_min = 0.05;

if ($site_upload_max < 0)$site_upload_max = 10;

$store		= $settings->store;
$is_store = false;
if (isset($store->enable))
{
	$is_store = true;
}

/* change product colors */
$change_bg_product 	= 'img';
if(isset($product->design) && isset($product->design->change_bg))
{
	$change_bg_product 	= 'area';
}
?>
<script type="text/javascript">
var change_bg_product = '<?php echo $change_bg_product; ?>';
var min_order = <?php echo $min_order; ?>;
var max_order = <?php echo $max_order; ?>;
var product_id = '<?php echo $product->id; ?>';
var print_type = '<?php echo setValue($product, 'print_type', 'screen'); ?>';
var uploadSize = [];
uploadSize['max']  = <?php echo $site_upload_max; ?>;
uploadSize['min']  = <?php echo $site_upload_min; ?>;
	
var addon_lang_js_design_blank = '<?php echo $addons->__('addon_lang_js_design_blank'); ?>';
var printing_method = '<?php echo $printing_method; ?>';

<?php if( isset($_GET['idea_id']) ){ ?>
var design_idea_id = '<?php echo $_GET['idea_id']; ?>';
<?php } ?>

var max_box_width = 500;
var max_box_height = 500;
<?php if(isset($product->box_width) && $product->box_width != ''){ ?>
	max_box_width = '<?php echo $product->box_width; ?>';	
<?php } ?>

<?php if(isset($product->box_height) && $product->box_height != ''){ ?>
	max_box_height = '<?php echo $product->box_height; ?>';	
<?php } ?>

var change_photo_color = '<?php echo $change_photo; ?>';
var photo_color_default = '<?php echo $photo_color_default; ?>';

var check_dpi = '<?php echo $check_dpi; ?>';
var addon_photo_size_msg = '<?php echo lang('addon_photo_size_msg'); ?>';
var addon_photo_size_cart_msg = '<?php echo lang('addon_photo_size_cart_msg'); ?>';
var dpioutput = '<?php echo $dpioutput; ?>';
var dpioutput_default = '<?php echo $dpioutput_default; ?>';

var attr_options = '<?php echo $attr_options; ?>';

<?php if($is_store) { ?>
var is_active_store = 1;
<?php } ?>
</script>