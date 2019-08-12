<?php 
$product = $GLOBALS['product'];
?>
<div class="modal fade" id="modal-product-info" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-body">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<div class="products-detail">
					<div class="product-detail">
						<h3 class="margin-top product-detail-title"><?php echo $product->title; ?></h3>
						<div class="row">
							<div class="col-md-12">
								<div class="product-detail-short_description"><?php echo $product->short_description; ?></div>
							</div>

							<div class="col-sm-12">
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