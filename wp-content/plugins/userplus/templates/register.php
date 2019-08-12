<div class="plugin_slug userplus-profile-container" data-form_id = "<?php echo $form_type;?>" data-mode="register" >
<div class="userplus-profile-head">
 	<div class="userplus-profile-left">
 		<?php _e('Register',USERPLUS_PLUGIN_SLUG);?>
 	</div>
 	<div class="userplus-profile-right">
 	</div>
 	<div class="userplus-clear"></div>
</div>	
<div class="userplus-profile-content">
	<div class="plugin_slug-form">
	
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
	 	echo $userplus->field_functions->edit_fields( $key, $array );
	 }
}

		$form_role = get_post_meta( $atts['id'], 'userplus_form_role', true );
		$form_role = $form_role?$form_role:'subscriber';
		
		$form_autologin = get_post_meta( $atts['id'], 'userplus_form_autologin', true );
		$form_autologin = $form_autologin?$form_autologin:1;
		
?>
		<input type="hidden" name="register_redirect" value="<?php echo isset($atts['login_redirect'])?$atts['login_redirect']:'';?>">
		<input type="hidden" name="role" value="<?php echo $form_role; ?>">
		<input type="hidden" name="userplus-form-autologin" value="<?php echo $form_autologin; ?>">
		<br>
		<button type="submit" value="" class="userplus-button"><?php _e('Register',USERPLUS_PLUGIN_SLUG);?></button>
		<button class="userplus_secondary_button userplus-button" type="button" value="" class="userplus-button" data-href="<?php echo $userplus->api->permalink(0,'login');?>"><?php _e('Login',USERPLUS_PLUGIN_SLUG);?></button>
		<div id="userplus-loader"><img src="<?php echo USERPLUS_URL.'assets/images/loader.gif';?>"></div>
		<div id="userplus-ajax-msg"></div>

		</form>
	
	</div>
	</div>
</div>
