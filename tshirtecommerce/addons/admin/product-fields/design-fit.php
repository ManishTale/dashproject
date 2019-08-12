<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2016-03-25
 *
 * @copyright  Copyright (C) 2016 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
if(!isset($data->productCheckItemFitFlg))
{
	$data->productCheckItemFitFlg = '0';
}
if(!isset($data->productCheckItemFitType))
{
	$data->productCheckItemFitType = '1';
}
?>
<hr>
<div class="col-sm-12">
	<h4><?php echo $addons->__('addon_designfit_title'); ?></h4>
	<p><small><?php echo $addons->__('addon_designfit_enablelabel_description'); ?></small></p>
</div>
<div class="form-group">
	<label class="col-sm-3 control-label">
		<?php echo $addons->__('addon_designfit_enablelabel'); ?>
	</label>
	<div class="col-sm-9">
		<label class="radio-inline">
			<?php if($data->productCheckItemFitFlg == '1') { ?>
				<input type="radio" class="productCheckItemFitEnable" name="product[productCheckItemFitFlg]" value="1" checked="checked"/> Yes
			<?php } else { ?>
				<input type="radio" class="productCheckItemFitEnable" name="product[productCheckItemFitFlg]" value="1"/> Yes
			<?php } ?>
		</label>
		<label class="radio-inline">
			<?php if($data->productCheckItemFitFlg == '0') { ?>
				<input type="radio" class="productCheckItemFitDisable" name="product[productCheckItemFitFlg]" value="0" checked="checked"/> No
			<?php } else { ?>
				<input type="radio" class="productCheckItemFitDisable" name="product[productCheckItemFitFlg]" value="0"/> No
			<?php } ?>
		</label>
	</div>
</div>
<div class="form-group productCheckItemFit">
	<label class="col-sm-3 control-label">
		<?php echo $addons->__('addon_designfit_typelabel'); ?>
	</label>
	<div class="col-sm-6">
		<label class="radio-inline">
			<?php if($data->productCheckItemFitType == '1') { ?>
				<input type="radio" class="productCheckItemFitTypeEnable" name="product[productCheckItemFitType]" value="1" checked="checked"/> Yes
			<?php } else { ?>
				<input type="radio" class="productCheckItemFitTypeEnable" name="product[productCheckItemFitType]" value="1"/> Yes
			<?php } ?>
		</label>
		<label class="radio-inline">
			<?php if($data->productCheckItemFitType == '0') { ?>
				<input type="radio" class="productCheckItemFitTypeDisable" name="product[productCheckItemFitType]" value="0" checked="checked"/> No
			<?php } else { ?>
				<input type="radio" class="productCheckItemFitTypeDisable" name="product[productCheckItemFitType]" value="0"/> No
			<?php } ?>
		</label>
	</div>
</div>
<script type='text/javascript'>	
jQuery(document).ready(function(){
	if(jQuery('.productCheckItemFitEnable').prop('checked') == true)
	{
		jQuery('.productCheckItemFit').css('display', 'block');
	}
	else
	{
		jQuery('.productCheckItemFit').css('display', 'none');
	}
	jQuery('.productCheckItemFitEnable').click(function() {
		if(jQuery('.productCheckItemFitEnable').prop('checked') == true)
		{
			jQuery('.productCheckItemFit').show(800);
		}
		else
		{
			jQuery('.productCheckItemFit').hide(800);
		}
	});
	jQuery('.productCheckItemFitDisable').click(function() {
		if(jQuery('.productCheckItemFitDisable').prop('checked') == true)
		{
			jQuery('.productCheckItemFit').hide(800);
		}
		else
		{
			jQuery('.productCheckItemFit').show(800);
		}
	});
});
</script>