<?php

include_once(ROOT.DS.'includes'.DS.'functions.php');
$dg = new dg();

if ($dg->platform == 'wordpress') {
?>
<hr />
<div class="form-group">
	<div class="col-sm-12">
		<label class="checkbox-inline">
			<?php if(isset($data->hide_quickview) && $data->hide_quickview == 1) { ?>
				<input type='checkbox' name='product[hide_quickview]' checked="checked" value="1">
			<?php } else { ?>
				<input type='checkbox' name='product[hide_quickview]' value="1">
			<?php } ?>
			<strong>Hide quick edit.</strong> <small>(If you active this option, client can edit text, logo in page product detail.)</small>
		</label>
	</div>
</div>

<?php } ?>