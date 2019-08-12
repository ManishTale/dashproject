<?php
/**
* Product of Woocommerce & design
*/
class P9f_product
{
	function __construct()
	{
		add_filter( 'woocommerce_cart_item_quantity', array($this, 'woo_cart_disable_item_quantity'), 50, 2);
		add_action('init', array($this, 'init'));

		add_action( 'wp_ajax_get_svg_design', array($this, 'get_svg_design') );
		add_action( 'wp_ajax_nopriv_get_svg_design', array($this, 'get_svg_design') );

		add_action( 'wp_ajax_woo_product_url', array($this, 'woo_product_url') );
		add_action( 'wp_ajax_nopriv_woo_product_url', array($this, 'woo_product_url') );

		/* update vectors of quick edit */
		add_action( 'wp_ajax_user_edit_design', array($this, 'user_edit_design') );
		add_action( 'wp_ajax_nopriv_user_edit_design', array($this, 'user_edit_design') );
	}

	function init()
	{
		add_action( 'woocommerce_before_single_product', array($this, 'product_detail'), 10, 2);
		add_action( 'tshirtecommerce_product_button', array($this, 'designer_button') );

		/* add option color, attribute... to link design */
		add_filter('tshirt_set_url_designer', array($this, 'product_url_designer'), 10, 2);

		add_action( 'wp_enqueue_scripts', array($this, 'P9f_store_js') );
	}

	/*
	* Update vectors of design in page quick edit.
	 */
	public function user_edit_design()
	{
		if (!session_id()){
			session_start();
		}

		if(isset($_GET['design_id']))
		{
			$key 			= md5($_GET['design_id']);
			$design 		= '';
			if(isset($_SESSION['user_designs']))
			{
				$designs 		= $_SESSION['user_designs'];
				if(isset($designs[$key]))
				{
					$design 			= $designs[$key];
					$vectors 			= json_decode(stripslashes($design['vectors']));
					$design['vectors'] 	= $vectors;
				}
			}
			echo json_encode($design);
			exit();
		}

		if( isset($_POST['design_id']) && isset($_POST['product_id']) && isset($_POST['vectors']) )
		{
			$data = array(
				'design_id' => $_POST['design_id'],
				'product_id' => $_POST['product_id'],
				'vectors' => $_POST['vectors'],
			);
			$key 			= md5($_POST['design_id']);

			$designs 		= array();
			if(isset($_SESSION['user_designs']))
			{
				$designs 	= $_SESSION['user_designs'];
			}
			$designs[$key] 	= $data;
			$_SESSION['user_designs'] = $designs;
		}
	}

	/*
	* Get URL of product woocommerce
	 */
	function woo_product_url()
	{
		$url 	= '';
		if( isset($_GET['post_id']) )
		{
			$product_id 	= $_GET['post_id'];
			if(isset($_GET['variation_id']))
			{
				$product_id = wp_get_post_parent_id( $_GET['variation_id'] );
			}

			$product_link 	= get_permalink($product_id);
			if(strpos($product_link, '?'))
			{
				$url 		= $product_link.'&user_design=';
			}
			else
			{
				$url 		= $product_link.'user_design::';
			}
		}
		echo $url;
		exit();
	}

	/*
	* customize page product detail
	 */
	function product_detail()
	{
		global $wc_cpdf, $P9f;
		
		$post_id 	= get_the_ID();

		$product_id = $wc_cpdf->get_value($post_id, '_product_id');
		if($product_id != '')
		{
			$idea_id 	= get_query_var('idea_id', '');
			if(strpos($idea_id, 'user_design::') !== false)
			{
				$_GET['user_design'] = str_replace('user_design::', '', $idea_id);
			}
		
			$P9f->post_id = $post_id;
			if(isset($_GET['user_design']))
			{
				$product_id 	= $_GET['user_design'];
			}
			$options 	= explode(':', $product_id);
			$P9f->is_template = false;
			if(count($options) > 2)
			{
				$P9f->is_template 	= true;
				$P9f->product_id 		= $options[2];
				$P9f->design_shop_id 	= $product_id;
				add_filter('P9f_product_design_data', array($this, 'design_data'), 20, 1 );
			}
			else
			{
				$P9f->product_id = $product_id;
			}
			$P9f->loadProduct();
			$P9f->product_design = $P9f->product->getProduct($P9f->product_id);

			if(count($P9f->product_design))
			{
				do_action( 'P9f_product_design' );
				add_filter( 'woocommerce_single_product_image_gallery_classes', array($this, 'gallery_classes'), 5, 2);
				add_action('tshirtecommerce_product_attribute', array($this, 'product_tabs'), 40);
				add_filter('tshirt_product_before_attribute', array($this, 'get_product_design'), 10, 2);
			}
		}
	}

	/* 
	* add class of gallery in page product detail
	*/
	function gallery_classes($class)
	{
		$class[] = 'design-store-gallery';
		return $class;
	}

	/*
	* Add js to page product detail
	 */
	function P9f_store_js()
	{
		global $P9f;
		if(is_product())
		{
			$files_js 	= array(
				'designer_store_js' => plugins_url( 'assets/js/product.js', dirname(__FILE__) )
			);
			$files_js = apply_filters( 'P9f_product_js', $files_js);
			if(count($files_js))
			{
				foreach ($files_js as $file_key => $src)
				{
					wp_enqueue_script( $file_key, $src, array(), $P9f->version, true );
				}
			}
		}
	}

	/*
	* Hidden button add to cart
	 */
	function designer_button()
	{
		global $P9f;
		if(isset($P9f->product_design))
		{
			$product = $P9f->product_design;
			if(isset($product['hide_button_cart']) && $product['hide_button_cart'] == 1)
			{
				echo '<style>.post-'.$P9f->post_id.' .add_to_cart_button{display: none !important;}</style>';
			}
		}
	}

	/*
	* Ajax load design of product design template
	 */
	function get_svg_design()
	{
		header('Content-type: image/svg+xml');
		$svg 	= '<svg xmlns="http://www.w3.org/2000/svg"';
		if( isset($_GET['design_id']) )
		{
			$view = 'front';
			if(isset($_GET['view']))
			{
				$view = $_GET['view'];
			}
			$options 	= explode(':', $_GET['design_id']);
			if(count($options) < 3)
			{
				$svg = $svg . '></svg>';
				echo $svg;
				exit();
			}

			global $P9f, $TSHIRTECOMMERCE_ROOT;

			$dg 		= $P9f->dgClass();
			$cache 	= $dg->cache('products');
			$file 	= md5($options[0].'-'.$options[1].'-'.$options[2].$view);
			$thum 	= $cache->get($file);
			if($thum != null)
			{
				//echo $thum;
				//exit();
			}

			$P9f->loadProduct();
			$product 	= $P9f->product->getProduct($options[2]);

			if(count($product))
			{
				$str 		= $product['design']['area'][$view];
				$str 		= str_replace("'", '"', $str);
				$area 	= json_decode($str, true);
				if(isset($area['width']))
				{
					$svg = $svg.' width="'.$area['width'].'px" height="'.$area['height'].'px" viewBox="0 0 '.$area['width'].' '.$area['height'].'">';

					if($options[0] == 'cart')
						$design 	= $P9f->getShopDesign($options[0], $options[1]);
					else
						$design 	= $P9f->getShopDesign($options[1], $options[0]);
					if(isset($design['vector']))
					{
						$design['vectors'] = $design['vector'];
					}
					if(isset($design['vectors']))
					{
						if(is_string($design['vectors'])){
							$vectors 	= json_decode($design['vectors'], true);
						}
						else
						{
							$vectors 	= json_decode(json_encode($design['vectors']), true);
						}

						$items 	= $vectors[$view];

						function sortIndex($a, $b)
						{
							return $a['zIndex'] - $b['zIndex'];
						}
						usort($items, 'sortIndex');
						for($i=0; $i<count($items); $i++)
						{
							$item 	= $items[$i];
							if( isset($item['art_key']) && strpos($item['svg'], '<svg') === false)
							{
								$art_key 		= $this->getArtKey($item['art_key']);
								$item['svg'] 	= StorestrSVG($item['svg'], $art_key);
							}

							$item_svg 	= str_replace('\\"', '"', $item['svg']);
							$top 		= str_replace('px', '', $item['top']);
							$left 	= str_replace('px', '', $item['left']);

							if( $item['type'] == 'clipart' && isset($item['thumb']) && strpos($item_svg, 'xlink:href="') )
							{
								if(strpos($item['thumb'], 'http') === false)
								{
									$item['thumb'] = site_url('tshirtecommerce/'.$item['thumb']);
								}
								$data_img 	= openURL($item['thumb']);
								$file_name 	= 'data:image/PNG;base64,' . base64_encode($data_img);
								$item_svg 	= preg_replace('/xlink:href="(.*?)"/', 'xlink:href="'.$file_name.'"', $item_svg);
							}

							$rotate 	= '';
							if($item['rotate'])
							{
								$width 		= str_replace('px', '', $item['width']);
								$height 		= str_replace('px', '', $item['height']);
								$width		= (int) $width/2;
								$height		= (int) $height/2;
								$rotate = ' rotate('.$item['rotate'].' '.$width.' '.$height.')';
							}

							if(!isset($item['id'])){$item['id'] = $i + 1;}
							$item_svg 	= '<g id="'.$view.'-item-'.$item['id'].'" data-top="'.$top.'" data-left="'.$left.'" transform="translate('.$left.', '.$top.') '.$rotate.'">'.$item_svg.'</g>';
							
							$svg 		.= $item_svg;
						}
					}
				}
			}
		}
		else
		{
			$svg = $svg.'>';
		}
		$svg = $svg . '</svg>';
		if(isset($cache))
		{
			$cache->set($file, $svg, 300);
		}
		echo $svg;
		exit();
	}

	function getArtKey($key)
	{
		$keyStr 	= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		$str 		= '';
		$n 		= strlen($key);
		for($i=0; $i<$n; $i++)
		{
			$s 	= substr($key, $i, 1);
			if (strpos($str, $s) === false)
			{
				$str 	.= $s;
			}
		}
		
		$key 	= strtoupper($key);
		for($i=0; $i<$n; $i++)
		{
			$s 	= substr($key, $i, 1);
			if (strpos($str, $s) === false)
			{
				$str 	.= $s;
			}
		}
		
		$n 	= strlen($keyStr);
		for($i=0; $i<$n; $i++)
		{
			$s 	= substr($keyStr, $i, 1);
			if (strpos($str, $s) === false)
			{
				$str 	.= $s;
			}
		}
		return $str;
	}

	/*
	* Load design idea data
	 */
	function design_data($data)
	{
		global $P9f;
		$options 	= explode(':', $P9f->design_shop_id);

		$design 	= $P9f->getShopDesign($options[1], $options[0]);
		if( isset($design['images']) && count($design['images']) )
		{
			$thumbs = array();
			foreach($design['images'] as $view => $val)
			{
				if($val != '')
				{
					if(isset($design['thumbs']) && isset($design['thumbs'][$view]))
					{
						$thumbs[$view] = $design['thumbs'][$view];
					}
					else
					{
						$thumbs[$view] = site_url('wp-admin/admin-ajax.php?action=get_svg_design&view='.$view.'&design_id='.$P9f->design_shop_id);
					}
				}
			}

			$color 	= 'FFFFFF';
			if(isset($options[3]))
			{
				$color = $options[3];
			}

			$data['idea'] = array(
				'color' => $color,
				'thumb' => $thumbs
			);
		}
		$data['product_id'] 	= $P9f->product_id;
		$data['design_id'] 	= $P9f->design_shop_id;
		$data['is_shop_product'] = $P9f->design_shop_id;

		return $data;
	}

	/*
	* Update url of product design
	 */
	function product_url_designer($url)
	{
		if (isset($_GET['color']))
		{
			$url = $url . '&color='.$_GET['color'];
		}

		if (isset($_GET['options']))
		{
			$url = $url . '&options='.$_GET['options'];
		}

		return $url;
	}

	/* add tabs size */
	function product_tabs()
	{
		global $P9f;
		if(isset($P9f->product_design))
		{
			$product = $P9f->product_design;
			if( isset($product['size']) && $product['size'] != '' )
			{
				add_filter( 'woocommerce_product_tabs', array($this, 'woo_product_tab_size'), 10 );
			}
		}
	}

	/*
	* Load product design in page product detail
	 */
	function get_product_design($html, $options)
	{
		global $P9f;
		$product_id 	= $options[0];
		$product 		= $P9f->product_design;
		$data 		= array(
			'product_id' 	=> $product_id,
			'width' 		=> $product['box_width'],
			'height' 		=> $product['box_height'],
			'design' 		=> $product['design'],
			'print_type' 	=> $product['print_type'],
			'tax' 		=> $product['tax'],
		);
		if(isset($product['gallery']) && $product['gallery'] != '')
		{
			$data['gallery'] = $product['gallery'];
		}
		
		$data = apply_filters('P9f_product_design_data', $data);

		$js_data = base64_encode(json_encode($data));
		$html .= '<script type="text/javascript">var product_design = "'.$js_data.'"</script>';
		echo $html;
	}

	/*
	* add tab product size
	 */
	function woo_product_tab_size($tabs)
	{
		global $P9f;
		$lang = $P9f->lang;

		$tabs['P9f_size_tab'] = array(
			'title'     => $lang['design_size_chart'],
			'priority'  => 10,
			'callback'  => array($this, 'woo_product_size_content')
		);

		return $tabs;
	}

	/*
	* Show size info in page product detail
	 */
	function woo_product_size_content()
	{
		global $P9f;
		$product = $P9f->product_design;
		echo $product['size'];
	}

	/*
	* Hidden edit quantity in page cart
	 */
	function woo_cart_disable_item_quantity( $product_quantity, $cart_item_key)
	{
		$data = WC()->session->get( $cart_item_key.'_designer');
		if (isset($data['design_id']) && $data['design_id'] != '')
		{
			$cart_item 	= WC()->cart->cart_contents[ $cart_item_key ];
			$product_quantity = '<strong>'.$cart_item['quantity'].'</strong>';
		}
		return $product_quantity;
	}
}
new P9f_product();
?>