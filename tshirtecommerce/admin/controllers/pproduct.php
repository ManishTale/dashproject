<?php 

if ( ! defined('ROOT')) exit('No direct script access allowed');

require_once 'product.php';

class Pproduct extends Product
{
	public function pssave()
	{
		if (empty($_POST['product'])) {
			$dgClass->redirect('index.php/product/edit');
		}
		
		$data = $_POST['product'];
		
		$attributes = array();
		if (isset($data['fields']) && count($data['fields']) > 0)
		{
			$attributes['name'] 		= array();
			$attributes['prices'] 		= array();
			$attributes['titles'] 		= array();
			$attributes['type'] 		= array();
			$attributes['obj'] 		= array();
			$attributes['required'] 	= array();
			$i=0;
			foreach($data['fields'] as $filed)
			{
				if(empty($filed['type']))
				{
					$filed['type'] = 'selectbox';
				}
				if(empty($filed['obj']))
				{
					$filed['obj'] = 'none';
				}
				if(empty($filed['required']))
				{
					$filed['required'] = '0';
				}	
				$attributes['name'][$i] 	= $filed['name'];
				$attributes['obj'][$i] 		= $filed['obj'];
				$attributes['required'][$i] 	= $filed['required'];
				$attributes['prices'][$i] 	= $filed['prices'];
				$attributes['titles'][$i] 	= $filed['titles'];
				$attributes['type'][$i] 	= $filed['type'];
				$attributes['value'][$i] 	= $filed['value'];
				$i++;
			}
		}
		unset($data['fields']);
		$data['attributes'] = $attributes;
		
		$dgClass = new dg();
		$content = array('products'=> array());
		if ($data['id'] == 0) {
			$id = 1;
			$products = $dgClass->getProducts();		
			if (count($products) > 0) {
				foreach($products as $product) {
					if ($product->id > $id) {
						$id = $product->id;
					}
				}
				$id = $id + 1;
			}
			$data['id'] = $id;
			$products[] = $data;
			$content['products'] = $products;
		} else {
			$products = $dgClass->getProducts();
			$is_new = true;
			if (count($products) > 0) {
				foreach ($products as $product) {
					if ($product->id == $data['id']) {
						$content['products'][]  = $data;
						$is_new = false;
					} else {
						$content['products'][] = $product;
					}
				}
			}
			
			if ($is_new === true) {
				$products[] = $data;
				$content['products'] = $products;
			}
		}
		$content = str_replace('\\\\', '', json_encode($content));
		$path = dirname(ROOT) .DS. 'data' .DS. 'products.json';
		$check = $dgClass->WriteFile($path, $content);
		
		$data_cate = array();
		if (isset($_POST['category'])) {
			$categories = $_POST['category'];
			
			$category = $dgClass->getProductCategories();
			if (count($categories)) {
				$cid = 0;
				if (count($category)) {
					foreach ($category as $val) {
						if ($val->product_id != $data['id']) {
							$data_cate[] = $val;
							if ($val->id > $cid) $cid = $val->id;
						}
					}
				}
				
				foreach ($categories as $val) {
					$cid++;
					$catedt = new stdClass();
					$catedt->id = $cid;
					$catedt->product_id = $data['id'];
					$catedt->cate_id = $val;
					$data_cate[] = $catedt;
				}
			} else {
				if (count($category)) {
					foreach ($category as $val) {
						if ($val->product_id != $data['id']) {
							$data_cate[] = $val;
						}
					}
				}
			}
		} else {
			$category = $dgClass->getProductCategories();
			if (count($category)) {
				foreach ($category as $val) {
					if ($val->product_id != $data['id']) {
						$data_cate[] = $val;
					}
				}
			}
		}

		$path = dirname(ROOT) .DS. 'data' .DS. 'product_categories.json';
		$check = $dgClass->WriteFile($path, json_encode($data_cate));

		$arr = array(
			'product_id' => $data['id'], 
			'product_title_img' => $data['title'].'::'.$data['image']
		);

		echo json_encode($arr);
		return;
	}
}

?>