<?php
/**
 * Single variation cart button
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.4.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

?>
<div class="woocommerce-variation-add-to-cart variations_button">
	<?php do_action( 'woocommerce_before_add_to_cart_button' ); ?>

	<?php
	do_action( 'woocommerce_before_add_to_cart_quantity' );

	woocommerce_quantity_input( array(
		'min_value'   => apply_filters( 'woocommerce_quantity_input_min', $product->get_min_purchase_quantity(), $product ),
		'max_value'   => apply_filters( 'woocommerce_quantity_input_max', $product->get_max_purchase_quantity(), $product ),
		'input_value' => isset( $_POST['quantity'] ) ? wc_stock_amount( wp_unslash( $_POST['quantity'] ) ) : $product->get_min_purchase_quantity(), // WPCS: CSRF ok, input var ok.
	) );

	do_action( 'woocommerce_after_add_to_cart_quantity' );
	?>

<button type="submit" class="single_add_to_cart_button button alt button btn btn-primary btn-block col-md-5" style="margin-right:20px;"><span class="icon fa fa-shopping-basket"></span> <?php echo esc_html( $product->single_add_to_cart_text() ); ?></button>
 
	<?php do_action( 'woocommerce_after_add_to_cart_button' ); ?>
 
	<input type="hidden" name="add-to-cart" value="<?php echo absint( $product->get_id() ); ?>" />
	<input type="hidden" name="product_id" value="<?php echo absint( $product->get_id() ); ?>" />
	<input type="hidden" name="variation_id" class="variation_id" value="0" />
	
	<div class="wishlistproduct" style="margin-right:20px;">
                   <?php   echo '<a href='.get_home_url().'/product/'.$product->slug.'/?add_to_wishlist='.$product->id.'>';?>
                      <span class="icon fa fa-heart-o"></span>
                      <span>Wishlist</span>
                    </a>
				
                  </div>
				  <!-- <div class="shareproduct">
                    <a href="">
                      <span><img src="<?php echo get_template_directory_uri(); ?>/img/productdetail/share.png" alt="Sahre"></span>
                      <span>Share</span>
                    </a>
                  </div> -->
</div>


