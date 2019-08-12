function send_order(e, id)
{
	var btn = jQuery(e);
	if( btn.hasClass('disabled') ) return;

	var check = confirm('You sure want send this oder?');
	if(check == true)
	{
		var send_url = ajaxurl + '?action=p9f_send_oder&order_id='+id;
		jQuery(e).html('Sending...').addClass('disabled');
		jQuery.ajax({
			url: send_url,
		}).done(function( msg ) {
			btn.html('Completed');
		});
	}
}

function send_order_test(e){
	var btn = jQuery(e);
	if( btn.hasClass('disabled') ) return;
	
	var send_url = ajaxurl + '?action=p9f_test_oder';
	jQuery(e).html('Sending...').addClass('disabled');
	jQuery.ajax({
		url: send_url,
	}).done(function( msg ) {
		btn.html('Completed');
	});
}