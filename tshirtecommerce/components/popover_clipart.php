<?php
$addons 	= $GLOBALS['addons'];
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
		<div aria-label="First group" role="group" class="btn-group btn-group-lg">						
			<button class="btn btn-default btn-action-edit" type="button" data-type="edit">
				<i class="glyphicon glyphicon-tint"></i> <small class="clearfix"><?php echo lang('designer_edit'); ?></small>
			</button>
			<button class="btn btn-default btn-action-colors" type="button" data-type="colors">
				<i class="glyphicon glyphicon-tint"></i> <small class="clearfix"> <?php echo lang('designer_colors'); ?></small>
			</button>
			<button class="btn btn-default" type="button" data-type="size">
				<i class="fa fa-text-height"></i> <small class="clearfix"> <?php echo lang('designer_clipart_edit_size'); ?></small>
			</button>
			<button class="btn btn-default" type="button" data-type="rotate">
				<i class="fa fa-rotate-right"></i> <small class="clearfix"><?php echo lang('designer_clipart_edit_rotate'); ?></small>
			</button>			
		</div>
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
					<input type="text" size="2" id="clipart-width" readonly disabled style="pointer-events:none;">
				</div>
			</div>
			<div class="col-xs-3 col-lg-3 align-center">
				<div class="form-group">
					<small><?php echo lang('designer_clipart_edit_height'); ?></small>
					<input type="text" size="2" id="clipart-height" readonly disabled style="pointer-events:none;">
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
						<span class="rotate-values"><input type="number" value="0" class="input-small rotate-value" id="clipart-rotate-value" style="pointer-events:none;"/>&deg;</span>
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
		
		<?php 
		if($change_photo == 1){
			$photo_color_default = '#000000';
			if(isset($settings->photo_color_default))
			{
				$photo_color_default = $settings->photo_color_default;
			}
		?>
		<div class="row toolbar-action-convertcolor" style="display:none;">
			<div class="col-md-12">
				<div class="checkbox">
					<label>
						<input type="checkbox" class="convertcolor-value" onclick="design.myart.convertcolor.ini()"> <?php echo lang('designer_convert_color'); ?>
					</label>
				</div>
			</div>
			<div class="col-md-12" id="convert-colors" style="display:none;">
				<div class="form-group">
					<label><?php echo lang('designer_clipart_edit_choose_your_color'); ?></label>
					<div class="list-colors list-colors-convertcolor">
						<a class="dropdown-color" id="art-change-color" href="javascript:void(0)" data-color="<?php echo $photo_color_default; ?>" onclick="design.myart.convertcolor.addEvent();" style="background-color:<?php echo $photo_color_default; ?>">
							<span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-s"></span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<?php } ?>
	</div>
</div>