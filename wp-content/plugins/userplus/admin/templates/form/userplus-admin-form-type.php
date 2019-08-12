<?php
	$form_head = get_post_meta( $object->ID, 'userplus_form_type', true );
	$form_head = $form_head?$form_head:'register';
?>
<div class="userplus-form-type ">
<div class="form_head"><input type = "radio" name ="userplus_form_type" value = "register" <?php checked( 'register', $form_head );?>> <?php _e( 'Registration', 'userplus' )?></div>
<div class="form_head"><input type = "radio" name ="userplus_form_type" value = "login" <?php checked( 'login', $form_head );?>> <?php _e( 'Login', 'userplus' )?></div>
<div class="form_head"><input type = "radio" name ="userplus_form_type" value = "profile" <?php checked( 'profile', $form_head );?>> <?php _e( 'Profile', 'userplus' )?></div>
</div>
