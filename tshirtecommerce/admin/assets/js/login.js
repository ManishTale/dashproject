function tshirtecommerce_login() {
	if(ajax_url == '') return;

	jQuery.ajax({
		url: ajax_url,
		type: "POST",
		data: {path: path_admin},
		dataType: 'json',
	}).done(function(data){
		if(typeof data.logged != 'undefined' && data.logged == true && typeof data.reload != 'undefined' && data.reload == 1)
		{
			location.reload();
		}
	});
}