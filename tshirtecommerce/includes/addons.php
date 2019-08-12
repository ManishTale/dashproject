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

// load all addon
class addons extends dg{
	
	public $base_url	= '';
	public $lang 	= array();
	public $is_mobile	= false;
	
	public function __construct($url = '')
	{
		if ($url == '')
		{
			$this->base_url = $this->url();
		}
		else
		{
			$this->base_url = $url;
		}
		$this->base_url .= 'tshirtecommerce/';
		
		// get language default
		$langcode = '';
		$file_lang = ROOT .DS. 'data' .DS. 'languages.json';
		if (isset($GLOBALS['lang_active']))
		{
			$langcode = $GLOBALS['lang_active'];
		}
		else
		{
			if (file_exists($file_lang))
			{		
				$languages = json_decode(file_get_contents($file_lang));
				if (count($languages))
				{
					foreach($languages as $language)
					{
						if (isset($language->default) && $language->default == 1)
						{
							if (file_exists(ROOT .DS. 'data' .DS. $language->file))
							{
								$langcode = $language->code;
							}
						}
					}
				}
			}
		}
		
		// get language
		$path 		= ROOT .DS. 'addons' .DS. 'language' .DS;
		$files 		= $this->getFiles($path, '.ini');
		if ($files != false)
		{
			if ($langcode != '')
			{
				for($i=0; $i<count($files); $i++)
				{
					$file = $path . $langcode .DS. $files[$i];
					if (file_exists($file))
					{
						$lang = parse_ini_file($file);
						if ($lang === false || $lang == null)
						{
							$content 	= file_get_contents($file);
							$lang 		= parse_ini_string($content);
						}
					}
					else
					{
						$lang = parse_ini_file($path . $files[$i]);
						if ($lang === false || $lang == null)
						{
							$content 	= file_get_contents($path . $files[$i]);
							$lang 		= parse_ini_string($content);
						}
					}
					
					$this->lang = array_merge($this->lang, $lang);
				}
			}
			else
			{
				for($i=0; $i<count($files); $i++)
				{
					$lang = parse_ini_file($path . $files[$i]);
					if ($lang === false || $lang == null)
					{
						$content 	= file_get_contents($path . $files[$i]);
						$lang 		= parse_ini_string($content);
					}
					
					$this->lang = array_merge($this->lang, $lang);
				}
			}				
		}
	}
	
	public function __($text, $js = false)
	{
		$txt = '';
		if (isset($this->lang[$text]))
		{
			$txt = $this->lang[$text];
			if($js === false)
			{
				$txt = str_replace("\\'", "&#39;", $txt);
			}
		}
		
		return $txt;
	}
	
	// load css
	public function css($all_files, $admin = false)
	{
		require_once ROOT .DS. 'includes' .DS. 'functions.php';
		$dg 		= new dg();
		$adminurl 	= '';
		
		if ($admin == true)
		{
			$url 		= 'addons/admin/css/';
			$path 		= ROOT .DS. 'addons' .DS. 'admin' .DS. 'css' .DS;
			$adminurl 	= '&admin=1';
		}
		else
		{
			$url 		= 'addons/css/';
			$path 		= ROOT .DS. 'addons' .DS. 'css' .DS;
		}
		$files 		= $this->getFiles($path, '.css');
		if ($files !== false)
		{
			for($i=0; $i<count($files); $i++)
			{
				if($files[$i] == 'addons.min.css') continue;
				$all_files[] 	= $url.$files[$i];
			}
		}
		
		return $all_files;
	}
	
	// load js
	public function js($admin = false, $all_files = array())
	{
		require_once ROOT .DS. 'includes' .DS. 'functions.php';
		$dg 		= new dg();
		
		if ($admin == true)
		{
			$url 	= 'addons/admin-js/';
			$path 	= ROOT .DS. 'addons' .DS. 'admin-js' .DS;
		}
		else
		{
			$url 			= 'addons/js/';
			$path 			= ROOT .DS. 'addons' .DS. 'js' .DS;
		}
		$files 			= $this->getFiles($path, '.js');
		if ($files !== false)
		{
			for($i=0; $i<count($files); $i++)
			{
				if($files[$i] == 'addons.min.js') continue;
				$all_files[] = $url.$files[$i];
			}
		}
		
		return $all_files;
	}
	
	// load text editer option
	public function text()
	{
		$path 		= ROOT .DS. 'addons' .DS. 'text' .DS;
		if (file_exists($path))
		{
			$files 		= $this->getFiles($path, '.php');
			if ($files === false) return;
			for($i=0; $i<count($files); $i++)
			{
				include_once($path . $files[$i]);
			}
		}
	}
	
	// load view add-one
	public function view($type = '', $params = array(), $subview = '')
	{
		if ($subview != '')
		{
			$type	= $type .DS. $subview;
		}		
		
		$path 		= ROOT .DS. 'addons' .DS. $type .DS;
		$files 		= $this->getFiles($path, '.php');
		if ($files === false) return;
		
		if($this->is_mobile == true)
		{
			for($i=0; $i<count($files); $i++)
			{				
				if(file_exists($path . 'mobile' .DS. $files[$i]))
				{
					include_once($path . 'mobile' .DS. $files[$i]);
				}
				else
				{
					include_once($path . $files[$i]);
				}
			}	
		}
		else
		{
			$theme = '';
			if(isset($this->theme_active) && $this->theme_active != '')
			{
				$theme = $this->theme_active .DS;
				for($i=0; $i<count($files); $i++)
				{
					if( file_exists($path . $theme . $files[$i] ) )
					{
						include_once($path . $theme . $files[$i]);
					}
					else
					{
						include_once($path . $files[$i]);
					}
				}
			}
			else
			{
				for($i=0; $i<count($files); $i++)
				{
					include_once($path . $files[$i]);
				}
			}
		}
	}
	
	// Update for printing type.
	public function printing($data)
	{
		$file 			= ROOT .DS. 'data' .DS. 'printings.json';
		if ( file_exists($file) )
		{
			$content 	= file_get_contents($file);			
			if ($content != false && $content != '')
			{
				$printings = json_decode($content);				
				if ( count($printings) )
				{
					foreach ($printings as $printing)
					{
						if ( isset ($printing->price_type) && $printing->price_type != '' )
						{
							$code_type	= ROOT .DS. 'addons' .DS. 'printings' .DS. $printing->price_type.'.json';
							
							if ( file_exists ($code_type) && isset($printing->printing_code) && $printing->printing_code != '')
							{
								$data[$printing->printing_code] = $printing->title;
							}
						}
					}
				}
			}
		}		
		return $data;
	}

	// Update for printing type.
	public function getPrintings()
	{
		$file = ROOT .DS. 'data' .DS. 'printings.json';
		$data = array();
		if ( file_exists($file) )
		{
			$content 	= file_get_contents($file);			
			if ($content != false && $content != '')
			{
				$printings = json_decode($content);				
				if ( count($printings) )
				{
					foreach ($printings as $printing)
					{
						if ( isset ($printing->price_type) && $printing->price_type != '' )
						{
							$code_type	= ROOT .DS. 'addons' .DS. 'printings' .DS. $printing->price_type.'.json';
							
							if ( file_exists ($code_type) && isset($printing->printing_code) && $printing->printing_code != '')
							{
								$data[$printing->printing_code] = array(
									'title' => $printing->title,
									'short_description' => $printing->short_description,
									'description' => $printing->description,
								);
							}
						}
					}
				}
			}
		}		
		return $data;
	}
}

?>