<?php
/*
 * @author tshirtecommerce - www.tshirtecommerce.com
 * Remove cache
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
*/

if ( ! defined('ROOT') ) exit('No direct script access allowed');

class cache extends Controllers
{
	public function index()
	{
		/* remove file js, css */
		$this->_js();
		$this->_css();
		$dg = new dg();
		$dg->redirect('index.php');
	}

	public function create()
	{
		$admin 	= 1;
		$type 	= 'css';
		if( isset($_POST['admin']) )
			$admin 	= $_POST['admin'];

		if( isset($_POST['type']) )
			$type 	= strtolower($_POST['type']);

		if($admin == 1)
			$path 	= ROOT .DS;
		else
			$path 	= dirname(ROOT) .DS;
		if($type != 'css')
		{
			$type = 'js';
		}

		$file_exten 		= '';
		if(isset($_POST['extra']))
		{
			$file_exten 	= $_POST['extra'];
		}
		$this->file_exten 	= $file_exten;

		$file_cache 	= $path . 'assets' .DS. $type .DS. 'cache_all_files'.$file_exten.'.'.$type;
		if(file_exists($file_cache))
		{
			echo 'done'.$type;
			exit;
		}

		$key 		= 'caches_file_'.$file_exten.$type.$admin;
		if( isset($_POST['files']) && empty($_SESSION[$key]))
		{
			$files 			= $_POST['files'];
			$_SESSION[$key] = $files;
		}

		if( isset($_SESSION[$key]) )
		{
			$files 	= $_SESSION[$key];
			if(count($files))
			{
				foreach ($files as $i => $url)
				{
					$file_working = $this->_minify($url, $admin, $type);
					unset($files[$i]);
					break;
				}
				if(count($files))
				{
					$_SESSION[$key] = $files;
					echo 'load';
					exit;
				}
				else
				{
					if(isset($file_working) && file_exists($file_working))
					{
						rename($file_working, $file_cache);
					}
					unset($_SESSION[$key]);
					echo 'done'.$type;
					exit;
				}
			}
		}
		else
		{
			echo 'done'.$type;
		}
		exit;
	}

	function _minify($url, $admin = 1, $type = 'css')
	{
		if($admin)
			$path 	= ROOT .DS;
		else
			$path 	= dirname(ROOT) .DS;

		$file 		= dirname(ROOT) .DS. str_replace('/', DS, $url);
		$file_cache = $path . 'assets' .DS. $type .DS. 'cache_all_working'.$this->file_exten.'.'.$type;

		if(file_exists($file))
		{
			$dg 		= new dg();
			$myfile 	= fopen($file_cache, "a") or die("Unable to open file!");; 
			$content 	= $dg->readFile($file);
			$content 	= $dg->minify($content, $type);
			if($type == 'js')
			{
				$content = $content.';';
			}
			fwrite( $myfile, $content );
			fclose($myfile);
		}

		return $file_cache;
	}

	/*
	* Remove files js
	 */
	function _js()
	{
		/* admin file */
		$file = ROOT .DS. 'assets' .DS. 'js' .DS. 'cache_all_files.js';
		if(file_exists($file))
		{
			unlink($file);
		}

		$file = dirname(ROOT) .DS. 'assets' .DS. 'js' .DS. 'cache_all_files.js';
		if(file_exists($file))
		{
			unlink($file);
		}

		/* addons */
		$file = dirname(ROOT) .DS. 'assets' .DS. 'js' .DS. 'cache_all_filesadmin.js';
		if(file_exists($file))
		{
			unlink($file);
		}

		$file = dirname(ROOT) .DS. 'assets' .DS. 'js' .DS. 'cache_all_filesmobile.js';
		if(file_exists($file))
		{
			unlink($file);
		}
	}

	/*
	* Remove files css
	 */
	function _css()
	{
		/* admin file */
		$file = ROOT .DS. 'assets' .DS. 'css' .DS. 'cache_all_files.css';
		if(file_exists($file))
		{
			unlink($file);
		}

		$file = dirname(ROOT) .DS. 'assets' .DS. 'css' .DS. 'cache_all_files.css';
		if(file_exists($file))
		{
			unlink($file);
		}
		/* addons */
		$file = dirname(ROOT) .DS. 'assets' .DS. 'css' .DS. 'cache_all_filesmobile.css';
		if(file_exists($file))
		{
			unlink($file);
		}
	}
}
?>