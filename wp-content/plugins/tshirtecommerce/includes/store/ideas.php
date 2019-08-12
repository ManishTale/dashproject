<div class="store-page woocommerce">
	<?php if( isset($ideas) && isset($ideas['count']) && $ideas['count'] > 0 ){ ?>
	<div class="store-ideas">
		<?php
		// list page
		$number 		= 24;
		$start 		= ($paged - 1) * $number;
		$end 			= $paged*24;
		$i 			= 0;
		$type_added = array();
		foreach($ideas['rows'] as $idea) {
			$i++;
			if($i<$start) continue;
			
			if($start > $end) break;
			$start++;
			if($idea['slug'] == '') $idea['slug'] = 'design';

			$color = '#FFFFFF';
			if(isset($idea['color']))
			{
				$color = '#'.str_replace('#', '', $idea['color']);
			}

			if(empty($type))
			{
				if(isset($idea['types']) && count($idea['types']))
				{
					$design_type = '';
					foreach ($idea['types'] as $type_id)
					{
						if( isset($gallery[$type_id]) )
						{
							$design_type = $type_id;
							$type_added[$type_id] = 1;
							break;
						}
					}
				}
				else
				{
					$design_type = '';
				}
			}
			else
			{
				$design_type = $type;
			}
			if(isset($product_urls[$design_type]))
			{
				$post_id = $product_urls[$design_type];
				$product_url = get_permalink($post_id);
			}
			else
			{
				$post_id = $product_urls[0];
				$product_url = get_permalink($post_id);
			}
			$design_url = $product_url.$idea['id'].'-'.$idea['slug'];

			$gallery_class = '';
			if(empty($gallery[$design_type]))
			{
				$gallery_class = 'gallery-none';
			}
		?>
		<div class="store-idea <?php echo $gallery_class; ?>" data-color="<?php echo $color; ?>" data-type="<?php echo $design_type; ?>">
			<div class="store-idea-thumb">
				<a href="<?php echo $design_url; ?>" target="_bank" title="<?php echo $idea['title']; ?>">
					<img src="<?php echo $idea['thumb']; ?>" style="background-color: <?php echo $color; ?>" atl="<?php echo $idea['title']; ?>">
				</a>
			</div>
		</div>
		
		<?php } ?>
		
		<?php
		$pages = (int) (count($ideas['rows'])/24);
		if(count($ideas['rows']) % 24 > 0)
		{
			$pages = $pages + 1;
		}
		
		$args = array(
			'base'	=> @add_query_arg('paged','%#%'),
			'format' 	=> '?paged=%#%',
			'total'	=> $pages,
			'current'	=> max( 1, get_query_var('paged') ),
			'type'	=> 'list',
		);
		?>
	</div>
	
	<br />
	<hr />
	
	<nav class="woocommerce-pagination">
		<?php echo paginate_links( $args ); ?>
	</nav>
	
	<?php }else{ echo $lang['design_msg_save_found']; } ?>
</div>