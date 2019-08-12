<?php
$addons = $GLOBALS['addons'];
?>
<div id="options-add_item_text" class="dg-options">
	<div class="dg-options-toolbar">
		<button class="btn btn-default btn-boder toolbar-texts" onclick="toobar_menu(this, 'textoptions');">
			<i class="glyph-icon flaticon-14 flaticon-type"></i>
			<a id="txt-textoptions" href="javascript:void(0)">
				<?php echo lang('designer_clipart_edit_arial'); ?>
			</a>
			<i class="fa fa-angle-down"></i>
		</button>

		<button class="btn btn-default btn-sm btn-boder" onclick="toobar_menu(this, 'textsize');">
			<input type="text" onchange="design.text.sizes.addSize()" id="text-size" value="14">
			<i class="fa fa-angle-down"></i>
		</button>

		<div class="toolbar-size">
			<input type="text" size="2" style="display:none;" id="text-width" readonly disabled> 
			<a href="javascript:void(0);" class="icon-ui-lock" title="<?php echo lang('designer_clipart_edit_unlock_proportion'); ?>">
				<i class="fa fa-lock" aria-hidden="true"></i>
			</a>
			<input type="text" size="2" id="text-height" style="display:none;" readonly disabled>
			
			<input type="checkbox" style="display:none;" class="ui-lock" id="text-lock" />
		</div>

		<span class="toolbar-line"></span>

		<div class="list-colors">
			<a class="dropdown-color" id="txt-color" href="javascript:void(0)" data-color="black" data-label="color" style="background-color:black"></a>
		</div>

		<span class="toolbar-line"></span>

		<div class="rotate" style="display: none;">
			<span class="rotate-values"><input type="text" value="0" class="rotate-value" id="text-rotate-value" /></span>			
			<span class="rotate-deg"></span>
		</div>
		
		<button class="btn btn-default btn-sm textalign" onclick="toobar_menu(this, 'textalign');">
			<i class="glyphicons align_center glyphicons-12"></i>
		</button>

		<span class="toolbar-line"></span>

		<button class="btn btn-default btn-sm" onclick="toobar_menu(this, 'effect');">
			<i class="glyph-icon flaticon-witch flaticon-12"></i> Effect
		</button>
		
		<span class="toolbar-line"></span>

		<button class="btn btn-default btn-sm" onclick="toobar_menu(this, 'text-more');">
			<i class="glyph-icon flaticon-center-alignment-1 flaticon-14"></i>
		</button>

		<div class="pull-right">
			<button class="btn btn-default btn-sm" data-toggle="tooltip" data-original-title="<?php echo lang('designer_clipart_edit_flip'); ?>" onclick="design.tools.flip('x');">
				<i class="glyph-icon flaticon-reflect flaticon-14"></i>
			</span>

			<button class="btn btn-default btn-sm" data-toggle="tooltip" data-original-title="<?php echo lang('designer_js_copy'); ?>" onclick="design.tools.copy(this);">
				<i class="glyph-icon flaticon-copy flaticon-14"></i>
			</span>

			<button class="btn btn-default btn-sm" data-toggle="tooltip" data-original-title="<?php echo lang('designer_team_remove'); ?>" onclick="design.tools.remove();">
				<i class="glyph-icon flaticon-interface flaticon-14"></i>
			</span>
		</div>
	</div>

	<!-- menu text -->
	<style>
	textarea 
	{
   		resize: none;
	}
</style>
	<menu class="dropdown-toolbar dropdown-toolbar-textoptions">
		<div class="toolbar-text">
			<textarea class="form-control text-update" data-event="keyup" data-label="text" id="enter-text"></textarea>
		</div>
		<div class="dropdown-toolbar-content">
			<div class="toolbar-row">
				<button class="btn btn-default toolbar-font" data-target="#dg-fonts" data-toggle="modal">
					<a id="txt-fontfamily" class="pull-left" href="javascript:void(0)">
						<?php echo lang('designer_clipart_edit_arial'); ?>
					</a>
				</button>
			</div>
		</div>
	</menu>

	<menu class="dropdown-toolbar dropdown-toolbar-left dropdown-toolbar-textalign" style="left: 310px;">
		<div class="dropdown-toolbar-content">
			<div id="text-align" class="pull-left">
				<span id="text-align-left" class="text-update btn btn-default btn-sm glyphicons align_left glyphicons-12" data-event="click" data-label="alignL"></span>
				<span id="text-align-center" class="text-update btn btn-default btn-sm glyphicons align_center glyphicons-12" data-event="click" data-label="alignC"></span>
				<span id="text-align-right" class="text-update btn btn-default btn-sm glyphicons align_right glyphicons-12" data-event="click" data-label="alignR"></span>
			</div>
		</div>
	</menu>

	<menu class="dropdown-toolbar dropdown-toolbar-textsize" style="left: 140px;">
		<?php $text_sizes = array(6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 36, 38, 40, 48, 56, 64); ?>
		<div class="dropdown-toolbar-content">
			<ul class="list-unstyled">
				<?php foreach ($text_sizes as $size) { ?>
					<li><a onclick="design.text.sizes.change(this)" data-val="<?php echo $size; ?>" href="javascript:void(0);"><?php echo $size; ?></a></li>
				<?php } ?>
			</ul>
		</div>
	</menu>

	<menu class="dropdown-toolbar dropdown-toolbar-right dropdown-toolbar-effect" style="left: 80px;">
		<div class="dropdown-toolbar-content">
			<div class="toolbar-row">
				<div id="text-style" class="pull-right">
					<span id="text-style-i" class="text-update btn btn-default btn-sm glyphicons italic glyphicons-12" data-event="click" data-label="styleI"></span>
					<span id="text-style-b" class="text-update btn btn-default btn-sm glyphicons bold glyphicons-12" data-event="click" data-label="styleB"></span>							
					<span id="text-style-u" class="text-update btn btn-default btn-sm glyphicons text_underline glyphicons-12" data-event="click" data-label="styleU"></span>
				</div>
			</div>

			<div class="toolbar-row col-xs-12">
				<div class="toolbar-col option-outline">
					<div class="list-colors outline-color row">
						<span><?php echo lang('designer_clipart_edit_out_line'); ?></span>
						<a class="dropdown-color pull-left bg-none" data-label="outline" data-placement="top" href="javascript:void(0)" data-color="none">
							<span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-s"></span>
						</a>
					</div>
					<div class="outline-size">
						<span><?php echo lang('designer_clipart_edit_size'); ?></span>
						<a data-toggle="dropdown" class="dg-outline-value" href="javascript:void(0)">
							<span class="outline-value pull-left">0</span>
						</a>
						<div id="dg-outline-width"></div>
					</div>
				</div>
				
			</div>

			<?php $addons->view('text-mobile', array(), 'editor'); ?>
		</div>
	</menu>
	
	<menu class="dropdown-toolbar dropdown-toolbar-text-more" style="left: 400px;">
		<div class="dropdown-toolbar-content">
			<div class="toolbar-row">
				<span class="btn btn-sm btn-default" data-toggle="tooltip" title="<?php echo lang('designer_align_horizontal'); ?>" onclick="design.tools.move('vertical')">
					<i class="glyph-icon flaticon-center-alignment-1 flaticon-14"></i>
				</span>
				<span class="btn btn-sm btn-default" data-toggle="tooltip" title="<?php echo lang('designer_align_vertical'); ?>" onclick="design.tools.move('horizontal')">
					<i class="glyph-icon flaticon-squares-1 flaticon-14"></i>
				</span>
				<span class="btn btn-sm btn-default" data-toggle="tooltip" title="<?php echo lang('designer_allign_left'); ?>" onclick="design.tools.move('allign_left')">
					<i class="glyph-icon flaticon-signs-3 flaticon-14"></i>
				</span>
				<span class="btn btn-sm btn-default" data-toggle="tooltip" title="<?php echo lang('designer_allign_right'); ?>" onclick="design.tools.move('allign_right')">
					<i class="glyph-icon flaticon-signs-4 flaticon-14"></i>
				</span>
			</div>

			<div class="toolbar-row">
				<span class="btn btn-sm btn-default" data-toggle="tooltip" title="<?php echo lang('designer_align_left'); ?>" onclick="design.tools.move('left')">
					<i class="glyph-icon flaticon-back-1 flaticon-14"></i>
				</span>	
				<span class="btn btn-sm btn-default" data-toggle="tooltip" title="<?php echo lang('designer_align_right'); ?>" onclick="design.tools.move('right')">
					<i class="glyph-icon flaticon-next-1 flaticon-14"></i>
				</span>	
				<span class="btn btn-sm btn-default" data-toggle="tooltip" title="<?php echo lang('designer_align_up'); ?>" onclick="design.tools.move('up')">
					<i class="glyph-icon flaticon-up-arrow flaticon-14"></i>
				</span>	
				<span class="btn btn-sm btn-default" data-toggle="tooltip" title="<?php echo lang('designer_align_down'); ?>" onclick="design.tools.move('down')">
					<i class="glyph-icon flaticon-down-arrow flaticon-14"></i>
				</span>
			</div>
		</div>
	</menu>
</div>