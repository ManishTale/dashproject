design.platform = 'wordpress';
jQuery(document).on('ini.design', function(event) {
	jQuery.ajax({
		url: siteURL+'platform.php',
		dataType: 'text',
		type: 'get',
		success: function(res) {
			design.platform =res;
		}
	});
});