<?php 
$product = $GLOBALS['product'];
$settings = $GLOBALS['settings'];
$addons = $GLOBALS['addons'];
if (isset($settings->show_detail_price) && $settings->show_detail_price == 0)
{
	echo '<style>div.product-price-info{display:none;}</style>';
}
?>
<div class="col-right col-botton">
	<div id="dg-right">
		<!-- product -->
		<div id="right-options">
			<div class="product-options" id="product-details">
				
				<?php ?>
				<div class="product-discount" style="<?php if(!isset($product->prices)) echo 'display: none;'; ?>">
					<h5><?php echo lang('designer_discount'); ?></h5>
					<table class="table table-bordered">
						<thead>
							<tr>
								<th><?php echo lang('designer_js_text_from'); ?></th>
								<th><?php echo lang('designer_to'); ?></th>
								<th><?php echo lang('designer_price'); ?></th>
							</tr>
						</thead>
						<tbody>
						<?php if(isset($product->prices) && isset($product->prices->price) ) { ?>
							
							<?php 
							foreach($product->prices->price as $ip => $price_discount) {
								$saving 	= (($product->price - $price_discount)/$product->price)*100;
							?>
							<tr>
								<td><?php echo $product->prices->min_quantity[$ip]; ?></td>
								<td><?php echo $product->prices->max_quantity[$ip]; ?></td>
								<td><?php echo $settings->currency_symbol; ?><?php echo $price_discount; ?> (<?php echo number_format($saving, 2); ?>%)</td>
							</tr>
							<?php } ?>

						<?php } ?>
						</tbody>
					</table>
				</div>

				<div class="colors-sizes-used">
					<div class="color_used" <?php echo cssShow($settings, 'show_color_used'); ?>>
						<span><?php echo lang('designer_right_color_used'); ?></span>
						<div class="color-used"></div>
					</div>
					
					<div class="screen_size" <?php echo cssShow($settings, 'show_screen_size'); ?>>
						<div class="pull-right">						
							<span><?php echo lang('designer_right_screen_size'); ?></span>
							<div class="screen-size"></div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="product-prices">
				<div class="product-cart">
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
					
					<button <?php echo cssShow($settings, 'show_add_to_cart', 1); ?> type="button" class="btn btn-warning btn-addcart" onclick="design.ajax.addJs(this)"><i class="glyph-icon flaticon-shopping-cart flaticon-16"></i> <?php echo lang('designer_right_buy_now'); ?></button>
					
					<?php $addons->view('cart'); ?>
				</div>
			</div>
		</div>
	</div>
</div>
