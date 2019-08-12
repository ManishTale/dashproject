<?php
	$product          = $GLOBALS['product'];
	$addons           = $GLOBALS['addons'];
	$checkItemFitFlg  = setValue($product, 'productCheckItemFitFlg', '0');
	$checkItemFitType = setValue($product, 'productCheckItemFitType', '1');
	$fitItemErrMss    = $addons->__('addon_designfit_errormess_en');
	$fitItemWarnMss   = $addons->__('addon_designfit_warnmess_en');
?>
<script type="text/javascript">
	var checkItemFitFlg  = '<?php echo $checkItemFitFlg; ?>';
	var checkItemFitType = '<?php echo $checkItemFitType; ?>';
	var fitItemErrMss    = "<?php echo $fitItemErrMss; ?>";
	var fitItemWarnMss   = "<?php echo $fitItemWarnMss; ?>";
</script>