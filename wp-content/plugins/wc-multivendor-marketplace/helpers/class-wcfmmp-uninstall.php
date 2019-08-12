<?php

/**
 * WCFMmp plugin Un-Install
 *
 * Plugin uninstall script which delete default pages, taxonomies, and database tables to WordPress. Runs on deactivation. Data can not be retrieve if once deleted
 *
 * @author 		WC Lovers
 * @package 	wcfmmp/helpers
 * @version   1.0.0
 */
 
class WCFMmp_Uninstall {

	public $arr = array();

	public function __construct() {
		global $WCFM, $WCFMmp, $WCFM_Query;
		
		$wcfm_marketplace_options = get_option( 'wcfm_marketplace_options', array() );
		$delete_data_on_uninstall = isset( $wcfm_marketplace_options['delete_data_on_uninstall'] ) ? $wcfm_marketplace_options['delete_data_on_uninstall'] : 'no';
		
		if( $delete_data_on_uninstall == 'yes' ) {
			if ( get_option( 'wcfmmp_table_install' ) ) {
				$this->wcfmmp_delete_tables();
				delete_option( 'wcfmmp_table_install' );
			}
			
			if( get_role('wcfm_vendor') ) {
				remove_role( 'wcfm_vendor' );
			}
		}
	}
	
	/**
	 * Create WCFMmp Delete tables
	 * @global object $wpdb
	 * From Version 1.0.0
	 */
	function wcfmmp_delete_tables() {
		global $wpdb;
		$collate = '';
		if ($wpdb->has_cap('collation')) {
			$collate = $wpdb->get_charset_collate();
		}
		
		// WCFM Marketplace Tables
		$create_tables_query = array();
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_marketplace_orders`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_marketplace_orders_meta`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_marketplace_affiliate_orders`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_marketplace_affiliate_orders_meta`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_marketplace_withdraw_request`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_marketplace_withdraw_request_meta`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_marketplace_reverse_withdrawal`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_marketplace_refund_request`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_marketplace_vendor_ledger`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_marketplace_reviews`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_marketplace_reviews_response`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_marketplace_review_rating_meta`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_marketplace_product_multivendor`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_marketplace_shipping_zone_methods`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_marketplace_shipping_zone_locations`";
		
		// WCFM Tables
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_daily_analysis`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_detailed_analysis`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_messages`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_messages_stat`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_messages_modifier`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_enquiries`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_enquiries_meta`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_enquiries_response`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_support`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_support_meta`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_support_response`";
		$delete_tables_query[] = "DROP TABLE IF EXISTS `" . $wpdb->prefix . "wcfm_following_followers`";
		
		foreach ($delete_tables_query as $delete_table_query) {
			$wpdb->query($delete_table_query);
		}
	}
}

?>