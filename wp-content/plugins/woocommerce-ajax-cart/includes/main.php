<?php
add_action('init', 'wac_init');
add_action('woocommerce_before_cart_table', 'wac_cart_table');
add_action('wac_enqueue_scripts', 'wac_enqueue_scripts');
add_filter('plugin_action_links_' . WAC_PLUGIN, 'wac_settings_link');
add_action('admin_menu', 'wac_settings_register', 20);
add_filter('woocommerce_cart_item_quantity', 'filter_woocommerce_cart_item_quantity', 10, 3);
add_filter('wc_get_template', 'wac_get_template', 10, 5 ); // trigger qty input on shop page
add_action('wac_buy_premium', 'wac_buy_premium');
add_action('plugins_loaded', 'wac_load_plugin_textdomain');

function wac_init() {
    // force to make is_cart() returns true, to make right calculations on class-wc-cart.php (WC_Cart::calculate_totals())

    // this define fix a bug that not show Shipping calculator when is WAC ajax request

    if ( !empty($_POST['is_wac_ajax']) && !defined( 'WOOCOMMERCE_CART' ) ) {
        define( 'WOOCOMMERCE_CART', true );
    }

    // wac_enqueue_cart_js();
}

function wac_load_plugin_textdomain() {
    load_plugin_textdomain('woocommerce-ajax-cart', FALSE, basename( dirname(dirname( __FILE__ )) ) . '/languages/' );
}

// this is custom code to cart page ajax work in pages like "Woocommerce Shop page"
function wac_enqueue_cart_js() {
    $path = 'assets/js/frontend/cart.js';
    $src = str_replace( array( 'http:', 'https:' ), '', plugins_url( $path, WC_PLUGIN_FILE ) );

    $deps = array( 'jquery', 'wc-country-select', 'wc-address-i18n');
    wp_enqueue_script( 'wc-cart', $src, $deps, WC_VERSION, true );
}

function wac_cart_table() {
    wac_enqueue_scripts();

    //
    wac_zero_quantity_confirmation();
}

function wac_enqueue_scripts() {
    wp_enqueue_style('wooajaxcart', plugins_url('assets/wooajaxcart.css', WAC_PLUGIN));
    wp_enqueue_script('wooajaxcart', plugins_url('assets/wooajaxcart.js', WAC_PLUGIN), array('jquery'));

    $frontendData = apply_filters('wac_frontend_vars', array(
        'updating_text' => __( 'Updating...', 'woocommerce-ajax-cart' ),
        'warn_remove_text' => __( 'Are you sure you want to remove this item from cart?', 'woocommerce-ajax-cart' )
    ));

    wp_localize_script( 'wooajaxcart', 'wooajaxcart', $frontendData );
}

// check user confirmation when "quantity = 0" setting
// when disabled, override the JS function to always return TRUE
function wac_zero_quantity_confirmation() {
    if ( get_option('wac_confirmation_zero_qty') == 'no' ) {
        wp_add_inline_script( 'wooajaxcart', "jQuery(document).ready(function(jQuery){
            wacZeroQuantityCheck = function(el_qty) {
                return true;
            };
        });" );
    }
}

// define the woocommerce_cart_item_quantity callback
// add the + and - buttons
function filter_woocommerce_cart_item_quantity( $inputDiv, $cart_item_key, $cart_item = null ) {

    // check config
    if ( get_option('wac_show_qty_buttons') == 'no' ) {
        return $inputDiv;
    }

    // some users related duplication problem, so it avoid this
    if ( preg_match('/wac-qty-button/', $inputDiv) ) {
        return $inputDiv;
    }

    // add plus and minus buttons
    $minus = wac_button_div('-', 'sub');
    $plus = wac_button_div('+', 'inc');

    $input = str_replace(array('<div class="quantity">', '</div>'), array('', ''), $inputDiv);
    $newDiv = '<div class="quantity wac-quantity">' . $minus . $input . $plus . '</div>';

    return $newDiv;
};

function wac_button_div($label, $identifier) {
    $link = '<b><a href="" class="wac-btn-'.$identifier.'">'.$label.'</a></b>';
    $div = '<div class="wac-qty-button">' . $link . '</div>';

    return $div;
}

function wac_get_template( $located, $template_name, $args, $template_path, $default_path ) {

    // ignore if select disabled
    if ( get_option('wac_qty_as_select') != 'yes' ) {
        return $located;
    }

    // modify input template to use select
    if ( 'global/quantity-input.php' == $template_name ) {
        $located = WAC_PATH . '/templates/wac-qty-select.php';
    }

    return $located;
}

function wac_settings_link( $links ) {
	$action_links = array(
		'settings' => sprintf('<a href="%s">%s</a>', admin_url('admin.php?page=wac-settings'), __('Settings')),
    );
    
    $action_links = apply_filters('wac_plugin_links', $action_links);

	return array_merge( $action_links, $links );
}

function wac_settings_register() {
    $title = apply_filters('wac_menu_title', __('Woo Ajax Cart', 'woocommerce-ajax-cart'));

    add_submenu_page(
        'woocommerce',
        $title,
        $title,
        'manage_woocommerce',
        'wac-settings',
        'wac_settings_page'
    );
}

function wac_settings_save() {
    update_option('wac_show_qty_buttons', (!empty($_POST['wac_show_qty_buttons']) ? 'yes' : 'no'));
    update_option('wac_confirmation_zero_qty', (!empty($_POST['wac_confirmation_zero_qty']) ? 'yes' : 'no'));
    update_option('wac_qty_as_select', (!empty($_POST['wac_qty_as_select']) ? 'yes' : 'no'));
    update_option('wac_select_items', $_POST['wac_select_items']);

    do_action('wac_after_save_settings');
}

function wac_settings_page() {
    // Save settings if data has been posted
    if ( ! empty( $_POST ) ) {
        if ( $_POST['save'] == __( 'Save settings', 'woocommerce-ajax-cart' ) ) {
            wac_settings_save();
        }
        else if ( $_POST['save'] == __( 'Reset all settings', 'woocommerce-ajax-cart' ) ) {
            //
        }
    }

    $title = apply_filters('wac_settings_title', __('WooCommerce Ajax Cart Settings', 'woocommerce-ajax-cart'));

    ?>
    <div class="wrap">
        <div class="icon32">
        <br />
        </div>
        <h2 class="nav-tab-wrapper">
            <?php echo $title; ?>
        </h2>
        <br/>
        <form method="post" id="mainform" action="" enctype="multipart/form-data">
            <table class="form-table">
                <tbody>
                    <tr>
                        <td>
                            <label>
                                <input type="checkbox"
                                    <?php if (get_option('wac_show_qty_buttons') != 'no'): ?>checked<?php endif ?> name="wac_show_qty_buttons" id="wac_show_qty_buttons">
                                <?= __('Display -/+ buttons around product quantity input', 'woocommerce-ajax-cart') ?>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td class="">
                            <label>
                                <input type="checkbox"
                                    <?php if (get_option('wac_qty_as_select') == 'yes'): ?>checked<?php endif ?> name="wac_qty_as_select" id="wac_qty_as_select">
                                <?= __('Show item quantity as select instead numeric field', 'woocommerce-ajax-cart') ?>
                            </label>
                            <div id="qty_select_div" style="margin-left: 30px">
                                <?= __('Items to show on select', 'woocommerce-ajax-cart') ?>:
                                <input type="number" size="4" min="1" max="50"
                                        value="<?php echo setting_wac_select_items(); ?>"
                                        id="wac_select_items"
                                        name="wac_select_items">

                                <br/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="">
                            <label>
                                <input type="checkbox"
                                    <?php if (get_option('wac_confirmation_zero_qty') != 'no'): ?>checked<?php endif ?> name="wac_confirmation_zero_qty" id="wac_confirmation_zero_qty">
                                <?= __('Show user confirmation when change item quantity to zero', 'woocommerce-ajax-cart') ?>
                            </label>
                        </td>
                    </tr>
                    <?php do_action('wac_extra_settings'); ?>
                    <?php echo wac_list_features(); ?>
                </tbody>
            </table>
            <hr/>
            <input name="save"
                    class="button-primary"
                    type="submit"
                    value="<?= __( 'Save settings', 'woocommerce-ajax-cart' ); ?>" />
            <a href="<?php echo admin_url('plugins.php'); ?>"
                style=""
                class="button">
                <?php echo __('Back to Plugins', 'woocommerce-ajax-cart') ?>
            </a>
            <?php do_action('wac_buy_premium'); ?>
        </form>
    </div>
    <script>
        (function($){

            checkQtySelectDiv = function() {
                if ( $('#wac_qty_as_select').is(':checked') ) {
                    $('#qty_select_div').show();
                }
                else {
                    $('#qty_select_div').hide();
                }
            };

            $('#wac_qty_as_select').click(function(){ checkQtySelectDiv(); });
            checkQtySelectDiv();

        })(jQuery);
    </script>
    <?php
}

function wac_premium_url() {
    return 'http://gum.co/wajaxcart';
}

function wac_buy_premium() {
    ?>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="<?php echo wac_premium_url(); ?>"
        style="color: #fff; background-color: #804877;"
        target="_blank"
        class="button">
        <?php echo __('Buy Premium', 'woocommerce-ajax-cart') ?>
    </a>
    <?php
}

function setting_wac_select_items() {
    return get_option('wac_select_items', 5);
}

function wac_list_features() {
    $readmeFile = WAC_PATH . '/readme.txt';

    if ( !file_exists($readmeFile) ) {
        return '';
    }

    $readme = file_get_contents($readmeFile);
    $youtubeIcon = plugins_url('assets/youtube.png',  WAC_PLUGIN);
    $urlPremium = wac_premium_url();
    $html = '';

    preg_match('/Premium version features:\n(.*)\n\n/isU', $readme, $match);

    if ( !empty($match[1]) ) {
        $features = explode("\n", $match[1]);

	foreach ( $features as $feature ) {
            if ( empty(trim($feature)) ) {
                continue;
            }

            $feature = str_replace('* ', '', $feature);
            $urlDemo = '';

            preg_match('/\[view demo\](.*)/', $feature, $fmatch);

            if ( !empty($fmatch[1]) ) {
                $urlDemo = str_replace(array('(', ')'), '', $fmatch[1]);
                $feature = str_replace($fmatch[0], '', $feature);
            }

            $html .= '
            <tr>
                <td class="">
                    <label>
                       <input type="checkbox" disabled="disabled" checked>
                       '.$feature.'
                    </label>
                   <a href="'.$urlPremium.'"
                       title="Visit Premium version on Gumroad"
                       style="color: #fff; background-color: #804877; font-weight: bold; border-radius: 3px; padding: 3px; font-size: 10px;"
                       target="_blank">
                       PREMIUM
                   </a>';

            if ( !empty($urlDemo) ) {
                $html.='&nbsp;
                        <a href="'.$urlDemo.'"
                            title="View feature demonstration"
                            style="color: #fff; background-color: #c32647; font-weight: bold; border-radius: 3px; padding: 3px; font-size: 10px;"
                            target="_blank">
                                View demo
                                <img src="'.$youtubeIcon.'"/>
                        </a>
                    </td>';
            }

            $html .= '</tr>';
        }
    }
    
    return $html;
}

function wac_checkbox($name, $label) {
    ?>
    <tr>
        <td>
            <label>
                <input type="checkbox"
                        <?php if (get_option($name) == 'yes'): ?>checked<?php endif ?>
                        name="<?php echo $name; ?>"
                        id="<?php echo $name; ?>">
                <?php echo $label; ?>
            </label>
        </td>
    </tr>
    <?php
}
