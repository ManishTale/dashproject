<?php
$addons           = $GLOBALS['addons'];
if( isset($_GET['quick_edit']) && $_GET['quick_edit'] == 1 && (isset($_GET['idea_id']) || isset($_GET['id']) && empty($admin_design_layout)) )
{
	$product           = $GLOBALS['product'];
?>
	<?php if(isset($product->hide_quickview) && $product->hide_quickview == 1) { ?>
	<?php }else { ?>
	<script type="text/javascript">
	if(typeof layout_customize != 'undefined' && layout_customize == 1)
		var view_quick_design = 0;
	else
		var view_quick_design = 1;
	lang.store.quick_view = {
		title: '<?php echo lang('quick_designer_head'); ?>',
		line: '<?php echo lang('quick_designer_text_line'); ?>',
		text: '<?php echo lang('designer_store_custom_it_text'); ?>',
		btn: '<?php echo lang('designer_store_custom_it_button'); ?>',
		select_all: '<?php echo lang('designer_store_custom_select_all'); ?>',
		change: '<?php echo lang('quick_designer_change'); ?>',
		remove: '<?php echo lang('designer_team_remove'); ?>',
		upload_photo: '<?php echo lang('designer_upload_upload_photo'); ?>',
	}
	</script>
	<?php } ?>
<?php } ?>