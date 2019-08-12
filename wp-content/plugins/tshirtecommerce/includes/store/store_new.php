<?
$page_url 	= get_page_link();
$link 	= $page_url;
$is_seo 	= '';
if(stripos($link, '?'))
{
	$is_seo = '&product_cate=';
}
?>
<div class="store-full">
	<div id="dg-secondary">
		<div class="dg-body-left">
			<form action="" method="GET" id="form-store-search">
				<?php if ( count($categories) ) { ?>
				<div class="dg-box">
					<h3 class="box-title"><?php echo $lang['designer_store_find_categories_all']; ?></h3>
					<div class="box-content">
						<ul class="list-product">
							<?php 
							foreach($categories as $cate)
							{
								$active = '';
								if($cate['id'] == $current_cate_parent)
								{
									$active = 'class="active"';
									$link = $page_url .$is_seo. $cate['id'] .'-'. sanitize_title($cate['title']);
								}
								$cate_url = $page_url .$is_seo. $cate['id'] .'-'. sanitize_title($cate['title']);

							?>
							<li <?php echo $active; ?>>
								<a href="<?php echo $cate_url; ?>" title=""><?php echo $cate['title']; ?></a>
							</li>
							<?php } ?>
						</ul>
					</div>
				</div>
				<?php } ?>

				<?php
				$design_link = $link;
				if ( count($categories_child) ) { 
				?>
				<div class="dg-box">
					<h3 class="box-title"><?php echo $lang['design_products']; ?></h3>
					<div class="box-content">
						<ul class="list-product">
							<?php
							foreach($categories_child as $cate) {
								$cate_url = $link .'+'. $cate['id'] .'-'. sanitize_title($cate['title']);

								$active = '';
								if($cate['id'] == $current_cate_child)
								{
									$active = 'class="active"';
									$design_link = $link .'+'. $cate['id'] .'-'. sanitize_title($cate['title']);
								}
							?>
							<li <?php if($cate['id'] == $current_cate_child) echo 'class="active"'; ?>>
								<a href="<?php echo $cate_url; ?>" title=""><?php echo $cate['title']; ?></a>
							</li>
							<?php } ?>
						</ul>
					</div>
				</div>
				<?php } ?>
			</form>
		</div>
	</div>

	<div class="dg-content">
		<button type="button" class="dg-finter" onclick="jQuery('#dg-secondary').toggle('slow')"><?php echo $lang['designer_store_find']; ?></button>
		<div class="dg-body-right">
			<?php include_once('products.php'); ?>
		</div>
	</div>
</div>