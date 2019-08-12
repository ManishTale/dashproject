<?php 
$settings = $GLOBALS['settings'];
$addons = $GLOBALS['addons'];

$check_confirm = '';
if(isset($settings->settings_show_terms))
{
	$settings_show_terms = $settings->settings_show_terms;
}
else{
	$settings_show_terms = 1;
}
if($settings_show_terms == 1)
{
	$check_confirm = 'upload-disabled';
}
?>
<div id="dg-myclipart" class="menu-options" style="display: none;">
	<div class="option-panel option-panel-upload" style="display: block;">
		<a href="javascript:void(0)" onclick="menu_options.close(this);" class="panel-colose"><i class="glyph-icon flaticon-cross"></i></a>
		<div class="option-panel-content">
			<ul id="upload-tabs">
				<li class="active">
					<a href="#upload-conputer" class="bg-upload-conputer" role="tab" data-toggle="tab">
						<i class="fa fa-laptop" aria-hidden="true"></i>
						<span><?php echo lang('designer_upload_upload_btn'); ?></span>
					</a>
				</li>
				<?php $addons->view('upload-label'); ?>
			</ul>

			<div class="tab-content">
				<div class="tab-pane active" id="upload-conputer">
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<h5 class="text-light"><?php echo lang('designer_upload_choose_a_file_upload'); ?></h5>
								<form id="files-upload-form" class="<?php echo $check_confirm; ?>">
									<input type="file" name="myfile" id="files-upload" autocomplete="off"/>
									<div class="upload-content">
										<i class="glyph-icon flaticon-upload"></i>
										<h5 class="text-light"><?php echo lang('designer_upload_drag_drop'); ?></h5>
										<p><?php echo lang('designer_upload_accepted_file_types'); ?>: <strong>PNG, JPG, GIF, PSD, PDF, AI</strong> (<?php echo $settings->site_upload_max; ?>MB)</p>
									</div>
									<div id="mask-drop-area"></div>
									<div id="drop-area"></div>
								</form>
							</div>
							
							<div class="checkbox" style="display:none;">
								<label>
								  <input type="checkbox" autocomplete="off" id="remove-bg"> <span class="help-block"><?php echo lang('designer_upload_remove_white_background'); ?></span>
								</label>
							</div>
						</div>
					</div>
					
					<div class="row">
						<div class="col-md-12">
							<?php if($settings_show_terms == 1) { ?>
							<div class="checkbox">
								<label>
								  <input type="checkbox" autocomplete="off" id="upload-copyright">
								  <span class="help-block"><?php echo lang('designer_upload_please_read'); ?> 
								  <a href="<?php echo $settings->site_upload_terms; ?>" target="_blank"><?php echo lang('designer_upload_copyright_terms'); ?></a>. <?php echo lang('designer_upload_if_you_do_not_have_the_complete'); ?></span>
								</label>
							</div>
							<?php } ?>
							<div class="form-group" style="display: none;">
								<button type="button" class="btn btn-primary" id="action-upload"><?php echo lang('designer_upload_upload_btn'); ?></button>
							</div>
						</div>
					</div>
				</div>

				<?php $addons->view('upload-content'); ?>
			</div>

			<div id="uploaded-art">
				<hr />
				<h5 class="text-light"><?php echo lang('designer_add_drag_drop'); ?></h5>
				<div class="obj-content">
					<div id="dag-files-images" class="obj-main-content"></div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php if(isset($_COOKIE['user_files'])) { ?>
<script type="text/javascript">
var files_uploaded 	= '<?php echo $_COOKIE['user_files']; ?>';
</script>
<?php } ?>