<?php
	$settings = $GLOBALS['settings'];
	$addons   = $GLOBALS['addons'];
	$introAutoTimeVal   = setValue($settings, 'introAutoTimeVal', '10');
	$enableIntroDeskFlg = setValue($settings, 'enableIntroDeskFlg', '0');
?>
<script>
	var introAutoTimeVal = '<?php echo $introAutoTimeVal;?>';
	var enableIntroFlg   = '<?php echo $enableIntroDeskFlg;?>';
	if(introAutoTimeVal == '' || introAutoTimeVal == 'undefined')
	{
		introAutoTimeVal = 10;
	}
	introAutoTimeVal = introAutoTimeVal * 1000;
</script>

<ul id="introduction-desc-lst" style="display: none">
	<li data-order="0" data-selecter="tshirt-intro-start" data-position="center" data-isActive='1'>
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

	<li data-order="1" data-selecter="a[data-target='#modal-product-info']" data-position="top" data-isActive="<?php echo $settings->pInfoIntroDFlg;?>">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_productinfor_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_productinfor_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>
	
	<li data-order="2" data-selecter="a[data-target='#modal-product-size']" data-position="top" data-isActive="<?php echo $settings->pInfoIntroDFlg;?>">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_sizechart_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_sizechart_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>
	
	<li data-order="3" data-selecter="#dg-left .dg-box:nth-child(1)" data-position="left" data-isActive="<?php echo $settings->addItemIntroDFlg;?>">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_additem_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_additem_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>
	
	<li data-order="4" data-selecter="#dg-left .div-layers" data-position="left" data-isActive="<?php echo $settings->layerIntroDFlg;?>">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_layers_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_layers_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>
	
	<li data-order="5" data-selecter=".dg-tools .btn-save-design" data-position="top" data-isActive="<?php echo $settings->designActionIntroDFlg;?>">
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
	
	<li data-order="6" data-selecter=".dg-tools a[data-type='preview']" data-position="top" data-isActive="<?php echo $settings->designActionIntroDFlg;?>">
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
	
	<li data-order="7" data-selecter=".dg-tools a[data-type='zoom']" data-position="top" data-isActive="<?php echo $settings->designActionIntroDFlg;?>">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_zoomdesign_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_zoomdesign_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>
	
	<li data-order="8" data-selecter=".dg-tools button[onclick='design.save()']:not(.btn-save-design)" data-position="top" data-isActive="<?php echo $settings->designActionIntroDFlg;?>">
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
		
	<li data-order="9" data-selecter=".dg-tools button[onclick='design.selectAll()'].btn-desktop" data-position="top" data-isActive="<?php echo $settings->designActionIntroDFlg;?>">
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
	
	<li data-order="10" data-selecter="#right-options" data-position="right" data-isActive="<?php echo $settings->pOppsIntroDFlg;?>">
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
	
	<li data-order="11" data-selecter="#dg-help-functions" data-position="right" data-isActive="<?php echo $settings->designToolIntroDFlg;?>" class="introduction-design-tool">
		<span class="intro-closeBtn">×</span>
		<span class="intro-desc-title"><?php echo $addons->__('intro_desigtool_title'); ?></span>
		<p class="intro-desc-content">
			<?php echo $addons->__('intro_desigtool_content'); ?>
		</p>
		<div class="intro-desc-taskbar">
			<button type="button" class="btn btn-default next-step"><?php echo $addons->__('intro_nextstep_label'); ?></button>
			<button type="button" class="btn btn-default close-desc"><?php echo $addons->__('intro_close_label'); ?></button>
			<a href="javaScript: void(0)" class="close-forever"><?php echo $addons->__('intro_closef_label'); ?></a>
		</div>
	</li>
</ul>