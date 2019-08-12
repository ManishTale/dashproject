<!DOCTYPE html>
<!--[if IE 9]><html class="ie9 no-js" lang="en"><![endif]-->
<!--[if !IE]><!-->
<html lang="en" class="no-js">
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<script type="text/javascript" src="assets/js/jquery.min.js"></script>
		<?php load_header($addons); ?>
		<script type="text/javascript">
			var base_url = '<?php echo site_url(); ?>';
		</script>
</head>
<body style="background: #fff!important;">
	<!-- start: MAIN CONTAINER -->
	<div class="main-container" style="background: #fff!important;">		
		<?php echo $content; ?>
	</div>

	<script type="text/javascript">
		var admin_url_site = '<?php echo site_url(''); ?>';
		jQuery(document).ready(function(){
			Main.init();
			if(typeof window.parent.setHeightF != 'undefined')
			{
				var height = jQuery('body').height();
				window.parent.setHeightF(height);
			}
		});
	</script>
	<script type="text/javascript" src="assets/js/platform.js"></script>
</body>
<!-- end: BODY -->
</html>