<?php
/**
 * Order details
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/order/order-details.php.
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
 * @version 3.5.2
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
if ( ! $order = wc_get_order( $order_id ) ) {
	return;
}

$order_items           = $order->get_items( apply_filters( 'woocommerce_purchase_order_item_types', 'line_item' ) );
$show_purchase_note    = $order->has_status( apply_filters( 'woocommerce_purchase_note_order_statuses', array( 'completed', 'processing' ) ) );
$show_customer_details = is_user_logged_in() && $order->get_user_id() === get_current_user_id();
$downloads             = $order->get_downloadable_items();
$show_downloads        = $order->has_downloadable_item() && $order->is_download_permitted();

if ( $show_downloads ) {
	wc_get_template( 'order/order-downloads.php', array( 'downloads' => $downloads, 'show_title' => true ) );
}
?>
</div></div>

 <div class="col-50 ">

	<?php do_action( 'woocommerce_order_details_before_order_table', $order ); ?>

	<h3 class="orderdetail-top woocommerce-order-details__title"><?php _e( 'Order details', 'woocommerce' ); ?></h3>

<!--	<table class="woocommerce-table woocommerce-table--order-details shop_table order_table">-->
<table cellpadding="0" width="100%" class="order_table" cellspacing="0" border="0"><tbody>
		<tbody>
			<tr style="border-bottom:solid 1px #e2e2e2;">
				<td class="order_tableb" width="60%"><b style="font-size: 16px;"><?php _e( 'Product', 'woocommerce' ); ?></b></td>
				<td width="40%"><b style="font-size: 16px;"><?php _e( 'Total', 'woocommerce' ); ?></td>
			</tr>
		
			<?php
			do_action( 'woocommerce_order_details_before_order_table_items', $order );

			foreach ( $order_items as $item_id => $item ) {
				$product = $item->get_product();

				wc_get_template( 'order/order-details-item.php', array(
					'order'			     => $order,
					'item_id'		     => $item_id,
					'item'			     => $item,
					'show_purchase_note' => $show_purchase_note,
					'purchase_note'	     => $product ? $product->get_purchase_note() : '',
					'product'	         => $product,
				) );
			}

			do_action( 'woocommerce_order_details_after_order_table_items', $order );
			?>
			<?php
				foreach ( $order->get_order_item_totals() as $key => $total ) {
					?>
					<tr style="border">
						<td scope="row" class="order_tablea order_tableb" width="60%"><?php echo $total['label']; ?></td>
						<td class="order_tablea" width="40%"><?php echo ( 'payment_method' === $key ) ? esc_html( $total['value'] ) : $total['value']; ?></td>
					</tr>
					<?php
				}
			?>
			<?php if ( $order->get_customer_note() ) : ?>
				<tr>
					<th><?php _e( 'Note:', 'woocommerce' ); ?></th>
					<td><?php echo wptexturize( $order->get_customer_note() ); ?></td>
				</tr>
			<?php endif; ?>
		</tbody>
	</table>

	<?php do_action( 'woocommerce_order_details_after_order_table', $order ); ?>
</div></div></div>
<?php
if ( $show_customer_details ) {
	wc_get_template( 'order/order-details-customer.php', array( 'order' => $order ) );
}
