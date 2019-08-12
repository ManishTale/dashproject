<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2016-07-10
 *
 *
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
	if(!isset($data['settings']['introAutoTimeVal']))
	{
		$data['settings']['introAutoTimeVal'] = '10';
	}
?>
<div class="panel panel-default">
	<div class="panel-heading">
		<i class="clip-phone"></i> Introduction
		<div class="panel-tools">
			<a href="javascript:void(0);" class="btn btn-xs btn-link panel-collapse collapses"></a>
		</div>
	</div>
	<div class="panel-body">
		<p class="help-block">Setting display manual instruction design tool.</p>
		<div class="form-group row">
			<label class="col-sm-3 control-label">Show Introduction On Desktop</label>
			<div class="col-sm-6">
				<?php
					echo displayRadio('enableIntroDeskFlg', $data['settings'], 'enableIntroDeskFlg', 0);
				?>
				<a href="javaScript: void(0)" class="deskViewDetailURL tshirt-view-ctrl">View Details &darr;</a>
			</div>
		</div>
		<div class="form-group row desktop-intro-sett">
			<label class="col-sm-3 control-label col-md-push-1">Show Product Info</label>
			<div class="col-sm-6 col-md-push-1">
				<?php
					echo displayRadio('pInfoIntroDFlg', $data['settings'], 'pInfoIntroDFlg', 1);
				?>
			</div>
		</div>
		<div class="form-group row desktop-intro-sett">
			<label class="col-sm-3 control-label col-md-push-1">Show Add New Item</label>
			<div class="col-sm-6 col-md-push-1">
				<?php
					echo displayRadio('addItemIntroDFlg', $data['settings'], 'addItemIntroDFlg', 1);
				?>
			</div>
		</div>
		<div class="form-group row desktop-intro-sett">
			<label class="col-sm-3 control-label col-md-push-1">Show Layer</label>
			<div class="col-sm-6 col-md-push-1">
				<?php
					echo displayRadio('layerIntroDFlg', $data['settings'], 'layerIntroDFlg', 1);
				?>
			</div>
		</div>
		<div class="form-group row desktop-intro-sett">
			<label class="col-sm-3 control-label col-md-push-1">Show Design Action</label>
			<div class="col-sm-6 col-md-push-1">
				<?php
					echo displayRadio('designActionIntroDFlg', $data['settings'], 'designActionIntroDFlg', 1);
				?>
			</div>
		</div>
		<div class="form-group row desktop-intro-sett">
			<label class="col-sm-3 control-label col-md-push-1">Show Product Options</label>
			<div class="col-sm-6 col-md-push-1">
				<?php
					echo displayRadio('pOppsIntroDFlg', $data['settings'], 'pOppsIntroDFlg', 1);
				?>
			</div>
		</div>
		<div class="form-group row desktop-intro-sett">
			<label class="col-sm-3 control-label col-md-push-1">Show Design Tool</label>
			<div class="col-sm-6 col-md-push-1">
				<?php
					echo displayRadio('designToolIntroDFlg', $data['settings'], 'designToolIntroDFlg', 1);
				?>
			</div>
		</div>


		<div class="form-group row">
			<label class="col-sm-3 control-label">Show Introduction On Mobile</label>
			<div class="col-sm-6">
				<?php
					echo displayRadio('enableIntroMobieFlg', $data['settings'], 'enableIntroMobieFlg', 1);
				?>
				<a href="javaScript: void(0)" class="mobieViewDetailURL tshirt-view-ctrl">View Details &darr;</a>
			</div>
		</div>
		<div class="form-group row mobie-intro-sett">
			<label class="col-sm-3 control-label col-md-push-1">Show Top Menu</label>
			<div class="col-sm-6 col-md-push-1">
				<?php
					echo displayRadio('pTopIntroMFlg', $data['settings'], 'pTopIntroMFlg', 1);
				?>
			</div>
		</div>
		<div class="form-group row mobie-intro-sett">
			<label class="col-sm-3 control-label col-md-push-1">Show Bottom Menu</label>
			<div class="col-sm-6 col-md-push-1">
				<?php
					echo displayRadio('bottomIntroMFlg', $data['settings'], 'bottomIntroMFlg', 1);
				?>
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-3 control-label">Automatic Play</label>
			<div class="col-sm-4">
				<input type="text" class="form-control input-sm" value="<?php echo $data['settings']['introAutoTimeVal']; ?>" name="setting[introAutoTimeVal]">		
				<span class="help-block"><small>Setup time automatic play introduction</small></span>	
			</div>	
			<label class="col-sm-1">Second</label>
		</div>
	</div>
</div>

<script>
	jQuery(document).ready(function() {
		jQuery('.desktop-intro-sett').hide();
		jQuery('.mobie-intro-sett').hide();
		jQuery('.deskViewDetailURL').data('show', '0');
		jQuery('.mobieViewDetailURL').data('show', '0');
		jQuery('.tshirt-view-ctrl').click(function() {
			var showFlg = jQuery(this).data('show');
			if(showFlg == '0')
			{
				jQuery(this).data('show', '1');
				jQuery(this).html('Hide Details &uarr;');
				if(jQuery(this).hasClass('deskViewDetailURL'))
				{
					jQuery('.desktop-intro-sett').show(800);
				}
				if(jQuery(this).hasClass('mobieViewDetailURL'))
				{
					jQuery('.mobie-intro-sett').show(800);
				}
			}
			else if(showFlg == '1')
			{
				jQuery(this).data('show', '0');
				jQuery(this).html('View Details &darr;');
				if(jQuery(this).hasClass('deskViewDetailURL'))
				{
					jQuery('.desktop-intro-sett').hide(800);
				}
				if(jQuery(this).hasClass('mobieViewDetailURL'))
				{
					jQuery('.mobie-intro-sett').hide(800);
				}
			}
		});
	});
</script>