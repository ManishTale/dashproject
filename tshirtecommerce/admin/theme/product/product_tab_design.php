<?php
$product_colors 	= array();
$design_front 	= array();
$design_back 	= array();
$design_left 	= array();
$design_right 	= array();
$design = array();
if (isset($product->design))
{
	$design = $product->design;
	if( isset($design->color_hex) && count($design->color_hex)) 
	{
		for( $i=0; $i<count($design->color_hex); $i++)
		{
			$product_colors[$i] = array(
				'hex' => $design->color_hex[$i], 
				'title' => $design->color_title[$i],
				'price' => $design->price[$i],
			);

			if (isset($design->front[$i]))
				$front = $design->front[$i];
			else
				$front = '';
			
			if (isset($design->back[$i]))
				$back = $design->back[$i];
			else
				$back = '';
			
			if (isset($design->left[$i]))
				$left = $design->left[$i];
			else
				$left = '';
			
			if (isset($design->right[$i]))
				$right = $design->right[$i];
			else
				$right = '';
			
			$front 	= str_replace('///', '/', $front);
			$back 	= str_replace('///', '/', $back);
			$left 	= str_replace('///', '/', $left);
			$right 	= str_replace('///', '/', $right);

			if($front != '')
				$design_front[$i] = $front;
			if($back != '')
				$design_back[$i] = $back;
			if($left != '')
				$design_left[$i] = $left;
			if($right != '')
				$design_right[$i] = $right;
		}
	}
}
?>
<script type="text/html" id="html_color">
	<div class="color-group">
		<div class="color-group-left">
			<div class="product-color"></div>
			<input type="hidden" value="000000" name="product[design][color_hex][]">
		</div>
		<div class="color-group-right">
			<input type="text" name="product[design][color_title][]" class="form-control color_title_value" placeholder="Color title">
			<div class="input-group">
				<span class="input-group-addon" title="Price extra"><small>$</small></span>
				<input type="text" class="form-control" name="product[design][price][]" placeholder="Extra">
			</div>
		</div>
		<span onclick="product_js.removeColor(this)" class="close text-red"><i class="fa fa-times-circle"></i></span>
	</div>
</script>

<div class="form-group wapper-data-design">
	<div class="product-row">
		<div class="product-col-left">
			<div class="product-col-title">
				<h5>Product Color</h5>
				<a href="javascript:void(0);" onclick="product_js.priceColor(this)">Edit color & price extra</a>
			</div>
		</div>
		<div class="product-col-right">
			<div class="product-col-content">
				<div class="color-list">
				<?php for($ii=0; $ii< count($product_colors); $ii++ ) { ?>
					
					<div class="color-group">
						<div class="color-group-left">
							<div class="product-color">
								<?php
								$colors_hex = explode(';', $product_colors[$ii]['hex']);
								$with_color = 100/count($colors_hex);												
								for($jc=0; $jc < count($colors_hex); $jc++)
								{
								?>
								<span data-hex="<?php echo $colors_hex[$jc]; ?>" class="color-box" style="background-color:#<?php echo $colors_hex[$jc]; ?>;width:<?php echo $with_color; ?>%"></span>
								<?php } ?>
							</div>
							<input type="hidden" value="<?php echo $product_colors[$ii]['hex']; ?>" name="product[design][color_hex][]">
						</div>

						<div class="color-group-right">
							<?php if($ii > 0) { ?>
							<input type="hidden" id="front-products-design-<?php echo $ii; ?>" value="<?php echo setValue($design->front, $ii, ''); ?>">
							<input type="hidden" id="back-products-design-<?php echo $ii; ?>" value="<?php echo setValue($design->back, $ii, ''); ?>">
							<input type="hidden" id="left-products-design-<?php echo $ii; ?>" value="<?php echo setValue($design->left, $ii, ''); ?>">
							<input type="hidden" id="right-products-design-<?php echo $ii; ?>" value="<?php echo setValue($design->right, $ii, ''); ?>">
							<?php } ?>
							<input type="text" name="product[design][color_title][]" class="form-control" value="<?php echo $product_colors[$ii]['title']; ?>" placeholder="Color title">
							<div class="input-group">
								<span class="input-group-addon"><small>$</small></span>
								<input type="text" class="form-control" name="product[design][price][]" value="<?php echo $product_colors[$ii]['price']; ?>" placeholder="Extra">
							</div>
						</div>

						<span onclick="product_js.removeColor(this)" class="close text-red"><i class="fa fa-times-circle"></i></span>
					</div>
					
				<?php } ?>
				</div>

				<div class="product-btn">
					<button type="button" onclick="product_js.showColor();" class="btn btn-default"><i class="fa fa-plus-circle" aria-hidden="true"></i> Add Color</button>
				</div>
			</div>
		</div>
	</div>

	<div class="product-row">
		<div class="product-col-left">
			<div class="form-group">
				<label>Use color picker <span class="tooltips" data-placement="right" data-original-title="Show color picker in product color"><i class="fa fa-info-circle"></i></span></label>
			</div>

			<div class="form-group">
				<label>Change color of <span class="tooltips" data-placement="right" data-original-title="When change product color system will change background color of product image or area design"><i class="fa fa-info-circle"></i></span></label>
			</div>
		</div>
		<div class="product-col-right">
			<div class="form-group">
				<div class="switch">
					<?php 
					if( isset($design->color_picker) )
						$color_picker = 'checked="checked"';
					else
						$color_picker = '';
					?>
					<label>NO <input type="checkbox" <?php echo $color_picker; ?> name="product[design][color_picker]" value="1"><span class="lever"></span> YES</label>
				</div>
			</div>

			<div class="form-group">
				<div class="switch">
					<?php 
					if( isset($design->change_bg) )
						$change_bg = 'checked="checked"';
					else
						$change_bg = '';
					?>
					<label>Product image <input type="checkbox" <?php echo $change_bg; ?> name="product[design][change_bg]" value="1"><span class="lever"></span> Area design</label>
				</div>
			</div>
		</div>
	</div>
	
	<?php
		$view_label_front = 'Front';
		if(isset($product->view_label) && isset($product->view_label->front) && $product->view_label->front != '') {
			$view_label_front = $product->view_label->front;
		}
		$view_label_back = 'Back';
		if(isset($product->view_label) && isset($product->view_label->back) && $product->view_label->back != '') {
			$view_label_back = $product->view_label->back;
		}
		$view_label_left = 'Left';
		if(isset($product->view_label) && isset($product->view_label->left) && $product->view_label->left != '') {
			$view_label_left = $product->view_label->left;
		}
		$view_label_right = 'Right';
		if(isset($product->view_label) && isset($product->view_label->right) && $product->view_label->right != '') {
			$view_label_right = $product->view_label->right;
		}
	?>
	<!-- BEGIN FRONT -->
	<div class="product-row product-view" id="view-front">
		<div class="product-col-left">
			<div class="product-col-title">
				<h5>
					<button type="button" onclick="product_js.view_label('front')" title="Edit label" class="btn btn-primary btn-xs tooltips pull-right"><i class="clip-pencil-3"></i></button>

					 <span class="view_label_front"><?php echo $view_label_front; ?></span>
				</h5>
				
				<?php
				if($view_label_front == 'Front')
					$view_label_custom = '';
				else
					$view_label_custom = $view_label_front;
				?>
				<input type="hidden" name="product[view_label][front]" class="view_label_front" value="<?php echo $view_label_custom; ?>">
				
				<a href="javascript:void(0)" onclick="product_js.design('front')">Setup area design</a>
			</div>
		</div>

		<div class="product-col-right">
			<div class="product-col-content">
				<div class="img-list"></div>

				<div class="product-btn">
					<button type="button" onclick="product_js.showImg('front')" class="btn btn-default"><i class="fa fa-plus-circle" aria-hidden="true"></i> Add Image</button>
				</div>
			</div>
		</div>
	</div>
	<!-- END FRONT -->

	<!-- BEGIN BACK -->
	<div class="product-row product-view" id="view-back" style="display:none;">
		<div class="product-col-left">
			<div class="product-col-title">
				<span onclick="product_js.hideView(this)" class="tab-close close text-red"><i class="fa fa-times-circle"></i></span>
				
				<h5><span class="view_label_back"><?php echo $view_label_back; ?></span> <button type="button" onclick="product_js.view_label('back')" title="Edit label" class="btn btn-primary btn-xs tooltips pull-right"><i class="clip-pencil-3"></i></button></h5>
				
				<?php
				if($view_label_back == 'Back')
					$view_label_custom = '';
				else
					$view_label_custom = $view_label_back;
				?>
				<input type="hidden" name="product[view_label][back]" class="view_label_back" value="<?php echo $view_label_custom; ?>">

				<a href="javascript:void(0)" onclick="product_js.design('back')">Setup area design</a>
			</div>
		</div>

		<div class="product-col-right">
			<div class="product-col-content">
				<div class="img-list"></div>

				<div class="product-btn">
					<button type="button" onclick="product_js.showImg('back')" class="btn btn-default"><i class="fa fa-plus-circle" aria-hidden="true"></i> Add Image</button>
				</div>
			</div>
		</div>
	</div>
	<!-- END BACK -->

	<!-- BEGIN LEFT -->
	<div class="product-row product-view" id="view-left" style="display:none;">
		<div class="product-col-left">
			<div class="product-col-title">
				<span onclick="product_js.hideView(this)" class="tab-close close text-red"><i class="fa fa-times-circle"></i></span>
				
				<h5><span class="view_label_left"><?php echo $view_label_left; ?></span> <button type="button" onclick="product_js.view_label('left')" title="Edit label" class="btn btn-primary btn-xs tooltips pull-right"><i class="clip-pencil-3"></i></button></h5>
				<?php
				if($view_label_left == 'Left')
					$view_label_custom = '';
				else
					$view_label_custom = $view_label_left;
				?>
				<input type="hidden" name="product[view_label][left]" class="view_label_left" value="<?php echo $view_label_custom; ?>">

				<a href="javascript:void(0)" onclick="product_js.design('left')">Setup area design</a>
			</div>
		</div>

		<div class="product-col-right">
			<div class="product-col-content">
				<div class="img-list"></div>

				<div class="product-btn">
					<button type="button" onclick="product_js.showImg('left')" class="btn btn-default"><i class="fa fa-plus-circle" aria-hidden="true"></i> Add Image</button>
				</div>
			</div>
		</div>
	</div>
	<!-- END LEFT -->

	<!-- BEGIN RIGHT -->
	<div class="product-row product-view" id="view-right" style="display:none;">
		<div class="product-col-left">
			<div class="product-col-title">
				<span onclick="product_js.hideView(this)" class="tab-close close text-red"><i class="fa fa-times-circle"></i></span>
				<h5><span class="view_label_right"><?php echo $view_label_right; ?></span> <button type="button" onclick="product_js.view_label('right')" title="Edit label" class="btn btn-primary btn-xs tooltips pull-right"><i class="clip-pencil-3"></i></button></h5>
				<?php
				if($view_label_right == 'Right')
					$view_label_custom = '';
				else
					$view_label_custom = $view_label_right;
				?>
				<input type="hidden" name="product[view_label][right]" class="view_label_right" value="<?php echo $view_label_custom; ?>">

				<a href="javascript:void(0)" onclick="product_js.design('right')">Setup area design</a>
			</div>
		</div>

		<div class="product-col-right">
			<div class="product-col-content">
				<div class="img-list"></div>

				<div class="product-btn">
					<button type="button" onclick="product_js.showImg('right')" class="btn btn-default"><i class="fa fa-plus-circle" aria-hidden="true"></i> Add Image</button>
				</div>
			</div>
		</div>
	</div>
	<!-- END RIGHT -->
</div>
<div class="form-group">
	<button type="button" onclick="product_js.addView()" class="btn btn-info"><i class="fa fa-plus-circle"></i> Add View</button>
</div>

<div class="wapper-area-design"></div>

<?php
$design_data = array('front' => '', 'back' => '', 'left' => '', 'right' => '');
if(isset($design))
{
	if(isset($design->front))
	{
		$design_data['front'] = setValue($design->front, 0, '');
	}
	if(isset($design->back))
	{
		$design_data['back'] = setValue($design->back, 0, '');
	}
	if(isset($design->left))
	{
		$design_data['left'] = setValue($design->left, 0, '');
	}
	if(isset($design->right))
	{
		$design_data['right'] = setValue($design->right, 0, '');
	}
}
?>
<input type="hidden" id="front-products-design-0" value="<?php echo $design_data['front']; ?>">
<input type="hidden" id="back-products-design-0" value="<?php echo $design_data['back']; ?>">
<input type="hidden" id="left-products-design-0" value="<?php echo $design_data['left']; ?>">
<input type="hidden" id="right-products-design-0" value="<?php echo $design_data['right']; ?>">

<?php
/* read old product with add more image layers */
if(count($design_front)) {
	for($ii=0; $ii<count($design_front); $ii++)
	{
		echo '<input type="hidden" class="input-old-data" data-view="front" value="'.$design_front[$ii].'">';
	}
}
if(count($design_back)) {
	for($ii=0; $ii<count($design_back); $ii++)
	{
		echo '<input type="hidden" class="input-old-data" data-view="back" value="'.$design_back[$ii].'">';
	}
}
if(count($design_left)) {
	for($ii=0; $ii<count($design_left); $ii++)
	{
		echo '<input type="hidden" class="input-old-data" data-view="left" value="'.$design_left[$ii].'">';
	}
}
if(count($design_right)) {
	for($ii=0; $ii<count($design_right); $ii++)
	{
		echo '<input type="hidden" class="input-old-data" data-view="front" value="'.$design_right[$ii].'">';
	}
}
?>
<input type="hidden" class="input-data" id="design_images_front" value="<?php echo setValue($design, 'images_front', ''); ?>">
<input type="hidden" class="input-data" id="design_images_back" value="<?php echo setValue($design, 'images_back', ''); ?>">
<input type="hidden" class="input-data" id="design_images_left" value="<?php echo setValue($design, 'images_left', ''); ?>">
<input type="hidden" class="input-data" id="design_images_right" value="<?php echo setValue($design, 'images_right', ''); ?>">

<input type="hidden" name="product[box_width]" class="box_width form-control input-sm" value="<?php echo setValue($product, 'box_width', 500); ?>">
<input type="hidden" name="product[box_height]" class="box_height form-control input-sm" value="<?php echo setValue($product, 'box_height', 500); ?>">				
		
<?php
	if (isset($design) && isset($design->params))
		$params = $design->params;
	else
		$params = new stdClass();
	
	if (isset($design) && isset($design->area))
		$area = $design->area;
	else
		$area = new stdClass();
?>
<input type="hidden" value="<?php echo setValue($params, 'front', ''); ?>" id="products-design-print-front" name="product[design][params][front]" />
<input type="hidden" value="<?php echo setValue($params, 'back', ''); ?>" id="products-design-print-back" name="product[design][params][back]" />
<input type="hidden" value="<?php echo setValue($params, 'left', ''); ?>" id="products-design-print-left" name="product[design][params][left]" />
<input type="hidden" value="<?php echo setValue($params, 'right', ''); ?>" id="products-design-print-right" name="product[design][params][right]" />
<input type="hidden" value="<?php echo setValue($area, 'front', ''); ?>" id="products-design-area-front" name="product[design][area][front]" />
<input type="hidden" value="<?php echo setValue($area, 'back', ''); ?>" id="products-design-area-back" name="product[design][area][back]" />
<input type="hidden" value="<?php echo setValue($area, 'left', ''); ?>" id="products-design-area-left" name="product[design][area][left]" />
<input type="hidden" value="<?php echo setValue($area, 'right', ''); ?>" id="products-design-area-right" name="product[design][area][right]" />