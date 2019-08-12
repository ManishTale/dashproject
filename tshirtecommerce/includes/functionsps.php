<?php 

if (!defined('ROOT')) exit('No direct script access allowed');

class dgps extends dg
{
	public function saveDesignAdmin()
	{
		$results = array();	
		if ($this->is_session_started() === false) @session_start();
		if (empty($_SESSION['is_admin']) && $_SESSION['is_admin'] === false) {
			$results['error'] = 1;
			$results['login'] = 1;
			$results['msg']	= lang('design_save_login');
			echo json_encode($results);
			exit;
		}		
		
		// check user login
		$is_logged = $_SESSION['is_admin'];
		$user = md5($is_logged['id']);
		$data = json_decode(file_get_contents('php://input'), true);
		
		$uploaded = $this->folder();
		$path = ROOT .DS. $uploaded;
		
		if ($data['isIE'] == 'true') {
			$buffer	= $data['image'];
		} else {
			$temp = explode(';base64,', $data['image']);
			$buffer	= base64_decode($temp[1]);
		}
		
		$design = array();
		if (isset($data['options'])) {
			$design['options'] = $data['options'];	
		}
		
		$design['vectors'] = $data['vectors'];		
		$design['teams'] = $data['teams'];	
		$design['fonts'] = $data['fonts'];
		$designer_id = $data['designer_id'];
		
		// check design and author
		if ($data['design_file'] != '' && $designer_id == $user && $data['design_key'] != '') {
			// override file and update
			$temp = explode('/', $data['design_file']);
			$file = $temp[count($temp) - 1];
			if ($data['isIE'] == 'true') {
				$file = str_replace('.png', '.svg', $file);
			} else {
				$file = str_replace('.svg', '.png', $file);
			}
			
			$path_file = $path . $file;	
			$file = str_replace('\\', '/', $uploaded) .'/'. $file;
			$file = str_replace('//', '/', $file);
			$key = $data['design_key'];
			$design['design_id'] = $key;
		} else {
			
			$key = strtotime("now"). rand();
			if($data['isIE'] == 'true') {
				$file = 'design-' . $key . '.svg';
			} else {
				$file = 'design-' . $key . '.png';
			}
			
			$path_file = $path .DS. $file;
			$file = str_replace('\\', '/', $uploaded) .'/'. $file;
			$file = str_replace('//', '/', $file);
			$design['design_id'] = $key;
		}
		
		
		if (!$this->WriteFile($path_file, $buffer)) {
			$results['error'] = 1;
			$results['msg']	= lang('design_msg_save');
		} else {
			if ($is_logged['login'] == 1) {
				$cache = $this->cache('admin');
			} else {
				$cache = $this->cache();
			}
			$myDesign = $cache->get($user);
			if ($myDesign == null ) {
				$myDesign = array();
			}
			
			if (isset($data['attribute'])) {
				$design['attribute'] = $data['attribute'];
			}
			
			if (isset($data['print_type'])) {
				$design['print_type'] = $data['print_type'];
			}
			
			$design['image'] = $file;
			$design['parent_id'] = $data['parent_id'];
			$design['product_id'] = $data['product_id'];
			$design['product_options'] = $data['product_color'];
			
			$design['cliparts'] = $data['cliparts'];
			$design['colors'] = $data['colors'];
			$design['print'] = $data['print'];
			$design['images'] = $data['images'];
			
			
			// create images of design
			foreach ($design['images'] as $view => $str) {
				$src = '';
				if ($str != '') {
					if ($data['isIE'] == 'true') {
						$buffer		= $str;
						$view_file 	= 'design' .'-'. $view .'-'. $key . '.svg';
					} else {
						$temp 		= explode(';base64,', $str);
						$buffer		= base64_decode($temp[1]);
						$view_file 	= 'design' .'-'. $view .'-'. $key . '.png';
					}
					$path_file	= $path .DS. $view_file;
					$this->WriteFile($path_file, $buffer);
					$view_file	= str_replace('\\', '/', $uploaded) .'/'. $view_file;
					$view_file	= str_replace('//', '/', $view_file);
					$src		= $view_file;
				}
				$design['images'][$view] = $src;
			}
			
			$design['title']  			= $data['title'];
			$design['description']  	= $data['description'];
			
			// save design to cache
			$myDesign[$key]	= $design;
			$cache->set($user, $myDesign);
			
			$results['error'] = 0;
			
			$content = array(
				'user_id'=> $user,
				'design_id'=> $key,
				'design_key'=> $key,
				'designer_id'=> $user,
				'design_file'=> $file,					
			);					
			$results['content'] = $content;	

		}
		
		echo json_encode($results);
		return;
	}

	protected function is_session_started()
	{
	    if (php_sapi_name() !== 'cli') {
	        if (version_compare(phpversion(), '5.4.0', '>=')) {
	            return session_status() === PHP_SESSION_ACTIVE ? true : false;
	        } else {
	            return session_id() === '' ? false : true;
	        }
	    }
	    return false;
	}

	public function getImgage($str)
	{
		$data = str_replace("'", '"', $str);
		$data = json_decode($data);
		if (count($data) > 0) {
			foreach ($data as $vector) {
				if (isset($vector->img) && $vector->img != '') {
					$img = $vector->img;
					return base_url($img);
				}
			}
		}
		return '';
	}
}

?>