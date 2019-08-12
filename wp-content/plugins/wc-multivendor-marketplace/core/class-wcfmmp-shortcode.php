<?php
/**
 * WCFM Marketplace plugin core
 *
 * Plugin shortcode
 *
 * @author 		WC Lovers
 * @package 	wcfmmp/core
 * @version   1.0.0
 */
 
class WCFMmp_Shortcode {

	public $list_product;

	public function __construct() {
		
		// WCFM Markeptlace Store List
		add_shortcode('wcfm_stores', array(&$this, 'wcfmmp_stores_shortcode'));
		
		// WCFM Markeptlace Store List Map
		add_shortcode('wcfm_stores_map', array(&$this, 'wcfmmp_stores_map_shortcode'));
		
		// WCFM Marketplace Store Carousel
		add_shortcode('wcfm_stores_carousel', array(&$this, 'wcfmmp_stores_carousel_shortcode'));
		
		// WCFM Markeplace Store Info
		add_shortcode('wcfm_store_info', array(&$this, 'wcfmmp_store_info_shortcode'));
		
		// WCFM Markeplace Store Hours
		add_shortcode('wcfm_store_hours', array(&$this, 'wcfmmp_store_hours_shortcode'));
		
	}

	/**
	 * WCFM Stores Short Code
	 */
	public function wcfmmp_stores_shortcode( $atts ) {
		global $WCFM, $WCFMmp, $wp, $WCFM_Query, $includes;
		$WCFM->nocache();
		
		$defaults = array(
				'per_page'           => 10,
				'sidebar'            => 'yes',
				'has_orderby'        => 'yes',
				'filter'             => 'yes',
				'search'             => 'yes',
				'category'           => 'yes',
				'country'            => 'yes',
				'state'              => 'yes',
				'map'                => 'yes',
				'map_zoom'           => 5,
				'auto_zoom'          => 'yes',
				'per_row'            => 2,
				'includes'           => '',
				'excludes'           => '',
				'exclude_membership' => '',
				'search_category'    => '',
				'has_product'        => '',
		);

		$attr   = shortcode_atts( apply_filters( 'wcfmmp_stores_default_args', $defaults ), $atts );
		$paged  = max( 1, get_query_var( 'paged' ) );
		$length = apply_filters( 'wcfmmp_stores_per_page', $attr['per_page'] );
		$offset = ( $paged - 1 ) * $length;
		
		$search_country = '';
		$search_state   = '';
		
		// GEO Locate Support
		if( apply_filters( 'wcfmmp_is_allow_store_list_by_user_location', true ) ) {
			if( is_user_logged_in() && !$search_country ) {
				$user_location = get_user_meta( get_current_user_id(), 'wcfm_user_location', true );
				if( $user_location ) {
					$search_country = $user_location['country'];
					$search_state   = $user_location['state'];
				}
			}
					
			if( apply_filters( 'wcfm_is_allow_wc_geolocate', true ) && class_exists( 'WC_Geolocation' ) && !$search_country ) {
				$user_location = WC_Geolocation::geolocate_ip();
				$search_country = $user_location['country'];
				$search_state   = $user_location['state'];
			}
		}

		$search_term      = isset( $_GET['wcfmmp_store_search'] ) ? sanitize_text_field( $_GET['wcfmmp_store_search'] ) : '';
		$search_category  = isset( $_GET['wcfmmp_store_category'] ) ? sanitize_text_field( $_GET['wcfmmp_store_category'] ) : $attr['search_category'];
		
		$search_category  = apply_filters( 'wcfmmp_stores_default_search_category', $search_category );
		$has_product      = apply_filters( 'wcfmmp_stores_list_has_product', $attr['has_product'] );
		
		$search_data     = array();
		if( isset( $_POST['search_data'] ) ) {
			parse_str($_POST['search_data'], $search_data);
		} elseif( isset( $_GET['orderby'] ) ) {
			$search_data = $_GET;
		}
		
		// Exclude Membership
		$exclude_members = array();
		$exclude_membership = isset( $attr['exclude_membership'] ) ? sanitize_text_field( $attr['exclude_membership'] ) : '';
		if( $exclude_membership ) $exclude_membership = explode(",", $exclude_membership);
		if( !empty( $exclude_membership ) && is_array( $exclude_membership ) ) {
			foreach( $exclude_membership as $wcfm_membership ) {
				$membership_users = (array) get_post_meta( $wcfm_membership, 'membership_users', true );
				$exclude_members  = array_merge( $exclude_members, $membership_users );
			}
		}
		if( $exclude_members ) $exclude_members = implode(",", $exclude_members);
		else $exclude_members = '';
		
		// Excluded Stores from List
		$excludes = !empty( $attr['excludes'] ) ? sanitize_text_field( $attr['excludes'] ) : $exclude_members;
		$search_data['excludes'] = $excludes;
		
		// Include Store List
		$includes = !empty( $attr['includes'] ) ? sanitize_text_field( $attr['includes'] ) : '';
		if( $includes ) $includes = explode(",", $includes);
		else $includes = array();
			

		$stores = $WCFMmp->wcfmmp_vendor->wcfmmp_search_vendor_list( true, $offset, $length, $search_term, $search_category, $search_data, $has_product, $includes );

		$template_args = apply_filters( 'wcfmmp_stores_args', array(
				'stores'          => $stores,
				'limit'           => $length,
				'offset'          => $offset,
				'includes'        => $includes,
				'excludes'        => $excludes,
				'paged'           => $paged,
				'image_size'      => 'full',
				'has_product'     => $has_product,
				'has_orderby'     => $attr['has_orderby'],
				'sidebar'         => $attr['sidebar'],
				'filter'          => $attr['filter'],
				'search'          => $attr['search'],
				'category'        => $attr['category'],
				'country'         => $attr['country'],
				'state'           => $attr['state'],
				'map'             => $attr['map'],
				'map_zoom'        => $attr['map_zoom'],
				'auto_zoom'       => $attr['auto_zoom'],
				'per_row'         => $attr['per_row'],
				'search_category' => $search_category
		) );
		
		ob_start();
		$WCFMmp->template->get_template( 'store-lists/wcfmmp-view-store-lists.php', $template_args );
		return ob_get_clean();
	}
	
		/**
	 * WCFM Stores Map Short Code
	 */
	public function wcfmmp_stores_map_shortcode( $atts ) {
		global $WCFM, $WCFMmp, $wp, $WCFM_Query;
		$WCFM->nocache();
		
		$defaults = array(
				'filter'        => 'yes',
				'search'        => 'yes',
				'category'      => 'yes',
				'country'       => 'yes',
				'state'         => 'yes',
				'zoom'          => 5,
				'auto_zoom'     => 'yes',
				'limit'         => 10,
				'per_row'       => 2,
				'excludes'      => '',
				'has_product'   => '',
		);

		$attr   = shortcode_atts( apply_filters( 'wcfmmp_stores_map_default_args', $defaults ), $atts );

		$filter           = isset( $attr['filter'] ) ? sanitize_text_field( $attr['filter'] ) : '';
		$search           = isset( $attr['search'] ) ? sanitize_text_field( $attr['search'] ) : '';
		$category         = isset( $attr['category'] ) ? sanitize_text_field( $attr['category'] ) : '';
		$country          = isset( $attr['country'] ) ? sanitize_text_field( $attr['country'] ) : '';
		$state            = isset( $attr['state'] ) ? sanitize_text_field( $attr['state'] ) : '';
		
		$has_product      = apply_filters( 'wcfmmp_stores_list_has_product', $attr['has_product'] );
		
		$search_query     = isset( $_GET['wcfmmp_store_search'] ) ? sanitize_text_field( $_GET['wcfmmp_store_search'] ) : '';
		$search_category  = isset( $_GET['wcfmmp_store_category'] ) ? sanitize_text_field( $_GET['wcfmmp_store_category'] ) : '';
		$search_country   = isset( $_GET['wcfmmp_store_country'] ) ? sanitize_text_field( $_GET['wcfmmp_store_country'] ) : '';
		$search_state     = isset( $_GET['wcfmmp_store_state'] ) ? sanitize_text_field( $_GET['wcfmmp_store_state'] ) : '';
		
		// Excluded Stores from List
		$excludes = isset( $attr['excludes'] ) ? sanitize_text_field( $attr['excludes'] ) : '';
		$search_data['excludes'] = $excludes;
		
		$pagination_base = '';
			

		$template_args = apply_filters( 'wcfmmp_stores_map_args', array(
				'excludes'        => $excludes,
				'filter'          => $attr['filter'],
				'search'          => $search,
				'category'        => $category,
				'country'         => $country,
				'state'           => $state,
				'search_query'    => $search_query,
				'search_category' => $search_category,
				'search_country'  => $search_country,
				'search_state'    => $search_state,
				'pagination_base' => $pagination_base,
				'has_product'     => $has_product,
				'per_row'         => $attr['per_row'],
				'limit'           => $attr['limit'],
				'map'             => 'yes',
				'map_zoom'        => $attr['zoom'],
				'auto_zoom'       => $attr['auto_zoom'],
		) );
		
		ob_start();
		echo '<div id="wcfmmp-stores-map-wrapper">';
		$WCFMmp->template->get_template( 'store-lists/wcfmmp-view-store-lists-map.php', $template_args );
		if( $filter ) {
			if( $search || $category || $country || $state ) { $WCFMmp->template->get_template( 'store-lists/wcfmmp-view-store-lists-search-form.php', $template_args ); }
		}
		echo '</div>';
		echo '<div class="wcfm-clearfix"></div>';
		return ob_get_clean();
	}
	
	
	/**
	 * WCFM Stores Carousal Short Code
	 */
	public function wcfmmp_stores_carousel_shortcode( $atts ) {
		global $WCFM, $WCFMmp, $wp, $WCFM_Query, $includes;
		$WCFM->nocache();
		
		$defaults = array(
				'per_page'           => 20,
				'category'           => 'yes',
				'country'            => 'yes',
				'state'              => 'yes',
				'per_row'            => 4,
				'includes'           => '',
				'excludes'           => '',
				'exclude_membership' => '',
				'search_category'    => '',
				'has_product'        => '',
		);

		$attr   = shortcode_atts( apply_filters( 'wcfmmp_stores_default_args', $defaults ), $atts );
		$paged  = max( 1, get_query_var( 'paged' ) );
		$length = apply_filters( 'wcfmmp_stores_per_page', $attr['per_page'] );
		$offset = ( $paged - 1 ) * $length;
		
		$search_country = '';
		$search_state   = '';
		
		// GEO Locate Support
		if( apply_filters( 'wcfmmp_is_allow_store_list_by_user_location', true ) ) {
			if( is_user_logged_in() && !$search_country ) {
				$user_location = get_user_meta( get_current_user_id(), 'wcfm_user_location', true );
				if( $user_location ) {
					$search_country = $user_location['country'];
					$search_state   = $user_location['state'];
				}
			}
					
			if( apply_filters( 'wcfm_is_allow_wc_geolocate', true ) && class_exists( 'WC_Geolocation' ) && !$search_country ) {
				$user_location = WC_Geolocation::geolocate_ip();
				$search_country = $user_location['country'];
				$search_state   = $user_location['state'];
			}
		}

		$search_term      = isset( $_GET['wcfmmp_store_search'] ) ? sanitize_text_field( $_GET['wcfmmp_store_search'] ) : '';
		$search_category  = isset( $_GET['wcfmmp_store_category'] ) ? sanitize_text_field( $_GET['wcfmmp_store_category'] ) : $attr['search_category'];
		
		$search_category  = apply_filters( 'wcfmmp_stores_default_search_category', $search_category );
		$has_product      = apply_filters( 'wcfmmp_stores_list_has_product', $attr['has_product'] );
		
		$search_data     = array();
		if( isset( $_POST['search_data'] ) ) {
			parse_str($_POST['search_data'], $search_data);
		} elseif( isset( $_GET['orderby'] ) ) {
			$search_data = $_GET;
		}
		
		// Exclude Membership
		$exclude_members = array();
		$exclude_membership = isset( $attr['exclude_membership'] ) ? sanitize_text_field( $attr['exclude_membership'] ) : '';
		if( $exclude_membership ) $exclude_membership = explode(",", $exclude_membership);
		if( !empty( $exclude_membership ) && is_array( $exclude_membership ) ) {
			foreach( $exclude_membership as $wcfm_membership ) {
				$membership_users = (array) get_post_meta( $wcfm_membership, 'membership_users', true );
				$exclude_members  = array_merge( $exclude_members, $membership_users );
			}
		}
		if( $exclude_members ) $exclude_members = implode(",", $exclude_members);
		else $exclude_members = '';
		
		// Excluded Stores from List
		$excludes = !empty( $attr['excludes'] ) ? sanitize_text_field( $attr['excludes'] ) : $exclude_members;
		$search_data['excludes'] = $excludes;
		
		// Include Store List
		$includes = !empty( $attr['includes'] ) ? sanitize_text_field( $attr['includes'] ) : '';
		if( $includes ) $includes = explode(",", $includes);
		else $includes = array();
			

		$stores = $WCFMmp->wcfmmp_vendor->wcfmmp_search_vendor_list( true, $offset, $length, $search_term, $search_category, $search_data, $has_product, $includes );

		$template_args = apply_filters( 'wcfmmp_stores_args', array(
				'stores'          => $stores,
				'limit'           => $length,
				'offset'          => $offset,
				'includes'        => $includes,
				'excludes'        => $excludes,
				'has_product'     => $has_product,
				'category'        => $attr['category'],
				'country'         => $attr['country'],
				'state'           => $attr['state'],
				'per_row'         => $attr['per_row'],
				'search_category' => $search_category
		) );
		
		ob_start();
		$WCFMmp->template->get_template( 'store-lists/wcfmmp-view-store-lists-carousel.php', $template_args );
		return ob_get_clean();
	}
	
	/**
	 * WCFM Marketplace Store Info Shortcode
	 */
	public function wcfmmp_store_info_shortcode( $attr ) {
		global $WCFM, $WCFMmp, $wp, $WCFM_Query, $post;
		
		$store_id = '';
		if ( isset( $attr['id'] ) && !empty( $attr['id'] ) ) { $store_id = absint($attr['id']); }
		
		if (  wcfm_is_store_page() ) {
			$wcfm_store_url = get_option( 'wcfm_store_url', 'store' );
			$store_name = get_query_var( $wcfm_store_url );
			$store_id  = 0;
			if ( !empty( $store_name ) ) {
				$store_user = get_user_by( 'slug', $store_name );
			}
			$store_id   		= $store_user->ID;
		}
		
		if( is_product() ) {
			$store_id = $post->post_author;
		}
		
		$data_info = '';
		if ( isset( $attr['data'] ) && !empty( $attr['data'] ) ) { $data_info = $attr['data']; }
		
		if( !$store_id ) return;
		if( !$data_info ) return;
		
		$is_store_offline = get_user_meta( $store_id, '_wcfm_store_offline', true );
		if ( $is_store_offline ) {
			return;
		}
		
		$store_user  = wcfmmp_get_store( $store_id );
		$store_info  = $store_user->get_shop_info();
		
		$content = '<div class="wcfmmp_store_info wcfmmp_store_info_' . $data_info . '">';
		
		switch( $data_info ) {
			case 'store_name':
				$content .= $WCFM->wcfm_vendor_support->wcfm_get_vendor_store_name_by_vendor( $store_id );
				break;
				
			case 'store_url':
				$content .=  $WCFM->wcfm_vendor_support->wcfm_get_vendor_store_by_vendor( $store_id );
				break;
				
			case 'store_address':
				$content .= $store_user->get_address_string();
				break;
				
		  case 'store_email':
				$content .= $store_user->get_email();
				break;
			
			case 'store_phone':
				$content .=  $store_user->get_phone();
				break;
				
			case 'store_gravatar':
				$content .=  '<img src="' . $store_user->get_avatar() . '" />';
				break;
				
			case 'store_banner':
				$content .=  '<img src="' . $store_user->get_banner() . '" />';
				break;
				
			case 'store_support':
				$content .=  $store_user->get_customer_support_details();
				break;
				
		  case 'store_social':
		  	ob_start();
		  	$WCFMmp->template->get_template( 'store/wcfmmp-view-store-social.php', array( 'store_user' => $store_user, 'store_info' => $store_info ) );
				$content .=  ob_get_clean();
				if( !wcfmmp_is_store_page() && !is_product() ) {
					wp_enqueue_style( 'wcfmmp_product_css',  $WCFMmp->library->css_lib_url . 'store/wcfmmp-style-product.css', array(), $WCFMmp->version );
				}
				break;
				
			case 'store_location':
				$api_key = isset( $WCFMmp->wcfmmp_marketplace_options['wcfm_google_map_api'] ) ? $WCFMmp->wcfmmp_marketplace_options['wcfm_google_map_api'] : '';
				$store_lat    = isset( $store_info['store_lat'] ) ? esc_attr( $store_info['store_lat'] ) : 0;
				$store_lng    = isset( $store_info['store_lng'] ) ? esc_attr( $store_info['store_lng'] ) : 0;
	
				if ( !empty( $api_key ) && !empty( $store_lat ) && !empty( $store_lng ) ) {
					ob_start();
					$WCFMmp->template->get_template( 'store/widgets/wcfmmp-view-store-location.php', array( 
																												 'store_user' => $store_user, 
																												 'store_info' => $store_info,
																												 'store_lat'  => $store_lat,
																												 'store_lng'  => $store_lng,
																												 'map_id'     => 'wcfm_sold_by_widget_map_'.rand(10,100)
																												 ) );
					$content .=  ob_get_clean();
					
					if( !wcfmmp_is_store_page() ) {
						wp_enqueue_style( 'wcfmmp_product_css',  $WCFMmp->library->css_lib_url . 'store/wcfmmp-style-product.css', array(), $WCFMmp->version );
						wp_enqueue_script( 'wcfmmp_store_js', $WCFMmp->library->js_lib_url . 'store/wcfmmp-script-store.js', array('jquery' ), $WCFMmp->version, true );
						$scheme  = is_ssl() ? 'https' : 'http';
						wp_enqueue_script( 'wcfm-store-google-maps', $scheme . '://maps.googleapis.com/maps/api/js?key=' . $api_key . '&libraries=places' );
					}
				}
				break;
				
			case 'store_rating':
				ob_start();
				$store_user->show_star_rating();
				$content .=  ob_get_clean();
				break;
				
			default:
				$data_value = get_user_meta( $store_id, $data_info, true );
				$content .=  apply_filters( 'wcfmmp_additional_store_info', $data_value, $data_info, $store_id );
			  break;
		}
		
		$content .= '</div>';
		
		return $content;
		
	}
	
		/**
	 * WCFM Marketplace Store Hours Shortcode
	 */
	public function wcfmmp_store_hours_shortcode( $attr ) {
		global $WCFM, $WCFMmp, $wp, $WCFM_Query, $post;
		
		if( !apply_filters( 'wcfm_is_pref_store_hours', true ) ) return;
		
		$store_id = '';
		if ( isset( $attr['id'] ) && !empty( $attr['id'] ) ) { $store_id = absint($attr['id']); }
		
		if (  wcfm_is_store_page() ) {
			$wcfm_store_url = get_option( 'wcfm_store_url', 'store' );
			$store_name = get_query_var( $wcfm_store_url );
			$store_id  = 0;
			if ( !empty( $store_name ) ) {
				$store_user = get_user_by( 'slug', $store_name );
			}
			$store_id   		= $store_user->ID;
		}
		
		if( is_product() ) {
			$store_id = $post->post_author;
		}
		
		if( !$store_id ) return;
		
		$is_store_offline = get_user_meta( $store_id, '_wcfm_store_offline', true );
		if ( $is_store_offline ) {
			return;
		}
		
		if( !$WCFM->wcfm_vendor_support->wcfm_vendor_has_capability( $store_id, 'store_hours' ) ) return;
		
		$store_user  = wcfmmp_get_store( $store_id );
		
		$wcfm_vendor_store_hours = get_user_meta( $store_id, 'wcfm_vendor_store_hours', true );
		if( !$wcfm_vendor_store_hours ) return;
		
		$wcfm_store_hours_enable = isset( $wcfm_vendor_store_hours['enable'] ) ? 'yes' : 'no';
		if( $wcfm_store_hours_enable != 'yes' ) return;
		
		$wcfm_store_hours_off_days  = isset( $wcfm_vendor_store_hours['off_days'] ) ? $wcfm_vendor_store_hours['off_days'] : array();
		$wcfm_store_hours_day_times = isset( $wcfm_vendor_store_hours['day_times'] ) ? $wcfm_vendor_store_hours['day_times'] : array();
		if( empty( $wcfm_store_hours_day_times ) ) return;
		
		$weekdays = array( 0 => __( 'Monday', 'wc-multivendor-marketplace' ), 1 => __( 'Tuesday', 'wc-multivendor-marketplace' ), 2 => __( 'Wednesday', 'wc-multivendor-marketplace' ), 3 => __( 'Thrusday', 'wc-multivendor-marketplace' ), 4 => __( 'Friday', 'wc-multivendor-marketplace' ), 5 => __( 'Saturday', 'wc-multivendor-marketplace' ), 6 => __( 'Sunday', 'wc-multivendor-marketplace') );
		
		$content = '<div class="wcfmmp_store_hours">';
		$content .= '<span class="wcfmmp-store-hours widget-title"><span class="wcfmfa fa-clock"></span>&nbsp;' . apply_filters( 'wcfm_store_hours_label', __( 'Store Hours', 'wc-multivendor-marketplace' ) ) . '</span><div class="wcfm_clearfix"></div>';
		
		ob_start();
		$WCFMmp->template->get_template( 'store/widgets/wcfmmp-view-store-hours.php', array( 
			                                             'wcfm_store_hours_day_times' => $wcfm_store_hours_day_times, 
			                                             'wcfm_store_hours_off_days'  => $wcfm_store_hours_off_days,
			                                             'weekdays' => $weekdays,
			                                             'store_id' => $store_id,
			                                             ) );
		$content .= ob_get_clean();
		
		$content .= '</div>';
		
		return $content;
	}
	
	/**
	 * Helper Functions
	 */

	/**
	 * Shortcode Wrapper
	 *
	 * @access public
	 * @param mixed $function
	 * @param array $atts (default: array())
	 * @return string
	 */
	public function shortcode_wrapper($function, $atts = array()) {
		ob_start();
		call_user_func($function, $atts);
		return ob_get_clean();
	}

	/**
	 * Shortcode CLass Loader
	 *
	 * @access public
	 * @param mixed $class_name
	 * @return void
	 */
	public function load_class($class_name = '') {
		global $WCFM;
		if ('' != $class_name && '' != $WCFM->token) {
			require_once ( $WCFM->plugin_path . 'includes/shortcodes/class-' . esc_attr($WCFM->token) . '-shortcode-' . esc_attr($class_name) . '.php' );
		}
	}

}
?>