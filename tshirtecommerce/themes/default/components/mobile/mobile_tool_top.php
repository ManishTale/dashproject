<?php
$addons = $GLOBALS['addons'];
$settings = $GLOBALS['settings'];
?>
<!-- Begin sidebar -->
<div id="dg-sidebar">
	<div class="pull-left">
		<a <?php echo cssShow($settings, 'show_product'); ?> href="#dg-products" class="view_change_products btn btn-none" data-toggle="modal" data-target="#dg-products">
			<i class="glyph-icon flaticon-menu"></i>
		</a>
	</div>
	<div class="dg-tools" <?php if(cssShow($settings, 'show_product') != '') echo 'style="left: 0px;"'; if(cssShow($settings, 'show_product_info') != '' && cssShow($settings, 'show_product_size') != '') echo 'style="right: 44px;"'; ?>>
		<ul class="list-tools">
			<li>
				<button type="button" class="btn btn-sm btn-none btn-save-design" onclick="design.save()">
					<i class="glyph-icon flaticon-floppy-disk sm-flaticon"></i>
					<small><?php echo lang('designer_save_btn'); ?></small>
				</button>
			</li>
			<li>
				<a href="javascript:void(0)" data-type="preview" class="dg-tool btn-sm btn btn-none">
					<i class="glyph-icon flaticon-view flaticon-22"></i>
					<small><?php echo lang('designer_top_preview'); ?></small>
				</a>
			</li>
			<li>
				<button type="button" class="btn btn-sm btn-none btn-share-design" onclick="design.save()" <?php echo cssShow($settings, 'show_share'); ?>>
					<i class="glyph-icon flaticon-share"></i>
					<small><?php echo lang('designer_share'); ?></small>
				</button>
			</li>
			<?php $addons->view('helper'); ?>
		</ul>
	</div>
	<div class="pull-right">
		<div class="dropdown pull-left" <?php if(cssShow($settings, 'show_product_info') != '' && cssShow($settings, 'show_product_size') != '') echo 'style="display: none;"'; ?>>
			<button class="btn btn-none dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
				<i class="glyph-icon flaticon-mark-1"></i>
			</button>
			<ul class="dropdown-menu text-left" style="right: 0px; left: auto;">
				<li <?php echo cssShow($settings, 'show_product_info'); ?>><a href="#modal-product-info" data-target="#modal-product-info" data-toggle="modal"><i class="glyph-icon flaticon-fashion"></i> <?php echo lang('design_product_info'); ?></a></li>
				<li <?php echo cssShow($settings, 'show_product_size'); ?>><a href="#modal-product-size" data-target="#modal-product-size" data-toggle="modal"><i class="glyph-icon flaticon-clothes"></i> <?php echo lang('design_size_chart'); ?></a></li>
				<li><a href="javaScript:tshirtIntroduction.start();"><i class="glyph-icon flaticon-interface-3"></i> <?php echo lang('design_guideline_help'); ?></a></li>
			</ul>
		</div>
		<button class="btn btn-none" onclick="design.mobile.close()">
			<i class="glyph-icon flaticon-cancel flaticon-18 red"></i>
		</button>
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