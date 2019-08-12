<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-01-10
 * 
 * API
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */

error_reporting(0);
session_start();

define('ROOT', dirname(__FILE__));
define('DS', DIRECTORY_SEPARATOR);

include_once ROOT .DS. 'includes' .DS. 'functions.php';

// call language
$dg = new dg();
$lang = $dg->lang();

$is_admin = false;

// check is admin
if (isset($_SESSION['is_admin']))
{
	$user = $_SESSION['is_admin'];
	if (isset($user['login']) && $user['login'] == true)
	{
		$is_admin = true;
		$user['login'] = true;
		$_SESSION['admin'] = $user;		
	}
}
if ($is_admin === false)
{
	echo 'Directory access is forbidden'; exit;
}

$site_url = $dg->url();

// call products
$products 	= $dg->getProducts();
$product_designs = array();
if ($dg->platform == 'wordpress')
{
	$product_design = $dg->openURL(str_replace('tshirtecommerce/', '', $site_url).'wp-admin/admin-ajax.php?action=woo_products_design');
	$product_designs = json_decode($product_design, true);
}elseif ($dg->platform == 'opencart')
{
	$product_design = $dg->openURL(str_replace('tshirtecommerce/', '', $site_url).'index.php?route=tshirtecommerce/designer/getProductDesign');
	$product_designs = explode(',',$product_design);
}

$url 	= $_SERVER['REQUEST_URI'];
$params = explode('admin-blank.php?/', $url);
if (count($params) > 1)
	$design_id = (int) $params[1];
else
	$design_id = '';

// Search.
$search = '';
if(isset($_GET['search']))
	$search = $_GET['search'];

// Standardize Product Data.
if(count($products))
{
	$productData = array();
	foreach($products as $val)
	{
		if($search != '' )
		{
			if(strpos(strtolower($val->title), strtolower($search)) !== false)
			{
				if($val->id == $design_id || !in_array($val->id, $product_designs))
					$productData[] = $val;
			}
		}else
		{
			if($val->id == $design_id || !in_array($val->id, $product_designs))
				$productData[] = $val;
		}
	}
	$products = $productData;
}

// Paginition.
$segment = 12;
if(isset($_GET['segment']))
	$segment = $_GET['segment'];

$perpage = 12;
$segment_product = 0;
$segment_design = 0;

if($segment != '')
{
	if(isset($_GET['page']) && $_GET['page'] == 'product')
		$_SESSION['segment_product'] = $segment;
	else
		$_SESSION['segment_design'] = $segment;
	
	if(!empty($_SESSION['segment_product']))
		$segment_product = $_SESSION['segment_product'];
	if(!empty($_SESSION['segment_design']))
		$segment_design = $_SESSION['segment_design'];
}
else
{
	$_SESSION['segment_product'] = 0;
	$_SESSION['segment_design'] = 0;
}

// Products
$sort_product = array();

if(count($products))
{
	//sort array().
	foreach($products as $key=>$val)
	{
		$count = 0;
		$vl = array();
		foreach($products as $k=>$v)
		{
			if($count <= $k && !isset($sort_product[$k]))
			{
				$count = $k;
				$vl = $v;
			}
		}
		$sort_product[$count] = $vl;
	}
}

$pageproduct = array(); 
	
$j = 1;
foreach($sort_product as $key=>$val)
{
	if($j > $segment_product && $j <= ($perpage+$segment_product))
		$pageproduct[$key] = $sort_product[$key];
	$j++;
}

if($perpage < count($sort_product))
	$page_product = $perpage;
else
	$page_product = 0;
$products = $pageproduct;
$total_product = count($sort_product);
?>

<?php if(!isset($_GET['page'])){ ?>
<div id="products-admin" role="tabpanel">
<?php } ?>
	<ul class="nav nav-tabs" role="tablist">
		<li role="presentation" class="active"><a href="#product-design" aria-controls="product-design" role="tab" data-toggle="tab">Product Design</a></li>
		<li class="col-xs-7 col-md-5 col-lg-3">
			<div class="input-group">
				<input id="searchProduct" class="form-control input-sm" type="text" name="search" value="<?php echo $search; ?>" placeholder="Product name">
				<span class="input-group-btn">
					<button class="btn btn-primary btn-sm" type="button" onclick="pagination('0', 'product')">Search</button>
				</span>
			</div>
		</li>
	</ul>
	
	<div class="tab-content" style="max-height: auto; overflow: unset;">
		<div role="tabpanel" class="tab-pane<?php if((isset($_GET['page']) && $_GET['page'] == 'product') || !isset($_GET['page'])) echo ' active'; ?>" id="product-design">
			
			<div class="design-tab-content">
				<div class="list-products" style="max-height: 400px; overflow: auto;">
					<?php 
						if(count($products))
						{
							foreach($products as $product) 
							{
					?>
								<div class="col-xs-4 col-sm-3 col-md-2" style="margin-right: -4px;">
									<div class="form-group">
										<a class="img-thumbnail add-link modal-link" href="javascript:void(0);" data-id="<?php echo $product->id; ?>" data-title="<?php echo $product->title; ?>">
											<img src="<?php echo imageURL($product->image, $site_url); ?>" class="img-responsive" alt="<?php echo $product->title; ?>">
											<br />
											<center><?php echo $product->title; ?></center>
										</a>
									</div>
								</div>
					<?php 
							}
						}else
						{
							echo '<p style="margin: 0px 15px;">Product design not found. Please create new and choose again!</p>';
						}
					?>
				</div>
				<div class="dataTables_paginate paging_bootstrap pull-right">
					<div class="col-md-12">
						<?php
							if(!empty($page_product))
							{
								$page = $total_product/$page_product;
								if($page > (int)$page)
									$page = (int)$page + 1;
								$start = $segment_product/$page_product;
								
								$div = 0;
								if($start > (int)$start)
								{
									$div = $start - (int)$start;
									$start = (int)$start + 1;
								}
								if($page > 5)
								{
									$pageall = true;
									if($start > 1)
									{
										$start = $start - 2;
										if($page > $start+5)
											$page = $start+5;
									}else
									{
										$start = 0;
										$page = 5;
									}
								}else
								{
									$pageall = false;
									$start = 0;
								}
									
								echo '<ul class="pagination" style="margin-top: 10px; margin-bottom: 0px;">';
								if($segment_product != 0)
								{
									if($pageall)
										echo '<li><a href="javascript:void(0);" onclick="pagination(0, \'product\')"><span aria-hidden="true">&laquo;</span></a></li>';
									echo '<li><a href="javascript:void(0);" onclick="pagination('.($segment_product-$page_product).', \'product\')"><span aria-hidden="true">&laquo;</span></a></li>';
								}
								for($i = $start; $i<$page; $i++)
								{
									if(($i)*$page_product == $segment_product && $div == 0)
										echo '<li class="active"><a href="javascript:void(0);">'.($i+1).'</a></li>';
									elseif(($i+$div-1)*$page_product == $segment_product && $div != 0)
										echo '<li class="active"><a href="javascript:void(0);">'.($i+1).'</a></li>';
									else
										echo '<li><a href="javascript:void(0);" onclick="pagination('.($i*$page_product).', \'product\')">'.($i+1).'</a></li>';
								}
								if(($segment_product+$page_product) < $total_product)
								{
									echo '<li><a href="javascript:void(0);" onclick="pagination('.($segment_product+$page_product).', \'product\')"><span aria-hidden="true">&raquo;</span></a></li>';
									if($pageall)
										echo '<li><a href="javascript:void(0);" onclick="pagination('.($total_product-$page_product).', \'product\')"><span aria-hidden="true">&raquo;</span></a></li>';
								}
							}
						?>
					</div>
			   </div>
			</div>
			
		</div>			
	</div>
	<script type="text/javascript">
		jQuery('.add-link').click(function(){
			app.admin.add(this);
		});
		jQuery('#searchProduct').keypress(function (e){
			if (e.which == 13) {
				pagination(0, 'product');
			}
		});
	</script>
<?php if(!isset($_GET['page'])){ ?>
</div>

<script type="text/javascript">
	function pagination(segment, page)
	{
		var search = jQuery('#searchProduct').val();
		jQuery.ajax({
			type: "GET",
			url: '<?php echo $site_url; ?>tshirtecommerce/admin-blank.php?/<?php echo $design_id; ?>&segment='+segment+'&page='+page+'&search='+search,
			dataType: 'html',
			beforeSend: function(){
				jQuery('#product-design').css('opacity', '0.1');
			},
			success: function(data){
				if(data != '')
				{
					jQuery('#products-admin').html(data);
				}
				jQuery('#product-design').css('opacity', '1');
				app.admin.ini();
			},
		});
	}
</script>
<?php } ?>