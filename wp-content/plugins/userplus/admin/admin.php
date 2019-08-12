<?php

if ( ! defined( 'WPINC' ) ) {
	die;
}

if( !class_exists( 'USERPLUSAdmin' ) ){
	
	class USERPLUSAdmin{
		
		function  __construct(){
			$this->slug = 'userplus';
			add_action('admin_menu', array(&$this, 'add_admin_menu'), 0);
			
			add_action( 'admin_enqueue_scripts', array( $this, 'include_scripts' ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'include_styles' ) );
			add_action( 'admin_init', array( $this, 'userplus_register_settings' ) );
			$userplus_options=get_option("userplus");
		}
		
		function add_admin_menu(){
			add_menu_page( __('UserPlus', $this->slug), __('UserPlus', $this->slug), 'manage_options', $this->slug, array(&$this, 'admin_page'), 'dashicons-admin-users', '127');
			add_submenu_page( $this->slug, __('Forms', $this->slug), __('Forms', $this->slug), 'manage_options', 'edit.php?post_type=userplus_form', '', '' );
		}
		
		function admin_page(){

			

			if (isset($_POST['submit'])) {
				$this->save();
			}
			if (isset($_POST['reset-options'])) {
			$this->reset();
		}
			if (isset($_GET['userplus_action'])){

			
			$this->userplus_action();
		}
			include(USERPLUS_PATH.'admin/dashboard/dashboard.php');
		}
		
		function include_scripts( $hook ){
			wp_enqueue_script('jquery');
			wp_register_script('userplus_admin_script', USERPLUS_URL.'admin/assets/js/scripts.js',array('jquery'),'',true);
			wp_localize_script('userplus_admin_script', 'data', array('url'=>USERPLUS_URL));
			wp_enqueue_script('userplus_admin_script');
			wp_enqueue_script( 'jquery-ui-sortable' );
			if ( USERPLUS_ADMIN_PAGE != $hook ) 
		 	{
				return;
		 	}
		 	wp_enqueue_script('userplus_bootstrap', USERPLUS_URL . 'admin/assets/js/bootstrap.min.js', array('jquery'),'',true);
		 	wp_enqueue_script('userplus_appjs', USERPLUS_URL . 'admin/assets/js/app.js', array('jquery'),'',true);
		 	
			wp_enqueue_script('userplus_adminjs', USERPLUS_URL . 'admin/assets/js/admin.js', array('jquery'),'',true);
		}
		
		function include_styles( $hook ) {
			wp_enqueue_style( 'userplus_admin_style', USERPLUS_URL.'admin/assets/css/admin_style.css' );
			
			
			
				if ( USERPLUS_ADMIN_PAGE != $hook ) 
			
		 	{
				return;
		 	}
		 	wp_register_style('userplus_admin_dash_style', USERPLUS_URL . 'admin/assets/css/style.css');
		 	wp_enqueue_style('userplus_admin_dash_style');
		 	wp_register_style('userplus_bootstrapcss', USERPLUS_URL . 'admin/assets/css/bootstrap.min.css');
			wp_enqueue_style('userplus_bootstrapcss');
		
			wp_register_style('userplus_fontawesome', USERPLUS_URL . 'admin/assets/css/font-awesome.min.css');
			wp_enqueue_style('userplus_fontawesome');
			wp_register_style('userplus_style', USERPLUS_URL . 'admin/assets/css/admin_style.css');
			wp_enqueue_style('userplus_style');
			wp_register_style('userplus_icons', USERPLUS_URL . 'admin/assets/css/ionicons.css');
			wp_enqueue_style('userplus_icons');
			wp_register_style('userplus_fontawsome',"http://fonts.googleapis.com/css?family=Lato");
			wp_enqueue_style('userplus_fontawsome');
		}

		function reset() {
		update_option('userplus', userplus_default_options() );
		$userplus_options = array_merge( $this->options, userplus_default_options() );
		echo '<div class="updated"><p><strong>'.__('Settings are reset to default.','userplus').'</strong></p></div>';
	}
		function userplus_action()
		{
			if ($_GET['userplus_action'] == 'reset_all_form'){

			$reset=new USERPLUSInitialSetup;
			$reset->initial_setup($reset="1");
			echo '<div class="updated"><p><strong>'.sprintf(__('Reset form to default','userpro'), $i).'</strong></p></div>';

			}


		}
		function save()
		{


			

			foreach($_POST as $key => $value) {
		
			if ($key != 'submit') {
				if (!is_array($_POST[$key])) {
					$userplus_options[$key] = esc_attr($_POST[$key]);
				} else {
					$userplus_options[$key] = $_POST[$key];
				}
				
			}
		}
		
		update_option('userplus',$userplus_options);
		echo '<div class="updated"><p><strong>'.__('Settings saved.','userplus').'</strong></p></div>';
	}

		
		public function userplus_register_settings(){
		
			register_setting( 'userplus-general-group','userplus_general_settings' );
			register_setting( 'userplus-email-group','userplus_email_settings' );

		}
	}
	
	new USERPLUSAdmin();
}
