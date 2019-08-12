<?php
class BeRocket_LMP_compat_ajax_filter {
    function __construct() {
        add_filter( 'aapf_localize_widget_script', array(__CLASS__, 'aapf_localize_widget_script') );
        add_filter( 'br_filters_options-woocommerce_removes_pagination-show', array(__CLASS__, 'woocommerce_removes_pagination') );
    }
    public static function aapf_localize_widget_script($localize) {
        $localize['woocommerce_removes'] = json_decode($localize['woocommerce_removes'], true);
        $localize['woocommerce_removes']['pagination'] = '';
        $localize['woocommerce_removes'] = json_encode($localize['woocommerce_removes']);
        return $localize;
    }
    public static function woocommerce_removes_pagination($show) {
        return false;
    }
}
new BeRocket_LMP_compat_ajax_filter();
