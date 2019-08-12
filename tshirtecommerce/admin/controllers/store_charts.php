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

class Store_charts extends Controllers
{
	public function views()
	{
		$dgClass 	= new dg();
		$cache 		= $dgClass->cache('store');
		$text 		= date('M', time());
		
		$month 		= date('Y_m', time());
		$histories 	= $cache->get('view_arts_'.$month);
		if ($histories != null)
		{
			if (count($histories))
			{
				$d = 0;
				$max = 0;
				$data = array();
				foreach($histories as $day => $views)
				{
					if($d == 0)
					{
						$d = $day;
					}else
					{
						$d++;
						$lost = $day - $d; 
						if($lost > 0)
						{
							for($i=0; $i<$lost; $i++)
							{
								$d=$d+$i;
								$data['dates'][]	= $text.' '.$d;
								$data['views'][]	= 0;
							}
							$d++;
						}
					}
					
					$data['dates'][]	= $text.' '.$day;
					$n = count($views);
					$data['views'][]	= $n;
					if ($n > $max)
					{
						$max = $n;
					}
				}
				$data['max'] = $max;
				echo json_encode($data);
			}
		}
		exit;
	}
	
	public function search($type = 'month')
	{
		if ($type != 'month')
			$type = 'week';
		
		$dgClass 	= new dg();
		$cache 		= $dgClass->cache('store');
		
		if ($type == 'month')
		{
			$start 		= 1;
			$end 		= date('j', time());
		}
		else
		{
			$start 		= date("j", strtotime('monday this week'));
			$end 		= date("j", strtotime('sunday this week'));
		}
		
		$month 		= date('Y_m', time());
		$histories 	= $cache->get('keyword_'.$month);
		if ($histories != null)
		{
			$data = array();
			for($i=$start; $i<=$end; $i++)
			{
				if ($i<10)
					$day = '0'.$i;
				else
					$day = $i;
				if (isset($histories[$day]))
				{
					foreach($histories[$day] as $key => $array)
					{
						if (isset($histories[$key]))
							$data[$key] = $histories[$key];
					}
				}
			}
			function cmp($a, $b)
			{
				return $b['count'] - $a['count'];
			}
			usort($data, 'cmp');
			if (count($data) > 0)
			{
				$item = array();
				$i = 0;
				foreach($data as $key => $array)
				{
					if ($i > 20) break;
					$item[$i] = array(
						'count' 	=> $array['count'],
						'keyword' 	=> $array['keyword'],
					);
					$i++;
				}
				echo json_encode($item);
			}
		}
		exit;
	}
	
	public function sales($type = 'month')
	{
		if ($type != 'month')
			$type = 'week';
		
		$dgClass 	= new dg();
		$cache 		= $dgClass->cache('store');
		
		if ($type == 'month')
		{
			$start 		= 1;
			$end 		= date('j', time());
		}
		else
		{
			$start 		= date("j", strtotime('monday this week'));
			$end 		= date("j", strtotime('sunday this week'));
		}
		
		$month 		= date('Y_m', time());
		$histories 	= $cache->get('sales');
		if ($histories != null && isset($histories[$month]))
		{
			$file	= dirname(ROOT) .DS. 'data' .DS. 'store' .DS. 'arts_info.json';
			$arts = array();
			if(file_exists($file))
			{
				$arts = json_decode( file_get_contents($file), true );
			}
			
			$sales = $histories[$month];
			$data = array();
			for($i=$start; $i<=$end; $i++)
			{
				if ($i<10)
					$day = '0'.$i;
				else
					$day = $i;
				
				if (isset($sales[$day]))
				{
					foreach($sales[$day] as $art_id => $count)
					{
						if(isset($arts[$art_id]))
						{
							$data[]	= array(
								'date' => str_replace('_', '/', $month).'/'.$day,
								'count' => $count,
								'art_id' => $art_id,
								'thumb' => $arts[$art_id]['thumb'],
								'title' => $arts[$art_id]['title'],
								'price' => $arts[$art_id]['price'],
							);
						}
						
					}
				}
			}
			
			function cmp_sales($a, $b)
			{			
				return $b['count'] - $a['count'];
			}
			usort($data, 'cmp_sales');
			echo json_encode($data);
		}
		exit;
	}
}
?>