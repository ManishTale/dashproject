<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2017-02-10
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
if ( ! defined('ROOT')) exit('No direct script access allowed');

class Categories extends Controllers
{
	public function sorting()
	{
		if( isset($_POST['action']) && isset($_POST['parent']) )
		{
			$action 	= $_POST['action'];
			$parent 	= $_POST['parent'];
			
			include_once(ROOT.DS.'includes'.DS.'functions.php');
			$dg 		= new dg();
			
			$file		= dirname(ROOT).DS.'data'.DS.'categories_art.json';
			$content 	= $dg->readFile($file);
			if($content == false) return false;
			
			$categories = json_decode($content, true);
			if(count($categories) == 0) return false;
			
			switch($action)
			{
				case 'after':
					if(isset($_POST['child']))
					{
						$child 			= $_POST['child'];
						$data			= array();
						$cate_active 	= array();
						foreach($categories as $cate)
						{
							if($child != $cate['id'])
							{
								$data[] = $cate;
							}
							else
							{
								$cate_active = $cate;
							}
						}
						
						$categories 	= array();
						if(count($cate_active) && count($data))
						{
							foreach($data as $cate)
							{
								$categories[] = $cate;
								if($parent == $cate['id'])
								{
									$categories[] = $cate_active;
								}								
							}
						}
					}
					break;
				
				case 'before':
					if(isset($_POST['child']))
					{
						$child 			= $_POST['child'];
						$data			= array();
						$cate_active 	= array();
						foreach($categories as $cate)
						{
							if($child != $cate['id'])
							{
								$data[] = $cate;
							}
							else
							{
								$cate_active = $cate;
							}
						}
						
						$categories 	= array();
						if(count($cate_active) && count($data))
						{
							foreach($data as $cate)
							{
								if($parent == $cate['id'])
								{
									$categories[] = $cate_active;
								}
								$categories[] = $cate;
							}
						}
					}
					break;				
			}
			
			$dg->WriteFile($file, json_encode($categories));
		}
	}
}
?>