<?php
	$form_role = get_post_meta( $object->ID, 'userplus_form_role', true );
	$form_role = $form_role?$form_role:'subscriber';
?>
<div class="userplus-form-role">
<select id="userplus_form_role" name="userplus_form_role">
   <?php wp_dropdown_roles( $form_role ); ?>
</select>
</div>
