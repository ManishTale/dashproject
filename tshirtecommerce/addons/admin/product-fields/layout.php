<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2016-01-10
 *
 * API Theme
 *
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
$themes = $addons->getLayouts();
if($themes != false && count($themes)){
	$theme_default = '';
	
	if(isset($data->theme) && $data->theme != '')
	{
		$theme_default = $data->theme;
	}
	else
	{
		$dgClass 		= new dg();
		$settings 		= $dgClass->getSetting();
		if(isset($settings->themes))
		{
			$theme_default = $settings->themes;
		}
	}
?>
<hr />
<div class="form-group">
	<label class="col-sm-3 control-label">
		Choose UI & Layout		
	</label>
	
	<div class="col-sm-4">
		<select name="product[theme]" class="form-control input-sm">
			<option value="">- Select a layout - </option>
		<?php foreach($themes as $theme) { ?>
		
			<option <?php if($theme_default == $theme['name']) echo 'selected="selected"'; ?> value="<?php echo $theme['name']; ?>"><?php echo $theme['title']; ?></option>
		
		<?php } ?>
		
		</select>
	</div>
	<div class="col-sm-offset-3 col-sm-9">
		<span class="help-block"><i class="fa fa-info-circle"></i> Setup layout of design tool on product. Go to <strong>T-Shirt eCommerce > Settings > UI & Layouts</strong> customize layout.</span>
	</div>
</div>
<?php } ?>