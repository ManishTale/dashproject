<?php
/**
 * My Account navigation
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/navigation.php.
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
	exit;
}

do_action( 'woocommerce_before_account_navigation' );
$current_user = wp_get_current_user();

$login_avatar=get_avatar($current_user->user_email, 100, $default, $alt, $args ); 

?>
<style>
.entry-title
{
	display:none;
}
.section{padding: 30px 0px;}
</style>
<section class="myaccountpage">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 pr-0">
              <div class="nav flex-column bg-primary" id="myaccount-tab" role="tablist" aria-orientation="vertical">
                <div class="accountnameinfo">
                  <div class="accountimg">
                    <?php echo $login_avatar;?>
                  </div>
                  <div class="accountname">
                    <h6>Hello</h6>
                    <h2 class="f-sbold"><?php echo $current_user->display_name;?></h2>
                  </div>
                </div>
                <a class="nav-link my-order-link active" id="my-order-tab&quot;" data-toggle="pill" href="#my-order" role="tab" aria-controls="my-order" aria-selected="true"><span class="icon fa fa-shopping-basket"></span>My Order</a>
                <hr>
                <a class="nav-link deactivate" id="account-setting-tab" data-toggle="pill" href="#account-setting" role="tab" aria-controls="account-setting" aria-selected="false"><span class="icon"><img src="<?php echo get_template_directory_uri(); ?>/img/account-setting-icon.jpg"></span>Account Settings</a>
                <a class="nav-link" id="profile-info-tab" data-toggle="pill" href="#profile-info" role="tab" aria-controls="profile-info" aria-selected="true"><span class="icon">&nbsp;</span>Profile Information</a>
                <a class="nav-link" id="manage-address-tab" data-toggle="pill" href="#manage-address" role="tab" aria-controls="manage-address" aria-selected="false"><span class="icon">&nbsp;</span>Manage Addresses</a>
                <!-- <a class="nav-link newaddressnone" id="new-address-none-tab" data-toggle="pill" href="#new-address" role="tab" aria-controls="new-address" aria-selected="false"><span class="icon"></span>Add a New Address</a> -->
                <hr>
                <a class="nav-link deactivate" id="my-stuff-tab" data-toggle="pill" href="#my-stuff" role="tab" aria-controls="my-stuff" aria-selected="false"><span class="icon"><img src="<?php echo get_template_directory_uri(); ?>/img/my-stuff-icon.png"></span>My Stuff</a>
                <!-- <a class="nav-link" id="my-rev-rat-tab" data-toggle="pill" href="#my-rev-rat" role="tab" aria-controls="my-rev-rat" aria-selected="false"><span class="icon">&nbsp;</span>My Reviews &amp; Ratings</a> -->
                <a class="nav-link" id="my-wishlist-tab" data-toggle="pill" href="#my-wishlist" role="tab" aria-controls="my-wishlist" aria-selected="false"><span class="icon">&nbsp;</span>My Wishlist</a>
                <a class="nav-link" id="newsletter-tab" data-toggle="pill" href="#newsletter" role="tab" aria-controls="newsletter" aria-selected="false"><span class="icon">&nbsp;</span>Newsletter</a>
                <hr>
                <a class="nav-link" href="<?php echo wp_logout_url( home_url() ); ?>"><span class="icon"><img src="<?php echo get_template_directory_uri(); ?>/img/logout-icon.png"></span>Log Out</a>
              </div>
            </div>
            <div class="col-sm-8 pl-0">
              <div class="tab-content bg-lgray" id="myaccount-tabContent">
                <!-- my-order-tab Start -->
                <div class="tab-pane fade show active" id="my-order" role="tabpanel" aria-labelledby="my-order-tab">
                <?php include 'wp-content/plugins/woocommerce/templates/myaccount/orders.php';?>
                </div>
                <!-- my-order-tab End -->

                <!-- profile-info-tab Start -->
                <div class="tab-pane fade" id="profile-info" role="tabpanel" aria-labelledby="profile-info-tab">
				
                <?php include 'wp-content/plugins/woocommerce/templates/myaccount/form-edit-account.php';?>
                 
                </div>
                <!-- profile-info-tab End -->
				<?php
				$customer_id = get_current_user_id();
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
				?>
                <!-- manage-address Start -->
                <div class="tab-pane fade" id="manage-address" role="tabpanel" aria-labelledby="manage-address-tab">
                  <?php include 'wp-content/plugins/woocommerce/templates/myaccount/form-edit-address.php'; ?>
                </div>
                <!-- my-rev-rat-tab End -->

                <!-- my-wishlist-tab Start -->
                <div class="tab-pane fade" id="my-wishlist" role="tabpanel" aria-labelledby="my-wishlist-tab">
                <?php include 'wp-content/plugins/woocommerce/templates/myaccount/mywishlist.php';?>
                </div>
                <!-- my-wishlist-tab End -->

                <!-- newsletter-tab Start -->
                <div class="tab-pane fade" id="newsletter" role="tabpanel" aria-labelledby="newsletter-tab">
                <?php include 'wp-content/plugins/woocommerce/templates/myaccount/newsletter.php';?>
                </div>
                <!-- newsletter-tab End -->

              </div>
            </div>
          </div>
        </div>
      </section>

<!--
<nav class="woocommerce-MyAccount-navigation">
	<ul>
		<?php foreach ( wc_get_account_menu_items() as $endpoint => $label ) : ?>
			<li class="<?php echo wc_get_account_menu_item_classes( $endpoint ); ?>">
				<a href="<?php echo esc_url( wc_get_account_endpoint_url( $endpoint ) ); ?>"><?php echo esc_html( $label ); ?></a>
			</li>
		<?php endforeach; ?>
	</ul>
</nav>

<?php //do_action( 'woocommerce_after_account_navigation' ); ?>-->

<style>
.container.woocommerce-MyAccount-content
 {
    display: none;
}
.col-primary {
    margin-left: -50px;
}
</style>
