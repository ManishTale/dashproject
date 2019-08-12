<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2016-07-01
 *
 * All functions of product design and woocommerce
 *
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}	
class P9f
{
	function __construct()
	{
		$this->version = $this->getVersion();

		add_action('init', array($this, 'init'), 10);
	}

	function init()
	{
		$this->settings = $this->getSettings();
	}

	function getVersion()
	{
		global $TSHIRTECOMMERCE_ROOT;

		$file 	= $TSHIRTECOMMERCE_ROOT.'version.json';
		$version 	= '1.0.0';
		$data 	= $this->getJson($file);
		if(isset($data['version']))
		{
			$version = $data['version'];
		}
		return $version;
	}

	function getSettings()
	{
		global $wpdb;
		$settings 			= get_option( 'online_designer' );

		if (isset($settings['url']) && $settings['url'] > 0)
		{
			$page_designer 	= get_page_link($settings['url']);
		}
		else
		{
			$id 	= $wpdb->get_var("SELECT ID FROM $wpdb->posts WHERE post_name='design-your-own'");
			$page_designer = get_page_link($id);
		}

		if (empty($settings['btn-start']) || $settings['btn-start'] == '')
			$settings['btn-start'] = 'Start Design';

		if (empty($settings['btn-custom']) || $settings['btn-custom'] == '')
			$settings['btn-custom'] = 'Customize Design';
		
		if (empty($settings['btn-extra_class']))
			$settings['btn-extra_class'] = '';

		$settings['page_designer'] = $page_designer;

		return $settings;
	}

	public function dgClass()
	{
		global $TSHIRTECOMMERCE_ROOT;

		if (defined('ROOT') == false)
			define('ROOT', $TSHIRTECOMMERCE_ROOT);
		if (defined('DS') == false)
			define('DS', DIRECTORY_SEPARATOR);

		include_once (ROOT .DS. 'includes' .DS. 'functions.php');

		$dg 	= new dg();

		return $dg;
	}

	public function loadProduct()
	{
		include_once(dirname(__FILE__).'/product.php');
		$this->product = new P9f_store_products();

		return $this->product;
	}

	/**
	 * Get price of printing
	 * @return array List data of price
	 */
	function getPrice($options, $tax)
	{
		global $P9f;

		$dg 		= $P9f->dgClass();
		$data 	= $dg->prices($options, $tax);

		return $data;
	}

	/**
	 * Get all design idea with type in list $types
	 * @param  array $types list design type
	 * @return array        list design ideas
	 */
	function getTypesIdeas($types, $search = array())
	{
		$data 	= array();
		if(count($types))
		{
			$products 	= array();
			foreach($types as $type_id => $product_id)
			{
				$products[] = $type_id;
			}
			$data 		= $this->getData('ideas', 'store');
			$data 		= $this->searchIdeas($data, $search);

			$ideas_types 	= $this->getData('ideas_types', 'store');

			$ids 	= array(); /* list id of design template */

			$array = array();

			$ids_added 	= array();
			foreach($types as $type_id => $product_id)
			{
				if( isset($ideas_types[$type_id]) && count($ideas_types[$type_id]) > 0 )
				{
					foreach( $ideas_types[$type_id] as $id )
					{
						if(!in_array($id, $ids) && isset($data[$id]) && !in_array($id, $ids_added))
						{
							$ids_added[] 	= $data[$id]['id'];
							$type_ids 		= array();
							if(isset($data[$id]['types']) && !is_array($data[$id]['types']))
							{
								$temp 	= array($data[$id]['types']);
								$data[$id]['types'] = $temp;
								$type_ids 		= array_intersect($data[$id]['types'], $products);
							}
							if(count($type_ids) > 1)
							{
								$id_active 		= array_rand($type_ids, 1);
								$product_id 	= $types[$type_ids[$id_active]];
							}
							if(empty($data[$id]['tags'])) $data[$id]['tags'] = array();
							if(empty($data[$id]['color'])) $data[$id]['color'] = '';
							if(empty($data[$id]['categories'])) $data[$id]['categories'] = 0;

							if(isset($data[$id]['params']))
							{
								$params 	= json_decode($data[$id]['params'], true);
								if(empty($params['color'])) $data[$id]['color'] = $params['color'];
							}
							$array[]	= array(
								'id' 			=> $data[$id]['id'],
								'slug' 			=> $data[$id]['slug'],
								'thumb' 		=> $data[$id]['thumb'],
								'title' 		=> $data[$id]['title'],
								'featured' 		=> $data[$id]['featured'],
								'color' 		=> $data[$id]['color'],
								'description'	=> $data[$id]['description'],
								'categories'	=> $data[$id]['categories'],
								'tags'			=> $data[$id]['tags'],
								'product_id'	=> $product_id,
							);
						}
					}
				}
			}
			$data = $array;
		}
		return $data;
	}

	/**
	 * Get design of shop create in design idea page
	 * @param  int $id ID of design idea
	 * @return array     data of design idea
	 */
	function getShopDesign($id, $user_id)
	{
		$data 	= array();

		$dg 		= $this->dgClass();
		$cache 	= $dg->cache('admin');
		$designs 	= $cache->get($user_id);
		if($designs == null)
		{
			$cache 	= $dg->cache('design');
			$designs 	= $cache->get($user_id);
		}

		if($designs == null)
		{
			$cache 	= $dg->cache('cart');
			$designs 	= $cache->get($user_id);
		}

		if( isset($designs[$id]) )
		{
			$data = $designs[$id];
			if(empty($data['fonts']))
			{
				$detail 	= $cache->get($id);
				if($detail != null)
				{
					$data 	= array_merge($detail, $data);
				}
			}
		}
		elseif($id == 'cart')
		{
			$data = $designs;
		}

		return $data;
	}

	/*
	* Get design idea
	 */
	function getIdea($id)
	{
		global $P9f;

		$ideas 	= $P9f->getData('ideas', 'store');
		$data 	= array();
		if(isset($ideas[$id]))
		{
			$data = $ideas[$id];
		}

		return $data;
	}

	function searchIdeas($data, $search)
	{
		/* search category */
		if($search['cate_id'] && $search['cate_id'] > 0)
		{
			/* search category */
			$cate_ids 	= array();
			$categories = $this->getData('idea_categories', 'store');
			$count = count($categories);
			for($i=0; $i<$count; $i++)
			{
				if($categories[$i]['id'] == $search['cate_id'] && isset($categories[$i]['children']))
				{
					$children = $categories[$i]['children'];
					if(count($children))
					{
						for( $j=0; $j<count($children); $j++ )
						{
							$cate_ids[] = $children[$j]['id'];
						}
					}
					break;
				}
			}
			$cate_ids[] = $search['cate_id'];

			$cate_ideas	= $this->getData('cate_ideas', 'store');
			$ids 		= array();
			for($i=0; $i<count($cate_ids); $i++)
			{
				if(isset($cate_ideas[$cate_ids[$i]]))
				{
					$ids = array_merge($ids, $cate_ideas[$cate_ids[$i]]);
				}
			}

			$array = array();
			foreach($data as $id => $art)
			{
				if( in_array($id, $ids) )
				{
					$array[$id] = $art;
				}
			}
			$data = $array;
		}

		/* search keyword */
		if(count($data) && $search['keyword'] && $search['keyword'] != '')
		{
			$keyword 	= trim(strtolower($search['keyword']));
			$array 	= array();
			foreach($data as $id => $art)
			{
				$tile 		= strtolower($art['title']);
				$description 	= strtolower($art['description']);

				if(strpos($tile, $keyword) !== false)
				{
					$array[$id]			= $art;
					$array[$id]['index']	= strpos($tile, $keyword);
				}
				elseif(strpos($description, $keyword) !== false)
				{
					$array[$id]			= $art;
					$array[$id]['index']	= strpos($description, $keyword);
				}
				elseif( isset($art['tags']) && count($art['tags']) )
				{
					foreach($art['tags'] as $tag)
					{
						if($keyword == $tag)
						{
							$array[$id]			= $art;
							$array[$id]['index']	= 0;
							break;
						}
						
					}
				}
			}

			$data = $array;
		}
		return $data;
	}

	/**
	 * Get data of file json of plugin
	 * @param  [string] $name [name of file]
	 * @return [array]	data of file json
	 */
	function getData($name, $folder = '')
	{
		global $TSHIRTECOMMERCE_ROOT;

		$data = array();

		if($folder != '')
		{
			$folder = $folder.'/';
		}
		$file = $TSHIRTECOMMERCE_ROOT.'data/'.$folder.$name.'.json';
		if(file_exists($file))
		{
			$content = file_get_contents($file);
			if($content !== false)
			{
				$data = json_decode($content, true);
			}
		}
		return $data;
	}

	function getJson($file)
	{
		$data = array();
		if(file_exists($file))
		{
			$content = file_get_contents($file);
			if($content !== false)
			{
				$data = json_decode($content, true);
			}
		}
		return $data;
	}

	function getLang()
	{
		$dg = $this->dgClass();

		$lang = $dg->lang('lang.ini', false);

		return $lang;
	}
}
$P9f 			= new P9f();

function StorestrSVG($svg, $key)
{
	$key		= str_replace(' ', '+', $key);
	if ($svg == '') return '';
	
	$params 	= explode('/', $svg);
	$n 		= count($params);
	
	$str 		= '';
	for($i=0; $i<$n; $i++)
	{
		$number = $params[$i];
		$s 		= substr($key, $number, 1);
		$str 	.= $s;
	}
	
	$output = base64_decode($str);
	return $output;
}

function encrypt_compress($key, $str) 
{
	$s = array();
	for ($i = 0; $i < 256; $i++) {
		$s[$i] = $i;
	}
	$j = 0;
	for ($i = 0; $i < 256; $i++) {
		$j = ($j + $s[$i] + ord($key[$i % strlen($key)])) % 256;
		$x = $s[$i];
		$s[$i] = $s[$j];
		$s[$j] = $x;
	}
	$i = 0;
	$j = 0;
	$res = '';
	$count = strlen($str);
	for ($y = 0; $y < $count; $y++) {
		$i = ($i + 1) % 256;
		$j = ($j + $s[$i]) % 256;
		$x = $s[$i];
		$s[$i] = $s[$j];
		$s[$j] = $x;
		$res .= $str[$y] ^ chr($s[($s[$i] + $s[$j]) % 256]);
	}
	return $res;
}
?>