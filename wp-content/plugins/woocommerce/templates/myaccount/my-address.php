<?php
/**
* My Addresses
*
* This template can be overridden by copying it to yourtheme/woocommerce/myaccount/my-address.php.
*
* HOWEVER, on occasion WooCommerce will need to update template files and you
* (the theme developer) will need to copy the new files to your theme to
* maintain compatibility. We try to do this as little as possible, but it does
* happen. When this occurs the version of the template file will be bumped and
* the readme will list any important changes.
*
* @see     https://docs.woocommerce.com/document/template-structure/
* @author  WooThemes
* @package WooCommerce/Templates
* @version 2.6.0
*/
if ( ! defined( 'ABSPATH' ) ) {
exit; // Exit if accessed directly
}
$customer_id = get_current_user_id();

$customer = new WC_Customer($customer_id);

if ( ! wc_ship_to_billing_address_only() && wc_shipping_enabled() ) {
$get_addresses = apply_filters( 'woocommerce_my_account_get_addresses', array(
'billing' => __( 'Billing address', 'woocommerce' ),
'shipping' => __( 'Shipping address', 'woocommerce' ),
), $customer_id );
} else {
$get_addresses = apply_filters( 'woocommerce_my_account_get_addresses', array(
'billing' => __( 'Billing address', 'woocommerce' ),
), $customer_id );
}
$oldcol = 1;
$col    = 1;
?>
<p>
  
  <?php echo apply_filters( 'woocommerce_my_account_my_address_description', __( 'The following addresses will be used on the checkout page by default.', 'woocommerce' ) ); ?>
</p>
<?php if ( ! wc_ship_to_billing_address_only() && wc_shipping_enabled() ) : ?>
<div class="u-columns woocommerce-Addresses col2-set addresses manageaddresslist">
  <?php endif; ?>
  <?php foreach ( $get_addresses as $name => $title ) : ?>
  <div class="u-column woocommerce-Address">
  <div class="singleaddress addnewaddress">
                      <a class="nav-link" id="new-address-tab"><?php echo $title; ?></a>
                    </div>
  <div class="singleaddress">
                      <div class="addresshead">
                        <?php 
                        if($title == 'Billing address'){
                        ?>
                        <h4><?php echo $customer->billing['first_name'].' '.$customer->billing['last_name'];?></h4>
                        <?php }else{
                         ?>
                         <h4><?php echo $customer->shipping['first_name'].' '.$customer->shipping['last_name'];?></h4>
                         <?php   
                        }?>
                        <ul>
                        <?php 
                        if($title == 'Billing address'){
                            if($customer->billing['phone'])
                            {
                        ?>
                        <li><a href="tel:<?php echo $customer->billing['phone']; ?>" class="col-primary"><span class="icon fa fa-phone"></span><?php echo $customer->billing['phone']; ?></a></li>
                        <?php } }else{
                            if($customer->shipping['phone'])
                            {
                         ?>
                         <li><a href="tel:<?php echo $customer->shipping['phone']; ?>" class="col-primary"><span class="icon fa fa-phone"></span><?php echo $customer->shipping['phone']; ?></a></li>
                         <?php   
                        }}?>
                          
                          <li class="dropdown">
                            <?php
                            if($title == 'Billing address')
                            {
                            ?>
                            <a class="dropdown-toggle" data-toggle="modal" data-target="#billingaddress">Edit</a>
                            <?php }else{ ?>    
                            <a class="dropdown-toggle" data-toggle="modal" data-target="#shippingaddress">Edit</a>
                            <?php }?>
                          </li>
                        </ul>
                      </div>
                      <div class="addressmain">
                        <h6 class="f-medium">Address</h6>
                        <p> <?php
                              $address = wc_get_account_formatted_address( $name );
                              echo $address ? wp_kses_post( $address ) : esc_html_e( 'You have not set up this type of address yet.', 'woocommerce' );
                            ?>
                        </p>
                      </div>
                    </div>
</div><br />


<?php
$load_address = 'billing';
$page_title   = __( 'Billing Address', 'woocommerce' );
?>

<div id="billingaddress" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
           
             <h5 class="modal-title"><?php echo apply_filters( 'woocommerce_my_account_edit_address_title', $page_title ); ?></h5>
             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
          </div>
          <div class="modal-body">
          <style>.input-text {border:none;background: none;}.modal-body{padding: 15px;}</style>
          <?php
          // get the user meta
          $userMeta = get_user_meta(get_current_user_id());
        // get the form fields
          $countries = new WC_Countries();
          $billing_fields = $countries->get_address_fields( '', 'billing_' );
          $shipping_fields = $countries->get_address_fields( '', 'shipping_' );
          ?>

<!-- billing form -->

<form action="dash2/my-account/edit-address/billing/" class="edit-account" method="post">

    
    <?php do_action( "woocommerce_before_edit_address_form_{$load_address}" ); ?>

    <?php foreach ( $billing_fields as $key => $field ) : ?>

        <?php woocommerce_form_field( $key, $field, $userMeta[$key][0] ); ?>

    <?php endforeach; ?>

    <?php do_action( "woocommerce_after_edit_address_form_{$load_address}" ); ?>

    <p>
        <input type="submit" class="button btn btn-sm btn-primary" name="save_address" value="<?php esc_attr_e( 'Save Address', 'woocommerce' ); ?>" />
        <?php wp_nonce_field( 'woocommerce-edit_address' ); ?>
        <input type="hidden" name="action" value="edit_address" />

</form>


        </div>
     
        </div>
      </div>
    </div>
 
  <!-- Modal content End-->
  <?php
$load_address = 'shipping';
$page_title   = __( 'Shipping Address', 'woocommerce' );
?>

<div class="modal fade" id="shippingaddress" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><?php echo apply_filters( 'woocommerce_my_account_edit_address_title', $page_title ); ?></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
<!-- shipping form -->

<form action="/my-account/edit-address/shipping/" class="edit-account" method="post">

  

    <?php do_action( "woocommerce_before_edit_address_form_{$load_address}" ); ?>

    <?php foreach ( $shipping_fields as $key => $field ) : ?>

        <?php woocommerce_form_field( $key, $field, $userMeta[$key][0] ); ?>

    <?php endforeach; ?>

    <?php do_action( "woocommerce_after_edit_address_form_{$load_address}" ); ?>

    <p>
        <input type="submit" class="button btn btn-sm btn-primary" name="save_address" value="<?php esc_attr_e( 'Save Address', 'woocommerce' ); ?>" />
        <?php wp_nonce_field( 'woocommerce-edit_address' ); ?>
        <input type="hidden" name="action" value="edit_address" />
    </p>

</form>
      </div>
     
    </div>
  </div>
</div>


<?php endforeach; ?>
<?php if ( ! wc_ship_to_billing_address_only() && wc_shipping_enabled() ) : ?>
</div>
<?php endif;?>