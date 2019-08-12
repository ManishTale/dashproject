<?php
	$settings = $GLOBALS['settings'];
	$addons   = $GLOBALS['addons'];
	$introAutoTimeVal    = setValue($settings, 'introAutoTimeVal', '10');
	$enableIntroMobieFlg = setValue($settings, 'enableIntroMobieFlg', '1');
?>
<script>
	var introAutoTimeVal = '<?php echo $introAutoTimeVal;?>';
	var enableIntroFlg   = '<?php echo $enableIntroMobieFlg;?>';
	if(introAutoTimeVal == '' || introAutoTimeVal == 'undefined')
	{
		introAutoTimeVal = 10;
	}
	introAutoTimeVal = introAutoTimeVal * 1000;
</script>
<ul id="introduction-desc-lst" style="display: none">
	<li data-order="0" data-selecter="tshirt-intro-start" data-position="center" data-isActive="1">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_introstart_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_introstart_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>

	<li data-order="1" data-selecter="#dg-sidebar >.pull-left" data-position="top" data-isActive="<?php echo $settings->pTopIntroMFlg;?>">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_chooseproduct_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_chooseproduct_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>

	<li data-order="2" data-selecter="button.btn-save-design" data-position="top" data-isActive="<?php echo $settings->pTopIntroMFlg;?>">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_savedesign_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_savedesign_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>

	<li data-order="3" data-selecter="a[data-type='preview']" data-position="top" data-isActive="<?php echo $settings->pTopIntroMFlg;?>">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_prevdesign_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_prevdesign_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>
	
	<li data-order="4" data-selecter="button.btn-share-design" data-position="top" data-isActive="<?php echo $settings->pTopIntroMFlg;?>">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_sharedesign_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_sharedesign_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>
	
	<li data-order="5" data-selecter="button[onclick='design.selectAll()']:not(.btn-desktop)" data-position="top" data-isActive="<?php echo $settings->pTopIntroMFlg;?>">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_selectall_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_selectall_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>
	
	<li data-order="6" data-selecter=".pull-right .dropdown.pull-left" data-position="top" data-isActive="<?php echo $settings->pTopIntroMFlg;?>">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_sizeintoprd_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_sizeintoprd_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>
	
	<li data-order="7" data-selecter="button[onclick='design.mobile.close()']" data-position="top" data-isActive="<?php echo $settings->pTopIntroMFlg;?>">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_closemobie_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_closemobie_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>
	
	<li data-order="8" data-selecter="li.edit_product_element" data-position="bottom" data-isActive="<?php echo $settings->bottomIntroMFlg;?>">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_productopps_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_productopps_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>
	
	<li data-order="9" data-selecter="li.add_text_element, li.add_clipart_element" data-position="bottom" data-isActive="<?php echo $settings->bottomIntroMFlg;?>">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_addtext_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_addtext_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>
	
	<li data-order="10" data-selecter="li.upload_image_element" data-position="bottom" data-isActive="<?php echo $settings->bottomIntroMFlg;?>">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_upload_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_upload_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>
	
	<li data-order="11" data-selecter="li.buy_now_element" data-position="bottom" data-isActive="<?php echo $settings->bottomIntroMFlg;?>">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_buynow_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_buynow_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>
	
	<li data-order="12" data-selecter="li.mydesign_element" data-position="bottom" data-isActive="<?php echo $settings->bottomIntroMFlg;?>">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_mydesigns_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_mydesigns_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>
	
	<li data-order="13" data-selecter="li.design_ideas_element" data-position="bottom" data-isActive="<?php echo $settings->bottomIntroMFlg;?>">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_ideasdesign_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_ideasdesign_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>
</ul>