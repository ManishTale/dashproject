<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-12-10
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
  $cat_title = '';
  if(isset($data['cat_title']))			
	  $cat_title = $data['cat_title'];
 
  $cat_description = '';
  if(isset($data['cat_description'])) 	
	  $cat_description = $data['cat_description'];
 
  $cat_id = 0;
  if(isset($data['cat_id'])) 			
	  $cat_id = $data['cat_id'];
  
  $parent_id = 0;
  if(isset($data['parent_id'])) 			
	  $parent_id = $data['parent_id'];
  
  
?>
<form id='store_category_form' action='' method='post'>
<div class="modal-header">
	<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
	<h4 class="modal-title">
		<?php if($cat_id > 0) echo $addons->__('addon_store_label_info');else echo $addons->__('addon_store_label_add'); ?>
	</h4>
</div>

<div class="modal-body">
	<div class='row'>
		<div id='store_info_form'>	
			<input type='hidden' id='txtid' name='data[cat_id]' value='<?php if($cat_id > 0) echo $cat_id;else echo $data['cat_max']; ?>' />
			<div class='form-group'>
				<label for="txttitle">
					<?php echo $addons->__('addon_store_menu_parent_category'); ?>
				</label>
				<select class="form-control" name='data[parent_id]'>
					<?php 
						if(isset($data['category']))
						{
							foreach($data['category'] as $key=>$value)
							{
								if($cat_id == 0)
								{
									if($key == 0)
										echo "<option value='$key' selected>$value</option>";
									else
										echo "<option value='$key'>$value</option>";
								}
								else
								{
									if($key != $cat_id)
									{
										if($parent_id != $key)
											echo "<option value='$key'>$value</option>";
										else
											echo "<option value='$key' selected>$value</option>";
									}
								}
							}
						}
					?>
				</select>
			</div>
			<div class='form-group'>
				<label for="txttitle">
					<?php echo $addons->__('addon_store_label_title'); ?>
				</label>
				<input class='form-control' id='txttitle' name='data[cat_title]' value='<?php echo $cat_title; ?>' />
			</div>
			<div class='form-group'>
				<label for="txtdescript">
					<?php echo $addons->__('addon_store_label_description'); ?>
				</label>
				<textarea id='txtdescript' name='data[cat_description]' class='form-control' rows='5'><?php echo $cat_description; ?></textarea>
			</div>
		</div>
	</div>
</div>

<div class="modal-footer">
	<button type="button" class="btn btn-default" data-dismiss="modal"><?php lang('close'); ?></button>
	<button type="button" class="btn btn-primary" data-dismiss="modal" onclick="submit_info(<?php echo $cat_id; ?>)"><?php lang('save'); ?></button>
</div>
</form>
<script type='text/javascript'>
	function submit_info(id)
	{
		jQuery('#store_category_form').attr('action', '<?php echo site_url('index.php/store/update/'); ?>' + id);
		jQuery('#store_category_form').submit();
		//if()
	}
</script>