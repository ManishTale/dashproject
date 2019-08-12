<?php

if ( ! defined( 'WPINC' ) ) {
	die;
}

if( !class_exists( 'USERPLUSFieldFunctions' ) ){
	
	class USERPLUSFieldFunctions{
		
		function __construct(){
			
		}
		
		function edit_fields( $key, $array, $form_type = null, $user_id = null  ){
			global $userplus;
			$readonly = '';
			$value = $array['default_value'];
			
			if( $array['type']=='image_upload' ){
				$default_image = USERPLUS_URL."assets/images/profiledefault.png";
				$value = "<img src='".$default_image."' class='default'>";
			}
			if (isset($user_id)){
				$value = userplus_profile_details( $key, $user_id );



				if( $array['type']=='image_upload' ){
					if( empty( $value ) ){
						$value = USERPLUS_URL."assets/images/profiledefault.png";
					}
					$value = "<img src='".$value."' class='default'>";
				}
				if( isset($array['user_edit']) && !$array['user_edit'] ){
					$readonly = 'readonly';
				}
			}
			foreach($array as $data_option=>$data_value){
				if( !is_array($data_value) && $data_option != 'edit_choices' ){
					$data .= " data-$data_option='$data_value'";
				}
			}
			$field = '';
			$field .= "<div class='userplus-field' data-key=".$array['meta_key'].">";
			$field .= "<div class='userplus-label'>"; 
			if(!empty($array['icon']))
					$field .= "<i class='fa ".$array['icon']."' aria-hidden='true'></i>";
					else
					$field .="<span class='faicons'></span>";
                        $field .= "<label for='$key'>".$array['label']."</label>";
			
			if(isset ($array['is_required']) && $array['is_required']==1 ) 
				$field .="<span class='userplus-required'>*</span>";
			
			$field .= "</div><div class='userplus-element'>";	
			$readonly = '';
		  
			switch( $array['type'] ){
			
				case 'text':
					
					$field .= "<input type='text' name='".$array['meta_key']."' id='".$array['meta_key']."' value='".$value."' placeholder='".$array['placeholder']."' $data $readonly />";
					break;
				
				case 'textarea':
					$field .= "<textarea  type='text' name='".$array['meta_key']."' id='".$array['meta_key']."' $data $readonly />$value</textarea>";
					break;
				
				case 'password':
					$field .= "<input type='password' name='".$array['meta_key']."' id='".$array['meta_key']."' placeholder='".$array['placeholder']."' autocomplete='off'/ $data>";
					if( $array['add_confirm_password_field'] && is_user_logged_in()){
						$field .= "<div class='userplus-clear'></div>";
						$field .= "</div>";
						$field .= "</div><div class='userplus-clear'></div>";
						$field .= "<div class='userplus-field'>";
						$field .= "<div class='userplus-label'>"; 
						$field .= "<label for='confirm_pass'>".__( 'Confirm Password', USERPLUS_PLUGIN_SLUG )."</label>";
						$field .= "</div><div class='userplus-element'>";	
						$field .= "<input type='password' name='confirm_pass' id='confirm_pass' autocomplete='off' data-is_required=1 />";
					}
					break;
				case 'image_upload':
						$allowed_types = implode(',',$array['allowed_types']);
						$field .= "<div class='userplus-image' data-remove_text='".__('Remove','userplus')."'>".$value."</div>";
						$field .= "<div class='userplus-image-upload' data-filetype='picture' data-allowed_extensions=".$allowed_types.">".$array['upload_button_text']."</div>";
						$field .= "<input data-required='".$array['is_required']."' type='hidden' name='".$array['meta_key']."' id='".$array['meta_key']."' value='".userplus_profile_details( $key, $user_id )."' />";
					break;
				
				case 'url':
					break;
				
				case 'radio':
					if (isset($array['edit_choices'])){
					$array['edit_choices'] = explode( "\r\n", $array['edit_choices'] ) ;
					$field .= "<div class='userplus-radio-container' data-required='".$array['is_required']."'>";
					foreach($array['edit_choices'] as $k=>$v) {
							
						$v = stripslashes($v);
						$field .= "<label class='userplus-radio'><span";
						if (checked( $v, $value, 0 )) { $res .= ' class="checked"'; }
						$field .= '></span><input type="radio" value="'.$v.'" name="'.$array['meta_key'].'" ';
						$field .= checked( $v, $value, 0 );
						$field .= " />$v</label>";
					}
					$field .= "</div>";
					}
					break;
				
				case 'checkbox':
					if (isset($array['edit_choices'])){
					$field .= "<div class='userplus-checkbox-container' data-required='".$array['is_required']."'>";
					foreach($array['edit_choices'] as $k=>$v) {
						$v = stripslashes($v);
						$field .= "<label class='userplus-checkbox'><span";
						if ( ( is_array( $value ) && in_array($v, $value ) ) || $v == $value ) { $res .= ' class="checked"'; }
						$field .= '></span><input type="checkbox" value="'.$v.'" name="'.$array['meta_key'].'" ';
						if ( ( is_array( $value ) && in_array($v, $value ) ) || $v == $value ) { $res .= 'checked="checked"'; }
						$field .= " />$v</label>";
					}
					$field .= "</div>";
					}
					break;
				
				case 'select':
				
					$field .= "<select name='".$array['meta_key']."' id='".$array['meta_key']."' class='chosen-select' data-placeholder='".$array['placeholder']."' $data >";		
					$field .= "<option value=null>".$array['default_value']."</option>";
					if( isset( $array['edit_choices'] ) ){	
						$options = explode( "\r\n", $array['edit_choices'] ) ;
						$options_count = count( $options );
						for( $i=0;$i<$options_count;$i++ ){
							$field .= "<option value='".$options[$i]."'".selected( $options[$i], $value, 0 ).">".$options[$i]."</option>";
						}
					}
					$field .= "</select>";	
					break;
				
				case 'multiselect':
					break;
				
			}
			
			$field .= "<div class='userplus-clear'></div>";
			$field .= "</div>";
			$field .= "</div><div class='userplus-clear'></div>";
			return $field;
		}
		
		function view_fields( $key, $array, $form_type = null, $user_id = null ){
			if( (isset($array['privacy'] ) && $array['privacy'] == '2') && !get_current_user_id() ){
				return false;
			}
			if ($user_id){
				if( $array['meta_key'] == 'profile_pic' || $array['meta_key'] == 'profile_background_pic' ){
					return;
				}
				$value = userplus_profile_details( $key, $user_id );
				if (isset($array['type']) && $key != 'role' && in_array($array['type'], array('select','multiselect','checkbox','radio' ) ) ){
					if (is_array($value)){
						foreach($value as $k=>$val){
							$output[] = $val;
						}
						$value = implode(', ', $output);
					}	
				}
				if( !empty( $value ) ){
					$field = '';
					$field .= "<div class='userplus-field' data-key=".$array['meta_key'].">";
					$field .= "<div class='userplus-label'>"; 
					if(!empty($array['icon']))
					$field .= "<i class='fa ".$array['icon']."' aria-hidden='true'></i>";
					else
					$field .="<span class='faicons' ></span>";
					$field .="<label for='$key'>".$array['label']."</label>";
					$field .= "</div><div class='userplus-element'>$value";	
					
					$field .= "<div class='userplus-clear'></div>";
					$field .= "</div>";
					$field .= "</div><div class='userplus-clear'></div>";
					return $field;
				}
				
		 	}
		}
		
	}
	
}
