<?php
/**
* Import data from store
*/
class P9f_Import
{
	function __construct()
	{
		$this->download_url 	= MAIN_STORE_URL.'download/index/';
		$this->import_url 		= MAIN_STORE_URL.'import/index';
		$this->product_img 		= MAIN_STORE_URL.'products_data/tshirtecommerce/';

		add_action( 'wp_ajax_import_product_design', array($this, 'import_product_design') );
		add_action( 'wp_ajax_p9f_download_design', array($this, 'download_design') );
		add_action( 'wp_ajax_p9f_download_your_design', array($this, 'download_your_design') );

		add_action( 'init', array($this, 'wp_init') );

		/* add menu imports */
		add_action( 'tshirtecommerce_menu', array($this, 'import_menu') );
	}

	/* import menu */
	public function import_menu()
	{
		add_submenu_page( 'online_designer', 'T-shirt eCommerce', 'Import Data', 'administrator', 'designer_imports', 'designer_imports');
	}

	function wp_init()
	{
		if(isset($_GET['imports_9file']))
		{
			$options = $_GET['imports_9file'];
			$url = site_url('wp-admin/admin.php?page=designer_imports').'&'.base64_decode($options);
			wp_redirect($url);
			exit();
		}
	}

	public function set_init($api, $site_id)
	{
		global $TSHIRTECOMMERCE_ROOT;

		$this->api 			= $api;
		$this->site_id 		= $site_id;
		$this->addAPI();
		$this->product_file 	= $TSHIRTECOMMERCE_ROOT.'data/import/products.json';
	}

	/* add api key to store */
	public function addAPI()
	{
		global $TSHIRTECOMMERCE_ROOT;

		$file 	= $TSHIRTECOMMERCE_ROOT.'data/settings.json';
		if( file_exists($file) )
		{
			$content = file_get_contents($file);
			$settings = json_decode($content, true);

			if( isset($settings['store']) && isset($settings['store']['api']) )
			{
				$settings['store']['api'] = $this->api;
			}
			else
			{
				$settings['store'] = array(
					'enable' => 1,
					'verified' => 1,
					'auto_download' => 1,
					'your_clipart' => 1,
					'exchange_rate' => '0.2',
					'api' => $this->api,
				);
			}
			write_to_file(json_encode($settings), $file);
		}
	}

	public function getLinkDownload()
	{
		$url = $this->download_url.$this->task.'/'.$this->api.'/'.$this->site_id;

		return $url;
	}

	function download_design()
	{
		$result 	= array(
			'error' 	=> 1,
			'mgs'		=> "Your server not support download and unzip file."
		);
		if($_POST['link'])
		{
			global $TSHIRTECOMMERCE_ROOT;
			$link 	= $_POST['link'];
			$data 	= openURL($link);
			if ($data != false && strlen($data) > 100)
			{
				$path 	= $TSHIRTECOMMERCE_ROOT . 'data/store/';
				$file 	= $path . 'store.zip';
				if(file_put_contents($file, $data))
				{
					WP_Filesystem();
					$unzipfile = unzip_file( $file, $path);
					if ( $unzipfile )
					{
						$result['error'] = 0;
					}
				}
				unlink($file);
			}
			else
			{
				$result['mgs'] 	= 'Data not found!';
			}
		}
		echo json_encode($result);
		exit();
	}

	/*
	* download clipart & design template
	 */
	public function design()
	{
		global $TSHIRTECOMMERCE_ROOT;
		$link 	= $this->getLinkDownload();

		$folder 	= $TSHIRTECOMMERCE_ROOT.'data/store/';

		ob_start();
		include_once(dirname(__FILE__).'/setup/import_design.php');
		$content = ob_get_contents();
   		ob_end_clean();
		return $content;
	}

	/*
	* Import clipart of customers using tools of store
	 */
	public function cliparts()
	{
		global $TSHIRTECOMMERCE_ROOT;
		$link 	= $this->getLinkDownload();
		
		$downloaded = false;

		$data 	= openURL($link);
		if ($data != false && strlen($data) > 100)
		{
			$path 	= $TSHIRTECOMMERCE_ROOT . 'data/import/';
			$file 	= $path . 'cliparts.json';
			if(file_put_contents($file, $data))
			{
				$downloaded = true;
			}
		}

		$folder 	= $TSHIRTECOMMERCE_ROOT.'data/import/';

		ob_start();
		include_once(dirname(__FILE__).'/setup/import_cliparts.php');
		$content = ob_get_contents();
   		ob_end_clean();
		return $content;
	}

	/* 
	* Download add design template of customers
	*/
	public function your_design($task = '')
	{
		global $TSHIRTECOMMERCE_ROOT, $user_ID;
		$link 	= $this->getLinkDownload();
		
		$user_id 	= md5($user_ID);
		$downloaded = false;
		$data 		= openURL($link);
		$file_name 	= 'designs'.$task.'.txt';
		if ($data != false && strlen($data) > 100)
		{
			$path 	= $TSHIRTECOMMERCE_ROOT . 'data/import/';
			$file 	= $path . $file_name;
			if(file_put_contents($file, $data))
			{
				$downloaded = true;
			}
		}

		$folder 	= $TSHIRTECOMMERCE_ROOT.'data/import/';

		ob_start();
		include_once(dirname(__FILE__).'/setup/import_your_design.php');
		$content = ob_get_contents();
   		ob_end_clean();
		return $content;
	}

	public function download_your_design()
	{
		if( isset($_POST['site_id']) && isset($_POST['api']) )
		{
			global $TSHIRTECOMMERCE_ROOT;
			$link 	= $this->download_url.'vectors/'.$_POST['api'].'/'.$_POST['site_id'];
			$data 	= openURL($link);
			if ($data != false && strlen($data) > 100)
			{
				$path 	= $TSHIRTECOMMERCE_ROOT . 'cache/admin/';
				$file 	= $path . 'designs.zip';
				if(file_put_contents($file, $data))
				{
					WP_Filesystem();
					$unzipfile = unzip_file( $file, $path );
					if($unzipfile)
					{
						$folders = glob($path . 'user*' , GLOB_ONLYDIR);
						if(isset($folders[0]))
						{
							$folder 	= $folders[0];
							$files 	= glob($folder . '/*.txt');
							for($i=0; $i<count($files); $i++)
							{
								$file_name 	= str_replace($folder.'/', '', $files[$i]);
								rename($files[$i], $path.$file_name);
							}
							unlink($folder);
						}
					}
				}
				unlink($file);
			}
		}
		exit;
	}

	function displayProducts($products)
	{
		$product_img 	= $this->product_img;
		ob_start();
		include_once(dirname(__FILE__).'/setup/import.php');
		$content = ob_get_contents();
   		ob_end_clean();
		
		return $content;
	}

	public function download_products()
	{
		global $TSHIRTECOMMERCE_ROOT;

		$download_url  	= $this->getLinkDownload();
		$content 		= openURL($download_url);
		$html 		= '';
		if($content === false)
		{
			$html = '<div class="notice notice-error">'
					.'<h3>Your server not allow connect to our server and download file. Please do step by step to import</h3>'
					.'<p>1. Please download file <a href="'.$download_url.'" target="_blank">products.json</a></p>'
					.'<p>2. Upload file products.json to folder <strong>'.$TSHIRTECOMMERCE_ROOT.'data/import</strong></p>'
					.'<p>3. Reload this page and try again.</p>'
				.'</div>';
		}
		else
		{
			$data = json_decode($content, true);
			if(isset($data['error']))
			{
				$html 	= '<h3 class="notice notice-error"><strong>Data not found</strong></h3>';
			}
			else
			{
				write_to_file($content, $this->product_file);
				$html = $this->displayProducts($data);
			}
		}

		return $html;
	}

	public function loadProducts()
	{
		$content 	= file_get_contents($this->product_file);
		$data 	= json_decode($content, true);
		$html 	= $this->displayProducts($data);

		return $html;
	}

	function import_product_design() {
		$added = 0;
		if( isset($_POST['id']) )
		{
			global $TSHIRTECOMMERCE_ROOT;
			$file_products 	= $TSHIRTECOMMERCE_ROOT.'data/import/products.json';
			if( isset($_POST['remove']) && $_POST['remove'] == 1 )
			{
				unlink($file_products);
				echo 1;
				exit();
			}

			$id = $_POST['id'];
			if(file_exists($file_products))
			{
				$content 	= file_get_contents($file_products);
				$products 	= json_decode($content, true);
				if(count($products))
				{
					foreach($products as $product)
					{
						if($id == $product['id'])
						{
							$data = $product;
							break;
						}
					}

					if(isset($data))
					{
						$data 	= $this->woo_add_product($data);
						$added 	= $data['image'];
					}
				}
			}
		}
		echo $added;
		wp_die();
	}

	/*
	* Add data of product fromm file import to file products.json
	 */
	public function add_product($data)
	{
		global $TSHIRTECOMMERCE_ROOT;
		$file 	= $TSHIRTECOMMERCE_ROOT.'data/products.json';
		$content 	= file_get_contents($file);

		$design_id 	= 0;
		if( $content != false )
		{
			$row 	= json_decode($content, true);
			if( count($row) && isset($row['products']) )
			{
				$added 	= false;
				if(count($row['products']))
				{
					foreach ($row['products'] as $i => $product)
					{
						if($product['sku'] == $data['sku'])
						{
							$added 	= true;
							$design_id	= $product['id'];
							$data['id'] = $design_id;
							$row['products'][$i] = $data;
							break;
						}
						else
						{
							if($product['id'] > $design_id){
								$design_id = $product['id'];
							}
						}
					}
				}
				if($added === false)
				{
					$design_id 			= $design_id + 1;
					$data['id']			= $design_id;
					$row['products'][] 	= $data;

					$content 			= json_encode($row);
					write_to_file($content, $file);
				}
			}
		}

		return $design_id;
	}

	function woo_add_product($data)
	{
		if(count($data) == 0) return;

		$product_id = wc_get_product_id_by_sku($data['sku']);
		if($product_id > 0) return;

		$data = $this->download_images($data);

		$design_id 	= $this->add_product($data);
		if($design_id > 0)
		{
			$product = array();
			$product['title']			= $data['title'];
			$product['short_description']	= $data['description'];
			$product['description']		= $data['description'];
			$product['regular_price']	= $data['price'];
			$product['sku']			= $data['sku'];
			
			if($data['image'] != '')
			{
				$product['images'] = array();
				$product['images'][] = array(
					'src' => $data['image'],
					'position' => 0
				);
			}

			include_once( dirname(dirname(__FILE__)).'/helper/class-wc-api-products.php' );
			$api 		= new TShirt_API_Products();
			$id 		= $api->create_product($product);
			if ($id > 0)
			{
				$options_value = array(
					array(
						'_product_id' => $design_id,
						'_product_title_img' => $data['title'],
					)
				);				
				update_post_meta( $id, 'wc_productdata_options', $options_value );
			}
		}
		return $data;
	}

	function download_images($data)
	{
		if( strpos($data['image'], 'http') === false )
		{
			$data['image'] 	= $this->product_img . $data['image'];
		} 
		return $data;
	}

	public function writeImg($img)
	{
		global $TSHIRTECOMMERCE_ROOT;
		$img 		= str_replace('//', '/', $img);
		$options 	= explode('/', $img);
		$path 	= dirname($TSHIRTECOMMERCE_ROOT);
		for($i=0; $i<(count($options)-1); $i++)
		{
			$path .= '/'.$options[$i];
			if (!file_exists($path))
			{
				mkdir($path, 0755, true);
			}
		}
		$path 	= dirname($TSHIRTECOMMERCE_ROOT).'/'.$img;
		if(!file_exists($path))
		{
			$src 		= $this->product_img.$img;
			$ch 		= curl_init($src);
			$fp 		= fopen($path, 'wb');
			curl_setopt($ch, CURLOPT_FILE, $fp);
			curl_setopt($ch, CURLOPT_HEADER, 0);
			curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
			curl_exec($ch);
			curl_close($ch);
			fclose($fp);
		}
	}
}
$P9f_Import = new P9f_Import();

function designer_imports()
{
	global $TSHIRTECOMMERCE_ROOT, $P9f_Import, $P9f;

	$product_url 	= $P9f_Import->import_url;
	$site_url 		= site_url().'|'.'wp-admin/admin.php?page=designer_imports';
	$site_name 		= get_bloginfo();

	$html 		= '';

	if(isset($_GET['api']) && $_GET['api'] != '' && isset($_GET['task']) && $_GET['task'] != '' && isset($_GET['site_id']) && $_GET['site_id'] != '')
	{
		$P9f_Import->set_init($_GET['api'], $_GET['site_id']);
		
		$task 		= $_GET['task'];

		$P9f_Import->task = $task;
		if($task == 'products')
		{
			if( file_exists($P9f_Import->product_file) )
			{
				$html = $P9f_Import->loadProducts();
			}
			else
			{
				$html = $P9f_Import->download_products();
			}
		}
		elseif($task == 'design')
		{
			$html 	= $P9f_Import->design();
		}
		elseif($task == 'cliparts')
		{
			$html 	= $P9f_Import->cliparts();
		}
		elseif($task == 'designidea')
		{
			$html 	= $P9f_Import->your_design();
		}
		elseif($task == 'customIdea')
		{
			$html 	= $P9f_Import->your_design('customIdea');
		}
		elseif($task == 'customClipart')
		{
			$html 	= $P9f_Import->your_design('customClipart');
		}
	}

	$settings 		= $P9f->settings;
	$purchased 		= '';
	$url 			= '#';
	if(isset($settings['verified_code']) && $settings['verified_code'] == '1')
	{
		$purchased 	= $settings['purchased_code'];
		$url 		= $product_url.'?name='.base64_encode($site_name).'_'.$purchased.'&returnUrl='.base64_encode($site_url);
	}
	else
	{
		$html 	= '<h3><span style="color: red;">Please verifiy purchased code and continue import data!</span> <a href="'.site_url('wp-admin/admin.php?page=online_designer_config').'">Verifiy Now!</a></h3>';
	}
	include_once(dirname(__FILE__).'/setup/imports.php');
}
?>