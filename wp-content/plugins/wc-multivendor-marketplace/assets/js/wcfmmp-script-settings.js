jQuery(document).ready(function($) {
	$('#vendor_sold_by_template').change(function() {
		$vendor_sold_by_template = $(this).val();
		$('.vendor_sold_by_type').addClass('wcfm_ele_hide');
		$('.vendor_sold_by_type_'+$vendor_sold_by_template).removeClass('wcfm_ele_hide');
	}).change();
		
	$('#vendor_commission_mode').change(function() {
		$vendor_commission_mode = $(this).val();
		$('.commission_mode_field').addClass('wcfm_ele_hide');
		$('.commission_mode_'+$vendor_commission_mode).removeClass('wcfm_ele_hide');
		resetCollapsHeight($('#vendor_commission_mode').parent());
	}).change();
	
	function addVariationCommissionProperty() {
		$('.var_commission_mode').each(function() {
			$(this).change(function() {
				$vendor_commission_mode = $(this).val();
				$(this).parent().find('.var_commission_mode_field').addClass('wcfm_custom_hide');
				$(this).parent().find('.var_commission_mode_'+$vendor_commission_mode).removeClass('wcfm_custom_hide');
				resetCollapsHeight($('#variations'));
			}).change();
		});
	}
	addVariationCommissionProperty();
	
	$('#withdrawal_generate_auto_withdrawal').change(function() {
		if( $(this).is(':checked') ) {
			$('.auto_withdrawal_order_status').removeClass('wcfm_custom_hide');
		} else {
			$('.auto_withdrawal_order_status').addClass('wcfm_custom_hide');
		}
	}).change();
	
	$('#withdrawal_payment_methods').find('.payment_options').each(function() {
		$(this).change(function() {
			$payment_option = $(this).val();
			if( $(this).is(':checked') ) {
				$('.withdrawal_mode_'+$payment_option).removeClass('wcfm_ele_hide');
			} else {
				$('.withdrawal_mode_'+$payment_option).addClass('wcfm_ele_hide');
			}
		}).change();
	});
	
	$('#withdrawal_test_mode').change(function() {
		if( $(this).is(':checked') ) {
			$('.withdrawal_mode_live').addClass('wcfm_custom_hide');
			$('.withdrawal_mode_test').removeClass('wcfm_custom_hide');
		} else {
			$('.withdrawal_mode_live').removeClass('wcfm_custom_hide');
			$('.withdrawal_mode_test').addClass('wcfm_custom_hide');
		}
	}).change();
	
	$('#withdrawal_charge_type').change(function() {
		$withdrawal_charge_type = $(this).val();
		if( $withdrawal_charge_type == 'no' ) {
			$('.withdraw_charge_block').addClass('wcfm_custom_hide');
		} else {
			$('.withdraw_charge_block').removeClass('wcfm_custom_hide');
			$('.withdraw_charge_field').addClass('wcfm_ele_hide');
			$('.withdraw_charge_'+$withdrawal_charge_type).removeClass('wcfm_ele_hide');
		}
	}).change();
	
	// Gateway specific charge option
	$('#withdrawal_payment_methods').find('.payment_options').each(function() {
		$(this).change(function() {
			$payment_option = $(this).val();
			if( $(this).is(':checked') ) {
				$('.withdraw_charge_'+$payment_option).removeClass('wcfm_ele_hide');
			} else {
				$('.withdraw_charge_'+$payment_option).addClass('wcfm_ele_hide');
			}
		}).change();
	});
	
	// Vendor Payment Method Specific charge Option
	$('#payment_mode').change(function() {
		$vendor_payment_mode = $(this).val();
		$('.withdraw_charge_block').addClass('wcfm_block_hide');
		$('.withdraw_charge_'+$vendor_payment_mode).removeClass('wcfm_block_hide');
		resetCollapsHeight($('#vendor_withdrawal_mode').parent());
	}).change();
	
	$('#vendor_withdrawal_mode').change(function() {
		$vendor_withdrawal_mode = $(this).val();
		$('.withdrawal_mode_field').addClass('wcfm_ele_hide');
		$('.withdrawal_mode_'+$vendor_withdrawal_mode).removeClass('wcfm_ele_hide');
		if( $vendor_withdrawal_mode != 'global' ) {
			$('#withdrawal_charge_type').change();
		}
		resetCollapsHeight($('#vendor_withdrawal_mode').parent());
	}).change();
	
	// Store Style Settings Reset to Default
	if( $('#wcfm_store_color_setting_reset_button').length > 0 ) {
		$('#wcfm_store_color_setting_reset_button').click(function(event) {
			event.preventDefault();
			$.each(wcfm_store_color_setting_options, function( wcfm_store_color_setting_option, wcfm_store_color_setting_option_values ) {
				//$('#' + wcfm_color_setting_option_values.name).val( wcfm_color_setting_option_values.default );	
				$('#' + wcfm_store_color_setting_option_values.name).iris( 'color', wcfm_store_color_setting_option_values.default );
			} );
			$('#wcfm_settings_save_button').click();
		});
	}
	
	// WCfM Marketplace banner settings options
	if( $('#banner_type').length > 0 ) {
		$('#banner_type').change(function() {
			$banner_type = $(this).val();
			$('.banner_type_field').hide();
			$('.banner_type_' + $banner_type).show();
			$('input[type="text"].banner_type_upload').hide();
		}).change();
	}
	
	// SMS Verification
	if( $('#wcfmvm_sms_verification').length > 0 ) {
		$('#wcfmvm_sms_verification').click(function() {
		  if( $(this).is(':checked') ) {
		  	$('#phone').attr( 'checked', true );
		  }
		});
	}
});