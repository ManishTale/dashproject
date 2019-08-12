<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
* All ajax of store
*/
class P9f_store_ajax
{
	function __construct()
	{
		$this->init();
	}

	function init()
	{
		/* check api key of store */
		add_action( 'wp_ajax_store_check_api', array($this, 'store_check_api') );

		/* ajax download order */
		add_action( 'wp_ajax_store_ajax_key', array($this, 'store_ajax_key') );
		add_action( 'wp_ajax_nopriv_store_ajax_key', array($this, 'store_ajax_key') );

		/* ajax payment clipart */
		add_action( 'wp_ajax_store_payment_art', array($this, 'store_payment_art') );
		add_action( 'wp_ajax_nopriv_store_payment_art', array($this, 'store_payment_art') );

		/* load price of design */
		add_action( 'wp_ajax_get_design_price', array($this, 'get_design_price') );
		add_action( 'wp_ajax_nopriv_get_design_price', array($this, 'get_design_price') );

		/* ajax load product design */
		add_action( 'wp_ajax_get_design_idea', array($this, 'get_design_idea') );
		add_action( 'wp_ajax_nopriv_get_design_idea', array($this, 'get_design_idea') );
	}

	/*
	* Get price of product design template
	 */
	function get_design_price()
	{
		global $P9f;
		
		$result 	= array(
			'data' => 'Data not found',
			'error' => 1
		);
		if( empty($_POST['product_id']) || empty($_POST['idea_id']) )
		{
			echo json_encode($result);
			exit();
		}

		$product_id 	= $_POST['product_id'];
		$idea_id 		= $_POST['idea_id'];
		$colors 		= str_replace('\\"', '"', $_POST['colors']);

		$idea 			= $this->getIdea($idea_id);

		include_once('store-frontend.php');
		$store_front	= new P9f_store_frontend();

		$options 		= array();
		$options['print'] = array();
		$options['print']['sizes'] = str_replace('\\"', '"', $_POST['sizes']);

		if( isset($_SESSION["design_idea_".$idea_id]) )
		{
			$data 			= $_SESSION["design_idea_".$idea_id];
			$print_colors 	= $data['colors'];
			$cliparts 		= $data['cliparts'];
		}
		else
		{
			if( isset($idea['type']) && $idea['type'] == 'shop' ) /* check design created via admin page of client site */
			{
				$data 				= $store_front->getDesign($idea['id'], $idea['user_id']);
				$print_colors 			= json_encode($data['colors']);
				$cliparts 				= array();
				$cliparts['cliparts'] 		= $data['cliparts'];
				$cliparts['artStore'] 		= array();
				if(count($data['cliparts']))
				{
					foreach($data['cliparts'] as $view => $items)
					{
						for($i=0; $i<count($items); $i++)
						{
							$cliparts['artStore'][] = $items[$i];
						}
					}
				}
			}
			elseif(isset($idea['product_design_idea'])) /* check is design creaed in page edit product */
			{
				$data 			= json_encode($idea);
				$print_colors 	= $this->getColors($data);
				$cliparts 		= $this->getCliparts($data);
			}
			else /* check is design of store */
			{
				$data 			= $store_front->getDesign($idea['id']);
				$print_colors 	= $this->getColors($data);
				$cliparts 		= $this->getCliparts($data);
			}
			$_SESSION["design_idea_".$idea_id] = array(
				'colors' => $print_colors,
				'cliparts' => $cliparts,
			);
		}
		$view 		= $_POST['view'];
		$views 		= array('front', 'back', 'left', 'right');
		$prints 		= array();
		for($i=0; $i<4; $i++)
		{
			if($views[$i] == $view)
			{
				$prints[$view] = 	$print_colors;
			}
			else
			{
				$prints[$views[$i]] = 	array();
			}
		}
		$options['print']['colors'] 	= json_encode($prints);
		$options['cliparts']		= isset($cliparts['cliparts']) ? $cliparts['cliparts'] : array();
		$options['artStore']		= isset($cliparts['artStore']) ? $cliparts['artStore'] : array();

		if(count($options))
		{
			$options['quantity']	= $_POST['quantity'];
			$options['product_id']	= $product_id;
			$options['print_type']	= $_POST['print_type'];
			$options['colors']	= json_decode($colors, true);

			if( isset($_POST['attributes']) )
				$options['attribute']	= $_POST['attributes'];
			else
				$options['attribute'] 	= array();

			$tax = false;
			if(isset($_POST['tax']) && $_POST['tax'] != '')
			{
				$tax = true;
			}

			$prices 			= $P9f->getPrice($options, $tax);

			$options['view']		= $view;
			$options['design']	= $_POST['design'];
			$_SESSION["design_idea_".$idea_id.$product_id] = array(
				'options' => $options,
				'prices' => $prices,
			);
			if(isset($prices->sale))
			{
				$result['data'] 		= wc_price($prices->sale);
				$result['error'] 		= 0;
			}
		}

		header('Content-Type: application/json');
		echo json_encode($result);
		exit();
	}

	function getColors($data)
	{
		$vectors = strtolower($data);
		$vectors = str_replace('\"', '"', $vectors);
		preg_match_all('/fill=\"(.*?)\"/', $vectors, $fills);
		
		$colors = array();
		if(isset($fills[1]) && count($fills[1]))
		{
			for($i=0; $i<count($fills[1]); $i++)
			{
				if($fills[1][$i] == 'none' || $fills[1][$i] == '') continue;

				if( !in_array($fills[1][$i], $colors) )
				{
					$colors[] = $fills[1][$i];
				}
			}
		}

		preg_match_all('/stroke=\"(.*?)\"/', $vectors, $strokes);
		if(isset($strokes[1]) && count($strokes[1]))
		{
			for($i=0; $i<count($strokes[1]); $i++)
			{
				if($strokes[1][$i] == 'none' || $strokes[1][$i] == '') continue;

				if( !in_array($strokes[1][$i], $colors) )
				{
					$colors[] = $strokes[1][$i];
				}
			}
		}

		return $colors;
	}

	function getCliparts($data)
	{
		$vectors 	= json_decode($data, true);
		$cliparts 	= array(
			'cliparts' 	=> array(),
			'artStore' 	=> array()
		);
		if(count($vectors))
		{
			foreach ($vectors as $view => $items)
			{
				$cliparts['cliparts'][$view] = array();
				if(count($items))
				{
					foreach ($items as $item)
					{
						if($item['type'] == 'clipart' && isset($item['clipart_id']) && $item['clipart_id'] > 0)
						{
							$cliparts['cliparts'][$view][] = $item['clipart_id'];
							if( isset($item['price']) )
							{
								$cliparts['artStore'][] = $item['clipart_id'];
							}
						}
					}
				}
			}
		}

		return $cliparts;
	}

	/*
	* Ajax load design idea
	 */
	function get_design_idea()
	{
		header('Content-Type: application/json');
		$result 	= array(
			'data' => 'Data not found',
			'error' => 1
		);
		if( empty($_GET['product_id']) || empty($_GET['idea_id']) )
		{
			echo json_encode($result);
			exit();
		}

		global $P9f;

		$product_id 	= $_GET['product_id'];
		$idea_id 		= $_GET['idea_id'];

		$P9f->loadProduct();
		$product 		= $P9f->product->getProduct($product_id);
		if(count($product))
		{
			$result['error'] = 0;

			if( empty($product['box_width']) ) $product['box_width'] = 500;
			if( empty($product['box_height']) ) $product['box_height'] = 500;
			if( empty($product['gallery']) ) $product['gallery'] = '';

			$result['data'] = array(
				'width' => $product['box_width'],
				'height' => $product['box_height'],
				'gallery' => $product['gallery'],
				'design' => $product['design'],
			);

			$idea 	= $this->getIdea($idea_id);
			if(count($idea))
			{
				$result['data']['idea'] = array(
					'thumb' => $idea['thumb'],
					'title' => $idea['title'],
					'color' => $idea['color'],
				);
			}
		}
		
		echo json_encode($result);
		exit();
	}

	/*
	* Get design idea
	 */
	function getIdea($id)
	{
		global $P9f;

		$data 	= array();

		$options 	= explode(':', $id);
		if(count($options) > 2)
		{
			$data 	= $P9f->getShopDesign($options[1], $options[0]);
			$data['product_design_idea'] = 1;
		}
		else
		{
			$ideas 	= $P9f->getData('ideas', 'store');
			if(isset($ideas[$id]))
			{
				$data = $ideas[$id];
			}
		}

		return $data;
	}

	/* 
	* check api key of store
	* ajax only works with admin 
	*/
	function store_check_api()
	{
		if(empty($_GET['api']))
		{
			echo 0;
		}
		else
		{
			$api 	= $_GET['api'];
			$url 	= 'http://api.9file.net/api/key/api_key/'.$api;		
			$result = openURL($url);
			if($result != false)
			{
				$info = json_decode($result);
				if(isset($info->error))
				{
					echo 0;
				}
				else
				{
					global $P9f;
					
					$dg = $P9f->dgClass();
					$settings = $dg->getSetting();
					
					$store = array(
						'enable' => 1,
						'api' => $api,
						'verified' => 1,
						'auto_download' => 1,
						'your_clipart' => 1,
						'exchange_rate' => 0.2,
					);
					$settings->store = $store;
					$dg->WriteFile(ROOT .DS. 'data' .DS. 'settings.json', json_encode($settings));
					echo 1;
				}
			}
			else
			{
				echo 0;
			}
		}
		exit;
	}

	/* 
	* download design of order
	*/
	function store_ajax_key()
	{
		ini_set('max_execution_time', 3000);
		$data = array(
			'error'		=> 0,
			'msg'		=> '',
			'reload'	=> 0
		);
		if( empty($_GET['api_key']) || empty($_GET['arts']) || empty($_GET['order_id']) )
		{
			$data['error']	= 1;
			$data['msg']	= 'Data design not found!';
		}
		else
		{
			$ids 	= str_replace(':', '-', $_GET['arts']);
			$url 	= 'http://api.9file.net/api/order/ids/'.$ids.'/order_number/'.$_GET['order_id'].'/api_key/'.$_GET['api_key'];
			$result = openURL($url);
			if($result != false)
			{
				$arts 	= json_decode($result, true);
				if(isset($arts['error']))
				{
					$data['error']	= 1;
					if(isset($arts['limited']))
					{
						$data['msg']	= 'Your download limit has been exceeded, please go to 9file.net, upgrade plan of your site and try again!';
					}
					else
					{
						$data['msg']	= 'Data design not found!';
					}
				}
				else
				{
					$params		= '';
					$art_prices	= array();
					foreach((array)$arts as $id => $art)
					{
						if($art['price'] > 0)
						{
							$art_prices[$id]	= $art['price'];
							$art['key']			= 0;
						}
						if($params == '')
							$params		= $id.':'.$art['key'];
						else
							$params		.= ';'.$id.':'.$art['key'];
					}
					if(count($art_prices) > 0)
					{
						$data['error']	= 1;
						$data['msg']	= 'Please payment before download file design!';
					}
					$this->store_art_update($_GET['order_id'], $params, $art_prices, $_GET['api_key']);
				}
			}
			else
			{
				$data['error']	= 1;
				$data['msg']	= 'Data design not found!';
			}		
		}
		echo json_encode($data); exit;
		exit;
	}

	/*
	* Payment clipart of store
	 */
	function store_payment_art()
	{
		if(isset($_POST['e_order_id']) && $_POST['e_order_id'] != '' && isset($_POST['params']) && $_POST['params'] != '')
		{
			
			$e_order_id 	= $_POST['e_order_id'];
			$params 		= $_POST['params'];
			$api 			= $_POST['api'];
			$this->store_art_update($e_order_id, $params, array(), $api);
		}
	}

	/* 
	* update to design of order after paid
	*/
	function store_art_update($design_id, $params, $art_prices = array(), $api = '')
	{
		ini_set("memory_limit", -1);
		ini_set('max_execution_time', 3000);
		$array 		= explode(';', $params);
		
		$arts 		= array();
		for($i=0; $i<count($array); $i++)
		{
			$art 	= explode(':', $array[$i]);
			if(count($art) > 1)
			{
				$arts[$art[0]] = $art[1];
			}
		}
		if (count($arts))
		{
			global $P9f;
			$dg = $P9f->dgClass();
			
			// update sales
			$file = ROOT .DS. 'data' .DS. 'store' .DS. 'arts_info.json';
			if(file_exists($file))
			{
				// call cache
				$cache 		= $dg->cache('store');
				$sales 		= $cache->get('sales');
				if($sales == null)
					$sales 	= array();
				
				$time 		= time();
				$month 		= date('Y_m', $time);
				$day 		= date('d', $time);
				
				if(empty($sales[$month]))
					$sales[$month]	= array();
				
				if(empty($sales[$month][$day]))
					$sales[$month][$day]	= array();
			
				$rows = json_decode( file_get_contents($file), true );
				foreach($arts as $clipar_id => $value)
				{
					if(isset($art_prices[$clipar_id])) continue;
					
					if(isset($rows[$clipar_id]))
					{
						if(isset($rows[$clipar_id]['sales']))
							$rows[$clipar_id]['sales'] = $rows[$clipar_id]['sales'] + 1;
						else
							$rows[$clipar_id]['sales']	= 1;
						
						if( isset($sales[$month][$day][$clipar_id]) )
						{
							$sales[$month][$day][$clipar_id] = $sales[$month][$day][$clipar_id] + 1;
						}
						else
						{
							$sales[$month][$day][$clipar_id] = 1;
						}
					}
				}
				$dg->WriteFile($file, json_encode($rows));
				$cache->set('sales', $sales, 933120000);
			}
			
			$obj 		= explode(':', $design_id);
			if(count($obj) > 1 && $obj[0] != 'cart')
			{
				$cache 	= $dg->cache('design');
				$designs 	= $cache->get($obj[0]);
				if($designs == null)
				{
					$cache 	= $dg->cache('admin');
					$designs 	= $cache->get($obj[0]);
				}
				
				if(isset($designs[$obj[1]]))
				{
					$design		= $designs[$obj[1]];
					if(empty($design['vectors']))
					{
						$detail 			= $cache->get($obj[1]);
						if($detail != null)
						{
							$design 	= array_merge($detail, $design);
						}
					}
				}
				else
				{
					$design		= array();
				}
				$design_id 		= $obj[0];
			}
			else
			{
				$cache 		= $dg->cache('cart');
				$design 		= $cache->get($design_id);
			}
			
			if(isset($design['vectors']))
			{
				$design['vector'] = $design['vectors'];
				unset($design['vectors']);
			}
			
			if(isset($design['vector']))
			{
				if(is_array($design['vector']))
				{
					$vectors = $design['vector'];
				}
				else
				{
					$vectors = json_decode($design['vector'], true);
				}			
				if(count($vectors))
				{
					foreach($vectors as $view => $items)
					{
						if (count($items))
						{
							foreach($items as $id => $item)
							{
								if (isset($item['clipar_type']) && empty($item['clipar_paid']))
								{
									if( isset($art_prices[$item['clipart_id']]) )
									{
										$items[$id]['price'] = $art_prices[$item['clipart_id']];
										continue;
									}
									if( isset( $arts[ $item['clipart_id'] ] ) )
									{									
										$items[$id]['clipar_paid'] = 1;
										if((isset($item['file']) && is_string($item['file']) && $item['file'] == 'svg') || (isset($item['file']['type']) && $item['file']['type'] == 'svg'))
										{
											$svg 	= StorestrSVG($item['svg'], $arts[ $item['clipart_id'] ]);
										}
										else
										{
											$key_active 	= str_replace(' ', '+', $arts[ $item['clipart_id'] ]);
											$svg			= $item['svg'];
											$key 			= md5( $key_active );
											
											$url 			= 'http://api.9file.net/api/orderPNG/id/'.$item['clipart_id'].'/key/'.$key.'/api_key/'.$api;
											$result 		= openURL($url);
											if($result != false)
											{
												$data	= json_decode($result, true);
												if(isset($data['content']))
												{										
													$png 	= encrypt_compress($key_active, base64_decode($data['content']));
													$img 	= 'data:image/png;base64,' . base64_encode($png);
										
													$temp1 = explode('xlink:href="', $item['svg']);
													if(count($temp1) > 1)
													{
														$temp2 = explode('">', $temp1[1]);
														if(count($temp2) > 1)
														{
															$svg 	= $temp1[0] .'xlink:href="'. $img .'">'. $temp2[1];
														}
														
													}
												}
											}
										}
										$items[$id]['svg'] = $svg;
									}
								}
							}
							$vectors[$view]	= $items;
						}
					}
				}
				$design['vector'] = json_encode($vectors);
				if( isset($designs) && isset($obj[1]) && isset($designs[$obj[1]]))
				{
					$cache->set($obj[1], array('vectors' => $design['vector']));
					if(isset($design['vector'])) unset($design['vector']);
					if(isset($design['vectors'])) unset($design['vectors']);

					$designs[$obj[1]] = $design;
					$design = $designs;
				}
				$cache->set($design_id, $design);
			}
		}
	}
}
new P9f_store_ajax();
?>