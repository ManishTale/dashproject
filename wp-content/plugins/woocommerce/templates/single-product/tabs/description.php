  `<?php
/**
 * Description tab
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/tabs/description.php.
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
 * @version     2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $post;
global $product;

$heading = esc_html( apply_filters( 'woocommerce_product_description_heading', __( 'Description', 'woocommerce' ) ) );
?>
<?php if ( $heading ) : ?>
<h4 class="f-sbold"><?php echo $heading; ?></h4>
<?php endif; ?>
<div class="container">
<div class="row">

<div class='<?php if(get_field('product_size')){ ?>col-sm-5 <?php }else{ echo 'col-sm-12'; }?>' style="padding-left:0px !important;">
<?php 
echo '<h5 class="f-sbold">'.$product->name.'</h5>';
the_content(); ?>
</div>
<?php if(get_field('product_size')){ ?>
<div class='col-sm-7'>
<img src='<?php echo get_field('product_size');?>' />
</div>
<?php }?>
</div></div>