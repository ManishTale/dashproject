<?php 
$product = $GLOBALS['product'];
?>
<div class="modal fade" id="modal-product-size" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-body">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<div class="product-detail-size">
					<?php echo $product->size; ?>
				</div>
			</div>
		</div>
	</div>
</div>