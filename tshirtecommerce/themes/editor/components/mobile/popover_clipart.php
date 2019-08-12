<?php
$addons = $GLOBALS['addons'];
$settings 	= $GLOBALS['settings'];
if(isset($settings->photo_color) && $settings->photo_color == 0)
{
	$change_photo = 0;
}
else
{
	$change_photo = 1;
}
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
			<?php
			if($change_photo == 1){
				$photo_color_default = '#000000';
				if(isset($settings->photo_color_default))
				{
					$photo_color_default = $settings->photo_color_default;
				}
			?>
			<li class="btn-action-convertcolor toolbar-action-convertcolor" data-type="onecolor">
				<i class="glyph-icon flaticon-color"></i> <small class="clearfix"> <?php echo lang('designer_colors'); ?></small>
			</li>
			<?php } ?>
			<li data-type="filter" id="btn-photo-filter" onclick="design.finter.show(this);">
				<i class="glyph-icon flaticon-witch"></i> <small class="clearfix"> <?php echo lang('designer_canvas_menu_finter'); ?></small>
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
			<div id="item-print-colors"></div>
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
			<div class="col-xs-12 col-lg-12 align-left">
				<div class="form-group">
					<button class="btn btn-default btn-xs" onclick="design.tools.fit();">
						<i class="glyph-icon flaticon-expand-2 flaticon-12"></i> <?php echo lang('designer_tools_fit'); ?>
					</button>
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

		<div class="row toolbar-action-filter">
			<div id="photo-filters"></div>
		</div>
		
		<?php if($change_photo == 1){ ?>
		<div class="row toolbar-action-onecolor">
			<div id="convert-colors" class="pull-right">
				<div class="list-colors list-colors-convertcolor">
					<a class="dropdown-color" id="art-change-color" href="javascript:void(0)" data-color="<?php echo $photo_color_default; ?>" onclick="design.myart.convertcolor.addEvent();" style="background-color:<?php echo $photo_color_default; ?>">
						<span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-s"></span>
					</a>
				</div>
			</div>

			<div class="checkbox pull-left btn-convert-colors">
				<label>
					<input type="checkbox" class="convertcolor-value" onclick="design.myart.convertcolor.ini()"> <?php echo lang('designer_convert_color'); ?>
				</label>
			</div>
		</div>
		<?php } ?>		
	</div>
</div>