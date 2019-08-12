<?php
/**
 * Newsletter
 *
 * Shows Newletter on the account page.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/newsletter.php.
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
<!-- newsletter-tab Start -->
              
                  <h3>Subscribe Newsletters</h3>
                  <div class="newsletter-tab">
                    
                    <div class="d-flex justify-content-center mb-40 mt-15">
                      <img src="<?php echo get_template_directory_uri(); ?>/img/news.png">
                    </div>

                    <p class="col-gray mb-50" style="line-height: normal;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,</p>

                    <!-- <form>
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
                    </form> -->
                    <?php echo do_shortcode('[mc4wp_form id="392"]');?>

                  </div>
              
             