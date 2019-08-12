<div id="options-add_item_qrcode" class="dg-options">
	<div class="dg-options-toolbar">
		<div class="toolbar-text">
			<textarea id="enter-qrcode" placeholder="<?php echo lang('designer_js_enter_text'); ?>"></textarea>
		</div>
		
		<button class="btn btn-link btn-default" type="button" onclick="design.qrcode.create(this)">
			<?php echo lang('designer_qrcode_create'); ?>
		</button>
		
		<div id="qrcode-img"></div>
	</div>
</div>