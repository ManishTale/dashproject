<?php

if ( ! defined( 'WPINC' ) ) {
	die;
}

if( !class_exists( 'USERPLUSAdminPostMetaBoxes' ) ){
	
	class USERPLUSAdminPostMetaBoxes{
		
		function __construct(){
			$this->slug = 'plugin_slug';
			$this->editing = false;
			$this->edit_val = null;
			add_action( 'load-post.php', array(&$this, 'add_post_metabox'), 9 );
			add_action( 'load-post-new.php', array(&$this, 'add_post_metabox'), 9 );
		}
		
		function add_post_metabox(){
			global $current_screen;
			if( $current_screen->id == 'userplus_form'){
				add_action( 'add_meta_boxes', array(&$this, 'add_metabox_form'), 10, 2 );
				add_action( 'save_post', array(&$this, 'save_metabox_form'), 10, 3 );
			}
		}
		
		function add_metabox_form( $post_type, $post ){
			
			//add_meta_box('userplus-admin-form-type', __('Select Form Type'), array(&$this, 'prepare_metaboxes'), 'userplus_form', 'normal', 'default');
			add_meta_box('userplus-admin-form-builder', __('Form Builder'), array(&$this, 'prepare_metaboxes'), 'userplus_form', 'normal', 'default');
			add_meta_box('userplus-admin-form-shortcode', __('Shortcode'), array(&$this, 'prepare_metaboxes'), 'userplus_form', 'side', 'default');
			$form_type = get_post_meta($post->ID,'userplus_form_type',true);
			if( empty( $form_type ) || ( $form_type == 'register' ) ){
				add_meta_box('userplus-admin-form-role', __('Form role'), array(&$this, 'prepare_metaboxes'), 'userplus_form', 'side', 'default');
				add_meta_box('userplus-admin-form-autologin', __('Autologin'), array(&$this, 'prepare_metaboxes'), 'userplus_form', 'side', 'default');
		
			}
		}
		
		function prepare_metaboxes( $object, $box ){
			include_once USERPLUS_PATH . 'admin/templates/form/'. $box['id'] . '.php';
			wp_nonce_field( basename( __FILE__ ), 'userplus_save_metabox_form_nonce' );
		}
		
		function save_metabox_form( $post_id, $post, $update ){
			if ( !isset( $_POST['userplus_save_metabox_form_nonce'] ) || !wp_verify_nonce( $_POST['userplus_save_metabox_form_nonce'], basename( __FILE__ ) ) ) 				return $post_id;
			
			if ( $post->post_type != 'userplus_form' ) return $post_id;
			
			$post_type = get_post_type_object( $post->post_type );
			if ( !current_user_can( $post_type->cap->edit_post, $post_id ) ) return $post_id;
			
			if( isset( $_POST['userplus_form_type'] ) ){
				update_post_meta( $post_id, 'userplus_form_type', $_POST['userplus_form_type'] );
			}
			
			if( isset( $_POST['userplus_field_order'] ) ){
				update_post_meta( $post_id, 'userplus_field_order', $_POST['userplus_field_order'] );
			}
			
			if( isset( $_POST['userplus_form_role'] ) ){
				update_post_meta( $post_id, 'userplus_form_role', $_POST['userplus_form_role'] );
			}
			
		if( isset( $_POST['userplus_form_autologin'] ) ){
				update_post_meta( $post_id, 'userplus_form_autologin', $_POST['userplus_form_autologin'] );
			}
		}
		
		function create_field( $attr, $form_id = null ){
			switch( $attr ){
			
				case 'title':
				
					?>
					<p>
						<label for="title"><?php _e( 'Title', $this->slug )?></label><br>
						<input type="text" name="title" id="title" value="<?php echo $this->edit_val;?>" />
					</p>
					<?php
					break;
				
				case 'label':
					?>
					<p>
						<label for="label"><?php _e( 'Label', $this->slug )?></label><br>
						<input type="text" name="label" id="label" value="<?php echo $this->edit_val;?>" />
					</p>
					<?php
					break;

				case 'meta_key':
					?>
					<p>
						<label for="meta_key"><?php _e( 'Meta Key', $this->slug )?></label><br>
						<input type="text" name="meta_key" id="meta_key" value="<?php echo $this->edit_val;?>" <?php echo !empty($this->edit_val)?'readonly':'';?>/>
					</p>	
					<?php
					break;
				
				case 'placeholder':
					?>
					<p>
						<label for="placeholder"><?php _e( 'Placeholder', $this->slug )?></label><br>
						<input type="text" name="placeholder" id="placeholder" value="<?php echo $this->edit_val;?>" />
					</p>	
					<?php
					break;
					
				case 'is_required':
					?>
					<p>
						<label for="is_required"><?php _e( 'Is Required', $this->slug )?></label><br>
						<select name="is_required" id="is_required" >
							<option value="1" <?php selected( 1, $this->edit_val ); ?> ><?php _e( 'Yes', $this->slug )?></option>
							<option value="0" <?php selected( 0, $this->edit_val ); ?> ><?php _e( 'No', $this->slug )?></option>
						</select>
					</p>	
					<?php
					break;
					
				case 'help_text':
					?>
					<p>
						<label for="help_text"><?php _e( 'Help Text', $this->slug )?></label><br>
						<input type="text" name="help_text" id="help_text" value="<?php echo $this->edit_val;?>" />
					</p>	
					<?php
					break;
					
				case 'privacy':
					?>
				
					<p><label for="privacy"><?php _e( 'Privacy', $this->slug )?></label><br>
						<select name="privacy" id="privacy" class="">
							<option value="1" <?php selected( 1, $this->edit_val ); ?>>Everyone</option>
							<option value="2" <?php selected( 2, $this->edit_val ); ?>>Members</option>
						</select>
					</p>
					
				<?php
					break;
				
				case 'default_value':
					?>
					<p>
						<label for="default_value"><?php _e( 'Default Value', $this->slug )?></label><br>
						<input type="text" name="default_value" id="default_value" value="<?php echo $this->edit_val;?>" />
					</p>	
					<?php
					break;
					
				case 'validate':
					break;
					
				case 'user_edit':
					?>
					<p><label for="user_edit"><?php _e( 'Can user edit this field?', $this->slug )?></label><br>
						<select name="user_edit" id="user_edit" class="">
							<option value="1" <?php selected( 1, $this->edit_val ); ?>>Yes</option>
							<option value="0" <?php selected( 0, $this->edit_val ); ?>>No</option>
						</select>
					</p>
					<?php
					break;
					
				case 'icon':
					?>
					<p>
						<label for="icon"><?php _e( 'Fontawesome Icon Code', $this->slug )?></label><br>
						<input type="text" name="icon" id="icon" value="<?php echo $this->edit_val;?>" />
					</p>
					<?php
					break;
					
				case 'min_length':
					?>
					<p>
						<label for="min_length"><?php _e( 'Minimum Length', $this->slug )?></label><br>
						<input type="text" name="min_length" id="min_length" value="<?php echo $this->edit_val;?>" />
					</p>	
					<?php
					break;
					
				case 'max_length':
					?>
					<p>
						<label for="max_length"><?php _e( 'Maximum Length', $this->slug )?></label><br>
						<input type="text" name="max_length" id="max_length" value="<?php echo $this->edit_val;?>" />
					</p>	
					<?php
					break;
				case 'allowed_types':
					?>
					<p>
						<label for="allowed_types"><?php _e( 'Allowed File Type', $this->slug );?></label><br>
						<select name="allowed_types[]" multiple>
							<option value="png" <?php if( in_array( 'png', $this->edit_val ) ) echo "selected";?>><?php _e( 'PNG', $this->slug );?></option>
							<option value="jpeg" <?php if( in_array( 'jpeg', $this->edit_val ) ) echo "selected"; ?>><?php _e( 'JPEG', $this->slug );?></option>
							<option value="jpg" <?php if( in_array( 'jpg', $this->edit_val ) ) echo "selected"; ?>><?php _e( 'JPG', $this->slug );?></option>
							<option value="gif" <?php if( in_array( 'gif', $this->edit_val ) ) echo "selected"; ?>><?php _e( 'GIF', $this->slug );?></option>
						</select>
					</p>
					<?php
					break;
				
				case 'upload_button_text':
					?>
					<p>
						<label for="upload_button_text"><?php _e( 'Upload Button text', $this->slug )?></label><br>
						<input type="text" name="upload_button_text" id="upload_button_text" value="<?php echo $this->edit_val;?>" />
					</p>
					<?php	
				
				case 'edit_choices':
					?>
					<p>
						<label for="edit_choices"><?php _e( 'Edit Choices', $this->slug )?></label><br>
						<textarea name="edit_choices" id="edit_choices"><?php echo $this->edit_val;?></textarea>
					</p>
					<?php	
					
			}
		}
	}
	
	new USERPLUSAdminPostMetaBoxes();
}
