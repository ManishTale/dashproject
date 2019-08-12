<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-06-03
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */

/*
 * get attribute of product with ajax when change product in design tool
*/

function getAttributes_ajax($attribute)
{

	if (isset($attribute->name) && $attribute->name != '')
	{
		$attrs = new stdClass();

		if (is_string($attribute->name))
			$attrs->name 		= json_decode($attribute->name);
		else
			$attrs->name 		= $attribute->name;
	

		if (is_string($attribute->titles))
			$attrs->titles 		= json_decode($attribute->titles);
		else
			$attrs->titles 		= $attribute->titles;

		if (is_string($attribute->prices))
			$attrs->prices 		= json_decode($attribute->prices);
		else
			$attrs->prices 		= $attribute->prices;

		if (is_string($attribute->type))
			$attrs->type 		= json_decode($attribute->type);
		else
			$attrs->type 		= $attribute->type;

		$html 				= '';
		$setttings 	= getTshirtSetting();
		for ($i=0; $i<count($attrs->name); $i++)
		{
			$html 	.= '<div class="form-group product-fields">';
			$html 	.= 		'<label for="fields">'.$attrs->name[$i].'</label>';
			
			$id 	 = 'attribute['.$i.']';
			$html 	.= 		field_ajax($attrs->name[$i], $attrs->titles[$i], $attrs->prices[$i], $attrs->type[$i], $id, $setttings);
			
			$html 	.= '</div>';
		}
		return $html;
	}
	else
	{
		return '';
	}

}

function field_ajax($name, $title, $price, $type, $id, $setttings)
{
	$html = '<div class="dg-poduct-fields">';
	switch($type)
	{
		case 'checkbox':
			for ($i=0; $i<count($title); $i++)
			{
				$html .= '<label class="checkbox-inline">';
				$html .= 	'<input type="checkbox" name="'.$id.'['.$i.']" value="'.$i.'"> '.$title[$i];
				
				$html .= attributePrice($price[$i], $setttings);
				
				$html .= '</label>';
			}
		break;
		
		case 'selectbox':
			$html .= '<select class="form-control input-sm" name="'.$id.'">';
			
			for ($i=0; $i<count($title); $i++)
			{
				if ($price[$i] != '0')
					$html_price = attributePrice($price[$i], $setttings);
				else
					$html_price = '';
					
				$html .= '<option value="'.$i.'">'.$title[$i].$html_price.'</option>';
			}
			
			$html .= '</select>';
		break;
		
		case 'radio':
			for ($i=0; $i<count($title); $i++)
			{
				$html .= '<label class="radio-inline">';
				$html .= 	'<input type="radio" name="'.$id.'" value="'.$i.'"> '.$title[$i];
				
				$html .= attributePrice($price[$i], $setttings);
				
				$html .= '</label>';
			}
		break;
		
		case 'textlist':
			$html 		.= '<style>.product-quantity{display:none;}</style><ul class="p-color-sizes list-number col-md-12">';
			for ($i=0; $i<count($title); $i++)
			{
				$html .= '<li>';
				
				if ($price[$i] != '0')
					$html_price = attributePrice($price[$i], $setttings);
				else
					$html_price = '';
				
				$html .= 	'<label data-id="'.$title[$i].'">'.$title[$i].$html_price.'</label>';
				$html .= 	'<input type="text" class="form-control input-sm size-number" name="'.$id.'['.$i.']" onkeyup="this.value = minmax(this.value, 1, 1000)">';					
				$html .= '</li>';
			}
			$html 		.= '</ul>';
		break;
	}
	$html	.= '</div>';
	
	return $html;
}

function quantity_ajax($min = 1, $name = 'Quantity', $name2 = 'minimum quantity: '){
	
	$min = (int) $min;
	if ($min < 0) $min = 0;
	$html = '<div class="form-group product-fields product-quantity">';
	$html .= 	'<label>'.$name.'</label>';
	$html .= 	'<input type="number" class="form-control input-sm" value="'.$min.'" name="quantity" id="quantity" onkeyup="this.value = minmax(this.value, 1, 1000)">';
	$html .= '</div>';
	
	$css = '';
	if($min <= 1)
	{
		$css = 'style="display:none;"';
	}
	$html .= '<div class="form-group product-fields" '.$css.'>'
				. '<span class="help-block"><small>'.$name2.$min.'</small></span>'
			 .'</div>';
	
	return $html;
}

/* 
 * get attribute of product with option in page product detail
*/
function getAttributes($attribute)
{
	if (isset($attribute->name) && $attribute->name != '')
	{
		$attrs = new stdClass();
		
		if (is_string($attribute->name))
			$attrs->name 		= json_decode($attribute->name);
		else
			$attrs->name 		= $attribute->name;
		
		if (is_string($attribute->titles))
			$attrs->titles 		= json_decode($attribute->titles);
		else
			$attrs->titles 		= $attribute->titles;
		
		if (is_string($attribute->prices))
			$attrs->prices 		= json_decode($attribute->prices);
		else
			$attrs->prices 		= $attribute->prices;
		
		if (is_string($attribute->type))
			$attrs->type 		= json_decode($attribute->type);
		else
			$attrs->type 		= $attribute->type;
		
		if(empty($attribute->obj))
		{
			$attribute->obj = array();
		}
		if (is_string($attribute->obj))
			$attrs->obj 		= json_decode($attribute->obj);
		else
			$attrs->obj 		= $attribute->obj;

		if(empty($attribute->required))
		{
			$attribute->required = array();
		}
		if (is_string($attribute->required))
			$attrs->required 		= json_decode($attribute->required);
		else
			$attrs->required 		= $attribute->required;

		if(empty($attribute->value))
		{
			$attribute->value = array();
		}
		if (is_string($attribute->value))
			$attrs->value 		= json_decode($attribute->value);
		else
			$attrs->value 		= $attribute->value;
		
		$html 				= '';
		$setttings 				= getTshirtSetting();
		for ($i=0; $i<count($attrs->name); $i++)
		{
			$html 	.= '<div class="form-group product-fields">';
			$html 	.= 	'<label for="fields">'.$attrs->name[$i].'</label>';
			
			$id 	 		= 'options['.$i.']';
			$attribute_o 	= 'attribute['.$i.']';

			$options 	= array(
				'name' => $attrs->name[$i],
				'title' => $attrs->titles[$i],
				'price' => $attrs->prices[$i],
				'type' => $attrs->type[$i],
				'id' => $id,
				'attribute' => $attribute_o,
				'index' => $i,
			);
			$options['required'] 	= 0;
			if(isset($attrs->required[$i]))
			{
				$options['required'] 	= $attrs->required[$i];
			}
			if( isset($attrs->obj[$i]) && $attrs->obj[$i] != '' && $attrs->obj[$i] != 'none' )
			{
				$options['obj'] 		= $attrs->obj[$i];
				$options['value'] 	= $attrs->value[$i];
			}
			$html 		.= attribute_field($options, $setttings);
			
			$html 	.= '</div>';

		}
		return $html;
	}
	else
	{
		return '';
	}

}
function attribute_field($options, $setttings)
{
	$name 	= $options['name'];
	$title 	= $options['title'];
	$price 	= $options['price'];
	$type 	= $options['type'];
	$id 		= $options['id'];
	$attribute 	= $options['attribute'];
	$index 	= $options['index'];

	$class_required = '';
	if(isset($options['required']) && $options['required'] == 1)
	{
		$class_required = 'required';
	}

	$html 	= '<div class="dg-poduct-fields '.$class_required.'" data-type="'.$type.'">';
	$html 	.= 	'<input type="hidden" name="'.$id.'[name]" value="'.$name.'">';
	$html 	.= 	'<input type="hidden" name="'.$id.'[type]" value="'.$type.'">';
	switch($type)
	{
		case 'checkbox':
			for ($i=0; $i<count($title); $i++)
			{
				$html .= '<label class="checkbox-inline">';
				$html .= 	'<input type="checkbox" class="'.$class_required.'" onclick="tshirt_attributes(this, \''.$index.$i.'\')" name="'.$id.'[value]['.$i.']" value="'.htmlentities($title[$i]).'"> '.$title[$i];
				
				$html .= attributePrice($price[$i], $setttings);
				
				$html .= 	'<input type="checkbox" class="attribute_'.$index.$i.'" name="'.$attribute.'['.$i.']" value="'.$i.'" style="display:none;">';
				$html .= '</label>';
			}
		break;
		
		case 'selectbox':
			$obj = '';
			if(isset($options['obj']))
			{
				$obj 		= $options['obj'];
				$obj_value 	= $options['value'];
			}

			if($obj == 'image')
			{
				for ($i=0; $i<count($title); $i++)
				{
					if( isset($obj_value[$i]) &&  $obj_value[$i] != '')
					{
						$html_price = attributePrice($price[$i], $setttings);

						$html .= '<label class="radio-inline attr-img pull-left dg-tooltip">';
						$html .= 	'<img src="'.$obj_value[$i].'" class="img-responsive" onclick="tshirt_attributes(this, \''.$index.$i.'\')" alt="" height="60">';
						$html .= 	'<small>'.htmlentities($title[$i]).$html_price.'</small>';
						$html .= 	'<input type="radio" class="attribute_'.$index.$i.' '.$class_required.'" name="'.$id.'[value]" style="display:none;" value="'.htmlentities($title[$i]).'">';
						$html .= 	'<input type="radio" class="attribute_'.$index.$i.'" name="'.$attribute.'" value="'.$i.'" style="display:none;">';
						$html .= '</label>';
					}
				}
			}
			else
			{
				$html .= '<select class="form-control input-sm '.$class_required.'" data-obj="'.$obj.'" onchange="tshirt_attributes(this, \''.$index.'\')" name="'.$id.'[value]">';
				for ($i=0; $i<count($title); $i++)
				{
					$html_price = attributePrice($price[$i], $setttings);
					
					$html .= '<option data-id="'.$i.'" value="'.htmlentities($title[$i]).'">'.$title[$i].$html_price.'</option>';
				}
				$html .= '</select>';
				$html .= 	'<input type="text" class="attribute_'.$index.'" name="'.$attribute.'" value="0" style="display:none;">';
			}
		break;
		
		case 'radio':
			for ($i=0; $i<count($title); $i++)
			{
				$html .= '<label class="radio-inline">';
				$html .= 	'<input type="radio" class="'.$class_required.'" onclick="tshirt_attributes(this, \''.$index.$i.'\')" name="'.$id.'[value]" value="'.htmlentities($title[$i]).'"> '.$title[$i];
				
				$html .= attributePrice($price[$i], $setttings);
				
				$html .= 	'<input type="radio" class="attribute_'.$index.$i.'" name="'.$attribute.'" value="'.$i.'" style="display:none;">';
				$html .= '</label>';
			}
		break;
		
		case 'textlist':
			$html 		.= '<style>.quantity input.input-text.qty, .quantity{display:none;}</style><ul class="p-color-sizes list-number col-md-12">';
			for ($i=0; $i<count($title); $i++)
			{
				$html .= '<li>';
				
				if ($price[$i] != '0')
					$html_price = attributePrice($price[$i], $setttings);
				else
					$html_price = '';
				
				$html .= 	'<label>'.$title[$i].$html_price.'</label>';
				$html .= 	'<input type="text" onchange="tshirt_attributes(this, \''.$index.$i.'\')" class="form-control input-sm size-number '.$class_required.'" name="'.$id.'[value]['.$title[$i].']">';
				$html .= 	'<input type="text" class="attribute_'.$index.$i.' '.$class_required.'" name="'.$attribute.'['.$i.']" value="" style="display:none;">';				
				$html .= '</li>';
			}
			$html 		.= '</ul>';
		break;
	}
	$html	.= '</div>';
	
	return $html;
}

function quantity($min = 1, $name = 'Quantity', $name2 = 'minimum quantity: '){
	
	$min = (int) $min;
	if ($min < 0) $min = 0;
	$html = '<div class="form-group product-fields product-quantity">';
	$html .= 	'<label>'.$name.'</label>';
	$html .= 	'<input type="number" class="form-control input-sm" value="'.$min.'" name="quantity" id="quantity" onkeyup="this.value = minmax(this.value, 1, 1000)">';

	$css = '';
	if($min <= 1)
	{
		$css = 'style="display:none;"';
	}
	$html .= 	'<span class="help-block" '.$css.'><small>'.$name2.$min.'</small></span>';
	$html .= '</div>';
	
	return $html;
}

function getTshirtSetting()
{
	$file = ABSPATH .'tshirtecommerce/data/settings.json';
	if (file_exists($file))
	{
		$data 	= file_get_contents($file);			
		$settings 	= json_decode($data);			
		return $settings;
	}
	else
	{
		return array();
	}
}

function attributePrice($price, $setttings)
{
	$html = '';
	
	if ($price != '')
	{
		if ( isset($setttings->currency_symbol) )
			$currency = $setttings->currency_symbol;
		else
			$currency = '$';
		
		if ( strpos($price, '-') !== false)
		{
			$price = str_replace('-', '', $price);
			$add 	= '-';
		}
		else if (strpos($price, '+') !== false)
		{
			$price = str_replace('+', '', $price);
			$add 	= '+';
		}
		else
		{
			$price = $price;
			$add 	= '+';
		}
		
		if($price != '0')
		{
			if (isset($setttings->currency_postion) && $setttings->currency_postion == 'right')
				$html = ' ('.$add.$price.$currency.')';
			else
				$html = ' ('.$add.$currency.$price.')';
		}
		else
		{
			return '';
		}
		
	}
	return $html;
}
