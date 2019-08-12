<div class="userplus-profile-container" data-form_id="<?php echo $atts['id'];?>"  data-mode="view">
<?php 
	global $userplus;
	$background_image = get_user_meta( $user_id, 'profile_background_pic', true );
	if( empty($background_image) ){
	$background_image = USERPLUS_URL."assets/images/cover.jpg";
	}
	$profile_pic = get_user_meta( $user_id, 'profile_pic', true );
	if( empty( $profile_pic ) ){
		$profile_pic = USERPLUS_URL."assets/images/profiledefault.png";
	}


?>
<div class="userplus-profile-background-image">
	<img src="<?php echo $background_image;?>" />
</div>
<div class="userplus-profile-head">
 	<div class="userplus-profile-left">
 		<div class="userplus-profile-pic">
 			 <img src="<?php echo $profile_pic;?>" />
 		</div>
 		<div class="userplus-profile-name">
 			<div class="userplus-profile-display-name">
 				<?php echo userplus_profile_details('display_name',$user_id);?>
 			</div>
 			<div class="userplus-profile-button ">
 				<a class="userplus-profile-button-alt userplus-profile-editor userplus-profile-editor-view userplus_profile_edit"><?php _e('Edit Profile','plugin_slug');?></a>
 				<a class="userplus-profile-button-alt" href="<?php echo wp_logout_url();?>"><?php _e('Log Out','plugin_slug')?></a>
 			</div>
 		</div>
 	</div>
 	<div class="userplus-profile-right">
 	</div>
 	<div class="userplus-clear"></div>
</div>	
<div class="userplus-profile-content">
	<?php
		$userplus_field_order = get_post_meta( $atts['id'], 'userplus_field_order',true );
		$form_fields = get_post_meta( $atts['id'], 'fields',true );
		if( $userplus_field_order ){
			$fields_count = count( $userplus_field_order );
	 		for( $i=0;$i<$fields_count;$i++ ){
	 			$key = $userplus_field_order[$i];
	 			$array = $form_fields[$key];
	 			echo $userplus->field_functions->view_fields( $key, $array, $form_type , $user_id );
	 	}
	} 
	?>
</div></div>
