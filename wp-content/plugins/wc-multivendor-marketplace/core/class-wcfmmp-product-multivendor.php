<?php
/**
 * WCFM plugin core
 *
 * Plugin Single Product Multi Vendor Controller
 *
 * @author 		WC Lovers
 * @package 	wcfma/core
 * @version   1.0.1
 */
 
class WCFMmp_Product_Multivendor {
	
	public function __construct() {
		global $WCFM, $WCFMmp;
		
		// Single Product Multi seller button
		add_action( 'woocommerce_single_product_summary',	array( &$this, 'wcfmmp_product_multivendor_button' ), 36 );
		
		// Clone Multi selling product
		add_action('wp_ajax_wcfmmp_product_multivendor_clone', array( &$this, 'wcfmmp_product_multivendor_clone' ) );
		
		//enqueue scripts
		add_action('wp_enqueue_scripts', array(&$this, 'wcfmmp_product_multivendor_scripts'));
		//enqueue styles
		add_action('wp_enqueue_scripts', array(&$this, 'wcfmmp_product_multivendor_styles'));
	}
	
  // WCFM Single Product Multi seller button
  function wcfmmp_product_multivendor_button() {
  	global $WCFM, $WCFMmp, $product, $post;
		
  	if( !wcfm_is_vendor() ) return;
  	
  	if( !apply_filters( 'wcfmmp_is_allow_single_product_multivendor', true ) ) return;
  	
  	$product_id = $product->get_id();
  	if( !$product_id ) {
  		if( is_product() ) {
				$product_id = $post->ID;
			}
  	}
  
  	$product_author = get_post_field( 'post_author', $product_id );
  	if( $WCFMmp->vendor_id == $product_author ) return;
  	
  	if( $this->is_already_selling( $product_id ) ) return;
			
		$button_style = '';
		$wcfm_options = get_option( 'wcfm_options', array() );
		if( isset( $wcfm_options['wc_frontend_manager_button_text_color_settings'] ) ) { $button_style .= 'color: ' . $wcfm_options['wc_frontend_manager_button_text_color_settings'] . ';'; }
		
		$wcfm_product_multivendor_button_label  = __( 'Sell this Item', 'wc-multivendor-marketplace' );
		
		?>
		<div class="wcfm_ele_wrapper wcfm_product_multivendor_button_wrapper">
			<div class="wcfm-clearfix"></div>
			<a href="#" class="wcfm_product_multivendor" data-product_id="<?php echo $product_id; ?>"><span class="wcfmfa fa-cube"></span>&nbsp;&nbsp;<span class="product_multivendor_label"><?php _e( $wcfm_product_multivendor_button_label, 'wc-multivendor-marketplace' ); ?></span></a>
			<div class="wcfm-clearfix"></div>
		</div>
		<?php
  }
  
  /**
   * Check whether vendor already selling this product or not
   */
  function is_already_selling( $product_id, $vendor_id = 0 ) {
  	global $WCFM, $WCFMmp, $wpdb;
  	
  	if( !$vendor_id ) {
  		$vendor_id = $WCFMmp->vendor_id;
  	}
  	
  	$multi_selling = get_post_meta( $product_id, '_has_multi_selling', true );
  	$multi_parent  = get_post_meta( $product_id, '_is_multi_parent', true );
  	
  	if( !$multi_parent && !$multi_selling ) return false;
  	
  	$sql     = "SELECT * FROM `{$wpdb->prefix}wcfm_marketplace_product_multivendor` WHERE `vendor_id` = '$vendor_id' AND ( ( `product_id` = $product_id ) OR ( `parent_product_id` = $product_id ) )";
		$results = $wpdb->get_row( $sql );
		if ( $results ) return true;
  	
  	return false;
  }
  
  /**
   * WCFM Product Multivendor Clone
   */
  function wcfmmp_product_multivendor_clone() {
  	global $WCFM, $WCFMmp, $wp, $WCFM_Query, $_POST, $wpdb;
  	
  	if( !class_exists( 'WC_Admin_Duplicate_Product' ) ) {
			include( WC_ABSPATH . 'includes/admin/class-wc-admin-duplicate-product.php' );
		}
		$WC_Admin_Duplicate_Product = new WC_Admin_Duplicate_Product();
		
		if ( empty( $_POST['product_id'] ) ) {
			echo '{"status": false, "message": "' .  __( 'No product to duplicate has been supplied!', 'woocommerce' ) . '"}';
		}

		$product_id = isset( $_POST['product_id'] ) ? absint( $_POST['product_id'] ) : '';

		$product = wc_get_product( $product_id );

		if ( false === $product ) {
			/* translators: %s: product id */
			echo '{"status": false, "message": "' . sprintf( __( 'Product creation failed, could not find original product: %s', 'woocommerce' ), $product_id ) . '" }';
		}

		$duplicate = $WC_Admin_Duplicate_Product->product_duplicate( $product );
		
		update_post_meta( $duplicate->get_id(), '_wcfm_product_views', 0 );
		delete_post_meta( $duplicate->get_id(), '_wcfm_review_product_notified' );
		
		wp_update_post(
				array(
						'ID' => intval( $duplicate->get_id() ),
						'post_title' => $product->get_title(),
						'post_status' => 'draft',
						'post_author' => $WCFMmp->vendor_id
				)
		);
		
		// Update WCFMmp Product Multi-vendor Table
		$parent_product_id = 0;
		$multi_selling = get_post_meta( $product_id, '_has_multi_selling', true );
  	$multi_parent  = get_post_meta( $product_id, '_is_multi_parent', true );
  	
  	if( $multi_parent ) {
  		$parent_product_id = absint($multi_parent);
  	} elseif( $multi_selling ) {
  		$parent_product_id = absint($multi_selling);
  	} elseif( !$multi_parent && !$multi_selling ) {
  		$parent_product_id = $product_id;
  	}
  	
  	$wpdb->query(
						$wpdb->prepare(
							"INSERT INTO `{$wpdb->prefix}wcfm_marketplace_product_multivendor` 
									( vendor_id
									, product_id
									, parent_product_id
									) VALUES ( %d
									, %d
									, %d
									) ON DUPLICATE KEY UPDATE `created` = now()"
							, $WCFMmp->vendor_id
							, $duplicate->get_id()
							, $parent_product_id
			)
		);
		
		if( !$multi_parent && !$multi_selling ) {
  		update_post_meta( $product_id, '_is_multi_parent', $product_id );
  	}
  	update_post_meta( $duplicate->get_id(), '_has_multi_selling', $parent_product_id );

		// Hook rename to match other woocommerce_product_* hooks, and to move away from depending on a response from the wp_posts table.
		do_action( 'woocommerce_product_duplicate', $duplicate, $product );
		do_action( 'after_wcfmmp_product_multivendor_clone', $duplicate->get_id(), $product );

		// Redirect to the edit screen for the new draft page
		echo '{"status": true, "redirect": "' . get_wcfm_edit_product_url( $duplicate->get_id() ) . '", "id": "' . $duplicate->get_id() . '"}';
		
		die;
  }
  
  /**
   * Single Product Page More Offers Tab
   */
  function wcfmmp_product_multivendor_tab_content() {
  	global $WCFM, $WCFMmp, $product;
  	$WCFMmp->template->get_template( 'product_multivendor/wcfmmp-view-more-offers.php' );
  }
  
  /**
	 * WCFM Enquiry JS
	 */
	function wcfmmp_product_multivendor_scripts() {
 		global $WCFM, $WCFMmp, $wp, $WCFM_Query;
 		
 		if( is_product() ) {
 			if( !wcfm_is_vendor() ) return;
 			
 			$WCFM->library->load_blockui_lib();
 			
 			wp_enqueue_script( 'wcfm_product_multivendor_js', $WCFMmp->library->js_lib_url . 'product_multivendor/wcfmmp-script-product-multivendor.js', array('jquery' ), $WCFM->version, true );
 		}
 	}
 	
 	/**
 	 * WCFM Enquiry CSS
 	 */
 	function wcfmmp_product_multivendor_styles() {
 		global $WCFM, $WCFMmp, $wp, $WCFM_Query;
 		
 		if( is_product() ) {
 			wp_enqueue_style( 'wcfm_product_multivendor_css',  $WCFMmp->library->css_lib_url . 'product_multivendor/wcfmmp-style-product-multivendor.css', array(), $WCFM->version );
 		}
 	}
}