<?php
$width_box = 230 * count($products);
?>
<div class="store-page">
	<h4><?php echo $lang['designer_more_products']; ?></h4>
	<div class="store-products design-products">
		<div class="store-ideas" style="width: <?php echo $width_box; ?>px;">
		<?php
		$site_url 	= network_site_url();
		$gallery	= array();
		foreach ($products as $product_id => $post) {
			$link = get_permalink($post['ID']);

			if( strpos($link, '?') === false)
			{
				$link = $link.$idea['id'].'-'.$idea['slug'];
			}
			else
			{
				$link = add_query_arg( array('idea_id'=>$design_id), $link);
			}
			
			$gallery[$post['ID']] = $post['gallery'];
		?>
			<div class="store-idea" data-color="#<?php echo $idea['color']; ?>" data-type="<?php echo $post['ID']; ?>">
				<div class="store-idea-thumb">
					<a href="<?php echo $link; ?>">
						<img src="<?php echo $idea['thumb']; ?>" style="background-color: #<?php echo $idea['color']; ?>" alt="<?php echo $post['post_title']; ?>">
					</a>
				</div>
			</div>

		<?php } ?>

		</div>
	</div>
	
	<?php if( isset($same_design) ) {
		if(count($same_design) > 10)
			$width_box = 230 * 10;
		else
			$width_box = 230 * count($same_design);
	?>
	<h4><?php echo $lang['designer_similar_designs']; ?></h4>
	<div class="store-products similar-designs">
		<div class="store-ideas" style="width: <?php echo $width_box; ?>px;">
			<?php
			$i = 0;
			foreach ($same_design as $key => $idea)
			{
				$i++;
				if($i > 10) break;
				$post_id 	= array_rand($gallery, 1);
				
				$link 	= get_permalink($post_id);
				if( strpos($link, '?') === false)
				{
					$link = $link.$idea['id'].'-'.$idea['slug'];
				}
				else
				{
					$link = add_query_arg( array('idea_id'=>$design_id), $link);
				}

				if(empty($idea['color'])) $idea['color'] = 'FFFFFF';
			?>
			<div class="store-idea" data-color="#<?php echo $idea['color']; ?>" data-type="<?php echo $post_id; ?>">
				<div class="store-idea-thumb">
					<a href="<?php echo $link; ?>">
						<img src="<?php echo $idea['thumb']; ?>" style="background-color: #<?php echo $idea['color']; ?>" alt="<?php echo $idea['title']; ?>">
					</a>
				</div>
			</div>
			<?php } ?>
		</div>
	</div>
	<?php } ?>
</div>
<script type="text/javascript">
	var product_gallery = '<?php echo base64_encode(json_encode($gallery)); ?>';
</script>