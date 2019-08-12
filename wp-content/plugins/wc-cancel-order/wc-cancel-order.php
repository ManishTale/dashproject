<?php
/*
Plugin Name: WC Cancel Order
Plugin URI: http://wooexperts.com
Description: allow customer to Send Order Cancel Request from my account page to woocommerce admin.
Author: Vikram Singh
Version: 2.9
Author URI: http://wooexperts.com
Text Domain: wc-cancel-order
License: GPLv3
WC requires at least: 3.2
WC tested up to: 3.5
*/

if (!defined('ABSPATH')) {
    exit;
    // Exit if accessed directly
}

class WC_Cancel_Order{

    function __construct(){

        if(!defined('WC_CANCEL_DIR')){
            @define('WC_CANCEL_DIR', __DIR__);
        }
        register_activation_hook(__FILE__, array($this, 'create_wc_cancel_sql'));
        add_action('admin_menu', array($this, 'admin_menu'));
        add_action('plugins_loaded',array($this,'wc_cancel_load_textdomain'));

        add_filter('woocommerce_screen_ids',array($this,'add_screen_id'),999,1);
        add_action('admin_enqueue_scripts', array($this, 'wc_cancel_admin_head'),999);

        add_action('init', array($this, 'wc_cancel_request_order_status'));
        add_filter('wc_order_statuses', array($this, 'add_wc_cancel_request_to_order_statuses'));
        add_action('woocommerce_order_status_changed', array($this, 'wc_cancel_request'), 100, 3);
        add_filter('plugin_action_links_'.plugin_basename(__FILE__),array($this,'wc_cancel_action_links'),10,1);
        add_action('wp_ajax_mark_order_cancelled', array($this, 'mark_order_cancelled'));
        add_action('wp_ajax_woocommerce_mark_order_processing',array($this,'reject_cancel_request_ajax'));
        add_action('wp_ajax_mark_order_as_cancell_request', array($this, 'mark_order_as_cancell_request'));
        add_filter('woocommerce_my_account_my_orders_actions', array($this, 'add_wc_cancel_my_account_orders_status'), 100, 2);
        add_filter('woocommerce_email_classes', array($this, 'add_wc_cancel_request_order_woocommerce_email'),100,1);
    }

    function add_screen_id($screen_ids){
        $screen = get_current_screen();
        $screen_ids[]=$screen->id;
        return $screen_ids;
    }

    function wc_cancel_admin_head(){
        $screen = get_current_screen();
        if($screen->id == 'woocommerce_page_wc_cancel') {
            $woo_style = new WC_Admin_Assets;
            $woo_style->admin_styles();
            $woo_style->admin_scripts();
            wp_enqueue_style('wc_cancel-style',plugins_url('', __FILE__) . '/css/wc-cancel.css');
        }
        elseif($screen->id == 'edit-shop_order'){
            wp_enqueue_style('wc_cancel-style',plugins_url('', __FILE__) . '/css/wc-cancel.css');
        }
    }

    function wc_cancel_load_textdomain(){
        load_plugin_textdomain('wc-cancel-order',false,dirname(plugin_basename(__FILE__)).'/lang/');
    }


    function admin_menu(){
        add_submenu_page('woocommerce', __('WC Cancel', 'wc-cancel-order'), __('WC Cancel', 'wc-cancel-order'), 'manage_woocommerce', 'wc_cancel', array($this, 'wc_cancel_dashboard'));
    }

    function create_wc_cancel_sql()    {
        global $wpdb;
        include_once ABSPATH . 'wp-admin/includes/upgrade.php';
        $sql = "CREATE TABLE IF NOT EXISTS " . $wpdb->prefix . "wc_cancel_orders (
		  `id` bigint(20) NOT NULL AUTO_INCREMENT,
		  `order_id` bigint(20) NOT NULL,
		  `user_id` bigint(20) NOT NULL,
		  `is_approved` TINYINT( 2 ) NOT NULL DEFAULT  '0',
		  `cancel_request_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
		  `cancel_date` TIMESTAMP NOT NULL,
		   PRIMARY KEY (`id`)
		   ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;";
        dbDelta($sql);
    }

    function wc_cancel_action_links($links){
        $wc_cancel_link = array(
            '<a target="_blank" href="http://wooexperts.com/product/wc-cancel-order-pro/">'.__('Get Pro','wc-cancel-order').'</a>',
        );
        return array_merge($links,$wc_cancel_link);
    }

    function add_wc_cancel_request_order_woocommerce_email($email_classes)    {

        require_once('includes/class-wc-email-cancel-request-order.php');
        require_once('includes/class-wc-email-cancel-request-reject-order.php');
        require_once('includes/class-wc-email-cancel-request-approved-order.php');
        $email_classes['WC_Email_Cancel_Request_Order'] = new WC_Email_Cancel_Request_Order();
        $email_classes['Wc_Email_Cancel_Request_Reject_Order'] = new Wc_Email_Cancel_Request_Reject_Order();
        $email_classes['Wc_Email_Cancel_Request_Approved_Order'] = new Wc_Email_Cancel_Request_Approved_Order();

        return $email_classes;
    }

    function wc_cancel_request($id, $old_status, $new_status)    {

        if ($new_status == 'cancel-request') {
            $this->add_cancel_request($id, $new_status);
        }

        elseif ($new_status == 'cancelled') {
            $this->approve_cancel_request($id, $new_status);
        } else {
            $this->reject_cancel_request($id, $new_status);
        }

    }

    function add_cancel_request($id, $status)    {
        global $wpdb;
        $get_count = $wpdb->get_var("SELECT COUNT(*) as total FROM " . $wpdb->prefix . "wc_cancel_orders WHERE order_id=" . $id);

        if (!$get_count) {
            $wpdb->insert($wpdb->prefix . "wc_cancel_orders", array('order_id' => $id, 'user_id' => get_current_user_id(), 'cancel_request_date' => current_time('mysql')), array('%d', '%d', '%s'));
        }

    }

    function approve_cancel_request($id, $status)    {
        global $wpdb;
        $get_count = $wpdb->get_var("SELECT COUNT(*) as total FROM " . $wpdb->prefix . "wc_cancel_orders WHERE order_id=" . $id);

        if ($get_count > 0) {
            $wpdb->update($wpdb->prefix . "wc_cancel_orders", array('is_approved' => 1, 'cancel_date' => current_time('mysql')), array('order_id' => $id), array('%d', '%s'), array('%d'));
        }
    }

    function reject_cancel_request($id, $status)    {
        global $wpdb;
        $get_count = $wpdb->get_var("SELECT COUNT(*) as total FROM " . $wpdb->prefix . "wc_cancel_orders WHERE order_id=" . $id);

        if ($get_count) {
            $wpdb->update($wpdb->prefix . "wc_cancel_orders", array('is_approved' => 2, 'cancel_date' => current_time('mysql')), array('order_id' => $id), array('%d', '%s'), array('%d'));
        }

    }

    function wc_cancel_request_order_status()    {
        register_post_status('wc-cancel-request', array('label' => 'Cancel Request', 'public' => true, 'exclude_from_search' => false, 'show_in_admin_all_list' => true, 'show_in_admin_status_list' => true, 'label_count' => _n_noop('Cancel Request <span class="count">(%s)</span>', 'Cancel Request <span class="count">(%s)</span>')));
    }

    // Add to list of WC Order statuses
    function add_wc_cancel_request_to_order_statuses($order_statuses)    {
        $new_order_statuses = array();
        // add new order status after processing
        foreach ($order_statuses as $key => $status) {
            $new_order_statuses[$key] = $status;

            if ('wc-processing' === $key) {
                $new_order_statuses['wc-cancel-request'] = __('Cancel Request','wc-cancel-order');
            }

        }

        return $new_order_statuses;
    }

    function mark_order_cancelled(){

        if (!current_user_can('edit_shop_orders')) {
            wp_die(__('You do not have sufficient permissions to access this page.', 'wc-cancel-order'), '', array('response' => 403));
        }


        if (!check_admin_referer('woocommerce-mark-order-cancel-request')) {
            wp_die(__('You have taken too long. Please go back and retry.', 'wc-cancel-order'), '', array('response' => 403));
        }

        $order_id = isset($_GET['order_id']) && (int)$_GET['order_id'] ? (int)$_GET['order_id'] :
            '';

        if (!$order_id) {
            die();
        }

        $order = wc_get_order($order_id);
        $order->update_status('cancelled');
        $mails = WC()->mailer()->get_emails();
        $mails['Wc_Email_Cancel_Request_Approved_Order']->trigger($order_id);
	    //$this->wc_cancel_restore_order_stock($order_id);
        wp_safe_redirect(wp_get_referer() ? wp_get_referer() :
            admin_url('page=wc_cancel'));
        die();
    }

    function reject_cancel_request_ajax(){

        if (!current_user_can('edit_shop_orders')) {
            wp_die(__('You do not have sufficient permissions to access this page.', 'wc-cancel-order'), '', array('response' => 403));
        }


        if (!check_admin_referer('woocommerce-mark-order-processing')) {
            wp_die(__('You have taken too long. Please go back and retry.', 'wc-cancel-order'), '', array('response' => 403));
        }

        $order_id = isset($_GET['order_id']) && (int)$_GET['order_id'] ? (int)$_GET['order_id'] : '';

        if (!$order_id) {
            die();
        }

        $order = wc_get_order($order_id);
        $order->update_status('processing');
        $mails = WC()->mailer()->get_emails();
        $mails['Wc_Email_Cancel_Request_Reject_Order']->trigger($order_id);

        wp_safe_redirect(wp_get_referer() ? wp_get_referer() :
            admin_url('page=wc_cancel'));
        die();
    }

    function mark_order_as_cancell_request()    {

        if (!is_user_logged_in()) {
            wp_die(__('You do not have sufficient permissions to access this page.', 'wc-cancel-order'), '', array('response' => 403));
        }


        if (!check_admin_referer('woocommerce-mark-order-cancell-request-myaccount')) {
            wp_die(__('You have taken too long. Please go back and retry.', 'wc-cancel-order'), '', array('response' => 403));
        }

        $order_id = isset($_GET['order_id']) && (int)$_GET['order_id'] ? (int)$_GET['order_id'] :
            '';

        if (!$order_id) {
            die();
        }

        $order = wc_get_order($order_id);
        $order->update_status('cancel-request');
        $mails = WC()->mailer()->get_emails();
        $mails['WC_Email_Cancel_Request_Order']->trigger($order_id);
        wp_safe_redirect(wp_get_referer() ? wp_get_referer() : get_permalink(get_option('woocommerce_myaccount_page_id')));
        die();

    }

    function add_wc_cancel_my_account_orders_status($actions, $order){

        global $wpdb;
        $order_id = $order->get_id();
        if($order_id) {
            $item_count = $wpdb->get_row("SELECT COUNT(id) as item_count FROM " . $wpdb->prefix . "wc_cancel_orders WHERE is_approved=2 AND order_id =" . $order_id, ARRAY_A);
        }

        if(is_array($actions) && !empty($actions)){
	        foreach($actions as $key=>$value){
		        if('cancel' === $key){
			        unset($actions[$key]);
		        }
	        }
        }

        if ($order->has_status(array('on-hold', 'pending', 'processing')) && !$item_count['item_count']) {
            $actions['cancelled'] = array('url' => wp_nonce_url(admin_url('admin-ajax.php?action=mark_order_as_cancell_request&order_id=' . $order_id), 'woocommerce-mark-order-cancell-request-myaccount'), 'name' => __('Cancel', 'wc-cancel-order'), 'action' => "cancel-request");
        }

        return $actions;
    }

    function wc_cancel_restore_order_stock($order_id){

	    $order_item_ids = array();
	    $order_item_qty = array();
	    $order = wc_get_order( $order_id );
	    $items = $order->get_items();
	    foreach($items as $item_id=>$item){
		    $order_item_ids[]=$item_id;
		    $order_item_qty[$item_id] = $item->get_quantity();
	    }

	    $order_items    = $order->get_items();
	    $return         = array();
	    if ( $order && ! empty( $order_items ) && sizeof( $order_item_ids ) > 0 ) {
		    foreach ( $order_items as $item_id => $order_item ) {
			    // Only reduce checked items
			    if ( ! in_array( $item_id, $order_item_ids ) ) {
				    continue;
			    }
			    $_product = $order_item->get_product();
			    if ( $_product && $_product->exists() && $_product->managing_stock() && isset( $order_item_qty[ $item_id ] ) && $order_item_qty[ $item_id ] > 0 ) {
				    $old_stock    = $_product->get_stock_quantity();
				    $stock_change = apply_filters( 'woocommerce_restore_order_stock_quantity', $order_item_qty[ $item_id ], $item_id );
				    $new_quantity = wc_update_product_stock( $_product, $stock_change, 'increase' );
				    $item_name    = $_product->get_sku() ? $_product->get_sku() : $_product->get_id();
				    $note         = sprintf( __( 'Item %1$s stock increased from %2$s to %3$s.', 'woocommerce' ), $item_name, $old_stock, $new_quantity );
				    $return[]     = $note;
				    $order->add_order_note( $note );
			    }
		    }
		    do_action( 'woocommerce_restore_order_stock', $order );
	    }

    }

    function wc_cancel_dashboard(){

        if (!current_user_can('manage_woocommerce')) {
            wp_die(__('You do not have sufficient permissions to access this page.'));
        }


        if (!class_exists('WP_List_Table')) {
            require_once(ABSPATH . 'wp-admin/includes/class-wp-list-table.php');
        }

        include(dirname(__FILE__) . '/includes/wc-cancel-dashboard.php');
        $wc_cancel_dashboard = new WC_Cancel_Dashboard;
        $wc_cancel_dashboard->prepare_items();
        echo '<div class="wrap">';
        echo '<div id="icon-users" class="icon32"><br/></div>';
        echo '<h2>'. __('Cancellation Request','wc-cancel-order').'</h2>';
        echo '<form method="post">';
        echo '<input type="hidden" name="wc_cancell" value="wc_cancelled">';
        $wc_cancel_dashboard->display();
        echo '</form></div>';
    }

}


if (in_array('woocommerce/woocommerce.php', apply_filters('active_plugins', get_option('active_plugins')))) {
    $cancel_order = new WC_Cancel_Order;
}

?>