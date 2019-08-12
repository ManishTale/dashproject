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

class Controllers
{
	public $params = array();
	public $control;
	public $fun;
	
	public function __construct()
	{
		$uri 	= $_SERVER["REQUEST_URI"];
		$temp 	= explode('&', $uri);
		$uri	= $temp[0];
		
		$str = explode('index.php?/', $uri);
		if (count($str) > 1)
		{
			$params = explode('/', $str[1]);
			if (empty($params[1]))
				$params[1] = 'index';
		}
		else
		{
			$params = array('dashboard', 'index');
		}		
		$this->params	= $params;
	}
	
	// load control
	public function load()
	{
		if ( isset($_GET['session_id']) )
		{
			$session_id = $_GET['session_id'];
			$_COOKIE['designer_session_id'] = $session_id;
			session_id($session_id);			
		}
		else if( isset($_COOKIE['designer_session_id']) )
		{
			session_id($_COOKIE['designer_session_id']);			
		}		
		session_start();

		$params = $this->params;
		
		if (isset($_SESSION['is_admin']))
		{
			
			$user = $_SESSION['is_admin'];			
			if (isset($user['login']) && $user['login'] == 1)
			{
				$this->set_session('login', true);
				$this->set_session('admin', $user);
			}
		}
		else
		{
			$sess = ROOT.'/data/session.txt';
			if(file_exists($sess))
			{
				$ses = @json_decode(file_get_contents($sess), true);
				$_SESSION['is_admin'] = $ses;
				$this->set_session('login', true);
				$this->set_session('admin', $ses);
				unlink($sess);
			}else
			{
				$this->set_session('login', false);
			}
		}
		
		// check login
		if($this->session('login') == false)
		{
			if($params[0] != 'user')
				$params[1] = 'index';
			
			$params[0]	= 'user';
			if (empty($params[1]))
				$params[1] = 'index';
		}		
		

		$control = $params[0];
		
		$file = ROOT .DS. 'controllers' .DS. $control. '.php';
		
		// check control
		if ( !file_exists($file) )
		{
			$this->error();
		}
		
		$this->header_files();

		// load file
		include_once($file);
		
		// check clas
		if (!class_exists($control))
		{
			$this->error();			
		}
		
		$dg = new dg();		
		$lang = $dg->lang();
		$site_url = $dg->url();
		$GLOBALS['lang'] = $lang;
		$GLOBALS['site_url'] = $site_url . 'tshirtecommerce/admin/';		
		
		$controlClass = new $control();
		
		// check function
		if (empty($params[1]))
		{
			$fun = 'index';
		}
		else
		{
			$fun = $params[1];
		}
		
		

		if( !method_exists($controlClass, $fun) )
		{
			$this->error();	
		}
		
		$this->control = $control;
		$this->fun = $fun;
		
		if (isset($params[2]))
		{
			$array = array();
			for($i=2; $i < count($params); $i++)
			{
				$array[] = $params[$i];
			}
			call_user_func_array(array($controlClass, $fun), $array);
		}
		else
		{
			$controlClass->$fun();
		}
	}

	/* load css, js of admin page */
	public function header_files()
	{
		global $header_files;
		/* add file css */
		$header_files['css']['bootstrap'] = array(
			'file' => 'bootstrap.min',
			'exten' => true,
			'url' => 'assets/plugins/bootstrap/css'
		);
		$header_files['css']['awesome'] = array(
			'file' => 'font-awesome.min',
			'exten' => true,
			'url' => 'assets/plugins/font-awesome/css'
		);
		$header_files['css']['style_font'] = array(
			'file' => 'style-icon',
			'exten' => true,
			'url' => 'assets/css'
		);
		$header_files['css']['main'] = array(
			'file' => 'main',
			'url' => 'assets/css'
		);
		$header_files['css']['main-responsive'] = array(
			'file' => 'main-responsive',
			'exten' => true,
			'url' => 'assets/css'
		);
		$header_files['css']['scrollbar'] = array(
			'file' => 'perfect-scrollbar',
			'exten' => true,
			'url' => 'assets/plugins/perfect-scrollbar/src'
		);
		$header_files['css']['theme_light'] = array(
			'file' => 'theme_light',
			'url' => 'assets/css'
		);
		$header_files['css']['jquery-ui'] = array(
			'file' => 'jquery-ui.min',
			'exten' => true,
			'url' => 'assets/plugins/jquery-ui'
		);
		global $header_files;
		$header_files['css']['flaticon'] = array(
			'file' => 'flaticon',
			'exten' => true,
			'url' => 'assets/css'
		);
		$header_files['css']['fancybox'] = array(
			'file' => 'jquery.fancybox',
			'exten' => true,
			'url' => 'assets/plugins/jquery-fancybox'
		);

		$header_files['css']['flaticon_gallery'] = array(
			'file' => 'flaticon_dg',
			'exten' => true,
			'url' => 'assets/css'
		);

		/* load js */
		/*
		$header_files['js']['jquery'] = array(
			'file' => 'jquery.min',
			'exten' => true,
			'url' => 'assets/js'
		);
		*/
		$header_files['js']['query-ui'] = array(
			'file' => 'jquery-ui.min',
			'exten' => true,
			'url' => 'assets/plugins/jquery-ui'
		);
		$header_files['js']['bootstrap'] = array(
			'file' => 'bootstrap.min',
			'exten' => true,
			'url' => 'assets/plugins/bootstrap/js'
		);
		$header_files['js']['mousewheel'] = array(
			'file' => 'jquery.mousewheel',
			'exten' => true,
			'url' => 'assets/plugins/perfect-scrollbar/src'
		);
		$header_files['js']['scrollbar'] = array(
			'file' => 'perfect-scrollbar',
			'exten' => true,
			'url' => 'assets/plugins/perfect-scrollbar/src'
		);
		$header_files['js']['blockUI'] = array(
			'file' => 'jquery.blockUI',
			'exten' => true,
			'url' => 'assets/plugins/blockUI'
		);
		$header_files['js']['main'] = array(
			'file' => 'main',
			'exten' => true,
			'url' => 'assets/js'
		);
		$header_files['js']['validate'] = array(
			'file' => 'validate',
			'exten' => true,
			'url' => 'assets/plugins/validate'
		);
		$header_files['js']['bootstrap-modal'] = array(
			'file' => 'bootstrap-modal',
			'exten' => true,
			'url' => 'assets/plugins/bootstrap-modal/js'
		);
		$header_files['js']['bootstrap-modalmanager'] = array(
			'file' => 'bootstrap-modalmanager',
			'exten' => true,
			'url' => 'assets/plugins/bootstrap-modal/js'
		);
		$header_files['js']['ui-modals'] = array(
			'file' => 'ui-modals',
			'exten' => true,
			'url' => 'assets/js'
		);
		$header_files['js']['jscolor'] = array(
			'file' => 'jscolor',
			'exten' => true,
			'url' => 'assets/js'
		);
		$header_files['js']['fancybox'] = array(
			'file' => 'jquery.fancybox',
			'exten' => true,
			'url' => 'assets/plugins/jquery-fancybox'
		);
		$header_files['js']['dg-function'] = array(
			'file' => 'dg-function',
			'url' => 'assets/js',
		);
	}
	
	public function view($view, $data)
	{
		// call language
		$segments = $this->params;
		
		// call language
		$dg = new dg();		
		$lang = $dg->lang();
		$site_url = $dg->url();
		$GLOBALS['lang'] = $lang;
		$GLOBALS['site_url'] = $site_url . '/tshirtecommerce/admin/';
		
		ob_start();
		if(!function_exists('addons'))
		{
			include_once(ROOT .DS. 'includes' .DS. 'addons.php');
			$addons = new addons();	
		}
		
		if (file_exists(ROOT .DS. 'theme' .DS. $view .'_ex.php'))
		{
			require_once(ROOT .DS. 'theme' .DS. $view .'_ex.php');
		}
		elseif (file_exists(ROOT .DS. 'theme' .DS. $view .'.php'))
		{
			require_once(ROOT .DS. 'theme' .DS. $view .'.php');
		}
		elseif(file_exists(ROOT .DS. 'views' .DS. $view .'.php'))
		{
			require_once(ROOT .DS. 'views' .DS. $view .'.php');
		}
		else
		{
			echo 'View not found';
		}
		$content = ob_get_contents();
		ob_end_clean();
		
		if (empty($data['title']))
			$title = 'T-Shirt eCommerce';
		else
			$title = $data['title'];
		
		if (empty($data['sub_title']))
			$sub_title = '';
		else
			$sub_title = $data['sub_title'];

		require_once(ROOT .DS. 'layout.php');
	}
	
	public function modal($view, $data)
	{
		// call language
		$segments = $this->params;
		
		// call language
		$dg 		= new dg();		
		$lang 		= $dg->lang();
		$site_url 	= $dg->url();
		$GLOBALS['lang'] = $lang;
		$GLOBALS['site_url'] = $site_url . '/tshirtecommerce/admin/';
		
		// call add-ons
		include (ROOT .DS. 'includes' .DS. 'addons.php');
		$addons = new addons();	
		
		if (file_exists(ROOT .DS. 'theme' .DS. $view .'_ex.php'))
		{
			require_once(ROOT .DS. 'theme' .DS. $view .'_ex.php');		
		}
		elseif (file_exists(ROOT .DS. 'theme' .DS. $view .'.php'))
		{
			require_once(ROOT .DS. 'theme' .DS. $view .'.php');		
		}
		elseif(file_exists(ROOT .DS. 'views' .DS. $view .'.php'))
		{
			require_once(ROOT .DS. 'views' .DS. $view .'.php');	
		}
		else
		{
			echo 'View not found';
		}
	}
	
	public function lightbox($view, $data)
	{
		// call language
		$segments = $this->params;
		
		// call language
		$dg 		= new dg();		
		$lang 		= $dg->lang();
		$site_url 	= $dg->url();
		$GLOBALS['lang'] = $lang;
		$GLOBALS['site_url'] = $site_url . '/tshirtecommerce/admin/';
		
		// call add-ons
		ob_start();
		
		include (ROOT .DS. 'includes' .DS. 'addons.php');
		$addons = new addons();	
		
		if (file_exists(ROOT .DS. 'theme' .DS. $view .'_ex.php'))
		{
			require_once(ROOT .DS. 'theme' .DS. $view .'_ex.php');		
		}
		elseif (file_exists(ROOT .DS. 'theme' .DS. $view .'.php'))
		{
			require_once(ROOT .DS. 'theme' .DS. $view .'.php');		
		}
		elseif(file_exists(ROOT .DS. 'views' .DS. $view .'.php'))
		{
			require_once(ROOT .DS. 'views' .DS. $view .'.php');	
		}
		else
		{
			echo 'View not found';
		}
		
		$content = ob_get_contents();
		ob_end_clean();
		
		require_once(ROOT .DS. 'lightbox.php');
	}
	
	// load 404
	private function error()
	{
		include_once (ROOT .DS. '404.php');
		exit();
	}
	
	public function set_session($name, $val)
	{
		$_SESSION[$name] = $val;
	}
	
	public function session($name)
	{
		if(isset($_SESSION[$name]))
		{
			return $_SESSION[$name];
		}
		else
		{
			return false;
		}
	}
	
	public function unset_session($name)
	{
		if(isset($_SESSION[$name]))
			unset($_SESSION[$name]);
	}
}
?>
