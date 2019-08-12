<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2016-07-01
 *
 * All products
 *
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
class P9f_store_products extends P9f
{
	/**
	 * Get all product design of woocommerce
	 * $cate_id id of category
	 * @return array
	 */
	function getProducts($cate_id = 0)
	{
		if($cate_id > 0)
		{
			$cate_ids 		= array();
			$cate_ids[] 	= $cate_id;
			$categories_child = $this->getCategoriesChild($cate_id);
			for($i = 0; $i < count($categories_child); $i++)
			{
				$cate_ids[] = $categories_child[$i]['id'];
			}

			$data = $this->getData('product_categories');
			$ids = array();
			if(count($data))
			{
				foreach($data as $cate)
				{
					if( in_array($cate['cate_id'], $cate_ids) )
					{
						$ids[$cate['product_id']] = 1;
					}
				}
			}
		}

		$products 	= $this->getData('products');

		$data 	= array();
		if(isset($ids) && count($products['products']))
		{
			$array = array();
			foreach ($products['products'] as $product)
			{
				if( isset($ids[$product['id']]) )
				{
					$array[] = $product;
				}
			}
			$data = $array;
		}
		else
		{
			$data = $products['products'];
		}

		return $data;
	}

	/**
	 * Get data of one product
	 * @param  int $id ID of product design
	 * @return array     data of product design
	 */
	public function getProduct($id)
	{
		$products 	= $this->getProducts();
		$n 		= count($products);

		$data 	= array();
		for( $i=0; $i<$n; $i++ )
		{
			$product = $products[$i];
			if( $product['id'] == $id )
			{
				$data = $product;
				break;
			}
		}

		return $data;
	}

	public function getProductsDesign($cate_id = 0)
	{
		$products_woo 	= $this->getWooProducts();

		$products_design 	= $this->getProducts($cate_id);

		$data 		= array();
		if(count($products_design))
		{
			foreach ($products_design as $product)
			{
				$id = $product['id'];
				if( isset($products_woo[$id]) )
				{
					$product['parent_id'] = $products_woo[$id];
					$data[] = $product;
				}
			}
		}

		return $data;
	}

	/*
	* Get all type design template of all products
	 */
	function getTypesProducts($products)
	{
		$types 	= array();
		if(count($products))
		{
			$i = 0;
			foreach ($products as $product)
			{
				if($i == 20) break;
				$i++;
				if( isset($product['store']) && isset($product['store']['types']) )
				{
					for($j=0; $j<count($product['store']['types']); $j++)
					{
						$type_id = $product['store']['types'][$j];
						$types[$type_id] = $product['id'];
					}
				}
			}
		}
		return $types;
	}

	/**
	 * Get all products design of woocommerce
	 * @return array
	 */
	function getWooProducts()
	{
		
		$args = array( 
			'post_type' => 'product', 
			'posts_per_page' => -1,
			'meta_query' => array(
				array('key' => 'wc_productdata_options')
			)
		);
		$products = get_posts( $args );

		$data = array();
		if(count($products))
		{
			global $wc_cpdf;
			foreach ($products as $product)
			{
				$id = $wc_cpdf->get_value($product->ID, '_product_id');
				if ($id != '' && is_numeric($id))
				{
					$data[$id] = $product->ID;
				}
			}
		}

		return $data;
	}

	/**
	 * Get categories level 1 of product design
	 * @return array
	 */
	public function getCategories()
	{
		$data 		= array();

		$categories 	= $this->getData('categories');
		for($i=0; $i<count($categories); $i++)
		{
			if( $categories[$i]['parent_id'] == 0 )
			{
				$data[] = $categories[$i];
			}
		}

		return $data;
	}

	/**
	 * List all product categories child
	 * @param  int  		$cate_id 	ID of category
	 * @return array           		list of category
	 */
	function getCategoriesChild($cate_id)
	{
		$categories 	= $this->getData('categories');

		$data 		= array();
		if(count($categories))
		{
			foreach ($categories as $cate)
			{
				if( $cate['parent_id'] == $cate_id )
				{
					$data[] 	= $cate;
				}
			}
		}
		return $data;
	}
}
?>