<?php
/**
 * Add class of store in product woocommerce
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
class P9f_store_frontend
{
	function __construct()
	{
		add_action( 'P9f_product_design', array($this, 'product_detail'), 20, 2);

		/* add design idea to url design tool in page designer */
		add_filter( 'tshirt_set_url_designer', array($this, 'designer_url_idea') );

		$this->design = array();

		/* add to cart with design idea */
		add_filter('tshirtecommerce_product_set_attribute', array($this, 'product_design_addcart'), 10, 2);
		/* redirect to page product detail with design idea after add to cart */
		add_filter( 'woocommerce_add_to_cart_redirect', array($this, 'addcart_redirect') );
	}

	/*
	* Load design idea in page product detail
	 */
	function product_detail()
	{
		$idea_id 	= get_query_var('idea_id', '');
		if($idea_id != '')
		{
			if(strpos($idea_id, 'user_design::') !== false)
			{
				$_GET['user_design'] = str_replace('user_design::', '', $idea_id);
				return;
			}
			$temp 	= explode('-', $idea_id);
			$idea_id 	= $temp[0];

			global $P9f;

			$data = $P9f->getIdea($idea_id);
			if(count($data))
			{
				$P9f->is_template = true; 
				$P9f->design_id 	= $idea_id; 
				$this->design 	= $data;
				add_action( 'woocommerce_single_product_summary', array($this, 'product_title'), 6);
				add_action('tshirtecommerce_design_button_link', array($this, 'design_button_link'), 30, 3);
				add_action('tshirtecommerce_product_attribute', array($this, 'get_design_idea'), 40, 2);
				add_filter('P9f_product_design_data', array($this, 'design_data'), 20, 1 );
			}
		}
	}

	/*
	* Change title of product
	 */
	function product_title()
	{
		if( isset($this->design) && count($this->design) )
		{
			$design 	= $this->design;
			echo '<h4 class="design-title">'.$design['title'].'</h4>';
			echo '<p class="design-description">'.$design['description'].'</p>';
		}
	}

	/*
	* load design idea in page product detail
	 */
	function get_design_idea($options)
	{
		global $wp;
		$design 		= $this->design;
		echo '<input type="hidden" name="design_idea_id" value="'.$design['id'].'">';
		echo '<input type="hidden" name="product_idea_url" value="'.home_url( $wp->request ).'">';
	}

	/*
	* Load design idea data
	 */
	function design_data($data)
	{
		$design 		= $this->design;
		if(isset($design['params']))
		{
			$params 	= json_decode($design['params'], true);
			if(isset($params['color'])) $design['color'] = $params['color'];
		}
		$data['idea'] = array(
			'color' => $design['color'],
			'thumb' => array(
				'front' => $design['image']
			)
		);
		if(isset($design['thumbs']))
		{
			foreach($design['thumbs'] as $view => $url)
			{
				if(strpos($url, 'http') === false)
				{
					$src = get_site_url() . '/tshirtecommerce/'.$url;
				}
				else
				{
					$src = $url;
				}
				$data['idea']['thumb'][$view] = $src;
			}
		}
		$data['design_id'] = $design['id'];

		return $data;
	}

	/*
	* Redirect after add to cart in page product detai with design template
	 */
	function addcart_redirect($url)
	{
		if ( isset( $_POST['product_idea_url'] ) )
		{
			$url = $_POST['product_idea_url'];
		}
		return $url;
	}

	/* add to cart of product design */
	function product_design_addcart($data_items, $product_id)
	{
		global $P9f;

		if( isset($_POST['design_idea_id']) && $_POST['design_idea_id'] != '' )
		{
			$idea_id 	= $_POST['design_idea_id'];
			$design 	= $_SESSION["design_idea_".$idea_id.$_POST['product_id']];

			$prices 	= $design['prices'];
			$data_items['prices_options']	= $prices;

			$rowid 				= md5($idea_id.$_POST['product_id'].time());
			$data_items['design_price']	= $prices->item;
			$data_items['design_id'] 	= $rowid;

			$item			= array(
				'id'			=> '',
				'product_id'	=> $_POST['product_id'],
				'qty'			=> $_POST['quantity'],
				'teams'		=> $data_items['teams'],
				'price'		=> $prices,
				'cliparts'		=> $design['options']['cliparts'],
				'options'		=> $data_items['options'],
				'prices'		=> '{}',
			);

			$idea 		= $P9f->getIdea($idea_id);
			if( isset($idea['type']) && $idea['type'] == 'shop' )
			{
				$data 	= $this->getDesign($idea['id'], $idea['user_id']);
			}
			elseif(isset($idea['id']))
			{
				$vectors 	= $this->getDesign($idea['id']);
				$data = array(
					'fonts' => $idea['fonts'],
					'vectors' => $vectors,
				);
			}
			else
			{
				$vectors 	= $this->getDesign('cart', $idea_id);
				$data = array(
					'fonts' => '',
					'vectors' => $vectors['vectors'],
				);
				$idea 		= array();
				$idea['thumb'] 	= $vectors['images'];
			}

			if (!session_id()){
				session_start();
			}
			if(isset($_SESSION['user_designs']))
			{
				$user_designs 	= $_SESSION['user_designs'];
				$key 			= md5($_POST['design_idea_id']);
				if(isset($user_designs[$key]))
				{
					$user_design = $user_designs[$key];
					if(isset($user_design['vectors']))
					{
						$data['vectors'] = json_decode(stripslashes($user_design['vectors']));
					}
				}
			}

			$images 		= array(
				$design['options']['view'] => $idea['thumb']
			);
			$data_items['images'] 	= json_encode($images);
			

			$content		= array(
				'color' 	=> $_POST['color_hex'],
				'images' 	=> json_encode($images),
				'vectors'	=> $data['vectors'],
				'fonts' 	=> $data['fonts'],
				'item' 	=> $item
			);

			if(isset($design['options']) && isset($design['options']['design']))
			{
				$content['design'] 	= $design['options']['design'];
			}

			$dg 		= $P9f->dgClass();
			$cache 	= $dg->cache('cart');
			$cache->set($rowid, $content);
		}
		return $data_items;
	}

	/*
	* add link load design idea in page designer
	 */
	function designer_url_idea($url)
	{
		$idea_id 	= get_query_var('idea_id', '');
		$temp 	= explode('-', $idea_id);
		$idea_id 	= $temp[0];
		if($idea_id > 0)
		{
			//$url 	= add_query_arg( array('idea_id'=> $idea_id, 'light_box'=>1), $url);
			$url 	= add_query_arg( array('idea_id'=> $idea_id), $url);
		}
		/*
		elseif( stripos($url, '&id=') > 0 && is_product())
		{
			$url 	= add_query_arg( array('light_box'=>1), $url );
		}
		*/
		
		return $url;
	}

	/*
	* add idea_id of button design in page product detail
	 */
	function design_button_link($link, $product_id, $options)
	{
		$idea_id 	= get_query_var('idea_id', '');
		if($idea_id != '')
		{
			$temp 	= explode('-', $idea_id);
			$idea_id 	= $temp[0];	
			if($idea_id != '')
			{
				$link 	= add_query_arg( array('idea_id'=> $idea_id), $link);
			}
		}
		return $link;
	}

	/**
	 * Get design detail of design idea
	 * @param  int $id   		ID of design idea
	 * @param  string $user_id 	ID of user [only use with design idea of shop]
	 * @return array       		list data of design idea
	 */	
	function getDesign($id, $user_id = '')
	{
		if($user_id == '')
		{
			$data = $this->getStoreDesign($id);
		}
		else
		{
			global $P9f;
			$data = $P9f->getShopDesign($id, $user_id);
		}

		return $data;
	}

	function getStoreDesign($id)
	{
		global $P9f;

		$data 	= array();
		$dg 		= $P9f->dgClass();
		$settings = $dg->getSetting();

		if(isset($settings->store))
		{
			include_once(ROOT .DS. 'includes' .DS. 'store.php');
			$store 	= new store($settings);

			$store->dg 		= $dg;
			$data 		= $store->getIdea($id);

			$data = base64_decode($data['content']);
		}

		return $data;
	}
}
?>