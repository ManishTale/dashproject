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
<div class="modal fade" id="product-designer" data-view="<?php echo $data['position']; ?>">
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content" style="display:inline-block;">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title">Design <?php echo $data['position']; ?></h4>
			</div>
			<div class="form-group col-sm-12">
				<h5>Size of area design <span class="tooltips" data-placement="right" data-original-title="Size of file output same with this size"><i class="fa fa-info-circle"></i></span></h5>
				<div class="row">
					<div class="col-sm-12 area-size">
						<div class="box-left">
							<label>Paper Size</label>
							<?php
							$papers = array(
								'A6' => '10.5x14.8', 
								'A5' => '14.8x21.0',
								'A4' => '21.0x29.7',
								'A3' => '29.7x42.0',
								'A2' => '42.0x59.4',
								'A1' => '59.4x84.1',
								'A0' => '84.1x118.9',
								'Custom' => 'custom'
							);
							?>
							<select class="form-control area-page" onchange="product_js.areaSize(this)">
								<?php foreach ($papers as $size => $value) { ?>
								
								<option value="<?php echo $value; ?>"><?php echo $size; ?></option>

								<?php } ?>
							</select>
						</div>

						<div class="box-left">
							<label>
								<?php echo lang('product_width');?> 
								<span class="custom-area-size" style="display: none;">
									<input type="checkbox" class="area-locked-width" onclick="dgUI.product.lock(this)" /> <?php echo lang('product_locked')?>
								</span>
							</label>

							<div class="input-group">									
								<input type="text" class="form-control area-width" disabled onkeyup="dgUI.product.area(this);" value="" />
								<span class="input-group-addon">cm</span>
							</div>
						</div>

						<div class="box-left">
							<label>
								<?php echo lang('product_height');?> 
								<span class="custom-area-size" style="display: none;">
									<input type="checkbox" class="area-locked-height" onclick="dgUI.product.lock(this)" /> <?php echo lang('product_locked')?>
								</span>
							</label>
							<div class="input-group">									
								<input type="text" class="form-control area-height" disabled onkeyup="dgUI.product.area(this);" value="">
								<span class="input-group-addon">cm</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="form-group col-sm-12">
				<h4 class="pull-left">Canvas size: <span class="box_width_value">500</span>px * <span class="box_height_value">500</span>px</h4> 
				<div class="color-button">
					<button type="button" onclick="product_js.canvasSize(this)" class="btn btn-sm btn-default">Change size</button>
				</div>
			</div>
			<div class="list-image-color">
			</div>
			<div class="box-design-wapper">
				<div class="design-tools">
					<div class="design-group design-group-area pull-left">
						<div class="shape-tool tooltips" data-placement="right" title="Shape of area design">
							<a href="javascript:void(0)" class="btn btn-xs btn-med-grey" title="<?php echo lang('product_square');?>" onclick="dgUI.product.shape('square', this)"><span class="shape-square"></span></a>
							<a href="javascript:void(0)" class="btn btn-xs btn-med-grey" title="<?php echo lang('product_circle');?>" onclick="dgUI.product.shape('circle', this)"><span class="shape-circle"></span></a>
							<a href="javascript:void(0)" class="btn btn-xs btn-med-grey" title="<?php echo lang('product_circlesquare');?>" onclick="dgUI.product.shape('circlesquare', this)"><span class="shape-circlesquare"></span></a>
						</div>
						<div class="pull-left" id="shape-slider"></div>
						<input type="hidden" value="0" id="shape-slider-value" />
					</div>
					<div class="design-group design-group-color pull-left">
						<button class="btn btn-xs btn-med-grey" onclick="product_js.viewImage('<?php echo $data['position']; ?>')" type="button">Change Image</button>
					</div>
					<button type="button" onclick="product_js.save();" class="btn btn-primary btn-squared design-tools-save pull-right"><i class="glyphicon glyphicon-floppy-save"></i> Save</button>

					<div class="pull-right design-group design-group-area design-group-img">
						<button class="btn btn-xs btn-med-grey tooltips" type="button" title="Move up" onclick="dgUI.product.move('up')"><i class="clip-arrow-up-3"></i></button>
						<button class="btn btn-xs btn-med-grey tooltips" type="button" title="Move down" onclick="dgUI.product.move('down')"><i class="clip-arrow-down-3"></i></button>
						<button class="btn btn-xs btn-med-grey tooltips" type="button" title="Move left" onclick="dgUI.product.move('left')"><i class="clip-arrow-left-3"></i></button>
						<button class="btn btn-xs btn-med-grey tooltips" type="button" title="Move right" onclick="dgUI.product.move('right')"><i class="clip-arrow-right-3"></i></button>
						<button class="btn btn-xs btn-med-grey tooltips" type="button" title="Move center" onclick="dgUI.product.move('center')"><i class="clip-fullscreen-exit-alt"></i></button>
					</div>
					<div class="pull-right design-group design-group-img">
						<button class="btn btn-xs btn-med-grey tooltips" type="button" title="Automatic fit area design" onclick="dgUI.product.fit()"><i class="fa fa-compress"></i></button>
					</div>
				</div>
				<div class="box-design-right">
					<div class="panel-options">
						<div class="form-group">
							<h5>Layers <button class="btn pull-right btn-xs btn-dark-grey" type="button" onclick="jQuery.fancybox( {href : '<?php echo site_url('index.php/media/modals/design/2') ?>', type: 'iframe', topRatio: 0, beforeShow: function() {jQuery('.fancybox-wrap').css('top', '130px')}} );">Add layer</button></h5>
							<ul id="layers"></ul>
						</div>

						<div class="form-group">
							<?php $addons->view('design-options', '', $data); ?>
						</div>
					</div>
				</div>

				<div class="box-design-left">
					<div class="box-design">
						<div class="product-design-view">
							<div id="product-images"></div>
							<div id="area-design"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>