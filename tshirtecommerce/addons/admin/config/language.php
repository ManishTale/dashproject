<div class="panel panel-default">
	<div class="panel-heading">
		<i class="clip-phone"></i> Multi language
		<div class="panel-tools">
			<a href="javascript:void(0);" class="btn btn-xs btn-link panel-collapse collapses"></a>
		</div>
	</div>
	<div class="panel-body">
		<div class="form-group row">
			<label class="col-sm-3 control-label">
				<?php echo $addons->__('addon_setting_show_languages'); ?>
			</label>
			<div class="col-sm-6s">
				<?php echo displayRadio('show_languages', $data['settings'], 'show_languages', 1); ?>		
			</div>
		</div>
	</div>
</div>