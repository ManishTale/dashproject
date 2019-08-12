jQuery(document).ready(function(){
	jQuery(document).on('click', '.userplus-admin-delete-field', function(e){
		e.preventDefault();
		jQuery(this).parents('.userplus-admin-drag-drop-field').remove();
	})
	
	jQuery(document).on('click', 'a[data-popup^="userplus_"]', function(e){
		
		e.preventDefault();
		if( jQuery(this).data('content') ){
			userplus_add_new_admin_popup();
			userplus_admin_ajax_function(jQuery(this).data('content'),jQuery(this).data('arg1'), jQuery(this).data('arg2'), jQuery(this).data('arg3'));
		}
		return false;
	});
	
	jQuery(document).on('click','a[data-action^="userplus_admin_popup"]', function(e){
		
		e.preventDefault();
		var elm = jQuery(this);
		if( jQuery(this).data('action') == 'userplus_admin_popup_edit_field' ){
			userplus_add_new_admin_popup();
		}
		userplus_add_admin_field( elm.data('action'), elm.data('arg1'), elm.data('arg2'), elm.data('arg3'));
		return false;
	});
	
	jQuery(document).on('click','.userplus-admin-close',function(){
		userplus_close_admin_popup();
	});
	
	jQuery(".userplus-form-builder-wrapper").sortable();
	
	jQuery(document).on('click','.userplus-form-type input[type=radio]',function(){
		if(jQuery(this).val()=='register'){
			
			jQuery('#userplus-admin-form-role').show();
			jQuery('#userplus-admin-form-autologin').show();
		}else{
			jQuery('#userplus-admin-form-role').hide();
			jQuery('#userplus-admin-form-autologin').hide();
		}
	});
	
});


function userplus_add_new_admin_popup(){
	
	var url = data.url;
	jQuery('body').append('<div id="userplus_admin_modal" class="userplus-admin-modal-popup"></div>');
	jQuery('#userplus_admin_modal').append('<div class="userplus-admin-modal-content"><div class="userplus-admin-modal-popup-header"><div class="titletxt">Fields Setup<div class="userplus-admin-close">x</div></div></div><div id="userplus-popup_content"></div><div class="userplus-admin-popup-footer"></div></div>');
	jQuery('#userplus-popup_content').html("<div class='userplus-loader-img'><img src='"+url+"assets/images/loader.gif'></div>");
}

function userplus_close_admin_popup(){
	jQuery('#userplus_admin_modal').remove();
	jQuery('#userplus-admin-modal-content').remove();
}

function userplus_admin_ajax_function(act_id , arg1, arg2, arg3){
	
	jQuery.ajax({
		url:userplus_ajax_url,
		type:'POST',
		data:{action:'userplus_get_popup_contents', act_id:act_id, arg1:arg1, arg2:arg2, arg3:arg3},
		success: function(data){
			jQuery('#userplus-popup_content').html(data);
		}
	});
}

function userplus_add_admin_field(act_id , arg1, arg2, arg3){
	jQuery.ajax({
		url:userplus_ajax_url,
		type:'POST',
		data:{action:'userplus_admin_add_field', act_id:act_id, arg1:arg1, arg2:arg2, arg3:arg3},
		success: function(data){ 
			if( act_id == 'userplus_admin_popup_add_builtin_field' || act_id == 'userplus_admin_popup_add_custom_field' ){
				
				jQuery('.userplus-admin-add-field').before(data);
				userplus_close_admin_popup();
				
			}
			
			else if( act_id == 'userplus_admin_popup_create_field' ){
				jQuery('#userplus-popup_content').html(data);
				jQuery('#userplus_admin_add_custom_field').on('click',function(){
				  userplus_admin_add_custom_field( this )
				});
			}
			
			else if( act_id == 'userplus_admin_popup_edit_field' ){
				jQuery('#userplus-popup_content').html(data);
				jQuery('#userplus_admin_update_field').on('click',function(){
				  userplus_admin_update_field( this )
				});
			}
		}
	});
}

function userplus_admin_update_field( elm ){
	var form = jQuery(elm).closest("form");
	var arg2 = jQuery(elm).data("arg2");
	jQuery.ajax({
		url:userplus_ajax_url,
		type:'POST',
		data:form.serialize()+"&action=userplus_admin_update_field&arg2="+arg2,
		success: function(data){
			userplus_close_admin_popup();
		}
	});
}

function userplus_admin_add_custom_field( elm  ){
	var form = jQuery(elm).closest("form");
	var arg2 = jQuery(elm).data("arg2");
	jQuery.ajax({
		url:userplus_ajax_url,
		type:'POST',
		data:form.serialize()+"&action=userplus_admin_add_custom_field&arg2="+arg2,
		success: function(data){
			
			jQuery('.userplus-admin-add-field').before(data);
			userplus_close_admin_popup();
		}
	});
}
