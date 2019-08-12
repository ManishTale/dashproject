<?php

function userplus_profile_details( $field, $user_id ) {
		global $userplus;
		$user = get_userdata( $user_id );
		$output = '';
		if ($user != false) {
			switch($field){
				default:
					$output = get_user_meta( $user_id, $field, true );
					if(!is_array($output) && strpos(str_replace(' ','',$output),'">')===0)
					{
						$output = substr_replace(trim($output), "", 0,2);	
					}
					break;
				case 'id':
					$output = $user_id;
					break;
				case 'display_name':
					$output = $user->display_name;
					
					break;
				case 'user_url':
					$output = $user->user_url;
					break;
				case 'user_email':
					$output = $user->user_email;
					break;
				case 'user_login':
					$output = $user->user_login;
					break;
				case 'role':
					$user_roles = $user->roles;
					$user_role = array_shift($user_roles);
					$output = $user_role;
					break;
			}
		}
		return $output;
	}
	
function userplus_update_user_profile( $user_id, $form_data, $action='new_user' ){
	
	foreach( $form_data as $key=>$form_value ){
	
		if ( isset($key) && in_array($key, array('user_url', 'display_name', 'role', 'user_login', 'user_pass', 'user_email')) ) {
			wp_update_user( array ( 'ID' => $user_id, $key => $form_value ) ) ;
		}
		else{
			update_user_meta( $user_id, $key, $form_value );
		}
	}
}	

function userplus_auto_login( $username, $remember=true ){
	ob_start();
		if ( !is_user_logged_in() ) {
			$user = get_user_by('login', $username );
			$user_id = $user->ID;
			wp_set_current_user( $user_id, $username );
			wp_set_auth_cookie( $user_id, $remember );
			do_action( 'wp_login', $username,$user );
		} else {
			wp_logout();
			$user = get_user_by('login', $username );
			$user_id = $user->ID;
			wp_set_current_user( $user_id, $username );
			wp_set_auth_cookie( $user_id, $remember );
			do_action( 'wp_login', $username,$user );
		}
		ob_end_clean();
}

function userplus_get_edit_user(){
	if (is_user_logged_in()) {
			if ( get_query_var('up_username') ) {
				$user = get_user_by( 'login',get_query_var('up_username') );
				if ($user->ID && current_user_can('manage_options') || $user->ID == get_current_user_id() ) {
					$user_id = $user->ID;
				} 
				elseif ( !$user->ID && current_user_can('manage_options') ) {
					$user_id = 'not_found';
				} elseif ( $user->ID && !current_user_can('manage_options') ) {
					$user_id = 'not_authorized';
				}
			} else {
				global $current_user;
				$current_user=wp_get_current_user();
				$user_id = $current_user->ID;
			}
			return $user_id;
		}
}

function userplus_get_view_user(){
	global $current_user;
	$current_user=wp_get_current_user();
	$user_id = $current_user->ID;
	return $user_id;
}
