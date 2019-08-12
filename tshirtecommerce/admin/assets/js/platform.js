design.platform = 'wordpress';
jQuery(document).ready(function() {
	jQuery.ajax({
		url: base_url+'platform.php',
		dataType: 'text',
		type: 'get',
		success: function(res) {
			design.platform =res;
			console.log(design.platform);
		}
	});
});