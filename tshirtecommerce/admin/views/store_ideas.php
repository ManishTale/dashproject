<?php
$rows			= $data['rows'];
$types			= $data['types'];
$categories		= $data['categories'];
$search			= $data['search'];

$start 			= ($data['page'] - 1) * $data['limit'];
$end 			= $data['page'] * $data['limit'];
?>
<style>
.box-detail-title{border-left: 0;}
</style>
<div class="row">
	<div class="col-md-9">
		<form action="<?php echo site_url('index.php/store/ideas'); ?>" method="POST" class="form-inline">
			<div class="row">
				<div class="col-sm-3">
					<input type="text" class="form-control" name="search[keyword]" value="<?php echo $search['keyword']; ?>" id="art-search-keyword" placeholder="Search">
				</div>
				<div class="col-sm-3">
					<select class="form-control" name="search[type_id]">	
						<option value=""> - All Types - </option>
						
						<?php for($i=0; $i<count($types); $i++) { ?>
						<option <?php if($types[$i]['id'] == $search['type_id']) echo 'selected="selected"'; ?> value="<?php echo $types[$i]['id']; ?>"> <?php echo $types[$i]['title']; ?> </option>
						<?php } ?>
					</select>
				</div>

				<div class="col-sm-3">
					<select class="form-control" name="search[cate_id]">
						<option value=""> - Choose a category - </option>
						
						<?php foreach($categories as $cate) {?>
							<option <?php if($cate['id'] == $search['cate_id']) echo 'selected="selected"'; ?> value="<?php echo $cate['id']; ?>"><?php echo $cate['title']; ?></option>
							
							<?php if( isset($cate['children']) && count($cate['children']) ) { ?>
						
								<?php foreach($cate['children'] as $child) { ?>
								
								<option <?php if($child['id'] == $search['cate_id']) echo 'selected="selected"'; ?> value="<?php echo $child['id']; ?>"> &nbsp;&nbsp;&nbsp;- <?php echo $child['title']; ?></option>
								
								<?php } ?>
								
							<?php } ?>
						
						<?php } ?>
					</select>
				</div>
				<div class="col-sm-3 text-left">
					<button type="submit" class="btn btn-primary">Search</button>
				</div>
			</div>
			
			
		</form>
	</div>
	
	<div class="col-sm-3 text-right">
		<a href="<?php echo site_url('admin-template.php?idea=1', false); ?>" class="btn btn-primary" title="Add design template" target="_blank"><i class="glyphicon glyphicon-plus"></i></a>
		<a href="<?php echo MAIN_STORE_URL; ?>tools/design" class="btn btn-default" target="_blank"><i class="fa fa-cloud-upload"></i> Import</a>
		<button type="button" class="btn btn-danger" onclick="store.idea.remove()"><i class="fa fa-trash-o"></i></button>
	</div>
</div>

<hr />

<div class="row">
	<div class="col-md-12 box-idea-store">
		
	<?php if(count($rows)) { ?>
		
		<?php
		$i = -1;
		foreach($rows as $id => $row) {
			$i++;
			if($i < $start) continue;
			
			if($i >= $end) break;
			
		?>
		<div class="box-ideas box-art text-center img-thumbnail">
			
			<a href="<?php echo site_url('index.php/store/idea/'.$row['id']); ?>" title="<?php echo $row['title']; ?>">
				<img src="<?php echo $row['image']; ?>" class="img-responsive" align="middle" alt="">
			</a>
			
			<?php if(isset($row['featured']) && $row['featured'] == 1){ ?>
			<a href="javascript:void(0);" onclick="store.idea.featured(this)" data-featured="1" data-id="<?php echo $id; ?>" class="art-feature" title="Featured">
				<i class="fa fa-star color-success"></i>
			<?php }else{ ?>
			<a href="javascript:void(0);" onclick="store.idea.featured(this)" data-featured="0" data-id="<?php echo $id; ?>" class="art-feature" title="Featured">
				<i class="fa fa-star-o"></i>
			<?php } ?>
			</a>
			
			<div class="box-hover">
				<div class="box-hover-top">
					<a href="<?php echo $row['image']; ?>" target="_blank" class="idea-view" title="View thumb">
						<i class="fa fa-search"></i>
					</a>
					<input onclick="store.idea.remove(this)" type="checkbox" class="idea-remove" value="<?php echo $id; ?>">
				</div>
				
				<div class="box-hover-botton">
					<div class="box-detail-title"><?php echo $row['title']; ?></div>
				</div>
			</div>
		</div>
		<?php } ?>
	
	<?php } else { ?>
		
		<h3>Data Not Found!</h3>
		
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
			  <a href="<?php echo site_url('index.php/store/ideas/1'); ?>" aria-label="Previous">
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
					<li><a href="<?php echo site_url('index.php/store/ideas/'.$i); ?>"><?php echo $i; ?></a></li>
				<?php } ?>
				
			<?php } ?>
			
			<?php if($data['page'] < $data['page_number']) { ?>
			<li>
			  <a href="<?php echo site_url('index.php/store/ideas/'.$data['page_number']); ?>" aria-label="Next">
				Last <span aria-hidden="true">&rarr;</span>
			  </a>
			</li>
			<?php } ?>
		  </ul>
	</div>
</div>
<?php } ?>
<script type="text/javascript">
function fixLayout()
{
	var width = jQuery('.box-idea-store').width();
	var count = parseInt(width/162);
	jQuery('.box-idea-store').find('.box-art').css('width', parseInt(width/count - 16) +'px');
}
fixLayout();
</script>