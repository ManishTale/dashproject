<?php

/**
 * WCFM Marketplace plugin
 *
 * WCFM Marketplace Core
 *
 * @author 		WC Lovers
 * @package 	wcfmmp/core
 * @version   1.0.0
 */

class WCFMmp {

	public $plugin_base_name;
	public $plugin_url;
	public $plugin_path;
	public $version;
	public $token;
	public $text_domain;
	public $vendor_id;
	public $library;
	public $template;
	public $shortcode;
	public $admin;
	public $frontend;
	public $ajax;
	private $file;
	public $wcfmmp_fields;
	public $wcfmmp_rewrite;
	public $wcfmmp_settings;
	public $wcfmmp_notification_manager;
	public $wcfmmp_commission;
	public $wcfmmp_withdraw;
	public $wcfmmp_refund;
	public $wcfmmp_reviews;
	public $wcfmmp_store;
	public $wcfmmp_store_seo;
	public $wcfmmp_vendor;
	public $wcfmmp_product;
	public $wcfmmp_emails;
	public $wcfmmp_shipping;
  public $wcfmmp_shipping_gateways;
  public $wcfmmp_shipping_zone;
	public $wcfmmp_gateways;
	public $wcfmmp_abstract_gateway;
	public $wcfmmp_product_multivendor;
	public $wcfmmp_non_ajax;
	public $wcfmmp_media;
	public $wcfmmp_sidebar_widgets;
	public $wcfmmp_shortcodes;
	public $wcfmmp_ledger;
	public $wcfmmp_store_hours;
	public $wcfmmp_marketplace_options;
	public $wcfmmp_commission_options;
	public $wcfmmp_withdrawal_options;
	public $wcfmmp_review_options;
	public $wcfmmp_refund_options;
	public $wcfmmp_notification_options;
	public $wcfmmp_store_endpoints;
	public $head_titlse_set = false;

	public function __construct($file) {

		$this->file = $file;
		$this->plugin_base_name = plugin_basename( $file );
		$this->plugin_url = trailingslashit(plugins_url('', $plugin = $file));
		$this->plugin_path = trailingslashit(dirname($file));
		$this->token = WCFMmp_TOKEN;
		$this->text_domain = WCFMmp_TEXT_DOMAIN;
		$this->version = WCFMmp_VERSION;
		
		// Installer Hook
		add_action( 'init', array( &$this, 'run_wcfmmp_installer' ) );
		
		add_action( 'init', array( &$this, 'init' ), 8 );
		
		add_action( 'wcfm_init', array( &$this, 'init_wcfmmp' ), 11 );
		
		add_action( 'woocommerce_loaded', array( $this, 'load_wcfmmp' ) );
		
		add_filter( 'wcfm_modules',  array( &$this, 'get_wcfmmp_modules' ) );
	}
	
	/**
	 * Initilize plugin on WP init
	 */
	function init() {
		global $WCFM, $WCFMmp;
		
		// Init Text Domain
		$this->load_plugin_textdomain();
		
		$this->vendor_id = apply_filters( 'wcfm_current_vendor_id', get_current_user_id() );
		
		$this->wcfmmp_marketplace_options   = get_option( 'wcfm_marketplace_options', array() );
		$this->wcfmmp_commission_options    = get_option( 'wcfm_commission_options', array() );
		$this->wcfmmp_withdrawal_options    = get_option( 'wcfm_withdrawal_options', array() );
		$this->wcfmmp_review_options        = get_option( 'wcfm_review_options', array() );
		$this->wcfmmp_refund_options        = get_option( 'wcfm_refund_options', array() );
		$this->wcfmmp_notification_options  = get_option( 'wcfmmp_notification_options', array() );
		$this->wcfmmp_store_endpoints       = get_option( 'wcfm_store_endpoints', array() );
		
		// Load WCFM Marketplace setup class
		// http://localhost/wwd/wp-admin/?page=wcfmmp-setup&step=dashboard
		if ( is_admin() ) {
			$current_page = filter_input( INPUT_GET, 'page' );
			if ( $current_page && $current_page == 'wcfmmp-setup' ) {
				require_once $this->plugin_path . 'helpers/class-wcfmmp-setup.php';
			}
			
			if ( $current_page && $current_page == 'store-setup' ) {
				require_once $this->plugin_path . 'helpers/class-wcfmmp-store-setup.php';
			}
		}
		
		// Init Admin class
		if ( is_admin() ) {
			$this->load_class( 'admin' );
			$this->admin = new WCFMmp_Admin();
		}
		
		// Rewrite rules loader
		$this->load_class( 'rewrite' );
		$this->wcfmmp_rewrite = new WCFMmp_Rewrites();
		
		// Marketplace Abstract Gateway Load
		$this->load_class('abstract-gateway');
	}
	
	/**
	 * Load WCFMmp
	 */
	function load_wcfmmp() {
		
		if(WCFMmp_Dependencies::woocommerce_plugin_active_check() && WCFMmp_Dependencies::wcfm_plugin_active_check()) {
			// Sidebar and Widgets loader
			$this->load_class( 'sidebar-widgets' );
			$this->wcfmmp_sidebar_widgets = new WCFMmp_Sidebar_Widgets();
	
			// Marketplace Shipping Load
			$this->load_class('shipping');
			$this->wcfmmp_shipping = new WCFMmp_Shipping();
			
			// Marketplace Shipping Gateway Load
			$this->load_class('shipping-gateway');
			$this->wcfmmp_shipping_gateways = new WCFMmp_Shipping_Gateway();
	
			// Marketplace Shipping Zone Load
			$this->load_class( 'shipping-zone' );
			$this->wcfmmp_shipping_zone = new WCFMmp_Shipping_Zone();
			
			// Marketplace Emails Load
			$this->load_class('emails');
			$this->wcfmmp_emails = new WCFMmp_Emails();
			
			// Marketplace Store SEO Load
			$this->load_class('store-seo');
			$this->wcfmmp_store_seo = new WCFMmp_Store_SEO();
		}
		
		do_action( 'wcfmmp_loaded' );
	}
	
	/**
	 * Initilize plugin on WCFM init
	 */
	function init_wcfmmp() {
		global $WCFM, $WCFMmp;
		
		if(!WCFMmp_Dependencies::woocommerce_plugin_active_check()) {
			add_action( 'admin_notices', 'wcfmmp_woocommerce_inactive_notice' );
			return;
		} 
		
		if(!WCFMmp_Dependencies::wcfm_plugin_active_check()) {
			add_action( 'admin_notices', 'wcfmmp_wcfm_inactive_notice' );
			return;
		}
		
		// Init library
		$this->load_class('library');
		$this->library = new WCFMmp_Library();
		
		// Init ajax
		if (defined('DOING_AJAX')) {
			$this->load_class('ajax');
			$this->ajax = new WCFMmp_Ajax();
		}
		
		// Marketplace Setting Load
		if (!is_admin() || defined('DOING_AJAX')) {
			$this->load_class('settings');
			$this->wcfmmp_settings = new WCFMmp_Settings();
		}
		
		$this->load_class('notification-manager');
		$this->wcfmmp_notification_manager = new WCFMmp_Notification_Manager();
		
		// Marketplace Commission Load
		$this->load_class('commission');
		$this->wcfmmp_commission = new WCFMmp_Commission();
		
		
		// Marketplace Withdrawal Load
		$this->load_class('withdraw');
		$this->wcfmmp_withdraw = new WCFMmp_Withdraw();
		
		// Marketplace Refund module Load
		if( apply_filters( 'wcfm_is_pref_refund', true ) ) {
			$this->load_class('refund');
			$this->wcfmmp_refund = new WCFMmp_Refund();
		}
		
		// Marketplace Reviews module Load
		if( apply_filters( 'wcfm_is_pref_vendor_reviews', true ) ) {
			$this->load_class( 'reviews' );
			$this->wcfmmp_reviews = new WCFMmp_Reviews();
		}
		
		// Marketplace Vendor Load
		$this->load_class('vendor');
		$this->wcfmmp_vendor = new WCFMmp_Vendor();
		
		// Marketplace Store Load
		$this->load_class('store');
		$this->wcfmmp_store = new WCFMmp_Store();
		
		// Marketplace Store SEO Load
		//$this->load_class('store-seo');
		//$this->wcfmmp_store_seo = new WCFMmp_Store_SEO();
		
		// Marketplace Product Load
		$this->load_class('product');
		$this->wcfmmp_product = new WCFMmp_Product();
		
		// Marketplace Single Product Multiple Vendor
		if( apply_filters( 'wcfm_is_pref_product_multivendor', true ) ) {
			$this->load_class('product-multivendor');
			$this->wcfmmp_product_multivendor = new WCFMmp_Product_Multivendor();
		}
		
		// Marketplace Ledger Load
		if( apply_filters( 'wcfm_is_pref_ledger_book', true ) ) {
			if (!is_admin() || defined('DOING_AJAX')) {
				$this->load_class('ledger');
				$this->wcfmmp_ledger = new WCFMmp_Ledger();
			}
		}
		
		// Marketplace Store Hours Load
		if( apply_filters( 'wcfm_is_pref_store_hours', true ) ) {
			if (!is_admin() || defined('DOING_AJAX')) {
				$this->load_class('store-hours');
				$this->wcfmmp_store_hours = new WCFMmp_Store_Hours();
			}
		}
		
		// Load Frontend
		if ( !is_admin() || defined('DOING_AJAX') ) {
			$this->load_class('frontend');
			$this->frontend = new WCFMmp_Frontend();
		}
		
		// Load Non-ajax
		if( !defined('DOING_AJAX') ) {
			$this->load_class( 'non-ajax' );
			$this->wcfmmp_non_ajax = new WCFMmp_Non_Ajax();
		}
		
		
		// Load Media Manager
		if( apply_filters( 'wcfm_is_pref_media_manager', true ) ) {
			if (!is_admin() || defined('DOING_AJAX')) {
				$this->load_class('media');
				$this->wcfmmp_media = new WCFMmp_Media();
			}
		}
		
		// Template loader
		$this->load_class( 'template' );
		$this->template = new WCFMmp_Template();
		
		// Short codes loader
		$this->load_class( 'shortcode' );
		$this->wcfmmp_shortcodes = new WCFMmp_Shortcode();
		
		// Marketplace Gateways Load
		$this->load_class('gateways');
		$this->wcfmmp_gateways = new WCFMmp_Gateways();
		
		//$this->wcfmmp_fields = $WCFM->wcfm_fields;
	}
	
	/**
	 * Load Localisation files.
	 *
	 * Note: the first-loaded translation file overrides any following ones if the same translation is present
	 *
	 * @access public
	 * @return void
	 */
	public function load_plugin_textdomain() {
		$locale = function_exists( 'get_user_locale' ) ? get_user_locale() : get_locale();
		$locale = apply_filters( 'plugin_locale', $locale, 'wc-multivendor-marketplace' );

		//load_textdomain( 'wc-multivendor-marketplace', WP_LANG_DIR . "/wc-multivendor-marketplace/wc-multivendor-marketplace-$locale.mo");
		load_textdomain( 'wc-multivendor-marketplace', $this->plugin_path . "lang/wc-multivendor-marketplace-$locale.mo");
		load_textdomain( 'wc-multivendor-marketplace', WP_LANG_DIR . "/plugins/wc-multivendor-marketplace-$locale.mo");
	}
	
	/**
	 * List of WCFM Marketplace modules
	 */
	function get_wcfmmp_modules( $wcfm_modules ) {
		$wcfmmp_modules = array(
			                    'reviews'             	=> array( 'label' => __( 'Reviews', 'wc-multivendor-marketplace' ) ),
			                    'media'             	  => array( 'label' => __( 'Media', 'wc-multivendor-marketplace' ) ),
			                    'ledger_book'           => array( 'label' => __( 'Vendor Ledger', 'wc-multivendor-marketplace' ) ),
			                    'store_hours'           => array( 'label' => __( 'Store Hours', 'wc-multivendor-marketplace' ) ),
													);
		$wcfm_modules = array_merge( $wcfm_modules, $wcfmmp_modules );
		return $wcfm_modules;
	}

	public function load_class($class_name = '') {
		if ('' != $class_name && '' != $this->token) {
			require_once ('class-' . esc_attr($this->token) . '-' . esc_attr($class_name) . '.php');
		} // End If Statement
	}

	// End load_class()

	/**
	 * Install upon activation.
	 *
	 * @access public
	 * @return void
	 */
	static function activate_wcfmmp() {
		global $WCFM, $WCFMmp, $wp_roles;
		
		// Rewrite rules loader
		$WCFMmp->load_class( 'rewrite' );
		$WCFMmp->wcfmmp_rewrite = new WCFMmp_Rewrites();
		
		require_once ( $WCFMmp->plugin_path . 'helpers/class-wcfmmp-install.php' );
		$WCFMmp_Install = new WCFMmp_Install();
		
		update_option('wcfmmp_installed', 1);
	}
	
	/**
	 * Check Installer upon load.
	 *
	 * @access public
	 * @return void
	 */
	function run_wcfmmp_installer() {
		global $WCFM, $WCFMmp, $wpdb;
		
		$wcfm_marketplace_tables = $wpdb->query( "SHOW tables like '{$wpdb->prefix}wcfm_marketplace_affiliate_orders'");
		if( !$wcfm_marketplace_tables ) {
			delete_option( 'wcfmmp_table_install' );
		}
		
		if ( !get_option("wcfmmp_page_install") || !get_option("wcfmmp_table_install") ) {
			require_once ( $WCFMmp->plugin_path . 'helpers/class-wcfmmp-install.php' );
			$WCFMmp_Install = new WCFMmp_Install();
			
			update_option('wcfmmp_installed', 1);
		}
	}

	/**
	 * UnInstall upon deactivation.
	 *
	 * @access public
	 * @return void
	 */
	static function deactivate_wcfmmp() {
		global $WCFM, $WCFMmp;
		
		$wcfm_marketplace_options = get_option( 'wcfm_marketplace_options', array() );
		$delete_data_on_uninstall = isset( $wcfm_marketplace_options['delete_data_on_uninstall'] ) ? $wcfm_marketplace_options['delete_data_on_uninstall'] : 'no';
		
		if( $delete_data_on_uninstall == 'yes' ) {
			require_once ( $WCFMmp->plugin_path . 'helpers/class-wcfmmp-uninstall.php' );
			$WCFMmp_Uninstall = new WCFMmp_Uninstall();
		}
		
		delete_option('wcfmmp_installed');
	}
	
}