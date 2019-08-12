<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2016-03-22
 *
 * API Theme
 *
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
$theme_name = 'editor';
if ( isset($data['settings']['theme']) && isset($data['settings']['theme'][$theme_name]) )
{
	$settings	= $data['settings']['theme'][$theme_name];
}
else
{
	$settings	= array();
}
?>

<style>
.fancybox-inner{max-height: 540px;}
#edit-layouts a.thumbnail {float: left;width:110px;margin: 4px;border: 3px solid #fff;padding: 0px;border-radius: 0;}
#edit-layouts a.thumbnail:hover{opacity: 0.5;}
#edit-layouts a.thumbnail.active{border-color: #5EA1ED;}
</style>
<link rel="stylesheet" type="text/css" href="<?php echo site_url('assets/plugins/pickColor/spectrum.css'); ?>">
<script type='text/javascript' src='<?php echo site_url('assets/plugins/pickColor/spectrum.js'); ?>'></script>
<script type="text/javascript" src="<?php echo site_url('assets/plugins/jquery-fancybox/jquery.fancybox.js'); ?>"></script>
<link rel="stylesheet" href="<?php echo site_url('assets/plugins/jquery-fancybox/jquery.fancybox.css'); ?>">

<div class="tabbable">
	<ul id="myTab" class="nav nav-tabs tab-bricky">
		<li class="active">
			<a href="#panel_tab1" data-toggle="tab" aria-expanded="false">
				<i class="green fa fa-bars"></i> Layout
			</a>
		</li>	
		<li>
			<a href="#panel_tab2" data-toggle="tab" aria-expanded="false">
				<i class="green fa fa-magic"></i> Background & Colors
			</a>
		</li>
		<li>
			<a href="#panel_tab3" data-toggle="tab" aria-expanded="false">
				<i class="fa fa-font"></i> Typography
			</a>
		</li>
	</ul>
	
	<div class="tab-content">
		<div class="tab-pane active" id="panel_tab1">
			<div class="form-group">
				<label class="col-sm-3 control-label">Full Screen</label>
				<div class="col-sm-9">
					<?php echo displayRadio('[theme]['.$theme_name.'][full_screen]', $data['settings']['theme'][$theme_name], 'full_screen', '1'); ?>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">Your Logo <br /><small>(40px x 40px)</small></label>
				<div class="col-sm-9 logo-image">
					<?php $custom_logo = setValue($settings, 'custom_logo', ''); ?>
					
					<input type="hidden" class="custom_logo" value="<?php echo $custom_logo; ?>" name="setting[theme][<?php echo $theme_name; ?>][custom_logo]">
					
					<?php if ($custom_logo != '') { ?>
					<img src="<?php echo $custom_logo; ?>" class="img-thumbnail" alt="" width="50" />
					<?php } ?>

					 <a href="javascript:void(0);" class="btn btn-default btn-sm" onclick="jQuery.fancybox( {height:'400px', href : '<?php echo site_url('index.php/media/modals/custom_logo/1'); ?>', type: 'iframe'} );">Add Logo</a>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label">Choose layout</label>
				<?php
				$layout = setValue($settings, 'layout', 'left');
				?>
				<div class="col-xs-9" id="edit-layouts">
					<a href="#" class="thumbnail layout <?php if($layout == 'left') echo 'active'; ?>" data-value="left">
					  <img src="<?php echo site_url('themes/'.$theme_name.'/layouts/layout-left.png', false); ?>" alt="Menu left">
					</a>
					
					<a href="#" class="thumbnail layout <?php if($layout == 'right') echo 'active'; ?>" data-value="right">
					  <img src="<?php echo site_url('themes/'.$theme_name.'/layouts/layout-right.png', false); ?>" alt="Menu right">
					</a>
					
					<a href="#" class="thumbnail layout <?php if($layout == 'top') echo 'active'; ?>" data-value="top">
					  <img src="<?php echo site_url('themes/'.$theme_name.'/layouts/layout-top.png', false); ?>" alt="Menu top">
					</a>
					
					<a href="#" class="thumbnail layout <?php if($layout == 'bottom') echo 'active'; ?>" data-value="bottom">
					  <img src="<?php echo site_url('themes/'.$theme_name.'/layouts/layout-botton.png', false); ?>" alt="Menu botton">
					</a>
				</div>
				
				<input type="hidden" class="layout_value" value="<?php echo $layout; ?>" name="setting[theme][<?php echo $theme_name; ?>][layout]">
			</div>
		</div>
		
		<div class="tab-pane" id="panel_tab2">
			<div class="form-horizontal custom_theme_default">
				<div class="form-group">
					<h4 class="col-sm-12">Background</h4>					
				</div>
				
				<div class="form-group">
					<label class="col-sm-4 control-label">Background Color</label>
					<div class="col-sm-8">
						<input type="text" class="colors" value="<?php echo setValue($settings, 'background_color', '#FFFFFF'); ?>" name="setting[theme][<?php echo $theme_name; ?>][background_color]">
					</div>
				</div>
				
				<div class="form-group">
					<label class="col-sm-4 control-label">Background Image</label>
					<div class="col-sm-8 background-image">
						<a href="javascript:void(0);" class="btn btn-default btn-sm" onclick="jQuery.fancybox( {height:'400px', href : '<?php echo site_url('index.php/media/modals/backgroundImg/1'); ?>', type: 'iframe'} );">Choose Image</a>
						
						<?php $theme_background = setValue($settings, 'background_image', ''); ?>
						<input type="hidden" class="theme-image" value="<?php echo $theme_background; ?>" name="setting[theme][<?php echo $theme_name; ?>][background_image]">
						
						<?php if ($theme_background != '') { ?>
							<img src="<?php echo $theme_background; ?>" class="img-thumbnail" alt="" width="50" />
						<?php } ?>
						<a href="javascript:void(0);" onclick="themRemoveOption(this)"><i class="fa fa-trash-o"></i></a>
					</div>
				</div>
				
				<div class="form-group">
					<label class="col-sm-4 control-label">
						Background Repeat
					</label>
					<div class="col-sm-8">
						<input type="text" style="width:150px;" class="form-control" value="<?php echo setValue($settings, 'background_repeat', 'repeat'); ?>" name="setting[theme][<?php echo $theme_name; ?>][background_repeat]">
						<small class="help-block"><i class="fa fa-info-circle"></i> Enter background repeat (Example: "repeat", "repeat-x", "repeat-y", "no-repeat")</small>
					</div>
				</div>
				
				<div class="form-group">
					<label class="col-sm-4 control-label">
						Background position
					</label>
					<div class="col-sm-8">
						<input type="text" style="width:150px;" class="form-control" value="<?php echo setValue($settings, 'background_position', 'center center'); ?>" name="setting[theme][<?php echo $theme_name; ?>][background_position]">
						<small class="help-block"><i class="fa fa-info-circle"></i> Enter position of a background image (Example: "left top", "left center", "left bottom", "right top", "right center", "right bottom", "center top", "center center", "center bottom")</small>
					</div>
				</div>
				
				<div class="form-group">
					<h4 class="col-sm-12">Menu add text, clipart...</h4>					
				</div>
				
				<div class="form-group">
					<label class="col-sm-4 control-label">Background Color</label>
					<div class="col-sm-8">
						<input type="text" class="colors" value="<?php echo setValue($settings, 'menu_bg', '#3E454F'); ?>" name="setting[theme][<?php echo $theme_name; ?>][menu_bg]">
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-4 control-label">Color of text & Icon</label>
					<div class="col-sm-8">
						<input type="text" class="colors" value="<?php echo setValue($settings, 'menu_bg_icon', '#FFFFFF'); ?>" name="setting[theme][<?php echo $theme_name; ?>][menu_bg_icon]">
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-4 control-label">Line Color</label>
					<div class="col-sm-8">
						<input type="text" class="colors" value="<?php echo setValue($settings, 'menu_line_color', '#292f38'); ?>" name="setting[theme][<?php echo $theme_name; ?>][menu_line_color]">
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-4 control-label">Hover background</label>
					<div class="col-sm-8">
						<input type="text" class="colors" value="<?php echo setValue($settings, 'menu_bg_active', '#43B9D3'); ?>" name="setting[theme][<?php echo $theme_name; ?>][menu_bg_active]">
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-4 control-label">Hover color of text & Icon</label>
					<div class="col-sm-8">
						<input type="text" class="colors" value="<?php echo setValue($settings, 'menu_bg_iconhover', '#FFFFFF'); ?>" name="setting[theme][<?php echo $theme_name; ?>][menu_bg_iconhover]">
					</div>
				</div>
				
				<hr />
				<div class="form-group">
					<h4 class="col-sm-12 pull-right"><button type="button" class="btn btn-default" onclick="theme_default()">Reset Default</button>
				</div>
			</div>
		</div>

		<div class="tab-pane" id="panel_tab3">
			<div class="col-sm-12">
				<p>Customize font of page design. System only support <a href="https://fonts.google.com" target="_bank">Google fonts</a></p>
				<hr />
			</div>
			<div class="form-group">
				<label class="col-sm-4 control-label">
					Google font name
					<br /><small>Default: Roboto Slab</small>
				</label>
				<div class="col-sm-8">
					<input type="text" class="form-control" value="<?php echo setValue($settings, 'custom_font', ''); ?>" name="setting[theme][<?php echo $theme_name; ?>][custom_font]">
					<p class="help-block">Exemple: <strong>Roboto+Slab</strong> or <strong>Roboto+Slab:100,300,400,700</strong></p>
				</div>
			</div>

			<div class="form-group">
				<label class="col-sm-4 control-label">
					Font size
					<br /><small>Default: 13px</small>
				</label>
				<div class="col-sm-8">
					<?php 
					$font_size = setValue($settings, 'font_size', '13');
					?>
					<select class="form-control" name="setting[theme][<?php echo $theme_name; ?>][font_size]">
						<?php for($sizes_font = 10; $sizes_font < 21; $sizes_font++) { ?>
						<option <?php if($sizes_font == $font_size) echo 'selected="selected"'; ?> value="<?php echo $sizes_font; ?>"><?php echo $sizes_font; ?></option>
						<?php } ?>
					</select>
				</div>
			</div>
		</div>		
	</div>
</div>

<script type='text/javascript'>
jQuery(document).ready(function(){
	jQuery('#edit-layouts .layout').click(function(){
		jQuery('#edit-layouts .layout').removeClass('active');
		jQuery(this).addClass('active');
		jQuery('.layout_value').val( jQuery(this).data('value') );
	});
});
function backgroundImg(images)
{
	if(images.length > 0)
	{
		var e = jQuery('.theme-image');
		e.val(images[0]);
		if(e.parent().children('img').length > 0)
			e.parent().children('img').attr('src', images[0]);
		else
			e.parent().append('<img src="'+images[0]+'" class="img-thumbnail" alt="" width="50" />');
		jQuery.fancybox.close();
	}
}
function custom_logo(images)
{
	if(images.length > 0)
	{
		var e = jQuery('.custom_logo');
		e.val(images[0]);
		if(e.parent().children('img').length > 0)
			e.parent().children('img').attr('src', images[0]);
		else
			e.parent().append('<img src="'+images[0]+'" class="img-thumbnail pull-left" alt="" width="50" /> ');
		jQuery.fancybox.close();
	}
}
function themRemoveOption(e)
{
	var elm = jQuery(e).parent();
	elm.find('img').remove();
	elm.find('input').val('');
}
jQuery(document).ready(function(){
	jQuery(".colors").spectrum({
		showPalette: true,
		showInput: true,
		preferredFormat: "hex",
		palette: [
			['FFFFFF', 'FCFCFC', 'CCCCCC', '333333'],
			['000000', '428BCA', 'F65E13', '2997AB'],
			['5CB85C', 'D9534F', 'F0AD4E', '5BC0DE'],
			['C3512F', '7C6853', 'F0591A', '2D5C88'],
			['4ECAC2', '435960', '734854', 'A81010'],
		]
	});
});
function theme_default(){
	var check = confirm('You sure want reset default of setting theme?');
	if(check == true)
	{
		jQuery('.custom_theme_default input').remove();
		jQuery('.custom_theme_default').parents('form').submit();
	}
}
</script>