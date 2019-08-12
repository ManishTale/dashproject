<?php

if (!class_exists('UserPlus')) :

final class UserPlus {	
	 function __construct() {
			
			add_action( 'userplus_loaded', array( $this, 'userplus_loaded' ) );


	
			}
	public function userplus_loaded()
	{

			$this->includes_files();

			$this->hooks();

			
	}

	protected function includes_files() {

		require_once( MEMBERSHIP_PLUGIN_PATH . 'includes/admin/menu.php' );

	}	

	public function hooks() {
		add_action( 'admin_init', array( $this, 'userplus_register_settings' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'include_scripts' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'include_styles' ) );
			
	}
	public function include_scripts( $hook ) {
			
		if ( MEMBERSHIP_ADMIN_PAGE != $hook ) 
		 {
			return;
		 }

		
		wp_enqueue_scripts('jquery');
		wp_register_script('userplus_adminjs', MEMBERSHIP_URL . 'includes/admin/assets/js/admin.js');
		wp_enqueue_scripts('userplus_adminjs');	
		wp_register_script('userplus_bootstrapjs', MEMBERSHIP_URL . 'includes/admin/assets/bootstrap/js/bootstrap.min.js');
		wp_enqueue_scripts('userplus_bootstrapjs');	



	 }
	public function include_styles( $hook ) {
			
		if ( MEMBERSHIP_ADMIN_PAGE != $hook ) 
		 {
			return;
		 }
		wp_register_style('userplus_bootstrapcss', MEMBERSHIP_URL . 'includes/admin/assets/bootstrap/css/bootstrap.min.css');
		wp_enqueue_style('userplus_bootstrapcss');
		wp_register_style('userplus_admin_style', MEMBERSHIP_URL . 'includes/admin/assets/css/style.css');
		wp_enqueue_style('userplus_admin_style');
		wp_register_style('userplus_dashboard', MEMBERSHIP_URL . 'includes/admin/assets/css/userplus-dashboard.css');
		wp_enqueue_style('userplus_dashboard');
		wp_register_style('userplus_icons', MEMBERSHIP_URL . 'includes/admin/assets/css/themify-icons.css');
		wp_enqueue_style('userplus_icons');
		wp_register_style('userplus_fontawsome',"http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css");
		wp_enqueue_style('userplus_fontawsome');

	 }
	public function userplus_register_settings(){
		
		register_setting( 'userplus-general-group','userplus_general_settings' );
		register_setting( 'userplus-email-group','userplus_email_settings' );

	}
}
endif;
$UserPlus =new UserPlus();
