<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-01-10
 * 
 * ajax
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
error_reporting(0);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

define('ROOT', dirname(__FILE__));
define('DS', DIRECTORY_SEPARATOR);
if( file_exists(ROOT .DS. 'admin' .DS. 'session.php') )
{
	include_once ROOT .DS. 'admin' .DS. 'session.php';
}
if(!session_id())
	session_start();
date_default_timezone_set('America/Los_Angeles');

if ( isset($_GET['type']) )
{
	$type = $_GET['type'];
}
else
{
	$type = '';
}

require_once ROOT .DS. 'includes' .DS. 'functions.php';
$dg = new dg();
$lang = $dg->lang();

include_once(ROOT .DS. 'includes' .DS. 'addons.php');					
$addons 	= new addons();

switch($type){
	case 'upload':
		
		require_once ROOT .DS. 'includes' .DS. 'upload.php';
		$data = array();
		$data['status'] = 0;
		if (!empty($_FILES['myfile']))
		{			
			$root		= $dg->folder();
			
			$uploader   =   new Uploader();
			$uploader->setDir(ROOT .DS. $root);
			
			$types = array('jpg','jpeg','png','gif');
			
			$params = array(
				'types' => $types
			);
			$addons->view('hooks' .DS. 'upload_extension', $params);
			
			$uploader->setExtensions($types);
			$uploader->setMaxSize(100);
			$uploader->sameName(false);
			
			if($uploader->uploadFile('myfile'))
			{
				$params = array(
					'uploader' => $uploader
				);
				$addons->view('hooks' .DS. 'uploaded', $params);
				
				$data['status'] 	= 1;
				$image  		= $uploader->getUploadName();
				$data['src'] 	= $root .'/'. $image;
				$data['src']	= str_replace(DS, '/', $data['src']);
				
				$size 		= $uploader->getSize();
				
				$data['item'] 	= array(
					'title'=> $image,
					'url'=> $data['src'],
					'file_name'=> $image,
					'thumb'=> $data['src'],
					'file_type'=> 'image',
					'size'=> $size
				);

				$user_files = array();
				if( isset($_COOKIE['user_files']) )
				{
					$user_files = $_COOKIE['user_files'];
					$user_files = json_decode($user_files, true);
				}
				$user_files[md5($data['src'])] = $data['item'];
				setcookie('user_files', json_encode($user_files), time() + (86400 * 20));
				
				$params = array(
					'data' => $data
				);
				$addons->view('hooks' .DS. 'upload_output', $params);
			}
			else
			{
				$data['status'] = 0;
				$data['msg'] 	= $uploader->getMessage(); //get upload error message 
			}			

		}
		echo json_encode($data); exit;
		break;
		
	case 'userfile':
		$data 		= array();
		$data['status'] 	= 0;
		$data['msg']	= lang('design_msg_save_found', true);
		if( isset($_GET['file']) && isset($_COOKIE['user_files']) )
		{
			$key 		= $_GET['file'];
			$user_files = $_COOKIE['user_files'];
			$user_files = json_decode($user_files, true);
			if(isset($user_files[$key]))
			{
				$data['item'] 	= $user_files[$key];
				$data['status'] 	= 1;
				$data['msg']	= '';
			}
		}
		echo json_encode($data);
		exit();
		break;
	case 'uploadIE':
		$data 		= $_POST['myfile'];
		$temp 		= explode(';base64,', $data);
		$buffer		= base64_decode($temp[1]);
		
		$root		= $dg->folder();
		$file 		= strtotime("now") . '.png';
		$path_file	= ROOT .DS. $root . $file;
		
		$data = array();
		$data['status'] = 0;
		if ( ! $dg->WriteFile($path_file, $buffer))
		{
			$data['status'] = 0;
			$data['msg']	= 'Can not upload file. Please try again.';
		}
		else
		{
			$src = str_replace('\\', '/', $root . $file);			
			$data['status'] = 1;			
			$data['src'] =$src;
			
			$data['src']	= str_replace(DS, '/', $data['src']);
			
			$data['item'] = array(
				'title'=> $file,
				'url'=> $data['src'],
				'file_name'=> $file,
				'thumb'=> $data['src'],
				'file_type'=> 'image'
			);
		}
		echo json_encode($data); exit;
		break;
		
	case 'qrcode':
		$text = $_GET['text'];		
		$file = $dg->qrcode($text);
		echo $file;
		break;
		
	case 'user':
		$email 		= $_POST['email'];
		$password 	= $_POST['password'];
		$id = md5($email.$password);
		setcookie('design', $id, time() + (86400 * 100) );
		echo $id; exit;
		break;
	
	// save design
	case 'saveDesign':
		$dg->saveDesign();
		break;
	
	// remove design
	case 'removeDesign':
		if (empty($_SESSION['is_logged']) && $_SESSION['is_logged'] === false)
		{
			echo 'Please login!';
			exit;
		}
		
		$is_logged 	= $_SESSION['is_logged'];
		$user 		= md5($is_logged['id']);
		$id = $_GET['id'];
		$ids = explode(':', $id);
		if (count($ids) == 2)
		{
			if ( $user == $ids[0] )
			{
				if ($is_logged['is_admin'] === true)
				{
					$cache = $dg->cache('admin');
				}
				else
				{
					$cache = $dg->cache();
				}
				$designs = $cache->get($user);
				unset($designs[$ids[1]]);
				$cache->set($user, $designs);
				$cache->delete($ids[1]);
			}
		}
		break;

	// load design
	case 'userDesign':
		
		if (empty($_SESSION['is_logged']) && $_SESSION['is_logged'] === false)
		{
			echo 'Please login';
			exit;
		}
		$is_logged 	= $_SESSION['is_logged'];
		$user_id 	= md5($is_logged['id']);
		
		// get old data
		if (isset($_COOKIE['design']))
		{
			$user 	= $_COOKIE['design'];
			$cache 	= $dg->cache();
			$designs 	= $cache->get($user);
			if ($designs != null && count($designs) > 0)
			{				
				// move data
				if ($is_logged['is_admin'] === true)
				{
					$cache = $dg->cache('admin');
				}
				else
				{
					$cache = $dg->cache();
				}
				$cache->set($user_id, $designs);
				setcookie('design', $user, time() - (86400 * 100), "/");
			}
		}
		$user = $user_id;
		
		// get all design
		if (isset($is_logged['is_admin']) && $is_logged['is_admin'] === true)
		{			
			$cache = $dg->cache('admin');
		}
		else
		{
			$cache = $dg->cache();
		}
		$designs = $cache->get($user_id);
					
		$baseURL = $_POST['url'];
		if (strpos($baseURL, '?') > 0)
		{
			$url = '&design=';
		}
		else
		{
			$url = '?design=';
		}		
		
		if ($designs == null || count($designs) == 0)
		{
			echo lang('design_msg_save_found', true);
			return;
		}
		else
		{	
			$designs = array_reverse($designs, true);
			// get page
			if ($_POST['datas'])
			{
				$datas = $_POST['datas'];
				if (isset($datas['page']))
					$page = $datas['page'];
			}
			if (empty($page))
				$page = 0;
			
			$html = '';
			$i = 0;
			$number = 9;
			foreach($designs as $key => $design)
			{
				if(isset($design['is_ideas'])) continue;
				$i++;
				if ($i <= ($number * $page)) continue;
				if ($i > ($number * ($page+1))) break;
				
				$link = $url.$user.':'.$key.':'.$design['product_id'].':'.$design['product_options'].':'.$design['parent_id'].'&parent_id='.$design['parent_id'];				
				$html .= '<div class="col-xs-6 col-sm-4 col-md-3 design-box">'
						. 	'<a href="'.$link.'" title="'.lang('design_load', true).'">'
						.		'<img src="'.$design['image'].'" class="img-responsive img-thumbnail" alt="">';
				if ($design['title'] != '')
				{
					$html 	.= '<span title="'.$design['description'].'" class="text-muted"><small>'.$design['title'].'</small></span>';
				}
				
				$html 	.=	'</a>'
						.	'<span class="design-action design-action-remove" onclick="design.ajax.removeDesign(this)" data-id="'.$user.':'.$key.'" title="Remove this design"><i class="red glyphicons remove_2"></i></span>'
						. '</div>';
			}
			echo $html;
		}
		break;
	
	// load design idea
	case 'loadDesign':
		if (isset($_GET['user_id']))
			$user_id 	= $_GET['user_id'];
		else
			$user_id = '';
		
		if (isset($_GET['design_id']))		
			$design_id 	= $_GET['design_id'];
		else
			$design_id = '';
		
		$result	= array();
		$result['error'] 		= 0;
		if ($user_id == '' || $design_id == '')
		{
			$result['error'] 	= 1;
			$result['msg'] 		= lang('design_msg_save_found', true);
		}
		else
		{							
			if ($result['error'] == 0)
			{	
				if ($user_id == 'cart')
				{
					$cache 			= $dg->cache('cart');
					$cart_design 	= $cache->get($design_id);
					if ($cart_design != null)
					{
						$designs				= array();
						$designs[$design_id]	= $cart_design;
					}
					else
					{
						$designs = null;
					}
				}
				else
				{
					$cache = $dg->cache();
					$designs = $cache->get($user_id);
				}
				if ($designs == null || empty ($designs[$design_id]))
				{
					$cache = $dg->cache('admin');
					$designs = $cache->get($user_id);
				}
							
				
				if ($designs == null || empty ($designs[$design_id]))
				{
					$result['error'] 	= 1;
					$result['msg'] 		= lang('design_msg_save_found');
				}
				else
				{
					$designs[$design_id]['user_id'] 	= $user_id;
					$designs[$design_id]['design_id'] 	= $design_id;
					$designs[$design_id]['id'] 		= $design_id;
					if(empty($designs[$design_id]['vectors']))
					{
						$detail 			= $cache->get($design_id);
						if($detail != null)
						{
							$designs[$design_id] 	= array_merge($detail, $designs[$design_id]);
						}
					}
					$result['design'] 			= $designs[$design_id];
					$result['msg'] 				= '';
				}
			}
			else
			{
				$result['error'] 	= 1;
				$result['msg'] 		= lang('design_msg_save_found');
			}
		}
		
		echo json_encode($result);
		exit;
		break;
		
	// load design of add to cart
	case 'cartDesign':
		if (isset($_GET['cart_id']))
			$cart_id 	= $_GET['cart_id'];
		else
			$cart_id = '';
				
		$result	= array();
		$result['error'] 		= 0;
		if ($cart_id == '')
		{
			$result['error'] 	= 1;
			$result['msg'] 		= lang('design_msg_save_found', true);
		}
		else
		{							
			if ($result['error'] == 0)
			{				
				$cache 	= $dg->cache('cart');
				$design = $cache->get($cart_id);
				
				if ($design == null)
				{
					$result['error'] 	= 1;
					$result['msg'] 		= lang('design_msg_save_found');
				}
				else
				{
					$result['design'] 	= $design;
					$result['msg'] 		= '';
				}
			}
			else
			{
				$result['error'] 	= 1;
				$result['msg'] 		= lang('design_msg_save_found');
			}
		}
		
		echo json_encode($result);
		exit;
		break;
		
	case 'cateArts':
		$dg->categoriestree(false);
		break;
	case 'arts':
		$file = ROOT .DS. 'data' .DS. 'arts.json';
		$arts = array('count'=>0, 'arts'=>array());
		if (file_exists($file))
		{
			$str 			= file_get_contents($file);
			$rows 		= json_decode($str);
			if ($rows->count > 0)
			{
				$arts['count']  	= $rows->count;
				$arts['arts']	= array_reverse($rows->arts);
			}
		}
		if( isset($_POST['clipart_cate']) && count($_POST['clipart_cate']) > 0 )
		{
			$clipart_cate = $_POST['clipart_cate'];
			if( count($arts['arts']) )
			{
				$array = array();
				foreach ($arts['arts'] as $i => $art) {
					if( in_array($art->cate_id, $clipart_cate) )
					{
						$array[] = $art;
					}
				}
				$arts['arts'] = $array;
				$arts['count'] = count($array);
			}
			
		}
		echo json_encode($arts);
		break;
		
	case 'prices':
		$data = file_get_contents('php://input');
		$data = json_decode($data, true);
		$prices = $dg->prices($data);
		echo json_encode($prices);
		exit;
		break;
		
	case 'svg':
		$data = $_POST;
		$svg = $dg->getSVG($data);
		echo json_encode($svg);
		exit;
		break;
	
	case 'addCart':
		header('Content-Type: text/html; charset=UTF-8');
		$data = file_get_contents('php://input');
		$data = json_decode($data, true);
		$content = $dg->addCart($data);
		echo json_encode($content);
		exit;
		break;
	case 'fonts':
		$file = ROOT .DS. 'data' .DS. 'fonts.json';
		$fonts = array('status'=>1, 'fonts'=>array());
		if (file_exists($file))
		{
			$str 		= @file_get_contents($file);
			$rows 		= json_decode($str, true);
			
			if (empty($rows['fonts']))
				$rows['fonts'] = array();
			
			if(isset($_POST['product_id']) && $_POST['product_id'] > 0 && count($rows['fonts']['fonts']) > 0)
			{
				$product_id 	= $_POST['product_id']; 
				$products 		= $dg->getProducts();
				$product		= array();
				for($i=0; $i < count($products); $i++)
				{
					if ($product_id == $products[$i]->id)
					{
						$product = $products[$i];
						break;
					}
				}
				if(isset($product->fonts) && count($product->fonts))
				{
					$fonts_active = $product->fonts;
					foreach($rows['fonts']['fonts'] as $j => $font)
					{
						if(isset($fonts_active) && count($fonts_active))
						{
							$font_id = $rows['fonts']['fonts'][$j]['id'];
							if(!in_array($font_id, $fonts_active))
							{
								unset($rows['fonts']['fonts'][$j]);
							}
						}
					}
				}
			}
			
			if (empty($rows['fonts']['categories']))
			{
				$file = ROOT .DS. 'admin' .DS. 'data' .DS. 'font_categories.json';
				if (file_exists($file))
				{
					$str 							= @file_get_contents($file);
					$categories 					= json_decode($str, true);
					$rows['fonts']['categories']	= array();
					$rows['fonts']['cateFonts']		= array();
										
					for($i=0; $i< count($categories); $i++)
					{
						$category = array(
							'cate_id' => $i,
							'title' => $categories[$i],
							'id' => $i,
							'type' => 'google',
						);
						$rows['fonts']['categories'][] 				= $category;
						
						$rows['fonts']['cateFonts'][$i] 			= array();
						$rows['fonts']['cateFonts'][$i]['fonts'] 	= array();
						for($j=0; $j<count($rows['fonts']['fonts']); $j++)
						{
							$font = $rows['fonts']['fonts'][$j];
							if ($i == $font['cate_id'])
							{
								$rows['fonts']['cateFonts'][$i]['fonts'][] = $font;
							}
						}
					}
					
					$fonts = $rows;
				}
			}
			else
			{
				$res = array();
				$res['status'] = $rows['status'];
				if(count($rows['fonts']['fonts']) > 0)
				{
					foreach($rows['fonts']['fonts'] as $i => $font)
					{			
						if($rows['fonts']['fonts'][$i]['published'] == 1)
							$res['fonts']['fonts'][] = $rows['fonts']['fonts'][$i];
						else
							$rows['fonts']['google_fonts'] = str_replace(str_replace(' ', '+', $rows['fonts']['fonts'][$i]['subtitle']), '', $rows['fonts']['google_fonts']);
					}
				}
				$res['fonts']['google_fonts'] =  str_replace('||', '|', $rows['fonts']['google_fonts']);
				$res['fonts']['cateFonts'] = $rows['fonts']['cateFonts'];
				$res['fonts']['categories'] = $rows['fonts']['categories'];
				$fonts = $res;
			}
		}
		echo json_encode($fonts);
		break;		
	case 'categories':
		$data = array(
			'error' => 0,
			'categories' => ''
		);
		
		$file = ROOT .DS. 'data' .DS. 'categories.json';
		if (file_exists($file))
		{
			$content 	= file_get_contents($file);
			if ($content != false)
			{
				$array 		= json_decode($content);
				$category 	= array();
				
				if (empty($_POST['parent_id']))
					$parent_id = 0;
				else
					$parent_id = $_POST['parent_id'];
				
				for($i=0; $i<count($array); $i++)
				{
					if ($parent_id == $array[$i]->parent_id)
					{
						$category[] = $array[$i];
					}
				}
				$data = array(
					'error' => 0,
					'categories' => $category
				);
			}
		}
		
		echo json_encode($data); exit;
		break;

	case 'addon':
		if ( isset($_GET['task']) )
		{
			$task 	= $_GET['task'];
			
			$file 	= ROOT .DS. 'addons' .DS. 'ajax' .DS. $task.'.php';
			if ( file_exists($file) )
			{
				include_once($file);
			}
		}
		break;
	case 'iframeupload':
		echo json_encode($_FILES); exit;
		break;
	
	case 'colors':
		$content = array('status'=>1, 'colors'=>array());
		$file = ROOT .DS. 'data' .DS. 'colors.json';
		if (file_exists($file))
		{
			$data = file_get_contents($file);
			$content = json_decode($data);
			if(isset($content->colors) && count($content->colors))
			{
				$res = array('status'=>1, 'colors'=>array());
				foreach($content->colors as $val)
				{
					if((isset($val->published) && $val->published == 1) || !isset($val->published))
						$res['colors'][] = $val;
				}
				$content = $res;
			}
		}
		
		echo json_encode($content);
		break;
		
	case 'loadaddonjs':
		include_once ROOT .DS. 'includes' .DS. 'addons.php';
		$addons 	= new addons();
		$admin 	= false;
		$jss 		= '';
		if ( isset($_GET['admin']) )
			$admin = $_GET['admin'];
		
		if ($admin == true)
		{
			$path 	= ROOT .DS. 'addons' .DS. 'admin-js' .DS;
		}
		else
		{
			$path 	= ROOT .DS. 'addons' .DS. 'js' .DS;
		}
		
		$files 		= $dg->getFiles($path, '.js');
		if ($files === false) exit;
		foreach($files as $key=>$val)
		{
			if($val == 'addons.min.js') continue;

			$jss 	.= $dg->readFile($path . $val). PHP_EOL;
		}
		$jss 	= $dg->minify($jss, 'js');
		$dg->WriteFile($path . 'addons.min.js', $jss);

		header('Content-Type: application/javascript');
		echo $jss;
		exit;
		break;
		
	case 'loadaddoncss':
		ob_start();
		include_once ROOT .DS. 'includes' .DS. 'addons.php';
		$addons = new addons();
		$admin = false;
		if ( isset($_GET['admin']) )
			$admin = $_GET['admin'];
		if ($admin == true)
		{
			$path 	= ROOT .DS. 'addons' .DS. 'admin' .DS. 'css' .DS;
		}
		else
		{
			$path 	= ROOT .DS. 'addons' .DS. 'css' .DS;
		}
		
		$files 		= $dg->getFiles($path, '.css');
		if ($files === false) return;
		
		$csss 		= '';
		for($i=0; $i<count($files); $i++)
		{
			if($files[$i] == 'addons.min.css') continue;
			$csss .= $dg->readFile(ROOT .DS. 'addons' .DS. 'css' .DS. $files[$i]). PHP_EOL;
		}
		$csss 	= $dg->minify($csss, 'css');
		$dg->WriteFile(ROOT .DS. 'addons' .DS. 'css' .DS. 'addons.min.css', $csss);
		header("Content-type: text/css");
		echo $csss;
		exit;
		break;
		
	default:
		break;
}