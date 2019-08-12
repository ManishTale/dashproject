<?php
/**
 * Login form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/global/form-login.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( is_user_logged_in() ) {
	return;
}

?>

<form class="woocommerce-form woocommerce-form-login login" method="post" <?php echo ( $hidden ) ? 'style="display:none;"' : ''; ?>>

	<?php do_action( 'woocommerce_login_form_start' ); ?>

	<?php echo ( $message ) ? wpautop( wptexturize( $message ) ) : ''; // @codingStandardsIgnoreLine ?>

	<div class="nameinfosec" style="margin-top:20px;">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group float-label is-active">
                            <input type="text" class="form-control" placeholder="Username or email" name="username" id="username" autocomplete="username">
                            <label class="label" for="username"><?php esc_html_e( 'Username or email', 'woocommerce' ); ?></label>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group float-label is-active">
                            <input type="password" class="form-control" placeholder="Password" name="password" id="password" autocomplete="current-password" >
                            <label class="label" for="password"><?php esc_html_e( 'Password', 'woocommerce' ); ?></label>
                          </div>
                        </div>
                      </div>
					  <div class="row">
	<div class="col-sm-6">
		<?php wp_nonce_field( 'woocommerce-login', 'woocommerce-login-nonce' ); ?>
		
			<input class="woocommerce-form__input woocommerce-form__input-checkbox styled-checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever" /> <label for="rememberme"><?php esc_html_e( 'Remember me', 'woocommerce' ); ?></label>
		
		</div>
			<div class="col-sm-6">
			
		<a href="<?php echo esc_url( wp_lostpassword_url() ); ?>"><?php esc_html_e( 'Lost your password?', 'woocommerce' ); ?></a>
	
			</div>
			</div>
                    </div>
	<!--p class="form-row form-row-first float-label">
	<div class="form-group float-label  is-active"> 
		
		<input type="text" class="form-control input-text"  placeholder="Last Name" name="username" id="username" autocomplete="username" />
		<label for="username" class="label"><?php //esc_html_e( 'Username or email', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
	</div>
	
	
						  
	<p class="form-row form-row-last">
		<label for="password"><?php //esc_html_e( 'Password', 'woocommerce' ); ?>&nbsp;<span class="required">*</span></label>
		<input class="input-text" type="password" name="password" id="password" autocomplete="current-password" />
	</p>-->
	
	<?php do_action( 'woocommerce_login_form' ); ?>

		<div class="form-row">
		<button type="submit" class="button btn btn-primary" name="login" value="<?php esc_attr_e( 'Login', 'woocommerce' ); ?>"><?php esc_html_e( 'Login', 'woocommerce' ); ?></button>
		<input type="hidden" name="redirect" value="<?php echo esc_url( $redirect ) ?>" />
		
	</div>
	<br /><br />

	<div class="clear"></div>

	<?php do_action( 'woocommerce_login_form_end' ); ?>

</form>
