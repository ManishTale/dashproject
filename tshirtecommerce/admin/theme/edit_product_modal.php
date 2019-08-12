<?php
$product = $data['product'];
$dgClass = new dg();
?>
<script src="<?php echo site_url('assets/plugins/tinymce/tinymce.min.js'); ?>"></script>
<script src="<?php echo site_url('assets/plugins/select2/select2.min.js'); ?>"></script>
<link href="<?php echo site_url('assets/plugins/select2/select2.css'); ?>" rel="stylesheet" />
<style>
.fancybox-outer .fancybox-inner{max-height: 600px;}
#fr-product .table{font-size:12px;}
body{overflow-x: hidden;}
</style>
<script type="text/javascript">
var site_url = '<?php echo site_url(); ?>';
var base_url = '<?php echo site_url(); ?>';
var url = '<?php echo site_url(); ?>';
var areaZoom = 10;
function descriptMedia(images){
	if(images.length > 0)
	{
		var html = '';
		for(i=0; i<images.length; i++)
		{
			html = html + '<img src="'+images[i]+'" alt="" />';
		}
		tinymce.activeEditor.execCommand('mceInsertContent', false, html);
		jQuery.fancybox.close();
	}
}
tinymce.PluginManager.add('dgmedia', function(editor, url) {
	// Add a button that opens a window
	editor.addButton('dgmedia', {
		text: 'Add images',
		icon: false,
		onclick: function() {
			jQuery.fancybox( {href : '<?php echo site_url('index.php/media/modals/descriptMedia/2'); ?>', type: 'iframe'} );
		}
	}); 
});
tinymce.init({
	selector: ".text-edittor",
	menubar: false,
	toolbar_items_size: 'small',
	statusbar: false,
	height : 150,
	convert_urls: false,
	setup: function(editor) {
		editor.addButton('mybutton', {
			text: 'My button',
			icon: false,
			onclick: function() {
				editor.insertContent('Main button');
			}
		});
	},
	plugins: [
		"advlist autolink lists link image charmap print preview anchor",
		"searchreplace visualblocks code fullscreen",
		"insertdatetime media table contextmenu paste dgmedia"
	],
	toolbar: "code | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | dgmedia"
});
</script>
<div class="row">
	<form id="fr-product" accept-charset="utf-8" method="post" action="<?php echo site_url('index.php/product/save'); ?>">
		<div class="tabbable col-md-12">
			<ul id="myTab" class="nav nav-tabs tab-bricky">
				<li class="active"><a href="#panel_tab2_example1" data-toggle="tab"><i class="green fa fa-cog"></i> <?php lang('product_info'); ?></a></li>
				<li><a href="#panel_tab2_example2" data-toggle="tab"><i class="green fa fa-magic"></i> <?php lang('product_design'); ?></a></li>
				<li><a href="#panel-attributes" data-toggle="tab"><i class="green fa fa-th-list"></i> Attributes</a></li>
				<li><a href="#panel-settings" data-toggle="tab"><i class="green fa fa-cog"></i> Advanced</a></li>
			</ul>
			
			<div class="tab-content">
				<div class="tab-pane active" id="panel_tab2_example1">
					<!-- Begin left -->
					<div style="display:none;">							
						<input type="text" name="product[title]" value="<?php echo setValue($product, 'title', ''); ?>" placeholder="<?php lang('product_name'); ?>" id="product-name" data-minlength="2" data-maxlength="250" data-msg="<?php lang('product_name_validate_msg');?>" class="form-control validate required">
						<textarea name="product[description]" class="product_description" style="width:100%;"><?php echo setValue($product, 'description', ''); ?></textarea>
						<textarea name="product[short_description]" class="short_description" rows="3"><?php echo setValue($product, 'short_description', ''); ?></textarea>
					</div>
					
					<div class="row">
						<div class="col-sm-8 col-md-8">
							<div style="display:none;">
								<?php if (setValue($product, 'published', 1) == 1) { ?>
								<input type="checkbox" name="product[published]" value="1" checked="checked">
								<?php } else { ?>
								<input type="checkbox" name="product[published]" value="0">
								<?php } ?>
								<input type="text" class="form-control product_sku input-sm validate required" name="product[sku]" value="<?php echo setValue($product, 'sku', ''); ?>" data-minlength="2" data-maxlength="250" data-msg="<?php lang('product_sku_validate_msg');?>" placeholder="<?php lang('product_sku'); ?>">
								<input type="text" class="form-control input-sm product_price" name="product[price]" value="<?php echo setValue($product, 'price', ''); ?>" placeholder="<?php lang('product_regular_price'); ?>">
							</div>
							<div class="form-group">
								<label ><?php lang('product_site_info'); ?></label>
								<textarea name="product[size]" class="text-edittor" style="width:100%;"><?php echo setValue($product, 'size', ''); ?></textarea>
							</div>

							<div class="form-group">
								<label class="col-sm-3 control-label">
									<?php lang('product_print_type'); ?>
								</label>
								<div class="col-sm-6">
									<?php
									$print_types = $addons->printing(array());
									$print_type = setValue($product, 'print_type', '');
									?>
									<select name="product[print_type]" size="1" class="form-control input-sm">
									
									<?php 
									foreach($print_types as $key => $type) {
										if ($print_type == $key) $selected = 'selected="selected"';
										else $selected = '';
									?>
										<option <?php echo $selected; ?> value="<?php echo $key; ?>"><?php echo $type; ?></option>
									<?php } ?>
									
									</select>
								</div>
								<div class="col-sm-offset-3 col-sm-9">
									<p class="help-block">Note: Calculate price of printing based printing type. Go to menu <strong>T-Shirt eCommerce > Printing Type</strong> add or edit printing type.</p>
								</div>
							</div>

							<?php if ($dgClass->platform == 'wordpress') { ?>
							<div class="form-group">
								<label class="col-sm-3 control-label"><?php lang('product_order_min'); ?></label>
								<div class="col-sm-6">
									<input type="text" name="product[min_order]" class="form-control" value="<?php echo setValue($product, 'min_order', ''); ?>" />
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-3 control-label"><?php lang('product_order_max'); ?></label>
								<div class="col-sm-6">
									<input type="text" name="product[max_oder]" class="form-control" value="<?php echo setValue($product, 'max_oder', ''); ?>" />
								</div>
							</div>
							<div class="clear-line"></div>

							<div class="form-group" id="prices-quantity">
								<div class="row-prices" style="display:none;">
									<input type="text" value="<?php echo setValue($product, 'sale_price', ''); ?>" class="form-control product_sale_price input-sm" name="product[sale_price]" placeholder="<?php lang('product_sale_price'); ?>">
								</div>
								
								<div class="row-prices form-group">
									<div class="col-xs-12">
										<h5>Setup price discount with quantity</h5>
										<p class="help-block">Add more option of price with quanity, start with minimum quantity is 1.</p>
									</div>
								</div>
								<div class="row-prices form-group">
									<div class="col-xs-3"><strong><?php lang('product_quantity_min'); ?></strong></div>
									<div class="col-xs-3"><strong><?php lang('product_quantity_max'); ?></strong></div>
									<div class="col-xs-3"><strong><?php lang('price'); ?></strong></div>
									<div class="col-xs-3"><strong><?php lang('remove'); ?></strong></div>
								</div>
									
								<!-- price with quantity -->
								<?php 
								if(isset($product->prices) && isset($product->prices->price)) {
									if (is_string($product->prices->min_quantity))
										$price_min = json_decode($product->prices->min_quantity, true);
									else
										$price_min = $product->prices->min_quantity;
									
									if (is_string($product->prices->max_quantity))
										$price_max = json_decode($product->prices->max_quantity, true);
									else
										$price_max = $product->prices->max_quantity;
									
									if (is_string($product->prices->price))
										$price_price = json_decode($product->prices->price, true);
									else
										$price_price = $product->prices->price;
									
									for($i=0; $i < count($price_min); $i++) {
								?>
								<div class="row-prices form-group">
									<div class="col-xs-3">
										<input type="text" value="<?php echo $price_min[$i]; ?>" class="form-control input-sm" name="product[prices][min_quantity][]" placeholder="Min quantity">
									</div>
									<div class="col-xs-3">
										<input type="text" value="<?php echo $price_max[$i]; ?>" class="form-control input-sm" name="product[prices][max_quantity][]" placeholder="Max quantity">
									</div>
									<div class="col-xs-3">
										<input type="text" value="<?php echo $price_price[$i]; ?>" class="form-control input-sm" name="product[prices][price][]" placeholder="<?php lang('product_sale_price'); ?>">
									</div>
									<div class="col-xs-3">
										<a href="javascript:void(0);" onclick="dgUI.product.priceQuantity(this);" title="<?php lang('remove'); ?>"><?php lang('remove'); ?></a>
									</div>
								</div>
								<?php }}?>
								
							</div>
							<div class="form-group">
								<div class="col-sm-12">
									<button type="button" class="btn btn-default" onclick="dgUI.product.priceQuantity();"><i class="fa fa-plus-circle"></i> Add new price</button>
								</div>
							</div>
							
							<hr />
							<div class="form-group">
								<label class="col-sm-3 control-label"><?php echo $addons->__('tax_add_tax_title'); ?></label>
								<div class="col-sm-4">
									<?php 
									$taxes[''] = $addons->__('tax_product_choose_tax_title');
									$file = dirname(ROOT) .DS. 'data' .DS. 'taxes.json';
									if(file_exists($file))
									{
										$taxdata = @file_get_contents($file);
										$taxdata = json_decode($taxdata);
										if(count($taxdata))
										{
											foreach($taxdata as $val)
											{
												if($val->published == 1)
													$taxes[$val->id] = $val->title;
											}
										}
									}
									$value = '';
									if(isset($data->tax))
										$value = $data->tax;
									?>
									<select name="product[tax]" size="1" class="form-control input-sm">
									
									<?php 
									foreach($taxes as $key => $val) {
										if ($value == $key) $selected = 'selected="selected"';
										else $selected = '';
									?>
										<option <?php echo $selected; ?> value="<?php echo $key; ?>"><?php echo $val; ?></option>
									<?php } ?>
									
									</select>
								</div>
							</div>
							<?php } ?>
						</div>
						
						<!-- Begin righ -->
						<div class="col-sm-4 col-md-4">
							<div class="panel panel-default">
								<div class="panel-heading">
									<i class="clip-list"></i> <?php echo lang('product_categories'); ?>
									<div class="panel-tools">
										<a href="javascript:void(0);" class="btn btn-xs btn-link panel-collapse collapses"></a>						
									</div>
								</div>
								<div class="panel-body">
									<label id="product_categories-lable"><?php echo lang('product_add_categories'); ?></label>
									<button type="button" autocomplete="off" onclick="dgUI.product.removeCate(this);" id="loading-example-btn" data-loading-text="Loading..." class="btn btn-sm pull-right btn-primary">
									  <?php echo lang('remove'); ?>
									</button>								
									<div class="form-group" id="product_categories">
										<?php
											$categories = $dgClass->getCategories();
											$categories = $dgClass->categoriesToTree($categories);
											echo $dgClass->dispayTree( $categories, 0, array('type'=>'checkbox', 'name'=>'category[]'), $data['cate_checked'] ); 
										?>
									</div>
									<div class="form-group">
										<a href="javascript:void(0)" onclick="dgUI.product.addCategoryJs(this)"><?php echo lang('product_add_category'); ?></a>
									</div>
									
									<div class="form-group">
										<div class="add-new-category" style="display:none;">
											
											<!-- category language -->
											<div class="form-group">
												<input type="text" class="add_new_category form-control input-sm" placeholder="<?php echo lang('product_title_category'); ?>" autocomplete="off">
											</div>
											
											<div class="form-group">
											
												<select class="form-control" id="product-category-parent">
													<option value="0"><?php echo lang('product_parent_category'); ?></option>
													<?php 
														echo $dgClass->dispayTree( $categories, 0, array('type'=>'select', 'name'=>'') ); 
													?>
												</select>
											
											</div>
											<div class="form-group">
												<a href="javascript:void(0)" class="btn btn-default btn-sm" onclick="dgUI.product.addCategoryJs(this, 'save')"><?php echo lang('product_add_category'); ?></a>
											</div>
										</div>
									</div>
									
								</div>
							</div>
							
							<div class="panel panel-default" style="display:none;">
								<div class="panel-heading">
									<i class="clip-image"></i>
									<?php lang('product_image'); ?>
									<div class="panel-tools">
										<a href="javascript:void(0);" class="btn btn-xs btn-link panel-collapse collapses"></a>						
									</div>
								</div>
								<div class="panel-body">
									<input type="hidden" name="product[image]" value="<?php echo setValue($product, 'image', ''); ?>" id="products_image" />
									<img width="100" alt="" class="pull-right" src="<?php echo imageURL(setValue($product, 'image', '')); ?>">
									<a href="javascript:void(0)" class="btn btn-default btn-sm" onclick="jQuery.fancybox( {href : '<?php echo site_url('index.php/media/modals/productImg/1') ?>', type: 'iframe'} );"><?php lang('product_add_image'); ?></a>
								</div>
							</div>
						</div>
						<!-- End righ -->
					</div>
				</div>
				
				<div class="tab-pane" id="panel_tab2_example2">
					<?php include('product/product_tab_design.php'); ?>
					<input type="hidden" value="<?php echo setValue($product, 'id', 0); ?>" name="product[id]" />
					<?php $addons->view('product-extra', $product); ?>
				</div>

				<div class="tab-pane" id="panel-attributes">
					<?php include_once('product/attributes.php'); ?>
				</div>

				<div class="tab-pane" id="panel-settings">
					<div class="col-sm-8">
						<?php 
						if(!isset($product->dpioutput))
						{
							if(empty($settings))
							$settings 		= $dgClass->getSetting();
							if(isset($settings->dpioutput)){
								$product->dpioutput = $settings->dpioutput;
							}else{
								$product->dpioutput = '72';
							}
						}
						?>
						<div class="form-group">
							<label class="col-sm-3 control-label">
								DPI of file upload
							</label>
							<div class="col-sm-4">
								<input type="text" value="<?php echo $product->dpioutput; ?>" name="product[dpioutput]" class="form-control">
							</div>
						</div>
						
						<?php $addons->view('product-fields', $addons, $product); ?>
					</div>
				</div>
			</div>
		</div>
		<input type="hidden" name="lightbox_save" id="lightbox_save" value="1">
	</form>
</div>
<div id="add-view" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h4 class="modal-title" id="myModalLabel"><?php lang('product_create_product_view');?></h4>
			</div>
			
			<div class="modal-body">
			</div>
			
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal"><?php lang('cancel');?></button>
				<button type="button" class="btn btn-primary"><?php lang('save');?></button>
			</div>
		</div>
	</div>
</div>

<div id="ajax-modal" class="modal fade" tabindex="-1" style="display: none;"></div>

<script type="text/javascript">
	var product_id = '<?php echo setValue($product, 'id', 0); ?>';
	var files_type = '<option value="selectbox"><?php lang('product_text_list');?></option><option value="textlist"><?php lang('product_select_dropdown');?></option><option value="checkbox"><?php lang('product_checkbox');?></option><option value="radio"><?php lang('product_button_radio');?></option>';
	function design(images)
	{
		dgUI.product.addDesign(images);		
	}
	jQuery(document).ready(function(){
		jQuery('#add-new-color').on('click', function(){
			UIModals.init('<?php echo site_url('index.php/product/colors'); ?>');
			setTimeout(function(){ jscolor.init();}, 1000);
		});
		
		jQuery( "#product-design tbody" ).sortable({
			placeholder: "ui-state-highlight"
		});
		
		// saved product
		<?php if(isset($data['saved']) && $data['saved'] == 1) { ?>
		window.parent.wooSave(<?php echo setValue($product, 'id', 0); ?>, 'product');
		<?php } ?>
		jQuery('.select2-options').select2({width:'100%'});
	});
	function productInfo(product){
		jQuery('#product-name').val(product.title);
		jQuery('.short_description').val(product.shortdescription);
		jQuery('.product_description').val(product.description);
		jQuery('.product_sku').val(product.sku);
		jQuery('.product_price').val(product.price);
		jQuery('.product_sale_price').val(product.sale_price);
		jQuery('#products_image').val(product.thumb);
		if(typeof product.prices != 'undefined')
		{
			jQuery('.prices_variations').val(product.prices);
		}
		if(product_js.saveProduct())
		{
			jQuery('#fr-product').submit();
			return true;
		}
		return false;
	}
	function productInfo2(product) {
		jQuery('#product-name').val(product.title);
		jQuery('.short_description').val(product.shortdescription);
		jQuery('.product_description').val(product.description);
		jQuery('.product_sku').val(product.sku);
		jQuery('.product_price').val(product.price);
		jQuery('.product_sale_price').val(product.sale_price);
		jQuery('#products_image').val(product.thumb);
		jQuery('#product_min_order').val(product.min_order);
		jQuery('#product_max_order').val(product.max_order);

		var rel = true;
		if (product_js.saveProduct() == true) {
			tinyMCE.triggerSave();
			var data_form = jQuery('#fr-product').serialize();
			jQuery.ajax({
				data: data_form,
				type: 'post',
				url: site_url+'/index.php?/pproduct/pssave',
				dataType:'json',
				async: false,
				success: function(relsult) {
					if (relsult != '') {
						var temps = (relsult.product_id + '').split(':');
						if (temps.length > 1) {
							var price_of_print = jQuery('#price_of_printing').attr('price');
							if (typeof price_of_print === 'undefined') {
								price_of_print = 0;
							}
							window.parent.jQuery('#_product_title_img').val(relsult.product_title_img + '::' + price_of_print);
						} else {
							window.parent.jQuery('#_product_title_img').val(relsult.product_title_img);
						}
						window.parent.jQuery('#_product_id').val(relsult.product_id);
						window.parent.jQuery('#product-submit-button').trigger('click');
					}
				}
			});
		} else {
			rel = false;
		}

		return rel;
	}
</script>