<?php

	/**
	Sends mail
	This function manage the Mail stuff sent by plugin
	to users
	**/
	
	function userplus_set_content_type( $content_type ) {
		return 'text/html';
	}

	function userplus_mail($id, $template=null, $var1=null, $form=null, $from_user=null) {
		global $userplus;
		$general_setting = get_option('userplus_general_settings');
		$email_template = get_option('userplus_email_settings');
		add_filter( 'wp_mail_content_type', 'userplus_set_content_type' );
		$user = get_userdata($id);
		$builtin = array(
			'{USERPLUS_ADMIN_EMAIL}' => userplus_get_option('from_email_address'),
			'{USERPLUS_BLOGNAME}' =>userplus_get_option('from_email_name'),
			'{USERPLUS_BLOG_URL}' => home_url(),
			'{USERPLUS_BLOG_ADMIN}' => admin_url(),
			'{USERPLUS_LOGIN_URL}' => $userplus->api->permalink(0, 'login'),
			'{USERPLUS_USERNAME}' => $user->user_login,
			'{USERPLUS_FIRST_NAME}' => userplus_profile_details('first_name', $user->ID ),
			'{USERPLUS_LAST_NAME}' => userplus_profile_details('last_name', $user->ID ),
			'{USERPLUS_NAME}' => userplus_profile_details('display_name', $user->ID ),
			'{USERPLUS_EMAIL}' => $user->user_email,
			'{USERPLUS_PROFILE_LINK}' => $userplus->api->permalink( $user->ID ),
			'{USERPLUS_VALIDATE_URL}' => $userplus->api->create_validate_url( $user->ID ),
		    '{USERPLUS_PASSWORD_RESET_LINK}' => $userplus->api->permalink(0, 'login')."?reset=true"
		);
		
		if (isset($var1) && !empty($var1) ){
			$builtin['{VAR1}'] = $var1;
		}
		
		if(isset($from_user) && !empty($from_user)){
			$user_from=get_userdata($from_user);
			$builtin['{USERPLUS_FROM_NAME}'] = $user_from->user_login;
		}
		
		if (isset($form) && $form != ''){
			$profile_fields = $userplus->api->userplus_extract_profile_for_mail( $user->ID, $form );
			$builtin['{USERPLUS_PROFILE_FIELDS}'] = $profile_fields['output'];
			$builtin = array_merge($builtin,$profile_fields['custom_fields']);
		}
		
		$search = array_keys($builtin);
		$replace = array_values($builtin);

		$headers = 'From: '.$builtin["{USERPLUS_BLOGNAME}"].' <'.$builtin["{USERPLUS_ADMIN_EMAIL}"].'>' . "\r\n";

		
		if( $template == 'reset_password' ){
			$subject = $email_template['passwordreset_subject'];
			$subject = str_replace( $search, $replace, $subject );
			$message = nl2br($email_template['passwordreset_content']);
			$message = str_replace( $search, $replace, $message );
		}
		
		/////////////////////////////////////////////////////////
		/* new user's account */
		/////////////////////////////////////////////////////////
		if ($template == 'newaccount' ) {
			if( userplus_get_option('new_user_notification')=='1')
			{			
				$subject = $email_template['welcome_email_subject'];
				$subject = str_replace( $search, $replace, $subject );
				$message = nl2br($email_template['welcome_email_content']);
				$message = str_replace( $search, $replace, $message );

			}
		}
		
		if($template=="passwordchange")
		{
			$subject = $email_template('mail_password_change_s');
			$subject = str_replace( $search, $replace, $subject );
			$message = nl2br($email_template('mail_password_change'));
			$message = str_replace( $search, $replace, $message );

		}
	
		if ($template == 'verifyemail'){
			$subject = $email_template['verify_email_s'];
			$subject = str_replace( $search, $replace, $subject );
			$message = nl2br($email_template['verify_email_c']);
			$message = str_replace( $search, $replace, $message );
		}
			
		if( $template == 'pendingadminapprove' ){
			$subject = $email_template['awaiting_admin_approval_s'];
			$subject = str_replace( $search, $replace, $subject );
			$message = nl2br($email_template['awaiting_admin_approval_c']);
			$message = str_replace( $search, $replace, $message );
			
		}
		
		if( !empty( $subject) && !empty( $message ) ){
			$message = html_entity_decode(nl2br($message));
			wp_mail( $user->user_email, $subject, $message, $headers );
		}
		
}
