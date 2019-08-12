<?php
/**
 * Single variation display
 *
 * This is a javascript-based template for single variations (see https://codex.wordpress.org/Javascript_Reference/wp.template).
 * The values will be dynamically replaced after selecting attributes.
 *
 * @see 	https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 2.5.0
 */

defined( 'ABSPATH' ) || exit;

?>
<script type="text/template" id="tmpl-variation-template">
	<div class="woocommerce-variation-description">{{{ data.variation.variation_description }}}</div>
	<div class="changeproduct">
                  <a href="<?php echo get_permalink( wc_get_page_id( 'shop' ) ); ?>" class="btn btn-lg btn-line btn-block">Change Product</a>  
                </div>
	<div class="pricedetailproduct d-block text-center"><div class="woocommerce-variation-price"><span>Price: <span class="f-sbold col-primary">{{{ data.variation.price_html }}}</div></span></span>
                </div>
	<div class="woocommerce-variation-availability">{{{ data.variation.availability_html }}}</div>
</script>
<script type="text/template" id="tmpl-unavailable-variation-template">
	<p><?php _e( 'Sorry, this product is unavailable. Please choose a different combination.', 'woocommerce' ); ?></p>
</script>
