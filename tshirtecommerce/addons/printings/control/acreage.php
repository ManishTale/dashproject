<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2016-03-10
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */

// get price of acreage.
function getPricePrinting($printing, $data, $quantity)
{
	$price = 0;
	if ( isset($printing->values) && is_object($printing->values) && isset($data['sizes']) )
	{
		$sizes = @json_decode($data['sizes'], true);
		if ($sizes)
		{
			$values = json_decode ( json_encode($printing->values), true);
						
			foreach($sizes as $view => $size)
			{
				if ( !isset($size['width']) || $size['width'] == 0) continue;
				if ( !isset($size['height']) || $size['height'] == 0) continue;
				if ( is_string($size) && $size == '') continue;
				
				if ( isset($values[$view]) && isset($values[$view]['prices']) && isset($values[$view]['quatity']) )
				{
					// get price with quantity
					$index = 0;
					$count_quantity = count($values[$view]['quatity']);
					for($i=0; $i<$count_quantity; $i++)
					{
						if ($quantity <= $values[$view]['quatity'][$i])
						{
							$index = $i;
							break;
						}	
					}
					
					if ($index == 0 && $values[$view]['quatity'][$count_quantity-1] < $quantity)
					{
						$index = $count_quantity-1;
					}
					
					// get list price with quantity
					if ( isset($values[$view]['prices'][$index]) )
					{
						$prices = $values[$view]['prices'][$index];
					}
					else
					{
						$prices = $values[$view]['prices'][0];
					}				
					
					//get price with acreage.
					if ( isset($prices[0]) )
					{
						$acreage = $size['width'] * $size['height'];
						$price 	= $price + ($prices[0] * $acreage);
					}									
				}
			}
			
			if ( isset($printing->price_extra) || $price > 0 )
			{
				$price = $price + ($printing->price_extra/$quantity);
			}
		}
	}

	return $price;
}