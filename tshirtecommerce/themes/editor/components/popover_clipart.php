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
		<div class="btn-group btn-group-lg">						
			<div id="item-print-colors"></div>
			<div id="clipart-colors" class="pull-left">
				<div id="list-clipart-colors" class="list-colors"></div>
			</div>

			<?php 
			if($change_photo == 1){
				$photo_color_default = '#000000';
				if(isset($settings->photo_color_default))
				{
					$photo_color_default = $settings->photo_color_default;
				}
			?>
			<div class="toolbar-action-convertcolor" style="display:none;">
				<div id="convert-colors" class="pull-left">
					<div class="form-group">
						<div class="list-colors list-colors-convertcolor">
							<a class="dropdown-color" id="art-change-color" href="javascript:void(0)" data-color="<?php echo $photo_color_default; ?>" onclick="design.myart.convertcolor.addEvent();" style="background-color:<?php echo $photo_color_default; ?>">
								<span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-s"></span>
							</a>
						</div>
					</div>
				</div>

				<div class="checkbox pull-left btn-convert-colors">
					<label>
						<input type="checkbox" class="convertcolor-value" onclick="design.myart.convertcolor.ini()"> <?php echo lang('designer_convert_color'); ?>
					</label>
				</div>
			</div>
			
			<?php } ?>

			<div class="rotate pull-left" style="display: none;">
				<span class="rotate-values"><input type="number" value="0" class="rotate-value" id="clipart-rotate-value" /></span>			
				<span class="rotate-deg"></span>
			</div>

			<div class="toolbar-size pull-left">
				<input type="text" size="2" id="clipart-width" readonly disabled> 
				<a href="javascript:void(0);" class="icon-ui-lock" title="<?php echo lang('designer_clipart_edit_unlock_proportion'); ?>">
					<i class="fa fa-lock" aria-hidden="true"></i>
				</a>
				<input type="text" size="2" id="clipart-height" readonly disabled>
				
				<input type="checkbox" style="display:none;" class="ui-lock" id="clipart-lock" />
			</div>
		</div>

		<div class="pull-right">
			<button class="btn btn-default btn-sm" data-toggle="tooltip" title="<?php echo lang('designer_tools_fit'); ?>" onclick="design.tools.fit();">
				<i class="glyph-icon flaticon-expand-2 flaticon-14"></i>
			</span>

			<button class="btn btn-default btn-sm" data-toggle="tooltip" title="<?php echo lang('designer_clipart_edit_flip'); ?>" onclick="design.tools.flip('x');">
				<i class="glyph-icon flaticon-reflect flaticon-14"></i>
			</span>

			<button class="btn btn-default btn-sm" data-toggle="tooltip" title="<?php echo lang('designer_js_copy'); ?>" onclick="design.tools.copy(this);">
				<i class="glyph-icon flaticon-copy flaticon-14"></i>
			</span>

			<button class="btn btn-default btn-sm" data-toggle="tooltip" title="<?php echo lang('designer_team_remove'); ?>" onclick="design.tools.remove();">
				<i class="glyph-icon flaticon-interface flaticon-14"></i>
			</span>
		</div>
	</div>

	<menu class="dropdown-toolbar dropdown-toolbar-filter" style="left: 260px;">
		<div class="dropdown-toolbar-content">
			<div class="toolbar-row">
				<div id="photo-filters"></div>
			</div>
		</div>
	</menu>
</div>