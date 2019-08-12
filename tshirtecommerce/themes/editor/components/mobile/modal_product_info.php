<?php 
$product = $GLOBALS['product'];
?>
<div class="modal fade" id="modal-product-info">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="product-detail-title modal-title"><?php echo $product->title; ?></h4>
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			</div>
			<div class="modal-body">				
				<div class="products-detail">
					<div class="product-detail">
						<div class="row">
							<div class="col-md-12">
								<img src="<?php echo base_url($product->image); ?>" class="img-responsive product-detail-image" alt="<?php echo $product->title; ?>" />
							</div>
							<div class="col-md-12">
								<p class="product-detail-short_description"><?php echo $product->short_description; ?></p>
							</div>
							<hr />
							<div class="col-md-12">
								<h4><?php echo lang('designer_product_description'); ?></h4>										
								<div class="product-detail-description"><?php echo $product->description; ?></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>