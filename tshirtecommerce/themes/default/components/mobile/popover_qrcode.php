<div id="options-add_item_qrcode" class="dg-options">
	<div class="dg-options-toolbar">
		<ul class="btn-group-custom">
			<li data-type="create-qr-code">
				<i class="glyph-icon flaticon-qr-code"></i> <small class="clearfix"><?php echo lang('designer_qrcode_create'); ?></small>
			</li>
			
			<li data-type="image-qr-code" id="image-qr-code">
				<i class="glyph-icon flaticon-photo"></i> <small class="clearfix"><?php echo lang('designer_qrcode_image'); ?></small>
			</li>
		</ul>
	</div>
	
	<div class="dg-options-content">
		
		<div class="row">
			<div class="col-md-12">
				<span class="help-block">
					<?php echo lang('designer_qrcode_mgs'); ?>
				</span>
			</div>
			
			<div class="col-md-12">
				<div class="clear-line"></div><br>
			</div>
		</div>
		<div class="row toolbar-action-create-qr-code">
			<div class="col-md-12">
				<textarea class="form-control" id="enter-qrcode" placeholder="<?php echo lang('designer_js_enter_text'); ?>"></textarea>
				<p class="text-muted text-left"><small><?php echo lang('designer_qrcode_help'); ?></small></p>
			</div>
			
			<div class="col-md-12 text-right">
				<button class="btn btn-primary input-sm" type="button" onclick="design.qrcode.create(this)">
				<?php echo lang('designer_qrcode_create'); ?>
				</button>
			</div>
		</div>
		
		<div class="row toolbar-action-image-qr-code">
			<div class="col-xs-6" id="qrcode-img"><?php echo lang('designer_js_datafound'); ?></div>
			<p class="text-muted text-left"><small><?php echo lang('designer_add_qrcode'); ?></small></p>
		</div>
	</div>
</div>