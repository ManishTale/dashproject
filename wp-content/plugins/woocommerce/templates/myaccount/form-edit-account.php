<?php
/**
 * Edit account form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/form-edit-account.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.5.0
 */

defined( 'ABSPATH' ) || exit;?>


<?php
do_action( 'woocommerce_before_edit_account_form' ); ?>
<h3>Personal Information</h3>
<div class="information-tab">
<form class="woocommerce-EditAccountForm edit-account" action="" method="post" <?php do_action( 'woocommerce_edit_account_form_tag' ); ?> >

	<?php do_action( 'woocommerce_edit_account_form_start' ); ?>

	<!-- <p class="woocommerce-form-row woocommerce-form-row--first form-row form-row-first"> -->
	<div class="nameinfosec">
      <div class="row">
        <div class="col-sm-6">
            <div class="form-group float-label is-active">
		<label for="account_first_name"><?php esc_html_e( 'First name', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
		<input type="text" class="woocommerce-Input woocommerce-Input--text input-text form-control" name="account_first_name" id="account_first_name" autocomplete="given-name" value="<?php echo $current_user->user_firstname;?>" />
		</div></div>
	<!-- </p> -->
	<!-- <p class="woocommerce-form-row woocommerce-form-row--last form-row form-row-last"> -->
	<div class="col-sm-6">
    <div class="form-group float-label is-active">
		<label for="account_last_name"><?php esc_html_e( 'Last name', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
		<input type="text" class="woocommerce-Input woocommerce-Input--text input-text form-control" name="account_last_name" id="account_last_name" autocomplete="family-name" value="<?php echo $current_user->user_lastname; ?>" />
		</div></div></div></div>
	<!-- </p> -->
	<div class="clear"></div>

	<!-- <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"> -->
	<div class="mobnosec">
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group float-label is-active">
                            
		<label for="account_display_name"><?php esc_html_e( 'Display name', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
		<input type="text" class="woocommerce-Input woocommerce-Input--text input-text form-control" name="account_display_name" id="account_display_name" value="<?php echo $current_user->display_name;?>" /> <span><span style="font-size: 12px;
    font-weight: normal;"><?php esc_html_e( 'Display Name in your account', 'woocommerce' ); ?></span></span>
		</div>
    </div>
	<!-- </p> -->
	<div class="clear"></div>

	<!-- <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"> -->
	<div class="col-sm-6">
      <div class="form-group float-label is-active">
		<label for="account_email"><?php esc_html_e( 'Email address', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
		<input type="email" class="woocommerce-Input woocommerce-Input--email input-text form-control" name="account_email" id="account_email" autocomplete="email" value="<?php echo $current_user->user_email;?>" />
		</div>
      </div>
       </div>
      </div>
	<!-- </p> -->

	
	<div class="mailpasssec">
					<div class="row">
					 <div class="col-sm-12">
					 <hr />
		<h5><?php esc_html_e( 'Password change', 'woocommerce' ); ?></h5>
		</div>
			</div>
		<!-- <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"> -->
		<div class="mobnosec">
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group float-label is-active">
			<label for="password_current">Current password</label>
			<input type="password" onKeyUp="currentpassword();" class="form-control woocommerce-Input woocommerce-Input--password input-text" name="password_current" id="password_current" autocomplete="off" />
			<span style="font-size: 12px;
    font-weight: normal;"><?php esc_html_e( '(leave blank to leave unchanged)', 'woocommerce' ); ?>
			</div>
      </div>                  
						</div>
						<div id="current-paassword"></div>
						</div>
		<!-- </p> -->
		<!-- <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"> -->
		<div class="mobnosec">
				<div class="row">
				<div class="col-sm-6">
        <div class="form-group float-label is-active">
			<label for="password_1"><?php esc_html_e( 'New password', 'woocommerce' ); ?></label>
			<input type="password" onKeyUp="checkPasswordStrength(); validatePassword();"  class="form-control woocommerce-Input woocommerce-Input--password input-text" name="password_1" id="password_1" autocomplete="off" />
			<span style="font-size: 12px;
    font-weight: normal;"><?php esc_html_e( '(leave blank to leave unchanged)', 'woocommerce' ); ?>
			</div>
			<div id="password-strength-status"></div>
			<div id="password-match"></div>
      </div>
		<!-- </p> -->
		<!-- <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide"> -->
		<div class="col-sm-6">
      <div class="form-group float-label is-active">
			<label for="password_2"><?php esc_html_e( 'Confirm new password', 'woocommerce' ); ?></label>
			<input type="password" onKeyUp="conformpassword();" class="form-control woocommerce-Input woocommerce-Input--password input-text" name="password_2" id="password_2" autocomplete="off" />
			</div>
			<div id="password-conform"></div>
        </div>
				
				</div>
					  </div>
              </div>
							</div>
              
		<!-- </p> -->
	
	<!-- <div class="clear"></div> -->

	<?php do_action( 'woocommerce_edit_account_form' ); ?>

	<p>
		<?php wp_nonce_field( 'save_account_details', 'save-account-details-nonce' ); ?>
		<button type="submit" class="woocommerce-Button button btn btn-primary" name="save_account_details" value="<?php esc_attr_e( 'Save changes', 'woocommerce' ); ?>"><?php esc_html_e( 'Save changes', 'woocommerce' ); ?></button>
		<input type="hidden" name="action" value="save_account_details" />
		
			
	</p>

	<?php do_action( 'woocommerce_edit_account_form_end' ); ?>
</form>

<?php do_action( 'woocommerce_after_edit_account_form' ); ?>

<style>
	  div#password-strength-status {
    font-size: 12px;
    margin-top: -12px;
}
div#password-conform{
	font-size: 12px;
    margin-top: -12px; 
}
button.woocommerce-Button.button.btn.btn-primary {
    margin-top: -5px;
}
	</style>