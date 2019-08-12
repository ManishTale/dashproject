<?php
/**
 * Order tracking form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/order/form-tracking.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.4.0
 */

defined( 'ABSPATH' ) || exit;

global $post;
?>

          
<form action="<?php echo esc_url( get_permalink( $post->ID ) ); ?>" method="post" class="track_order">
<section class="ordertrackpage">
        <div class="container">
<div class="ordertrackdiv">
            <img src="<?php echo get_template_directory_uri(); ?>/img/order-track.png">
            <div class="tracknumber">
			
	<label for="orderid"><?php esc_html_e( 'Order ID', 'woocommerce' ); ?></label><div class="form-group form-inline"> <input class="form-control input-text" type="text" name="orderid" id="orderid" value="<?php echo isset( $_REQUEST['orderid'] ) ? esc_attr( wp_unslash( $_REQUEST['orderid'] ) ) : ''; ?>" placeholder="<?php esc_attr_e( 'Enter Tracking Number Here....', 'woocommerce' ); ?>" /><?php // @codingStandardsIgnoreLine ?>
	<label for="order_email"><?php esc_html_e( 'Billing email', 'woocommerce' ); ?></label> <input class="form-control input-text" type="text" name="order_email" id="order_email" value="<?php echo isset( $_REQUEST['order_email'] ) ? esc_attr( wp_unslash( $_REQUEST['order_email'] ) ) : ''; ?>" placeholder="<?php esc_attr_e( 'Email you used during checkout.', 'woocommerce' ); ?>" /><?php // @codingStandardsIgnoreLine ?>
	<div class="clear"></div>

	<button type="submit" class="btn btn-primary btn-sm" name="track" value="<?php esc_attr_e( 'Submit', 'woocommerce' ); ?>"><?php esc_html_e( 'Submit', 'woocommerce' ); ?></button></div>
	<?php wp_nonce_field( 'woocommerce-order_tracking', 'woocommerce-order-tracking-nonce' ); ?>
	</div>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
          </div>
        </div>
      </section>
</form>
            
            