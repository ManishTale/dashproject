<?php

if ( ! defined( 'WPINC' ) ) {
	die;
}

if( !class_exists( 'USERPLUSInitialSetup' ) ){
	
	class USERPLUSInitialSetup{
		
		function __construct(){
			
			add_action('init',  array(&$this, 'initial_setup'), 1);
		}
		
		function initial_setup($reset=0){


		$pages = get_option('userpro_pages');
		
		/* Rebuild */
		if ($reset) {
		
			// delete existing pages for userpro
			if (isset($pages) && is_array($pages)){
				foreach( $pages as $page_id ) {
					wp_delete_post( $page_id, true );
				}
			}
			
			// delete from DB
			delete_option('userpro_pages');
		
		}

			global $userplus;
			register_post_type('userplus_form', array(
				'labels' => array(
					'name' => __( 'Forms' ),
					'singular_name' => __( 'Form' ),
					'add_new' => __( 'Add New' ),
					'add_new_item' => __('Add New Form' ),
					'edit_item' => __('Edit Form'),
					'not_found' => __('You did not create any forms yet'),
					'not_found_in_trash' => __('Nothing found in Trash'),
					'search_items' => __('Search Forms')
				),
				'capabilities' => array(
            'create_posts' => false
        ), 'map_meta_cap' => true,
				'show_ui' => true,
				'show_in_menu' => false,
				'public' => false,
				'supports' => array('title')
			));
			
			$pages = get_option('userplus_pages');
				if (!isset($pages['profile'])) {
		
					$slug = userplus_get_option('slug');
					$slug_edit = userplus_get_option('slug_edit');
					$slug_register = userplus_get_option('slug_register');
					$slug_login = userplus_get_option('slug_login');
					$slug_logout = userplus_get_option('slug_logout');
					
					$logout_page = array(
				  	'post_title'  		=> __( 'Logout', USERPLUS_PLUGIN_SLUG ),
				  	'post_content' 		=> '',
				 	'post_name'			=> $slug_logout,
				  	'comment_status' 		=> 'closed',
				 	'post_type'     		=> 'page',
				  	'post_status'   		=> 'publish',
				 	'post_author'   		=> 1,
					);
					$logout_page = wp_insert_post( $logout_page );
					$pages['logout_page'] = $logout_page;
					$post = get_post($logout_page, ARRAY_A);
					userplus_set_option('slug_logout', $post['post_name']);
					
					$parent = array(
				  	'post_title'  		=> __('My Profile',USERPLUS_PLUGIN_SLUG),
				  	'post_name'			=> $slug,
				  	'comment_status' 		=> 'closed',
				  	'post_type'     		=> 'page',
				  	'post_status'   		=> 'publish',
				  	'post_author'   		=> 1,
					);
					$parent = wp_insert_post( $parent );
					
					$default_profile_form = array(
				  	'post_title'  		=> __('Default Profile',USERPLUS_PLUGIN_SLUG),
				  	'post_name'			=> 'default_profile',
				  	'comment_status' 		=> 'closed',
				  	'post_type'     		=> 'userplus_form',
				  	'post_status'   		=> 'publish',
				  	'post_author'   		=> 1,
					);
					$default_profile_form = wp_insert_post( $default_profile_form );
					$post_content = '[userplus id='.$default_profile_form.']';
					update_option( 'userplus_default_profile', $default_profile_form );
					wp_update_post( array( 'ID'=>$parent, 'post_content'=>$post_content	) );
					$pages['profile'] = $parent;
					$post = get_post($parent, ARRAY_A);
					userplus_set_option('slug', $post['post_name']);
					$default_fields = array('user_login','first_name','last_name','profile_pic','user_email','description','gender','facebook');
					foreach( $default_fields as $key=>$val ){
						$fields[$val] = $userplus->api->get_builtin_fields( $val );
					}
					update_post_meta( $default_profile_form, 'fields', $fields );
					update_post_meta( $default_profile_form, 'userplus_field_order', $default_fields );
					update_post_meta( $default_profile_form, 'userplus_form_type', 'profile' );
					$edit = array(
				  	'post_title'  		=> __('Edit Profile',USERPLUS_PLUGIN_SLUG),
				  	'post_name'			=> $slug_edit,
					'comment_status' 		=> 'closed',
					'post_type'     		=> 'page',
					'post_status'   		=> 'publish',
					'post_author'   		=> 1,
					'post_parent'			=> $parent
					);
					$edit = wp_insert_post( $edit );
					$post_content = '[userplus id='.$default_profile_form.' mode="edit"]';
					wp_update_post( array( 'ID'=>$edit, 'post_content'=>$post_content ) );
					$pages['edit'] = $edit;
					$post = get_post($edit, ARRAY_A);
					userplus_set_option('slug_edit', $post['post_name']);
					
					$register = array(
				  	'post_title'  		=> __('Register',USERPLUS_PLUGIN_SLUG ),
				  	'post_name'			=> $slug_register,
				  	'comment_status' 		=> 'closed',
				  	'post_type'     		=> 'page',
				  	'post_status'   		=> 'publish',
				  	'post_author'   		=> 1,
				  	'post_parent'			=> $parent
					);
					$register = wp_insert_post( $register );
					$default_register_form = array(
				  	'post_title'  		=> __('Default Registration',USERPLUS_PLUGIN_SLUG),
				  	'post_name'			=> 'default_registration',
				  	'comment_status' 		=> 'closed',
				  	'post_type'     		=> 'userplus_form',
				  	'post_status'   		=> 'publish',
				  	'post_author'   		=> 1,
					);
					$default_register_form = wp_insert_post( $default_register_form );
					$post_content = '[userplus id='.$default_register_form.']';
					wp_update_post( array( 'ID'=>$register, 'post_content'=>$post_content ) );
					$pages['register'] = $register;
					$post = get_post($register, ARRAY_A);
					userplus_set_option('slug_register', $post['post_name']);
					$default_fields = array('user_login','user_email','first_name','last_name','password');
					foreach( $default_fields as $key=>$val ){
						$fields[$val] = $userplus->api->get_builtin_fields( $val );
					}
					update_post_meta( $default_register_form, 'fields', $fields );
					update_post_meta( $default_register_form, 'userplus_field_order', $default_fields );
					update_post_meta( $default_register_form, 'userplus_form_type', 'register' );
					$login = array(
				  	'post_title'  		=> __('Login',USERPLUS_PLUGIN_SLUG),
				  	'post_name'			=> $slug_login,
				  	'comment_status' 		=> 'closed',
				  	'post_type'     		=> 'page',
				  	'post_status'   		=> 'publish',
				  	'post_author'   		=> 1,
				  	'post_parent'			=> $parent
					);
					$login = wp_insert_post( $login );
					$default_login_form = array(
				  	'post_title'  		=> __('Default Login',USERPLUS_PLUGIN_SLUG),
				  	'post_name'			=> 'default_login',
				  	'comment_status' 		=> 'closed',
				  	'post_type'     		=> 'userplus_form',
				  	'post_status'   		=> 'publish',
				  	'post_author'   		=> 1,
					);
					$default_login_form = wp_insert_post( $default_login_form );
					update_option( 'userplus_default_login', $default_login_form );
					$post_content = '[userplus id='.$default_login_form.']';
					wp_update_post( array( 'ID'=>$login, 'post_content'=>$post_content	) );
					$pages['login'] = $login;
					$post = get_post($login, ARRAY_A);
					userplus_set_option('slug_login', $post['post_name']);
					$default_fields = array('username_or_email', 'password');
					foreach( $default_fields as $key=>$val ){
						$fields[$val] = $userplus->api->get_builtin_fields( $val );
					}
					update_post_meta( $default_login_form, 'fields', $fields );
					update_post_meta( $default_login_form, 'userplus_field_order', $default_fields );
					update_post_meta( $default_login_form, 'userplus_form_type', 'login' );
					update_option('userplus_pages', $pages);
					
					$slug = userplus_get_option('slug');
					$slug_edit = userplus_get_option('slug_edit');
					$slug_register = userplus_get_option('slug_register');
					$slug_login = userplus_get_option('slug_login');
					$slug_logout = userplus_get_option('slug_logout');
					add_rewrite_rule("$slug/$slug_register",'index.php?pagename='.$slug.'/'.$slug_register, 'top');
					add_rewrite_rule("$slug/$slug_login",'index.php?pagename='.$slug.'/'.$slug_login, 'top');
					add_rewrite_rule("$slug/$slug_edit/([^/]+)/?",'index.php?pagename='.$slug.'/'.$slug_edit.'&userplus_username=$matches[1]', 'top' );
					add_rewrite_rule("$slug/$slug_edit",'index.php?pagename='.$slug.'/'.$slug_edit, 'top' );
					add_rewrite_rule("$slug/([^/]+)/?",'index.php?pagename='.$slug.'&userplus_username=$matches[1]', 'top');
			
					flush_rewrite_rules();
			}else{
					$slug = userplus_get_option('slug');
					$slug_edit = userplus_get_option('slug_edit');
					$slug_register = userplus_get_option('slug_register');
					$slug_login = userplus_get_option('slug_login');
					$slug_logout = userplus_get_option('slug_logout');
					add_rewrite_rule("$slug/$slug_register",'index.php?pagename='.$slug.'/'.$slug_register, 'top');
					add_rewrite_rule("$slug/$slug_login",'index.php?pagename='.$slug.'/'.$slug_login, 'top');
					add_rewrite_rule("$slug/$slug_edit/([^/]+)/?",'index.php?pagename='.$slug.'/'.$slug_edit.'&userplus_username=$matches[1]', 'top' );
					add_rewrite_rule("$slug/$slug_edit",'index.php?pagename='.$slug.'/'.$slug_edit, 'top' );
					add_rewrite_rule("$slug/([^/]+)/?",'index.php?pagename='.$slug.'&userplus_username=$matches[1]', 'top');
			}
		}
	}
	
	new USERPLUSInitialSetup();
}
