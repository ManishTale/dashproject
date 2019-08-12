<?php
/*
 * T-Shirt eCommerce API
 * website: http://api.9file.net
 * Store: http://store.9file.net
*/
class API{
	
	protected $url 	= 'http://api.9file.net/api/';
	public $api_key = '';
	public $path 	= '';
	/*
	*
	*/
	public function __construct($key = '')
	{
		$this->api_key = $key;
		if ($this->api_key == '')
			return false;
		
		if(strpos(ROOT, 'tshirtecommerce/admin') > 0)
		{
			$this->path 	= dirname(ROOT);
		}
		else
		{
			$this->path 	= ROOT;
		}
		$this->path = $this->path .DS. 'data' .DS. 'store';
	}
	
	// load data from file json in store
	public function getData($file = '')
	{
		$file 	= $this->path .DS. $file.'.json';
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
	* check website downloaded data or No
	*/
	public function download()
	{
		$data = array(
			'error' => 0,
			'step'	=> 0,
			'msg'	=> 'Import Data success'
		);
		
		// download types of design idea
		$file = $this->path .DS. 'types.json';
		if (!file_exists($file))
		{
			// get design types
			$types = $this->getURL('types');
			if ($types !== false)
			{
				$this->WriteFile($file, json_encode($types));
			}
			$data['step']	= 1;
			$data['msg']	= 'Importing types of design idea';
			return $data;
		}
		
		// download categories of arts
		$file = $this->path .DS. 'art_categories.json';
		if (!file_exists($file))
		{
			$this->artCategories();
			$data['step']	= 2;
			$data['msg']	= 'Importing categories of cliparts';
			return $data;
		}
		
		// download cliparts
		$file = $this->path .DS. 'arts.json';
		if (!file_exists($file))
		{
			$this->arts();
			$data['step']	= 3;
			$data['msg']	= 'Importing cliparts';
			return $data;
		}
		
		// download categories of design idea
		$file = $this->path .DS. 'idea_categories.json';
		if (!file_exists($file))
		{
			$this->ideaCategories();
			$data['step']	= 4;
			$data['msg']	= 'Importing categories of design idea';
			return $data;
		}
		
		// download ideas
		$file = $this->path .DS. 'ideas.json';
		if (!file_exists($file))
		{
			$this->ideas();
			$data['step']	= 5;
			$data['msg']	= 'Importing designs idea';
			return $data;
		}
		
		return $data;
	}
	
	
	/*
	* load add data when active key;
	*/
	public function ini()
	{
		$import = 0;
		// download art categories
		$art = $this->path .DS. 'art_categories.json';
		if (!file_exists($art))
		{
			$this->artCategories();
			$import = 1;
		}
		
		// download arts
		$art = $this->path .DS. 'arts.json';
		if (!file_exists($art))
		{
			$this->arts();
			$import = 1;
		}
		
		// download idea categories
		if(isset($_GET['load']) && $_GET['load'] == 'idea')
		{
			$art = $this->path .DS. 'idea_categories.json';
			if (!file_exists($art))
			{
				$this->ideaCategories();
				$import = 1;
			}
			
			// download ideas
			$ideas = $this->path .DS. 'ideas.json';
			if (!file_exists($ideas))
			{
				$this->ideas();
				$import = 1;
			}
		}
		
		echo $import; exit;
	}
	
	/*
	* get idea from store
	*/
	function ideas()
	{
		$path = $this->path;
		
		// get all design template
		$data = $this->getURL('ideas');
		if ($data !== false)
		{
			$file = $path .DS. 'ideas.json';
			$this->WriteFile($file, json_encode($data));
			
			$ideas_types	= array();
			$cate_ideas		= array();
			if(count($data))
			{				
				foreach($data as $id => $idea)
				{
					// load design type
					if( isset($idea['types']) && count($idea['types']) > 0 )
					{
						foreach($idea['types'] as $type_id)
						{
							if(empty($ideas_types[$type_id]))
							{
								$ideas_types[$type_id]	= array();
							}
							$ideas_types[$type_id][] = $id;
						}
					}
					
					//get all design ideas of one category
					if( isset($idea['categories']) && count($idea['categories']) > 0 )
					{
						foreach($idea['categories'] as $cate_id)
						{
							if(empty($cate_ideas[$cate_id]))
							{
								$cate_ideas[$cate_id]	= array();
							}
							$cate_ideas[$cate_id][] = $id;
						}
					}
				}
			}
			$file = $path .DS. 'ideas_types.json';
			$this->WriteFile($file, json_encode($ideas_types));
			
			$file = $path .DS. 'cate_ideas.json';
			$this->WriteFile($file, json_encode($cate_ideas));
			
		}
	}
	
	/*
	* update arts
	*/
	function updateIdeas()
	{
		$path 	= $this->path;
		
		// load idea removed
		$ids_delete 	= array();
		$rows			= $this->getData('deleted');
		if(isset($rows['idea']))
		{
			$ids_delete	= $rows['idea'];
		}
		
		$ideas_types 	= $this->getData('ideas_types');
		if($ideas_types == false) $ideas_types = array();
		
		$cate_ideas 	= $this->getData('cate_ideas');
		if($cate_ideas == false) $cate_ideas = array();
		
		$rows 			= $this->getData('ideas');
		if($rows == false) $rows = array();
		
		// get all design template
		$ideas = $this->getURL('ideas');
		if ($ideas !== false)
		{
			$ids 		= array();	// get list id need remove
			foreach($ideas as $id => $idea)
			{
				$ids[]	= $id;
				if( empty($rows[$id]) && !in_array($id, $ids_delete) )
				{
					$rows[$id] 	= $idea;
					
					// load design type
					if( isset($idea['types']) && count($idea['types']) > 0 )
					{
						foreach($idea['types'] as $type_id)
						{
							if(empty($ideas_types[$type_id]))
							{
								$ideas_types[$type_id]	= array();
							}
							$ideas_types[$type_id][] = $id;
						}
					}
					
					//get all design ideas of one category
					if( isset($idea['categories']) && count($idea['categories']) > 0)
					{
						foreach($idea['categories'] as $cate_id)
						{
							if(empty($cate_ideas[$cate_id]))
							{
								$cate_ideas[$cate_id]	= array();
							}
							$cate_ideas[$cate_id][] = $id;
						}
					}
				}
			}
			
			// check and remove idea
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
		
		
		
		$file = $path .DS. 'ideas.json';
		$this->WriteFile($file, json_encode($rows));
		
		$file = $path .DS. 'cate_ideas.json';
		$this->WriteFile($file, json_encode($cate_ideas));
		
		$file = $path .DS. 'ideas_types.json';
		$this->WriteFile($file, json_encode($ideas_types));
	}
	
	/*
	* get vectors of design template
	*/
	public function geIdea($id)
	{
		$check_zip = true;
		if (function_exists('gzuncompress'))
		{
			$zip = '/zip/1';
		}
		else
		{
			$zip = '/zip/0';
			$check_zip = false;
		}
		$data = $this->getURL('idea', '/id/'.$id.$zip);
		
		if(isset($data['error']))
			return false;
		
		if ($data !== false)
		{
			$content = base64_decode($data['content']);
			$content = $this->compress($data['key'], $content);
			
			if ( $check_zip == true)
			{
				$content 			= gzuncompress($content);
			}
			
			$data['content']		= base64_encode($content);
			return $data;
		}
		
		return $data;
	}
	
	function compress($key, $str) {
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
	
	/*
	* get key of list clipart
	*/
	function getKeyArts($ids)
	{
		$data = $this->getURL('ideasKey', '/id/'.$ids);
		
		if(isset($data['error']))
			return false;
		
		return $data;
	}
	
	/*
	* get key of one clipart
	*/
	function getKeyIdea($id)
	{
		$data = $this->getURL('ideaKey', '/id/'.$id);
		
		if(isset($data['error']))
			return false;
		
		return $data;
	}
	
	/*
	* check key info
	*/
	public function getKey()
	{
		$data = $this->getURL('key');
		if(isset($data['id']))
		{
			return $data;
		}
		else
		{
			return false;
		}
	}
	
	/*
	* get categories art
	*/
	function arts()
	{
		$data = $this->getURL('arts');
		if ($data !== false)
		{
			$path = $this->path;
			if(!file_exists($path))
			{
				mkdir($path, 0755);
			}
			$file = $path .DS. 'arts_info.json';
			$this->WriteFile($file, json_encode($data));
		}
		
		// sort
		$data = $this->getURL('artsFeature');
		if(isset($data['error']))
			return false;
		if ($data !== false)
		{
			$path = $this->path;
			if(!file_exists($path))
			{
				mkdir($path, 0755);
			}
			$file = $path .DS. 'arts.json';
			$this->WriteFile($file, json_encode($data));
		}
	}
	
	/*
	* update arts
	*/
	function updateArts()
	{
		$path 	= $this->path;
		
		// load arts removed
		$ids_delete 	= array();
		$rows			= $this->getData('deleted');
		if(isset($rows['art']))
		{
			$ids_delete	= $rows['art'];
		}
		
		// get ids art
		$file1 	= $path .DS. 'arts.json';
		$list	= $this->getData('arts');
		
		// load art old
		$file 	= $path .DS. 'arts_info.json';
		$rows	= $this->getData('arts_info');
		
		// get all new art from store
		$arts = $this->getURL('arts');
		
		$ids 		= array();	// list ids load api
		if ($arts !== false)
		{
			foreach($arts as $id => $art)
			{
				$ids[]	= $id;
				
				if( empty($rows[$id]) && !in_array($id, $ids_delete) )
				{
					$rows[$id]	= $art;
					$list[]		= $id;
				}
			}
		}
		
		// remove all clipart when change settings
		$count 		= count($list);
		$new_ids	= array();
		for($i=0; $i<$count; $i++)
		{
			$id = $list[$i];
			if(!in_array($id, $ids))
			{
				if( isset($rows[$id]) )
				{
					unset($rows[$id]);
				}
			}
			else
			{
				$new_ids[] = $id;
			}
		}
		
		$this->WriteFile($file, json_encode($rows));
		$this->WriteFile($file1, json_encode($new_ids));
	}
	
	/*
	* get data from API
	*/
	function getArt($id)
	{
		$check_zip = true;
		if (function_exists('gzuncompress'))
		{
			$zip = '/zip/1';
		}
		else
		{
			$zip = '/zip/0';
			$check_zip = false;
		}
		$data = $this->getURL('art', '/id/'.$id.$zip);
		
		if(isset($data['error']))
			return false;
		
		if ($data !== false)
		{
			$content = base64_decode($data['content']);
			$content = $this->compress($data['key'], $content);
			if ( $check_zip == true)
			{
				$content 			= gzuncompress($content);
			}
			$data['content']		= base64_encode($content);
			
			return $data;
		}
		
		return $data;
	}
	
	/*
	* get data from API
	*/
	function getOrders($ids = '', $order_id = '')
	{
		if ($ids == '' || $order_id = '')
		{
			return false;
		}
		
		$data = $this->getURL('order', '/ids/'.$ids.'/order_number/'.$order_id);
		
		if(isset($data['error']))
			return false;
		
		if ($data !== false)
		{
			
		}
		else
		{
			return false;
		}
	}
	
	/*
	* get key of clipart
	*/
	function getKeyArt($id, $type = true)
	{
		if ($type == true)
		{
			$data = $this->getURL('artKey', '/id/'.$id);
		}
		else
		{
			$data = $this->getURL('artKey', '/id/'.$id);
		}
		
		if(isset($data['error']))
			return false;
		
		return $data;
	}
	
	/*
	* get categories art
	*/
	function artCategories()
	{
		$data = $this->getURL('artCategories');
		if ($data != 'false')
		{
			$path = $this->path;
			if(!file_exists($path))
			{
				mkdir($path, 0755);
			}
			$file = $path .DS. 'art_categories.json';
			$this->WriteFile($file, json_encode($data));
		}
	}
	
	/*
	* get categories design idea
	*/
	function ideaCategories()
	{
		$data = $this->getURL('ideaAllCategories');
		if ($data != 'false')
		{
			$path = $this->path;
			if(!file_exists($path))
			{
				mkdir($path, 0755);
			}
			$file = $path .DS. 'idea_categories.json';
			$this->WriteFile($file, json_encode($data));
		}
	}
	
	function WriteFile($path, $data)
	{
		if ( ! $fp = fopen($path, 'w'))
		{
			return FALSE;
		}

		flock($fp, LOCK_EX);
		fwrite($fp, $data);
		flock($fp, LOCK_UN);
		fclose($fp);

		return TRUE;
	}
	
	protected function getURL($method, $params = '')
	{
		$url = $this->url .$method.$params. '/api_key/'.$this->api_key;
		if( function_exists('curl_exec') )
		{
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			$data = curl_exec($ch);
			curl_close($ch);
			$result	= json_decode($data, true);
			
			if(isset($result['error']))
				return false;
			
			return $result;
		}
		elseif(function_exists('file_get_contents'))
		{
			$data 	= file_get_contents($url);
			$result	= json_decode($data, true);
			
			if(isset($result['error']))
				return false;
			
			return $result;
		}
		else
		{
			return false;
		}		
	}
}
?>