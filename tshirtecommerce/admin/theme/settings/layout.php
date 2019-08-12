<div class="panel panel-default">
	<div class="panel-heading">
		<i class="clip-settings"></i> <?php lang('settings_lang_menu'); ?>
		<div class="panel-tools">
			<a href="javascript:void(0);" class="btn btn-xs btn-link panel-collapse collapses"></a>
		</div>
	</div>
	<div class="panel-body">
		<div class="form-group row">
			<label class="col-sm-5 control-label"><?php lang('settings_lang_menu_show_add_to_cart'); ?></label>
			<div class="col-sm-6">
				<?php echo displayRadio('show_add_to_cart', $data['settings'], 'show_add_to_cart'); ?>					
			</div>
		</div>
		
		<div class="form-group row">
			<label class="col-sm-5 control-label"><?php lang('settings_lang_menu_show_price'); ?></label>
			<div class="col-sm-6">
				<?php echo displayRadio('show_total_price', $data['settings'], 'show_total_price'); ?>					
			</div>
		</div>
		
		<div class="form-group row">
			<label class="col-sm-5 control-label"><?php lang('settings_lang_menu_show_price_detail'); ?></label>
			<div class="col-sm-6">
				<?php echo displayRadio('show_detail_price', $data['settings'], 'show_detail_price'); ?>					
			</div>
		</div>
		
		<div class="form-group row">
			<label class="col-sm-5 control-label"><?php lang('settings_lang_menu_show_product'); ?></label>
			<div class="col-sm-6">
				<?php echo displayRadio('show_product_info', $data['settings'], 'show_product_info'); ?>					
			</div>
		</div>
		
		<div class="form-group row">
			<label class="col-sm-5 control-label"><?php lang('settings_lang_menu_show_product_size'); ?></label>
			<div class="col-sm-6">
				<?php echo displayRadio('show_product_size', $data['settings'], 'show_product_size'); ?>					
			</div>
		</div>
		
		<div class="form-group row">
			<label class="col-sm-5 control-label"><?php lang('settings_lang_menu_show_change_product'); ?></label>
			<div class="col-sm-6">
				<?php echo displayRadio('show_product', $data['settings'], 'show_product'); ?>					
			</div>
		</div>
		
		<div class="form-group row">
			<label class="col-sm-5 control-label"><?php lang('settings_lang_menu_show_text'); ?></label>
			<div class="col-sm-6">
				<?php echo displayRadio('show_add_text', $data['settings'], 'show_add_text'); ?>					
			</div>
		</div>
		
		<div class="form-group row">
			<label class="col-sm-5 control-label"><?php lang('settings_lang_menu_show_art'); ?></label>
			<div class="col-sm-6">
				<?php echo displayRadio('show_add_art', $data['settings'], 'show_add_art'); ?>					
			</div>
		</div>
		
		<div class="form-group row">
			<label class="col-sm-5 control-label"><?php lang('settings_lang_menu_show_upload'); ?></label>
			<div class="col-sm-6">
				<?php echo displayRadio('show_add_upload', $data['settings'], 'show_add_upload'); ?>					
			</div>
		</div>
		
		<div class="form-group row">
			<label class="col-sm-5 control-label"><?php lang('settings_lang_menu_show_team'); ?></label>
			<div class="col-sm-6">
				<?php echo displayRadio('show_add_team', $data['settings'], 'show_add_team'); ?>					
			</div>
		</div>
		
		<div class="form-group row">
			<label class="col-sm-5 control-label"><?php lang('settings_lang_menu_show_qrcode'); ?></label>
			<div class="col-sm-6">
				<?php echo displayRadio('show_add_qrcode', $data['settings'], 'show_add_qrcode'); ?>					
			</div>
		</div>
		
		<div class="form-group row">
			<label class="col-sm-5 control-label"><?php lang('settings_lang_menu_show_color_used'); ?></label>
			<div class="col-sm-6">
				<?php echo displayRadio('show_color_used', $data['settings'], 'show_color_used'); ?>					
			</div>
		</div>
		
		<div class="form-group row">
			<label class="col-sm-5 control-label"><?php lang('settings_lang_menu_show_screen_size'); ?></label>
			<div class="col-sm-6">
				<?php echo displayRadio('show_screen_size', $data['settings'], 'show_screen_size'); ?>					
			</div>
		</div>
		
		<div class="form-group row">
			<label class="col-sm-5 control-label"><?php lang('settings_lang_menu_show_my_design'); ?></label>
			<div class="col-sm-6">
				<?php echo displayRadio('show_my_design', $data['settings'], 'show_my_design'); ?>					
			</div>
		</div>
		
		<div class="form-group row">
			<label class="col-sm-5 control-label"><?php lang('settings_lang_menu_show_toolbar'); ?></label>
			<div class="col-sm-6">
				<?php echo displayRadio('show_toolbar', $data['settings'], 'show_toolbar'); ?>					
			</div>
		</div>
		
		<div class="form-group row">
			<label class="col-sm-5 control-label"><?php lang('settings_lang_menu_show_share'); ?></label>
			<div class="col-sm-6">
				<?php echo displayRadio('show_share', $data['settings'], 'show_share'); ?>					
			</div>
		</div>
		
		<div class="form-group row">
			<label class="col-sm-5 control-label"><?php lang('settings_lang_menu_show_layers'); ?></label>
			<div class="col-sm-6">
				<?php echo displayRadio('show_layers', $data['settings'], 'show_layers'); ?>					
			</div>
		</div>
	</div>
</div>

<div class="form-group">
	<a href="<?php echo site_url('index.php/layout'); ?>" class="btn btn-default">Click to change setting UI & layout</a>
</div>
<div style="display:none;">
	<?php $addons->view('themes', $addons, $data); ?>
</div>