<?php
/**
 * The template for displaying product content within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.4.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

// Ensure visibility.
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}
?>

<div class="singleproduct" <?php wc_product_class(); ?>>

	<?php
	/**
	 * Hook: woocommerce_before_shop_loop_item.
	 *
	 * @hooked woocommerce_template_loop_product_link_open - 10
	 */
	do_action( 'woocommerce_before_shop_loop_item' );

	/**
	 * Hook: woocommerce_before_shop_loop_item_title.
	 *
	 * @hooked woocommerce_show_product_loop_sale_flash - 10
	 * @hooked woocommerce_template_loop_product_thumbnail - 10
	 */
	
	?>
	
	<div class="product-img">
	<?php
	do_action( 'woocommerce_before_shop_loop_item_title' );


	/**
	 * Hook: woocommerce_shop_loop_item_title.
	 *
	 * @hooked woocommerce_template_loop_product_title - 10
	 */?>
	 <div class="actions">
	 <?php 
	 if (is_product_category('Create'))
	 {
		echo '<a href="'.get_home_url().'/design-your-own/?product_id='.$product->id.'" class="button btn btn-primary btn-block">Customize Product</a>';
		//echo '<a href="'.get_home_url().'/?add-to-cart='.$product->id.'/" data-quantity="1" class="button btn btn-primary btn-block"><span class="icon fa fa-shopping-basket"></span> Add to Cart</a>';
		//echo '<a href="'.get_home_url().'/product/'.$product->slug.'/" class="button btn btn-primary btn-block">View Product</a>';
	 }
	 else
	 {
	// echo '<a href="'.get_home_url().'/?add-to-cart='.$product->id.'/" data-quantity="1" class="button btn btn-primary btn-block"><span class="icon fa fa-shopping-basket"></span> Add to Cart</a>';
	echo '<a href="'.get_home_url().'/product/'.$product->slug.'/" class="button btn btn-primary btn-block">View Product</a>';
    }
	 // echo apply_filters( 'woocommerce_loop_add_to_cart_link', // WPCS: XSS ok.
	// 	sprintf( '<a href="%s" data-quantity="%s" class="%s btn btn-primary btn-block" %s><span class="icon fa fa-shopping-basket"></span> Add to Cart</a>',
	// 		esc_url( $product->add_to_cart_url() ),
	// 		esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
	// 		esc_attr( isset( $args['class'] ) ? $args['class'] : 'button' ),
	// 		isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
	// 		esc_html( $product->add_to_cart_text() )
	// 	),
	// $product, $args );?>
        
		<?php //echo do_shortcode('[yith_wcwl_add_to_wishlist]');?>
     </div>
					
	</div>

	
<div class="product-content">
<?php
	 do_action( 'woocommerce_shop_loop_item_title' );	

	/**
	 * Hook: woocommerce_after_shop_loop_item_title.
	 *
	 * @hooked woocommerce_template_loop_rating - 5
	 * @hooked woocommerce_template_loop_price - 10
	 */
	?><span class="productlist-price"><?php do_action( 'woocommerce_after_shop_loop_item_title' );?></span></div>

	
<?php
//do_action('woocommerce_template_loop_add_to_cart');
	/**
	 * Hook: woocommerce_after_shop_loop_item.
	 *
	 * @hooked woocommerce_template_loop_product_link_close - 5
	 * @hooked woocommerce_template_loop_add_to_cart - 10
	 */
	do_action( 'woocommerce_after_shop_loop_item' );
	?>
</div>

