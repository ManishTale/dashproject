<?php
/**
 * Plugin Name: WooCommerce Custom Product Designer
 * Plugin URI: http://tshirtecommerce.com
 * Description: WooCommerce Custom Product Designer this plugin help you build a full website powerful with custom product online and sale.
 * Version: 4.4.1
 * Author: tshirtecommerce.com
 * Author URI: http://tshirtecommerce.com
 * License: GPL2
 */

$TSHIRTECOMMERCE_ROOT = dirname(dirname(dirname(dirname(__FILE__)))). '/tshirtecommerce/';

include_once($TSHIRTECOMMERCE_ROOT . 'includes/config.php');

include_once(dirname(__FILE__) .'/includes/class/' . "init.php");

// call to add-on options
$filelist = glob(dirname(__FILE__) .'/includes/' . "*.php");
if (count($filelist))
{
	foreach($filelist as $file)
	{
		include_once($file);
	}
}

// install plugin
function tshirtecommerce_plugin_activate() {
	add_option( 'tshirtecommerce_plugin_activate', true );

	$TSHIRTECOMMERCE_ROOT = dirname(dirname(dirname(dirname(__FILE__)))). '/tshirtecommerce/';

	if (file_exists($TSHIRTECOMMERCE_ROOT) === false)
	{
		WP_Filesystem();
		$file = dirname(__FILE__).'/core.zip';

		$unzipfile = unzip_file( $file, dirname(dirname(dirname(dirname(__FILE__)))). '/');

		// set permission
		$folder = array(
			'data/', 
			'uploaded/', 
			'cache/', 
			'cache/cart/', 
			'cache/design/'
		);

		setPermission($folder);

		$files = array(
			'data/lang.ini', 
			'data/arts.json', 
			'data/categories_art.json', 
			'data/colors.json', 
			'data/font_categories.json', 
			'data/fonts.json', 
			'data/products.json', 
			'data/settings.json',
		);
		setPermission($files, 0755);
	}

	global $wpdb;
	$check = $wpdb->get_var("SELECT ID FROM $wpdb->posts WHERE post_name='design-your-own'");
	if ($check == '')
	{
		$post = array(
			'post_name' => 'design-your-own',
			'post_status' => 'publish',
			'post_title' => 'design your own',
			'post_type' => 'page',
			'post_content' => '[tshirtecommerce]',
			'post_date' => date('Y-m-d H:i:s'),
		);      

		$page = wp_insert_post($post, false);		

	}
	do_action( 'tshirtecommerce_plugin_activate' );
}
register_activation_hook(__FILE__, 'tshirtecommerce_plugin_activate' );

function designer_manage()
{
	global $TSHIRTECOMMERCE_ROOT;
	$check 	= true;
	if (file_exists($TSHIRTECOMMERCE_ROOT) === false)
	{
		WP_Filesystem();
		$file = dirname(__FILE__).'/tshirtecommerce.zip';
		
		$unzipfile = unzip_file( $file, dirname($TSHIRTECOMMERCE_ROOT) );
		
		if ( !$unzipfile ) {
			$check = false;
		}
	}
		
	if ( is_super_admin() )
	{
		$user 	= wp_get_current_user();
		$_SESSION['is_admin'] = array(
			'login' => true,
			'email' => $user->data->user_email,
			'id' => $user->data->ID,
			'username' => $user->data->display_name,
		);		
	}
	else
	{
		$_SESSION['is_admin'] = false;
	}
	if ($check == true)
	{
		if(isset($_GET['task']))
		{
			$task 	= $_GET['task'];
			$task 	= '?/'.$task.'&';
		}
		else
		{
			$task 	= '?';
		}
		$url = network_site_url('tshirtecommerce/admin/index.php'.$task.'session_id='.session_id());		
		echo '<style>#wpcontent{padding-left:0;}#wpbody-content{padding-bottom:0;}#wpwrap > div#wpfooter{display: none;}</style>';
		echo "<script type='text/javascript'>function setHeightF(height){jQuery('#tshirtecommerce-build').attr('height', height + 'px').css('min-height', height+'px');}</script>";
		echo '<iframe id="tshirtecommerce-build" width="100%" height="800px" src="'.$url.'"></iframe>';
	}
	else
	{
		$download = plugin_dir_url(__FILE__) . 'tshirtecommerce.zip';
		echo 'Sorry, your server not support unzipping the file. Please click <a href="'.$download.'"><strong>here</strong></a> to download file, unzip and upload to path '.dirname($TSHIRTECOMMERCE_ROOT). '/';
	}		
}

// save setting
function online_designer_config() {

	//must check that the user has the required capability 
	if (!current_user_can('manage_options'))
	{
		wp_die( __('You do not have sufficient permissions to access this page.') );
	}

	// variables for the field and option names 
	$hidden_field_name 	= 'mt_submit_hidden';
	$data_field_name_url	= 'designer[url]';
	$data_field_name_start	= 'designer[btn-start]';
	$data_field_name_custom	= 'designer[btn-custom]';
	$data_field_extra_class	= 'designer[btn-extra_class]';

	// Read in existing option value from database
	$opt_val = get_option( 'online_designer' );

	if( isset($_POST[ $hidden_field_name ]) && $_POST[ $hidden_field_name ] == 'Y' )
	{
		// Read their posted value
		$opt_val = $_POST[ 'designer' ];

		// add hooks to save settings
		$opt_val	= apply_filters( 'tshirtecommerce_settings_save', $opt_val);

		// Save the posted value in the database
		update_option( 'online_designer', $opt_val );
	}
	if (empty($opt_val['btn-custom']))
	{
		$opt_val['btn-custom'] = 'Customize Design';
	}
	if (empty($opt_val['btn-start']))
	{
		$opt_val['btn-start'] = 'Start Design';
	}
	if (empty($opt_val['btn-extra_class']))
	{
		$opt_val['btn-extra_class'] = '';
	}

   	// settings form
	$pages = get_pages();

 	require_once(dirname(__FILE__).'/admin/html/settings.php');
}

// show link setting in page plugins
function online_designer_settings_link($actions, $file)
{
	if(false !== strpos($file, 'online_designer'))
		$actions['settings'] = '<a href="options-general.php?page=online_designer">Settings</a>';
	return $actions; 
}
add_filter('plugin_action_links', 'online_designer_settings_link', 2, 2);


// add link of product
if(!function_exists('e_wc_custom_product_data_fields'))
{
  function e_wc_custom_product_data_fields()
  {
		$custom_product_data_fields = array();

		$custom_product_data_fields[] = array(
			  'tab_name'    => __('Product Designer', 'wc_cpdf'),
		);

		$custom_product_data_fields[] = array(
			  'id'          => '_product_id',
			  'type'        => 'hidden',                 
			  'class'       => 'large',
		);
		
		$custom_product_data_fields[] = array(
			  'id'          => '_disabled_product_design',
			  'type'        => 'hidden',                 
			  'class'       => 'large',
		);
		
		$custom_product_data_fields[] = array(
			  'id'          => '_product_title_img',
			  'type'        => 'image',
			  'class'       => 'large'
		);

		$custom_product_data_fields = apply_filters( 'tshirt_custom_product_data_fields', $custom_product_data_fields);
		
		return $custom_product_data_fields;
  }
}

// check WordPress version
if(!function_exists('wc_productdata_options_wp_requred'))
{
  function wc_productdata_options_wp_requred()
  {
	global $wp_version;
	$plugin = plugin_basename(__FILE__);
	$plugin_data = get_plugin_data(__FILE__, false);

	if(version_compare($wp_version, "3.3", "<"))
	{
		if(is_plugin_active($plugin))
		{
			deactivate_plugins($plugin);
			wp_die("'".$plugin_data['Name']."' requires WordPress 3.3 or higher, and has been deactivated! Please upgrade WordPress and try again.<br /><br />Back to <a href='".admin_url()."'>WordPress Admin</a>.");
		}
	}
  }

  add_action('admin_init', 'wc_productdata_options_wp_requred');
}



// Checks if the WooCommerce plugins is installed and active.
if( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) )
{
  require_once dirname( __FILE__ ) . '/class-wc-product-data-fields.php';
}
elseif( is_multisite() )
{
	$network_plugins = get_site_option('active_sitewide_plugins');
	if( isset($network_plugins['woocommerce/woocommerce.php']) )
	{
		require_once dirname( __FILE__ ) . '/class-wc-product-data-fields.php';
	}
}

// show button design
add_action( 'woocommerce_after_shop_loop_item_title', 'P9f_design_button', 10 );
add_action( 'woocommerce_before_add_to_cart_button', 'P9f_design_button', 30 );
function P9f_design_button()
{
	global $wc_cpdf, $wp_query, $product, $P9f;

	$product_id = get_the_ID();
	$link 	= $wc_cpdf->get_value($product_id, '_product_id');
	$settings 	= $P9f->settings;

	$show_butoon = apply_filters( 'tshirtecommerce_design_button', true, $product_id, $settings);

	if ($link != '')
	{
		$page 	= $settings['page_designer'];

		$array 	= explode(':', $link);

		$price = get_post_meta( get_the_ID(), '_regular_price');
		if (isset($price[0]) && $price[0] > 0 && $product->is_type( 'variable' ) == false)
		{
			//echo '<div class="woocommerce_msrp">';

			// load product attribute
			if (is_product() && $wp_query->post->ID == $product_id)
			{
				do_action( 'tshirtecommerce_product_attribute', $array );
			}
			
			if ($show_butoon == true)
			{
				do_action( 'tshirtecommerce_product_button', $array );
				if (count($array) > 1)
				{
					if (count($array) < 5)
					{
						$link = $link. ':'. $product_id;
					}
					$link = add_query_arg( array('design'=>$link), $page );
					$link = apply_filters( 'tshirtecommerce_design_button_link', $link, $product_id, $settings );
					// echo '<a class="button e-custom-product '.$settings['btn-extra_class'].'" onclick="return loadProductDesign(this);" href="'.$link.'">'.$settings['btn-custom'].'</a>';			
				}
				else
				{
					if (is_numeric($array[0]))
					{
						$link = add_query_arg( array('product_id'=>$product_id), $page );
						$link = apply_filters( 'tshirtecommerce_design_button_link', $link, $product_id, $settings);
						if(stripos($link, 'idea_id'))
						{
							// echo '<a class="button e-custom-product '.$settings['btn-extra_class'].'" onclick="return loadProductDesign(this);" href="'.$link.'">'.$settings['btn-custom'].'</a>';	
						}
						else
						{
							// echo '<a class="button e-custom-product '.$settings['btn-extra_class'].'" onclick="return loadProductDesign(this);" href="'.$link.'">'.$settings['btn-start'].'</a>';		
						}
						
					}
					else
					{
						$link = add_query_arg( array('cart_id'=>$array[0]), $page, $settings);
						$link = apply_filters( 'tshirtecommerce_design_button_link', $link, $product_id );
						// echo '<a class="button e-custom-product '.$settings['btn-extra_class'].'" onclick="return loadProductDesign(this);" href="'.$link.'">'.$settings['btn-custom'].'</a>';	
					}
				}
			}
			
			//echo '</div><br />';
		}
		else
		{	
			if( $product->is_type( 'simple' ) )
			{
				echo '<span style="color: #ff0000;">Please add price of product</span>';
			}
			elseif( $product->is_type( 'variable' ) )
			{
				if (count($array) > 1)
				{
					$link = $link. ':'. $product_id;
					$link = add_query_arg( array('design'=>$link), $page );					
					echo '<input type="hidden" value="'.$link.'" class="product-design-link">';
				}
				else
				{
					echo '<input type="hidden" value="'.$page.'" class="product-design-link">';
				}				
			}
		}
	}
	else
	{
		remove_action( 'tshirtecommerce_product_attribute', 'designer_product_attribute');
	}
}

add_action( 'woocommerce_before_single_variation', 'design_button_variable');
function design_button_variable()
{
	global $wc_cpdf, $product, $P9f, $wp_query;

	$link = $wc_cpdf->get_value(get_the_ID(), '_product_id');	

	if ($link != '' && $product->is_type( 'variable' ))
	{
		$opt_val 	= $P9f->settings;

		$array 	= explode(':', $link);
		
		echo '<div class="woocommerce_msrp">';
		if (is_product() && $wp_query->post->ID == get_the_ID())
		{
			do_action( 'tshirtecommerce_product_attribute', $array );
			do_action( 'tshirtecommerce_product_button', $array );
		}
		echo '<a class="button" onclick="variationProduct(this)" href="javascript:void(0);">'.$opt_val['btn-start'].'</a>';						
		echo '</div><br />';

		$dg 	= $P9f->dgClass();
		$lang 	= $dg->lang('lang.ini', false);
		$html .= '<script type="text/javascript"> var txt_select_variation_product = "'.$lang['select_variation_product'].'"; var txt_out_of_stock_variation_product = "'.$lang['out_of_stock_variation_product'].'" </script>';

		echo $html;
	}
}

// add js to site
function P9f_scripts() {
	global $P9f;
	wp_enqueue_script( 'designer_app', plugins_url( 'assets/js/app.js', __FILE__ ), array(), $P9f->version, true );		
	wp_enqueue_style( 'designer_css', plugins_url( 'assets/css/font-end.css', __FILE__ ), array(), $P9f->version );		
}
add_action( 'wp_enqueue_scripts', 'P9f_scripts' );

// add js to admin
add_action( 'admin_init', 'designer_plugin_admin_init' );
function designer_plugin_admin_init() 
{
	if (!session_id())
	{
		session_start();
	}
	// Fix add session login on tab product design.
	if ( is_super_admin() )
	{
		$user 	= wp_get_current_user();
		if(isset($user->data->user_email))
		{
			$_SESSION['is_admin'] = array(
				'login' => true,
				'email' => $user->data->user_email,
				'id' => $user->data->ID,
				'username' => $user->data->display_name,
			);
		}
		else
		{
			$_SESSION['is_admin'] = false;
		}
	}
	// Fix add session login on tab product design.
	wp_register_style( 'designer_css_bootstrap', plugins_url('assets/css/bootstrap.min.css', __FILE__) );	
	wp_register_script( 'designer_js_bootstrap', plugins_url( 'assets/js/bootstrap.min.js', __FILE__ ) );		
	wp_register_script( 'designer_api', plugins_url( 'assets/js/app.js', __FILE__ ), array(), '4.2.1', true );
}

// ajax get all product design
// link wp-admin/admin-ajax.php?action=woo_products_action
add_action( 'wp_ajax_woo_products_action', 'wp_ajax_woo_products' );
add_action( 'wp_ajax_nopriv_woo_products_action', 'wp_ajax_woo_products' );
function wp_ajax_woo_products()
{
	global $wc_cpdf, $TSHIRTECOMMERCE_ROOT, $P9f;
	$args = array( 
		'post_type' => 'product', 
		'posts_per_page' => -1,
		'meta_query' => array(
			array('key' => 'wc_productdata_options')
		)
	);
	$products = get_posts( $args );
		
	//get product design
	$design = array();
	$design_ids = array();
	foreach ($products as $product)
	{	
		$ids = $wc_cpdf->get_value($product->ID, '_product_id');
		if ($ids != '')
		{
			$temp = explode(':', $ids);
			if (count($temp) == 1)
			{
				$design[$ids] = $product->ID;
				$design_ids[] = $ids;
			}
		}	
	}
	include_once(dirname(__FILE__).'/helper/functions.php');
	$json = $TSHIRTECOMMERCE_ROOT. 'data/products.json';
	$array = array(
		'products' => array()
	);
	if (file_exists($json))
	{
		$string = file_get_contents($json);
		if ($string != false)
		{
			$products = json_decode($string);
			if ( isset($products->products) && count($products->products) > 0)
			{
				// find categories
				$cate_products = $design_ids;
				if (isset($_POST['id']) && $_POST['id'] > 0)
				{
					$category_id = $_POST['id'];
					$cate_file = dirname(dirname(dirname(dirname(__FILE__)))). '/tshirtecommerce/data/product_categories.json';				
					if (file_exists($cate_file))
					{
						$product_ids = array();
						$content = file_get_contents($cate_file);
						if ($content != false)
						{
							$data = json_decode($content);
							
							for($i=0; $i < count($data); $i++)
							{
								if ($data[$i]->cate_id == $category_id && !in_array($data[$i]->product_id, $product_ids))
								{
									$product_ids[] = $data[$i]->product_id;
								}
							}
						}
						$cate_products = $product_ids;
					}
				}
								
				$dg 	= $P9f->dgClass();
				$lang = $dg->lang('lang.ini', false);
				
				foreach($products->products as $product)
				{
					if ( in_array($product->id, $design_ids) && in_array($product->id, $cate_products) )
					{
						$product->parent_id = $design[$product->id];
												
						if (isset($product->attributes->name))
						{
							$product->attribute = $dg->getAttributes($product->attributes);
						}
						else
						{
							$product->attribute = '';
						}

						$product->attribute .= quantity_ajax($product->min_order, $lang['quantity'], $lang['min_quantity']);
						$product->url = 	get_permalink($design[$product->id]);
						$array['products'][] = $product;
					}
				}
			}
		}
	}
	echo json_encode($array);
	die();
}

// add ajax
add_action( 'wp_ajax_designer_action', 'wp_ajax_designer' );
function wp_ajax_designer()
{
	global $wpdb; // this is how you get access to the database
	$key = $_POST['key'];
	if ($key == '1')
	{
		$link = $_POST['link'];		
		echo openURL($link);
	}
	else
	{
		$url = network_site_url('tshirtecommerce/admin.php?key=').$key;		
		echo openURL($url);
	}
	die();
}


function openURL($url)
{
	$data = false;
	if( function_exists('curl_exec') )
	{
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_REFERER, network_site_url());
		$data = curl_exec($ch);
		curl_close($ch);
	}
	if( $data == false && function_exists('file_get_contents') )
	{
		$data = @file_get_contents($url);
	}
	return $data;	
}

add_filter('the_content', 'add_shortcode_to_page_design');
function add_shortcode_to_page_design($content )
{
	global $post;
	$designer = get_option( 'online_designer' );

	if (isset($designer['url']) && $designer['url'] > 0)
	{
		$id = $designer['url'];
	}
	else
	{
		$id = 'design-your-own';
	}	
	if ( is_page( $id ) && $post->post_type == 'page')
	{	
		if ($post->ID == $id || $post->post_name == $id)
		{			
			if ( has_shortcode($content, 'tshirtecommerce') )
			{
				return $content;
			}
			else
			{
				$content = '[tshirtecommerce id="0"]';
				return $content;
			}
		}		
	}
	return $content;
}

function register_session(){
    if( !session_id() ){
    	session_start();
    }
     wc_setcookie( 'designer_session_id', session_id() );
}
add_action('init','register_session');


// add page designer
function tshirtecommerce_func( $atts )
{	
	/* fix auto save page design tool in adin page */
	if(is_admin() || isset($_GET['_locale']))
	{
		return;
	}
	
	global $woocommerce, $wc_cpdf;
	$html = '';
	if(function_exists('wc_get_cart_url'))
	{
		$cart_url = wc_get_cart_url();
	}
	else
	{
		$cart_url = $woocommerce->cart->get_cart_url();
	}
	
	$product_id = 0;
	if (isset($_GET['product_id']))
	{
		$product_id	 	= $_GET['product_id'];
	}
	else if(isset($_GET['design']))
	{
		$design = explode(':', $_GET['design']);
		if (isset($design[4]))
			$product_id = $design[4];
	}
	if ($product_id == 0)
	{
		if ( isset($atts['id']) && $atts['id'] > 0)
		{
			$product_id	= $atts['id'];
		}
		else
		{
			$args = array( 
				'post_type' => 'product', 
				'posts_per_page' => -1,
				'meta_query' => array(
					array('key' => 'wc_productdata_options')
				),
				'orderby' => 'modified'
			);
			$products = get_posts( $args );
			foreach ($products as $product)
			{	
				$id = $wc_cpdf->get_value($product->ID, '_product_id');
				if ($id != '' && is_numeric($id))
				{					
					$product_id = $product->ID;
					break;
				}
			}
		}
	}
	if ($product_id == 0)
	{
		$html .= '<div class="alert alert-danger" role="alert">Please add product design in woocommerce. <a href="https://www.youtube.com/watch?v=VJIOYJ3pSzk">View Video</a></div>';
	}
	else
	{
		$product_design = 1;
		$options_data = maybe_unserialize(get_post_meta($product_id, 'wc_productdata_options', true));
		if ( isset($options_data[0]) && isset($options_data[0]['_product_id']) &&  $options_data[0]['_product_id'] > 0)
		{
			$product_design = $options_data[0]['_product_id'];
		}
		
		// get link of page design
		$opt_val = get_option( 'online_designer' );
		if (isset($opt_val['url']) && $opt_val['url'] > 0)
		{
			$page = get_page_link($opt_val['url']);	
		}
		else
		{
			global $wpdb;
			$id = $wpdb->get_var("SELECT ID FROM $wpdb->posts WHERE post_name='design-your-own'");
			$page = get_page_link($id);
		}		
		
		$added_text = sprintf( _n( '%s has been added to your cart.', '%s have been added to your cart.', '', 'woocommerce' ), '' );
		
		$html .= '<script type="text/javascript">var woo_url_cart = "'.$cart_url.'"; var wp_ajaxurl = "'.admin_url('admin-ajax.php').'"; var urlDesign = "'.$page.'"; var text_cart_added=\''.$added_text.'\'</script>';
		$url = '';
		$link = $wc_cpdf->get_value($product_id, '_product_id');
		$array = explode(':', $link);
		if (isset($_GET['design']))
		{
			$design = $_GET['design'];
			$designs = explode(':', $design);			
			if (count($designs) == 5)
			{
				if ($designs[0] == 'cart')
					$url = network_site_url('tshirtecommerce/index.php?product='.$designs[2].'&color='.$designs[3].'&cart_id='.$designs[1].'&parent='.$designs[4]);
				else
					$url = network_site_url('tshirtecommerce/index.php?product='.$designs[2].'&color='.$designs[3].'&user='.$designs[0].'&id='.$designs[1].'&parent='.$designs[4]);
			}
			else
			{
				$url = network_site_url('tshirtecommerce/index.php?product='.$product_design.'&parent='.$product_id);		
			}
		}
		elseif(count($array) > 1)
		{
			$url = network_site_url('tshirtecommerce/index.php?product='.$array[2].'&color='.$array[3].'&user='.$array[0].'&id='.$array[1].'&parent='.$product_id);
			if(isset($_GET['cart_id']) && $_GET['cart_id'] != '')
				$url = network_site_url('tshirtecommerce/index.php?product='.$array[2].'&cart_id='.$_GET['cart_id']);
		}
		else
		{
			$url = network_site_url('tshirtecommerce/index.php?product='.$product_design.'&parent='.$product_id);
						
			if (isset($_GET['cart_id']))
			{
				$url = $url.'&cart_id='.$_GET['cart_id'];
			}
		}
		if (isset($_GET['variation_id']))
		{
			$url = $url . '&variation_id='.$_GET['variation_id'];
			$html .= '<script type="text/javascript">var product_variation = '.$_GET['variation_id'].'; var product_design_id = '.$_GET['product_id'].';</script>';
		}
		if (isset($_GET['attributes']))
		{
			$attribute = $_GET['attributes'];
			
			$attrs = explode(';', $attribute);
			$html .= '<script type="text/javascript">var product_attributes = {};';
			for($i=0; $i<count($attrs); $i++)
			{
				$field 	= explode('|', $attrs[$i]);
				$html 	.= 'product_attributes["'.$field[0].'"]="'.$field[1].'"; ';
			}
			$html .= '</script>';
			
			$url = $url . '&attributes='.$attribute;
		}
		if ( is_user_logged_in() ) 
		{
			$user 	= wp_get_current_user();
			$logged = array(
				'login' => true,
				'email' => $user->data->user_email,
				'id' => $user->data->ID,
				'is_admin' => false,
			);
			if ( is_super_admin() )
			{
				$logged['is_admin'] = true;
			}
			$_SESSION['is_logged'] = $logged;
		} 
		else
		{
			$_SESSION['is_logged'] = false;
		}		
		$url	= apply_filters( 'tshirt_set_url_designer', $url );
		
		$update_item = '';
		if(isset($_GET['update_item']))
		{
			$update_item = str_replace('&amp;', '&', get_remove_url($_GET['update_item']));
		}
		
		$html .= '<div class="row-designer-tool"></div>';
		$html .= "<link rel='stylesheet' href='".plugins_url('tshirtecommerce/assets/css/mobile.css')."' type='text/css' media='all' />";		
		$html .= '<script type="text/javascript">var urlDesignload = "'.$url.'"; var urlBack = "'.get_permalink($product_id).'"; var e_update_cart_item = "'.$update_item.'";</script>';
		
		do_action( 'tshirtecommerce_html', $opt_val );
	}
	return $html;
}
add_shortcode( 'tshirtecommerce', 'tshirtecommerce_func' );

function get_remove_url( $cart_item_key ) {
  $cart_page_url = wc_get_page_permalink( 'cart' );
  return apply_filters( 'woocommerce_get_remove_url', $cart_page_url ? wp_nonce_url( add_query_arg( 'remove_item', $cart_item_key, $cart_page_url ), 'woocommerce-cart' ) : '' );
}

// ajax add to cart
add_action( 'wp_ajax_woocommerce_add_to_cart_variable_rc', 'woocommerce_add_to_cart_variable_rc_callback' );
add_action( 'wp_ajax_nopriv_woocommerce_add_to_cart_variable_rc', 'woocommerce_add_to_cart_variable_rc_callback' );
function woocommerce_add_to_cart_variable_rc_callback() {
	global $woocommerce; 	
	ob_start();
	$product_id = apply_filters( 'woocommerce_add_to_cart_product_id', absint( $_POST['product_id'] ) );
	$quantity = empty( $_POST['quantity'] ) ? 1 : apply_filters( 'woocommerce_stock_amount', $_POST['quantity'] );
	$variation_id = $_POST['variation_id'];
	$variation  = $_POST['variation'];
	$passed_validation = apply_filters( 'woocommerce_add_to_cart_validation', true, $product_id, $quantity );
	$cart = WC()->cart->add_to_cart( $product_id, $quantity, $variation_id, $variation);
	if ( $passed_validation && $cart) 
	{
		do_action( 'woocommerce_ajax_added_to_cart', $product_id );
		
		if ( get_option( 'woocommerce_cart_redirect_after_add' ) == 'yes' ) {
			wc_add_to_cart_message( $product_id );
		}		

		// Return fragments
		WC_AJAX::get_refreshed_fragments();
	} 
	else 
	{
		$this->json_headers();

		// If there was an error adding to the cart, redirect to the product page to show any errors
		$data = array(
			'error' => true,
			'product_url' => apply_filters( 'woocommerce_cart_redirect_after_error', get_permalink( $product_id ), $product_id )
		);			
	}	
	die();
}

// add custom when add to cart
add_action( 'woocommerce_add_to_cart', 'save_custom_field_design', 1, 5 );
function save_custom_field_design( $cart_item_key, $product_id = null, $quantity= null, $variation_id= null, $variation= null ) {
	if (empty($_POST['price']))
		$price = 0;
	else
		$price = $_POST['price'];
	if (empty($_POST['rowid']))
		$rowid = '';
	else
		$rowid = $_POST['rowid'];
	if (empty($_POST['color_hex']))
		$color_hex = '';
	else
		$color_hex = $_POST['color_hex'];
	if (empty($_POST['color_title']))
		$color_title = '';
	else
		$color_title = $_POST['color_title'];
	if (empty($_POST['teams']))
		$teams = '';
	else
		$teams = $_POST['teams'];
	if (empty($_POST['options']))
		$options = '';
	else
		$options = $_POST['options'];
	if (empty($_POST['images']))
		$images = '';
	else
		$images = $_POST['images'];
	$data_items = array(
		'design_price' => $price,
		'design_id' => $rowid,
		'color_hex' => $color_hex,
		'color_title' => $color_title,
		'teams' => $teams,
		'options' => $options,
		'images' => $images,
	);
	$data_items = apply_filters( 'tshirtecommerce_product_set_attribute', $data_items, $product_id);
	WC()->session->set( $cart_item_key.'_designer', $data_items );
}

// add link allow edit design in page cart
function woocommerce_cart_item_name_edit_design( $title, $cart_item, $cart_item_key )
{
	global $TSHIRTECOMMERCE_ROOT;
    $data = WC()->session->get( $cart_item_key.'_designer');
	if ($data != null && count($data) > 0 && isset($data['design_id']) && $data['design_id'] != '' && $data['design_id'] != 'blank')
	{
		$product_id = $cart_item['product_id'];
		$opt_val = get_option( 'online_designer' );
		$page = get_page_link($opt_val['url']);
		
		$page = apply_filters( 'update_link_edit_design', $page, $product_id, $opt_val);

		$link = add_query_arg( array('product_id'=>$product_id, 'cart_id'=>$data['design_id'], 'update_item'=>$cart_item_key), $page );
		
		if( isset($cart_item['variation_id']) && $cart_item['variation_id'] > 0 )
		{
			$link = add_query_arg( array('variation_id'=>$cart_item['variation_id']), $link );
			if( isset($cart_item['variation']) && count($cart_item['variation']) )
			{
				$attributes = '';
				foreach($cart_item['variation'] as $name => $value)
				{
					if( $attributes == '' )
					{
						$attributes = $name.'|'.$value;
					}
					else
					{
						$attributes .= ';'.$name.'|'.$value;
					}
				}				
				$link = add_query_arg( array('attributes'=>$attributes), $link );
			}
		}
		
		if (defined('ROOT') == false) // fix define is exists.
			define('ROOT', $TSHIRTECOMMERCE_ROOT);
		if (defined('DS') == false)
			define('DS', DIRECTORY_SEPARATOR);
		include_once ( ROOT .DS. 'includes' .DS. 'functions.php');
		$dg = new dg();
		$lang = $dg->lang('lang.ini', false);

		$html = '<a href="'.$link.'" title="'.$lang['designer_cart_edit_des'].'">'.$lang['designer_cart_edit'].'</a>';
		
		$html = apply_filters( 'tshirt_product_edit_cart', $html, $cart_item);
		
		return $html;
	}
	else
	{
		return '';
	}
}
add_filter( 'woocommerce_cart_item_name', 'woocommerce_cart_item_name_edit_design', 10, 3 );

// show info in cart
function render_meta_on_cart_item( $title = null, $cart_item = null, $cart_item_key = null ) {
	global $TSHIRTECOMMERCE_ROOT;
	if( $cart_item_key && is_cart() ) {
		
		$data = WC()->session->get( $cart_item_key.'_designer');		
		if ($data != null && count($data) > 0 && isset($data['design_id']) && $data['design_id'] != '')
		{
			// get language
			if (defined('ROOT') == false) // fix define is exists.
				define('ROOT', $TSHIRTECOMMERCE_ROOT);
			if (defined('DS') == false)
				define('DS', DIRECTORY_SEPARATOR);
			include_once ( ROOT .DS. 'includes' .DS. 'functions.php');
			$dg = new dg();
			$lang = $dg->lang('lang.ini', false);
		
			echo '<p>'.$title.'</p>';
			if (isset($data['images']))
			{
				$images = json_decode(str_replace('\\', '', $data['images']));
				if (is_object($images))
				{
					echo '<p>';
					foreach($images as $view => $image)
					{
						$img_src = $image;
						if(strpos($img_src, 'http') === false)
						{
							$img_src = network_site_url('tshirtecommerce').'/'.$image;
						}
						echo ' <a href="'. $img_src .'" rel="lightbox[pp_gal]" class="lightboxhover"><img src="'. $img_src .'" class="light-dropshaddow" style="width:90px"></a>';
					}
					echo '</p>';
				}				
			}
			
			if (isset($data['teams']['name']) && count($data['teams']['name']) > 0)
			{
				echo '<table>'
					. 		'<thead>'
					. 			'<tr>'
					. 				'<th>'.$lang['designer_team_name'].'</th>'
					. 				'<th>'.$lang['designer_team_number'].'</th>'
					. 				'<th>'.$lang['designer_team_size'].'</th>'
					. 			'</tr>'
					. 		'</thead>'
					. 		'<tbody>';
					
				for($i=1; $i<=count($data['teams']['name']); $i++ )
				{
					$size = explode('::', $data['teams']['size'][$i]);
					echo 		'<tr>'
						.			'<td>'.$data['teams']['name'][$i].'</td>'
						.			'<td>'.$data['teams']['number'][$i].'</td>'
						.			'<td>'.$size[0].'</td>'
						.		'</tr>';
				}
				
				echo 		'</tbody></table>';
			}
			
			echo '<dl class="variation">';
			
			if (isset($data['color_title']))
			{
				echo '<dt class="variation-title">'.$lang['designer_color'].': </dt>';
				echo '<dd>'.$data['color_title'].'</dd>';
			}
			
			
			
			if ($data['options'] != '' && $data['options'] != '[]')
			{
				if (is_string($data['options']))
					$options = json_decode( str_replace('\\"', '"', $data['options']), true);
				else
					$options = $data['options'];
								
				if (count($options) > 0)
				{
					foreach($options as $i => $option)
					{						
						
						if (isset($option['type']) && file_exists( dirname(__FILE__) .'/options/'.$option['type'].'.php' ) )
						{
							require_once(dirname(__FILE__) .'/options/'.$option['type'].'.php');
							continue;
						}

						if (isset($options[$i]) && isset($options[$i]['value']))
						{
							if (is_string($options[$i]['value']) && $options[$i]['value'] == '') continue;
							if (is_array($options[$i]['value']) && count($options[$i]['value']) == 0) continue;
								
							echo '<dt class="variation-title">'.$options[$i]['name'].': </dt>';
							
							echo '<dd>';
							if (is_array($options[$i]['value']))
							{							
								foreach ($options[$i]['value'] as $name => $value)
								{									
									if ($value == '') continue;
									
									if ($options[$i]['type'] == 'checkbox')
									{										
										echo $value. '; ';
									}
									else if ($options[$i]['type'] == 'textlist')
									{
										if ($value == '0' || $value == '') continue;
										echo $name.'  -  '.$value. '; ';
									}
									else
									{
										if ($value == '0' || $value == '') continue;
										echo $name.'  -  '.$value. '; ';
									}
								}
							}
							else
							{
								echo str_replace('\\"', '"', $options[$i]['value']);
							}
							echo '</dd>';
						}
					}
				}
			}
			
			echo '</dl>';
		}
		else
		{
			echo $title;
		}
	}
	else
	{
		echo $title;
	}
	
	if(isset($_GET['update']) && $_GET['update'] == true)
		echo '<script> var e_remove_cart_item = true;</script>';
}
add_filter( 'woocommerce_cart_item_name', 'render_meta_on_cart_item', 1, 3 );


// add data design to order
function tshirt_order_meta_handler( $item_id, $values, $cart_item_key ) {
	if( WC()->session->__isset( $cart_item_key.'_designer' ) ) {
		wc_add_order_item_meta( $item_id, "custom_designer", WC()->session->get( $cart_item_key.'_designer') );
	}
}
add_action( 'woocommerce_add_order_item_meta', 'tshirt_order_meta_handler', 1, 3 );



// show options in order
add_action( 'woocommerce_before_order_itemmeta', 'oder_item_view_diesign', 1, 3 );
function oder_item_view_diesign($item_id, $item, $product)
{
	global $TSHIRTECOMMERCE_ROOT;
	if ( method_exists( $product, 'get_id' ) ) 
	{
		$wo_product_id = $product->get_id();
	} 
	elseif(isset($product->id)) 
	{
		$wo_product_id = $product->id;
	}
	else
	{
		$wo_product_id = 0;
	}

	$data = @WC_Abstract_Order::get_item_meta( $item_id, "custom_designer", true );
	
	if (defined('ROOT') == false) // fix define is exists.
		define('ROOT', $TSHIRTECOMMERCE_ROOT);
	if (defined('DS') == false)
		define('DS', DIRECTORY_SEPARATOR);
	include_once ( ROOT .DS. 'includes' .DS. 'functions.php');
	$dg = new dg();
	$lang = $dg->lang('lang.ini', false);
	// product design
	if (isset($data['design_id']) && $data['design_id']!= '' && $data != null && count($data) > 0)
	{	
		$download_design = array();
		if(isset($_SESSION['download_design']))
		{
			if( is_array($_SESSION['download_design']) )
			{
				$download_design = $_SESSION['download_design'];
			}
			else
			{
				$download_design[0] = $_SESSION['download_design'];
			}
			
		}
		
		if(!in_array($wo_product_id, $download_design))
			$download_design[] = $wo_product_id;
		
		$_SESSION['download_design'] = $download_design;
		
		if (isset($data['images']))
		{
			$images = json_decode(str_replace('\\', '', $data['images']));
			if (is_object($images))
			{
				echo '<table><tr>';
				foreach($images as $view => $image)
				{
					$img_src = $image;
					if(strpos($img_src, 'http') === false)
					{
						$img_src = network_site_url('tshirtecommerce').'/'.$image;
					}
					echo '<td>';
					echo '<img style="width: 100px;" src="'. $img_src .'" with="100">';
					echo '<br /><a target="_blank" href="'.network_site_url('tshirtecommerce/design.php?key='.$data['design_id'].'&view='.$view.'&session_id='.session_id()).'">'.$lang['order_download_design'].'</a>';
					echo '</td>';
				}
				echo '</tr></table>';
				
				// add link design
				global $wc_cpdf;		
				$product_id = $wc_cpdf->get_value($wo_product_id, '_product_id');
				$ids = explode(':', $product_id);
				if (count($ids) > 2)
				{
					$product_id = $ids[2];
				}				
				$opt_val = get_option( 'online_designer' );	
				$page = get_page_link($opt_val['url']);
				$page = apply_filters( 'update_link_edit_design', $page, $wo_product_id, $opt_val);			
				$link = add_query_arg( array('product_id'=>$wo_product_id, 'cart_id'=>$data['design_id']), $page );
				echo '<p><center><a target="_blank" href="'.$link.'"><strong>'.$lang['order_view_design'].'</strong></a></center></p><hr />';
			}
			else
			{
				$session_id	= '&session_id='.session_id();
				echo '<p>'
					.$lang['order_download_design'].':'
					.' <a href="'.network_site_url('tshirtecommerce/design.php?key='.$data['design_id']).'&view=front'.$session_id.'" target="_blank" title="'.$lang['order_click_to_view_design'].'"><strong>'.$lang['front'].'</strong></a> - '
					.' <a href="'.network_site_url('tshirtecommerce/design.php?key='.$data['design_id']).'&view=back'.$session_id.'" target="_blank" title="'.$lang['order_click_to_view_design'].'"><strong>'.$lang['back'].'</strong></a> - '
					.' <a href="'.network_site_url('tshirtecommerce/design.php?key='.$data['design_id']).'&view=left'.$session_id.'" target="_blank" title="'.$lang['order_click_to_view_design'].'"><strong>'.$lang['left'].'</strong></a> - '
					.' <a href="'.network_site_url('tshirtecommerce/design.php?key='.$data['design_id']).'&view=right'.$session_id.'" target="_blank" title="'.$lang['order_click_to_view_design'].'"><strong>'.$lang['right'].'</strong></a>'
				. '</p>';
			}
			$html = '';
			$html = apply_filters( 'tshirtecommerce_order_html', $html, 'cart', $data, $item);
			echo $html;
		}
		
		if (isset($data['teams']['name']) && count($data['teams']['name']) > 0)
		{
			echo '<table>'
				. 		'<thead>'
				. 			'<tr>'
				. 				'<th>'.$lang['designer_team_name'].'</th>'
				. 				'<th>'.$lang['designer_team_number'].'</th>'
				. 				'<th>'.$lang['designer_team_size'].'</th>'
				. 			'</tr>'
				. 		'</thead>'
				. 		'<tbody>';
				
			for($i=1; $i<=count($data['teams']['name']); $i++ )
			{
				$size = explode('::', $data['teams']['size'][$i]);
				echo 		'<tr>'
					.			'<td>'.$data['teams']['name'][$i].'</td>'
					.			'<td>'.$data['teams']['number'][$i].'</td>'
					.			'<td>'.$size[0].'</td>'
					.		'</tr>';
			}
			
			echo 		'</tbody></table>';
		}
				
		if (isset($data['color_title']))
		{
			echo '<p>'.$lang['designer_color'].': '.$data['color_title'].'</p>';
		}
		
		if ($data['options'] != '' && $data['options'] != '[]')
		{
			if (is_string($data['options']))
				$options = json_decode( str_replace('\\"', '"', $data['options']), true);
			else
				$options = $data['options'];
			
			
			if (count($options) > 0)
			{
				foreach($options as $i => $option)
				{
					
					if (isset($option['type']) && file_exists( dirname(__FILE__) .'/options/'.$option['type'].'.php' ) )
					{
						require_once(dirname(__FILE__) .'/options/'.$option['type'].'.php');
						continue;
					}
					
					if (isset($options[$i]) && isset($options[$i]['value']))
					{
						if (is_string($options[$i]['value']) && $options[$i]['value'] == '') continue;
						if (is_array($options[$i]['value']) && count($options[$i]['value']) == 0) continue;
							
						echo '<p><strong class="variation-title">'.$options[$i]['name'].': </strong>';
						
						echo '<span>';
						if (is_array($options[$i]['value']))
						{							
							foreach ($options[$i]['value'] as $name => $value)
							{									
								if ($value == '') continue;
								
								if ($options[$i]['type'] == 'checkbox')
									echo $value. '; ';
								else if ($options[$i]['type'] == 'textlist')
								{
									if ($value == '0' || $value == '') continue;
									echo $name.'  -  '.$value. '; ';
								}
								else
								{
									if ($value == '0' || $value == '') continue;
									echo $name.'  -  '.$value. '; ';
								}
							}
						}
						else
						{
							echo $options[$i]['value'];
						}
						echo '</span></p>';
					}
				}
			}
		}		
	}
	else
	{
		// get design idea
		global $wc_cpdf;
		if (isset($wo_product_id)) {
			$product_id = $wc_cpdf->get_value($wo_product_id, '_product_id');
		
			$download_design = array();
			if(isset($_SESSION['download_design']))
			{
				if( is_array($_SESSION['download_design']) )
				{
					$download_design = $_SESSION['download_design'];
				}
				else
				{
					$download_design[0] = $_SESSION['download_design'];
				}
			}
			
			if(!in_array($product_id, $download_design))
				$download_design[] = $product_id;
			
			$_SESSION['download_design'] = $download_design;
			
			if ($product_id != '')
			{
				$opt_val = get_option( 'online_designer' );	
				$page = get_page_link($opt_val['url']);				
				$link = add_query_arg( array('product_id'=>$wo_product_id, 'parent_id'=>$product_id), $page );
				
				$ids = explode(':', $product_id);
				$session_id	= '&session_id='.session_id();
				echo '<p>'
						.'<a href="'.$link.'" target="_blank" title="'.$lang['order_click_to_view_design'].'"><strong>'.$lang['order_view_design'].'</strong></a> '.$lang['order_or_download_design'].':'
						.' <a href="'.network_site_url('tshirtecommerce/design.php?idea=1&key='.$product_id).'&view=front'.$session_id.'" target="_blank" title="'.$lang['order_click_to_view_design'].'"><strong>'.$lang['front'].'</strong></a> - '
						.' <a href="'.network_site_url('tshirtecommerce/design.php?idea=1&key='.$product_id).'&view=back'.$session_id.'" target="_blank" title="'.$lang['order_click_to_view_design'].'"><strong>'.$lang['back'].'</strong></a> - '
						.' <a href="'.network_site_url('tshirtecommerce/design.php?idea=1&key='.$product_id).'&view=left'.$session_id.'" target="_blank" title="'.$lang['order_click_to_view_design'].'"><strong>'.$lang['left'].'</strong></a> - '
						.' <a href="'.network_site_url('tshirtecommerce/design.php?idea=1&key='.$product_id).'&view=right'.$session_id.'" target="_blank" title="'.$lang['order_click_to_view_design'].'"><strong>'.$lang['right'].'</strong></a>'
					. '</p>';
			}
		}
	}
}
// design many product
function tshirt_force_individual_cart_items($cart_item_data, $product_id)
{
	global  $wc_cpdf;
	$ids 	= $wc_cpdf->get_value($product_id, '_product_id');
	if($ids)
	{
		$unique_cart_item_key = md5( microtime().rand() );
		$cart_item_data['unique_key'] = $unique_cart_item_key;
		return $cart_item_data;
	}
}
add_filter( 'woocommerce_add_cart_item_data','tshirt_force_individual_cart_items', 10, 2 );

add_action( 'woocommerce_before_calculate_totals', 'add_custom_price' );
function add_custom_price( $cart_object )
{    
    foreach ( $cart_object->cart_contents as $key => $value )
	{
		
		$data = WC()->session->get( $key.'_designer');
		if (isset($data['design_id']) && $data['design_id'] != '' && $data['design_price'] != '')
		{
			$product = $value['data'];
			$product->set_price($data['design_price']);
			$value['data']->price = $data['design_price'];
		}
    }
}

// ajax get all product design
// link wp-admin/admin-ajax.php?action=woo_products_design
add_action( 'wp_ajax_woo_products_design', 'wp_woo_products_design' );
add_action( 'wp_ajax_nopriv_woo_products_design', 'wp_woo_products_design' );
function wp_woo_products_design()
{
	global $wc_cpdf;
	$args = array(
		'post_type' => 'product', 
		'posts_per_page' => -1,
		'meta_query' => array(
			array('key' => 'wc_productdata_options')
		),
		'orderby' => 'modified'
	);
	$products = get_posts( $args );
		
	//get product design
	$design = array();
	$design_ids = array();
	foreach ($products as $product)
	{
		$ids = $wc_cpdf->get_value($product->ID, '_product_id');
		if ($ids != '')
		{
			$temp = explode(':', $ids);
			if (count($temp) == 1)
			{
				$design[$ids] = $product->ID;
				$design_ids[] = $ids;
			}
		}	
	}
	echo json_encode($design_ids);
	die();
}
add_action( 'wp_ajax_woo_products_variation', 'wp_woo_products_variation' );
add_action( 'wp_ajax_nopriv_woo_products_variation', 'wp_woo_products_variation' );
function wp_woo_products_variation()
{
	if(isset($_GET['variation_id']) && is_numeric($_GET['variation_id']) && $_GET['variation_id'] > 0)
	{
		$price = @get_post_meta($_GET['variation_id'], '_price', true);
		echo $price;
	}
	die();
}
?>
