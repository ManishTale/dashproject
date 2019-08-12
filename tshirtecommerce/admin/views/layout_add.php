<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2017-01-10
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
if ( ! defined('ROOT')) exit('No direct script access allowed');
?>
<script src="<?php echo site_url('assets/plugins/validate/validate.js'); ?>"></script>

<?php if (isset($data['error'])) {?>
	<div class="col-md-12"><div class="alert alert-danger"><?php echo $data['error']; ?></div></div>
<?php } ?>

<?php if (isset($data['msg'])) {?>
	<div class="col-md-12"><div class="alert alert-success"><?php echo $data['msg']; ?></div></div>
<?php } ?>

<form action="<?php echo site_url('index.php/layout/add'); ?>" method="POST" id="panel-form">

	<div class="col-md-12">
		<p style="text-align:right;">
			<button type="submit" onclick="return saveLayout(this);" class="btn btn-primary"><i class="glyphicon glyphicon-floppy-save"></i> Save</button>
			<button type="button" onclick="window.location ='<?php echo site_url('index.php/layout/add'); ?>'" class="btn btn-info"><i class="fa fa-refresh"></i></button>
			<button type="button" onclick="window.location ='<?php echo site_url('index.php/layout'); ?>'" class="btn btn-danger">Close</button>
		</p>
	</div>

	<div class="col-md-5">
		<div class="panel panel-default">
			<div class="panel-heading">
				<i class="fa fa-external-link-square icon-external-link-sign"></i>
				Add new layout
			</div>
			<div class="modal-body">					
				<div class="panel-body">
					
					<div class="form-group">
						<label class="control-label">
							Choose a Theme <span style="color: #e6674a;">*</span>
						</label>
						<select name="theme[theme]" class="form-control">
						
						<?php if(isset($data['themes']) && $data['themes'] != false && count($data['themes'])) { ?>
							
							<?php foreach($data['themes'] as $theme) { ?>
							<option value="<?php echo $theme['name']; ?>"><?php echo $theme['title']; ?></option>
							<?php } ?>
							
						<?php } ?>
						
						</select>
					</div>
					
					<div class="form-group">
						<label class="control-label">
							Layout title <span style="color: #e6674a;">*</span>
						</label>
						<input type="text" class="form-control validate required" name="theme[title]" data-minlength="2" data-minlength="200" data-msg="Please enter title of layout" value="">
					</div>
					
					<div class="form-group">
						<label class="control-label">
							Layout description
						</label>
						<textarea rows="3" cols="60" class="form-control" name="theme[description]"></textarea>					
					</div>
				</div>
			</div>
		</div>
	</div>
</form>

<script type="text/javascript">
function saveLayout(e)
{		
	var check = jQuery('#panel-form').validate({event: 'click', obj: e});		
	return check;
}
</script>