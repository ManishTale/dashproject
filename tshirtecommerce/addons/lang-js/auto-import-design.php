<?php
	$settings         = $GLOBALS['settings'];
	$enableAutoImport = setValue($settings, 'enableAutoImport', '0');
?>
<script type="text/javascript">
	var enableAutoImport  = '<?php echo $enableAutoImport; ?>';
</script>