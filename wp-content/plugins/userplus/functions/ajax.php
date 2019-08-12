<?php
if ( ! defined( 'WPINC' ) ) {
	die;
}

if( !class_exists( 'USERPLUSAjax' ) ){

	class USERPLUSAjax{
		function __construct(){
			add_action( 'wp_ajax_userplus_form_actions', array( $this, 'form_actions' ) );
			add_action( 'wp_ajax_nopriv_userplus_form_actions', array( $this, 'form_actions' ) );
			
			add_action( 'wp_ajax_userplus_form_change', array( $this, 'form_change' ) );
			add_action( 'wp_ajax_nopriv_userplus_form_change', array( $this, 'form_change' ) );
			
			add_action( 'wp_ajax_userplus_ajax_upload', array( $this, 'ajax_upload' ) );
			add_action( 'wp_ajax_nopriv_userplus_ajax_upload', array( $this, 'ajax_upload' ) );
		}
		
		function form_change(){
			$form_id = $_POST['id'];
			if( isset( $_POST['mode']) && $_POST['mode'] == 'profile' ){
				$output['html'] = do_shortcode('[userplus id='.$form_id.']');
			}else{
				$output['html'] = do_shortcode('[userplus id='.$form_id.' mode="profile"]');
			}
			echo json_encode($output);
			die();
		}
		
		function form_actions(){
			global $userplus;
			$action = $_POST['id'];
			$output = '';
			switch( $action ){
			
				case 'register':
					$flag = 0;
					$output['error'] = '';
					if( isset( $_POST['user_login'] ) ){
						$user_exists = username_exists( $_POST['user_login'] );
						$user_login = $_POST['user_login'];
					}else{
						$user_exists = '';
						$user_login = $_POST['user_email'];
					}
					if( empty( $user_exists ) && isset( $_POST['user_email'] ) && email_exists( $_POST['user_email'] ) == false ){
						if (!isset($_POST['user_pass'])) 
							$user_pass = wp_generate_password( $length=12, $include_standard_special_chars=false );
						else
							$user_pass = $_POST['user_pass'];
					}
					
					if( !isset( $_POST['user_email'] ) ){
						$_POST['user_email'] = $user_login.'@fakemail.com';
					}
					
					if( username_exists( $_POST['user_login'] ) ){
						$flag = 1;
						$output['error']['user_login'] = __('The username is already taken');
					}
					if( username_exists( $_POST['user_email'] ) ){
						$flag = 1;
						$output['error']['user_email'] = __('The email address already exists');
					}
					if( !$flag ){
					$user_id = $userplus->api->create_new_user( $user_login, $user_pass, $_POST['user_email'], $_POST );

					if( userplus_get_option('new_user_approve') == 0 ){
						if( $_POST['userplus-form-autologin'] && isset( $user_login ) ){
							userplus_auto_login( $user_login, true );
						}
						userplus_mail( $user_id, 'newaccount', null, $_POST );
					if( $user_id ){
						if(isset($_POST['register_redirect']) && !empty($_POST['register_redirect'])){
							$output['redirect'] = $_POST['register_redirect'];
						}else{
							$output['redirect'] = $userplus->api->permalink( 0, 'profile' );
						}
					}
					else{
						if(isset($_POST['register_redirect'])){
							$output['redirect'] = $_POST['register_redirect'];
						}else{
							$output['redirect'] = $userplus->api->permalink( 0, 'login' );
						}
					 }
					}else if( userplus_get_option('new_user_approve') == 1 ){
						$userplus->api->admin_approve($user_id, $user_pass, $_POST);
						$output['html'] = do_shortcode('[userplus id='.get_option('userplus_default_login').' msg_type=admin_approve]');
					}else if( userplus_get_option('new_user_approve') == 2 ){
						$userplus->api->email_approve($user_id, $user_pass, $_POST);
						$output['html'] = do_shortcode('[userplus id='.get_option('userplus_default_login').' msg_type=email_approve]');
					}
					}
					break;
				
				case 'login':
					$username_or_email = $_POST['username'];
					$credentials = array();
					$credentials['user_login'] = $username_or_email;
					$credentials['user_password'] = $_POST['user_pass'];
					$user = wp_signon( $credentials, false );
					if ( is_wp_error($user) ) {

					if ( $user->get_error_code() == 'invalid_email' || $user->get_error_code() == 'invalid_username') {
					$output['error']['username'] = __('Invalid email or username entered',USERPLUS_PLUGIN_SLUG);
					} elseif ( $user->get_error_code() == 'incorrect_password') {
					$output['error']['user_pass'] = __('The password you entered is incorrect',USERPLUS_PLUGIN_SLUG);
					}
					}else if( get_user_meta($user->ID,'userplus_account_status',true) == 'pending'){
						$output['error']['username'] = __('Please verify your account',USERPLUS_PLUGIN_SLUG);
						wp_logout();
					}else if( get_user_meta($user->ID,'userplus_account_status',true)=='pending_admin'){
						$output['error']['username'] = __('Your account is awaiting admin approval',USERPLUS_PLUGIN_SLUG);
						wp_logout();
					}
					else{
						userplus_auto_login( $user->user_login );
						if(isset($_POST['login_redirect']) && !empty($_POST['login_redirect'])){
							$output['redirect'] = $_POST['login_redirect'];
						}else{
							$output['redirect'] = $userplus->api->permalink( 0, 'profile' );
						}
					}
					break;
					
				case 'profile':
					$user_id = userplus_get_edit_user();
					if ($user_id != get_current_user_id() ){	
						die();
					}
					userplus_update_user_profile( $user_id, $_POST, $action='ajax_save' );
					$output['msg'] = __( 'Profile updated successfully', USERPLUS_PLUGIN_SLUG );
					$output['redirect'] = 'refresh';
					break;	
				case 'forgot':
					$email = $_POST['user_email'];
					if( email_exists( $email ) ){
						$user = get_user_by('email', $email);
						$uniquekey =  wp_generate_password(20, $include_standard_special_chars=false);
						update_user_meta( $user->ID, 'userplus_secret_key', $uniquekey);
						userplus_mail( $user->ID, 'reset_password', $uniquekey );
						
						$output['msg'] = __( 'Reset password intruction has been sent to your email address', USERPLUS_PLUGIN_SLUG );
					}
					else{
						$output['error']['user_email'] = __('Invalid email entered',USERPLUS_PLUGIN_SLUG);
					}
					break;	
				case 'reset':
					$users = get_users(array(
						'meta_key'     => 'userplus_secret_key',
						'meta_value'   => $_POST['secretkey'],
						'meta_compare' => '=',
					));
					if (!$users[0]) {
						$output['error']['secretkey'] = __('The secret key is invalid or expired.',USERPLUS_PLUGIN_SLUG);
					}
					else{
						$user_id = $users[0]->ID;
					 	wp_update_user( array( 'ID' => $user_id, 'user_pass' => $_POST['user_pass'] ) );
						//userplus_mail($user_id, 'passwordchange',$_POST['user_pass']);
						$output['msg'] = __('Password changed successfully', USERPLUS_PLUGIN_SLUG);
					}	
					break;
							
			}
			echo json_encode( $output );
			die();
		}
		
		function ajax_upload(){
			global $userplus;
			if( isset($_FILES["userplus_uploaded_file"]) ) {
				if (empty($_FILES["userplus_uploaded_file"]["name"])){
					die();
			} else {
				if ($_FILES["userplus_uploaded_file"]["error"] > 0){
					die();
			} else {
				if(!is_uploaded_file($_FILES["userplus_uploaded_file"]["tmp_name"])){
					die();
				} elseif(0){
					$ret['status'] = 2;
					echo json_encode($ret);
					die();
				} else {
                	$ret = array();
					if(class_exists('finfo'))
					{	
						$finfo = new finfo();
						$fileinfo = $finfo->file($_FILES["userplus_uploaded_file"]["tmp_name"], FILEINFO_MIME_TYPE);
					}
					else
					{
						$fileinfo = $_FILES['userplus_uploaded_file']['type'];
					}
					$accepted_file_mime_types = array('image/gif','image/jpg','image/jpeg','image/png');
                	$file_extension = strtolower(strrchr($_FILES["userplus_uploaded_file"]["name"], "."));
					if( !in_array($file_extension, array( '.gif','.jpg','.jpeg','.png' )  ) || !in_array( $fileinfo,$accepted_file_mime_types ) ){
                		$ret['status'] = 0;
                		echo json_encode($ret);
						die();
                	}else{
						if(!is_array($_FILES["userplus_uploaded_file"]["name"])) {
							$wp_filetype = wp_check_filetype_and_ext($_FILES["userplus_uploaded_file"]["tmp_name"], $_FILES["userplus_uploaded_file"]["name"]);
						
							$ext = empty( $wp_filetype['ext'] ) ? '' : $wp_filetype['ext'];
							$type = empty( $wp_filetype['type'] ) ? '' : $wp_filetype['type'];
							$proper_filename = empty( $wp_filetype['proper_filename'] ) ? '' : $wp_filetype['proper_filename'];
						
							if ( $proper_filename ) {
								$file['name'] = $proper_filename;
							}
						
							if (! $type || !$ext ) die();
						
							if ( ! $type ) {
								$type = $file['type'];
							}
						
							$unique_id = uniqid();
							$ret = array();
							$target_file = $userplus->api->get_upload_dir() ."/". $unique_id . $file_extension;
							move_uploaded_file( $_FILES["userplus_uploaded_file"]["tmp_name"], $target_file );
							$ret['target_file'] = $target_file;
							$ret['target_file_uri'] = $userplus->api->get_upload_url() ."/". basename($target_file);
							$ret['status'] = 1;
							echo json_encode($ret);
							die();
							}
						}
					}
				}
			}
		}
	}
 }
	
	new USERPLUSAjax();
}

