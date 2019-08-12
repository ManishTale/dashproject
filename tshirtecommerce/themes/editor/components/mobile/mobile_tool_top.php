<?php
$addons = $GLOBALS['addons'];
$settings = $GLOBALS['settings'];
?>
<!-- Begin sidebar -->
<div id="dg-sidebar">
	<div class="pull-left">
		<div class="dropdown">
			<a class="btn btn-none dropdown-toggle" href="#" data-toggle="dropdown">
				<i class="glyph-icon flaticon-menu"></i>
			</a>
			<ul class="dropdown-menu text-left">
				<li <?php echo cssShow($settings, 'show_product'); ?>><a href="#dg-products" class="view_change_products" data-target="#dg-products" data-toggle="modal"><?php echo lang('designer_product_change_product'); ?></a></li>
				<li <?php echo cssShow($settings, 'show_product_info'); ?>><a href="#modal-product-info" data-target="#modal-product-info" data-toggle="modal"><?php echo lang('design_product_info'); ?></a></li>
				<li <?php echo cssShow($settings, 'show_product_size'); ?>><a href="#modal-product-size" data-target="#modal-product-size" data-toggle="modal"><?php echo lang('design_size_chart'); ?></a></li>
				
				<li role="separator" class="divider"></li>
				
				<li <?php echo cssShow($settings, 'show_my_design'); ?> class="mydesign_element">
					<a href="javascript:void(0);" class="add_item_mydesign" <?php echo cssShow($settings, 'show_my_design'); ?>><?php echo lang('designer_menu_my_design'); ?></a>
				</li>	
				
				<li role="separator" class="divider"></li>
				
				<li><a href="javaScript:tshirtIntroduction.start();"><?php echo lang('design_guideline_help'); ?></a></li>
			</ul>
		</div>
	</div>
	<div class="dg-tools" <?php if(cssShow($settings, 'show_product') != '') echo 'style="left: 0px;"'; if(cssShow($settings, 'show_product_info') != '' && cssShow($settings, 'show_product_size') != '') echo 'style="right: 44px;"'; ?>>
		<ul class="list-tools">
			<li>
				<button type="button" class="btn btn-sm btn-none btn-undo" onclick="design.tools.undo()">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22px" height="22px" viewBox="0 0 487.958 487.958" xml:space="preserve"><g transform="matrix(-1 0 0 1 487.958 0)"><path style="fill:#666;" d="M483.058,215.613l-215.5-177.6c-4-3.3-9.6-4-14.3-1.8c-4.7,2.2-7.7,7-7.7,12.2v93.6c-104.6,3.8-176.5,40.7-213.9,109.8   c-32.2,59.6-31.9,130.2-31.6,176.9c0,3.8,0,7.4,0,10.8c0,6.1,4.1,11.5,10.1,13.1c1.1,0.3,2.3,0.4,3.4,0.4c4.8,0,9.3-2.5,11.7-6.8   c73-128.7,133.1-134.9,220.2-135.2v93.3c0,5.2,3,10,7.8,12.2s10.3,1.5,14.4-1.8l215.4-178.2c3.1-2.6,4.9-6.4,4.9-10.4   S486.158,218.213,483.058,215.613z M272.558,375.613v-78.1c0-3.6-1.4-7-4-9.5c-2.5-2.5-6-4-9.5-4c-54.4,0-96.1,1.5-136.6,20.4   c-35,16.3-65.3,44-95.2,87.5c1.2-39.7,6.4-87.1,28.1-127.2c34.4-63.6,101-95.1,203.7-96c7.4-0.1,13.4-6.1,13.4-13.5v-78.2 l180.7,149.1L272.558,375.613z"/></g></svg>
				</button>
			</li>
			<li>
				<button type="button" class="btn btn-sm btn-none btn-redo" onclick="design.tools.redo()">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22px" height="22px" viewBox="0 0 487.958 487.958" xml:space="preserve"><path style="fill:#666;" d="M483.058,215.613l-215.5-177.6c-4-3.3-9.6-4-14.3-1.8c-4.7,2.2-7.7,7-7.7,12.2v93.6c-104.6,3.8-176.5,40.7-213.9,109.8   c-32.2,59.6-31.9,130.2-31.6,176.9c0,3.8,0,7.4,0,10.8c0,6.1,4.1,11.5,10.1,13.1c1.1,0.3,2.3,0.4,3.4,0.4c4.8,0,9.3-2.5,11.7-6.8   c73-128.7,133.1-134.9,220.2-135.2v93.3c0,5.2,3,10,7.8,12.2s10.3,1.5,14.4-1.8l215.4-178.2c3.1-2.6,4.9-6.4,4.9-10.4   S486.158,218.213,483.058,215.613z M272.558,375.613v-78.1c0-3.6-1.4-7-4-9.5c-2.5-2.5-6-4-9.5-4c-54.4,0-96.1,1.5-136.6,20.4   c-35,16.3-65.3,44-95.2,87.5c1.2-39.7,6.4-87.1,28.1-127.2c34.4-63.6,101-95.1,203.7-96c7.4-0.1,13.4-6.1,13.4-13.5v-78.2 l180.7,149.1L272.558,375.613z"/></svg>
				</button>
			</li>
			<li>
				<button type="button" class="btn btn-sm btn-none btn-save-design" onclick="design.save()">
					<i class="glyph-icon flaticon-floppy-disk sm-flaticon"></i>
				</button>
			</li>

			<li>
				<a href="javascript:void(0)" data-type="preview" class="dg-tool btn-sm btn btn-none">
					<i class="glyph-icon flaticon-view flaticon-22"></i>
					<small><?php echo lang('designer_top_preview'); ?></small>
				</a>
			</li>
			<?php $addons->view('helper', 'mobile'); ?>
		</ul>
	</div>
	<div class="pull-right">
		<div class="buy_now_element">
			<button type="button" onclick="e_display('.view-modal-cart', 'show')" class="btn btn-gray btn_add_cart">
				<i class="glyph-icon flaticon-shopping-cart flaticon-18"></i>
			</button>
		</div>
	</div>
</div>
<!-- END sidebar -->

<div id="dg-sidebar-action">
	<div class="pull-left">
		<a href="javascript:void(0);" class="btn btn-sm btn-none" onclick="design.mobile.unselectItemDesign()">
			<i class="glyph-icon text-danger flaticon-cross"></i>
		</a>
	</div>
	
	<div class="pull-right">
		<a href="javascript:void(0);" class="btn btn-sm btn-none" onclick="design.mobile.unselectItemDesign()">
			<i class="glyph-icon flaticon-checked"></i>
		</a>
	</div>
</div>