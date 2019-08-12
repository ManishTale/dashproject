<?php
$addons = $GLOBALS['addons'];
?>
<div id="options-add_item_text" class="dg-options">
	<div class="dg-options-toolbar">
		<ul class="btn-group-custom">
			<li data-type="text">
				<i class="glyph-icon flaticon-pencil"></i> <small class="clearfix"><?php echo lang('designer_text'); ?></small>
			</li>
			<li data-type="fonts">
				<i class="glyph-icon flaticon-resize-1"></i> <small class="clearfix"><?php echo lang('designer_fonts'); ?></small>
			</li>
			<li data-type="style">
				<i class="glyph-icon flaticon-menu"></i> <small class="clearfix"><?php echo lang('designer_style'); ?></small>
			</li>
			<li data-type="outline">
				<i class="glyph-icon flaticon-magnet"></i> <small class="clearfix"><?php echo lang('designer_clipart_edit_out_line'); ?></small>
			</li>
			<li data-type="size">
				<i class="glyph-icon flaticon-vector-1"></i> <small class="clearfix"> <?php echo lang('designer_clipart_edit_size'); ?></small>
			</li>
			<li data-type="rotate">
				<i class="glyph-icon flaticon-rotate"></i> <small class="clearfix"><?php echo lang('designer_clipart_edit_rotate'); ?></small>
			</li>
			<?php $addons->view('text-mobile'); ?>
		</ul>
	</div>
	
	<div class="dg-options-content">
		<!-- edit text -->
		<style>
	textarea 
	{
   resize: none;
	}
</style>
		<div class="row toolbar-action-text">
			<div class="col-xs-12">
				<textarea class="form-control text-update" data-event="keyup" data-label="text" id="enter-text"></textarea>
			</div>
		</div>
		
		<div class="row toolbar-action-fonts">
			<div class="col-xs-8">
				<div class="form-group">
					<small><?php echo lang('designer_clipart_edit_choose_a_font'); ?></small>
					<div class="dropdown" data-target="#dg-fonts" data-toggle="modal">
						<a id="txt-fontfamily" class="pull-left" href="javascript:void(0)">
						<?php echo lang('designer_clipart_edit_arial'); ?>
						</a>
						<span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-s pull-right"></span>
					</div>
				</div>
			</div>
			<div class="col-xs-4 position-static">
				<div class="form-group">
					<small><?php echo lang('designer_clipart_edit_text_color'); ?></small>
					<div class="list-colors">
						<a class="dropdown-color" id="txt-color" href="javascript:void(0)" data-color="black" data-label="color" style="background-color:black">
							<span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-s"></span>
						</a>
					</div>
				</div>
			</div>
		</div>
		
		<div class="row toolbar-action-style">
			<div class="col-xs-6">
				<small><?php echo lang('designer_clipart_edit_text_style'); ?></small>
				<div id="text-style">
					<span id="text-style-i" class="text-update btn btn-default btn-xs" data-event="click" data-label="styleI">
						<i class="glyph-icon flaticon-italics flaticon-14"></i>
					</span>
					<span id="text-style-b" class="text-update btn btn-default btn-xs" data-event="click" data-label="styleB">
						<i class="glyph-icon flaticon-bold-text flaticon-14"></i>
					</span>							
					<span id="text-style-u" class="text-update btn btn-default btn-xs glyphicons" data-event="click" data-label="styleU">
						<i class="glyph-icon flaticon-undelined flaticon-14"></i>
					</span>
				</div>
			</div>
			<div class="col-xs-6">
				<small><?php echo lang('designer_clipart_edit_text_align'); ?></small>
				<div id="text-align">
					<span id="text-align-left" class="text-update btn btn-default btn-xs" data-event="click" data-label="alignL">
						<i class="glyph-icon flaticon-left-alignment flaticon-14"></i>
					</span>
					<span id="text-align-center" class="text-update btn btn-default btn-xs" data-event="click" data-label="alignC">
						<i class="glyph-icon flaticon-center-alignment flaticon-14"></i>
					</span>
					<span id="text-align-right" class="text-update btn btn-default btn-xs" data-event="click" data-label="alignR">
						<i class="glyph-icon flaticon-right-alignment flaticon-14"></i>
					</span>
				</div>
			</div>
		</div>
		
		<div class="clear"></div>
				
		<div class="row toolbar-action-size">
			<div class="col-xs-3 col-lg-3 align-center">
				<div class="form-group">
					<small><?php echo lang('designer_clipart_edit_width'); ?></small>
					<input type="text" size="2" id="text-width" disabled>
				</div>
			</div>
			<div class="col-xs-3 col-lg-3 align-center">
				<div class="form-group">
					<small><?php echo lang('designer_clipart_edit_height'); ?></small>
					<input type="text" size="2" id="text-height" disabled>
				</div>
			</div>
			<div class="col-xs-6 col-lg-6 align-left">
				<div class="form-group">
					<small><?php echo lang('designer_clipart_edit_unlock_proportion'); ?></small><br />
					<input type="checkbox" class="ui-lock" id="text-lock" />
				</div>
			</div>
		</div>
		
		<div class="row toolbar-action-rotate">					
			<div class="form-group col-xs-12">
				<small><?php echo lang('designer_clipart_edit_rotate'); ?></small>
				<div class="">
					<span class="rotate-values"><input type="number" value="0" class="input-small rotate-value" id="text-rotate-value" />&deg;</span>
					<span class="rotate-refresh glyphicons refresh"></span>
				</div>								
			</div>
		</div>
				
		<div class="row toolbar-action-outline">				
			<div class="form-group col-xs-12">
				<small><?php echo lang('designer_clipart_edit_out_line'); ?></small>
				<div class="option-outline">							
					<div class="list-colors">
						<a class="dropdown-color bg-none" data-label="outline" data-placement="top" href="javascript:void(0)" data-color="none">
							<span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-s"></span>
						</a>
					</div>
					<div class="dropdown-outline">
						<a data-toggle="dropdown" class="dg-outline-value" href="javascript:void(0)"><span class="outline-value pull-left">0</span> <span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-s pull-right"></span></a>
						<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
							<li><div id="dg-outline-width"></div></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
				
		<?php $addons->text(); ?>		
	</div>
</div>