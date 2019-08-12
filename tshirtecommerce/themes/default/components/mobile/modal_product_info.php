<?php 
$product = $GLOBALS['product'];
?>
<div class="modal fade" id="modal-product-info" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			<div class="modal-body">				
				<div class="products-detail col-sm-12">
					<div class="product-detail">
						<div class="row">
							<div class="col-md-12">
								<img src="<?php echo base_url($product->image); ?>" class="img-responsive img-thumbnail product-detail-image" alt="<?php echo $product->title; ?>" />
							</div>
							<div class="col-md-12">
								<h3 class="margin-top product-detail-title"><?php echo $product->title; ?></h3>
								<p><?php echo lang('designer_product_id'); ?>: <strong class="product-detail-id"><?php echo $product->id; ?></strong></p>
								<p><?php echo lang('designer_product_sku'); ?>: <strong class="product-detail-sku"><?php echo $product->sku; ?></strong></p>
								<p class="product-detail-short_description"><?php echo $product->short_description; ?></p>
							</div>
						</div>
						<hr />
						<div class="row col-sm-12">
							<h4><?php echo lang('designer_product_description'); ?></h4>										
							<div class="product-detail-description"><?php echo $product->description; ?></div>
						</div>								
					</div>
				</div>
			</div>
		</div>
	</div>
</div>