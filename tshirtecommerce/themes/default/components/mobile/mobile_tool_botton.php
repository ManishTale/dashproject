<?php
$settings = $GLOBALS['settings'];
$addons = $GLOBALS['addons'];
?>
<div class="col-left">
	<div id="dg-left" class="width-100">
		<div class="dg-box width-100">
			<ul class="menu-left">		
				<li class="edit_product_element">
					<a class="btn_edit_product" href="javascript:void(0);" onclick="e_display('.col-right', 'show')">
						<i class="glyph-icon flaticon-fashion sm-flaticon"></i> <span><?php echo lang('edit_product'); ?></span>
					</a>
				</li>
				<?php $addons->view('menu-left', array(), 'mobile'); ?>
				<li <?php echo cssShow($settings, 'show_add_text'); ?> class="add_text_element">
					<a href="javascript:void(0);" class="add_item_text" title="">
						<i class="glyph-icon flaticon-type sm-flaticon"></i> <span><?php echo lang('designer_menu_add_text'); ?></span>
					</a>
				</li>
				
				<li <?php echo cssShow($settings, 'show_add_art'); ?> class="add_clipart_element">
					<a href="#dg-cliparts" class="add_item_clipart" title="" data-toggle="modal" data-target="#dg-cliparts">
						<i class="glyph-icon flaticon-photo sm-flaticon"></i> <span><?php echo lang('designer_menu_add_art'); ?></span>
					</a>
				</li>							
				<li <?php echo cssShow($settings, 'show_add_upload'); ?> class="upload_image_element">
					<a href="#dg-myclipart" title="" data-toggle="modal" data-target="#dg-myclipart">
						<i class="glyph-icon flaticon-upload flaticon-22"></i> <span><?php echo lang('designer_help_upload'); ?></span>
					</a>
				</li>
				
				<li class="buy_now_element">
					<a href="#" onclick="e_display('.col-right', 'show')" class="btn_add_cart">
						<i class="glyph-icon flaticon-shopping-cart-3 flaticon-22"></i> <span><?php echo lang('designer_right_buy_now'); ?></span>
					</a>
				</li>
				
				<li <?php echo cssShow($settings, 'show_layers'); ?> class="item_layers_element">
					<a href="#" onclick="e_display('.view-modal-layers', 'show')">
						<i class="glyph-icon flaticon-layers-1 flaticon-22"></i> <span><?php echo lang('designer_menu_login_layers'); ?></span>
					</a>
				</li>
				
				<li <?php echo cssShow($settings, 'show_add_team'); ?> class="team_number_element">
					<a href="javascript:void(0);" class="add_item_team" title="">
						<i class="glyph-icon flaticon-football"></i> <span><?php echo lang('designer_teams'); ?></span>
					</a>
				</li>
				<li <?php echo cssShow($settings, 'show_my_design'); ?> class="mydesign_element">
					<a href="javascript:void(0);" class="add_item_mydesign" <?php echo cssShow($settings, 'show_my_design'); ?>>
						<i class="glyph-icon flaticon-user flaticon-22"></i> <span><?php echo lang('designer_menu_my_design'); ?></span>
					</a>
				</li>				
				<li <?php echo cssShow($settings, 'show_add_qrcode'); ?> class="add_QRcode_element">
					<a href="javascript:void(0);" class="add_item_qrcode" title="">
						<i class="glyph-icon flaticon-qr-code flaticon-22"></i> <span><?php echo lang('designer_menu_add_qrcode'); ?></span>
					</a>
				</li>
			</ul>
		</div>			
	</div>
</div>