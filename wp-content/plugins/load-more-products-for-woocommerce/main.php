<?php
define( "BeRocket_LMP_domain", 'BeRocket_LMP_domain');
load_plugin_textdomain('BeRocket_LMP_domain', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/');
require_once(plugin_dir_path( __FILE__ ).'berocket/framework.php');
foreach (glob(__DIR__ . "/includes/*.php") as $filename)
{
    include_once($filename);
}
foreach (glob(plugin_dir_path( __FILE__ ) . "includes/compatibility/*.php") as $filename)
{
    include_once($filename);
}
/*
 * Class BeRocket_LMP
 * REPLACE
 * BeRocket_LMP - plugin name
 * BeRocket_Load_More_Products - normal plugin name
 * BeRocket_Load_More_Products - full plugin name
 * 3 - id on BeRocket
 * woocommerce-load-more-products - slug on BeRocket
 * %PREMIUM_PRICE% - price on BeRocket
 */
class BeRocket_LMP extends BeRocket_Framework {
    public static $settings_name = 'br_load_more_products';
    protected static $instance;

    public $info, $defaults, $values;

    function __construct () {
        $this->info = array(
            'id'          => 3,
            'lic_id'      => 5,
            'version'     => BeRocket_Load_More_Products_version,
            'plugin'      => '',
            'slug'        => '',
            'key'         => '',
            'name'        => '',
            'plugin_name' => 'BeRocket_LMP',
            'full_name'   => 'BeRocket Load More Products',
            'norm_name'   => 'Load More Products',
            'price'       => '',
            'domain'      => 'BeRocket_LMP_domain',
            'templates'   => '',
            'plugin_file' => __DIR__ . '/load-more-products.php',
            'plugin_dir'  => __DIR__,
        );

        $this->defaults = array(
            'br_lmp_general_settings'   => array(
                'type'                      => 'infinity_scroll',
                'update_url'                => '',
                'use_mobile'                => '',
                'mobile_type'               => 'more_button',
                'mobile_width'              => '767',
                'products_per_page'         => '',
                'choose_loading'            => 'icons',
                'loading_image'             => 'fa-spinner',
                'rotate_image'              => '1',
                'buffer'                    => '50',
                'use_wpml'                  => '0',
            ),
            'br_lmp_button_settings'    => array(
                'button_text'               => 'Load More',
                'custom_class'              => '',
                'background-color'          => '#aaaaff',
                'color'                     => '#333333',
                'border-color'              => '#000',
                'font-size'                 => '22',
                'padding-left'              => '25',
                'padding-right'             => '25',
                'padding-top'               => '15',
                'padding-bottom'            => '15',
                'hover'                     => array(
                    'background-color'          => '#9999ff',
                    'color'                     => '#111111',
                ),
                'color'                     => '#333333',
                'font-size'                 => '22',
                'hover'                     => array(
                    'color'                     => '#111111',
                ),
                'background-color'          => '#aaaaff',
                'color'                     => '#333333',
                'border-color'              => '#000',
                'padding-left'              => '25',
                'padding-right'             => '25',
                'padding-top'               => '15',
                'padding-bottom'            => '15',
                'margin-right'              => '',
                'margin-top'                => '',
                'margin-bottom'             => '',
                'margin-left'               => '',
                'border-right'              => '',
                'border-top'                => '',
                'border-bottom'             => '',
                'border-left'               => '',
                'border-top-left-radius'    => '',
                'border-top-right-radius'   => '',
                'border-bottom-left-radius' => '',
                'border-bottom-right-radius'=> '',
                'hover'                     => array(
                    'background-color'          => '#9999ff',
                    'color'                     => '#111111',
                ),
            ),
            'br_lmp_prev_settings'    => array(
                'enable_prev'               => '0',
                'button_text'               => 'Load Previous',
                'custom_class'              => '',
                'background-color'          => '#aaaaff',
                'color'                     => '#333333',
                'border-color'              => '#000',
                'font-size'                 => '22',
                'padding-left'              => '25',
                'padding-right'             => '25',
                'padding-top'               => '15',
                'padding-bottom'            => '15',
                'hover'                     => array(
                    'background-color'          => '#9999ff',
                    'color'                     => '#111111',
                ),
                'color'                     => '#333333',
                'font-size'                 => '22',
                'hover'                     => array(
                    'color'                     => '#111111',
                ),
                'background-color'          => '#aaaaff',
                'color'                     => '#333333',
                'border-color'              => '#000',
                'padding-left'              => '25',
                'padding-right'             => '25',
                'padding-top'               => '15',
                'padding-bottom'            => '15',
                'margin-right'              => '',
                'margin-top'                => '',
                'margin-bottom'             => '',
                'margin-left'               => '',
                'border-right'              => '',
                'border-top'                => '',
                'border-bottom'             => '',
                'border-left'               => '',
                'border-top-left-radius'    => '',
                'border-top-right-radius'   => '',
                'border-bottom-left-radius' => '',
                'border-bottom-right-radius'=> '',
                'hover'                     => array(
                    'background-color'          => '#9999ff',
                    'color'                     => '#111111',
                ),
            ),
            'br_lmp_selectors_settings' => array(
                'products'                  => 'ul.products',
                'item'                      => 'li.product',
                'pagination'                => '.woocommerce-pagination',
                'next_page'                 => '.woocommerce-pagination a.next',
                'prev_page'                 => '.woocommerce-pagination a.prev',
            ),
            'br_lmp_lazy_load_settings' => array(
                'use_lazy_load'             => '',
                'use_lazy_load_mobile'      => '',
                'animation'                 => '',
            ),
            'br_lmp_messages_settings'  => array(
                'loading'                   => 'Loading...',
                'loading_class'             => '',
                'end_text'                  => 'No more products',
                'end_text_class'            => '',
            ),
            'br_lmp_javascript_settings'=> array(
                'before_update'             => '',
                'after_update'              => '',
            ),
            'br_lmp_license_settings'   => array(
                'plugin_key'                => '',
            ),
            'custom_css' => '',
            'fontawesome_frontend_disable'    => '',
            'fontawesome_frontend_version'    => '',
            'script'     => array(
                'js_page_load'      => '',
            ),
            'plugin_key' => '',
        );

        $this->values = array(
            'settings_name' => 'br_load_more_products',
            'option_page'   => 'br_load_more_products',
            'premium_slug'  => 'woocommerce-load-more-products',
            'free_slug'     => 'load-more-products-for-woocommerce',
        );
        
        // List of the features missed in free version of the plugin
        $this->feature_list = array(
            'Different Products Load Type for Mobile Devices and Other',
            'Custom Loading Image',
            'Using images instead buttons',
            'Lazy Load for products image',
            '40 Animation for Lazy Load images'
        );

        $this->framework_data['fontawesome_frontend'] = true;
        parent::__construct( $this );
        
        $options = $this->get_option();
        if(empty($options)) {
            $options = array();
            $options['br_lmp_general_settings'] = get_option('br_lmp_general_settings');
            $options['br_lmp_button_settings'] = get_option('br_lmp_button_settings');
            $options['br_lmp_selectors_settings'] = get_option('br_lmp_selectors_settings');
            $options['br_lmp_lazy_load_settings'] = get_option('br_lmp_lazy_load_settings');
            $options['br_lmp_messages_settings'] = get_option('br_lmp_messages_settings');
            $options['br_lmp_javascript_settings'] = get_option('br_lmp_javascript_settings');
            $options['br_lmp_license_settings'] = get_option('br_lmp_license_settings');
            
            update_option($this->values['settings_name'], $options);
            
            delete_option('br_lmp_general_settings');
            delete_option('br_lmp_button_settings');
            delete_option('br_lmp_selectors_settings');
            delete_option('br_lmp_lazy_load_settings');
            delete_option('br_lmp_messages_settings');
            delete_option('br_lmp_javascript_settings');
            delete_option('br_lmp_license_settings');
        }

        if ( $this->init_validation() ) {
           // add_filter( 'BeRocket_updater_add_plugin', array( $this, 'updater_info' ) );
            if ( ! @ is_network_admin() ) {
                load_plugin_textdomain('BeRocket_LMP_domain', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/');
                add_action ( 'init', array( $this, 'init' ) );
                add_action ( 'wp_head', array( $this, 'wp_header' ) );
                add_action ( 'wp_head', array( $this, 'check_shop' ) );
                add_action ( 'admin_init', array( $this, 'include_admin' ) );
                add_filter ( 'berocket_aapf_user_func', array( $this, 'filters_compatibility' ) );
                add_filter ( 'berocket_lgv_user_func', array( $this, 'list_grid_compatibility' ) );
                add_filter( 'plugin_row_meta', array( $this, 'plugin_row_meta' ), 10, 2 );
                $plugin_base_slug = plugin_basename( __FILE__ );
                add_filter( 'plugin_action_links_' . $plugin_base_slug, array( $this, 'plugin_action_links' ) );
                add_action( "wp_ajax_save_br_selectors", array ( $this, 'save_br_selectors' ) );
                add_action('woocommerce_before_template_part', array(__CLASS__, 'woocommerce_before_template_part'), 1);
                do_action( 'lmp_construct_end' );
                add_filter ( 'berocket_lmp_button_style', array($this, 'lmp_button_style'), 10, 3 );
            }
        }
    }

    public function init() {
        $options = $this->get_option();
        if ( ! empty($options['br_lmp_selectors_settings']['use_filters_settings']) && (br_is_plugin_active( 'filters', '2.0.5' ) || br_is_plugin_active( 'AJAX_filters', '2.0.5' )) ) {
            $filters_settings = apply_filters( 'berocket_aapf_listener_br_options', get_option('br_filters_options') );
            $options['br_lmp_selectors_settings']['products'] = @ $filters_settings['products_holder_id'];
            $options['br_lmp_selectors_settings']['item'] = '.product';
            $options['br_lmp_selectors_settings']['pagination'] = @ $filters_settings['woocommerce_pagination_class'];
            $options['br_lmp_selectors_settings']['next_page'] = '.next';
            $options['br_lmp_selectors_settings']['prev_page'] = '.prev';
            unset($options['br_lmp_selectors_settings']['use_filters_settings']);
            update_option($this->values['settings_name'], $options);
        }
        parent::init();
    }

    /**
     * Framework class will use this function to check it plugin is activated. For example if we need
     * woocommerce installed to run the plugin we can check here and return false if we need to stop
     *
     * @return boolean
     */
    public function init_validation() {
        return ( is_plugin_active( 'woocommerce/woocommerce.php' ) || is_plugin_active_for_network( 'woocommerce/woocommerce.php' ) ) && br_get_woocommerce_version() >= 2.1;
    }

    public function lmp_button_style($button, $option_name, $options_btn) {
        $options_btn = array_merge($this->defaults[$option_name], $options_btn);
        $button .= 'font-size: '.$options_btn['font-size'].'px;';
        $button .= 'color: '.$options_btn['color'].';';
        $button .= 'background-color: '.$options_btn['background-color'].';';
        $button .= 'padding-top:'.$options_btn['padding-top'].'px;';
        $button .= 'padding-right:'.$options_btn['padding-right'].'px;';
        $button .= 'padding-bottom:'.$options_btn['padding-bottom'].'px;';
        $button .= 'padding-left:'.$options_btn['padding-left'].'px;';
        $button .= 'margin-top:'.$options_btn['margin-top'].'px;';
        $button .= 'margin-right:'.$options_btn['margin-right'].'px;';
        $button .= 'margin-bottom:'.$options_btn['margin-bottom'].'px;';
        $button .= 'margin-left:'.$options_btn['margin-left'].'px;';
        $button .= ' border-top: '. ( (isset($options_btn['border-top']) && !empty($options_btn['border-top'])) ? $options_btn['border-top'] : '0').'px solid '.( !empty($options_btn['border-color']) ? $options_btn['border-color'] : '#000').';';
        $button .= ' border-bottom: '. ( (isset($options_btn['border-bottom']) && !empty($options_btn['border-bottom'])) ? $options_btn['border-bottom'] : '0').'px solid '.( !empty($options_btn['border-color']) ? $options_btn['border-color'] : '#000').';';
        $button .= ' border-left: '. ( (isset($options_btn['border-left']) && !empty($options_btn['border-left'])) ? $options_btn['border-left'] : '0').'px solid '.( !empty($options_btn['border-color']) ? $options_btn['border-color'] : '#000').';';
        $button .= ' border-right: '. ( (isset($options_btn['border-right']) && !empty($options_btn['border-right'])) ? $options_btn['border-right'] : '0').'px solid '.( !empty($options_btn['border-color']) ? $options_btn['border-color'] : '#000').';';
        $button .= ' border-top-left-radius: '. ( (isset($options_btn['border-top-left-radius']) && !empty($options_btn['border-top-left-radius'])) ? $options_btn['border-top-left-radius'] : '0').'px;';
        $button .= ' border-top-right-radius: '. ( (isset($options_btn['border-top-right-radius']) && !empty($options_btn['border-top-right-radius'])) ? $options_btn['border-top-right-radius'] : '0').'px;';
        $button .= ' border-bottom-left-radius: '. ( (isset($options_btn['border-bottom-left-radius']) && !empty($options_btn['border-bottom-left-radius'])) ? $options_btn['border-bottom-left-radius'] : '0').'px;';
        $button .= ' border-bottom-right-radius: '. ( (isset($options_btn['border-bottom-right-radius']) && !empty($options_btn['border-bottom-right-radius'])) ? $options_btn['border-bottom-right-radius'] : '0').'px;'; 
        return $button;
    }

    /**
     * Function add options button to admin panel if parent will not do it self
     *
     * @access public
     *
     * @return void
     */
    public function admin_menu() {
        if ( parent::admin_menu() ) {
            add_submenu_page(
                'woocommerce',
                $this->info[ 'norm_name' ] . ' ' . __( 'Settings', 'BeRocket_LMP_domain' ),
                $this->info[ 'norm_name' ],
                'manage_options',
                $this->values[ 'option_page' ],
                array(
                    $this,
                    'option_form'
                )
            );
        }
    }
    
    public function check_shop()
    {
        $options = parent::get_option();
        $general_options = $options['br_lmp_general_settings'];
        if(is_shop() || is_product_category() || is_product_tag() || is_product_taxonomy() || empty($general_options['only_woo_pages']))
        {
            $this->include_front();
        }        
    }

	public static function woocommerce_before_template_part($template_name) {
        if( $template_name == 'loop/result-count.php' ) {
            add_filter('ngettext', array(__CLASS__, 'load_more_products_count_additional'), 1, 9999);
            add_filter('ngettext_with_context', array(__CLASS__, 'load_more_products_count_additional'), 1, 9999);
        }
    }

    public static function load_more_products_count_additional($gettext) {
        remove_filter('ngettext', array(__CLASS__, 'load_more_products_count_additional'), 1, 9999);
        remove_filter('ngettext_with_context', array(__CLASS__, 'load_more_products_count_additional'), 1, 9999);
        if( class_exists('WC_Query') &&  method_exists('WC_Query', 'product_query') && function_exists('wc_get_loop_prop') ) {
            $total      = wc_get_loop_prop( 'total' );
            $per_page   = wc_get_loop_prop( 'per_page' );
            $paged      = wc_get_loop_prop( 'current_page' );
            $first      = ( $per_page * $paged ) - $per_page + 1;
            $last       = min( $total, $per_page * $paged );
        } else {
            global $wp_query;
            $paged    = max( 1, $wp_query->get( 'paged' ) );
            $per_page = $wp_query->get( 'posts_per_page' );
            $total    = $wp_query->found_posts;
            $first    = ( $per_page * $paged ) - $per_page + 1;
            $last     = min( $total, $wp_query->get( 'posts_per_page' ) * $paged );
        }
		echo '<span class="br_product_result_count" style="display: none;" data-text="';
		if ( $total <= $per_page || -1 === $per_page ) {
			/* translators: %d: total results */
			printf( _n( 'Showing the single result', 'Showing all %d results', $total, 'woocommerce' ), $total );
		} else {
			/* translators: 1: first result 2: last result 3: total results */
			printf( _nx( 'Showing the single result', 'Showing %1$d&ndash;%2$d of %3$d results', $total, 'with first and last result', 'woocommerce' ), -1, -2, $total );
		}
		echo '" data-start="', $first, '" data-end="', $last, '" data-laststart=', $first, ' data-lastend=', $last, '></span>';
        return $gettext;
    }
    
    public function wp_header() {
        $options = parent::get_option();
        echo '<style>';
        foreach(array('br_lmp_button_settings', 'br_lmp_prev_settings') as $option_name) {
            $options_btn = $options[$option_name];
            $style = '
                .lmp_load_more_button.'.$option_name.' .lmp_button:hover {
                    background-color: '.$options_btn['hover']['background-color'].'!important;
                    color: '.$options_btn['hover']['color'].'!important;
                }';
            $style = apply_filters('berocket_lmp_button_hover', $style, $option_name, $options_btn);
            if( ! empty($style) ) {
                echo $style;
            }
        }
        echo '.lazy{opacity:0;}</style>';
    }
    
    public function list_grid_compatibility( $user_func ) {
        $options = get_option('br_load_more_products');
        $selectors_options = $options['br_lmp_selectors_settings'];
        $item_selector = $selectors_options['item'];
        $after_set = 'jQuery(window).scrollTop(jQuery(window).scrollTop() + 1).scrollTop(jQuery(window).scrollTop() - 1);';
        $after_set .= "jQuery( '{$item_selector}.animated').trigger('lazyshow');";
        $user_func['after_style_set'] = $after_set . $user_func['after_style_set'];
        return $user_func;
    }
    
    public function filters_compatibility( $user_func ) {
        $after_update = "lmp_update_state();";
        $user_func['after_update'] = $after_update . $user_func['after_update'];
        return $user_func;
    }
    
    public function get_load_more_button($option_name = 'br_lmp_button_settings') {
        $options = parent::get_option();
        $options_btn = $options[$option_name];
        $general_options = $options['br_lmp_general_settings'];
        $text = apply_filters('berocket_lmp_button_text', $options_btn['button_text'], $option_name, $options_btn);
        $button = '<div class="lmp_load_more_button ' . $option_name . '">';
        $button .= '<a class="lmp_button '.$options_btn['custom_class'].'" style="';
        $button .= apply_filters('berocket_lmp_button_style', '', $option_name, $options_btn);
        $button .= '" href="#load_next_page">'.$text.'</a>';
        $button .= '</div>';
        $button = apply_filters('berocket_lmp_button_html', $button, $option_name, $options_btn);
        return $button;
    }
    
    public function add_javascript_data() {
        /* theme scripts */
        if( defined('THE7_VERSION') && THE7_VERSION ) {
            wp_enqueue_script( 'berocket_ajax_fix-the7', plugins_url( 'js/themes/the7.js', __FILE__ ), array( 'jquery' ) );
            add_filter('berocket_lmp_user_func', array(__CLASS__, 'the7_fix'));
        }
        $options = parent::get_option();
        $general_options = $options['br_lmp_general_settings'];
        $button_options = $options['br_lmp_button_settings'];
        $prev_options = $options['br_lmp_prev_settings'];
        $selectors_options = $options['br_lmp_selectors_settings'];
        $lazy_load_options = $options['br_lmp_lazy_load_settings'];
        $messages_options = $options['br_lmp_messages_settings'];
        $javascript_options = $options['br_lmp_javascript_settings'];
        $products_selector = $selectors_options['products'];
        $item_selector = $selectors_options['item'];
        $pagination_selector = $selectors_options['pagination'];
        $next_page_selector = $selectors_options['next_page'];
        $prev_page_selector = $selectors_options['prev_page'];
        $image_class = '';
        if( $general_options['rotate_image'] ) {
            $image_class = 'lmp_rotate';
        }
        $image = '<div class="lmp_products_loading">';
        if ( $general_options['loading_image'] ) {
            if ( substr( $general_options['loading_image'], 0, 3) == 'fa-' ) {
                $image .= '<i class="fa '.$general_options['loading_image'].' '.$image_class.'"></i>';
            } else {
                $image .= '<i class="fa '.$image_class.'"><img class="berocket_widget_icon" src="'.$general_options['loading_image'].'" alt=""></i>';
            }
        } else {
            $image .= '<i class="fa fa-spinner '.$image_class.'"></i>';
        }
        if ( $general_options['use_wpml'] ) {
            $image .= '<span class="'.$messages_options['loading_class'].'">'.__( 'Loading...', 'BeRocket_LMP_domain' ).'</span></div>';
            $end_text = '<div class="lmp_products_loading"><span class="'.$messages_options['end_text_class'].'">'.__( 'No more products', 'BeRocket_LMP_domain' ).'</span></div>';
        } else {
            $image .= '<span class="'.$messages_options['loading_class'].'">'.$messages_options['loading'].'</span></div>';
            $end_text = '<div class="lmp_products_loading"><span class="'.$messages_options['end_text_class'].'">'.$messages_options['end_text'].'</span></div>';
        }
        $load_more_button = $this->get_load_more_button();
        $load_prev_button = $this->get_load_more_button('br_lmp_prev_settings');

        wp_localize_script(
            'berocket_lmp_js',
            'the_lmp_js_data',
            apply_filters('berocket_the_lmp_script', array(
                'type'          => $general_options['type'],
                'update_url'    => empty($general_options['update_url']), // if $general_options['update_url'] is set it means stop updating
                'use_mobile'    => $general_options['use_mobile'],
                'mobile_type'   => $general_options['mobile_type'],
                'mobile_width'  => $general_options['mobile_width'],
                'is_AAPF'       => ( br_is_plugin_active( 'filters', '2.0.5' ) || br_is_plugin_active( 'AJAX_filters', '2.0.5' ) ),
                'buffer'        => $general_options['buffer'],
                'use_prev_btn'  => $prev_options['enable_prev'],

                'load_image'    => $image,
                'load_img_class'=> '.lmp_products_loading',

                'load_more'     => $load_more_button,
                'load_prev'     => $load_prev_button,

                'lazy_load'     => $lazy_load_options['use_lazy_load'],
                'lazy_load_m'   => $lazy_load_options['use_lazy_load_mobile'],
                'LLanimation'   => $lazy_load_options['animation'],

                'end_text'      => $end_text,

                'javascript'    => apply_filters( 'berocket_lmp_user_func', $javascript_options ),

                'products'      => $products_selector,
                'item'          => $item_selector,
                'pagination'    => $pagination_selector,
                'next_page'     => $next_page_selector,
                'prev_page'     => $prev_page_selector,
            ))
        );
    }

    public static function the7_fix($scripts) {
        $scripts['after_update'] = 'fixWooIsotope();fixWooOrdering(); '.$scripts['after_update'];
        return $scripts;
    }
    
    public function include_front() {
        wp_enqueue_script( 'berocket_lmp_js', plugins_url( 'js/load_products.js', __FILE__ ), array( 'jquery' ), $this->info['version'] );
        wp_register_style( 'berocket_lmp_style', plugins_url( 'css/load_products.css', __FILE__ ), "", $this->info['version'] );
        wp_enqueue_style( 'berocket_lmp_style' );
        $this->add_javascript_data();
    }
    
    public function include_admin() {
        if( ! empty($_GET['page']) && $_GET['page'] == 'br_load_more_products' ) {
            wp_register_style( 'berocket_lmp_admin_style', plugins_url( 'css/admin.css', __FILE__ ), "", $this->info['version'] );
            wp_enqueue_style( 'berocket_lmp_admin_style' );
            wp_enqueue_script( 'berocket_lmp_admin', plugins_url( 'js/admin.js', __FILE__ ), array( 'jquery' ), $this->info['version'] );
        }
    }
    
    public function admin_settings( $tabs_info = array(), $data = array() ) {
        wp_enqueue_script( 'jquery-ui-core' );
        wp_enqueue_script( 'jquery-ui-draggable' );
        wp_enqueue_script( 'jquery-ui-resizable' );
        wp_register_style( 'jquery-ui-smoothness', plugins_url( 'css/jquery-ui.min.css', __FILE__ ), "", BeRocket_Load_More_Products_version );
        wp_enqueue_style('jquery-ui-smoothness');

        $options = parent::get_option();
        $Selectors = array();
        $Selectors[] = array(
            "label"     => __( 'Products Container Selector', "BeRocket_LMP_domain" ),
            "name"      => array("br_lmp_selectors_settings", "products"),
            "type"      => "text",
            "value"     => $this->defaults["br_lmp_selectors_settings"]["products"],
            "class"     => "lmp_button_selectors lmp_button_selectorsfalse lmp_button_selector_products",
        );
        $Selectors[] = array(
            "label"     => __( 'Product Item Selector', "BeRocket_LMP_domain" ),
            "name"      => array("br_lmp_selectors_settings", "item"),
            "type"      => "text",
            "value"     => $this->defaults["br_lmp_selectors_settings"]["item"],
            "class"     => "lmp_button_selectors lmp_button_selectorsfalse lmp_button_selector_item",
        );
        $Selectors[] = array(
            "label"     => __( 'Pagination Selector', "BeRocket_LMP_domain" ),
            "name"      => array("br_lmp_selectors_settings", "pagination"),
            "type"      => "text",
            "value"     => $this->defaults["br_lmp_selectors_settings"]["pagination"],
            "class"     => "lmp_button_selectors lmp_button_selectorsfalse lmp_button_selector_pagination",
        );
        $Selectors[] = array(
            "label"     => __( 'Next Page Selector', "BeRocket_LMP_domain" ),
            "name"      => array("br_lmp_selectors_settings", "next_page"),
            "type"      => "text",
            "value"     => $this->defaults["br_lmp_selectors_settings"]["next_page"],
            "class"     => "lmp_button_selectors lmp_button_selectorsfalse lmp_button_selector_next_page",
        );
        $Selectors[] = array(
            "label"     => __( 'Previous Page Selector', "BeRocket_LMP_domain" ),
            "name"      => array("br_lmp_selectors_settings", "prev_page"),
            "type"      => "text",
            "value"     => $this->defaults["br_lmp_selectors_settings"]["prev_page"],
            "class"     => "lmp_button_selectors lmp_button_selectorsfalse lmp_button_selector_prev_page",
        );
        $Selectors[] = array(
            "section"   => "autoselector_set",
            "value"     => "",
        );
        parent::admin_settings(
            array(
                'General' => array(
                    'icon' => 'cog',
                ),
                'Button-Settings' => array(
                    'icon' => 'square',
                ),
                'Previous-Settings' => array(
                    'icon' => 'square',
                ),
                'Selectors' => array(
                    'icon' => 'circle-o',
                ),
                'JavaScript' => array(
                    'icon' => 'code',
                ),
                'CSS'     => array(
                    'icon' => 'css3',
                ),
                'License' => array(
                    'icon' => 'unlock-alt',
                    'link' => admin_url( 'admin.php?page=berocket_account' )
                ),
            ),
            array(
            'General' => array(
                'general_type' => array(
                    "label"     => __( "Products Loading Type", 'BeRocket_LMP_domain' ),
                    "name"     => array("br_lmp_general_settings", "type"),   
                    "type"     => "selectbox",
                    "options"  => array(
                        array('value' => 'none', 'text' => __('None', 'BeRocket_LMP_domain')),
                        array('value' => 'infinity_scroll', 'text' => __('Infinity Scroll', 'BeRocket_LMP_domain')),
                        array('value' => 'more_button', 'text' => __('Load More Button', 'BeRocket_LMP_domain')),
                        array('value' => 'pagination', 'text' => __('AJAX Pagination', 'BeRocket_LMP_domain')),
                    ),
                    "value"    => 'infinity_scroll',
                ),
                'load_image' => array(
                    "label"     => __( 'Loading Image', 'BeRocket_LMP_domain' ),
                    "items"     => array(
                        'image' => array(
                            "type"      => "fontawesome",
                            "name"      => array("br_lmp_general_settings", "loading_image"),
                            "value"     => "fa-spinner",
                        ),
                        'rotate_image' => array(
                            "type"      => "checkbox",
                            "name"      => array("br_lmp_general_settings", "rotate_image"),
                            "value"     => "1",
                            "label_for" => __( 'Rotate image on load' , "BeRocket_LMP_domain" ),
                        ),
                    ),
                ),
                array(
                    "label"     => __( "Buffer Pixels", "BeRocket_LMP_domain" ),
                    "type"      => "number",
                    "name"      => array("br_lmp_general_settings", "buffer"),
                    "value"     => $this->defaults["br_lmp_general_settings"]["buffer"]
                ),
                'update_url' => array(
                    "label"     => __( "Don't update url when next page shown", "BeRocket_LMP_domain" ),
                    "type"      => "checkbox",
                    "name"      => array("br_lmp_general_settings", "update_url"),
                    "value"     => "1"
                ),
                'only_woo_pages' => array(
                    "label"     => __( "JavaScript and CSS is used on WooCommerce pages only", "BeRocket_LMP_domain" ),
                    "type"      => "checkbox",
                    "name"      => array("br_lmp_general_settings", "only_woo_pages"),
                    "value"     => "1",
                ),
            ),
            'Button-Settings' => array(
                'btn_custom_class' => array(
                    "label"     => __( "Custom Class", "BeRocket_LMP_domain" ),
                    "name"      => "custom_class",
                    "section"   => "btn_custom_class",
                    "value"     => "",
                ),
                'button_text' =>array(
                    "label"     => __( "Text on button", "BeRocket_LMP_domain" ),
                    "name"      => array("br_lmp_button_settings", "button_text"),
                    "type"      => "text",
                    "value"     => $this->defaults["br_lmp_button_settings"]["button_text"],
                    "class"     => "lmp_button_settings",
                    "extra"     => 'data-default="'.$this->defaults["br_lmp_button_settings"]["button_text"].'" data-style="text"'
                ),
                'bg_btn_color' => array(
                    "label"     => __( "Background color", "BeRocket_LMP_domain" ),
                    "type"      => "color",
                    "name"      => array("br_lmp_button_settings", "background-color"),
                    "value"     => $this->defaults["br_lmp_button_settings"]["background-color"],
                    "class"     => "bg_btn_color"
                ),
                'bg_btn_color_hover' => array(
                    "label"     => __( "Background color on mouse over", "BeRocket_LMP_domain" ),
                    "type"      => "color",
                    "name"      => array("br_lmp_button_settings", "hover", "background-color"),
                    "value"     => $this->defaults["br_lmp_button_settings"]["hover"]["background-color"],
                    "class"     => "bg_btn_color_hover"
                ),
                'btn_border_color' => array(
                    "label"     => __( "Border color", "BeRocket_LMP_domain" ),
                    "type"      => "color",
                    "name"      => array("br_lmp_button_settings", "border-color"),
                    "value"     => $this->defaults["br_lmp_button_settings"]["border-color"],
                    "class"     => "btn_border_color"
                ),
                'txt_btn_color' => array(
                    "label"     => __( "Text color", "BeRocket_LMP_domain" ),
                    "type"      => "color",
                    "name"      => array("br_lmp_button_settings", "color"),
                    "value"     => $this->defaults["br_lmp_button_settings"]["color"],
                    "class"     => "txt_btn_color"
                ),
                'txt_btn_color_hover' => array(
                    "label"     => __( "Text color on mouse over", "BeRocket_LMP_domain" ),
                    "type"      => "color",
                    "name"      => array("br_lmp_button_settings", "hover", "color"),
                    "value"     => $this->defaults["br_lmp_button_settings"]["hover"]["color"],
                    "class"     => "txt_btn_color_hover"
                ),
                'btn_font_size' => array(
                    "label"     => __( "Font size", "BeRocket_LMP_domain" ),
                    "type"      => "number",
                    "name"      => array("br_lmp_button_settings", "font-size"),
                    "value"     => $this->defaults["br_lmp_button_settings"]["font-size"],
                    "class"     => "lmp_button_settings",
                    "extra"     => 'data-style="font-size" data-type="px" data-default="' .  $this->defaults['br_lmp_button_settings']['font-size'] . '"'
                ),
                'paddings' => array(
                    "label"    => __('Paddings', 'BeRocket_products_label_domain'),
                    "td_class" => "berocket-margin-paddings-block-parent",
                    "items" => array(
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_button_settings", "padding-top"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="padding-top" data-type="px" data-default="' .  $this->defaults['br_lmp_button_settings']['padding-top'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Top', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_button_settings", "padding-right"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="padding-right" data-type="px" data-default="' .  $this->defaults['br_lmp_button_settings']['padding-right'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Right', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_button_settings", "padding-bottom"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="padding-bottom" data-type="px" data-default="' .  $this->defaults['br_lmp_button_settings']['padding-bottom'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Bottom', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_button_settings", "padding-left"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="padding-left" data-type="px" data-default="' .  $this->defaults['br_lmp_button_settings']['padding-left'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Left', 'BeRocket_products_label_domain')
                        ),
                    )
                ),
                'margin' => array(
                    "label"    => __('Margin', 'BeRocket_products_label_domain'),
                    "td_class" => "berocket-margin-paddings-block-parent",
                    "items" => array(
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_button_settings", "margin-top"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="margin-top" data-type="px" data-default="' .  $this->defaults['br_lmp_button_settings']['margin-top'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Top', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_button_settings", "margin-right"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="margin-right" data-type="px" data-default="' .  $this->defaults['br_lmp_button_settings']['margin-right'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Right', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_button_settings", "margin-bottom"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="margin-bottom" data-type="px" data-default="' .  $this->defaults['br_lmp_button_settings']['margin-bottom'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Bottom', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_button_settings", "margin-left"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="margin-left" data-type="px" data-default="' .  $this->defaults['br_lmp_button_settings']['margin-left'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Left', 'BeRocket_products_label_domain')
                        ),
                    )
                ),
                'border' => array(
                    "label"    => __('Border', 'BeRocket_products_label_domain'),
                    "td_class" => "berocket-margin-paddings-block-parent",
                    "items" => array(
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_button_settings", "border-top"),
                            "value"    => "",
                            "extra"    => 'min="0" data-field="border" data-style="border-top" data-type="px" data-default="' .  $this->defaults['br_lmp_button_settings']['border-top'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Top', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_button_settings", "border-right"),
                            "value"    => "",
                            "extra"    => 'min="0" data-field="border" data-style="border-right" data-type="px" data-default="' .  $this->defaults['br_lmp_button_settings']['border-right'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Right', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_button_settings", "border-bottom"),
                            "value"    => "",
                            "extra"    => 'min="0" data-field="border" data-style="border-bottom" data-type="px" data-default="' .  $this->defaults['br_lmp_button_settings']['border-bottom'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Bottom', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_button_settings", "border-left"),
                            "value"    => "",
                            "extra"    => 'min="0" data-field="border" data-style="border-left" data-type="px" data-default="' .  $this->defaults['br_lmp_button_settings']['border-left'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Left', 'BeRocket_products_label_domain')
                        ),
                    )
                ),
                'border-radius' => array(
                    "label"    => __('Border radius', 'BeRocket_products_label_domain'),
                    "td_class" => "berocket-margin-paddings-block-parent",
                    "items" => array(
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_button_settings", "border-top-left-radius"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="border-top-left-radius" data-type="px" data-default="' .  $this->defaults['br_lmp_button_settings']['border-top-left-radius'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Top-Left', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_button_settings", "border-top-right-radius"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="border-top-right-radius" data-type="px" data-default="' .  $this->defaults['br_lmp_button_settings']['border-top-right-radius'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Top-Right', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_button_settings", "border-bottom-left-radius"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="border-bottom-left-radius" data-type="px" data-default="' .  $this->defaults['br_lmp_button_settings']['border-bottom-left-radius'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Btm-Left', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_button_settings", "border-bottom-right-radius"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="border-bottom-right-radius" data-type="px" data-default="' .  $this->defaults['br_lmp_button_settings']['border-bottom-right-radius'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Btm-Right', 'BeRocket_products_label_domain')
                        ),
                    )
                ),
                array(
                    "section"   => "btn_default",
                    "value"     => "",
                ),
            ),
            'Previous-Settings' => array(
                'enable_prev' => array(
                    "label"     => __( "Enable Previous Button", "BeRocket_LMP_domain" ),
                    "type"      => "checkbox",
                    "name"      => array("br_lmp_prev_settings", "enable_prev"),
                    "value"     => "1"
                ),
                'btn_prev_custom_class' => array(
                    "label"     => __( "Custom Class", "BeRocket_LMP_domain" ),
                    "name"      => "custom_class",
                    "section"   => "btn_prev_custom_class",
                    "value"     => "",
                ),
                'button_prev_text' =>array(
                    "label"     => __( "Text on button", "BeRocket_LMP_domain" ),
                    "name"      => array("br_lmp_prev_settings", "button_text"),
                    "type"      => "text",
                    "value"     => $this->defaults["br_lmp_prev_settings"]["button_text"],
                    "class"     => "lmp_button_settings",
                    "extra"     => 'data-default="'.$this->defaults["br_lmp_prev_settings"]["button_text"].'" data-style="text"'
                ),
                'bg_btn_color' => array(
                    "label"     => __( "Background color", "BeRocket_LMP_domain" ),
                    "type"      => "color",
                    "name"      => array("br_lmp_prev_settings", "background-color"),
                    "value"     => $this->defaults["br_lmp_prev_settings"]["background-color"],
                    "class"     => "bg_btn_color"
                ),
                'bg_btn_color_hover' => array(
                    "label"     => __( "Background color on mouse over", "BeRocket_LMP_domain" ),
                    "type"      => "color",
                    "name"      => array("br_lmp_prev_settings", "hover", "background-color"),
                    "value"     => $this->defaults["br_lmp_prev_settings"]["hover"]["background-color"],
                    "class"     => "bg_btn_color_hover"
                ),
                'btn_border_color' => array(
                    "label"     => __( "Border color", "BeRocket_LMP_domain" ),
                    "type"      => "color",
                    "name"      => array("br_lmp_prev_settings", "border-color"),
                    "value"     => $this->defaults["br_lmp_prev_settings"]["border-color"],
                    "class"     => "btn_border_color"
                ),
                'txt_btn_color' => array(
                    "label"     => __( "Text color", "BeRocket_LMP_domain" ),
                    "type"      => "color",
                    "name"      => array("br_lmp_prev_settings", "color"),
                    "value"     => $this->defaults["br_lmp_prev_settings"]["color"],
                    "class"     => "txt_btn_color"
                ),
                'txt_btn_color_hover' => array(
                    "label"     => __( "Text color on mouse over", "BeRocket_LMP_domain" ),
                    "type"      => "color",
                    "name"      => array("br_lmp_prev_settings", "hover", "color"),
                    "value"     => $this->defaults["br_lmp_prev_settings"]["hover"]["color"],
                    "class"     => "txt_btn_color_hover"
                ),
                'btn_font_size' => array(
                    "label"     => __( "Font size", "BeRocket_LMP_domain" ),
                    "type"      => "number",
                    "name"      => array("br_lmp_prev_settings", "font-size"),
                    "value"     => $this->defaults["br_lmp_prev_settings"]["font-size"],
                    "class"     => "lmp_button_settings",
                    "extra"     => 'data-style="font-size" data-type="px" data-default="' .  $this->defaults['br_lmp_prev_settings']['font-size'] . '"'
                ),
                'paddings' => array(
                    "label"    => __('Paddings', 'BeRocket_products_label_domain'),
                    "td_class" => "berocket-margin-paddings-block-parent",
                    "items" => array(
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_prev_settings", "padding-top"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="padding-top" data-type="px" data-default="' .  $this->defaults['br_lmp_prev_settings']['padding-top'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Top', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_prev_settings", "padding-right"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="padding-right" data-type="px" data-default="' .  $this->defaults['br_lmp_prev_settings']['padding-right'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Right', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_prev_settings", "padding-bottom"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="padding-bottom" data-type="px" data-default="' .  $this->defaults['br_lmp_prev_settings']['padding-bottom'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Bottom', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_prev_settings", "padding-left"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="padding-left" data-type="px" data-default="' .  $this->defaults['br_lmp_prev_settings']['padding-left'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Left', 'BeRocket_products_label_domain')
                        ),
                    )
                ),
                'margin' => array(
                    "label"    => __('Margin', 'BeRocket_products_label_domain'),
                    "td_class" => "berocket-margin-paddings-block-parent",
                    "items" => array(
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_prev_settings", "margin-top"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="margin-top" data-type="px" data-default="' .  $this->defaults['br_lmp_prev_settings']['margin-top'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Top', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_prev_settings", "margin-right"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="margin-right" data-type="px" data-default="' .  $this->defaults['br_lmp_prev_settings']['margin-right'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Right', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_prev_settings", "margin-bottom"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="margin-bottom" data-type="px" data-default="' .  $this->defaults['br_lmp_prev_settings']['margin-bottom'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Bottom', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_prev_settings", "margin-left"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="margin-left" data-type="px" data-default="' .  $this->defaults['br_lmp_prev_settings']['margin-left'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Left', 'BeRocket_products_label_domain')
                        ),
                    )
                ),
                'border' => array(
                    "label"    => __('Border', 'BeRocket_products_label_domain'),
                    "td_class" => "berocket-margin-paddings-block-parent",
                    "items" => array(
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_prev_settings", "border-top"),
                            "value"    => "",
                            "extra"    => 'min="0" data-field="border" data-style="border-top" data-type="px" data-default="' .  $this->defaults['br_lmp_prev_settings']['border-top'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Top', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_prev_settings", "border-right"),
                            "value"    => "",
                            "extra"    => 'min="0" data-field="border" data-style="border-right" data-type="px" data-default="' .  $this->defaults['br_lmp_prev_settings']['border-right'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Right', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_prev_settings", "border-bottom"),
                            "value"    => "",
                            "extra"    => 'min="0" data-field="border" data-style="border-bottom" data-type="px" data-default="' .  $this->defaults['br_lmp_prev_settings']['border-bottom'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Bottom', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_prev_settings", "border-left"),
                            "value"    => "",
                            "extra"    => 'min="0" data-field="border" data-style="border-left" data-type="px" data-default="' .  $this->defaults['br_lmp_prev_settings']['border-left'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Left', 'BeRocket_products_label_domain')
                        ),
                    )
                ),
                'border-radius' => array(
                    "label"    => __('Border radius', 'BeRocket_products_label_domain'),
                    "td_class" => "berocket-margin-paddings-block-parent",
                    "items" => array(
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_prev_settings", "border-top-left-radius"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="border-top-left-radius" data-type="px" data-default="' .  $this->defaults['br_lmp_prev_settings']['border-top-left-radius'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Top-Left', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_prev_settings", "border-top-right-radius"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="border-top-right-radius" data-type="px" data-default="' .  $this->defaults['br_lmp_prev_settings']['border-top-right-radius'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Top-Right', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_prev_settings", "border-bottom-left-radius"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="border-bottom-left-radius" data-type="px" data-default="' .  $this->defaults['br_lmp_prev_settings']['border-bottom-left-radius'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Btm-Left', 'BeRocket_products_label_domain')
                        ),
                        array(
                            "type"     => "number",
                            "name"     => array("br_lmp_prev_settings", "border-bottom-right-radius"),
                            "value"    => "",
                            "extra"    => 'min="0" data-style="border-bottom-right-radius" data-type="px" data-default="' .  $this->defaults['br_lmp_prev_settings']['border-bottom-right-radius'] . '"',
                            "class"    => "berocket-margin-paddings-block lmp_button_settings",
                            "label_be_for"=> __('Btm-Right', 'BeRocket_products_label_domain')
                        ),
                    )
                ),
                array(
                    "section"   => "btn_prev_default",
                    "value"     => "",
                ),
            ),
            'Selectors' => $Selectors,
            'JavaScript' => array(
                array(
                    "type"  => "textarea",
                    "label" => __( "Before Update", "BeRocket_LMP_domain" ),
                    "name"  => array("br_lmp_javascript_settings", "before_update"),
                    "value" => "",
                ),
                array(
                    "type"  => "textarea",
                    "label" => __( "After Update", "BeRocket_LMP_domain" ),
                    "name"  => array("br_lmp_javascript_settings", "after_update"),
                    "value" => "",
                ),
            ),
            'CSS'     => array(
                'global_font_awesome_disable' => array(
                    "label"     => __( 'Disable Font Awesome', "BeRocket_AJAX_domain" ),
                    "type"      => "checkbox",
                    "name"      => "fontawesome_frontend_disable",
                    "value"     => '1',
                    'label_for' => __('Don\'t loading css file for Font Awesome on site front end. Use it only if you doesn\'t uses Font Awesome icons in widgets or you have Font Awesome in your theme.', 'BeRocket_AJAX_domain'),
                ),
                'global_fontawesome_version' => array(
                    "label"    => __( 'Font Awesome Version', "BeRocket_AJAX_domain" ),
                    "name"     => "fontawesome_frontend_version",
                    "type"     => "selectbox",
                    "options"  => array(
                        array('value' => '', 'text' => __('Font Awesome 4', 'BeRocket_AJAX_domain')),
                        array('value' => 'fontawesome5', 'text' => __('Font Awesome 5', 'BeRocket_AJAX_domain')),
                    ),
                    "value"    => '',
                    "label_for" => __('Version of Font Awesome that will be used on front end. Please select version that you have in your theme', 'BeRocket_AJAX_domain'),
                ),
                array(
                    "type"  => "textarea",
                    "label" => __( "Custom CSS", "BeRocket_LMP_domain" ),
                    "name"  => "custom_css",
                    "value" => "",
                ),
            ),
        ) );
    }
    
    /*
     *  SECTIONS
     */
      
    //BUTTON
    
    public function section_btn_custom_class ( $item, $options )
    {
        $html = "<th>" . $item['label'] . "</th>".
            "<td>".
                "<input class='lmp_button_settings' data-style='custom_css' name='" . $this->values['settings_name'] . "[br_lmp_button_settings][" . $item['name'] . "]' value='" . $options['br_lmp_button_settings']['custom_class'] . "' type='text'>".
            "</td></tr><tr>".
            "<td colspan='2'><div class='btn-preview-td'>".
                "<h1 style='text-align: center;'>Preview</h1>".
                "<div class='btn-preview-block'>" . $this->get_load_more_button() . "</div>".
            "</div></td>";
        return $html;
    }

   
    public function section_btn_default ( $item, $options )
    {
       $html = '<th></th>'.
                '<td>'.
                    '<input type="button" value="' . __( 'Set all to default', 'BeRocket_LMP_domain' ) . '" class="all_theme_default_lmp button">'.
                '</td>';
        return $html;
    }
    
    public function section_btn_prev_custom_class ( $item, $options )
    {
        $html = "<th>" . $item['label'] . "</th>".
            "<td>".
                "<input class='lmp_button_settings' data-style='custom_css' name='" . $this->values['settings_name'] . "[br_lmp_prev_settings][" . $item['name'] . "]' value='" . $options['br_lmp_prev_settings']['custom_class'] . "' type='text'>".
            "</td></tr><tr>".
            "<td colspan='2'><div class='btn-prev-preview-td'>".
                "<h1 style='text-align: center;'>Preview</h1>".
                "<div class='btn-preview-block'>" . $this->get_load_more_button('br_lmp_prev_settings') . "</div>".
            "</td>";
        return $html;
    }

   
    public function section_btn_prev_default ( $item, $options )
    {
       $html = '<th></th>'.
                '<td>'.
                    '<input type="button" value="' . __( 'Set all to default', 'BeRocket_LMP_domain' ) . '" class="all_theme_default_lmp button">'.
                '</td>';
        return $html;
    }
    
    //SELECTORS
    
    public function section_autoselector_set ( $item, $options )
    {
        do_action('BeRocket_wizard_javascript');
        
        $html = '</tr>
            <tr><td colspan="2" class="lmp_button_selectors lmp_button_selectorsfalse" style=" font-size: 32px; font-weight: 600; text-align: center; padding-top: 40px;">' . __('OR', 'BeRocket_LMP_domain') . '</td></tr><tr>
            <tr>
            <th scope="row">' . __('Get selectors automatically', 'BeRocket_AJAX_domain') . '</th>
            <td>
                <h4>' . __('How it work:', 'BeRocket_AJAX_domain') . '</h4>
                <ol>
                    <li>' . __('Run Auto-selector', 'BeRocket_AJAX_domain') . '</li>
                    <li>' . __('Wait until end <strong style="color:red;">do not close this page</strong>', 'BeRocket_AJAX_domain') . '</li>
                    <li>' . __('Save settings with new selectors', 'BeRocket_AJAX_domain') . '</li>
                </ol>
                ' . BeRocket_wizard_generate_autoselectors(array('products' => '.lmp_button_selector_products', 'product' => '.lmp_button_selector_item', 'pagination' => '.lmp_button_selector_pagination', 'next_page' => '.lmp_button_selector_next_page', 'prev_page' => '.lmp_button_selector_prev_page')) . '
            </td>
        </tr><tr>';
        return $html;
    }
    /*
     *  SECTIONS END
     */ 
    public function save_br_selectors() {
        if( current_user_can( 'manage_options' ) ) {
			$products = @$_POST['products'];
			$product = @$_POST['product'];
			$pagination = @$_POST['pagination'];
			$next = @$_POST['next'];
			$next = $pagination.' '.$next;
            $options = parent::get_option();
            $options['br_lmp_selectors_settings'] = array(
                    'products'              => $products,
                    'item'                  => $product,
                    'pagination'            => $pagination,
                    'next_page'             => $next,
            );
            update_option( $this->values['settings_name'] , $options );
			echo admin_url( 'admin.php?page=' . $this->values['option_page'] . '&tab=selectors' );
			wp_die();
        }
	}
}new BeRocket_LMP;
