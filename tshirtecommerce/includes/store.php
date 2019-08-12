<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-01-10
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
if ( ! defined('ROOT')) exit('No direct script access allowed');

class store{
	
	public $settings = array();
	
	public function __construct($settings, $admin = false)
	{
		if($admin == false)
			$this->path = ROOT .DS. 'data' .DS. 'store' .DS;
		else
			$this->path = dirname(ROOT) .DS. 'data' .DS. 'store' .DS;
		
		$this->settings	= $settings;
	}
	
	public function getData($file = '')
	{
		$file 	= $this->path. $file.'.json';
		if(file_exists($file))
		{
			$temp 			= file_get_contents($file);
			if($temp != false)
			{
				$content 		= json_decode($temp, true);
				return $content;
			}
		}
		return array();
	}
	
	/*
	* update view when client click to arts or design template
	*/
	public function setView($id, $type = 'arts')
	{
		$temp	= $type;
		$type	= 'user_'.$type;
		
		// add cookie with each clients
		if (isset($_COOKIE[$type]))
		{
			$used 		= $_COOKIE[$type];
		}
		else
		{
			$used		= '';
		}
		$data = array();
		if($used != '')
		{
			$array = explode(';', $used);
			if(count($array))
			{
				foreach($array as $index)
				{
					$data[$index] = 1;
				}
			}
		}
		$data[$id] = 1;
		$used = implode(';', array_keys($data));
		setcookie($type, $used, time() + (86400 * 300), "/");
		
		// add view to history
		$time 		= time();
		$cache 		= $this->dg->cache('store');
		$month 		= date('Y_m', $time);
		$day 		= date('d', $time);
		
		$histories 	= $cache->get('view_'.$temp.'_'.$month);
		if ($histories == null)
		{
			$histories = array();
		}
		$histories[$day][$time] = $id;
		$cache->set('view_'.$temp.'_'.$month, $histories);
		
		//count view
		if($temp == 'arts')
		{
			$file 		= 'arts_info';
		}
		else
		{
			$file 		= 'ideas';
		}
		$data 		= $this->getData($file);
		if (isset($data[$id]))
		{
			if(empty($data[$id]['view']))
			{
				$data[$id]['view'] = 1;
			}
			else
			{
				$view 	= $data[$id]['view'];
				$data[$id]['view'] = $view + 1;
			}
			$file	= $this->path. $file.'.json';
			$this->dg->WriteFile($file, json_encode($data));
		}
	}
	
	/*
	* set cache of earch 
	*/
	public function setSearch($options)
	{
		if(count($options))
		{	
			$time 		= time();
			$month 		= date('Y_m', $time);
			$day 			= date('d', $time);
			
			$cache 		= $this->dg->cache('store');
						
			// seach tags
			if ( isset($options['tags']) && $options['tags'] != '')
			{
				$tags		= strtolower(trim($options['tags']));
				
				$histories 	= $cache->get('keyword_'.$month);
				if ($histories == null)
				{
					$histories = array();
				}
				
				$key = md5($tags);
				if (empty($histories[$key]))
				{
					$count = 1;
					$histories[$key] = array(
						'date' => $time,
						'count' => $count,
						'keyword' => $tags,
					);
				}
				else
				{
					$count = $histories[$key]['count'];
					$histories[$key]['count'] = $count+1;
				}
				
				if (empty($histories[$day]))
				{
					$histories[$day] = array();
				}
				if ( empty($histories[$day][$key]) )
				{
					$histories[$day][$key] = array(
						'time' => $time,
						'count' => 1,
						'keyword' => $tags
					);
				}
				else
				{
					$count	= $histories[$day][$key]['count'];
					$histories[$day][$key]['count'] = $count + 1;
				}
				
				$cache->set('keyword_'.$month, $histories);
			}
			
			// search keyword
			if (isset($options['keyword']) && $options['keyword'] != '')
			{			
				$keyword	= strtolower(trim($options['keyword']));
				
				$histories 	= $cache->get('keyword_'.$month);
				if ($histories == null)
				{
					$histories = array();
				}
				
				$key = md5($keyword);
				if (empty($histories[$key]))
				{
					$count = 1;
					$histories[$key] = array(
						'date' => $time,
						'count' => $count,
						'keyword' => $keyword,
					);
				}
				else
				{
					$count = $histories[$key]['count'];
					$histories[$key]['count'] = $count+1;
				}
				
				if (empty($histories[$day]))
				{
					$histories[$day] = array();
				}
				if ( empty($histories[$day][$key]) )
				{
					$histories[$day][$key] = array(
						'time' => $time,
						'count' => 1,
						'keyword' => $keyword
					);
				}
				else
				{
					$count	= $histories[$day][$key]['count'];
					$histories[$day][$key]['count'] = $count + 1;
				}
				$cache->set('keyword_'.$month, $histories);
			}
			
			// seach designer
			if ( isset($options['designer']) && $options['designer'] != '')
			{
				$designer	= (int)$options['designer'];
				$histories 	= $cache->get('designer_'.$month);
				if ($histories == null)
				{
					$histories = array();
				}
				if (empty($histories[$designer]))
				{
					$histories[$designer] = 1;
				}
				else
				{
					$count = $histories[$designer];
					$histories[$designer] = $count + 1;
				}
				$cache->set('designer_'.$month, $histories);
			}
		}
		exit;
	}
	
	function setPrice($price, $is_shop = false)
	{
		if (empty($this->settings->currency_symbol))
			$symbol = '$';
		else
			$symbol = $this->settings->currency_symbol;
		
		if (empty($this->settings->price_number))
			$number = '2';
		else
			$number = $this->settings->price_number;
		
		if (empty($this->settings->currency_postion))
			$postion = 'left';
		else
			$postion = $this->settings->currency_postion;
		
		if (empty($this->settings->store->exchange_rate))
			$exchange_rate = '0.2';
		else
			$exchange_rate = $this->settings->store->exchange_rate;
		
		if($is_shop == true)
		{
			$exchange_rate = 1;
		}
		$price = $price * $exchange_rate;
		
		$str = number_format($price, $number);
		
		if ($postion == 'left')
		{
			$str = $symbol.$str;
		}
		else
		{
			$str = $str.$symbol;
		}
		return $str;
	}
	
	public function getCategories($type = 'art')
	{
		$data 	= array();
		if ($type == 'art')
		{
			$file 	= 'art_categories';
		}
		else
		{
			$file 	= 'idea_categories';
		}
		$data = $this->getData($file);
		
		return $data;
	}
	
	/*
	* load categories child
	*/
	function categoryChild($id)
	{
		$ids = array($id);
		
		$categories = $this->getCategories();
		if(count($categories))
		{
			foreach($categories as $cate)
			{
				if ($cate['id'] == $id && isset($cate['children']) && count($cate['children']) > 0)
				{
					foreach($cate['children'] as $children)
					{
						$ids[] = $children['id'];
					}
					break;
				}
			}
		}
			
		return $ids;
	}
	
	function sortData($data, $sort = 'featured', $type = 'arts')
	{
		if (count($data) == 0) return $data;
		// get data from cache
		//$cache 		= $this->dg->cache('store');
		//$arts 		= $cache->get($type.'_'.$sort);
		/*
		if ($arts != null)
		{
			return $arts;
		}
		*/
		
		function cmp_feature($a, $b)
		{
			return $b['feature'] - $a['feature'];
		}
		
		function cmp_featured($a, $b)
		{
			if(isset($b['featured']))
			{
				return $b['featured'] - $a['featured'];
			}
			else
			{
				if(empty($b['feature'])) $b['feature'] = 0;
				if(empty($a['feature'])) $a['feature'] = 0;
				return $b['feature'] - $a['feature'];
			}
		}
		
		function cmp_newest($a, $b)
		{
			return $b['id'] - $a['id'];
		}
		
		function cmp_sellers($a, $b)
		{
			if (empty($a['sales']))
				$a['sales'] = 0;
			
			if (empty($b['sales']))
				$b['sales'] = 0;
			
			return $b['sales'] - $a['sales'];
		}
		
		function cmp_views($a, $b)
		{
			return $b['view'] - $a['view'];
		}
		
		function cmp_price_down($a, $b)
		{			
			return $a['price'] - $b['price'];
		}
		
		function cmp_price_up($a, $b)
		{			
			return $b['price'] - $a['price'];
		}
		
		
		if($sort == 'newest')
		{
			usort($data, 'cmp_newest');
		}
		elseif($sort == 'sellers')
		{
			usort($data, 'cmp_sellers');
		}
		elseif($sort == 'views')
		{
			usort($data, 'cmp_views');
		}
		elseif($sort == 'price_down')
		{
			usort($data, 'cmp_price_down');
		}
		elseif($sort == 'price_up')
		{
			usort($data, 'cmp_price_up');
		}
		elseif($sort == 'featured')
		{
			usort($data, 'cmp_featured');
		}
		else
		{
			usort($data, 'cmp_feature');
		}
		
		$arts = array();
		$i = 0;
		if($type == 'ideas')
		{
			foreach($data as $id => $art)
			{
				$arts[$id] = $art;
			}
		}
		else
		{
			foreach($data as $id => $art)
			{
				if(isset($art['id']))
				{
					$arts[$i] = array('id' => $art['id']);
					$i++;
				}
			}
		}
		
		return $arts;
	}
	
	/*
	* get arts
	*/
	public function arts($start = 0, $options = array())
	{		
		$file_info 		= $this->path . 'arts_info.json';
		
		$data 			= array();
		if(file_exists($file_info))
		{
			$info 			= json_decode(file_get_contents($file_info), true);
			
			if(isset($options['viewed']) && $options['viewed'] == 1)
			{
				$arts 		= $this->viewed();
			}
			else
			{
				$arts		= $this->sortData($info, $options['sort']);
			}
			
			if(count($arts))
			{
				// find categories
				if ( isset($options['cate_id']) && $options['cate_id'] > 0)
				{
					$cate_ids = $this->categoryChild($options['cate_id']);
				}
				
				// find designer
				if (isset($options['designer']))
				{
					$designer	= $options['designer'];
				}
				
				// find tags
				if (isset($options['tags']))
				{
					$tag	= trim($options['tags']);
				}
				
				// find keyword
				if (isset($options['keyword']) && $options['keyword'] != '')
				{
					$keyword	= strtolower(trim($options['keyword']));
				}
				
				$n = $start + 30;
				$i = 0;
				$number = 0;
				$total 	= count($arts);
				while($number < $n)
				{
					if ($i >= $total) break;
					
					$art 	= $arts[$i];
					$id 	= $art['id'];
					
					if (isset($info[$id]))
					{
						// find categories
						if (isset($cate_ids) && $cate_ids > 0)
						{
							if (in_array($info[$id]['cate_id'], $cate_ids) == false)
							{
								$i++;
								continue;
							}
						}
						
						// find designer
						if (isset($designer) && $designer > 0)
						{
							if ($info[$id]['user_id'] != $designer)
							{
								$i++;
								continue;
							}
						}
						
						// find tags
						if (isset($tag) && $tag != '')
						{							
							if (array_search($tag, $info[$id]['tags']) === false)
							{
								$i++;
								continue;
							}							
						}
						
						// find keyword
						if ( isset($keyword) )
						{	
							// find with tags
							if (array_search($keyword, $info[$id]['tags']) === false)
							{
								// find title
								if (strpos(strtolower($info[$id]['title']), $keyword) === false)
								{
									if (strpos(strtolower($info[$id]['description']), $keyword) === false)
									{
										$i++;
										continue;
									}
								}
							}						
						}
						
						if ($number < $start)
						{
							$i++;
							$number++;
							continue;
						}
						if (isset($info[$id]['sales']))
						{
							$info[$id]['sales']	= $info[$id]['sales'];
						}
						else
						{
							$info[$id]['sales'] = 0;
						}
						if(empty($info[$id]['price']))
							$info[$id]['price'] = 0;

						$info[$id]['prices'] 	= $info[$id]['price'];
						
						$is_shop = false;
						if(isset($info[$id]['is_shop']) && $info[$id]['is_shop'] == 0 && isset($info[$id]['fle_url']))
						{
							$is_shop = true;
							//$info[$id]['thumb'] = $info[$id]['fle_url'].$info[$id]['thumb'];
							$info[$id]['medium'] = $info[$id]['fle_url'].$info[$id]['medium'];
						}
						$info[$id]['price'] 	= $this->setPrice($info[$id]['price'], $is_shop);
						$data[$i] = $info[$id];
						$number++;
					}
					$i++;
				}
			}
		}
		
		return $data;
	}
	
	/*
	* List top keyword
	*/
	public function keyword()
	{
		$time 		= time();
		$month 		= date('Y_m', $time);
		
		$today 		= date('j', $time);
		
		$cache 		= $this->dg->cache('store');					
		$histories 	= $cache->get('keyword_'.$month);
		
		$keyword 	= array();
		if(count((array)$histories))
		{
			for($i=0; $i<=$today; $i++)
			{
				if(isset($histories[$today]))
				{
					$array = $histories[$today];
					foreach($array as $key => $value)
					{
						if(empty($keyword[$key]) && isset($histories[$key]))
						{
							$keyword[$key] = array(
								'count' => $histories[$key]['count'],
								'keyword' => $histories[$key]['keyword'],
							);
						}
					}
				}
			}
		}
		
		function cmp($a, $b)
		{		
			return $b['count'] - $a['count'];
		}
		
		if(count($keyword))
		{
			usort($keyword, 'cmp');
			
			$data = array();
			for($i=0; $i<15; $i++)
			{
				if(empty($keyword[$i])) break;
				$data[] = $keyword[$i]['keyword'];
			}
			$keyword = $data;
		}

		return $keyword;
	}
	
	/*
	* list all clipart client viewed
	*/
	public function viewed($type = 'arts')
	{
		$data 			= array();
		if(isset($_COOKIE['user_'.$type]))
		{
			$used 		= $_COOKIE['user_'.$type];
			$ids 		= explode(';', $used);
			if(count($ids) > 0)
			{
				foreach($ids as $id)
				{
					$data[] 				= array('id'=>$id);					
				}
			}
		}
		return $data;
	}
	
	/*
	* get price of art
	*/
	public function getPrice($id)
	{
		$price 		= 0;
		
		$file_info 		= $this->path . 'arts_info.json';
		if(file_exists($file_info))
		{
			$info 		= json_decode(file_get_contents($file_info), true);
			
			if(isset($info[$id]))
			{
				$price = $info[$id]['price'];
				
				if (isset($this->settings->store) || isset($this->settings->store->exchange_rate))
					$exchange_rate = $this->settings->store->exchange_rate;
				else
					$exchange_rate = 1;

				if(isset($info[$id]['is_shop']))
				{
					$exchange_rate = 1;
				}
				
				$price = $price * $exchange_rate;
			}
		}
		
		return $price;
	}
	
	/*
	* load art from API
	*/
	public function art($id)
	{
		$file_info 		= $this->path . 'arts_info.json';
		
		$data 			= array();
		if(file_exists($file_info))
		{
			$info 		= json_decode(file_get_contents($file_info), true);
			
			if(isset($info[$id]))
			{		
				if (empty($this->settings->store->api)) return array();
				
				include_once(ROOT .DS. 'api.php');
				$api_key = $this->settings->store->api;
				$api = new API($api_key);
				
				// load cache
				$cache 		= $this->dg->cache('store');
				$arts		= $cache->get('data');
				if ($arts == null)
				{
					$arts	= array();
				}
				
				if (isset($arts[$id]))
				{
					$key 	= $api->getKeyArt($id);
					if($key == false)
					{
						return false;
					}
					$arts[$id]['key'] = $key['id'];
					
					return $arts[$id];
				}
				
				$art = $info[$id];
				if ($art['type'] == 'vector')
				{
					$result = $api->getArt($id);
					if ($result != false)
					{
						
						$arts[$id]	= $result;
						if($result['content'] != '')
						{
							unset($arts[$id]['key']);
							$cache->set('data', $arts);
						}
						return $result;
					}
				}
				else
				{
					$content = $this->dg->openURL($art['medium']);
					if ($content != false)
					{
						$result 		= $api->getKeyArt($id);
						if ($result != false)
						{
							$data = array(
								'content'	=> base64_encode($content),
								'width'		=> '100',
								'height'	=> '100',
								'price'		=> $result['price'],
								'key'		=> '',
							);
							$arts[$id]	= $data;
							if($content != '')
							{
								unset($arts[$id]['key']);
								$cache->set('data', $arts);
							}
							return $data;
						}
					}
				}
			}
		}
		
		return $data;
	}
	
	/*
	* get all design idea
	*/
	public function getIdeas($product_id)
	{
		$products 		= $this->dg->getProducts();
		
		if(count($products) && $product_id > 0)
		{
			foreach($products as $product)
			{
				if($product->id == $product_id)
				{
					if(isset($product->store) && isset($product->store->categories))
					{
						$categories	= $product->store->categories;
						$types		= $product->store->types;
					}
					break;
				}
			}
		}
		
		// get all categories
		$rows_categories 	= $this->getData('idea_categories');

		if(isset($categories) && isset($types))
		{
			// find categoreis
			if(count($rows_categories))
			{
				$rows 	= array();
				$i 		= 0;
				foreach($rows_categories as $cate_id => $row)
				{
					if(in_array($row['id'], $categories))
					{
						$rows[$row['id']]	= array(
							'id'			=> $row['id'],
							'title'		=> $row['title'],
							'parent_id'		=> $row['parent_id'],
							'thumb'		=> $row['thumb'],
						);
						
						$childrens		= array();
						if( isset($row['children']) && count($row['children']) > 0 )
						{						
							foreach($row['children'] as $child)
							{
								if(in_array($child['id'], $categories))
								{
									$childrens[$child['id']]	= $child;
								}
							}
						}
						if(count($childrens))
						{
							$rows[$row['id']]['children']	= $childrens;
						}
					}
					else
					{
						$childrens		= array();
						if( isset($row['children']) && count($row['children']) > 0 )
						{					
							foreach($row['children'] as $child)
							{
								if(in_array($child['id'], $categories))
								{
									$childrens[$child['id']]	= $child;
								}
							}
						}
						if(count($childrens))
						{
							$rows[$row['id']]	= array(
								'id'			=> $row['id'],
								'title'		=> $row['title'],
								'parent_id'		=> $row['parent_id'],
								'thumb'		=> $row['thumb'],
							);
							$rows[$row['id']]['children']	= $childrens;
						}
					}
					
				}
				$rows_categories	= $rows;
			}
			
			// find design idea
			$ids 			= array();
			$ids1 			= array();
			
			// find design ideas with categories
			if( count($categories) > 0 )
			{
				$cate_ideas 	= $this->getData('cate_ideas');
				foreach($categories as $cate_id)
				{
					if( isset($cate_ideas[$cate_id]) && count($cate_ideas[$cate_id]) > 0 )
					{
						foreach( $cate_ideas[$cate_id] as $id )
						{
							if(!in_array($id, $ids))
							{
								$ids[]	= $id;
							}
						}
					}
				}
			}
			
			// find with type
			if( count($types) > 0 )
			{
				$ideas_types 	= $this->getData('ideas_types');
				foreach($types as $type_id)
				{
					if( isset($ideas_types[$type_id]) && count($ideas_types[$type_id]) > 0 )
					{
						foreach( $ideas_types[$type_id] as $id )
						{
							if(!in_array($id, $ids1))
							{
								$ids1[]	= $id;
							}
						}
					}
				}			
			}
		}
		$categories = array();
		if(count($rows_categories))
		{
			$sort_index_1 = 0;
			foreach($rows_categories as &$cate)
			{
				$cate['sort'] = $sort_index_1;
				$categories[$cate['id']] = $cate;
				$sort_index_2 = 0;
				if( isset($cate['children']) && count($cate['children']) )
				{
					$childrens = array();
					foreach($cate['children'] as $id => &$children)
					{
						$children['sort'] = $sort_index_2;
						$childrens[$children['id']] = $children;
						$sort_index_2++;
					}
					$categories[$cate['id']]['children'] = $childrens;
				}
				$sort_index_1++;
			}
		}
		
		$rows = $this->getData('ideas');
		
		if(isset($ids) && isset($ids1) && count($rows))
		{
			$ideas = array();
			foreach($rows as $id => $idea)
			{
				if(in_array($id, $ids) && in_array($id, $ids1))
				{
					$ideas[$id]	= $idea;
				}
			}
			$rows 	= $ideas;
		}

		$data = array(
			'categories'	=> $categories,
			'count'			=> count($rows),
			'rows'			=> $rows,
		);
		return $data;
	}
	
	/*
	* find design idea with designer, tags, keyword...
	*/
	public function ideas($data, $options)
	{
		if(count($data['rows']) == 0) return $data;
		
		$rows	= $data['rows'];
		
		
		if(count($rows))
		{
			// get all design of client viewed
			if(isset($options['viewed']) && $options['viewed'] == 1 && isset($_COOKIE['user_ideas']))
			{
				$used 		= $_COOKIE['user_ideas'];
				$ids 		= explode(';', $used);
				if(count($ids))
				{
					foreach($rows as $id => $row)
					{
						if(!in_array($id, $ids))
						{
							unset($rows[$id]);
						}
					}
				}
			}
			
			// find idea with categories
			if(isset($options['cate_id']) && $options['cate_id'] > 0 && count($rows) > 0)
			{
				$cate_id	= $options['cate_id'];
				$cate_ids 	= array();
				$cate_ids[]	= $cate_id;
				if( isset($data['categories'][$cate_id]) && isset($data['categories'][$cate_id]['children']) && count($data['categories'][$cate_id]['children']) > 0 )
				{
					foreach($data['categories'][$cate_id]['children'] as $children)
					{
						$cate_ids[]	= $children['id'];
					}
				}
				
				$ideas = array();

				$cate_ideas 	= $this->getData('cate_ideas');

				$ids = array();
				for( $i=0; $i<count($cate_ids); $i++ )
				{
					if( isset($cate_ideas[$cate_ids[$i]]) && count($cate_ideas[$cate_ids[$i]]) )
					{
						foreach ( $cate_ideas[$cate_ids[$i]] as $idea_id)
						{
							if(!in_array($idea_id, $ids))
							{
								$ids[] = $idea_id;
							}
						}
					}
				}
				foreach($rows as $id => $row)
				{
					if(in_array($id, $ids))
					{
						$ideas[$id]	= $row;
					}
				}
				$rows 	= $ideas;
			}
			
			// search keyword
			if(isset($options['keyword']) && $options['keyword'] != '' && count($rows) > 0)
			{			
				$ideas 		= array();
				$keyword	= trim(strtolower($options['keyword']));
				foreach($rows as $id => $row)
				{
					$tile 			= strtolower($row['title']);
					$description 		= strtolower($row['description']);
					if(strpos($tile, $keyword) !== false)
					{
						$row['index']	= strpos($tile, $keyword);
						$ideas[$id]		= $row;
					}
					elseif(strpos($description, $keyword) !== false)
					{
						$row['index']	= strpos($description, $keyword);
						$ideas[$id]		= $row;
					}
					elseif( isset($row['tags']) && count($row['tags']) )
					{
						foreach($row['tags'] as $tag)
						{
							if(strpos($tag, $keyword) !== false)
							{
								$row['index']	= strpos($tag, $keyword);
								$ideas[$id]		= $row;
								break;
							}
							
						}
					}
				}
				function cmp_index($a, $b)
				{			
					return $a['index'] - $b['index'];
				}
				usort($ideas, 'cmp_index');
				$rows = $ideas;
			}
			
			// search designer
			if(isset($options['designer']) && $options['designer'] > 0 && count($rows) > 0)
			{
				$ideas 		= array();
				foreach($rows as $id => $row)
				{
					if($row['user_id'] == $options['designer'])
					{
						$ideas[$id]		= $row;
					}
				}
				$rows = $ideas;
			}
			
			// search tags
			if(isset($options['tags']) && $options['tags'] != '' && count($rows) > 0)
			{
				$ideas 		= array();
				$keyword	= trim(strtolower($options['tags']));
				foreach($rows as $id => $row)
				{
					if( isset($row['tags']) && count($row['tags']) )
					{
						foreach($row['tags'] as $tag)
						{
							if($keyword == $tag)
							{
								$ideas[$id]		= $row;
								break;
							}
							
						}
					}
				}
				$rows = $ideas;
			}
		}
		
		if(count($rows) > 0 && isset($options['sort']))
		{
			$rows				= $this->sortData($rows, $options['sort'], 'ideas');
		}
		$data['rows']		= $rows;
		$data['count']		= count($rows);
		
		return $data; 
	}
	
	/*
	* get key of list arts
	* ids: array of art id
	*/
	public function getKeyArts($ids)
	{
		if (empty($this->settings->store->api)) return array();
		
		include_once(ROOT .DS. 'api.php');
		$api_key = $this->settings->store->api;
		$api = new API($api_key);
		
		$str = implode('_', $ids);
		
		$keys 	= $api->getKeyArts($str);
		
		return $keys;
	}
	
	/*
	* Get design template
	*/
	public function getIdea($id)
	{
		if (empty($this->settings->store->api)) return array();
		$result	= '';
		
		$ideas = $this->getData('ideas');
		if(isset($ideas[$id]))
		{
			$idea = $ideas[$id];

			if(isset($idea['type']) && $idea['type'] == 'shop')
			{
				$cache 	= $this->dg->cache('admin');
				$design 	= $cache->get($idea['user_id']);
				if(isset($design[$id]))
				{
					$data = $design[$id];
					if(empty($data['vectors']))
					{
						$detail 	= $cache->get($id);
						if($detail != null)
						{
							$data = array_merge($detail, $data);
						}
					}
					$result = array(
						'key'		=> 'shop',
						'content'	=> base64_encode($data['vectors']),
					);
				}
				return $result;
			}
		}
		
		include_once(ROOT .DS. 'api.php');
		$api_key = $this->settings->store->api;
		$api = new API($api_key);
		
		// load cache
		$cache 		= $this->dg->cache('store');
		$vectors	= $cache->get('vectors');
		
		if(isset($vectors[$id]))
		{
			$content 	= $vectors[$id];			
		}
		
		if(empty($content))
		{	
			$result = $api->geIdea($id);			
			if ($result != false)
			{
				$vectors[$id]	= $result['content'];
				$cache->set('vectors', $vectors);
			}
		}
		else
		{
			$key 	= $api->getKeyIdea($id);
			
			if($key == false)
			{
				return false;
			}
			
			$result = array(
				'key'		=> $key,
				'content'	=> $content,
			);
		}
		
		return $result;
	}
}
?>