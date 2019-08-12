<div class="plugin_slug userplus-profile-container" data-form_id="<?php echo $atts['id'];?>"  data-mode="login">
<div class="userplus-profile-head">
 	<div class="userplus-profile-left">
 		<?php _e('Login',USERPLUS_PLUGIN_SLUG);?>
 	</div>
 	<div class="userplus-profile-right">
 	</div>
 	<div class="userplus-clear"></div>
</div>	
<div class="userplus-profile-content">
	<div class="plugin_slug-form">
	<?php if( isset( $atts['msg_type'] ) && $atts['msg_type'] == 'admin_approve' ){?>
	<div class="plugin_slug-message"><?php _e('Your account is awaiting admin approval',USERPLUS_PLUGIN_SLUG);?></div>
	<?php }else if( isset( $atts['msg_type'] ) &&  $atts['msg_type'] == 'email_approve' ){?>
	<div class="plugin_slug-message"><?php _e('Your account is awaiting email verification',USERPLUS_PLUGIN_SLUG);?></div>
	<?php }?>
	
		<form method="post" action="">
<?php


global $userplus;
$userplus_field_order = get_post_meta( $atts['id'], 'userplus_field_order',true );
$form_fields = get_post_meta( $atts['id'], 'fields',true );;

if( $userplus_field_order ){
	$fields_count = count( $userplus_field_order );
	 for( $i=0;$i<$fields_count;$i++ ){
	 	$key = $userplus_field_order[$i];
	 	$array = $form_fields[$key];
	 	echo $userplus->field_functions->edit_fields( $key, $array, $form_type );
	 }
} 
?>
		<input type="hidden" name="login_redirect" value="<?php echo $atts['login_redirect'];?>">
		<br>
		<button type="submit" value="" class="userplus-button"><?php _e('Login',USERPLUS_PLUGIN_SLUG);?></button>
		<button class="userplus_secondary_button userplus-button" type="button" value="" class="userplus-button" data-href="<?php echo $userplus->api->permalink(0,'register');?>"><?php _e('Register',USERPLUS_PLUGIN_SLUG);?></button>
		<div id="userplus-loader"><img src="<?php echo USERPLUS_URL.'assets/images/loader.gif';?>"></div>
		<div id="userplus-ajax-msg"></div>
		<div class="userplus-forgot-link"><a href="?forgot=true"><?php _e( 'Forgot Password ?', USERPLUS_PLUGIN_SLUG );?></a></div>
		</form>
</div>		
	
	</div>
	
</div>
