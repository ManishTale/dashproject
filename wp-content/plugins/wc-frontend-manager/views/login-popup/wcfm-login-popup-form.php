<?php
global $WCFM, $WCFMu;

?>
<form id="wcfm_login_popup_form" class="wcfm_popup_wrapper">
	<div style="margin-bottom: 15px;"><h2 style="float: none;"><?php _e( 'Login', 'wc-frontend-manager-ultimate' ); ?></h2></div>
	
	<table>
		<tbody>
		
		  <?php do_action( 'wcfm_product_login_popup_begin' ); ?>
		  
			<tr>
				<td>
					<p class="wcfm_login_popup_form_label wcfm_popup_label"><?php _e( 'Username', 'wc-frontend-manager-ultimate' ); ?></p>
					<input type="text" class="wcfm_popup_input wcfm_login_popup_username" name="wcfm_login_popup_username" value="" />
				</td>
			</tr>
			
			<tr>
				<td>
					<p class="wcfm_login_popup_form_label wcfm_popup_label"><?php _e( 'Password', 'wc-frontend-manager-ultimate' ); ?></p>
					<input type="password" class="wcfm_popup_input wcfm_login_popup_password" name="wcfm_login_popup_password" value="" />
				</td>
			</tr>
			
			<?php do_action( 'wcfm_product_login_popup_end' ); ?>
			
		</tbody>
	</table>
	<div class="wcfm-message" tabindex="-1"></div>
	<input type="button" class="wcfm_login_popup_button wcfm_popup_button wcfm_submit_button" id="wcfm_login_popup_button" value="<?php _e( 'Login', 'wc-frontend-manager-ultimate' ); ?>" />
	
	<div class="wcfm_clearfix"></div>
</form>
