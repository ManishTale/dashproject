<?php
	$settings        = $GLOBALS['settings'];
	$product         = $GLOBALS['product'];
	$txtDefaultVal   = setValue($settings, 'txtDefaultVal', 'Hello');
	$text_color      = setValue($settings, 'text_color', '#FF0000');
	$txtDefaultValP  = setValue($product, 'textdefault_attribute', 'Hello');
	$text_colorP     = setValue($product, 'colordefault_attribute', '#FF0000');
	$txtAsSettingFlg = setValue($product, 'productTxtAsSettingFlg', '1');
?>
<script type="text/javascript">
	var txtDefaultValS  = '<?php echo $txtDefaultVal; ?>';
	var text_colorS     = '<?php echo $text_color; ?>';
	var txtDefaultValP  = '<?php echo $txtDefaultValP; ?>';
	var text_colorP     = '<?php echo $text_colorP; ?>';
	var txtAsSettingFlg = '<?php echo $txtAsSettingFlg; ?>';
	if(txtAsSettingFlg == '1')
	{
		var txtDefaultVal = txtDefaultValS;
		var text_color    = text_colorS;
	}
	else
	{
		var txtDefaultVal = txtDefaultValP;
		var text_color    = text_colorP;
	}
</script>