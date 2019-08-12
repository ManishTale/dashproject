jQuery(document).ready(function(){

	jQuery('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
		localStorage.setItem('activeTab', jQuery(e.target).attr('href'));
	});
	var activeTab = localStorage.getItem('activeTab');
	
	if(activeTab){
		jQuery('#myTab a[href="' + activeTab + '"]').tab('show');
	}
	
	jQuery('.userplus_accept_user input').click(function(){
		userplus_accept_user(this);
	});
});

function userplus_accept_user(elm){
	jQuery.ajax({
		url:userplus_ajax_url,
		type:'POST',
		data:{action:'userplus_admin_accept_user', user_id:jQuery(elm).data('id')},
		success: function(data){
			jQuery(elm).parents('.userplus_pending_pic').remove();
		}
	});	
}
