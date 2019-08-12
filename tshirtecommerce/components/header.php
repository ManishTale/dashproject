<?php
if ( ! defined('ROOT') ) exit('No direct script access allowed');
?>
<meta charset="utf-8" />
<meta http-equiv="Content-type" content="text/html; charset=utf-8">
<title><?php echo setValue($settings, 'site_name', 'T-Shirt eCommerce'); ?></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1, minimum-scale=0.5, maximum-scale=1.0"/>
<meta content="<?php echo setValue($settings, 'meta_description', 'T-Shirt eCommerce'); ?>" name="description" />
<meta content="<?php echo setValue($settings, 'meta_keywords', 'T-Shirt eCommerce'); ?>" name="keywords" />
<script type="text/javascript">
<?php
if ( isset($_GET['lang']) ) $lang_active = $_GET['lang'];
elseif(isset($_COOKIE['lang'])) $lang_active = $_COOKIE['lang'];
else $lang_active = '';
?>
var lang_active = '<?php echo $lang_active; ?>';
var baseURL = '';
var mainURL = '<?php echo $settings->site_url; ?>';
var siteURL = '<?php echo str_replace('//tshirtecommerce', '/tshirtecommerce', $settings->site_url.'tshirtecommerce/'); ?>';
var urlCase = '<?php echo str_replace('//tshirtecommerce', '/tshirtecommerce', $settings->site_url.'tshirtecommerce/'); ?>image-tool/thumbs.php';
var user_id = '<?php echo (is_array($user) ? (isset($user['id']) ? $user['id'] : 0) : $user); ?>';
var currency_symbol = '<?php echo setValue($settings, 'currency_symbol', '$'); ?>';
var parent_id = '<?php if (isset($_GET['parent'])) echo $_GET['parent']; else echo 0; ?>';
var domain = '<?php echo $_SERVER['HTTP_HOST']; ?>';
var urlDesign = '';	
</script>

<!-- js of CMS -->
<?php if (isset($_GET['lightbox'])) { ?>
<style>.btn-save-design, .add_item_mydesign, #dg-share{display:none!important;}</style>
<script type="text/javascript">
	var wooSave = true;
	var admin_design_idea = 1;
</script>
<?php } ?>

<script type="text/javascript">
	<?php 
	$min_order 			= setValue($product, 'min_order', 1);
	$max_order 			= setValue($product, 'max_oder', 9999);
	$site_upload_max 	= setValue($settings, 'site_upload_max', 10);
	$site_upload_min 	= setValue($settings, 'site_upload_min', 0.05);
	
	$min_order	= (int) $min_order;
	$max_order	= (int) $max_order;
	if ($min_order < 1)
		$min_order = 1;
	
	if ($max_order < $min_order)
		$max_order = 9999;
	
	if ($site_upload_min < 0)
		$site_upload_min = 0.05;
	
	if ($site_upload_max < 0)
		$site_upload_max = 10;
	
	?>
	var min_order = <?php echo $min_order; ?>;
	var max_order = <?php echo $max_order; ?>;
	var product_id = '<?php echo $product->id; ?>';
	var print_type = '<?php echo setValue($product, 'print_type', 'screen'); ?>';
	var uploadSize = [];
	uploadSize['max']  = <?php echo $site_upload_max; ?>;
	uploadSize['min']  = <?php echo $site_upload_min; ?>;
</script>

<?php
echo $addons->view('lang-js');
frontend_header($addons);
echo $dg->theme('header', $product);
$addons->theme_active = $dg->theme_active;
?>
<script type="text/javascript">
if (typeof window.parent.urlDesign == 'undefined' || window.parent.urlDesign == '')
{
	jQuery('#designer-alert').html(lang.text.setup).css('display', 'block');
}
else
{
	urlDesign = window.parent.urlDesign;
}

/* check product variation of woocommerce */
var variation_id = 0;
var variation_active_id = 0;

<?php if( isset($_GET['variation_id']) ){ ?>
var variation_id = '<?php echo $_GET['variation_id']; ?>';
var variation_active_id = '<?php echo $_GET['variation_id']; ?>';
<?php } ?>

jQuery(document).on('form.addtocart.design', function(event, datas){
	if(variation_active_id != 0){
		datas.variation_id = variation_active_id;
	}
});

var variation_attributes = '';
<?php if(isset($_GET['attributes'])){ ?>
variation_attributes = '<?php echo $_GET['attributes']; ?>';
<?php } ?>

<?php if( isset($_GET['light_box']) ){ ?>
var load_idea_id = 1;
var windown_light_box = 1;
jQuery(document).ready(function(){
	jQuery('body').addClass('light_box');
});
<?php } ?>
</script>