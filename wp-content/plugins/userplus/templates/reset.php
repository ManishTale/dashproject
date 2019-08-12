<div class="plugin_slug" data-form_id = "reset" >

	<div class="plugin_slug-form">
	
		<form method="post" action="">
			<div data-key="user_pass" class="userplus-field">
				<div class="userplus-label">
					<label for="password"><?php _e('Password', USERPLUS_PLUGIN_SLUG);?></label>
				</div>
				<div class="userplus-element">
					<input type="password" name="user_pass" data-is_required=1>
				<div class="userplus-clear"></div>
				</div>
			</div>
			<div class="userplus-clear"></div>
			<div class="userplus-field">
			<div class="userplus-label">
			<label for="confirm_pass"><?php _e('confirm Password', USERPLUS_PLUGIN_SLUG);?></label>
			</div>
			<div class="userplus-element">
			<input type="password" data-is_required="1" autocomplete="off" id="confirm_pass" name="confirm_pass">
			<div class="userplus-clear"></div>
			</div>
			</div>
			<div class="userplus-clear"></div>
			<div class="userplus-field">
			<div class="userplus-label">
			<label for="key"><?php _e('Secret Key', USERPLUS_PLUGIN_SLUG);?></label>
			</div>
			<div class="userplus-element">
			<input type="text" data-is_required="1" autocomplete="off" id="secretkey" name="secretkey">
			<div class="userplus-clear"></div>
			</div>
			</div>
			<div class="userplus-clear"></div>
			<input type="submit" value="<?php _e('Submit',USERPLUS_PLUGIN_SLUG);?>" class="userplus-button" id="userplus-forgot-submit">
			<div id="userplus-loader"><img src="<?php echo USERPLUS_URL.'assets/images/loader.gif';?>"></div>
			<div id="userplus-ajax-msg"></div>
		</form>
	</div>
</div>		