<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-12-10
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
if ( ! defined('ROOT')) exit('No direct script access allowed');

class Store extends Controllers
{	
	function __construct()
	{
		parent::__construct();
		$dgClass 			= new dg();
		$settings 			= $dgClass->getSetting();
		$this->settings 	= $settings;

		if (isset($settings->store) && isset($settings->store->enable) && $settings->store->enable == 1)
		{
			$merge_cliparts 		= false;
			if( isset($settings->merge_cliparts) && $settings->merge_cliparts == 1)
			{
				$merge_cliparts 	= true;
			}
			if($merge_cliparts === false)
			{
				$settings->merge_cliparts = 1;
				$file 	= dirname(ROOT) .DS. 'data' .DS. 'settings.json';
				$dgClass->WriteFile($file, json_encode($settings));
				$dgClass->redirect('index.php/clipart/merge/1');
				exit;
			}
		}
	}
	/*
	*	log all data with categories, arts, ideas when deleted
	*  	$ids: List id of categories, arts, ideas
	*  	$type: [art],[idea],[cate_art],[cate_idea]
	*/
	protected function setDelete($ids, $type = 'art')
	{
		if(count($ids) ==0) return false;
		
		$data 	= $this->getData('deleted');
		if(empty($data[$type]))
		{
			$data[$type]	= array();
		}
		if($type == 'art')
		{
			$this->dg	= new dg();
			$cache 		= $this->dg->cache('store');
			$cache->delete('arts');
			$cache->delete('arts_featured');
			$cache->delete('arts_newest');
			$cache->delete('arts_price_down');
			$cache->delete('arts_price_up');
			$cache->delete('arts_views');
			$cache->delete('arts_sellers');
		}
		foreach($ids as $id)
		{
			if(!in_array($id, $data[$type]))
			{
				$data[$type][] = $id;
			}
		}
		$this->saveFile('deleted', json_encode($data));
	}
	
	public function index()
	{
		$this->charts();
	}
	
	protected function sortData($data, $sort = 'featured')
	{
		if (count($data) == 0) return $data;
		
		// get data from cache
		$this->dg	= new dg();
		$cache 		= $this->dg->cache('store');				
		
		function cmp_feature($a, $b)
		{
			if(empty($a['feature'])) $a['feature'] = 0;
			if(empty($b['feature'])) $b['feature'] = 0;
			return $b['feature'] - $a['feature'];
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
		else
		{
			usort($data, 'cmp_feature');
		}
		
		$arts = array();
		$i = 0;
		foreach($data as $id => $art)
		{
			if(isset($art['id']))
			{
				$arts[$i] = array('id' => $art['id']);
				$i++;
			}
		}
		$cache->set('arts_'.$sort, $arts, 86400);
		
		return $arts;
	}
	
	/*
	* convert file json to array
	*/
	protected function getCategories($type = 'art')
	{
		$this->path 		= dirname(ROOT) . DS. 'data' . DS . 'store' .DS;
		if ($type == 'art')
		{
			$file 				= $this->path . 'art_categories.json';
		}
		else
		{
			$file 				= $this->path . 'idea_categories.json';
		}
		
		$data 				= array();
		if(file_exists($file))
		{
			$content 		= file_get_contents($file);
			if ($content !== false)
			{
				$categories	= json_decode($content, true);
				for($i=0; $i<count($categories); $i++)
				{
					$category = $categories[$i];
					if(empty($category['description'])) $category['description'] = '';
					$data[$category['id']] = array(
						'id'			=> $category['id'],
						'title'		=> $category['title'],						
						'description'	=> $category['description'],
						'parent_id'		=> $category['parent_id'],
					);
					if(isset($category['thumb']))
					{
						$data[$category['id']]['thumb'] = $category['thumb'];
					}
					if (isset($category['children']) && count($category['children']))
					{
						for($j=0; $j<count($category['children']); $j++)
						{
							$children				= $category['children'][$j];
							if(empty($children['description'])) $children['description'] = '';
							$data[$children['id']] 	= array(
								'id'			=> $children['id'],
								'title'			=> $children['title'],							
								'description'	=> $children['description'],
								'parent_id'		=> $children['parent_id'],								
							);
							
							if(isset($children['thumb']))
							{
								$data[$children['id']]['thumb'] = $children['thumb'];
							}
						}
					}
				}
			}
		}
		return $data;
	}
	
	// write file
	protected function saveFile($file_name, $content)
	{
		$this->path 		= dirname(ROOT) . DS. 'data' . DS . 'store' .DS;
		$file 			= $this->path .$file_name. '.json';
		if(!file_exists($file))
		{
			$myfile = fopen($file, "w");
			fclose($myfile);
		}
		$dgClass 			= new dg();
		$dgClass->WriteFile($file, $content);
	}
	
	/*
	* convert arrary to categories tree
	*/
	protected function treeCategories($categories)
	{
		$data = array();
		if(count($categories))
		{
			$i = 0;
			$temp = array();
			foreach($categories as $cate)	// find parent
			{
				if($cate['parent_id'] == 0)
				{
					$data[$i] 	= $cate;
					$i++;
				}
				else
				{
					$temp[]		= $cate;
				}
			}
			
			// find children
			if(count($data) && count($temp))
			{				
				for($i=0; $i<count($data); $i++)
				{
					$data[$i]['children'] = array();
					if(count($temp))
					{
						foreach($temp as $key => $cate)
						{
							if($data[$i]['id'] == $cate['parent_id'])
							{
								$data[$i]['children'][] = $cate;
								unset($temp[$key]);
							}						
						}
					}
				}
			}
		}
		
		return $data;
	}
	
	/*
	* show view categoreies
	*/
	public function category($type = 'art')
	{
		$this->path 		= dirname(ROOT) . DS. 'data' . DS . 'store' .DS;
		
		if ($type == 'art')
		{
			$data['title'] 		= 'Clipart Categories';
			$file 			= 'art_categories';
		}
		else
		{
			$data['title'] 		= 'Design Template Categories';
			$file 				= 'idea_categories';
		}
		$data['sub_title'] 		= 'Manager';
		$data['type'] 			= $type;
				
		// output data		
		$data['categories'] = $this->getData($file);
		
		$this->view('store', $data);
	}
	
	public function edit_category($type = 'art', $id = '')
	{
		$this->path 		= dirname(ROOT) . DS. 'data' . DS . 'store' .DS;
		
		// find category edit
		$category = array(
			'id'			=> $id,
			'title'		=> '',
			'description'	=> '',
			'parent_id'		=> 0,
			'children'		=> array(),
		);
		
		// get content file
		$categories			= array();
		if ($type == 'art')
		{
			$file 		= $this->path . 'art_categories.json';
			$data['title'] 	= 'Clipart Category';
		}
		else
		{
			$file 		= $this->path . 'idea_categories.json';
			$data['title'] 	= 'Design Template Category';
		}
		
		if(file_exists($file))
		{
			$content 		= file_get_contents($file);
			if ($content !== false)
			{
				$categories	= json_decode($content, true);
			}
		}
				
		$n = -1;
		$j = -1;
		if(count($categories) && $id != '')
		{
			$i = 0;
			foreach($categories as $cate)
			{
				if ($cate['id'] == $id)
				{
					$n = $i;
					$category = $cate;
					break;
				}
				else
				{
					if (isset($cate['children']) && count($cate['children']))
					{
						$ij = 0;
						foreach($cate['children'] as $children)
						{
							if ($children['id'] == $id)
							{
								$j						= $ij;
								$category 				= $children;
								$category['children'] 	= array();
								break;
							}
							$ij++;
						}
					}
				}
				$i++;
			}
		}
		
		$data['sub_title'] 		= 'Edit';
		
		$data['type']			= $type;
		$category['type']		= $type;
		// output data
		$data['categories'] 	= $categories;
		$data['category'] 		= $category;
		
		$this->view('store_edit', $data);
	}
	
	// save category
	public function saveCategory($type = 'art', $id = 0)
	{
		// save data
		if(isset($_POST['data']))
		{
			$post = $_POST['data'];
			
			$categories = $this->getCategories($type);
			if($id == 0) // add new
			{
				$index = 0;
				foreach($categories as $key => $cate)
				{
					if($cate['id'] > $index)
					{
						$index	= $cate['id'];
					}
				}
				$index = $index + 1;
				$post['id']		= $index;
				$categories[] 	= $post;
			}
			else // edit category
			{
				foreach($categories as $key => $cate)
				{
					if($id == $cate['id'])
					{
						$categories[$key]['title']			= $post['title'];
						$categories[$key]['description']	= $post['description'];
						$categories[$key]['parent_id']		= $post['parent_id'];
						if(isset($post['thumb']))
							$categories[$key]['thumb']		= $post['thumb'];
					}
				}
			}		
			
			// load file again
			$data = $this->treeCategories($categories);
			if ($type == 'art')
				$this->saveFile('art_categories', json_encode($data));
			else
				$this->saveFile('idea_categories', json_encode($data));
		}
		$dgClass 			= new dg();
		$dgClass->redirect('index.php/store/category/'.$type);
	}
	
	/*
	* sort categories
	*/
	public function sortCategories($type = 'art')
	{
		if (isset($_POST['categories']))
		{
			$categories 	= $_POST['categories'];
			$temp 		= explode(';', $categories);
			
			$data 		= array();
			for($i=0; $i<count($temp); $i++)
			{
				$parent = explode(':', $temp[$i]);
				if(count($parent) > 1)
				{
					$data[$parent[0]]	= array();
					$params 			= explode(',', $parent[1]);
					for($j=0; $j<count($params); $j++)
					{
						if ($params[$j] != '')
							$data[$parent[0]][] = $params[$j];
					}
				}
				else
				{
					$data[$parent[0]]	= $parent[0];
				}
			}
			
			// save data
			if(count($data))
			{
				$categories				= $this->getCategories($type);
				$content 				= array();
				$i 						= 0;
				foreach($data as $id => $ids)
				{
					if (isset($categories[$id]))
					{
						$content[$i]				= $categories[$id];
						$content[$i]['children']	= array();
						foreach($ids as $child)
						{
							if($id != $child)
							{
								$content[$i]['children'][]	= $categories[$child];
							}
						}
						$i++;
					}
				}
				
				if($type == 'art')
					$this->saveFile('art_categories', json_encode($content));
				else
					$this->saveFile('idea_categories', json_encode($content));
			}
		}
	}
	
	/*
	* Remove categories
	*/
	public function removeCategory($type = 'art')
	{
		$id 				= $_POST['id'];
		if((int)$id == 0) return;
		
		$this->path 		= dirname(ROOT) . DS. 'data' . DS . 'store' .DS;
		if ($type == 'art')
		{
			$file_name 			= 'art_categories';
			$this->setDelete(array($id), 'cate_art');
		}
		else
		{
			$file_name 			= 'idea_categories';
			$this->setDelete(array($id), 'cate_idea');
		}
		$file 				= $this->path .$file_name. '.json';
		if(file_exists($file))
		{
			$content 		= file_get_contents($file);
			if ($content != false)
			{
				$categories	= json_decode($content, true);
				$data		= array();
				$n 			= 0;
				for($i=0; $i<count($categories); $i++)
				{					
					if($id != $categories[$i]['id'])
					{						
						$data[$n] 				= $categories[$i];
						$data[$n]['children']	= array();
						if(isset($categories[$i]['children']) && count($categories[$i]['children']) > 0)
						{
							for($j=0; $j<count($categories[$i]['children']); $j++)
							{
								if($categories[$i]['children'][$j]['id'] != $id)
								{
									$data[$n]['children'][]	= $categories[$i]['children'][$j];
								}
							}
						}
						$n++;
					}
				}
				$this->saveFile($file_name, json_encode($data));
				exit;
			}
		}
	}
	
	/*
	* get cliaprt
	*/
	public function arts($page = 1)
	{
		$data['title'] 		= 'Clipart';
		$data['sub_title'] 	= 'Manager';
		
		if(isset($_POST['search']))
		{
			$search		= $_POST['search'];
			$this->set_session('search', $search);
		}
		elseif(isset($_SESSION['search']))
		{
			$search		= $_SESSION['search'];
		}
		else
		{
			$search		= array(
				'keyword'	=> '',
				'cate'	=> '',
				'subcate'	=> '',
				'sort'	=> 'featured',
			);
		}
		$data['search']	= $search;
		$data['info']	= array();

		$info 	= dirname(ROOT) . DS. 'data' . DS . 'store' .DS. 'arts_info.json';
		$arts 	= array();
		if(file_exists($info))
		{	
			$temp 			= file_get_contents($info);
			if($temp != false)
			{
				$data['info'] 	= json_decode($temp, true);
				$arts 		= $this->sortData($data['info'], $search['sort']);
				
				// search subcate
				if(isset($search['subcate']) && $search['subcate'] > 0)
				{
					$rows		= array();
					foreach($arts as $i => $value)
					{
						if(isset($data['info'][$value['id']]))
						{
							$art = $data['info'][$value['id']];
							if($art['cate_id'] == $search['subcate'])
							{
								$rows[] = array('id'=>$value['id']);
							}
						}
						$arts = $rows;
					}
				}
				
				// search keyword
				if(isset($search['keyword']) && $search['keyword'] != '')
				{
					$search['keyword'] = strtolower($search['keyword']);
					$rows		= array();
					foreach($arts as $i => $value)
					{
						if(isset($data['info'][$value['id']]))
						{
							$art = $data['info'][$value['id']];
							if( strpos(strtolower($art['title']), $search['keyword']) !== false)
							{
								$rows[] = array('id'=>$value['id']);
							}
							elseif( strpos(strtolower($art['description']), $search['keyword']) !== false)
							{
								$rows[] = array('id'=>$value['id']);
							}
						}
						$arts = $rows;
					}
				}
			}
		}
		
		$data['categories']		= $this->treeCategories($this->getCategories());
		
		$data['arts']			= $arts;
		$data['page']			= $page;
		$data['limit']			= 30;
		
		$number = (int) (count($arts)/$data['limit']);
		if(count($arts)%$data['limit'])
		{
			$number	= $number + 1;
		}
		$data['page_number']	= $number;
		$data['method']			= $this;
		
		$this->view('store_arts', $data);
	}
	
	function setPrice($price)
	{
		$dgClass 			= new dg();
		$settings 			= $dgClass->getSetting();
		$this->settings 		= $settings;

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
	
	/*
	* edit art
	*/
	public function edit($type = 'arts', $id = 0)
	{
		if($id == 0)
		{
			$dgClass 			= new dg();
			$dgClass->redirect('index.php/store/'.$type);
		}
		
		if ($type == 'arts')
		{			
			$info 	= dirname(ROOT) . DS. 'data' . DS . 'store' .DS. 'arts_info.json';
			$arts 	= array();
			if(file_exists($info))
			{	
				$content 			= file_get_contents($info);
				
				if($content !== false)
				{
					$arts 		= json_decode($content, true);
					if(isset($arts[$id]))
					{				
						$art	= $arts[$id];
					}
				}
			}
			
			$cate_file = 'art_categories.json';
		}
		
		if(empty($art))
		{
			$dgClass 			= new dg();
			$dgClass->redirect('index.php/store/'.$type);
		}
		$data['save'] = false;
		
		// update data
		if (isset($_POST['data']))
		{
			$post = $_POST['data'];
			
			$arts[$id]['title']				= $post['title'];
			$arts[$id]['price']				= $post['price'];
			$arts[$id]['cate_id']			= $post['cate_id'];
			$arts[$id]['description']		= $post['description'];
			$arts[$id]['tags']				= explode(',', $post['tags']);
			$this->saveFile('arts_info', json_encode($arts));
			
			$dgClass 			= new dg();
			$info 	= dirname(ROOT) . DS. 'data' . DS . 'store' .DS. 'arts_info.json';
			$arts 	= array();
			if(file_exists($info))
			{	
				$content 			= file_get_contents($info);
				
				if($content !== false)
				{
					$arts 		= json_decode($content, true);
					if(isset($arts[$id]))
					{				
						$art	= $arts[$id];
					}
				}
			}
			if(empty($art))
			{
				$dgClass 			= new dg();
				$dgClass->redirect('index.php/store/'.$type);
			}
			$data['save'] = true;
		}
		
		// get categories
		$categories	= array();
		$cate_file = dirname(ROOT) . DS. 'data' . DS . 'store' .DS. $cate_file;
		if(file_exists($cate_file))
		{
			$content = file_get_contents($cate_file);
			if($content != false)
			{
				$categories = json_decode($content, true);
			}
		}
		
		$data['categories'] 	= $categories;
		$data['art'] 			= $art;
		
		$data['title'] 		= 'Clipart';
		$data['sub_title'] 	= 'Edit';
		$data['id']			= $id;
		$data['type']		= $type;
		$this->view('store_art', $data);
	}
	
	/*
	* set featured
	* $value = [0, 1] - is Unfeatured or featured
	*/
	public function featured($type = 'art', $id = 0, $value = 0)
	{
		if ($id == 0) return;
		
		if($type == 'art')
		{
			$file_name 	= 'arts_info';
			$field 		= 'feature';
		}
		else
		{
			$file_name	= 'ideas';
			$field 		= 'featured';
		}
		$file 	= dirname(ROOT) . DS. 'data' . DS . 'store' .DS. $file_name .'.json';
		
		$data 		= $this->getData($file_name);
		
		if ($value != 0 && $value != 1) $value = 0;
		
		if(isset($data) && isset($data[$id]))
		{
			$data[$id][$field] = $value;
			$this->saveFile($file_name, json_encode($data));
		}
	}
	
	/*
	* remove 
	*/
	function remove($type = 'art')
	{
		$ids = $_POST['ids'];
		if(count($ids) > 0)
		{
			if($type == 'art')
			{
				$file_name 	= 'arts_info';
				$this->setDelete($ids, 'art');
			}
			else
			{
				$file_name 	= 'ideas';
				$this->setDelete($ids, 'idea');
			}
			
			$data 		= $this->getData($file_name);
			if(count($data))
			{
				$arts 	= array();
				foreach($data as $key => $value)
				{
					if(!in_array($key, $ids))
					{
						$arts[$key] = $value;
					}
				}
				$this->saveFile($file_name, json_encode($arts));
			}
		}
	}
	
	public function charts()
	{
		$data['title'] 		= 'Charts';
		$data['sub_title'] 	= 'Store';
		$this->view('charts', $data);
	}
	
	/*
	* List all design type
	*/
	public function types($method = null, $id = null)
	{
		$dgClass 			= new dg();
		$data['title'] 		= 'Design Types';
		$data['sub_title'] 	= 'Manager';
		
		$types 				= $this->getData('types');
		
		// remove data
		if($method == 'remove' && $id > 0)
		{
			if(count($types))
			{
				$this->setDelete(array($id), 'type');
				
				$rows 		= array();
				foreach($types as $row)
				{
					if($row['id'] != $id)
					{
						$rows[]	= $row;
					}
				}
				$this->saveFile( 'types', json_encode($rows) );
				$dgClass->redirect('index.php/store/types');
			}
		}
		
		/* add & update types */
		if(isset($_POST['data']))
		{
			$post 			= $_POST['data'];
			$data 			= $types;
			if(isset($post['id']))
			{
				if(count($types))
				{
					$data 	= array();
					foreach($types as $row)
					{
						if($row['id'] == $post['id'])
						{
							$row['title']	= $post['title'];
						}
						$data[] = $row;
					}
				}
			}
			else
			{
				$index 		= 0;
				if(count($types))
				{
					foreach($types as $row)
					{
						if($row['id'] > $index)
							$index 	= $row['id'];
					}
				}
				$index	= $index + 1;
				$data[]	= array(
					'id'	=> $index,
					'title'	=> $post['title'],
				);
			}
			$this->saveFile( 'types', json_encode($data) );
			$dgClass->redirect('index.php/store/types');
		}
		
		$data['rows'] 		= $types;
		
		$type 				= array(
			'id'	=> 0,
			'title'	=> ''
		);
		
		// edit
		if($method == 'edit' && $id > 0)
		{
			if(count($types))
			{
				foreach($types as $row)
				{
					if($row['id'] == $id)
					{
						$type	= $row;
						break;
					}
				}
			}
		}
		
		$data['type']	= $type;
		
		$this->view('store_types', $data);
	}
	
	/*
	* List all desig template
	*/
	public function ideas($page = 1)
	{
		
		$data['title'] 			= 'Design Template';
		$data['sub_title'] 		= 'Manager';
		
		$ideas 					= $this->getData('ideas');
		
		$categories 			= $this->getData('idea_categories');
		
		if(isset($_POST['search']))
		{
			$search 			= $_POST['search'];
			
			/* search with type_id */
			if($search['type_id'] > 0)
			{
				$type_id		= $search['type_id'];
				$ideas_types	= $this->getData('ideas_types');
				$rows 			= array();
				if(isset($ideas_types[$type_id]) && count($ideas_types[$type_id]) > 0)
				{
					$ids 		= $ideas_types[$type_id];
					if(count($ideas))
					{
						foreach($ideas as $id => $idea)
						{
							if(in_array($id, $ids))
							{
								$rows[$id]	= $idea;
							}
						}
					}
				}
				$ideas				= $rows;
			}
			
			/* search with category */
			if($search['cate_id'] > 0)
			{
				$cate_ids		= array();
				
				// find all sub categories
				$cate_ids[]		= $search['cate_id'];
				for($i=0; $i<count($categories); $i++)
				{
					if( $categories[$i]['id'] == $search['cate_id'] && isset($categories[$i]['children']) && count($categories[$i]['children']) > 0 )
					{
						foreach($categories[$i]['children'] as $child)
						{
							$cate_ids[]		= $child['id'];
						}
						break;
					}
				}
				
				$cate_ideas		= $this->getData('cate_ideas');
				$rows 			= array();
				foreach($cate_ids as $cate_id)
				{
					if(isset($cate_ideas[$cate_id]) && count($cate_ideas[$cate_id]) > 0)
					{
						$ids 		= $cate_ideas[$cate_id];
						if(count($ideas))
						{
							foreach($ideas as $id => $idea)
							{
								if(in_array($id, $ids))
								{
									$rows[$id]	= $idea;
								}
							}
						}
					}
				}
				
				$ideas			= $rows;
			}
			
			/* search keyword */
			if($search['keyword'] != '')
			{
				$rows 		= array();
				$keyword	= strtolower($search['keyword']);
				if(count($ideas))
				{
					foreach($ideas as $id => $idea)
					{
						$title 			= strtolower($idea['title']);
						$description 	= strtolower($idea['description']);
						if(strpos($title, $keyword) !== false)
						{
							$rows[$id]	= $idea;
						}
						elseif(strpos($description, $keyword) !== false)
						{
							$rows[$id]	= $idea;
						}
					}
				}
				$ideas			= $rows;
			}
			
			$data['search'] 	= $search;
		}
		else
		{
			$data['search'] 	= array(
				'keyword'		=> '',
				'type_id'		=> 0,
				'cate_id'		=> 0,
			);
		}
		
		$data['categories']		= $this->treeCategories($categories);
		
		$data['types'] 			= $this->getData('types');
		$data['rows'] 			= $ideas;
		
		$data['page']			= $page;
		$data['limit']			= 30;
		
		$number = (int) (count($ideas)/$data['limit']);
		if(count($ideas)%$data['limit'])
		{
			$number	= $number + 1;
		}
		$data['page_number']	= $number;
		
		
		$this->view('store_ideas', $data);
	}
	
	/*
	* Edit design template
	*/
	public function idea($id = 0)
	{
		$dgClass 			= new dg();
		
		if($id == 0)
		{
			$dgClass->redirect('index.php/store/ideas');
		}
		
		$ideas 		= $this->getData('ideas');
		if(isset($ideas[$id]))
		{
			$idea 	= $ideas[$id];
		}
		
		if(empty($idea))
		{
			$dgClass->redirect('index.php/store/ideas');
		}
		else
		{
			$data['idea'] 		= $idea;
		}
		$data['save'] = false;
		
		// get type of design template
		$ideas_types 			= $this->getData('ideas_types');
		
		$cate_ideas 			= $this->getData('cate_ideas');
		
		// save data
		if(isset($_POST['data']))
		{
			$data 				= $_POST['data'];
			$tags 				= explode(',', $data['tags']);
			$ideas[$id]['title']		= $data['title'];
			$ideas[$id]['description']	= $data['description'];
			$ideas[$id]['tags']		= $tags;
			$this->saveFile( 'ideas', json_encode($ideas) );
			
			// save types
			$types 				= $data['types'];
			$rows 				= $ideas_types;
			if(count($types))
			{
				
				foreach($ideas_types as $type_id => $idea_ids)
				{
					$ids 		= $idea_ids;
					if(in_array($type_id, $types)) // add design template to type
					{
						if(!in_array($id, $idea_ids))
						{
							$ids[] = $id;
						}
					}
					else	// remove
					{
						if(in_array($id, $idea_ids))
						{
							$ids 	= array();
							for($i=0; $i<count($idea_ids); $i++)
							{
								if($id != $idea_ids[$i])
								{
									$ids[]	= $idea_ids[$i];
								}
							}
						}
					}
					$rows[$type_id]	= $ids;
				}
				
				foreach($types as $type_id)
				{
					if(!isset($rows[$type_id]) )
					{
						$rows[$type_id] = array(
							'0'=>$id
						);
					}					
				}
			}
			$this->saveFile( 'ideas_types', json_encode($rows) );
			
			// save categories
			$rows 		= $cate_ideas;
			if(isset($data['categories']))
			{
				$cate_ids 	= $data['categories'];
				if(count($cate_ideas))
				{
					foreach($cate_ideas as $cate_id => $ids)
					{
						
						if(in_array($cate_id, $cate_ids)) // add
						{
							$idea_ids 	= $ids;
							if(!in_array($id, $ids))
							{
								$idea_ids[] = $id;
							}
						}
						else		// remove
						{
							$idea_ids 	= array();
							for($i=0; $i<count($ids); $i++)
							{
								if(isset($ids[$i]) && $ids[$i] != $id)
								{
									$idea_ids[] = $ids[$i];
								}
							}
						}
						$rows[$cate_id]	= $idea_ids;
					}
					
					// add with new cate
					foreach($cate_ids as $cate_id)
					{
						if(!isset($rows[$cate_id]) )
						{
							$rows[$cate_id][] = $id;
						}					
					}
				}
			}
			$this->saveFile( 'cate_ideas', json_encode($rows) );
			
			$ideas 		= $this->getData('ideas');
			if(isset($ideas[$id]))
				$idea 	= $ideas[$id];
			
			if(count($idea) == 0)
				$dgClass->redirect('index.php/store/ideas');
			else
				$data['idea'] 		= $idea;
			
			$data['save'] = true;
			
			// get type of design template
			$ideas_types 			= $this->getData('ideas_types');
			$cate_ideas 			= $this->getData('cate_ideas');
		}
		
		// get categoreies
		$categories 			= $this->getCategories('idea');
		$data['categories']		= $this->treeCategories($categories);
		
		// get categories of idea
		$cate_ids				= array();
		if(count($cate_ideas))
		{
			foreach($cate_ideas as $cate_id => $ids)
			{
				if(in_array($id, $ids))
				{
					$cate_ids[]	= $cate_id;
				}
			}
		}
		$data['cate_ids'] 		= $cate_ids;
		
		// get all types
		$data['types'] 			= $this->getData('types');
		
		$data['ideas_types'] 	= $ideas_types;
		
		$data['id'] 			= $id;
		
		$data['title'] 			= 'Design Template';
		$data['sub_title'] 		= 'Edit';
		
		$this->view('store_idea', $data);
	}
	
	protected function getData($file = '')
	{
		$file 	= dirname(ROOT) . DS. 'data' . DS . 'store' .DS. $file.'.json';
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
	
	// add fields to design template
	public function fields($method = null, $id = null)
	{
		$dgClass 			= new dg();
		$data['title'] 		= 'Fields';
		$data['sub_title'] 	= 'Manager';
		
		$fields 			= $this->getData('fields');
		
		// remove data
		if($method == 'remove' && $id > 0)
		{
			if(count($fields))
			{
				$rows 		= array();
				foreach($fields as $row)
				{
					if($row['id'] != $id)
					{
						$rows[]	= $row;
					}
				}
				$this->saveFile( 'fields', json_encode($rows) );
				$dgClass->redirect('index.php/store/fields');
			}
		}
		
		/* add & update types */
		if(isset($_POST['data']))
		{
			$post 			= $_POST['data'];
			$data 			= $fields;
			if(isset($post['id']))
			{
				if(count($fields))
				{
					$data 	= array();
					foreach($fields as $row)
					{
						if($row['id'] == $post['id'])
						{
							$row['title']	= $post['title'];
						}
						$data[] = $row;
					}
				}
			}
			else
			{
				$index 		= 0;
				if(count($fields))
				{
					foreach($fields as $row)
					{
						if($row['id'] > $index)
							$index 	= $row['id'];
					}
				}
				$index	= $index + 1;
				$data[]	= array(
					'id'	=> $index,
					'title'	=> $post['title'],
				);
			}
			$this->saveFile( 'fields', json_encode($data) );
			$dgClass->redirect('index.php/store/fields');
		}
		
		$data['fields']		= $fields;
		
		// add, edit field
		$field 				= array(
			'id'	=> 0,
			'title'	=> ''
		);
		
		// edit
		if($method == 'edit' && $id > 0)
		{
			if(count($fields))
			{
				foreach($fields as $row)
				{
					if($row['id'] == $id)
					{
						$field	= $row;
						break;
					}
				}
			}
		}
		
		$data['field']	= $field;
		
		$this->view('store_fields', $data);
	}
}
?>