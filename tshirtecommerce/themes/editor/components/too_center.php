<?php 
$products 		= $GLOBALS['products'];
$addons 		= $GLOBALS['addons'];
$settings 		= $GLOBALS['settings'];
$product 		= $GLOBALS['product'];
$layout 		= $GLOBALS['layout'];
$logo_icon_url 	= $GLOBALS['logo_icon_url'];
?>
<div class="col-xs-12 col-md-12 col-center align-center">
	<!-- design area -->
	<div id="design-area" class="div-design-area">
		<div id="app-wrap" class="div-design-area">
		<?php if ($products === false) { ?>
			<div id="view-front" class="labView active">
				<div class="product-design">
					<strong><?php echo lang('designer_product_data_found'); ?></strong>
				</div>
			</div>
		<?php } else { ?>
			
			<!-- begin front design -->						
			<div id="view-front" class="labView active">
				<div class="product-design"></div>
				<div class="design-area"><div class="content-inner"></div></div>
			</div>						
			<!-- end front design -->
			
			<!-- begin back design -->
			<div id="view-back" class="labView">
				<div class="product-design"></div>
				<div class="design-area"><div class="content-inner"></div></div>
			</div>
			<!-- end back design -->
			
			<!-- begin left design -->
			<div id="view-left" class="labView">
				<div class="product-design"></div>
				<div class="design-area"><div class="content-inner"></div></div>
			</div>
			<!-- end left design -->
			
			<!-- begin right design -->
			<div id="view-right" class="labView">
				<div class="product-design"></div>
				<div class="design-area"><div class="content-inner"></div></div>
			</div>
			<!-- end right design -->
			
		<?php } ?>
			
			<!-- BEGIN help functions -->
			<div id="dg-help-functions" style="display: none;">
				<div class="btn-group-vertical" role="group" aria-label="Group functions">
					<?php $addons->view('tools'); ?>
				</div>
			</div>
			<!-- END help functions -->
		</div>
	</div>
	
	<div class="product-toolbar-options" style="display: none;">
		<div class="product-toolbar">
			<span class="btn-product-color">
				<div class="product-color-active list-colors">
					<span class="bg-colors product-color-active-value"></span> <small class="product-color-title"></small>
					<a href="javascript:void(0)" onclick="menu_options.show('product');" title="<?php echo lang('designer_change_color'); ?>"><?php echo lang('designer_tools_change_color'); ?></a>
				</div>			
			</span>
		</div>
	</div>

	<div class="menu-options">
		<!-- product detail -->
		<div class="option-panel option-panel-product active">
			<a href="javascript:void(0)" onclick="menu_options.close(this);" class="panel-colose"><i class="glyph-icon flaticon-cross"></i></a>
			<div class="option-panel-content">
				<div class="products-detail">
					<div class="pull-left">
						<img src="<?php echo base_url($product->image); ?>" width="90" class="img-thumbnail product-detail-image" alt="<?php echo $product->title; ?>" />
					</div>
					<div class="product-detail-right">
						<strong class="product-detail-title clearfix"><?php echo $product->title; ?></strong>
						<a href="#dg-products" data-toggle="modal" class="clearfix view_change_products btn btn-sm btn-default"><?php echo lang('designer_product_change_product'); ?></a>
					</div>
				</div>
				<div class="clearfix"></div>
				<hr />
				<?php if (isset($product->design) && $product->design != false) { ?>
				<div class="product-colors-design">
					<div id="e-change-product-color" class="form-group">			
						<label id="e-label-product-color"><?php echo lang('designer_right_choose_product_color'); ?></label>
						<div id="product-list-colors">
							<?php for ($i=0; $i<count($product->design->color_hex); $i++) { ?>
							<span class="bg-colors dg-tooltip <?php if ($i==0) echo 'active'; ?>" onclick="design.products.changeColor(this, <?php echo $i; ?>)" data-color="<?php echo $product->design->color_hex[$i]; ?>" data-placement="top" data-original-title="<?php echo $product->design->color_title[$i]; ?>">
								
								<?php 
									$colors_hex = explode(';', $product->design->color_hex[$i]);
									$span_with = (23/count($colors_hex));
								?>
								<?php for($jc=0; $jc<count($colors_hex); $jc++) { ?>
									<a href="javascript:void(0);" style="width:<?php echo $span_with; ?>px; background-color:#<?php echo $colors_hex[$jc]; ?>"></a>
								<?php } ?>
							</span>
							<?php } ?>

							<?php 
							if(isset($product->design->color_picker)) {
								if(isset($jc))
									$color_picker_index = 0;
								else
									$color_picker_index = 0;
							?>
							<span class="bg-colors dg-tooltip bg-more-colors" data-index="<?php echo $color_picker_index; ?>" data-color="" data-placement="top" data-original-title="<?php echo lang('designer_color_picker'); ?>">
							</span>
							<?php } ?>
						</div>
					</div>
					<?php $addons->view('product'); ?>
				</div>
				<?php } ?>

				<form method="POST" id="tool_cart" name="tool_cart" action="">							
					<div class="product-info" id="product-attributes">
						<?php if (isset($product->attribute)) { ?>
							<?php echo $product->attribute; ?>
						<?php } ?>
						<?php $addons->view('attribute'); ?>
					</div>
				</form>
				
				<hr />
				<div class="products-detail">
					<a href="#none" <?php echo cssShow($settings, 'show_product_info'); ?> data-target="#modal-product-info" data-toggle="modal" class="btn btn-default pull-left btn-sm"><i class="flaticon-14 glyph-icon flaticon-file"></i> <span><?php echo lang('design_product_info'); ?></span></a>
					<a href="#none" <?php echo cssShow($settings, 'show_product_size'); ?> data-target="#modal-product-size" data-toggle="modal" class="btn btn-default pull-right btn-sm"><span><?php echo lang('design_size_chart'); ?></span> <i class="flaticon-14 glyph-icon flaticon-next"></i></a>
				</div>
			</div>
		</div>

		<!-- layers -->
		<div class="option-panel option-panel-layers" <?php echo cssShow($settings, 'show_layers'); ?>>
			<a href="javascript:void(0)" onclick="menu_options.close(this);" class="panel-colose"><i class="glyph-icon flaticon-cross"></i></a>
			<h3 class="option-panel-heading"><?php echo lang('designer_menu_login_layers'); ?></h3>
			<div class="option-panel-content margin-0 padding-0">
				<div class="control-layers">
					<div id="dg-layers">
						<ul id="layers"></ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="top-right">
	<a href="javascript:void(0)" data-type="zoom" title="<?php echo lang('designer_top_zoom'); ?>" class="dg-tool">
		<i class="glyph-icon flaticon-multimedia"></i>
	</a>
</div>

<div id="product-thumbs"></div>