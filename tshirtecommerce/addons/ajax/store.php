<?php
$settings = $dg->getSetting();
if(isset($settings->store))
{
	$store = $settings->store;
	if(isset($store->api) && $store->api != '')
	{
		include_once(ROOT .DS. 'includes' .DS. 'store.php');
		$store 	= new store($settings);

		$clipart_shop = false;
		if(isset($settings->store->your_clipart) && $settings->store->your_clipart == 1)
		{
			$clipart_shop = true;
		}
		
		$view = $_GET['view'];
		switch($view)
		{
			case 'categories': // art categories
				$store->dg 	= $dg;
				$data = $store->getCategories('art', $clipart_shop);
				break;
			
			case 'arts': // list all arts
				if (isset($_GET['start']))
					$start = $_GET['start'];
				else
					$start = 0;
				
				if (isset($_POST['options']))
				{
					$options 	= $_POST['options'];
				}
				else
				{
					$options	= array();
				}
				
				$options['clipart_shop'] = $clipart_shop;

				$store->dg 	= $dg;
				$data = $store->arts($start, $options);
				break;
			
			case 'viewed': // get art
				$data = $store->viewed();
				break;
			
			case 'keyword': // get art
				$store->dg 	= $dg;
				$data = $store->keyword();
				break;
				
			case 'art': // get art
				$id 	= $_GET['id'];
				if ((int) $id > 0)
				{
					$store->dg 	= $dg;
					$data 		= $store->art($id);
				}
				break;
				
			case 'artAdd': // artAdd
				$id 	= $_GET['id'];
				$data	= array();
				if ((int) $id > 0)
				{
					$dg  	= $GLOBALS['dg'];
					$store->dg = $dg;
					$data 	= $store->setView($id);
				}
				break;
				
			case 'search': // artAdd
				$data	= array();
				if (isset($_POST['options']))
				{
					$dg  		= $GLOBALS['dg'];
					$store->dg 	= $dg;
					$data 		= $store->setSearch($_POST['options']);
				}
				break;
				
			case 'ideas': // ideas
				$dg  		= $GLOBALS['dg'];
				$store->dg 	= $dg;
				if(isset($_GET['product_id']))
					$product_id	= $_GET['product_id'];
				else
					$product_id	= 0;
				
				$data 		= $store->getIdeas($product_id);
				if(isset($_POST['options']))
				{
					$data 	= $store->ideas($data, $_POST['options']);
					if(isset($data['rows']) && count($data['rows']) > 0)
					{
						$rows = array();
						foreach($data['rows'] as $row)
						{
							$rows[$row['id']] = $row;
						}
						$data['rows'] = $rows;
					}
				}
				break;
				
			case 'design': // load vectors of design template
				$data			= array();
				if (isset($_GET['id']) && $_GET['id'] > 0)
				{
					$dg  			= $GLOBALS['dg'];
					$store->dg 		= $dg;
					$data 		= $store->getIdea($_GET['id']);
				}
				break;
			case 'viewDesign': //action when client click on design
				$data			= array();
				
				$dg  			= $GLOBALS['dg'];
				$store->dg	 	= $dg;
				
				if (isset($_GET['id']) && (int) $_GET['id'] > 0)
				{
					$id 		= $_GET['id'];
					$store->setView($id, 'ideas');
				}
				
				// set view of each design
				if( isset($_POST['ids']) )
				{
					$ids 	= $_POST['ids'];
					
					foreach($ids as $art_id)
					{
						if((int) $art_id > 0)
							$store->setView($art_id);
					}
					$data 	= $store->getKeyArts($ids);
				}
				break;
			case 'customIdea':
				$file 		= ROOT .DS. 'data' .DS. 'import' .DS. 'designscustomIdea.txt';
				if(file_exists($file))
				{
					$designs 	= json_decode(file_get_contents($file), true);
					if( count($designs) )
					{
						$rows 	= $store->getData('ideas');
						foreach($designs as $id => $design)
						{
							$index 	= (int) $id;
							if( $index > 0 && empty($rows[$index]) )
							{
								$rows[$index] = $design;
							}
						}
						$store_file	= $store->path. 'ideas.json';
						$dg->WriteFile($store_file, json_encode($rows));
					}
					unlink($file);
				}
				break;
			case 'customClipart':
				$file 		= ROOT .DS. 'data' .DS. 'import' .DS. 'designscustomClipart.txt';
				if(file_exists($file))
				{
					$designs 	= json_decode(file_get_contents($file), true);
					if( count($designs) )
					{
						$arts 		= $store->getData('arts');
						$arts_info 	= $store->getData('arts_info');
						foreach($designs as $id => $design)
						{
							$index 	= (int) $id;
							if( $index > 0 && empty($arts_info[$index]) )
							{
								$arts_info[$index] = $design;
								$arts[] = $index;
							}
						}
						$store_file	= $store->path. 'arts.json';
						$dg->WriteFile($store_file, json_encode($arts));

						$store_file	= $store->path. 'arts_info.json';
						$dg->WriteFile($store_file, json_encode($arts_info));
					}
					unlink($file);
				}
				break;
			case 'importStore':
				$file 		= ROOT .DS. 'data' .DS. 'import' .DS. 'designs.txt';
				$new_file 	= ROOT .DS. 'cache' .DS. 'admin' .DS. 'designs.txt';
				$data 	= array('error' => 0);
				if(file_exists($file))
				{
					rename($file, $new_file);
					$cache 	= $dg->cache('admin');
					$designs 	= $cache->get('designs');

					if($designs != null)
					{
						$user_id 	= $_GET['user_id'];
						$users 	= $cache->get($user_id);
						if($users == null)
						{
							$users = array();
						}

						$rows = $store->getData('ideas');

						foreach($designs as $design)
						{
							$design['title'] 		= 'Export design';
							$design['thumb'] 		= $design['image'];
							$design['is_ideas'] 	= 1;

							$users[$design['key']] = $design;
							if(isset($rows[$design['key']])) continue;

							$row = array(
								'id' 			=> $design['key'],
								'user_id' 		=> $user_id,
								'type'		=> 'shop',
								'username'		=> 'admin',
								'slug'		=> 'admin-design',
								'image'		=> $design['image'],
								'thumb'		=> $design['image'],
								'title'		=> 'Export design',
								'description'	=> 'Export design',
								'featured'		=> '0',
								'fonts'		=> '',
								'color'		=> '',
								'tags'		=> '',
								'categories'	=> '',
								'types'		=> '',
							);
							$rows[$design['key']] = $row;
						}

						$file		= $store->path. 'ideas.json';
						$dg->WriteFile($file, json_encode($rows));
						$cache->set($user_id, $users);
					}
					unlink($new_file);
				}
				break;
			case 'createDesign':
				$info 			= $_POST['info'];
				$thumb 			= $_POST['thumb'];
				$user_id 		= $_POST['user_id'];
				$design_id 		= $_POST['design_id'];
				$design_file 	= $_POST['design_file'];
				
				// create thumb
				$temp 		= explode(';base64,', $thumb);
				$buffer		= base64_decode($temp[1]);
				
				$store->dg	 	= $dg;
				$uploaded 		= $store->dg->folder();
				$path			= ROOT .DS. $uploaded;
				$file			= $design_id .'_thumb.png';
				$path_file		= $path .DS. $file;
				$store->dg->WriteFile($path_file, $buffer);
				
				$thumb		= str_replace('\\', '/', $uploaded) .'/'. $file;
				$thumb		= str_replace('//', '/', $thumb);
				
				$url 			= $store->dg->url();
				$url			.= 'tshirtecommerce/';
				
				$tags			= explode(',', $info['tags']);
				
				$design = array(
					'id' 			=> $design_id,
					'user_id' 		=> $user_id,
					'type'		=> 'shop',
					'username'		=> 'admin',
					'slug'		=> '',
					'image'		=> $url . $thumb,
					'thumb'		=> $url . $thumb,
					'title'		=> $info['title'],
					'description'	=> $info['description'],
					'featured'		=> '0',
					'fonts'		=> $_POST['fonts'],
					'color'		=> $_POST['productColor'],
					'tags'		=> $tags,
					'categories'	=> $info['categories'],
					'types'		=> $info['types'],
				);
				if(isset($_POST['thumbs']))
				{
					$design['thumbs'] = $_POST['thumbs'];
				}
				
				$rows = $store->getData('ideas');
				$rows[$design_id] = $design;
				$file	= $store->path. 'ideas.json';
				$store->dg->WriteFile($file, json_encode($rows));
				
				//update types
				$types	= $info['types'];
				if(count($types))
				{
					$rows = $store->getData('ideas_types');
					foreach($types as $type_id)
					{
						if(empty($rows[$type_id]))
							$rows[$type_id] = array();
						
						$rows[$type_id][] = $design_id;
					}
					$file	= $store->path. 'ideas_types.json';
					$store->dg->WriteFile($file, json_encode($rows));
				}
				
				// update categories
				$categories	= $info['categories'];
				if(count($categories))
				{
					$rows = $store->getData('cate_ideas');
					foreach($categories as $cate_id)
					{
						if(empty($rows[$cate_id]))
							$rows[$cate_id] = array();
						
						$rows[$cate_id][] = $design_id;
					}
					$file	= $store->path. 'cate_ideas.json';
					$store->dg->WriteFile($file, json_encode($rows));
				}
				exit;
				break;
		}
		if(empty($data)) $data = array();
		echo json_encode($data);
	}
}
exit;
?>