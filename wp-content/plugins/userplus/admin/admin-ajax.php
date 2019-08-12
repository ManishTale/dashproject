<?php
if ( ! defined( 'WPINC' ) ) {
	die;
}
if( !class_exists( 'USERPLUSAdminAjax' ) ){

	class USERPLUSAdminAjax{
		
		function __construct(){
			
			add_action( 'wp_ajax_userplus_get_popup_contents', array( $this, 'get_popup_contents' ) );
			add_action( 'wp_ajax_userplus_admin_add_field', array( $this, 'admin_add_field' ) );
			add_action( 'wp_ajax_userplus_admin_add_custom_field', array( $this, 'add_custom_field' ) );
			add_action( 'wp_ajax_userplus_admin_update_field', array( $this, 'admin_update_field' ) );
			add_action( 'wp_ajax_userplus_admin_accept_user', array( $this, 'userplus_admin_accept_user') );
		}
		
		function get_popup_contents(){
			
			if ( !is_user_logged_in() || !current_user_can('manage_options') ) die( __('Please login as administrator','userplus') );
			
			extract($_POST);
		    $userplus_meta_box = new USERPLUSAdminPostMetaBoxes();
			//$userplus = new USERPLUSApi();
			 
			global $userplus , $post;
			switch( $act_id ){
				
				case 'userplus_admin_show_fields':
					ob_start();
					?>
					<h4><?php _e('Setup New Field',USERPLUS_PLUGIN_SLUG); ?></h4>
					<div>
					<?php 
						$fields_arr = $userplus->api->get_field_types();
						if( $fields_arr ){
							foreach( $fields_arr as $key => $array ){
					?> 
								<a href="#" class="userplus-admin-fields" data-arg1="<?php echo $key;?>" data-arg2="<?php echo $arg2;?>" data-action="userplus_admin_popup_create_field"><?php _e( ucfirst($array['type']) , USERPLUS_PLUGIN_SLUG )?></a>
					<?php 
						}
					}	
					?>
					</div>
					<h4><?php _e('Predefined Fields',USERPLUS_PLUGIN_SLUG); ?></h4>
					<div>
						<?php 
							$builtin_field_arr = $userplus->api->get_builtin_fields();
							if( $builtin_field_arr ){
								foreach( $builtin_field_arr as $key => $array ){
						?>
							<a href="#" class="userplus-admin-fields" data-arg1 = "<?php echo $key;?>" data-arg2 = "<?php echo $arg2;?>" data-action="userplus_admin_popup_add_builtin_field"><?php _e( $array['title'] , USERPLUS_PLUGIN_SLUG )?></a>
						<?php 
							}
						}
							
						?>
					</div>
					<h4><?php _e('Custom Fields',USERPLUS_PLUGIN_SLUG); ?></h4>
					<div>
						<?php 
							$custom_field_arr = get_option('userplus_custom_fields');
							if( $custom_field_arr ){
								foreach( $custom_field_arr as $key => $array ){
						?>
							<a href="#" class="userplus-admin-fields" data-arg1 = "<?php echo $key;?>" data-arg2 = "<?php echo $arg2;?>" data-action="userplus_admin_popup_add_custom_field"><?php _e( $array['title'] , USERPLUS_PLUGIN_SLUG )?></a>
						<?php 
							}
						}
							
						?>
					</div>
					<?php 
					$output = ob_get_contents();
					ob_get_clean();
					echo $output;
					die();
					break;

				
			}
		}
		function admin_add_field(){
			if ( !is_user_logged_in() || !current_user_can('manage_options') ) die( __('Please login as administrator','userplus') );
			
			global $userplus , $post;
			extract($_POST);
			$userplus_meta_box = new USERPLUSAdminPostMetaBoxes();
			switch( $act_id ){
			case 'userplus_admin_popup_create_field':
					$field_attr = $userplus->api->get_field_types($arg1);
					ob_start();
					?>
					<form action="">
					<?php
					foreach( $field_attr as $key=>$array){
						$userplus_meta_box->create_field( $key );
					}
					?>
					<input type="hidden" name="type" id="type" value="<?php echo $arg1;?>" />
					<input type="button" name="userplus_admin_add_custom_field" id="userplus_admin_add_custom_field" value="<?php _e('Add', 'userplus')?>" data-arg2="<?php echo $arg2;?>" >
					</form>
					<?php
					$output = ob_get_contents();
					ob_get_clean();
					echo $output;
					die();
					break;
					
			case 'userplus_admin_popup_add_builtin_field':
				$fields = get_post_meta( $arg2, 'fields', true );
				$builtin_field = $userplus->api->get_builtin_fields($arg1);
				$fields[$arg1] = $builtin_field;
				update_post_meta($arg2, 'fields', $fields);
				ob_start();
				?>
				<div class="userplus-admin-drag-drop-field userplus-field-type-<?php echo $builtin_field['type']?>">
					<div class="userplus-admin-field-name"><?php _e($builtin_field['title'], USERPLUS_PLUGIN_SLUG);?><span class="fieldtype"><?php _e($builtin_field['type'],USERPLUS_PLUGIN_SLUG)?><span></div>
					<div class="userplus-admin-field-operations">
					<div class="userplus-admin-delete-field"><a href="#"><?php _e( 'Delete', USERPLUS_PLUGIN_SLUG ); ?></a></div>
					<div class="userplus-admin-edit-field">
						<a href="#" data-arg1="<?php echo $arg1;?>" data-arg2="<?php echo $arg2;?>" data-arg3="<?php echo $builtin_field['type']?>" data-action="userplus_admin_popup_edit_field">Edit</a>
						<input type="hidden" name="userplus_field_order[]" value="<?php echo $arg1;?>">
					</div>
					</div>
				</div>
				<?php 
				$output = ob_get_contents();
				ob_get_clean();
				echo $output;
				die();
				break;
				
			case 'userplus_admin_popup_add_custom_field':	
				$fields = get_post_meta( $arg2, 'fields', true );
				$custom_field = get_option( 'userplus_custom_fields' );
				$custom_field = $custom_field[$arg1];
				$fields[$arg1] = $custom_field;
				update_post_meta($arg2, 'fields', $fields);
				ob_start();
				?>
				<div class="userplus-admin-drag-drop-field userplus-field-type-<?php echo $custom_field['type']?>">
					<div class="userplus-admin-field-name"><?php _e($custom_field['title'], USERPLUS_PLUGIN_SLUG);?><span class="fieldtype"><?php _e($custom_field['type'],USERPLUS_PLUGIN_SLUG)?><span></div>
					<div class="userplus-admin-field-operations">
					<div class="userplus-admin-delete-field"><a href="#"><?php _e( 'Delete', USERPLUS_PLUGIN_SLUG ); ?></a></div>
					<div class="userplus-admin-edit-field">
						<a href="#" data-arg1="<?php echo $arg1;?>" data-arg2="<?php echo $arg2;?>" data-arg3="<?php echo $custom_field['type']?>" data-action="userplus_admin_popup_edit_field">Edit</a>
						<input type="hidden" name="userplus_field_order[]" value="<?php echo $arg1;?>">
					</div>
					</div>
				</div>
				<?php 
				$output = ob_get_contents();
				ob_get_clean();
				echo $output;
				die();
				break;
				
			case 'userplus_admin_popup_edit_field':
				if ( !is_user_logged_in() || !current_user_can('manage_options') ) die( __('Please login as administrator','userplus') );
			
				extract($_POST);
				$fields = get_post_meta( $arg2, 'fields', true );
				$field = $fields[$arg1];
				$userplus_meta_box = new USERPLUSAdminPostMetaBoxes();
				$userplus_meta_box->editing = true;
				?>
				<form action="">
					<?php
					foreach( $field as $key=>$val){
						$userplus_meta_box->edit_val = $val;
						$userplus_meta_box->create_field( $key );
					}
					?>
					<br/>
					<input type="hidden" name="type" id="type" value="<?php echo $arg3;?>" />
					<input type="button" name="userplus_admin_update_field" id="userplus_admin_update_field" value="<?php _e('Update', 'userplus')?>" data-arg2="<?php echo $arg2;?>" >
					</form>
				<?php	
				die();
				break;
					
			}
		}
		
		function add_custom_field(){
			$fields = get_post_meta( $_POST['arg2'], 'fields', true );
			
			
			$fields[$_POST['meta_key']] = $_POST;
			update_post_meta( $_POST['arg2'], 'fields', $fields );
			$fields = get_option( 'userplus_custom_fields' );
			$fields[$_POST['meta_key']] = $_POST;
			update_option( 'userplus_custom_fields',  $fields );
			
			ob_start();
				?>
				<div class="userplus-admin-drag-drop-field userplus-field-type-<?php echo $_POST['type']?>">
					<div class="userplus-admin-field-name"><?php _e($_POST['title'], USERPLUS_PLUGIN_SLUG);?><span class="fieldtype"><?php _e($_POST['type'],USERPLUS_PLUGIN_SLUG)?><span></div>
					<div class="userplus-admin-field-operations">
					<div></div>
					<div class="userplus-admin-delete-field"><a href="#"><?php _e( 'Delete', USERPLUS_PLUGIN_SLUG ); ?></a></div>
					<div class="userplus-admin-edit-field">
						<a href="#" data-arg1="<?php echo $_POST['meta_key'];?>" data-arg2="<?php echo $_POST['arg2'];?>" data-arg3="<?php echo $_POST['type']?>" data-action="userplus_admin_popup_edit_field" >Edit</a>
						<input type="hidden" name="userplus_field_order[]" value="<?php echo $_POST['meta_key'];?>">
					</div>
					</div>
				</div>
				<?php 
				$output = ob_get_contents();
				ob_get_clean();
				echo $output;
				die();
		}
		
		function admin_update_field(){
			$fields = get_post_meta( $_POST['arg2'], 'fields', true );
			$fields[$_POST['meta_key']] = $_POST;
			

			update_post_meta( $_POST['arg2'], 'fields', $fields );
			die();
		}
		
		function userplus_admin_accept_user(){
			$user_id = $_POST['user_id'];
			delete_user_meta($user_id, 'userplus_account_status');
			die();
		}
	}
	
	new USERPLUSAdminAjax();
}
