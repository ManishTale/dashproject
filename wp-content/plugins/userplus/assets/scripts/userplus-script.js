jQuery(document).ready(function(){
	userplus_ajax_upload();
	jQuery(document).on('click', '.userplus_secondary_button', function(e){
		window.location = jQuery(this).data('href');
	});
	
	jQuery(document).on('click', '.userplus_profile_edit', function(e){
		jQuery.ajax({
			url: userplus_ajax_url,
			data:'action=userplus_form_change&id='+jQuery('.userplus-profile-container').data('form_id')+'&mode='+jQuery('.userplus-profile-container').data('mode'),
			dataType: 'JSON',
			type: 'POST',
			success:function(res){
				if( res.html ){
					
					if(jQuery('.userplus-profile-container').data('mode') == 'view'){
						jQuery('.userplus-profile-container').parent().html(res.html);
						jQuery('.userplus-profile-container').data('mode','profile');
						jQuery('.userplus-profile-container .userplus_profile_edit').html('view');
					}else{
						
						jQuery('.userplus-profile-container').parent().html(res.html);
						jQuery('.userplus-profile-container').data('mode','view');
					}
					userplus_ajax_upload();
				}
			}
		})
	});
	jQuery(document).on('submit', '.plugin_slug form', function(e){
		var form = jQuery(this);
		form.find('input,textarea').each(function(){
			jQuery(this).trigger('blur');
		});
			
		form.find('select').each(function(){
			jQuery(this).trigger('change');
		});
		
		form.find('select[data-is_required=1],textarea[data-is_required=1]').each(function(){
			if ( !jQuery(this).val() ) {
				userplus_client_error_irregular( jQuery(this), jQuery(this).parents('.userplus-element'), 'This field is required' );
			} else {
				userplus_client_valid( jQuery(this).find("select"), jQuery(this).parents('.userplus-element') );
			}
		});
		
		form.find('.userplus-radio-container[data-is_required=1]').each(function(){
				if ( !jQuery(this).find("input:radio").is(":checked") ) {
					userplus_client_error_irregular( '', jQuery(this).parents('.userplus-element'), 'This field is required' );
				} else {
					userplus_client_valid( jQuery(this).find("input:radio"), jQuery(this).parents('.plugin_name-element') );
				}
		});
		
		form.find('.userplus-checkbox-container[data-is_required=1]').each(function(){
				if ( !jQuery(this).find("input:checkbox").is(":checked") ) {
					userplus_client_error_irregular( '', jQuery(this).parents('.userplus-element'), 'This field is required' );
				} else {
					userplus_client_valid( jQuery(this).find("input:checkbox"), jQuery(this).parents('.userplus-element') );
				}
		});
		if (form.find('.userplus-warning-message').length > 0 || form.find('.warning').length > 0){
			form.find('.userplus-field').each(function(){
					//jQuery(this).find('.userplus-warning-message').remove();
					if (jQuery(this).nextUntil('div.userplus-field').find('.userplus-warning-message').length > 0) {
						jQuery(this).css({'display': 'block'});
						jQuery(this).append('<ins class="userplus-warning-message">Please correct fields</ins>');
						jQuery(this).find('.userplus-warning-message').fadeIn();
					}
		});
			form.find('.userplus-warning-message').parents('.userplus-element').find('input').focus();
				return false;
		}
		else {
				form.find('.userplus-field').each(function(){
					jQuery(this).find('.userplus-warning-message').remove();
				});
			}
		jQuery('#userplus-loader').css({'display':'inline-block'});
		jQuery.ajax({
			url: userplus_ajax_url,
			data:form.serialize()+'&action=userplus_form_actions&id='+jQuery('.plugin_slug').data('mode'),
			dataType: 'JSON',
			type: 'POST',
			success:function(data){
				
				if (data && data.error){
					var i = 0;
					
					jQuery.each( data.error, function(key, value) {
						element = form.find('.userplus-field[data-key="'+key+'"]').find('input');
						console.log(element.parents('.userplus-element'));
						userplus_client_error( element, element.parents('.userplus-element'), value );
						
					})	
				}
				else{
					if( data.msg ){
						jQuery('#userplus-ajax-msg').html(data.msg);
						jQuery('#userplus-ajax-msg').css({'display':'inline-block'});
					}
				}	
				jQuery('#userplus-loader').hide();
				if(  data.redirect ){
					if( data.redirect == 'refresh' ){
						window.location = data.redirect = '';
					}else{
						window.location = data.redirect;
					}
				}
				if(data.html){
					jQuery('.plugin_slug').parent().html(data.html);
				}
			}
		});
	});
	
	jQuery(document).on('blur', '.plugin_slug input', function(e){
	var element = jQuery(this);
	var parent = element.parents('.userplus-element');
	var required = element.data('is_required');
	var original_elem = element.parents('.plugin_slug').find('input[type=password]:first');
	var original = element.parents('.plugin_slug').find('input[type=password]:first').val();
	
	if (required == 1 ) {
		if ( element.val().replace(/^\s+|\s+$/g, "").length == 0) {
				userplus_client_error( element, parent, 'This field is required' );
			} else {
				userplus_client_valid(element, parent);
			}
			
			if ( jQuery(this).attr('type') == 'password') { // only if field is password
				if ( element.val().replace(/^\s+|\s+$/g, "").length == 0) {
					userplus_client_error_irregular( element, parent, 'This field is required' );
				} 
				else if ( original != element.val() ) {
				userplus_client_error( element, parent, 'Password does not match' );
			}
				 else {
					userplus_client_valid(element, parent);
				}
			}
	}
});

});


function userplus_client_error_irregular( element, parent, error) {
	if ( element != '' && element.data('custom-error')) {
		error = element.data('custom-error');
	}
	
	if (parent.find('.userplus-warning-message').length == 0) {
		parent.append( '<div class="userplus-warning-message"><i class="userplus-icon-caret-up"></i>' + error + '</div>' );
		parent.find('.userplus-warning-message').css({'top' : '0px', 'opacity' : '1'});
	}
	

}

function userplus_client_error( element, parent, error) {
	if (element.data('custom-error')) {
		error = element.data('custom-error');
	}
	
	if ( element.attr('type') ) {
	
		if (element.attr('type') == 'hidden') {
			
			parent.find('.icon-ok').remove();
			if (parent.find('.userplus-warning-message').length==0) {
				element.addClass('warning').removeClass('ok');
				parent.append('<div class="userplus-warning-message"><i class="userplus-icon-caret-up"></i>' + error + '</div>');
				parent.find('.userplus-warning-message').css({'top' : '0px', 'opacity' : '1'});
			} else {
				parent.find('.userplus-warning-message').html('<i class="userplus-icon-caret-up"></i>' + error );
				parent.find('.userplus-warning-message').css({'top' : '0px', 'opacity' : '1'});
			}
			
		} else {
		
			parent.find('.icon-ok').remove();
			if (parent.find('.userplus-warning-message').length==0) {
				element.addClass('warning').removeClass('ok');
				element.after('<div class="userplus-warning-message"><i class="userplus-icon-caret-up"></i>' + error + '</div>');
				parent.find('.userplus-warning-message').css({'top' : '0px', 'opacity' : '1'});
			} else {
				parent.find('.userplus-warning-message').html('<i class="userplus-icon-caret-up"></i>' + error );
				parent.find('.userplus-warning-message').css({'top' : '0px', 'opacity' : '1'});
			}
		
		}

	} else {
	
		// select
		if (parent.find('.userplus-warning-message').length == 0) {
		parent.find('.chosen-container').after( '<div class="userplus-warning-message"><i class="userplus-icon-caret-up"></i>' + error + '</div>' );
		parent.find('.userplus-warning-message').css({'top' : '0px', 'opacity' : '1'});
		} else {
		parent.find('.userplus-warning-message').html('<i class="userplus-icon-caret-up"></i>' + error );
		parent.find('.userplus-warning-message').css({'top' : '0px', 'opacity' : '1'});
		}
		
	}
}
function userplus_clear_input( element ) {
	element.parents('.userplus-input').find('.userplus-warning').remove();
	element.removeClass('warning');
}
function userplus_client_valid( element, parent) {
	
	if ( element.attr('type') ) {
	
		if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
		
			parent.find('.userplus-warning-message').remove();
			element.removeClass('warning').addClass('ok');
			
		} else {
		
			parent.find('.userplus-warning-message').remove();
			element.removeClass('warning').addClass('ok');
			if (parent.find('.icon-ok').length==0){
				if (element.val() != '') {
				parent.append('<div class="icon-ok"><i class="userplus-icon-ok"></i></div>');
				} else {
				parent.find('.icon-ok').remove();
				}
			}
	
		}
		
	} else {
		
		parent.find('.userplus-warning-message').remove();
		
	}
}

jQuery(document).on('submit', '.plugin_slug form', function(e){
		e.preventDefault();
		return false;
});

function userplus_ajax_upload(){
	jQuery(".userplus-image-upload").each(function(){
	var allowed = jQuery(this).data('allowed_extensions');
	var filetype = jQuery(this).data('filetype');
	var form = jQuery(this).parents('.plugin_slug').find('form');
	jQuery(this).uploadFile({
			url: userplus_ajax_url+'?action=userplus_ajax_upload',
			allowedTypes: allowed,
			onSubmit:function(files){
				var statusbar = jQuery('.ajax-file-upload-statusbar:visible');
				statusbar.parents('.userplus-element').find('.remove_image').hide();
			},
			onSuccess:function(files,data,xhr){
			var statusbar = jQuery('.ajax-file-upload-statusbar:visible');
			data = jQuery.parseJSON(data);
			if(data.status==2){
				alert('File size exceeds allowed file size limit.');
				statusbar.hide();
				return;
			}
			if(data.status==0)
			{
				alert('Invalid file type.');
				statusbar.hide();
				return;
			}
			var src = data.target_file_uri;
			statusbar.parents('.userplus-element').find('img').attr('src', src );
			statusbar.parents('.userplus-element').find('input[type=hidden]').val( src );
			statusbar.parents('.userplus-element').find('.remove_image').show();
			statusbar.remove();
			}
		});
	});
}
