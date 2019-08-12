<?php
$method 		= $data['method'];
$search 		= $data['search'];
$arts 		= $data['arts'];
$info 		= $data['info'];
$start 		= ($data['page'] - 1) * $data['limit'];
$end 			= $data['page'] * $data['limit'];
$subcategories 	= array();
?>
<?php if(count($data['categories'])) { ?>
<script type="text/javascript">
var store_categories = {};
	<?php foreach($data['categories'] as $cate) { ?>
	
		store_categories[<?php echo $cate['id']; ?>] = {};
		
		<?php if( isset($cate['children']) && count($cate['children']) ) {?>
		
		<?php foreach($cate['children'] as $children) {
			if(isset($search['subcate']) && $search['subcate'] == $children['id'])
			{
				$cate_id = $cate['id'];
				$subcategories = $cate['children'];
			}
		?>
		store_categories[<?php echo $cate['id']; ?>][<?php echo $children['id']; ?>] = '<?php echo addslashes($children['title']); ?>';
		<?php } ?>
		
		<?php } ?>
		
	<?php } ?>
</script>
<?php } ?>
<div class="row">
	
	<div class="col-sm-9">
		<form action="<?php echo site_url('index.php/store/arts'); ?>" method="POST" class="form-inline">
			<div class="row">
				<div class="col-sm-2">
					<input type="text" class="form-control" name="search[keyword]" value="<?php echo $search['keyword']; ?>" id="art-search-keyword" placeholder="Search">
				</div>

				<div class="col-sm-3">
					<select class="form-control" name="search[cate]" id="art-search-cate" onchange="store.art.categories(this);">
						<option value=""> - Choose a category - </option>
						
						<?php if(count($data['categories'])) { ?>
						
						<?php foreach($data['categories'] as $cate) { ?>
						<option <?php if($search['cate'] == $cate['id']) echo 'selected="selected"'; ?> value="<?php echo $cate['id']; ?>"><?php echo $cate['title']; ?></option>
						<?php } ?>
						
						<?php } ?>
					</select>
				</div>

				<div class="col-sm-3">
					<select class="form-control art-subcategories" name="search[subcate]" id="art-search-subcate">
						<option value=""> - Choose a category - </option>
						
						<?php if(count($subcategories)) { ?>
							
							<?php foreach($subcategories as $cate) { ?>
							<option <?php if($search['subcate'] == $cate['id']) echo 'selected="selected"'; ?> value="<?php echo $cate['id']; ?>"><?php echo $cate['title']; ?></option>
							<?php } ?>
							
						<?php } ?>
					</select>
				</div>

				<div class="col-sm-2">
					<select class="form-control" name="search[sort]">
						<option value="featured" <?php if($search['sort'] == 'featured') echo 'selected="selected"'; ?>>Sort by: Featured</option>
						<option value="newest" <?php if($search['sort'] == 'newest') echo 'selected="selected"'; ?>>Sort by: Newest arts</option>
						<option value="sellers" <?php if($search['sort'] == 'sellers') echo 'selected="selected"'; ?>>Sort by: Best sellers</option>
						<option value="views" <?php if($search['sort'] == 'views') echo 'selected="selected"'; ?>>Sort by: Best Views</option>
						<option value="price_down" <?php if($search['sort'] == 'price_down') echo 'selected="selected"'; ?>>Sort by: Price low to high</option>
						<option value="price_up" <?php if($search['sort'] == 'price_up') echo 'selected="selected"'; ?>>Sort by: Price high to low</option>
					</select>
				</div>
				<div class="col-sm-2">
					<button type="submit" class="btn btn-primary">Search</button>
				</div>
			</div>
		</form>
	</div>
	<div class="col-sm-3 text-right">
		<a href="<?php echo site_url('index.php/clipart/edit'); ?>" class="btn btn-primary" title="Add New"><i class="fa fa-plus"></i></a>
		<a href="<?php echo MAIN_STORE_URL; ?>tools/clipart" class="btn btn-default" target="_blank"><i class="fa fa-cloud-upload"></i> Import</a>
		<button type="button" class="btn btn-danger" onclick="store.art.remove()"><i class="fa fa-trash-o"></i></button>
	</div>
</div>

<hr />

<div class="row">
	<div class="col-sm-12 box-art-store">
	<?php if (count($arts)) { ?>
	
	<?php 
	for($i=$start; $i<$end; $i++){
		if(empty($arts[$i])) break;		
		$art = $arts[$i];
		if (empty($info[$art['id']])) continue;
		
		$art	= $info[$art['id']];
		if(isset($art['is_added_store']) && $art['is_added_store'] == 1)
		{
			$art['thumb'] = $art['url'].$art['thumb'];
			$art['medium'] = $art['url'].$art['medium'];
			$art['thumb'] = str_replace('///', '/', $art['thumb']);
			$art['medium'] = str_replace('///', '/', $art['medium']);
		}
	?>
	<div class="box-art text-center img-thumbnail">
		<a href="<?php echo site_url('index.php/store/edit/arts/'.$art['id']); ?>" title="<?php echo $art['title']; ?>">
			<img src="<?php echo $art['thumb']; ?>" alt="<?php echo $art['title']; ?>" align="middle" class="img-responsive">
		</a>

		<?php if( isset($art['feature']) && $art['feature'] == 1) { ?>
			<a href="javascript:void(0);" onclick="store.art.featured(this)" data-featured="1" data-id="<?php echo $art['id']; ?>" class="art-feature" title="Featured">
				<i class="fa fa-star color-success"></i>
			</a>
		<?php }else{ ?>
			<a href="javascript:void(0);" onclick="store.art.featured(this)" class="art-feature" data-featured="0" data-id="<?php echo $art['id']; ?>" title="UnFeatured">
				<i class="fa fa-star-o"></i>
			</a>
		<?php } ?>
		
		<div class="box-hover">
			<div class="box-hover-top">
				<a href="<?php echo $art['medium']; ?>" target="_blank" class="art-view" title="View thumb">
					<i class="fa fa-search"></i>
				</a>
				
				<input onclick="store.art.remove(this)" type="checkbox" class="art-remove" value="<?php echo $art['id']; ?>">
			</div>
			
			<div class="box-hover-botton">
				<div class="box-detail-price">
					<?php echo $method->setPrice($art['price']); ?>
				</div>
				<div class="box-detail-title">
					<?php echo $art['title']; ?>
				</div>
			</div>
		</div>
	</div>
	<?php } ?>
	
	<?php } else { ?>
		Data not found!
	<?php } ?>
	</div>
</div>

<?php if ($data['page_number'] > 1) { ?>
<hr />
<div class="row">
	<div class="col-sm-12">
		<ul class="pagination pull-right">
			<?php if($data['page'] > 1) { ?>
			<li>
			  <a href="<?php echo site_url('index.php/store/arts/1'); ?>" aria-label="Previous">
				<span aria-hidden="true">&larr;</span> First
			  </a>
			</li>
			<?php } ?>
			<?php
				$start = 1;
				for($i=0; $i<=3; $i++)
				{
					if($data['page'] - $i > 0)
					{
						$start = $data['page'] - $i;
					}
					else
					{
						break;
					}
				}
				
				$next = $data['page_number'];
				for($i=0; $i<=3; $i++)
				{
					if($data['page'] + $i <= $data['page_number'])
					{
						$next = $data['page'] + $i;
					}
					else
					{
						break;
					}
				}
				if ($next > $data['page_number']) $next = $data['page_number'];
			?>
			
			<?php for($i=$start; $i<=$next; $i++) { ?>
			
				<?php if($i == $data['page']) { ?>
					<li class="active"><a href="#"><?php echo $i; ?></a></li>
				<?php } else {  ?>
					<li><a href="<?php echo site_url('index.php/store/arts/'.$i); ?>"><?php echo $i; ?></a></li>
				<?php } ?>
				
			<?php } ?>
			
			<?php if($data['page'] < $data['page_number']) { ?>
			<li>
			  <a href="<?php echo site_url('index.php/store/arts/'.$data['page_number']); ?>" aria-label="Next">
				Last <span aria-hidden="true">&rarr;</span>
			  </a>
			</li>
			<?php } ?>
		  </ul>
	</div>
</div>
<?php } ?>
<?php if($search['cate'] != '') { ?>
<script type="text/javascript">
jQuery(document).ready(function(){
	store.art.categories(document.getElementById('art-search-cate'));
});
</script>
<?php } ?>
<script type="text/javascript">
function fixLayout()
{
	var width = jQuery('.box-art-store').width();
	var count = parseInt(width/162);
	jQuery('.box-art-store').find('.box-art').css('width', parseInt(width/count - 16) +'px');
}
fixLayout();
</script>