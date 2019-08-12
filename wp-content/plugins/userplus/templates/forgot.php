<div class="plugin_slug userplus-profile-container" data-form_id = "<?php echo $form_type;?>" data-mode="reset">
<div class="userplus-profile-head">
 	<div class="userplus-profile-left">
 		<?php _e('Forgot Password',USERPLUS_PLUGIN_SLUG);?>
 	</div>
 	<div class="userplus-profile-right">
 	</div>
 	<div class="userplus-clear"></div>
</div>
<div class="plugin_slug" data-form_id = "forgot" >

	<div class="plugin_slug-form">
	
		<form method="post" action="">
			<div class='userplus-field' data-key="user_email">
				<div class='userplus-label'>
					<label for='$key'><?php _e( 'Enter Email', USERPLUS_PLUGIN_SLUG );?></label>
				 	<span class='userplus-required'>*</span>
				</div>
				<div class='userplus-element'>
					<input type="text" name="user_email" id="user_email" data-is_required = 1 />
				</div>
			</div><br><br>
			<input type="submit" value="<?php _e('Submit',USERPLUS_PLUGIN_SLUG);?>" class="userplus-button" id="userplus-forgot-submit">
			<div id="userplus-loader"><img src="<?php echo USERPLUS_URL.'assets/images/loader.gif';?>"></div>
			<div id="userplus-ajax-msg"></div><br>
		</form>
	</div>
</div>	</div>	
