<?php

function userplus_get_option( $option ) {
		$userplus_default_options = userplus_default_options();
		$settings = get_option('userplus');
		switch($option){
		
			default:
				if (isset($settings[$option])){
					return $settings[$option];
				} else {
					if (isset($userplus_default_options[$option])){
					return $userplus_default_options[$option];
					}
				}
				break;
	}
}
	
	/* set a global option */
function userplus_set_option($option, $newvalue){
		$settings = get_option('userplus');
		$settings[$option] = $newvalue;
		update_option('userplus', $settings);
}

function userplus_default_options(){
		$array['slug'] = 'profile';
		$array['slug_register'] = 'register';
		$array['slug_edit'] = 'edit';
		$array['slug_login'] = 'login';
		$array['slug_logout'] = 'logout';
		
		$mail_verifyemail = __('Hi there,') . "\r\n\r\n";
		$mail_verifyemail .= __("Thanks for signing up at {USERPLUS_BLOGNAME}. You must confirm/validate your account before logging in.","userplus") . "\r\n\r\n";
		$mail_verifyemail .= __("Please click on the following link to successfully activate your account:","userplus") . "\r\n";
		$mail_verifyemail .= "{USERPLUS_VALIDATE_URL}" . "\r\n\r\n";
		$mail_verifyemail .= __('If you have any problems, please contact us at {USERPLUS_ADMIN_EMAIL}.','userplus') . "\r\n\r\n";
		$mail_verifyemail .= __('Best Regards!','userplus');
		
		$mail_newaccount = __('Hi there,') . "\r\n\r\n";
		$mail_newaccount .= __("Thanks for registering. Your account is now active.","userplus") . "\r\n\r\n";
		$mail_newaccount .= __("To login please visit the following URL:","userplus") . "\r\n";
		$mail_newaccount .= "{USERPLUS_LOGIN_URL}" . "\r\n\r\n";
		$mail_newaccount .= __('Your account e-mail: {USERPLUS_EMAIL}','userplus') . "\r\n";
		$mail_newaccount .= __('Your account username: {USERPLUS_USERNAME}','userplus') . "\r\n";
		$mail_newaccount .= __('Your account password: {VAR1}','userplus') . "\r\n\r\n";
		$mail_newaccount .= __('If you have any problems, please contact us at {USERPLUS_ADMIN_EMAIL}.','userplus') . "\r\n\r\n";
		$mail_newaccount .= __('Best Regards!','userplus');
		
		$array['welcome_email_subject'] = sprintf(__('Welcome to %s!','userplus'), get_bloginfo('name') );
		$array['welcome_email_content'] = $mail_newaccount;
		
		$array['verify_email_s'] = __('Verify your Account','userplus');
		$array['verify_email_c'] = $mail_verifyemail;

		$array['new_user_approve']=0;
		$array['from_email_address']=get_bloginfo('admin_email');
		$array['from_email_name']=get_bloginfo('admin_name');
	
		

		
		return $array;
}	
