<?php
$settings = $GLOBALS['settings'];
$addons = $GLOBALS['addons'];
$layout = $GLOBALS['layout'];
$tooltip = array(
	'left' => 'right',
	'right' => 'left',
	'bottom' => 'top',
	'top' => 'top',
);
?>
<div class="col-left">	
	<div id="dg-left" class="width-100">
		<div class="dg-box width-100">
			<ul class="menu-left">
				<li <?php echo cssShow($settings, 'show_product'); ?> class="menu-item-product" onclick="menu_options.show('product');">
					<a href="javascript:void(0);" data-toggle="tooltip" class="active" data-placement="<?php echo $tooltip[$layout]; ?>" title="<?php echo lang('designer_right_product_options'); ?>">
						<i class="glyph-icon flaticon-shapes"></i>
						<span><?php echo lang('edit_product'); ?></span>
					</a>
				</li>
				
				<?php $addons->view('menu-left'); ?>

				<li <?php echo cssShow($settings, 'show_add_art'); ?> class="menu-item-clipart" onclick="menu_options.show('cliparts');">
					<a href="javascript:void(0);" class="dg-tooltip add_item_clipart" data-placement="<?php echo $tooltip[$layout]; ?>" data-placement="<?php echo $tooltip[$layout]; ?>" title="<?php echo lang('designer_menu_add_art'); ?>">
						<i class="glyph-icon flaticon-picture"></i>
						<span><?php echo lang('designer_clipart_title'); ?></span>
					</a>
				</li>
				<li <?php echo cssShow($settings, 'show_add_text'); ?> class="menu-item-text">
					<a href="javascript:void(0);" class="add_item_text" data-placement="<?php echo $tooltip[$layout]; ?>" data-toggle="tooltip" title="<?php echo lang('designer_menu_add_text'); ?>">
						<i class="glyph-icon flaticon-type"></i>
						<span><?php echo lang('designer_canvas_menu_text'); ?></span>
					</a>
				</li>
				<li <?php echo cssShow($settings, 'show_add_upload'); ?> class="menu-item-upload" onclick="menu_options.show('upload');">
					<a href="javascript:void(0);" class="dg-tooltip" data-placement="<?php echo $tooltip[$layout]; ?>" title="<?php echo lang('designer_menu_upload_image'); ?>">
						<i class="glyph-icon flaticon-upload"></i>
						<span><?php echo lang('designer_upload_upload_btn'); ?></span>
					</a>
				</li>
				
				<li <?php echo cssShow($settings, 'show_add_team'); ?> class="menu-item-team">
					<a href="javascript:void(0);" class="add_item_team dg-tooltip" data-placement="<?php echo $tooltip[$layout]; ?>" data-original-title="<?php echo lang('designer_menu_name_number'); ?>">
						<i class="glyph-icon flaticon-football"></i>
						<span><?php echo lang('designer_teams'); ?></span>
					</a>
				</li>			
				<li <?php echo cssShow($settings, 'show_add_qrcode'); ?> class="menu-item-qrcode">
					<a href="javascript:void(0);" class="add_item_qrcode dg-tooltip" data-placement="<?php echo $tooltip[$layout]; ?>" data-original-title="<?php echo lang('designer_menu_add_qrcode'); ?>">
						<i class="glyph-icon flaticon-qr-code"></i>
						<span><?php echo lang('designer_js_qrcode'); ?></span>
					</a>
				</li>
				
				<li <?php echo cssShow($settings, 'show_layers'); ?> class="menu-item-layers">
					<a href="javascript:void(0);" onclick="menu_options.show('layers');" class="dg-tooltip" data-placement="<?php echo $tooltip[$layout]; ?>" data-original-title="<?php echo lang('designer_menu_login_layers'); ?>">
						<i class="glyph-icon flaticon-layers-1"></i>
						<span><?php echo lang('designer_menu_login_layers'); ?></span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>