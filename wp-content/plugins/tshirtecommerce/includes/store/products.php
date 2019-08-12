<?php
$columns 		= 3;
$number_display 	= 20;
$results 		= count($ideas);
$page_number 	= (int) ($results/$number_display);
if($results % $number_display)
{
	$page_number = $page_number + 1;
}

$page_n 		= 1;
if(isset($_GET['page_n']))
{
	$page_n = (int) $_GET['page_n'];
}
if($page_n < 1) $page_n = 1;
if($page_n > $page_number) $page_n = $page_number;

$start 	= ($page_n-1) * $number_display;
$end 		= $page_n * $number_display;
if($end > $results) $end = $results;

$product_ids = array();

$search_cate = $lang['designer_product_select_category'];
?>
<div class="idea-search">
	<form class="idea-search-box pull-left" method="GET" onsubmit="return searchDesign();" action="<?php echo $design_link; ?>">
		<div class="idea-group">
			<input type="text" name="keyword" class="search-keyword" value="<?php echo $keyword; ?>" placeholder="<?php $lang['designer_store_find']; ?>">
			<button class="idea-btn-icon" type="button">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="16" height="16" viewBox="0 0 451 451" xml:space="preserve"><g><path fill="#666" d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"/></g></svg>
			</button>
		</div>

		<?php if(count($idea_categories)) { ?>
		<div class="idea-dropdown-content">
			<div class="idea-categories">
				<?php
				$remove = '';
				foreach($idea_categories as $idea_cate)
				{
					$span = '';
					$onclick = "onclick=\"searchCate(this, '". $idea_cate['id'] .'-'.sanitize_title($idea_cate['title']) ."')\"";
					if($idea_cate['id'] == $search_cate_id)
					{
						$search_cate = $idea_cate['title'];
						$span = '<span class="search-remove" onclick="searchCate(null, \'\');"><i class="glyph-icon dgflaticon-error"></i></span>';
						$remove = $span;
						$onclick = '';
					}
				?>
				<a href="javascript:void(0);" <?php echo $onclick; ?> title="<?php echo $idea_cate['title']; ?>">
					<img src="<?php echo $idea_cate['thumb']; ?>" alt="<?php echo $idea_cate['title']; ?>">
					<span><?php echo $idea_cate['title']; ?></span>
					<?php echo $span; ?>
				</a>
				<?php } ?>

			</div>
		</div>
		<div class="idea-group">
			<div class="idea-dropdown" onclick="jQuery('.idea-dropdown-content').toggle('slow')">
				<span class="idea-dropdown-text"><?php echo $search_cate; ?></span>
				<span class="idea-dropdown-icon pull-right">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 129 129" width="14" height="14" enable-background="new 0 0 129 129"><g><path fill="#666" d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/></g></svg>
				</span>
			</div>
			<?php echo $remove; ?>
		</div>
		<?php } ?>

		<input type="hidden" class="search-cate_id" value="<?php echo $search_cate_str; ?>">
	</form>
	<div class="pull-right"><strong><?php echo $results; ?> <?php echo $lang['designer_results']; ?></strong></div>
</div>

<div class="store-ideas woocommerce">
	<div class="columns-<?php echo $columns; ?>">

		<?php if(count($ideas)) { ?>
		<ul class="products columns-<?php echo $columns; ?>">

			<?php
			$j = 0;
			if($is_seo == '')
			{
				$seo_product = '';
			}
			else
			{
				$seo_product = '&idea_id=';
			}
			for( $i=$start; $i<$end; $i++){
				$idea = $ideas[$i];

				if($j % $columns == 0)
				{
					$class = 'first';
				}
				elseif($j % $columns == ($columns-1))
				{
					$class = 'last';
				}
				else
				{
					$class = '';
				}
				$j++;
				if(!in_array($idea['product_id'], $product_ids))
				{
					$product_ids[] = $idea['product_id'];
				}

				$woo_product_id = $woo_product_ids[$idea['product_id']];
				$product_url = get_permalink($woo_product_id);

				$slug = $idea['id'].'-'.sanitize_title($idea['title']);
				$product_url = $product_url.$seo_product.$slug;
			?>
			<li <?php echo wc_product_class($class, $woo_product_id); ?>>
				<div class="store-idea design-store-gallery">
					<div class="store-design-wapper item-slideshow" id="store-design-<?php echo $idea['product_id']; ?>-<?php echo $idea['id']; ?>" data-id="<?php echo $idea['product_id']; ?>" data-design_id="<?php echo $idea['id']; ?>" data-color="<?php echo $idea['color']; ?>">
						<div class="store-idea-thumb store-design">
							<a href="<?php echo $product_url; ?>" class="design-thumb">
								<img src="<?php echo $idea['thumb']; ?>" style="background-color:#<?php echo $idea['color']; ?>" alt="<?php echo $idea['title']; ?>">
							</a>
						</div>
						<a onclick="dgslide(this)" class="item-carousel item-control  item-control-left"><i class="dgflaticon-back"></i></a>
						<a onclick="dgslide(this)" class="item-carousel item-control item-control-right"><i class="dgflaticon-next"></i></a>
						<ol class="item-carousel item-indicators">
							<li onclick="dgslide(this)"></li>
						</ol>
						<a href="javascript:void(0);" class="design-view" onclick="d_design.quick_view(this);">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="16" height="16" viewBox="0 0 451 451" xml:space="preserve"><g><path fill="#666" d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"></path></g></svg>
						</a>
						<a href="javascript:void(0);" class="design-zoom-close" onclick="d_design.quick_view(this, 'close');">
							<i class="glyph-icon dgflaticon-cross"></i>
						</a>
					</div>
					<a href="<?php echo $product_url; ?>" class="design-title">
						<?php echo $idea['title']; ?>
					</a>
				</div>
			</li>
			<?php } ?>

		</ul>
		<?php }else{ ?>

		<p><?php echo $lang['designer_js_datafound']; ?></p>
		<?php } ?>
	</div>
</div>
<div class="idea-pagination">
	<div class="idea-display"><?php echo $results; ?> <?php echo $lang['designer_results']; ?></div>
	<div class="idea-pages"><?php echo $lang['designer_nav_page']; ?> 
		<div class="idea-item-group">
			<?php
			$bolor_left = 0;
			$bolor_right = 0;
			if($page_n > 1) {
				$bolor_left = 1;
			?>
			<a href="?page_n=<?php echo ($page_n-1); ?>" class="idea-item idea-item-prev">
				<i class="dgflaticon-back"></i>
			</a>
			<?php } ?>

			<?php 
			if($page_n < $page_number) {
				$bolor_right = 1;
			?>
			<a href="?page_n=<?php echo ($page_n+1); ?>" class="idea-item idea-item-next">
				<i class="dgflaticon-next"></i>
			</a>
			<?php } ?>

			<input type="text" style="border-left-width:<?php echo $bolor_left; ?>px;border-right-width:<?php echo $bolor_right; ?>px;" value="<?php echo $page_n; ?>" class="idea-page-number">
		</div>
		<?php echo $lang['designer_nav_of']; ?> <?php echo $page_number; ?>
	</div>
</div>
<?php
$designs = array();
for($i=0; $i<count($products); $i++)
{
	$product = $products[$i];
	if(in_array($product['id'], $product_ids))
	{
		if(empty($product['box_width'])) $product['box_width'] = 500;
		if(empty($product['box_height'])) $product['box_height'] = 500;
		$designs[$product['id']] = array(
			'width' => $product['box_width'],
			'height' => $product['box_height'],
			'design' => $product['design']
		);
		if(isset($product['gallery']))
		{
			$designs[$product['id']]['gallery'] = $product['gallery'];
		}
	}
}
?>
<script type="text/javascript">
	var product_gallery = '<?php echo base64_encode(json_encode($designs)); ?>';
	function searchDesign(){
		var page_url = '<?php echo $design_link; ?>';
		var keyword = jQuery('.search-keyword').val();
		if(keyword != '')
		{
			keyword = keyword.replace(/ /g, '-');
		}
		var str = '&design=';
		if(page_url.indexOf('?') == -1) str = '/';
		
		page_url = page_url +str+ 'search='+keyword;
		var cate_id = jQuery('.search-cate_id').val();
		if(cate_id != '')
		{
			page_url = page_url +'+'+cate_id;
		}
		window.location.href = page_url;

		return false;
	}
	function searchCate(e, text){
		jQuery('.search-cate_id').val(text);
		jQuery('.idea-dropdown-content').hide('slow');
		searchDesign();
		if(e == null)
		{
			return;
		}
		jQuery('.idea-dropdown-text').html(jQuery(e).find('span').text());
	}
</script>