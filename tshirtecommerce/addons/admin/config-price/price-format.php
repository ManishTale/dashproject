<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-09-11
 *
 * API
 *
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
 //echo '<pre>'; print_r($data['settings']); echo '</pre>';
?>
<div style="display: none;">
<div class="row">
	<div class="col-md-3 col-sm-3">
		<label><?php echo $addons->__('addon_price_format_number'); ?></label>
		<span class="help-block"><small><?php echo $addons->__('addon_price_format_number_des'); ?></small></span>
	</div>
	<div class="col-md-3 col-sm-3">
		<input type="text" name="setting[price_number]" class="form-control" value="<?php echo setValue($data['settings'], 'price_number', 2); ?>"/>
	</div>
</div>
<div class="row">
	<div class="col-md-3 col-sm-3">
		<label><?php echo $addons->__('addon_price_thousand_separator'); ?></label>
		<span class="help-block"><small><?php echo $addons->__('addon_price_thousand_separator_des'); ?></small></span>
	</div>
	<div class="col-md-3 col-sm-3">
		<input type="text" name="setting[price_thousand]" class="form-control" value="<?php echo setValue($data['settings'], 'price_thousand', ','); ?>"/>
	</div>
</div>
<div class="row">
	<div class="col-md-3 col-sm-3">
		<label><?php echo $addons->__('addon_price_decimal_separator'); ?></label>
		<span class="help-block"><small><?php echo $addons->__('addon_price_decimal_separator_des'); ?></small></span>
	</div>
	<div class="col-md-3 col-sm-3">
		<input type="text" name="setting[price_decimal]" class="form-control" value="<?php echo setValue($data['settings'], 'price_decimal', '.'); ?>"/>
	</div>
</div>
<div class="row">
	<div class="col-md-3 col-sm-3">
		<label><?php echo $addons->__('addon_price_format_currency'); ?></label>
		<span class="help-block"><small><?php echo $addons->__('addon_price_format_currency_des'); ?></small></span>
	</div>
	<div class="col-md-3 col-sm-3">
		<select name="setting[currency_postion]" class="form-control">
			<?php if (setValue($data['settings'], 'currency_postion', 'left') == 'left') { ?>
			<option value="left" selected="selected"><?php echo $addons->__('addon_price_format_currency_left'); ?></option>
			<option value="right"><?php echo $addons->__('addon_price_format_currency_right'); ?></option>
			<?php }else{ ?>
			<option value="left"><?php echo $addons->__('addon_price_format_currency_left'); ?></option>
			<option value="right" selected="selected"><?php echo $addons->__('addon_price_format_currency_right'); ?></option>
			<?php } ?>
		</select>
	</div>
</div>
</div>
