<?php
/*
Plugin Name: UserPlus
Plugin URI:
Description:The easiest way to create beautiful user profiles with WordPress 
Version: 2.0
Author:userplus
Author URI: 
*/

if ( ! defined( 'WPINC' ) ) {
	die;
}

if( !class_exists( 'USERPLUS' ) ){
	
	class USERPLUS{
		
		function __construct(){
			
			$this->define_constants();
			$this->include_files();
			$this->load_language();


		}
		
		public function define_constants(){
			
			if( !defined( 'USERPLUS_URL' ) ){
				define( 'USERPLUS_URL', plugin_dir_url( __FILE__ ) );
			}	
			if( !defined( 'USERPLUS_PATH' ) ){
				define( 'USERPLUS_PATH', plugin_dir_path( __FILE__ ) );
			}
			if( !defined( 'USERPLUS_PLUGIN_SLUG' ) ){
				define( 'USERPLUS_PLUGIN_SLUG' , 'userplus' );
			}	
			if ( !defined( 'USERPLUS_ADMIN_PAGE' ) ) {
				$userplus =  'toplevel_page_';
				define( 'USERPLUS_ADMIN_PAGE', $userplus . USERPLUS_PLUGIN_SLUG );
			}
		}
		
		
		public function include_files(){
			
			if (is_admin()){
				foreach (glob(USERPLUS_PATH . 'admin/*.php') as $filename) { include $filename; }
			}
			foreach (glob(USERPLUS_PATH . 'functions/*.php') as $filename) { require_once $filename; }
			$this->api =  new USERPLUSApi();
			$this->field_functions = new USERPLUSFieldFunctions();
		}
		
		public function load_language(){
			load_plugin_textdomain('plugin-name', false, dirname(plugin_basename(__FILE__)) . '/languages');
		}
		
		
	}
	
	$userplus = new USERPLUS();
}
