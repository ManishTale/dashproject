<?php
/**
 * Simple product add to cart
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/add-to-cart/simple.php.
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

global $product;

if ( ! $product->is_purchasable() ) {
	return;
}

echo wc_get_stock_html( $product ); // WPCS: XSS ok.

if ( $product->is_in_stock() ) : ?>

	<?php do_action( 'woocommerce_before_add_to_cart_form' ); ?>

	<form class="cart" action="<?php echo esc_url( apply_filters( 'woocommerce_add_to_cart_form_action', $product->get_permalink() ) ); ?>" method="post" enctype='multipart/form-data'>
		<?php do_action( 'woocommerce_before_add_to_cart_button' ); ?>
		<div class="changeproduct">
                  <!-- <a href="<?php echo get_permalink( wc_get_page_id( 'shop' ) ); ?>" class="btn btn-lg btn-line btn-block">Change Product</a>   -->
                </div>
				<style>
				a.button:hover {
				color: #fff !important;
				}
				</style>
		<div class="changeproduct">		
		<?php echo '<a href="'.get_home_url().'/design-your-own/?product_id='.$product->id.'" class="button btn btn-lg btn-line btn-block" style="color:#000;  ">Customize Product</a>';?>
		</div>
		<div class="pricedetailproduct d-block text-center"><div class="woocommerce-variation-price"><span>Price: <span class="f-sbold col-primary"><?php echo $product->get_price_html();?></div></span></span>
</div>
		<?php
		do_action( 'woocommerce_before_add_to_cart_quantity' );

		woocommerce_quantity_input( array(
			'min_value'   => apply_filters( 'woocommerce_quantity_input_min', $product->get_min_purchase_quantity(), $product ),
			'max_value'   => apply_filters( 'woocommerce_quantity_input_max', $product->get_max_purchase_quantity(), $product ),
			'input_value' => isset( $_POST['quantity'] ) ? wc_stock_amount( wp_unslash( $_POST['quantity'] ) ) : $product->get_min_purchase_quantity(), // WPCS: CSRF ok, input var ok.
		) );

		do_action( 'woocommerce_after_add_to_cart_quantity' );
		?>
		<button type="submit" name="add-to-cart" value="<?php echo esc_attr( $product->get_id() ); ?>" class="btn btn-lg btn-primary"><span class="icon fa fa-shopping-basket"></span><?php echo esc_html( $product->single_add_to_cart_text() ); ?></button>
		<div class="wishlistproduct" style="margin-left:20px;margin-right:20px;">
                   <?php   echo '<a href='.get_home_url().'/product/'.$product->slug.'/?add_to_wishlist='.$product->id.'>';?>
                      <span class="icon fa fa-heart-o"></span>
                      <span>Wishlist</span>
                    </a>
				
                  </div>
				  <div class="shareproduct">
                    <a href="">
                      <span><img src="<?php echo get_template_directory_uri(); ?>/img/productdetail/share.png" alt="Sahre"></span>
                      <span>Share</span>
                    </a>
                  </div>
</div>



<!-- <div id="jquery-script-menu">
<div class="jquery-script-center">
<div class="jquery-script-ads">
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script></div>
<div class="jquery-script-clear"></div>
</div>
</div>

<div class="socialCircle-container">
  <div class="socialCircle-item"><i class="fa fa-google-plus"></i></div>
  <div class="socialCircle-item"><i class="fa fa-github"></i></div>
  <div class="socialCircle-item"><i class="fa fa-linkedin"></i></div>
  <div class="socialCircle-item"><i class="fa fa-facebook"></i></div>
  <div class="socialCircle-item"><i class="fa fa-twitter"></i></div>
  <div class="socialCircle-item"><i class="fa fa-pinterest"></i></div>
  <div class="socialCircle-center closed"><i class="fa fa-share-alt"></i></div>
</div> -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script> 
<script src="<?php echo get_template_directory_uri(); ?>/js/socialCircle.js"></script> 
<script type="text/javascript">
$( ".socialCircle-center" ).socialCircle({
	rotate: 0,
	radius:200,
	circleSize: 2,
	speed:500
});
</script>


		<?php do_action( 'woocommerce_after_add_to_cart_button' ); ?>
	</form>

	<?php do_action( 'woocommerce_after_add_to_cart_form' ); ?>

<?php endif; ?>
<style>
a.button.e-custom-product.btn.btn-primary {
	display: none;
	}
	</style>