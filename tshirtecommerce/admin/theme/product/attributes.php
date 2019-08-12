<div class="customfields">
	<?php 
	if (isset($product->attributes) && isset($product->attributes->name)) {
		$attributes = $product->attributes;
		if (is_string($product->attributes->name))
			$a_names	= json_decode($product->attributes->name, true);
		else
			$a_names	= $product->attributes->name;
		
		if (is_string($product->attributes->titles))
			$o_titles	= json_decode($product->attributes->titles, true);
		else
			$o_titles	= $product->attributes->titles;
		
		if (is_string($product->attributes->prices))
			$o_prices	= json_decode($product->attributes->prices, true);
		else
			$o_prices	= $product->attributes->prices;
		
		if (is_string($product->attributes->type))
			$o_type		= json_decode($product->attributes->type, true);
		else
			$o_type		= $product->attributes->type;												
	?>
	<?php for($i=0; $i<count($a_names); $i++) { ?>
	<div class="panel panel-simple" data-attribute="<?php echo $i; ?>">
		<div class="panel-heading">									
			<span class="attribute-title"><?php lang('product_data'); ?></span>
			<a href="javascript:void(0);" onclick="dgUI.product.field(this, 'add')" data-id="<?php echo $i; ?>" class="btn btn-default btn-xs">
				<?php lang('add'); ?>
			</a>									
			<div class="panel-tools">									
				<a href="javascript:void(0);" class="btn btn-xs btn-link panel-collapse collapses"></a>
				<a href="javascript:void(0);" onclick="dgUI.product.attribute(this)" class="btn btn-xs btn-link">
					<i class="glyphicon glyphicon-remove"></i>
				</a>
			</div>
		</div>

		<div class="panel-body">
			<div class="col-xs-4">
				<div class="row">
					<div class="form-group">
						<label for="form-field-22"><?php lang('attribute_name'); ?></label>
						<input type="text" class="form-control input-sm" value="<?php echo $a_names[$i]; ?>" name="product[fields][<?php echo $i; ?>][name]">
						<div class="add-attribute"></div>
					</div>
				</div>
				
				<div class="row">
					<div class="form-group">
						<label><?php lang('attribute_type'); ?></label>
						<select name="product[fields][<?php echo $i; ?>][type]" class="fields-type form-control input-sm">
							<option value="selectbox" <?php if($o_type[$i] == 'selectbox') echo 'selected="selected"'; ?>><?php lang('product_text_list');?></option>
							<option value="textlist" <?php if($o_type[$i] == 'textlist') echo 'selected="selected"'; ?>><?php lang('product_select_dropdown');?></option>
							<option value="checkbox" <?php if($o_type[$i] == 'checkbox') echo 'selected="selected"'; ?>><?php lang('product_checkbox');?></option>
							<option value="radio" <?php if($o_type[$i] == 'radio') echo 'selected="selected"'; ?>><?php lang('product_button_radio');?></option>
						</select>
					</div>
				</div>
			</div>
			<div class="col-xs-8">
				<div class="attrbutes-fields">
					<div class="row form-group">
						<div class="col-xs-4 pull-right">
							<center>
							<?php lang('remove'); ?>
							</center>
						</div>
						<div class="col-xs-4 pull-right">
							<center>
							<?php lang('price'); ?>
							<br />
							<small>+/-</small>
							</center>
						</div>
						<div class="col-xs-4 pull-right">
							<?php lang('title'); ?>
						</div>
					</div>
					<?php if (isset($o_titles[$i]) && count($o_titles[$i]) > 0){
						for($j=0; $j<count($o_titles[$i]); $j++) { ?>
						
						<div class="row form-group row-fields">
							<div class="col-xs-4 pull-right">
								<center><small><a href="javascript:void(0);" onclick="dgUI.product.field(this,'remove')"><i class="clip-close"></i></a></small></center>
							</div>
							<div class="col-xs-4 pull-right">
								<input type="text" class="form-control input-sm" value="<?php echo $o_prices[$i][$j]; ?>" name="product[fields][<?php echo $i; ?>][prices][]">
							</div>
							<div class="col-xs-4 pull-right">
								<input type="text" class="form-control input-sm" value="<?php echo $o_titles[$i][$j]; ?>"  name="product[fields][<?php echo $i; ?>][titles][]">
							</div>
						</div>
						
						<?php } ?>
					<?php } ?>
				</div>
			</div>
		</div>
	</div>
	<?php } ?>
	<?php } ?>
</div>
<div class="form-group">
	<a href="javascript:void(0);" onclick="dgUI.product.attribute('add')" class="btn btn-primary white">
		<?php lang('add'); ?>
	</a>
</div>