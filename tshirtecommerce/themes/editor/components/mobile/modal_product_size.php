<?php 
$product = $GLOBALS['product'];
?>
<div class="modal fade" id="modal-product-size">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title"><?php echo lang('design_size_chart'); ?></h4>
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			</div>
			<div class="modal-body">				
				<div class="product-detail-size">
					<?php echo $product->size; ?>
				</div>
			</div>
		</div>
	</div>
</div>