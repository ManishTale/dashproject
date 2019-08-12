<?php
/*
Plugin Name: WooCommerce AJAX Cart
Plugin URI: https://wordpress.org/plugins/woocommerce-ajax-cart/
Description: Change the default behavior of WooCommerce Cart page, making AJAX requests when quantity field changes
Version: 1.2.8
Author: Moises Heberle, Alex Szilagyi (contributor)
Author URI: http://codecanyon.net/user/moiseh
Text Domain: woocommerce-ajax-cart
Domain Path: /i18n/languages/
WC requires at least: 3.2
WC tested up to: 3.5.1
*/

defined('WAC_PLUGIN') || define('WAC_PLUGIN', plugin_basename( __FILE__ ));
defined('WAC_PATH') || define('WAC_PATH', plugin_dir_path( __FILE__ ));

if ( !function_exists('wac_init') ) {
    require_once 'includes/main.php';
}
