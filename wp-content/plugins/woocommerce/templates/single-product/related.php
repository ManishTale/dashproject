<?php
/**
 * Related Products
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/related.php.
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
 * @version     3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<style>.productlist-price{display:none;}.singleproduct{width:auto !important;}</style>


<?php
if ( $related_products ) : ?>

	<!-- <section class="related products"> -->

	<section class="moreproduct">
        <div class="container">
          <div class="section-title text-center mb-30">

		<h3 class="col-primary wow fadeInUp animated animated" style="visibility: visible;"><?php esc_html_e( 'YOU MAY ALSO LIKE', 'woocommerce' ); ?></h3>

		
		<?php woocommerce_product_loop_start(); ?>
		<div class="productslider">
<div class="swiper-container">
    <div class="swiper-wrapper">
			<?php foreach ( $related_products as $related_product ) : ?>
			<div class="swiper-slide">
				<?php
					 $post_object = get_post( $related_product->get_id() );
					setup_postdata( $GLOBALS['post'] =& $post_object );
					
					wc_get_template_part( 'content', 'product' ); ?>
				</div>
			<?php endforeach; ?>
</div></div>
<div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
			  </div>
	
	</div></div>		<?php woocommerce_product_loop_end(); ?>
</div>
</div>
	</section>

<?php endif; ?>

<div class="clearfix">&nbsp;</div>
<?php wp_reset_postdata();
