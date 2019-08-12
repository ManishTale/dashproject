<?php 
$product = $GLOBALS['product'];
$settings = $GLOBALS['settings'];
$addons = $GLOBALS['addons'];
?>
<div class="col-right view-modal-box">
	<div class="row tool-back">
		<div class="col-md-12">
			<div class="pull-right tool-back-done">
				<a href="#" class="btn btn-sm btn-none" onclick="e_display('.col-right', 'hide')">
					<i class="glyph-icon flaticon-checked"></i>
				</a>
			</div>
			<center>
				<strong><?php echo lang('designer_right_product_options'); ?></strong>
			</center>
			<div class="pull-left tool-back-close">
				<a href="#" class="btn btn-sm btn-none" onclick="e_display('.col-right', 'hide')">
					<i class="glyph-icon text-danger flaticon-14 flaticon-remove"></i>
				</a>
			</div>
		</div>
	</div>
	<div id="dg-right">
		<!-- product -->
		<div class="align-center" id="right-options">
			<div class="dg-box">
				<!-- product info -->
				<div class="product-options" id="product-details">
				<?php if ($product != false) { ?>
					<div class="col-md-12">
						<div class="products-detail">
							<div class="pull-left">
								<img src="<?php echo base_url($product->image); ?>" width="90" class="img-thumbnail product-detail-image" alt="<?php echo $product->title; ?>" />
							</div>
							<div class="product-detail-right">
								<strong class="product-detail-title clearfix"><?php echo $product->title; ?></strong>
								<a href="#dg-products" data-toggle="modal" class="clearfix view_change_products btn btn-sm btn-default"><?php echo lang('designer_product_change_product'); ?></a>
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<?php if (isset($product->design) && $product->design != false) { ?>
						<div class="product-info">
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

						<div class="products-detail">
							<a href="#none" <?php echo cssShow($settings, 'show_product_info'); ?> data-target="#modal-product-info" data-toggle="modal" class="btn btn-default pull-left btn-sm"><i class="flaticon-14 glyph-icon flaticon-file"></i> <span><?php echo lang('design_product_info'); ?></span></a>
							<a href="#none" <?php echo cssShow($settings, 'show_product_size'); ?> data-target="#modal-product-size" data-toggle="modal" class="btn btn-default pull-right btn-sm"><span><?php echo lang('design_size_chart'); ?></span> <i class="flaticon-14 glyph-icon flaticon-next"></i></a>
						</div>	
					</div>
				<?php } ?>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="view-modal-box view-modal-cart">
	<div class="row tool-back">
		<div class="col-md-12">
			<div class="pull-right tool-back-done">
				<a href="#" class="btn btn-sm btn-none" onclick="e_display('.view-modal-cart', 'hide')">
					<i class="glyph-icon flaticon-checked"></i>
				</a>
			</div>
			<center>
				<strong><?php echo lang('designer_ordering_options'); ?></strong>
			</center>
			<div class="pull-left tool-back-close">
				<a href="#" class="btn btn-sm btn-none" onclick="e_display('.view-modal-cart', 'hide')">
					<i class="glyph-icon text-danger flaticon-14 flaticon-remove"></i>
				</a>
			</div>
		</div>
	</div>

	<div class="view-modal-content">
		<form method="POST" id="tool_cart" name="tool_cart" action="">							
			<div class="product-info" id="product-attributes">
				<?php if (isset($product->attribute)) { ?>
					<?php echo $product->attribute; ?>
				<?php } ?>
				<?php $addons->view('attribute'); ?>
			</div>
		</form>

		<hr />
		<div class="print-options row" <?php if(cssShow($settings, 'show_color_used') != '' && cssShow($settings, 'show_screen_size') != '') echo 'style="display: none;"'; ?>>	
			<div class="col-xs-6" <?php echo cssShow($settings, 'show_color_used'); ?>>
				<label><?php echo lang('designer_right_color_used'); ?></label>
				<div class="color-used" <?php echo cssShow($settings, 'show_color_used'); ?>></div>	
			</div>

			<div class="col-xs-6" <?php echo cssShow($settings, 'show_screen_size'); ?>>
				<label><?php echo lang('designer_right_screen_size'); ?></label>
				<div class="screen-size" <?php echo cssShow($settings, 'show_screen_size'); ?>></div>
			</div>					
		</div>
	</div>
	<div class="view-modal-footer">
		<div class="product-prices">
			<div id="product-price" <?php echo cssShow($settings, 'show_total_price'); ?>>
				<div class="product-price-list">
					<span id="product-price-sale">
						<?php echo $settings->currency_symbol; ?><span class="price-sale-number"></span>
					</span>
					<span id="product-price-old">
						<?php echo $settings->currency_symbol; ?><span class="price-old-number"></span>
					</span>
				</div>
			</div>
			<?php $addons->view('cart'); ?>
			<button <?php echo cssShow($settings, 'show_add_to_cart', 1); ?> type="button" class="btn btn-warning btn-addcart" onclick="design.ajax.addJs(this)"><i class="glyph-icon flaticon-shopping-cart-2 flaticon-14"></i> <?php echo lang('designer_right_buy_now'); ?></button>								
		</div>
	</div>
</div>

<!-- layers -->
<div class="view-modal-box view-modal-layers">
	<div class="row tool-back">
		<div class="col-md-12">
			<div class="pull-right tool-back-done">
				<a href="#" class="btn btn-sm btn-none" onclick="e_display('.view-modal-layers', 'hide')">
					<i class="glyph-icon flaticon-checked"></i>
				</a>
			</div>
			<center>
				<strong><?php echo lang('designer_menu_login_layers'); ?></strong>
			</center>
			<div class="pull-left tool-back-close">
				<a href="#" class="btn btn-sm btn-none" onclick="e_display('.view-modal-layers', 'hide')">
					<i class="glyph-icon text-danger flaticon-14 flaticon-remove"></i>
				</a>
			</div>
		</div>
	</div>

	<div class="col-md-12">
		<div id="dg-layers">
			<ul id="layers"></ul>
		</div>
	</div>
</div>