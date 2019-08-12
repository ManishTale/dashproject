<?php
class USERPLUSApi{
		var $filter;
		function __construct(){
			add_action('wp_head',array($this,'userplus_ajax_urls'));
			add_action('admin_head',array($this,'userplus_ajax_urls'));
			add_action('init',  array($this, 'process_email_approve'), 9);
			$this->filter = 0;
		}
		
		function userplus_ajax_urls(){
				?>
					<script type="text/javascript">
			
					var userplus_ajax_url = '<?php echo admin_url('admin-ajax.php'); ?>';
			
					</script>
			
				<?php
		}
		
		function get_builtin_fields( $field = NULL ){
			$builtin_field_arr = array(
					'user_login'=>array('type'=>'text','title'=>'Username', 'label'=>'Username', 'meta_key'=>'user_login', 'placeholder'=>'username',
									'help_text'=>'', 'privacy'=>1, 'default_value'=>'','validate'=>'', 'is_required'=>1, 'user_edit'=>0,'icon'=>'fa-user','min_length'=>3,'max_length'=>30),
		'display_name'=>array('type'=>'text','title'=>'Display Name', 'label'=>'Profile Display Name', 'meta_key'=>'display_name', 'placeholder'=>'display_name',
									'help_text'=>'', 'privacy'=>1, 'default_value'=>'','validate'=>'', 'is_required'=>1, 'user_edit'=>0,'icon'=>'','min_length'=>3,'max_length'=>30),
					'user_email'=>array('type'=>'text','title'=>'Email', 'label'=>'Email', 'meta_key'=>'user_email', 'placeholder'=>'Email',
									'help_text'=>'', 'privacy'=>1, 'default_value'=>'','validate'=>'', 'is_required'=>1, 'user_edit'=>0,'icon'=>'fa-envelope','min_length'=>3,'max_length'=>30),
					'username_or_email'=>array('type'=>'text','title'=>'Username or E-mail', 'label'=>'Username or E-mail', 'meta_key'=>'username', 'placeholder'=>'Username or E-mail','help_text'=>'', 'privacy'=>1, 'default_value'=>'','validate'=>'', 'is_required'=>1, 'user_edit'=>0,'icon'=>'', 'min_length'=>'','max_length'=>''),
					'password'=>array('type'=>'password','title'=>'Password','label'=>'Password','meta_key'=>'user_pass','placeholder'=>'Enter password', 'help_text'=>'','privacy'=>1,'min_length'=>8,'max_length'=>30,'add_confirm_password_field'=>1,'is_required'=>1, 'user_edit'=>0,'icon'=>'fa-lock'),
					'profile_pic'=>array('type'=>'image_upload','title'=>'Profile Picture', 'label'=>'Profile Picture', 'meta_key'=>'profile_pic', 'privacy'=>1, 'help_text'=>'', 'allowed_types'=>array('png','jpeg','jpg'), 'upload_button_text'=>'Upload', 'is_required'=>0, 'user_edit'=>0,'icon'=>'fa-picture-o'),
					'profile_background_pic'=>array('type'=>'image_upload','title'=>'Profile Background Image', 'label'=>'Profile Background Image', 'meta_key'=>'profile_background_pic', 'privacy'=>1, 'help_text'=>'', 'allowed_types'=>array('png','jpeg','jpg'), 'upload_button_text'=>'Upload', 'is_required'=>0, 'user_edit'=>0,'icon'=>'fa-picture-o'),
					'first_name'=>array('type'=>'text','title'=>'First Name', 'label'=>'First Name', 'meta_key'=>'first_name', 'placeholder'=>'Enter first name', 'help_text'=>'', 'privacy'=>1, 'default_value'=>'', 'validate'=>'', 'is_required'=>0, 'user_edit'=>0,'icon'=>'', 'min_length'=>'','max_length'=>''),
					'last_name'=>array('type'=>'text','title'=>'Last Name', 'label'=>'Last Name', 'meta_key'=>'last_name', 'placeholder'=>'Enter last name', 'help_text'=>'', 'privacy'=>1, 'default_value'=>'', 'validate'=>'', 'is_required'=>0, 'user_edit'=>0,'icon'=>'', 'min_length'=>'','max_length'=>''),
					'nickname'=>array('type'=>'text','title'=>'Nickname', 'label'=>'Nickname', 'meta_key'=>'nickname', 'placeholder'=>'Enter nickname', 'help_text'=>'', 'privacy'=>1, 'default_value'=>'', 'validate'=>'', 'is_required'=>0, 'user_edit'=>0,'icon'=>'', 'min_length'=>'','max_length'=>''),
					'description'=>array('type'=>'textarea','title'=>'Biography','meta_key'=>'description','placeholder'=>'Tell us about yourself','help_text'=>'','privacy'=>1,'textarea_height'=>'100px','default_text'=>'','max_length'=>'', 'max_allowed_words'=>'', 'accept_html'=>1, 'is_required'=>0, 'user_edit'=>0,'icon'=>'fa-pencil'),
					'gender'=>array('type'=>'radio','title'=>'Gender','label'=>'Gender','meta_key'=>'gender','privacy'=>1,'help_text'=>'','default_value'=>'', 'edit_choices'=>"Male\r\nFemale",'is_required'=>0, 'user_edit'=>0,'icon'=>'fa-genderless'),
					'country'=>array('type'=>'select','title'=>'Country','label'=>'Country','meta_key'=>'country','placeholder'=>'choose a country','help_text'=>'', 'privacy'=>1,'default_value'=>'Select a Country','edit_choices'=>$this->get_countries(),'is_required'=>0, 'user_edit'=>0,'icon'=>'fa-flag'),
					'facebook'=>array('type'=>'text','title'=>'Facebook','label'=>'Facebook','meta_key'=>'facebook','placeholder'=>'Enter Facebook Url', 'help_text'=>'', 'link_target'=>1,'default_value'=>'','privacy'=>1,'is_required'=>0, 'user_edit'=>0,'icon'=>' fa-facebook'),
						
			);
				
			if( isset($field ) ){
				return $builtin_field_arr[$field];
			}
			return $builtin_field_arr;
		}
		
		function get_field_types( $field = NULL ){
			$field_type_arr = array(
					'text'=>array( 'type'=>'text','title'=>'', 'label'=>'', 'meta_key'=>'', 'placeholder'=>'', 'help_text'=>'', 'privacy'=>1,
									'default_value'=>'', 'validate'=>array('unique_username'=>'Unique Username'), 'is_required'=>1, 'user_edit'=>0,'icon'=>'','min_length'=>3,'max_length'=>30,'icon'=>'fa-font'
									),
					'textarea'=>array( 'type'=>'textarea','title'=>'', 'label'=>'', 'meta_key'=>'', 'placeholder'=>'', 'help_text'=>'', 'privacy'=>1,
										'textarea_height'=>'100px', 'default_text'=>'', 'max_length'=>'', 'max_allowed_words'=>'', 'accept_html'=>1,'is_required'=>1, 'user_edit'=>0,'icon'=>'fa-font'	
								),
					'select'=>array('type'=>'select','title'=>'','label'=>'','meta_key'=>'','placeholder'=>'','help_text'=>'', 'privacy'=>1,'default_value'=>'Select','edit_choices'=>"",'is_required'=>0, 'user_edit'=>0,'icon'=>'fa-globe'),
					'radio'=>array('type'=>'radio','title'=>'','label'=>'','meta_key'=>'','privacy'=>1,'help_text'=>'','default_value'=>'', 'edit_choices'=>'','is_required'=>0, 'user_edit'=>0,'icon'=>'fa-genderless'),	
					'checkbox'=>array('type'=>'checkbox','title'=>'','label'=>'','meta_key'=>'','privacy'=>1,'help_text'=>'','default_value'=>'', 'edit_choices'=>'','is_required'=>0, 'user_edit'=>0,'icon'=>'fa-genderless'),						
					'profile_pic'=>array('type'=>'image_upload','title'=>'', 'label'=>'', 'meta_key'=>'', 'privacy'=>1, 'help_text'=>'', 'allowed_types'=>array('png','jpeg','jpg'), 'upload_button_text'=>'Upload', 'is_required'=>0, 'user_edit'=>0,'icon'=>'fa-picture-o')
			);
			if( isset( $field ) ){
				return $field_type_arr[$field];
			}
			return $field_type_arr;
		}
		
		function get_privacy_settings(){
			$privacy = array('everyone'=>'Everyone','members'=>'Members only','specified_member_role'=>'Only vivisble to specific member role');
			return $privacy;
		}
		
		function get_countries(){
			
			$countries = array('Afghanistan', 'Albania','Algeria','American Samoa', 'Andorra', 'Angola','Anguilla', 'Antarctica', 'Antigua and Barbuda',
								'Argentina', 'Armenia', 'Aruba', 'Australia','Austria', 'Azerbaijan','Bahamas', 'Bahrain','Bangladesh',
							    'Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Botswana','Bouvet Island','Brazil',
								'British Indian Ocean Territory','Brunei Darussalam', 'Bulgaria','Burkina Faso','Burundi','Cambodia',
								'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile',
								'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Cook Islands',
								'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica',
							    'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia',
								'Ethiopia', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Territories',
							    'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe',
								'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard Island and McDonald Islands',
								'Holy See (Vatican City State)', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia',
							    'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan',
							    'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya',
							    'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macao', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives',
								'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico',
								'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia',
								'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria',
								'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestinian Territory',
								'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal',
								'Puerto Rico', 'Qatar', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
								'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
								'Saudi Arabia', 'Scotland', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia',
								'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan',
								'Suriname','Svalbard and Jan Mayen', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Tajikistan', 'Thailand', 'Timor-Leste',
								'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands',
								'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'United States Minor Outlying Islands',
								'Uruguay', 'Uzbekistan', 'Vanuatu', 'Viet Nam',  'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia',
								'Zimbabwe'
					);
			$countries = implode( "\r\n", $countries );
			return $countries;
		}
		function create_new_user( $user_login, $user_password, $user_email, $form_data ){
			global $wpdb;
		
			$user_id = wp_insert_user( array(
				'user_login'   => $user_login,
				'user_pass'    => $user_password,
				'display_name' => sanitize_title( $user_login ),
				'user_email'   => $user_email
			) ); 
			
			userplus_update_user_profile( $user_id, $form_data, $action='new_user' );
			if( $user_id ){
			 return $user_id;
			}
		}
		
		function get_upload_dir(){
			$upload_dir = wp_upload_dir();
		
			$upload_base_dir = $upload_dir['basedir'];
			
			return $upload_base_dir;
		}
		
		function get_upload_url(){
			$upload_dir = wp_upload_dir();
		
			$upload_base_url = $upload_dir['baseurl'];
			
			return $upload_base_url;
		}
		
	function permalink( $user_id=0, $request='profile', $option='userplus_pages' ) {
		
		$pages = get_option( $option );
		if (isset($pages[$request]) && $this->page_exists($pages[$request]) ){
			$page_id = $pages[ $request ];
		} else {
			$default = get_option('userplus_pages');
			$page_id = $default['profile'];
		}
		
		$link = get_page_link($page_id);
		return $link;
	}
	
	function page_exists($id){
		$page_data = get_page($id);
		if (isset($page_data->post_status)){
		if($page_data->post_status == 'publish'){
			return true;
		}
		}
		return false;
	}
	
	function userplus_extract_profile_for_mail($user_id, $form) {
		$output = '';
		$customfieldarray = array();
		foreach($form as $k=>$v){
				$val = userplus_profile_details($k, $user_id);
				if (is_array($val)){
					$val = implode(', ',$val);
				}
				$output .= $k . ': '. $val . "\r\n";
				$fieldarray['{USERPLUS_'.$k.'}'] = $val;
			
		}
		return array( 'output'=>$output , 'custom_fields'=>$customfieldarray);
	}
	

	function create_validate_url($user_id) {
		$salt = get_user_meta($user_id, '_account_verify', true);
		if ($salt && strlen($salt) == 20) {
			$url = home_url() . '/';
			$url = add_query_arg( 'act', 'verify_account', $url );
			$url = add_query_arg( 'user_id', $user_id, $url );
			$url = add_query_arg( 'user_verification_key', $salt, $url );
			return $url;
		}
	}
	
	function email_approve($user_id, $user_pass, $form) {
		$new_account_salt = wp_generate_password( $length=20, $include_standard_special_chars=false );
		update_user_meta($user_id, 'userplus_account_verify', $new_account_salt);
		update_user_meta($user_id, 'userplus_account_status', 'pending');
		update_user_meta($user_id, 'userplus_pending_pass', $user_pass);
		update_user_meta($user_id, 'userplus_pending_form', $form);
		userplus_mail($user_id, 'verifyemail', null, $form );
	}
	
	function admin_approve($user_id, $user_pass, $form) {
		$new_account_salt = wp_generate_password( $length=20, $include_standard_special_chars=false );
		update_user_meta($user_id, 'userplus_account_status', 'pending_admin');
		update_user_meta($user_id, 'userplus_pending_pass', $user_pass);
		update_user_meta($user_id, 'userplus_pending_form', $form);
		userplus_mail($user_id, 'pendingadminapprove', null, $form );
	}
	
    function process_email_approve(){
		if (isset($_GET['act']) && isset($_GET['user_id']) && isset($_GET['user_verification_key'])) {
			if ($_GET['act'] == 'verify_account' && (int)$_GET['user_id'] && strlen($_GET['user_verification_key']) == 20) {
				
				// valid request validate user
				if ( $this->is_pending($_GET['user_id']) ){
					$salt_check = get_user_meta($_GET['user_id'], '_account_verify', true);
					if ($salt_check == $_GET['user_verification_key']) {
						$this->activate( $_GET['user_id'] );
						wp_safe_redirect( add_query_arg('accountconfirmed', 'true', esc_url($this->permalink()) ) );
						exit;
					}
				}
				
			}
		}
	}

	function is_pending($user_id) {
		$checkuser = get_user_meta($user_id, '_account_status', true);
		if ($checkuser == 'pending' || $checkuser == 'pending_admin')
			return true;
		return false;
	}
	
	function activate($user_id){
	 	delete_user_meta($user_id, '_account_verify');
		update_user_meta($user_id, '_account_status', 'active');
		$password = get_user_meta($user_id, '_pending_pass', true);
		$form = get_user_meta($user_id, '_pending_form', true);
		userplus_mail( $user_id, 'newaccount', null, $form );
	}	

	function reset_all_form()
	{



	}
}
