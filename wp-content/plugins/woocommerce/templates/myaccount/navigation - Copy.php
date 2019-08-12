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
                <!--<a class="nav-link newaddressnone" id="new-address-none-tab" data-toggle="pill" href="#new-address" role="tab" aria-controls="new-address" aria-selected="false"><span class="icon"></span>Add a New Address</a>-->
                <hr>
                <a class="nav-link deactivate" id="my-stuff-tab" data-toggle="pill" href="#my-stuff" role="tab" aria-controls="my-stuff" aria-selected="false"><span class="icon"><img src="<?php echo get_template_directory_uri(); ?>/img/my-stuff-icon.png"></span>My Stuff</a>
                <a class="nav-link" id="my-rev-rat-tab" data-toggle="pill" href="#my-rev-rat" role="tab" aria-controls="my-rev-rat" aria-selected="false"><span class="icon">&nbsp;</span>My Reviews &amp; Ratings</a>
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
                            <a href="#"><span class="icon fa fa-map-marker"></span> Track</a>
                          </div>
                        </div>
                        <div class="orderdetail">
                          <div class="itemimg-name">
                            <div class="productimg-list">
                              <img src="<?php echo get_template_directory_uri(); ?>/img/my-order-img.jpg">
                            </div>
                            <div class="productname-list">
                              <h4><a href="product-details.html">Men's Premium T-Shirt</a></h4>
                              <!--<h5>For kids &amp; adults</h5>-->
                              <span>
                                <span class="icon fa fa-star"></span>
                                <span class="icon fa fa-star"></span>
                                <span class="icon fa fa-star"></span>
                                <span class="icon fa fa-star"></span>
                                <span class="icon fa fa-star"></span>
                                (150)
                              </span>
                            </div>
                          </div>
                          <div class="itemprice-offer">
                            <p class="f-medium"><?php printf( _n( '%1$s for %2$s item', '%1$s for %2$s items', $item_count, 'woocommerce' ), $order->get_formatted_order_total(), $item_count );?></p>
                           <!-- <span><span class="col-primary">OFFERS:</span> 1</span>-->
                          </div>
                          <div class="delivery-return-detail">
                            <p><?php echo esc_html( wc_get_order_status_name( $order->get_status() ) ); ?> on Sun, Nov 18th '18</p>
                            <span>Return policy valid till Dec 18th '18</span>
                            <a href="" class="btn btn-sm btn-secondary-line"><i class="zmdi zmdi-rotate-ccw zmdi-hc-fw"></i>Return</a>
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
                </div>
                <!-- my-order-tab End -->

                <!-- profile-info-tab Start -->
                <div class="tab-pane fade" id="profile-info" role="tabpanel" aria-labelledby="profile-info-tab">
                  <h3>Personal Information</h3>
                  <div class="information-tab">

                    <div class="nameinfosec">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group float-label is-active">
                            <input type="text" id="first-name" name="" value="Rikin" class="form-control" placeholder="First Name">
                            <label class="label" for="first-name">First Name</label>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group float-label is-active">
                            <input type="text" id="last-name" name="" value="Patel" class="form-control" placeholder="Last Name">
                            <label class="label" for="last-name">Last Name</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="genderinfosec">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label class="label">Your Gender</label>
                            <label class="radiostyle_gender is-active">
                              <input type="radio" name="gender" checked="">
                              <span class="man">Male</span>
                            </label>
                            <label class="radiostyle_gender is-active">
                              <input type="radio" name="gender">
                              <span class="woman">Female</span>
                            </label>
                          </div>
                        </div>
                        <div class="col-sm-6">
                        </div>
                      </div>
                    </div>
                    <div class="mailpasssec">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group float-label is-active">
                            <input type="email" id="email" name="" value="rikin@gmail.com" class="form-control" placeholder="Email Address">
                            <label class="label" for="email">Email Addres</label>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group float-label is-active">
                            <input type="password" id="password" name="" value="rikinpatel" class="form-control" placeholder="Password">
                            <label class="label" for="password">Password</label>
                            <a href="#" class="chngpass col-secondary">Change Password</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mobnosec">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group float-label is-active">
                            
                            <input type="text" id="mobile-number" name="" value="+1 9876 543 210" class="form-control" placeholder="Mobile Number">
                            <label class="label" for="mobile-number">Mobile Number</label>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group float-label is-active">
                            <input type="text" id="alt-mobile-number" name="" value="+1 9876 543 211" class="form-control" placeholder="Alternative Mobile Number">
                            <label class="label" for="alt-mobile-number">Alternative Mobile Number</label>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <a href="#" class="f-bold text-danger">Deactivate Account</a>
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
				<?php echo get_user_meta( $customer_id, 'billing_phone', true ) ?>
                <!-- manage-address Start -->
                <div class="tab-pane fade" id="manage-address" role="tabpanel" aria-labelledby="manage-address-tab">
                  <h3>Addresses</h3>
                  <div class="manageaddresslist">
				  <?php foreach ( $get_addresses as $name => $title ) : ?>
                    <div class="singleaddress addnewaddress">
                      <!--<a class="nav-link" id="new-address-tab"><span class="icon"><img src="<?php echo get_template_directory_uri(); ?>/img/addnew.png"></span>Add a New Address</a>-->
					  <a class="nav-link" id="new-address-tab"><?php echo $title; ?></a>
                    </div>
                    <div class="singleaddress">
                      <div class="addresshead">
                        <h4>Rikin Patel</h4>
                        <ul>
                          <li><a href="tel:+19876543210" class="col-primary"><span class="icon fa fa-phone"></span>+1 9876 543 210</a></li>
                          <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown"><img src="<?php echo get_template_directory_uri(); ?>/img/vertical-dots.png"></a>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item edit" href="<?php echo esc_url( wc_get_endpoint_url( 'edit-address', $name ) ); ?>">Edit</a></li>
                              <!--<li><a class="dropdown-item" href="#">Delete</a></li>-->
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div class="addressmain">
                        <h6 class="f-medium">Address</h6>
                        <p><?php $address = wc_get_account_formatted_address( $name );
			echo $address ? wp_kses_post( $address ) : esc_html_e( 'You have not set up this type of address yet.', 'woocommerce' );?> </p>
                      </div>
                    </div>
					<?php endforeach; ?>
					
									
					
                  </div>
                </div>
                <!-- manage-address End -->

                <!-- new-address Start -->
                <!--<div class="tab-pane fade" id="new-address" role="tabpanel" aria-labelledby="new-address-none-tab">
                  <h3>Add New Address</h3>
                  <div class="addnewaddress-tab">
                    
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group float-label">
                          <input type="text" id="first-name" name="" class="form-control" placeholder="First Name">
                          <label class="label" for="first-name">First Name</label>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group float-label">
                          <input type="text" id="last-name" name="" class="form-control" placeholder="Last Name">
                          <label class="label" for="last-name">Last Name</label>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group float-label">
                          <input type="text" id="pincode" name="" class="form-control" placeholder="Pin Code">
                          <label class="label" for="pincode">Pin Code</label>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group float-label">
                          <input type="text" id="locality" name="" class="form-control" placeholder="Locality">
                          <label class="label" for="locality">Locality</label>
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <div class="form-group float-label">
                          <input type="text" id="area" name="" class="form-control" placeholder="Address (Area and Street)">
                          <label class="label" for="area">Address (Area and Street)</label>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group float-label">
                          <input type="text" id="city" name="" class="form-control" placeholder="City/District/Town">
                          <label class="label" for="city">City/District/Town</label>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group float-label">
                          <select id="state" name="" class="form-control" placeholder="State">
                            <option value="" disabled="" selected="">State</option>
                            <option value="1">New York</option>
                            <option value="2">California</option>
                          </select>
                          <label class="label" for="state">State</label>
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <div class="form-group addresstype">
                          <label class="label">Address Type</label>
                          <label class="radiostyle_gender is-active">
                            <input type="radio" name="gender" checked="">
                            <span class="home">Home</span>
                          </label>
                          <label class="radiostyle_gender is-active">
                            <input type="radio" name="gender">
                            <span class="work">Work</span>
                          </label>
                          <label class="radiostyle_gender is-active">
                            <input type="radio" name="gender">
                            <span class="other">Other</span>
                          </label>
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <a href="#" class="btn btn-primary btn-lg">Save</a>
                        <a href="#" class="btn btn-gray btn-lg">Cancel</a>
                      </div>
                    </div>

                  </div>
                </div>-->
                <!-- new-address End -->

                <!-- my-rev-rat-tab Start -->
                <div class="tab-pane fade" id="my-rev-rat" role="tabpanel" aria-labelledby="my-rev-rat-tab">
                  <h3>My Reviews &amp; Ratings</h3>
                  <div class="myrevrat-tab">
                    <div class="singlereview">
                      <div class="productreview">
                        <img src="img/my-order-img.jpg">
                      </div>
                      <div class="productreview-details">
                        <div class="productreview-head">
                          <div class="productreview-headleft">
                            <h5><a href="product-details.html">Men's Premium T-Shirt</a></h5>
                            <span>
                              <span class="icon fa fa-star"></span>
                              5.0
                            </span>
                          </div>
                          <div class="productreview-headright">
                            <a href="" class="col-secondary">Edit</a>
                            <a href="" class="text-danger">Delete</a>
                          </div>
                        </div>
                        <div class="productreview-main">
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
                        </div>
                      </div>
                    </div>
                    <div class="singlereview">
                      <div class="productreview">
                        <img src="img/my-order-img.jpg">
                      </div>
                      <div class="productreview-details">
                        <div class="productreview-head">
                          <div class="productreview-headleft">
                            <h5><a href="product-details.html">Men's Premium T-Shirt</a></h5>
                            <span>
                              <span class="icon fa fa-star"></span>
                              5.0
                            </span>
                          </div>
                          <div class="productreview-headright">
                            <a href="" class="col-secondary">Edit</a>
                            <a href="" class="text-danger">Delete</a>
                          </div>
                        </div>
                        <div class="productreview-main">
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- my-rev-rat-tab End -->

                <!-- my-wishlist-tab Start -->
                <div class="tab-pane fade" id="my-wishlist" role="tabpanel" aria-labelledby="my-wishlist-tab">
                  <h3>My Wishlist</h3>
                  <div class="wishlist-tab">
				  <?php echo do_shortcode(' [yith_wcwl_wishlist]');?>
              <!--      <div class="singlewishlist">
                      <div class="itemimg-name">
                        <div class="productimg-list">
                          <img src="img/my-order-img.jpg">
                        </div>
                        <div class="productname-list">
                          <h6><a href="product-details.html">Men's Premium T-Shirt</a></h6>
                          <span>
                            <span class="icon fa fa-star"></span>
                            <span class="icon fa fa-star"></span>
                            <span class="icon fa fa-star"></span>
                            <span class="icon fa fa-star"></span>
                            <span class="icon fa fa-star"></span>
                            (150)
                          </span>
                          <p class="col-primary f-medium">$60.00</p>
                        </div>
                      </div>
                      <div class="deletewishlist text-danger">
                        <a href="">
                          <span class="icon fa fa-trash"></span>
                          <span>Delete</span>
                        </a>
                      </div>
                    </div>
                -->
				
				
                  </div>
                </div>
                <!-- my-wishlist-tab End -->

                <!-- newsletter-tab Start -->
                <div class="tab-pane fade" id="newsletter" role="tabpanel" aria-labelledby="newsletter-tab">
                  <h3>Subscribe Newsletters</h3>
                  <div class="newsletter-tab">
                    
                    <div class="d-flex justify-content-center mb-40 mt-15">
                      <img src="<?php echo get_template_directory_uri(); ?>/img/news.png">
                    </div>

                    <p class="col-gray mb-50" style="line-height: normal;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,</p>

                    <form>
                      <div class="row">
                        <div class="col-sm-7">
                          <div class="form-group float-label is-active">
                            <input type="text" id="emailnews" name="" value="rikin@solulab.com" class="form-control" placeholder="Email">
                            <label class="label" for="emailnews">Email</label>
                          </div>
                        </div>
                        <div class="col-sm-5">
                          <button type="button" class="btn btn-lg btn-primary btn-block">Subscribe Newsletter</button>
                        </div>
                      </div>
                    </form>

                  </div>
                </div>
                <!-- newsletter-tab End -->

              </div>
            </div>
          </div>
        </div>
      </section>


<nav class="woocommerce-MyAccount-navigation">
	<ul>
		<?php foreach ( wc_get_account_menu_items() as $endpoint => $label ) : ?>
			<li class="<?php echo wc_get_account_menu_item_classes( $endpoint ); ?>">
				<a href="<?php echo esc_url( wc_get_account_endpoint_url( $endpoint ) ); ?>"><?php echo esc_html( $label ); ?></a>
			</li>
		<?php endforeach; ?>
	</ul>
</nav>

<?php do_action( 'woocommerce_after_account_navigation' ); ?>
