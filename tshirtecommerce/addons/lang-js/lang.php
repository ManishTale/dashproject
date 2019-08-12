<?php
$product          = $GLOBALS['product'];
$lang          	= $GLOBALS['lang'];
$lang_old 		= array(
	'front' => $lang['designer_js_text_front'],
	'back' => $lang['designer_js_text_back'],
	'left' => $lang['designer_js_text_left'],
	'right' => $lang['designer_js_text_right'],
);
if(isset($product->view_label))
{
	if(isset($product->view_label->front) && $product->view_label->front != '')
	{
		$lang['designer_js_text_front'] = $product->view_label->front;
	}
	if(isset($product->view_label->back) && $product->view_label->back != '')
	{
		$lang['designer_js_text_back'] = $product->view_label->back;
	}
	if(isset($product->view_label->left) && $product->view_label->left != '')
	{
		$lang['designer_js_text_left'] = $product->view_label->left;
	}
	if(isset($product->view_label->right) && $product->view_label->right != '')
	{
		$lang['designer_js_text_right'] = $product->view_label->right;
	}
	$GLOBALS['lang'] = $lang;
}
?>
<script type="text/javascript">
var lang = {
	remove: '<?php echo lang('designer_team_remove'); ?>',
	color_picker: '<?php echo lang('designer_color_picker'); ?>',
	text_required: '<?php echo lang('designer_js_required'); ?>',
	upload:{
		fileType: '<?php echo lang('designer_js_upload_filetype'); ?>',
		minSize: '<?php echo lang('designer_js_upload_minsize'); ?>',
		maxSize: '<?php echo lang('designer_js_upload_maxsize'); ?>',
		terms: '<?php echo lang('designer_js_upload_terms'); ?>',
		chooseFile: '<?php echo lang('designer_js_upload_choosefile'); ?>',
	},
	designer:{
		quantity: '<?php echo lang('designer_js_quantity'); ?>',
		quantityMin: '<?php echo lang('designer_js_quantitymin'); ?>',
		quantityMax: '<?php echo lang('designer_js_quantitymax'); ?>',
		checkquantity: '<?php echo lang('designer_js_checkquantity'); ?>',
		tryagain: '<?php echo lang('designer_js_tryagain'); ?>',
		chooseColor: '<?php echo lang('designer_js_choosecolor'); ?>',
		reset: '<?php echo lang('designer_js_reset'); ?>',
		datafound: '<?php echo lang('designer_js_datafound'); ?>',
		category: '<?php echo lang('designer_js_category'); ?>',
	},
	product:{
		id: '<?php echo lang('designer_js_product_id'); ?>',
		sku: '<?php echo lang('designer_js_product_sku'); ?>',
		description: '<?php echo lang('designer_js_product_description'); ?>',
		team: '<?php echo lang('designer_js_product_team'); ?>',
	},
	text:{
		edit: '<?php echo lang('designer_js_text_edit'); ?>',
		remove: '<?php echo lang('designer_js_text_remove'); ?>',
		color: '<?php echo lang('designer_js_text_color'); ?>',
		layer: '<?php echo lang('designer_js_text_layer'); ?>',
		sort: '<?php echo lang('designer_js_text_sort'); ?>',
		email: '<?php echo lang('designer_js_text_email'); ?>',
		password: '<?php echo lang('designer_js_text_password'); ?>',
		username: '<?php echo lang('designer_js_text_username'); ?>',
		designid: '<?php echo lang('designer_js_text_designid'); ?>',
		enter_text: '<?php echo lang('designer_js_enter_text'); ?>',
		all_fonts: '<?php echo lang('designer_js_all_fonts'); ?>',
		qrcode: '<?php echo lang('designer_js_qrcode'); ?>',
		add_qrcode: '<?php echo lang('designer_js_add_qrcode'); ?>',
		ink_colors: '<?php echo lang('designer_js_ink_colors'); ?>',
		show_design: '<?php echo lang('designer_js_show_design'); ?>',
		setup: '<?php echo lang('designer_js_setup'); ?>',
		fromt: '<?php echo lang('designer_js_text_from'); ?>',
		save_new: '<?php echo lang('designer_js_text_save_new'); ?>',
		update: '<?php echo lang('designer_js_text_update'); ?>',
		front: '<?php echo lang('designer_js_text_front'); ?>',
		front_old: '<?php echo $lang_old['front']; ?>',
		back: '<?php echo lang('designer_js_text_back'); ?>',
		back_old: '<?php echo $lang_old['back']; ?>',
		left: '<?php echo lang('designer_js_text_left'); ?>',
		left_old: '<?php echo $lang_old['left']; ?>',
		right: '<?php echo lang('designer_js_text_right'); ?>',
		right_old: '<?php echo $lang_old['right']; ?>',
		edit_clipart: '<?php echo lang('designer_edit_clipart'); ?>',
		edit_text: '<?php echo lang('designer_edit_text'); ?>',
		copy: '<?php echo lang('designer_js_copy'); ?>',
	},
	team:{
		title: '<?php echo lang('designer_js_team_title'); ?>',
		name: '<?php echo lang('designer_js_team_name'); ?>',
		number: '<?php echo lang('designer_js_team_number'); ?>',
		choose_size: '<?php echo lang('designer_js_team_choose_sizes'); ?>',
	},
	share:{
		title: '<?php echo lang('designer_js_share_title'); ?>',
	}
}
</script>