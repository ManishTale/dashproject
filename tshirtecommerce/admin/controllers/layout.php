<?php
/*
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2016-17-02
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
*/

if ( ! defined('ROOT') ) exit('No direct script access allowed');

class Layout extends Controllers
{
	/* move all setting to layouts */
	protected  function ini($file)
	{
		$this->dg 	= new dg();	
		$settings 		= $this->dg->getSetting();
		
		$layouts 		= array();
		if(isset($settings->themes) && $settings->themes != '')
		{
			$options	= array();
			if( isset($settings->theme) )
			{
				$themes = $settings->theme;
				$themes	= json_decode( json_encode($themes), true );
				
				if( isset($themes[$settings->themes]) )
				{
					$options = $themes[$settings->themes];
				}
			}
			$layouts[$settings->themes] = array(
				'name' => $settings->themes,
				'theme' => $settings->themes,
				'title' => $settings->themes,
				'description' => $settings->themes,
				'default' => 1,
				'options' => $options,
			);
		}
		$check = $this->dg->WriteFile($file, json_encode($layouts));
		if($check == false)
		{
			$this->error = "Your server not allow write file. Please set permission 755 to foder <strong>tshirtecommerce/data</strong>";
		}
	}
	
	// list all layout
	public function index($error = '') {
		// ini
		$file 		= dirname(ROOT) .DS. 'data' .DS. 'layouts.json';
		if(!file_exists($file))
		{
			$this->ini($file);
		}
		
		$data = array();
		
		$data['title'] 		= 'UI & Layout Composer';
		$data['sub_title'] 	= '';
		
		// read all layout
		if(isset($file))
		{
			$layouts = $this->getLayouts($file);			
			if($layouts !== false)
			{
				$data['layouts']	= $layouts;
			}
		}
		
		// get error
		if( isset($this->error) )
		{
			$data['error'] = $this->error;
		}
		
		if($error == 1)
		{
			$data['error'] = 'Layout not found!';
		}
		
		$this->view('layout', $data);
	}
	
	protected function getLayouts($file = '')
	{
		if($file == '')
			$file 		= dirname(ROOT) .DS. 'data' .DS. 'layouts.json';
		
		$content 		= file_get_contents($file);
		if($content !== false)
		{
			$layouts 			= json_decode($content, true);
			return $layouts;
		}
		
		return false;
	}
	
	/*
	* setup theme default and update data when update theme
	*/
	public function setDefault($id = '')
	{
		$this->dg 	= new dg();
		if($id == '')
		{
			$this->dg->redirect('index.php/layout/index/1');
			return false;
		}
		
		$layouts = $this->getLayouts();
		if($layouts != false && count($layouts))
		{
			foreach($layouts as $key => $layout)
			{
				if($key == $id)
				{
					$layouts[$key]['default'] = 1;
					$this->updateSetting($layout);
				}
				else
				{
					$layouts[$key]['default'] = 0;
				}
			}
			$file 		= dirname(ROOT) .DS. 'data' .DS. 'layouts.json';
			$this->dg->WriteFile( $file, json_encode($layouts) );
		}
		
		$this->dg->redirect('index.php/layout');
	}
	
	/*
	* Remove layout
	*/
	public function remove($id)
	{
		$this->dg 	= new dg();
		$layouts = $this->getLayouts();
		if( $layouts != false && count($layouts) && isset($layouts[$id]) )
		{
			if($layouts[$id]['default'] == 0)
			{
				unset($layouts[$id]);
				$file 		= dirname(ROOT) .DS. 'data' .DS. 'layouts.json';
				$this->dg->WriteFile( $file, json_encode($layouts) );
			}
		}
		
		$this->dg->redirect('index.php/layout');
	}
	
	protected function updateSetting($data)
	{
		$dg 				= new dg();
		$settings 			= $dg->getSetting();
		
		$settings->themes 	= $data['theme'];
		$settings->theme->{$data['theme']} = new StdClass();
		if( isset($data['options']) && count($data['options']) )
		{
			$settings->theme->{$data['theme']} = json_decode(json_encode($data['options']));
		}
		$file 		= dirname(ROOT) .DS. 'data' .DS. 'settings.json';
		$dg->WriteFile( $file, json_encode($settings) );
	}
	
	/*
	* edit layout
	*/
	public function edit($id = '')
	{
		$file 		= dirname(ROOT) .DS. 'data' .DS. 'layouts.json';
		$this->dg 	= new dg();
		
		$data['id']			= $id;
		
		if($id != '')
		{
			$layouts = $this->getLayouts();
			if($layouts != false && count($layouts))
			{
				foreach($layouts as $key => $layout)
				{
					if($key == $id)
					{
						$data['layout'] = $layout;
						break;
					}
				}
			}
		}
		
		// save data
		if( isset($_POST['theme']) && isset($data['layout']) )
		{
			$theme 			= $_POST['theme'];
			$options 		= array();
			if( isset($_POST['setting']) )
			{
				$setting 	= $_POST['setting'];
				if( isset($setting['theme']) && isset($setting['theme'][$data['layout']['theme']]) )
				{
					$options	= $setting['theme'][$data['layout']['theme']];
				}
			}
			
			$layouts = $this->getLayouts();
			if($layouts != false && count($layouts))
			{
				foreach($layouts as $key => $layout)
				{
					if($key == $id)
					{
						$layouts[$key]['title'] 		= $theme['title'];
						$layouts[$key]['description'] 	= $theme['description'];
						$layouts[$key]['options'] 		= $options;
						$data['layout']					= $layouts[$key];
						break;
					}
				}
			}
			$this->dg->WriteFile( $file, json_encode($layouts) );
			
			// update setting with theme default
			if($data['layout']['default'] == 1)
			{
				$this->updateSetting($data['layout']);
			}
			
			$data['msg'] = 'saved successfully';
		}
		
		// show view
		$data['title'] 		= 'UI & Layout Composer';
		$data['sub_title'] 	= 'Edit';
		
		if(empty($data['layout']))
		{
			$this->dg->redirect('index.php/layout/index/1');
		}
		else
		{
			$theme 	= $data['layout']['theme'];
			$file 	= dirname(ROOT) .DS. 'themes' .DS. $theme .DS. 'admin' .DS. 'settings.php';
			if(file_exists($file))
			{
				$data['setting']	= $file;
				if( isset($data['layout']['options']) && count($data['layout']['options']) )
				{
					$data['settings'] = array();
					$data['settings']['themes']	= $data['layout']['theme'];
					$data['settings']['theme'] 	= array(
						$data['layout']['theme'] => $data['layout']['options']
					);
				}
			}
		}
		
		$this->view('layout_edit', $data);
	}
	
	/*
	* add new layout
	*/
	public function add()
	{
		// save data
		if( isset($_POST['theme']) )
		{
			$theme				= $_POST['theme'];
			$theme['default']	= 0;
			$theme['options']	= array();
			$theme['name']		= uniqid($theme['theme'].'_');
			
			$this->dg 					= new dg();
			$layouts 					= $this->getLayouts();
			$layouts[$theme['name']]	= $theme;
			
			$file 				= dirname(ROOT) .DS. 'data' .DS. 'layouts.json';
			$this->dg->WriteFile( $file, json_encode($layouts) );
			
			$this->dg->redirect('index.php/layout/edit/'.$theme['name']);
		}
		
		$data['title'] 		= 'UI & Layout Composer';
		$data['sub_title'] 	= 'Add New';
		
		$data['themes']		= $this->getThemes();
		
		if($data['themes'] === false)
		{
			$data['error']	= 'Theme not found';
		}
		
		$this->view('layout_add', $data);
	}
	
	protected function getThemes()
	{
		$path = dirname(ROOT) .DS. 'themes';
		
		if (file_exists($path))
		{
			$folders = scandir($path);
			if (count($folders) == 0)
				return false;
						
			$list = array();
			for($i=0; $i<count($folders); $i++)
			{
				if (strpos($folders[$i], '.') === false)
				{
					$list[] = $folders[$i];
				}
			}
			if (count($list) == 0) return false;
		}
		else
		{
			return false;
		}
		
		if (isset($list) && count($list) > 0)
		{
			$themes = array();
			
			foreach($list as $theme)
			{
				$file = $path .DS. $theme .DS. 'layout.json';
				if (file_exists($file))
				{
					$content = file_get_contents($file);					
					if ( $content !== false )
					{
						$themes[] = json_decode($content, true);
					}
				}
			}
			return $themes;
		}
	}
}