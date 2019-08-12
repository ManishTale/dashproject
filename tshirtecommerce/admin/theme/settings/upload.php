<div class="panel panel-default">
	<div class="panel-heading">
		<i class="clip-upload"></i> <?php lang('settings_upload'); ?>
		<div class="panel-tools">
			<a href="javascript:void(0);" class="btn btn-xs btn-link panel-collapse collapses"></a>
		</div>
	</div>

	<div class="panel-body">
		<div class="form-group row">
			<label class="col-sm-3 control-label"><?php lang('settings_upload_min'); ?></label>
			<div class="col-sm-6">
				<input type="text" class="form-control input-sm" value="<?php if(!empty($data['settings']['site_upload_min'])) echo $data['settings']['site_upload_min']; else echo 0.5; ?>" name="setting[site_upload_min]">
			</div>
			<div class="col-sm-2">MB</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-3 control-label"><?php lang('settings_upload_max'); ?></label>
			<div class="col-sm-6">
				<input type="text" class="form-control input-sm" value="<?php if(!empty($data['settings']['site_upload_max'])) echo $data['settings']['site_upload_max']; else echo 10; ?>" name="setting[site_upload_max]">
			</div>
			<div class="col-sm-2">MB</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-3 control-label">Allow system check DPI</label>
			<div class="col-sm-6">
				<?php echo displayRadio('settings_check_dpi', $data['settings'], 'settings_check_dpi', 0); ?>
			</div>
		</div>
		
		<div class="form-group row">
			<label class="col-sm-3 control-label"><?php lang('settings_upload_dpi'); ?></label>
			<div class="col-sm-6">
				<input type="text" class="form-control input-sm" value="<?php if(!empty($data['settings']['dpioutput'])) echo $data['settings']['dpioutput']; else echo 72; ?>" name="setting[dpioutput]">
			</div>
			<div class="col-sm-2">DPI</div>
			<div class="col-sm-offset-3 col-sm-9"><span class="help-block"><small><?php lang('settings_upload_dpi_description'); ?></small></span></div>
		</div>
		
		<div class="form-group row">
			<label class="col-sm-3 control-label"><?php lang('settings_upload_show_terms'); ?></label>
			<div class="col-sm-6">
				<?php echo displayRadio('settings_show_terms', $data['settings'], 'settings_show_terms', 1); ?>
			</div>
		</div>
		
		<div class="form-group row">
			<label class="col-sm-3 control-label"><?php lang('settings_upload_terms'); ?></label>
			<div class="col-sm-6">
				<input type="text" class="form-control input-sm" value="<?php if(!empty($data['settings']['site_upload_terms'])) echo $data['settings']['site_upload_terms']; else echo '#'; ?>" name="setting[site_upload_terms]">
				<span class="help-block"><small><?php lang('settings_upload_terms_des'); ?></small></span>
			</div>				
		</div>
		
		<div class="form-group row">
			<label class="col-sm-3 control-label">Change color of photo</label>
			<div class="col-sm-9">
				<?php echo displayRadio('photo_color', $data['settings'], 'photo_color', 1); ?>
				<span class="help-block"><small>Option allow customers change color of photo to one color.</small></span>
			</div>				
		</div>
		<div class="form-group row">
			<label class="col-sm-3 control-label">Color default</label>
			<div class="col-sm-9">
				<input type="text" class="form-control input-sm colors" value="<?php if(!empty($data['settings']['photo_color_default'])) echo $data['settings']['photo_color_default']; else echo '#000000'; ?>" name="setting[photo_color_default]">
				<span class="help-block"><small>Setting color default when change color of photo</small></span>
			</div>				
		</div>
	</div>
</div>