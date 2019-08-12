<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-01-10
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license	   GNU General Public License version 2 or later; see LICENSE
 *
 */
error_reporting(0);
define('ROOT', dirname(__FILE__));
define('DS', DIRECTORY_SEPARATOR);
include_once ROOT .DS. 'components' .DS. 'head.php';

// check is admin
$is_admin 	= false;
if (isset($_SESSION['admin'])){
	$user 	= $_SESSION['admin'];
}elseif(isset($_SESSION['is_admin'])){
	$user 	= $_SESSION['is_admin'];
}

if (isset($user['login']) && $user['login'] == true)
{
	$is_admin 				= true;
	$user['is_admin'] 		= true;
	$_SESSION['is_logged'] 	= $user;		
}
if ($is_admin === false)
{
	echo 'Directory access is forbidden'; exit;
}
$dg->settings->themes 	= 'default';
$settings->themes 		= 'default';
$product->theme 		= 'default';
$dg->product			= $product;
$addons 				= new addons();
$addons->is_admin 		= true;
$admin_design_layout 	= true;
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<?php include_once ROOT .DS. 'components' .DS. 'header.php'; ?>
	<link type="text/css" href="assets/css/admin.css" rel="stylesheet" media="all">
	<script type="text/javascript">
		var is_admin_editor = 1;
		var add_layout = 0;
		<?php if( isset($_GET['add_layout']) ) { ?>
			add_layout = 1;
		<?php } ?>
	</script>
	<script src="<?php echo 'assets/js/design-admin.js'; ?>" type="text/javascript"></script>
</head>
<body>	
	<div id="admin-template" class="container-fluid" style="margin-top: 30px;">
		<div id="dg-wapper" class="col-md-12">
			<div class="alert alert-danger" id="designer-alert" role="alert" style="display:none;"></div>
			<div id="dg-mask" class="loading"></div>
			<div id="dg-designer">
				<?php $dg->view('tool_left'); ?>
				<?php $dg->view('too_center'); ?>
				<?php $dg->view('too_right'); ?>		
			</div>
		</div>
	</div>
	
	<!-- BEGIN confirm color of print -->
	<?php $dg->view('screen_colors'); ?>
	
	<!-- BEGIN modal -->
	<div id="dg-modal">
		<!-- BEGIN product info -->
		<?php $dg->view('modal_product_info'); ?>
		
		<!-- BEGIN product size -->
		<?php $dg->view('modal_product_size'); ?>
		
		<!-- BEGIN Login -->
		<?php $dg->view('modal_login'); ?>
		
		<!-- BEGIN products -->
		<?php $dg->view('modal_products'); ?>
		
		<!-- BEGIN clipart -->
		<?php $dg->view('modal_clipart'); ?>
		
		<!-- BEGIN Upload -->
		<?php $dg->view('modal_upload'); ?>
		
		<!-- BEGIN Note -->
		<?php $dg->view('modal_note'); ?>
		
		<!-- BEGIN Help -->
		<?php $dg->view('modal_help'); ?>
		
		<!-- BEGIN My design -->
		<?php $dg->view('modal_my_design'); ?>
		
		<!-- BEGIN design ideas -->
		<?php $dg->view('modal_ideas'); ?>
		
		<!-- BEGIN team -->
		<?php $dg->view('modal_team'); ?>
		
		<!-- BEGIN fonts -->
		<?php $dg->view('modal_fonts'); ?>
		
		<!-- BEGIN preview -->
		<?php $dg->view('modal_preview'); ?>
		
		<!-- BEGIN Share -->
		<?php $dg->view('modal_share'); ?>
		
		<?php $addons->view('modal'); ?>		
	</div>
	
	<!-- BEGIN popover -->
	<div class="popover right" id="dg-popover">
		<div class="arrow"></div>
		<h3 class="popover-title">
			<span><?php echo $lang['designer_clipart_edit_size_position']; ?></span> 
			<a href="javascript:void(0)" class="popover-close">
				<i class="glyphicons remove_2 glyphicons-12 pull-right"></i>
			</a>
		</h3>
		
		<div class="popover-content">
			<?php $dg->view('popover_clipart'); ?>
			
			<?php $dg->view('popover_text'); ?>
			
			<?php $dg->view('popover_team'); ?>
			
			<?php $dg->view('popover_qrcode'); ?>
			
			<?php $addons->view('popover'); ?>
		</div>
	</div>
	<?php include_once ROOT .DS. 'components' .DS. 'footer.php'; ?>	

	<script type="text/javascript">
		if (typeof wooSave != 'undefined')
		{
			/* call to after save design completed */
			jQuery(document).on('done.save.design', function(event, data){
				window.parent.wooSave(data, 'idea')
			});
		}
		function productInfo(data){
			design.save();
		}
	</script>

	<?php if ($dg->platform == 'prestashop') { ?>
	<script type="text/javascript">
		var admin_id = user_id;
	</script>
	<script type="text/javascript" src="prestashop/js/adminjs-prestashop.js"></script>
	<script type="text/javascript">
		function productInfo2(data){
			var product_title_img = window.parent.jQuery('#_product_title_img').val();
			var temps = (product_title_img).split('::');
			var price_of_print = jQuery('#price_of_printing').attr('price');
			if (typeof price_of_print === 'undefined') {
				price_of_print = 0;
			}
			window.parent.jQuery('#_product_title_img').val(temps[0]+'::' + temps[1]+'::'+price_of_print);
			design.saveadmin();
		}
	</script>
	<?php } elseif ($dg->platform == 'opencart') { ?>
		<script type="text/javascript">
		var admin_id = user_id;
		</script>
		<script type="text/javascript" src="opencart/js/adminjs-opencart.js"></script>
		<script type="text/javascript">
			function productInfo2(data){
				var product_title_img = window.parent.jQuery('#_product_title_img').val();
				var temps = (product_title_img).split('::');
				var price_of_print = jQuery('#price_of_printing').attr('price');
				if (typeof price_of_print === 'undefined') {
					price_of_print = 0;
				}
				window.parent.jQuery('#_product_title_img').val(temps[0]+'::' + temps[1]+'::'+price_of_print);
				design.saveadmin();
			}
		</script>
	<?php } ?>
</body>
</html>