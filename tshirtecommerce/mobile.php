<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-01-10
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license	   GNU General Public License version 2 or later; see LICENSE
 *
 */
define('ROOT', dirname(__FILE__));
define('DS', DIRECTORY_SEPARATOR);
include_once ROOT .DS. 'components' .DS. 'head.php';

$addons->is_mobile	= true;
$product->hide_quickview = 1;
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<?php include_once ROOT .DS. 'components' .DS. 'header.php'; ?>
</head>
<body class="design-mobile">	
	<div class="container">
		<div id="dg-wapper" class="col-md-12">
			<div class="alert alert-danger" id="designer-alert" role="alert" style="display:none;"></div>
			<div id="dg-mask" class="loading"></div>

			<div id="dg-designer">
				<?php $dg->view('mobile_tool_top', 'mobile'); ?>

				<?php $dg->view('mobile_tool_center', 'mobile'); ?>

				<?php $dg->view('too_right', 'mobile'); ?>

				<?php $dg->view('mobile_tool_botton', 'mobile'); ?>
			</div>
		</div>
	</div>
	
	<!--confirm color of print -->
	<?php $dg->view('screen_colors'); ?>
	
	<div id="dg-introduction">
		<?php $dg->view('modal_tshirt_introduction_mobie'); ?>
	</div>
	
	<!--modal -->
	<div id="dg-modal">
		<!--product info -->
		<?php $dg->view('modal_product_info', 'mobile'); ?>
		
		<!--product size -->
		<?php $dg->view('modal_product_size', 'mobile'); ?>
		
		<!--Login -->
		<?php $dg->view('modal_login', 'mobile'); ?>
		
		<!--products -->
		<?php $dg->view('modal_products', 'mobile'); ?>
		
		<!--clipart -->
		<?php $dg->view('modal_clipart', 'mobile'); ?>
		
		<!--Upload -->
		<?php $dg->view('modal_upload', 'mobile'); ?>
		
		<!--Note -->
		<?php $dg->view('modal_note'); ?>
		
		<!--Help -->
		<?php $dg->view('modal_help'); ?>
		
		<!--My design -->
		<?php $dg->view('modal_my_design', 'mobile'); ?>
		
		<!--design ideas -->
		<?php $dg->view('modal_ideas', 'mobile'); ?>
		
		<!--team -->
		<?php $dg->view('modal_team', 'mobile'); ?>
		
		<!--fonts -->
		<?php $dg->view('modal_fonts', 'mobile'); ?>
		
		<!--preview -->
		<?php $dg->view('modal_preview', 'mobile'); ?>
		
		<!--Share -->
		<?php $dg->view('modal_share', 'mobile'); ?>
		
		<?php $addons->view('modal', 'mobile'); ?>
	</div>
	<!-- END modal -->
	
	<!--popover -->
	<div class="popover right" id="dg-popover">
		<div class="arrow"></div>
		<h3 class="popover-title">
			<span><?php echo $lang['designer_clipart_edit_size_position']; ?></span> 
			<a href="javascript:void(0)" class="popover-close">
				<i class="glyphicons remove_2 glyphicons-12 pull-right"></i>
			</a>
		</h3>
		
		<div class="popover-content">
			<!--clipart edit options -->
			<?php $dg->view('popover_clipart', 'mobile'); ?>
			
			<!--Text edit options -->
			<?php $dg->view('popover_text', 'mobile'); ?>
			
			<!--team edit options -->
			<?php $dg->view('popover_team', 'mobile'); ?>
			
			<!--qrcode -->
			<?php $dg->view('popover_qrcode', 'mobile'); ?>
			
			<?php $addons->view('popover', 'mobile'); ?>
		</div>
	</div>
	<!-- END popover -->
	
	<?php include_once ROOT .DS. 'components' .DS. 'footer.php'; ?>
</body>
</html>