<?php
/**
 * Orders
 *
 * Shows orders on the account page.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/orders.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 3.2.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<h3>My Orders</h3>
<div class="myorderlist">
	<?php
	$my_orders_columns = apply_filters( 'woocommerce_my_account_my_orders_columns', array(
		'order-number'  => __( 'Order', 'woocommerce' ),
		'order-date'    => __( 'Date', 'woocommerce' ),
		'order-status'  => __( 'Status', 'woocommerce' ),
		'order-total'   => __( 'Total', 'woocommerce' ),
		'order-actions' => '&nbsp;',
	) );

	$customer_orders = get_posts( apply_filters( 'woocommerce_my_account_my_orders_query', array(
		'numberposts' => $order_count,
		'meta_key'    => '_customer_user',
		'meta_value'  => get_current_user_id(),
		'post_type'   => wc_get_order_types( 'view-orders' ),
		'post_status' => array_keys( wc_get_order_statuses() ),
	) ) );

	if ( $customer_orders ) : 
		foreach ( $customer_orders as $customer_order ) :
					$order      = wc_get_order( $customer_order );
					$item_count = $order->get_item_count();
	?>

	<div class="singleorder">
	<div class="orderhead">
	  <div class="orderid">
		<span><?php echo _x( '#', 'hash before order number', 'woocommerce' ) . $order->get_order_number(); ?></span>
	  </div>
	  <div class="orderopt">
		<a href="#"><span class="icon fa fa-question-circle"></span> Need Help</a>
		<a href="<?php echo get_home_url().'/track-order/'?>"><span class="icon fa fa-map-marker"></span> Track</a>
	  </div>
	</div>
	<div class="orderdetail">
	  <div class="itemimg-name">
		<!--<div class="productimg-list">
		  <img src="<?php //echo get_template_directory_uri(); ?>/img/my-order-img.jpg">
		</div>-->
		<div class="productname-list">
		  <h4><?php echo _x( '#', 'hash before order number', 'woocommerce' ) . $order->get_order_number(); ?></h4>
		  <!--<h5>For kids &amp; adults</h5>-->
		  <!--<span>
			<span class="icon fa fa-star"></span>
			<span class="icon fa fa-star"></span>
			<span class="icon fa fa-star"></span>
			<span class="icon fa fa-star"></span>
			<span class="icon fa fa-star"></span>
			(150)
		  </span>-->
		</div>
	  </div>
	  <div class="itemprice-offer">
		<p class="f-medium"><?php printf( _n( '%1$s for %2$s item', '%1$s for %2$s items', $item_count, 'woocommerce' ), $order->get_formatted_order_total(), $item_count );?></p>
	   <!-- <span><span class="col-primary">OFFERS:</span> 1</span>-->
	  </div>
	  <div class="delivery-return-detail">
		<p><?php echo esc_html( wc_get_order_status_name( $order->get_status() ) ); ?></p>
		<!-- <span>Return policy valid till Dec 18th '18</span> -->
		<a target="_blank" href="<?php echo get_home_url().'/my-account/print-order/'.$order->get_order_number();?>" class="btn btn-sm btn-secondary-line"><i class="zmdi zmdi-rotate-ccw zmdi-hc-fw"></i>Print</a>
	  </div>
	</div>
	<hr>
	<div class="orderbottom">
	  <p>Ordered On <?php echo esc_html( wc_format_datetime( $order->get_date_created() ) ); ?></p>
	  <p><span class="col-gray">Order Total</span> <?php printf( _n( '%1$s for %2$s item', '%1$s for %2$s items', $item_count, 'woocommerce' ), $order->get_formatted_order_total(), $item_count );?></p>
	</div>
  </div>
	
<?php endforeach; 
  endif; 
?>

</div>
