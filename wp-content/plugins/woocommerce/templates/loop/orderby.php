<?php
/**
 * Show options for ordering
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/loop/orderby.php.
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
 * @version     3.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>
<style>
.woocommerce-result-count{ display:none !important;}
h2.widgettitle {
    display: none;
}
  </style>
	<div class="">
				<div class="row">
				<div class="col-md-3">

				<div class="listing-sidebar">

                <div class="sidebar-filter product-filter">
                  <?php if(is_page(shop)){?>
                  <h3>Products</h3>
                  <?php  }
                  ?>
                  <div id="accordion">
                    <!-- <div class="card">
                      <div class="card-header" id="headingOne">
					  
                        <button class="btn btn-block" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Men
                        </button>
                      </div>

                      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                          <ul>
                            <li> <a href="#">T-Shirts</a> </li>
                            <li> <a href="#">Hoodies &amp; Sweatshirts</a> </li>
                            <li> <a href="#">Longsleeve Shirts</a> </li>
                            <li> <a href="#">Tank Tops</a> </li>
                            <li> <a href="#">Zip Hoodies &amp; Jack</a> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  
                    <div class="card">
                      <div class="card-header" id="headingThree">
                        <button class="btn btn-block collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Kids &amp; Babies
                        </button>
                      </div>
                      <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body">
                          <ul>
                            <li> <a href="#">T-Shirts</a> </li>
                            <li> <a href="#">Hoodies &amp; Sweatshirts</a> </li>
                            <li> <a href="#">Longsleeve Shirts</a> </li>
                            <li> <a href="#">Tank Tops</a> </li>
                            <li> <a href="#">Zip Hoodies &amp; Jack</a> </li>
                          </ul>
                        </div>
                      </div>
                    </div> -->
                    <?php echo do_shortcode('[widget id="woocommerce_product_categories-2"]');?>
			
                  </div> </div>
               
                <div class="sidebar-filter price-filter">
                    <h3>Filter by Price</h3>
               
                  
                    <?php echo do_shortcode('[widget id="woocommerce_price_filter-2"]');?>
                     
      </div>
               
                <div class="sidebar-filter productfeature-filter">
                    <h3>Product Features</h3>
                   <?php //echo do_shortcode('[woocommerce_product_filter_tag]');
                 echo do_shortcode('[widget id="woocommerce_product_tag_cloud-2"]'); ?>
                    
                    
                    <!-- <label class="checkbox-styled">
                      <input type="checkbox" name="checkbox" value="checkbox">
                      <span>Trends</span>
                    </label>
                    <label class="checkbox-styled">
                      <input type="checkbox" name="checkbox" value="checkbox">
                      <span>Sports Wear</span>
                    </label>
                    <label class="checkbox-styled">
                      <input type="checkbox" name="checkbox" value="checkbox">
                      <span>Work Wear</span>
                    </label>  -->
                </div>
                <?php if (is_product_category('Create'))
                {
                 
                } else {?>
                <div class="sidebar-filter color-filter">
                    <h3>Color</h3>
                    <label class="checkbox-color">
                   <?php echo do_shortcode('[widget id="yith-woo-ajax-navigation-4"]');?>
                   
                    </label>
                    <!-- <label class="checkbox-color">
                      <input type="checkbox" name="checkbox" value="checkbox">
                      <span> <span class="colorcode black"></span>Black</span>
                    </label>
                    <label class="checkbox-color">
                      <input type="checkbox" name="checkbox" value="checkbox">
                      <span> <span class="colorcode white"></span>White</span>
                    </label> <a href="#" class="viewmore">View More</a> -->
                   
                </div>
                <div class="sidebar-filter size-filter">
                <h3>Size</h3>
                    <label class="checkbox-styled">
                   <?php echo do_shortcode('[widget id="yith-woo-ajax-navigation-3"]');?>
                    </label>
                    <!-- <label class="checkbox-styled">
                      <input type="checkbox" name="checkbox" value="checkbox">
                      <span>M</span>
                    </label>
                    <label class="checkbox-styled">
                      <input type="checkbox" name="checkbox" value="checkbox">
                      <span>L</span>
                    </label>
                    <label class="checkbox-styled">
                      <input type="checkbox" name="checkbox" value="checkbox">
                      <span>XL</span>
                    </label>
                    <label class="checkbox-styled">
                      <input type="checkbox" name="checkbox" value="checkbox">
                      <span>XXL</span>
                    </label>
                    <label class="checkbox-styled">
                      <input type="checkbox" name="checkbox" value="checkbox">
                      <span>3XL</span>
                    </label>
                    <label class="checkbox-styled">
                      <input type="checkbox" name="checkbox" value="checkbox">
                      <span>4XL</span>
                    </label>
                    <label class="checkbox-styled">
                      <input type="checkbox" name="checkbox" value="checkbox">
                      <span>5XL</span>
                    </label> -->
                </div>
                <?php }?>
            </div>
				</div>
				<!-- <div class="col-sm-9">
<div class="product-header">
<?php if ( apply_filters( 'woocommerce_show_page_title', true ) ) : ?>
		<h2 ><?php woocommerce_page_title(); ?></h2>
	<?php endif; ?>
 <form class="form-group" method="get">
	<select name="orderby" class="form-control">
		<?php foreach ( $catalog_orderby_options as $id => $name ) : ?>
			<option value="<?php echo esc_attr( $id ); ?>" <?php selected( $orderby, $id ); ?>><?php echo esc_html( $name ); ?></option>
		<?php endforeach; ?>
	</select>
	<input type="hidden" name="paged" value="1" />
	<?php wc_query_string_form_fields( null, array( 'orderby', 'submit', 'paged', 'product-page' ) ); ?>
</form>
</div> -->


<div class="col-md-9">
            <div class="product-listing">
              <div class="product-header">
                <h2><?php woocommerce_page_title();?></h2>
                <div class="form-group">
                	<form class="woocommerce-ordering" method="get">
  <label class="f-medium">Short By: </label>
								
		<select name="orderby" class="orderby form-control">
    <?php foreach ( $catalog_orderby_options as $id => $name ) : ?>
								<option value="<?php echo esc_attr( $id ); ?>" <?php selected( $orderby, $id ); ?>><?php echo str_replace('Sort by ','',esc_html( $name )); ?></option>
							<?php endforeach; ?>
						</select>
				<input type="hidden" name="paged" value="1" />
	<?php wc_query_string_form_fields( null, array( 'orderby', 'submit', 'paged', 'product-page' ) ); ?>
</form>

                </div>
              </div>
  

