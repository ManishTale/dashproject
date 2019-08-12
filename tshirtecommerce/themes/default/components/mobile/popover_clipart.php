<?php
$addons = $GLOBALS['addons'];
?>
<div id="options-add_item_clipart" class="dg-options">
	<div class="dg-options-toolbar">
		<ul class="btn-group-custom">
			<li class="btn-action-edit" data-type="edit">
				<i class="glyph-icon flaticon-pencil"></i> <small class="clearfix"><?php echo lang('designer_edit'); ?></small>
			</li>
			<li class="btn-action-colors" data-type="colors">
				<i class="glyph-icon flaticon-color"></i> <small class="clearfix"> <?php echo lang('designer_colors'); ?></small>
			</li>
			<li data-type="size">
				<i class="glyph-icon flaticon-vector-1"></i> <small class="clearfix"> <?php echo lang('designer_clipart_edit_size'); ?></small>
			</li>
			<li data-type="rotate">
				<i class="glyph-icon flaticon-rotate"></i> <small class="clearfix"><?php echo lang('designer_clipart_edit_rotate'); ?></small>
			</li>			
		</ul>
	</div>
	
	<div class="dg-options-content">
		<div class="row toolbar-action-edit">					
			<div id="item-print-colors">
			</div>
		</div>
		<div class="row toolbar-action-size">
			<div class="col-xs-3 col-lg-3 align-center">
				<div class="form-group">
					<small><?php echo lang('designer_clipart_edit_width'); ?></small>
					<input type="text" size="2" id="clipart-width" readonly disabled>
				</div>
			</div>
			<div class="col-xs-3 col-lg-3 align-center">
				<div class="form-group">
					<small><?php echo lang('designer_clipart_edit_height'); ?></small>
					<input type="text" size="2" id="clipart-height" readonly disabled>
				</div>
			</div>
			<div class="col-xs-6 col-lg-6 align-left">
				<div class="form-group">
					<small><?php echo lang('designer_clipart_edit_unlock_proportion'); ?></small><br />
					<input type="checkbox" class="ui-lock" id="clipart-lock" />
				</div>
			</div>
		</div>
		
		<div class="row toolbar-action-rotate">					
			<div class="form-group col-lg-12">
				<div class="row">
					<div class="col-xs-6 col-lg-6">
						<small><?php echo lang('designer_clipart_edit_rotate'); ?></small>
					</div>
					<div class="col-xs-6 col-lg-6 align-right">
						<span class="rotate-values"><input type="number" value="0" class="input-small rotate-value" id="clipart-rotate-value" />&deg;</span>
						<span class="rotate-refresh glyphicons refresh"></span>
					</div>
				</div>						
			</div>
		</div>
		
		<div class="row toolbar-action-colors">
			<div id="clipart-colors">
				<div class="form-group col-lg-12 text-left position-static">
					<small><?php echo lang('designer_clipart_edit_choose_your_color'); ?></small>
					<div id="list-clipart-colors" class="list-colors"></div>
				</div>
			</div>
		</div>		
	</div>
</div>