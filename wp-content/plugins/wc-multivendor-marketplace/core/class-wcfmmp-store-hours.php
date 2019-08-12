<?php
/**
 * WCFMmp plugin core
 *
 * WCfMmp Store Hours
 *
 * @author 		WC Lovers
 * @package 	wcfmmp/core
 * @version   1.1.4
 */
class WCFMmp_Store_Hours {
	
	public function __construct() {
		global $WCFM, $WCFMmp;
		
		if( wcfm_is_vendor() ) {
			add_action( 'end_wcfm_vendor_settings', array( &$this, 'wcfm_store_hours_vendor_settings' ), 5 );
		}
		
		// Store Hours Setting Update
		add_action( 'wcfm_vendor_settings_update', array( &$this, 'wcfm_store_hours_vendor_settings_update' ), 5, 2 );
		
		// Store Hours Checking
		add_filter( 'woocommerce_is_purchasable', array( &$this, 'wcfmmp_store_product_is_purchasable' ), 500, 2 );
		
		// Store CLose Message Show
		add_action( 'woocommerce_single_product_summary', array( &$this, 'wcfmmp_store_close_message' ), 30 );
	}
	
	function wcfm_store_hours_vendor_settings( $vendor_id ) {
		global $WCFM, $WCFMmp;
		
		if( !apply_filters( 'wcfm_is_allow_store_hours', true ) ) return;
		
		$wcfm_vendor_store_hours = (array) get_user_meta( $vendor_id, 'wcfm_vendor_store_hours', true );
		
		$wcfm_store_hours_enable = isset( $wcfm_vendor_store_hours['enable'] ) ? 'yes' : 'no';
		$wcfm_store_hours_disable_purchase = isset( $wcfm_vendor_store_hours['disable_purchase'] ) ? 'yes' : 'no';
		$wcfm_store_hours_off_days = isset( $wcfm_vendor_store_hours['off_days'] ) ? $wcfm_vendor_store_hours['off_days'] : array();
		$wcfm_store_hours_day_times = isset( $wcfm_vendor_store_hours['day_times'] ) ? $wcfm_vendor_store_hours['day_times'] : array();
		
		$wcfm_store_hours_mon_min_time  = isset( $wcfm_store_hours_day_times[0]['start'] ) ? $wcfm_store_hours_day_times[0]['start'] : '';
		$wcfm_store_hours_mon_max_time  = isset( $wcfm_store_hours_day_times[0]['end'] ) ? $wcfm_store_hours_day_times[0]['end'] : '';
		$wcfm_store_hours_thu_min_time  = isset( $wcfm_store_hours_day_times[1]['start'] ) ? $wcfm_store_hours_day_times[1]['start'] : '';
		$wcfm_store_hours_thu_max_time  = isset( $wcfm_store_hours_day_times[1]['end'] ) ? $wcfm_store_hours_day_times[1]['end'] : '';
		$wcfm_store_hours_wed_min_time  = isset( $wcfm_store_hours_day_times[2]['start'] ) ? $wcfm_store_hours_day_times[2]['start'] : '';
		$wcfm_store_hours_wed_max_time  = isset( $wcfm_store_hours_day_times[2]['end'] ) ? $wcfm_store_hours_day_times[2]['end'] : '';
		$wcfm_store_hours_thur_min_time = isset( $wcfm_store_hours_day_times[3]['start'] ) ? $wcfm_store_hours_day_times[3]['start'] : '';
		$wcfm_store_hours_thur_max_time = isset( $wcfm_store_hours_day_times[3]['end'] ) ? $wcfm_store_hours_day_times[3]['end'] : '';
		$wcfm_store_hours_fri_min_time  = isset( $wcfm_store_hours_day_times[4]['start'] ) ? $wcfm_store_hours_day_times[4]['start'] : '';
		$wcfm_store_hours_fri_max_time  = isset( $wcfm_store_hours_day_times[4]['end'] ) ? $wcfm_store_hours_day_times[4]['end'] : '';
		$wcfm_store_hours_sat_min_time  = isset( $wcfm_store_hours_day_times[5]['start'] ) ? $wcfm_store_hours_day_times[5]['start'] : '';
		$wcfm_store_hours_sat_max_time  = isset( $wcfm_store_hours_day_times[5]['end'] ) ? $wcfm_store_hours_day_times[5]['end'] : '';
		$wcfm_store_hours_sun_min_time  = isset( $wcfm_store_hours_day_times[6]['start'] ) ? $wcfm_store_hours_day_times[6]['start'] : '';
		$wcfm_store_hours_sun_max_time  = isset( $wcfm_store_hours_day_times[6]['end'] ) ? $wcfm_store_hours_day_times[6]['end'] : '';
		?>
		<!-- collapsible -->
		<div class="page_collapsible" id="wcfm_settings_form_store_hours_head">
			<label class="wcfmfa fa-clock fa-clock-o"></label>
			<?php _e('Store Hours', 'wc-multivendor-marketplace'); ?><span></span>
		</div>
		<div class="wcfm-container">
			<div id="wcfm_settings_form_store_hours_expander" class="wcfm-content">
			  <h2><?php _e('Store Hours Setting', 'wc-multivendor-marketplace'); ?></h2>
				<div class="wcfm_clearfix"></div>
				
				<?php
					$WCFM->wcfm_fields->wcfm_generate_form_field( apply_filters( 'wcfm_vendors_settings_fields_store_hours', array(
																																																										"wcfm_store_hours" => array( 'label' => __( 'Enable Store Hours', 'wc-multivendor-marketplace'), 'name' => 'wcfm_store_hours[enable]', 'type' => 'checkbox', 'class' => 'wcfm-checkbox wcfm_ele', 'label_class' => 'wcfm_title checkbox_title wcfm_ele', 'value' => 'yes', 'dfvalue' => $wcfm_store_hours_enable ),
																																																										"wcfm_disable_purchase_off_time" => array( 'label' => __('Disable Purchase During OFF Time', 'wc-multivendor-marketplace'), 'name' => 'wcfm_store_hours[disable_purchase]', 'type' => 'checkbox', 'class' => 'wcfm-checkbox wcfm_ele', 'label_class' => 'wcfm_title wcfm_ele', 'value' => 'yes', 'dfvalue' => $wcfm_store_hours_disable_purchase ),
																																																										"wcfm_store_hours_off_days" => array( 'label' => __( 'Set Week OFF', 'wc-multivendor-marketplace'), 'type' => 'select', 'name' => 'wcfm_store_hours[off_days]', 'attributes' => array( 'multiple' => 'multiple', 'style' => 'width: 60%;' ), 'options' => array( 0 => __( 'Monday', 'wc-multivendor-marketplace' ), 1 => __( 'Tuesday', 'wc-multivendor-marketplace' ), 2 => __( 'Wednesday', 'wc-multivendor-marketplace' ), 3 => __( 'Thrusday', 'wc-multivendor-marketplace' ), 4 => __( 'Friday', 'wc-multivendor-marketplace' ), 5 => __( 'Saturday', 'wc-multivendor-marketplace' ), 6 => __( 'Sunday', 'wc-multivendor-marketplace') ), 'class' => 'wcfm-select wcfm_ele', 'label_class' => 'wcfm_title', 'value' => $wcfm_store_hours_off_days ),
																																																									 ), $vendor_id ) );
				?>
				
				<h2><?php _e( 'Daily Basis Opening & Closing Hours', 'wc-multivendor-marketplace' ); ?></h2><div class="wcfm_clearfix"></div>
				<?php
				$WCFM->wcfm_fields->wcfm_generate_form_field( array( 
					"wcfm_store_hours_mon_min_time" => array( 'name' => 'wcfm_store_hours[day_times][0][start]', 'label' => __('Monday', 'wc-multivendor-marketplace'), 'placeholder' => __('Opening Hours', 'wc-multivendor-marketplace'), 'type' => 'time', 'class' => 'wcfm-text wcfm_ele wcfm_store_hours_field wcfm_store_hours_fields wcfm_store_hours_fields_0', 'label_class' => 'wcfm_title wcfm_store_hours_label  wcfm_store_hours_fields wcfm_store_hours_fields_0', 'value' => $wcfm_store_hours_mon_min_time ),
					"wcfm_store_hours_mon_max_time" => array( 'name' => 'wcfm_store_hours[day_times][0][end]', 'placeholder' => __('Closing Hours', 'wc-multivendor-marketplace'), 'type' => 'time', 'class' => 'wcfm-text wcfm_ele wcfm_store_hours_field  wcfm_store_hours_fields wcfm_store_hours_fields_0', 'value' => $wcfm_store_hours_mon_max_time ),
					"wcfm_store_hours_thu_min_time" => array( 'name' => 'wcfm_store_hours[day_times][1][start]', 'label' => __('Tuesday', 'wc-multivendor-marketplace'), 'placeholder' => __('Opening Hours', 'wc-multivendor-marketplace'), 'type' => 'time', 'class' => 'wcfm-text wcfm_ele wcfm_store_hours_field  wcfm_store_hours_fields wcfm_store_hours_fields_1', 'label_class' => 'wcfm_title wcfm_store_hours_label  wcfm_store_hours_fields wcfm_store_hours_fields_1', 'value' => $wcfm_store_hours_thu_min_time ),
					"wcfm_store_hours_thu_max_time" => array( 'name' => 'wcfm_store_hours[day_times][1][end]', 'placeholder' => __('Closing Hours', 'wc-multivendor-marketplace'), 'type' => 'time', 'class' => 'wcfm-text wcfm_ele wcfm_store_hours_field  wcfm_store_hours_fields wcfm_store_hours_fields_1', 'value' => $wcfm_store_hours_thu_max_time ),
					"wcfm_store_hours_wed_min_time" => array( 'name' => 'wcfm_store_hours[day_times][2][start]', 'label' => __('Wednesday', 'wc-multivendor-marketplace'), 'placeholder' => __('Opening Hours', 'wc-multivendor-marketplace'), 'type' => 'time', 'class' => 'wcfm-text wcfm_ele wcfm_store_hours_field  wcfm_store_hours_fields wcfm_store_hours_fields_2', 'label_class' => 'wcfm_title wcfm_store_hours_label  wcfm_store_hours_fields wcfm_store_hours_fields_2', 'value' => $wcfm_store_hours_wed_min_time ),
					"wcfm_store_hours_wed_max_time" => array( 'name' => 'wcfm_store_hours[day_times][2][end]', 'placeholder' => __('Closing Hours', 'wc-multivendor-marketplace'), 'type' => 'time', 'class' => 'wcfm-text wcfm_ele wcfm_store_hours_field  wcfm_store_hours_fields wcfm_store_hours_fields_2', 'value' => $wcfm_store_hours_wed_max_time ),
					"wcfm_store_hours_thur_min_time" => array( 'name' => 'wcfm_store_hours[day_times][3][start]', 'label' => __('Thrusday', 'wc-multivendor-marketplace'), 'placeholder' => __('Opening Hours', 'wc-multivendor-marketplace'), 'type' => 'time', 'class' => 'wcfm-text wcfm_ele wcfm_store_hours_field  wcfm_store_hours_fields wcfm_store_hours_fields_3', 'label_class' => 'wcfm_title wcfm_store_hours_label  wcfm_store_hours_fields wcfm_store_hours_fields_3', 'value' => $wcfm_store_hours_thur_min_time ),
					"wcfm_store_hours_thur_max_time" => array( 'name' => 'wcfm_store_hours[day_times][3][end]', 'placeholder' => __('Closing Hours', 'wc-multivendor-marketplace'), 'type' => 'time', 'class' => 'wcfm-text wcfm_ele wcfm_store_hours_field  wcfm_store_hours_fields wcfm_store_hours_fields_3', 'value' => $wcfm_store_hours_thur_max_time ),
					"wcfm_store_hours_fri_min_time" => array( 'name' => 'wcfm_store_hours[day_times][4][start]', 'label' => __('Friday', 'wc-multivendor-marketplace'), 'placeholder' => __('Opening Hours', 'wc-multivendor-marketplace'), 'type' => 'time', 'class' => 'wcfm-text wcfm_ele wcfm_store_hours_field  wcfm_store_hours_fields wcfm_store_hours_fields_4', 'label_class' => 'wcfm_title wcfm_store_hours_label  wcfm_store_hours_fields wcfm_store_hours_fields_4', 'value' => $wcfm_store_hours_fri_min_time ),
					"wcfm_store_hours_fri_max_time" => array( 'name' => 'wcfm_store_hours[day_times][4][end]', 'placeholder' => __('Closing Hours', 'wc-multivendor-marketplace'), 'type' => 'time', 'class' => 'wcfm-text wcfm_ele wcfm_store_hours_field  wcfm_store_hours_fields wcfm_store_hours_fields_4', 'value' => $wcfm_store_hours_fri_max_time ),
					"wcfm_store_hours_sat_min_time" => array( 'name' => 'wcfm_store_hours[day_times][5][start]', 'label' => __('Saturday', 'wc-multivendor-marketplace'), 'placeholder' => __('Opening Hours', 'wc-multivendor-marketplace'), 'type' => 'time', 'class' => 'wcfm-text wcfm_ele wcfm_store_hours_field  wcfm_store_hours_fields wcfm_store_hours_fields_5', 'label_class' => 'wcfm_title wcfm_store_hours_label  wcfm_store_hours_fields wcfm_store_hours_fields_5', 'value' => $wcfm_store_hours_sat_min_time ),
					"wcfm_store_hours_sat_max_time" => array( 'name' => 'wcfm_store_hours[day_times][5][end]', 'placeholder' => __('Closing Hours', 'wc-multivendor-marketplace'), 'type' => 'time', 'class' => 'wcfm-text wcfm_ele wcfm_store_hours_field  wcfm_store_hours_fields wcfm_store_hours_fields_5', 'value' => $wcfm_store_hours_sat_max_time ),
					"wcfm_store_hours_sun_min_time" => array( 'name' => 'wcfm_store_hours[day_times][6][start]', 'label' => __('Sunday', 'wc-multivendor-marketplace'), 'placeholder' => __('Opening Hours', 'wc-multivendor-marketplace'), 'type' => 'time', 'class' => 'wcfm-text wcfm_ele wcfm_store_hours_field  wcfm_store_hours_fields wcfm_store_hours_fields_6', 'label_class' => 'wcfm_title wcfm_store_hours_label  wcfm_store_hours_fields wcfm_store_hours_fields_6', 'value' => $wcfm_store_hours_sun_min_time ),
					"wcfm_store_hours_sun_max_time" => array( 'name' => 'wcfm_store_hours[day_times][6][end]', 'placeholder' => __('Closing Hours', 'wc-multivendor-marketplace'), 'type' => 'time', 'class' => 'wcfm-text wcfm_ele wcfm_store_hours_field  wcfm_store_hours_fields wcfm_store_hours_fields_6', 'value' => $wcfm_store_hours_sun_max_time ),
					));
				?>
		  </div>
		</div>
		<?php
	}
	
	function wcfm_store_hours_vendor_settings_update( $vendor_id, $wcfm_settings_form ) {
		global $WCFM, $WCFMmp, $_POST;
		
		if( !apply_filters( 'wcfm_is_allow_store_hours', true ) ) return;
		
		if( isset( $wcfm_settings_form['wcfm_store_hours'] ) ) {
			update_user_meta( $vendor_id, 'wcfm_vendor_store_hours', $wcfm_settings_form['wcfm_store_hours'] );
		}
	}
	
	/**
	 * Restrict Store Product Purchase at OFF Time
	 */
	function wcfmmp_store_product_is_purchasable( $is_purchasable, $product ) {
		global $WCFM, $WCFMmp;
		
		$product_id = $product->get_id();
		if( $product_id ) {
			$vendor_id = $WCFM->wcfm_vendor_support->wcfm_get_vendor_id_from_product( $product_id );
			
			$is_store_close = $this->wcfmmp_is_store_close( $vendor_id );
			if( $is_store_close ) $is_purchasable = false;
		}
		
		return $is_purchasable;
	}
	
	/**
	 * WCFM Marketplace Store Close Message
	 */
	function wcfmmp_store_close_message() {
		global $WCFM, $WCFMmp, $product;
		
		if( !apply_filters( 'wcfm_is_allow_store_close_message', true ) ) return;
		
		$product_id = $product->get_id();
		if( $product_id ) {
			$vendor_id = $WCFM->wcfm_vendor_support->wcfm_get_vendor_id_from_product( $product_id );
			
			$is_store_close = $this->wcfmmp_is_store_close( $vendor_id );
			if( $is_store_close ) {
				echo '<div class="wcfm_store_close_msg">';
				echo apply_filters( 'wcfm_store_close_message', __( 'This store is now close!', 'wc-multivendor-marketplace' ) );
				echo '</div>';
			}
		}
	}
	
	/**
	 * Check is Store CLose Now
	 */
	function wcfmmp_is_store_close( $vendor_id ) {
		global $WCFM, $WCFMmp;
		
		$is_store_close = false;
		
		if( !$WCFM->wcfm_vendor_support->wcfm_vendor_has_capability( $vendor_id, 'store_hours' ) ) return $is_store_close;
		
		if( $vendor_id ) {
			$wcfm_vendor_store_hours = get_user_meta( $vendor_id, 'wcfm_vendor_store_hours', true );
			if( !empty( $wcfm_vendor_store_hours ) ) {
				$wcfm_store_hours_enable = isset( $wcfm_vendor_store_hours['enable'] ) ? 'yes' : 'no';
				if( $wcfm_store_hours_enable == 'yes' ) {
					$wcfm_store_hours_disable_purchase = isset( $wcfm_vendor_store_hours['disable_purchase'] ) ? 'yes' : 'no';
					if( $wcfm_store_hours_disable_purchase == 'yes' ) {
						$wcfm_store_hours_off_days = isset( $wcfm_vendor_store_hours['off_days'] ) ? $wcfm_vendor_store_hours['off_days'] : array();
						$wcfm_store_hours_day_times = isset( $wcfm_vendor_store_hours['day_times'] ) ? $wcfm_vendor_store_hours['day_times'] : array();
						
						$current_time = current_time( 'timestamp' );
						
						$today = date( 'N', $current_time );
						$today -= 1;
						
						// OFF Day Check
						if( !empty( $wcfm_store_hours_off_days ) ) {
							if( in_array( $today,  $wcfm_store_hours_off_days ) )  $is_store_close = true;
						}
						
						// Closing Hours Check
						if( !empty( $wcfm_store_hours_day_times ) ) {
							$open_hours  = isset( $wcfm_store_hours_day_times[$today]['start'] ) ? strtotime( $wcfm_store_hours_day_times[$today]['start'] ) : '';
							$close_hours = isset( $wcfm_store_hours_day_times[$today]['end'] ) ? strtotime( $wcfm_store_hours_day_times[$today]['end'] ) : '';
							
							if( $open_hours && $close_hours ) {
								if( ( $current_time < $open_hours ) || ( $current_time > $close_hours ) ) $is_store_close = true;
							}
						}
					}
				}
			}
		}
		
		return $is_store_close;
	}
	
}