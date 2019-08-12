<script type="text/javascript">
	var admin_url_site = '<?php echo site_url(''); ?>';
	jQuery(document).ready(function(){
		Main.init();
		if(typeof window.parent.setHeightF != 'undefined')
		{
			var height = jQuery('body').height();
			window.parent.setHeightF(height);
		}
		jQuery(".preloader").fadeOut();
	});
</script>			
	</body>
</html>