<?php
/**
 * Product quantity inputs
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/global/quantity-input.php.
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
global $post;

?>
<div class="detailproductaction d-flex justify-content-between align-items-center">

<?php if ( $max_value && $min_value === $max_value ) {
	?>



	<div class="qty-product">
		<input type="hidden" class="qtyprice" value="<?php echo $product->price;?>">
		<input type="hidden" id="<?php echo esc_attr( $input_id ); ?>" class="qty" name="<?php echo esc_attr( $input_name ); ?>" value="<?php echo esc_attr( $min_value ); ?>" />

	<?php
} else {
	echo '<div class="qty-product">';
	/* translators: %s: Quantity. */
	$labelledby = ! empty( $args['product_name'] ) ? sprintf( __( '%s quantity', 'woocommerce' ), strip_tags( $args['product_name'] ) ) : '';
	if( $post->ID == '100')
	{
	?>

                    <label>Qty:</label>
                    <span class="qty-input">
					<div class="wac-qty-button"><b><a href="" class="wac-btn-sub">-</a></b></div>

					  <input
			type="text"
			id="<?php echo esc_attr( $input_id ); ?>"
			class="input-text qty text"
			step="<?php echo esc_attr( $step ); ?>"
			min="<?php echo esc_attr( $min_value ); ?>"
			max="<?php echo esc_attr( 0 < $max_value ? $max_value : '' ); ?>"
			name="<?php echo esc_attr( $input_name ); ?>"
			value="<?php echo esc_attr( $input_value ); ?>"
			title="<?php echo esc_attr_x( 'Qty', 'Product quantity input tooltip', 'woocommerce' ); ?>"
			size="4"
			pattern="<?php echo esc_attr( $pattern ); ?>"
			inputmode="<?php echo esc_attr( $inputmode ); ?>"
			aria-labelledby="<?php echo esc_attr( $labelledby ); ?>" />
			<div class="wac-qty-button"><b><a href="" class="wac-btn-inc">+</a></b></div>
                    </span>&nbsp;&nbsp;&nbsp;&nbsp;

				
				  
	<?php
}else{
?>
 <label>Qty:</label>
                    <span class="qty-input">
                      <i class="less">-</i>
					  <input
			type="text"
			id="<?php echo esc_attr( $input_id ); ?>"
			class="input-text qty text"
			step="<?php echo esc_attr( $step ); ?>"
			min="<?php echo esc_attr( $min_value ); ?>"
			max="<?php echo esc_attr( 0 < $max_value ? $max_value : '' ); ?>"
			name="<?php echo esc_attr( $input_name ); ?>"
			value="<?php echo esc_attr( $input_value ); ?>"
			title="<?php echo esc_attr_x( 'Qty', 'Product quantity input tooltip', 'woocommerce' ); ?>"
			size="4"
			pattern="<?php echo esc_attr( $pattern ); ?>"
			inputmode="<?php echo esc_attr( $inputmode ); ?>"
			aria-labelledby="<?php echo esc_attr( $labelledby ); ?>" />
                      <i class="more">+</i>
                    </span>&nbsp;&nbsp;&nbsp;&nbsp;
<?php

} }?>
</div>
<style>.rightboxdetail .yith-wcwl-add-to-wishlist{display:none;} .reset_variations{display:none;}.stock.in-stock{display:none;}.product_meta{display:none;}</style>


