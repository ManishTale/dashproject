<?php 
$products 		= $GLOBALS['products'];
$addons 		= $GLOBALS['addons'];
$settings 		= $GLOBALS['settings'];
$product 		= $GLOBALS['product'];
$layout 		= $GLOBALS['layout'];
$logo_icon_url 	= $GLOBALS['logo_icon_url'];
?>
<div id="screen_colors_body" style="display:none;">
	<div id="screen_colors">
		<div class="screen_colors_top">
			<div class="col-xs-5 col-md-5 text-left" id="screen_colors_images">
			</div>
			<div class="col-xs-7 col-md-7 text-left">
				<h4><?php echo lang('designer_color_select_ink_colors'); ?></h4>
				<span class="help-block"><?php echo lang('designer_color_select_the_colors_that_appear'); ?></span>
				<span class="help-block"><?php echo lang('designer_color_this_helps_us_determine'); ?></span>
				<p><strong> <?php echo lang('designer_color_note'); ?></strong></p>
				<span id="screen_colors_error"></span>
				<div id="screen_colors_list" class="list-colors"></div>
			</div>
		</div>
		<div class="screen_colors_botton">
			<button type="button" class="btn btn-primary" onclick="design.item.setColor()"><?php echo lang('designer_color_choose_colors'); ?></button>
		</div>
	</div>
</div>

<div class="tool-header text-center">
	<div class="header-logo pull-left">
		<a href="javascript:void(0);" class="site-logo" onclick="dg_full_screen(null)">
			<img style="margin-top: 9px;" height="40" src="<?php echo $logo_icon_url; ?>"/>
		</a>
		<a href="javascript:void(0);" onclick="dg_full_screen(this)" class="dg-tool-fullscreen">
			<i class="glyph-icon flaticon-expand-2 flaticon-22"></i>
		</a>
	</div>
	<div class="toolbar-left">
		<ul class="header-menu pull-left">
			<li class="dropdown menu-item-file">
				<a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><?php echo lang('designer_file'); ?> <i class="fa fa-angle-down" aria-hidden="true"></i></a>
				
				<ul class="dropdown-menu">
					<li><a href="javascript:void(0)" onclick="design.tools.reset(this);"><?php echo lang('designer_new_design'); ?></a></li>
					<li <?php echo cssShow($settings, 'show_my_design'); ?>><a href="javascript:void(0)" class="add_item_mydesign"><?php echo lang('designer_menu_my_design'); ?></a></li>
				</ul>
			</li>
		</ul>
	</div>
	
	<!-- Begin sidebar -->
	<div id="dg-sidebar">
		<div class="dg-tools">
			
			<button type="button" onclick="design.tools.undo()" class="btn disabled btn-none btn-sm btn-undo" data-placement="bottom" title="Undo">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 467.956 467.956" xml:space="preserve"><g><path d="M334.361,186.385C297.184,96.631,205.038,45.965,112.991,57.174l35.961-35.961L127.738,0L42.132,85.606l85.607,85.606  L148.952,150L90.94,91.987c86.954-23.72,180.327,20.467,215.705,105.878c24.497,59.141,16.531,125.338-21.308,177.078l24.215,17.709  c21.081-28.825,34.648-62.773,39.234-98.174C353.516,257.965,348.528,220.587,334.361,186.385z"/></g></svg>
				<small><?php echo lang('designer_undo'); ?></small>
			</button>

			<button type="button" onclick="design.tools.redo()" class="btn disabled btn-none btn-sm btn-redo">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 467.956 467.956" xml:space="preserve"><g><path d="M264.914,0l-21.213,21.213l35.963,35.963C187.617,45.969,95.469,96.632,58.291,186.385  c-14.167,34.202-19.154,71.58-14.424,108.094c4.586,35.4,18.153,69.349,39.234,98.174l24.215-17.709  c-37.839-51.74-45.805-117.938-21.308-177.078c35.378-85.41,128.749-129.6,215.705-105.878L243.701,150l21.213,21.213l85.607-85.606  L264.914,0z"/></g></svg>
				<small><?php echo lang('designer_redo'); ?></small>
			</button>
			<span class="col-line"></span>
			
			<?php $addons->view('helper', array(), 'editor'); ?>
		</div>
	</div>
	
	<div class="pull-right tools-btn">
		<button type="button" class="btn btn btn-none btn-sm btn-save-design dg-tooltip pull-left" onclick="design.save()">
			<i class="flaticon flaticon-14 flaticon-floppy-disk"></i><br />
			<small><?php echo lang('designer_save_btn'); ?></small>
		</button>

		<button type="button" class="btn-share btn btn btn-none btn-sm hidden-sm hidden-xs pull-left" onclick="design.share.ini();" <?php echo cssShow($settings, 'show_share'); ?>>
			<i class="flaticon flaticon-16 flaticon-share"></i><br />
			<small><?php echo lang('designer_share'); ?></small>
		</button>

		<button type="button" onclick="design.tools.preview();" class="btn-preview btn btn-none btn-sm hidden-sm hidden-xs pull-left">
			<i class="flaticon flaticon-16 flaticon-view"></i><br />
			<small><?php echo lang('designer_top_preview'); ?></small>
		</button>

		<button type="button" onclick="show_cartoption();" class="btn btn-gray">
			<?php echo lang('designer_right_buy_now'); ?>

			<span class="tools-price pull-right" <?php echo cssShow($settings, 'show_total_price'); ?>></span>
		</button>
	</div>
	<!-- END sidebar -->
</div>