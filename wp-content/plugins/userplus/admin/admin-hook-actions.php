<?php

if ( ! defined( 'WPINC' ) ) {
	die;
}

if( !class_exists( 'USERPLUSAdminHookActions' ) ){
	
	class USERPLUSAdminHookActions{
	
		function __construct(){
			add_filter( 'manage_userplus_form_posts_columns', array( $this, 'set_custom_edit_userplus_form_columns' ) );
			add_action( 'manage_userplus_form_posts_custom_column' , array( $this, 'custom_userplus_form_column' ), 10, 2 );
		}
		
		function set_custom_edit_userplus_form_columns( $columns ){
			 $columns['form_type'] = __( 'Form Type', USERPLUS_PLUGIN_SLUG );
    		 $columns['shortcode'] = __( 'Shortcode', USERPLUS_PLUGIN_SLUG );
    		 return $columns;
		}
		
		function custom_userplus_form_column( $column, $post_id ){
			switch ( $column ) {
				
				case 'form_type' :
					echo ucfirst( get_post_meta( $post_id, 'userplus_form_type', true ) );
					break;
					
				case 'shortcode':
					echo "[userplus id=$post_id]";
					break;	
			}
		}
	}
	
	new USERPLUSAdminHookActions();
}
