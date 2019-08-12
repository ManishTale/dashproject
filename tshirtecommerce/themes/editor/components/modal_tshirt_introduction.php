<?php
	$settings = $GLOBALS['settings'];
	$addons   = $GLOBALS['addons'];
	$introAutoTimeVal   = setValue($settings, 'introAutoTimeVal', '10');
	$enableIntroDeskFlg = setValue($settings, 'enableIntroDeskFlg', '0');
?>
<script>
	var introAutoTimeVal = '<?php echo $introAutoTimeVal;?>';
	var enableIntroFlg   = '0';
	if(introAutoTimeVal == '' || introAutoTimeVal == 'undefined')
	{
		introAutoTimeVal = 10;
	}
	introAutoTimeVal = introAutoTimeVal * 1000;
</script>