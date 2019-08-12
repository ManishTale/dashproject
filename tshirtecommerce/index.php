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
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<?php include_once ROOT .DS. 'components' .DS. 'header.php'; ?>
</head>
<body>	
	<div class="container">
		<div id="dg-mask" class="loading"></div>
		<div id="dg-wapper">
			<div class="alert alert-danger" id="designer-alert" role="alert" style="display:none;"></div>
			<div id="dg-designer">
				<?php $dg->view('tool_left'); ?>

				<?php $dg->view('too_center'); ?>
				
				<?php $dg->view('too_right'); ?>
			</div>
		</div>
		
	</div>
	
	<!--confirm color of print -->
	<?php $dg->view('screen_colors'); ?>
	
	<div id="dg-introduction"><?php $dg->view('modal_tshirt_introduction'); ?></div>
	
	<!--modal -->
	<div id="dg-modal">
		<!--product info -->
		<?php $dg->view('modal_product_info'); ?>
		
		<!--product size -->
		<?php $dg->view('modal_product_size'); ?>
		
		<!--Login -->
		<?php $dg->view('modal_login'); ?>
		
		<!--products -->
		<?php $dg->view('modal_products'); ?>
		
		<!--clipart -->
		<?php $dg->view('modal_clipart'); ?>
		
		<!--Upload -->
		<?php $dg->view('modal_upload'); ?>
		
		<!--Note -->
		<?php $dg->view('modal_note'); ?>
		
		<!--Help -->
		<?php $dg->view('modal_help'); ?>
		
		<!--My design -->
		<?php $dg->view('modal_my_design'); ?>
		
		<!--design ideas -->
		<?php $dg->view('modal_ideas'); ?>
		
		<!--team -->
		<?php $dg->view('modal_team'); ?>
		
		<!--fonts -->
		<?php $dg->view('modal_fonts'); ?>
		
		<!--preview -->
		<?php $dg->view('modal_preview'); ?>
		
		<!--Share -->
		<?php $dg->view('modal_share'); ?>
		
		<?php $addons->view('modal'); ?>
	</div>
	<!-- END modal -->
	
	<!--popover -->
	<div class="popover right" id="dg-popover">
		<div class="arrow"></div>
		<h3 class="popover-title">
			<span><?php echo $lang['designer_clipart_edit_size_position']; ?></span> 
			<a href="javascript:void(0)" class="popover-close"><i class="glyphicons remove_2 glyphicons-12 pull-right"></i></a>
		</h3>
		
		<div class="popover-content">
			<!--clipart edit options -->
			<?php $dg->view('popover_clipart'); ?>
			
			<!--Text edit options -->
			<?php $dg->view('popover_text'); ?>
			
			<!--team edit options -->
			<?php $dg->view('popover_team'); ?>
			
			<!--qrcode -->
			<?php $dg->view('popover_qrcode'); ?>
			
			<?php $addons->view('popover'); ?>
		</div>
	</div>
	<!-- END popover -->
	
	<?php include_once ROOT .DS. 'components' .DS. 'footer.php'; ?>
</body>
</html>

