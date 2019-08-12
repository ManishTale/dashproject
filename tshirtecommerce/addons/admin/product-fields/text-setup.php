<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2016-03-25
 *
 * @copyright  Copyright (C) 2016 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
 $addons->path_data = dirname(ROOT) .DS. 'data';
 $set = $addons->getSetting();
 if(!isset($data->productTxtAsSettingFlg))
 {
	$data->productTxtAsSettingFlg = '1';
 }
 if(!isset($data->textdefault_attribute) || $data->productTxtAsSettingFlg == '1')
 {
	if(isset($set->txtDefaultVal))
	{
		$data->textdefault_attribute = $set->txtDefaultVal;
	}
	else
	{
		$data->textdefault_attribute = "Hello";
	}
 }
 if(!isset($data->colordefault_attribute) || $data->productTxtAsSettingFlg == '1')
 {
	if(isset($set->text_color))
	{
		$data->colordefault_attribute = $set->text_color;
	}
	else
	{
		$data->colordefault_attribute = "FF0000";
	}
 }
?>
<link rel="stylesheet" type="text/css" href="<?php echo site_url('assets/plugins/pickColor/spectrum.css'); ?>">
<script type='text/javascript' src='<?php echo site_url('assets/plugins/pickColor/spectrum.js'); ?>'></script>
<hr>
<div class="form-group">
	<label class="col-sm-3 control-label">
		<?php echo $addons->__('addon_text_setup_title'); ?>
	</label>
	<div class='col-sm-4'>
		<?php if(isset($data->textdefault_attribute) && $data->textdefault_attribute != '') {?>
			<input type="text" id="productTextValDefault" class="form-control input-sm" name='product[textdefault_attribute]' value="<?php echo $data->textdefault_attribute ?>">
		<?php } else { ?>
			<input type="text" id="productTextValDefault" class="form-control input-sm" name='product[textdefault_attribute]' value="" >
		<?php }  ?>
		<span class="help-block"><small><?php echo $addons->__('addon_text_setu_help'); ?></small></span>
	</div>
	<div class='col-sm-2'>
		<?php if(isset($data->colordefault_attribute) && $data->colordefault_attribute != '') {?>
			<input type="text" id="productTextColorDefault" class="colors" value="<?php echo $data->colordefault_attribute ?>" name="product[colordefault_attribute]">
		<?php } else { ?>
			<input type="text" id="productTextColorDefault"class="colors" value="FF0000" name="product[colordefault_attribute]">
		<?php }  ?>
	</div>
	<input type="hidden" value="<?php echo $data->productTxtAsSettingFlg; ?>" name="product[productTxtAsSettingFlg]" id="productTxtAsSettingFlg"/>
</div>
<script type='text/javascript'>	
jQuery(document).ready(function(){
	jQuery(".colors").spectrum({
		showPalette: true,
		showInput: true,
		preferredFormat: "hex",
		palette: [
			['FFFFFF', 'FCFCFC', 'CCCCCC', '333333'],
			['000000', '428BCA', 'F65E13', '2997AB'],
			['5CB85C', 'D9534F', 'F0AD4E', '5BC0DE'],
			['C3512F', '7C6853', 'F0591A', '2D5C88'],
			['4ECAC2', '435960', '734854', 'A81010'],
		]
	});
	var check = "<?php echo $data->productTxtAsSettingFlg; ?>";
	if(check == '1')
	{
		var saveBtn      = jQuery('#myTab .pull-right button[type=submit]');
		var asSettingFlg = jQuery('#productTxtAsSettingFlg');
		saveBtn.click(function() {
			var txtDefaultVal = "<?php echo $data->textdefault_attribute; ?>";
			var colordefault  = "<?php echo $data->colordefault_attribute; ?>";
			if(txtDefaultVal != jQuery('#productTextValDefault').val())
			{
				asSettingFlg.val('0');
			}
			if(colordefault.replace('#', '') != jQuery('#productTextColorDefault').val().replace('#', ''))
			{
				asSettingFlg.val('0');
			}
		});
	}
});
</script>