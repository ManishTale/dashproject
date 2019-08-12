<?php
/**
* All options of 9file store
*/
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
class P9f_store
{
	function __construct()
	{
		$this->path = dirname(__FILE__);
		include_once($this->path.'/class/store-admin.php');
		include_once($this->path.'/class/store-ajax.php');
		$this->admin = new P9f_store_admin();

		add_action('init', array($this, 'init'));
	}

	function init()
	{
		if($this->isActive() === true)
		{
			$this->admin->init_admin();
			add_shortcode( 'tshirtecommerce_store', array($this, 'display_page'), 10, 2 );
			include_once($this->path.'/class/store-frontend.php');
			$store_front	= new P9f_store_frontend();
		}
	}

	/**
	 * Check store is active
	 */
	function isActive()
	{
		global $TSHIRTECOMMERCE_ROOT, $P9f;
		$settings 		= $P9f->getData('settings');
		$this->settings 	= $settings;
		
		$is_store = false;
		if(isset($settings['store']) && isset($settings['store']['enable']) && $settings['store']['enable'] == 1)
		{
			$is_store = true;
		}

		return $is_store;
	}

	/*
	* Add class to body of page design template
	 */
	function e_custom_class($classes)
	{
		$classes[] = 'woocommerce';
		$classes[] = 'woocommerce-page';
		return $classes;
	}

	/**
	 * Show page design template
	 * @return html
	 */
	function display_page($atts, $content)
	{
		global $P9f;
		$P9f->loadProduct();
		add_filter( 'body_class', array($this, 'e_custom_class') );

		$files_js 	= array(
			'designer_store_js' => plugins_url( 'assets/js/product.js', dirname(__FILE__) )
		);
		$files_js = apply_filters( 'P9f_store_js', $files_js);
		if(count($files_js))
		{
			foreach ($files_js as $file_key => $src)
			{
				wp_enqueue_script( $file_key, $src, array(), $P9f->version, true );
			}
		}

		$cate_id 				= get_query_var('product_cate', '');

		$current_cate_child 		= 0;
		$current_cate_parent 		= 0;
		if($cate_id == '')
		{
			$page_id 			= get_the_ID();
			$curent_cate_active 	= get_post_meta( $page_id, 'product_design_cate', true );
			$current_cate_parent 	= $curent_cate_active;
		}
		else
		{
			
			$params  		= explode('+', $cate_id);
			$current_cate_parent 	= (int) $params[0];
			if(count($params) > 1)
			{
				$current_cate_child = (int) $params[1];
				$curent_cate_active = (int) $params[1];
			}
			else
			{
				$curent_cate_active = (int) $params[0];
			}
		}

		$search 		= get_query_var('search_design', '');
		$keyword 		= '';
		$search_cate_str 	= '';
		$search_cate_id 	= 0;
		if($search != '')
		{
			$search_options 	= explode('+', $search);
			$keyword 		= str_replace('search=', '', $search_options[0]);
			$keyword		= str_replace('-', ' ', $keyword);
			if( isset($search_options[1]) )
			{
				$search_cate_str 	= $search_options[1];
				$search_cate_id 	= (int) $search_options[1];
			}
		}

		$categories 		= $P9f->product->getCategories();
		if($current_cate_parent > 0)
		{
			$categories_child = $P9f->product->getCategoriesChild($current_cate_parent);
		}
		else
		{
			$categories_child 	= array();
		}

		$products 	= $P9f->product->getProductsDesign($curent_cate_active);
		
		$woo_product_ids = array();
		for($i=0; $i<count($products); $i++)
		{
			$woo_product_ids[$products[$i]['id']] = $products[$i]['parent_id'];
		}

		$types 	= $P9f->product->getTypesProducts($products);

		$search = array(
			'keyword' => $keyword,
			'cate_id' => $search_cate_id,
		);
		$ideas 	= $P9f->getTypesIdeas($types, $search);

		$idea_categories 	= $P9f->getData('idea_categories', 'store');

		$lang = $P9f->getLang();

		ob_start();
		include_once(dirname(__FILE__).'/store/store_new.php');
		$content = ob_get_contents();
   		ob_end_clean();

		return $content;
	}
}
$P9f_store = new P9f_store();
?>