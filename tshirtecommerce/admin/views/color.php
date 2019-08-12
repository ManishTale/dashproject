<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-01-10
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
?>
<div class="modal-dialog">
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			<h4 class="modal-title" id="myModalLabel"><?php echo lang('product_select_color'); ?></h4>
		</div>
		
		<div class="modal-body">
			<div class="row">				
				<div class="col-xs-4"><input type="text" class="form-control input-sm" placeholder="<?php echo lang('color_title_place')?>" id="add-color-title" /></div>
				<div class="col-xs-2"><input type="text" class="form-control input-sm color {pickerPosition:'botton'}" placeholder="<?php echo lang('color_hex_place')?>" id="add-color-color" /></div>
				<div class="col-xs-2"><a href="javascript:void(0)" onclick="dgUI.product.color.add()" title="<?php echo lang('color_add_color')?>" class="btn btn-sm btn-green"><i class="fa fa-plus"></i> </a></div>
				
				<div class="col-xs-2"><ul class="add-more-colors"></ul></div>
				<?php if($data['function'] == null) { ?>
				<div class="col-xs-2"><a href="javascript:void(0)" onclick="dgUI.product.addHex()" class="btn btn-sm pull-right btn-primary"><?php echo lang('add'); ?></a></div>
				<?php }else{ ?>
					<div class="col-xs-2"><a href="javascript:void(0)" onclick="<?php echo $data['function']; ?>('*')" class="btn btn-sm pull-right btn-primary"><?php echo lang('add'); ?></a></div>
				<?php } ?>
			</div>
			
			<br />
			<div class="row">
				<div class="col-xs-6">
					<input type="text" class="form-control input-sm" placeholder="<?php echo lang('color_find_color_place')?>" onkeyup="dgUI.product.color.find('key', this)">
				</div>
				<div class="col-xs-6">
					<a class="pull-right btn btn-sm btn-default" onclick="add_all_color();">Add all colors</a>
				</div>			
			</div>
			<br />
			<div class="clear-line"></div>
			
			<?php if($data['colors']) { ?>
			<ul class="colors" id="system-colors">
			
			<?php foreach($data['colors'] as $color) { ?>
				
				<li>
				<?php if($data['function'] == null) $data['function'] = "dgUI.product.addColor"; ?>
					<?php
						if(isset($data['id']) && $data['id'] != null)
							$js = $data['function'] . "('".$color->title."', '".$color->hex."', '".$data['id']."')";
						else
							$js = $data['function'] . "('".$color->title."', '".$color->hex."')";
					?>
					<a class="box-color" href="javascript:void(0);" onclick="<?php echo $js; ?>">
						<span class="color-bg" style="background-color:#<?php echo $color->hex; ?>"></span>
						<?php echo $color->title; ?>
					</a>
				</li>
				
			<?php } ?>
			
			</ul>
			<?php } ?>
		
		</div>
		
		<div class="modal-footer">
			<button type="button" class="btn btn-default" data-dismiss="modal"><?php echo lang('cancel'); ?></button>
		</div>
	</div>
</div>
<script type="text/javascript">
function add_all_color(){
	jQuery('#system-colors .box-color').each(function(){
		this.click();
	});
	jQuery('#ajax-modal').modal('hide');
}
</script>