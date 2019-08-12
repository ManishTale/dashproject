<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2016-03-25
 *
 * @copyright  Copyright (C) 2016 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
$dgClass 		= new dg();
$settings 		= $dgClass->getSetting();

$is_store 		= false;
if(isset($settings->store))
{
	$store 		= $settings->store;
	if(isset($store->api) && $store->api != '' && isset($store->enable) && $store->enable == 1)
	{
		$is_store = true;
	}
}

if($is_store == true)
{
	include_once(dirname(ROOT) .DS. 'includes' .DS. 'store.php');
	$store			= new store($settings, ROOT);
	$categories 		= $store->getCategories('idea');

	$types			= $store->getData('types');

	if(empty($data->store))
	{
		$store_data 			= new stdClass();
		$store_data->categories		= array();
		$store_data->types		= array();
		$check_all 				= true;
	}
	else
	{
		$store_data		= $data->store;
		$check_all 		= false;
	}
	if(empty($store_data->categories))
	{
		$store_data->categories		= array();
	}
	if(empty($store_data->types))
	{
		$store_data->types		= array();
	}
?>
	<hr>
	<div class="col-sm-12">
		<h4>Setup Use Store</h4>
		<p><small>Please choose categories and design type of design idea will show in this product. Default is show all</small></p>
	</div>

	<div class="form-group">
		<label class="col-sm-3 control-label">
			Choose List Categories
		</label>
		
		<div class="col-sm-8">
			<select class="form-control" multiple size="10" name="product[store][categories][]">
				<?php if(count($categories)) { ?>
					
					<?php foreach($categories as $cate) { ?>
					<option <?php if( $check_all == true || in_array($cate['id'], $store_data->categories) ) echo 'selected="selected"'; ?> value="<?php echo $cate['id']; ?>"><?php echo $cate['title']; ?></option>
					
						<?php if( isset($cate['children']) && count($cate['children']) >0 ) { ?>
						
							<?php foreach($cate['children'] as $child) { ?>
							<option <?php if( $check_all == true || in_array($child['id'], $store_data->categories) ) echo 'selected="selected"'; ?> value="<?php echo $child['id']; ?>"> &nbsp;&nbsp;&nbsp;- <?php echo $child['title']; ?></option>
							<?php } ?>
						
						<?php } ?>
						
					<?php } ?>
					
				<?php } ?>
			</select>
		</div>
	</div>

	<div class="form-group">
		<label class="col-sm-3 control-label">
			Choose List Design Type
		</label>
		
		<div class="col-sm-8">
			<select class="form-control" multiple size="10" name="product[store][types][]">
			<?php if(count($types)) { ?>
				
				<?php foreach($types as $type) { ?>
					<option <?php if( $check_all == true || in_array($type['id'], $store_data->types) ) echo 'selected="selected"'; ?> value="<?php echo $type['id']; ?>"><?php echo $type['title']; ?></option>
				<?php } ?>
				
			<?php } ?>
			</select>
		</div>
	</div>
<?php } ?>