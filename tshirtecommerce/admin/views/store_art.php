<?php
$art 			= $data['art'];
if(isset($art['is_added_store']) && $art['is_added_store'] == 1)
{
	$art['thumb'] = $art['url'].$art['thumb'];
	$art['medium'] = $art['url'].$art['medium'];
	$art['thumb'] = str_replace('///', '/', $art['thumb']);
	$art['medium'] = str_replace('///', '/', $art['medium']);
}

$categories 	= $data['categories'];
$tags 		= '';
if(empty($art['tags'])) $art['tags'] = array();

if(count($art['tags']))
{
	foreach($art['tags'] as $tag)
	{
		if ($tags == '')
		{
			$tags = $tag;
		}
		else
		{
			$tags = $tags .','. $tag;
		}
	}
}
$cate_id = 0;
$subcategories = array();
?>
<?php if(count($categories)) { ?>
<script type="text/javascript">
var store_categories = {};
	<?php foreach($categories as $cate) { ?>
	
		store_categories[<?php echo $cate['id']; ?>] = {};
		
		<?php if( isset($cate['children']) && count($cate['children']) ) {?>
		
		<?php foreach($cate['children'] as $children) {
			if($art['cate_id'] == $children['id'])
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
<form method="POST" action="<?php echo site_url('index.php/store/edit/'.$data['type'].'/'.$data['id']); ?>">
	<div class="row">
		<div class="col-md-12">
			<?php if($data['save']) echo '<p class="pull-left btn btn-xs btn-success"><i class="clip-checkmark-2"></i> Save success</p>'; ?>
			<p class="pull-right">			
				<button type="submit" class="btn btn-success btn-save"><i class="fa fa-floppy-o" aria-hidden="true"></i> Save</button>
				<a href="<?php echo site_url('index.php/store/'.$data['type']); ?>" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i> Close</a>
				<a href="<?php echo site_url('index.php/store/edit/'.$data['type'].'/'.$data['id']); ?>" class="btn btn-default"><i class="fa fa-refresh" aria-hidden="true"></i> Reload</a>
			</p>
		</div>
	</div>
	<hr />
	
	<div class="row">
		<div class="col-md-6">
			<div class="panel panel-default">
				<div class="panel-heading"><i class="clip-pencil-3"></i> Edit Clipart</div>
				
				<div class="panel-body">
					<div class="form-group">
						<label>Title</label>
						<input type="text" class="form-control" value="<?php echo $art['title']; ?>" name="data[title]">
					</div>					
					<div class="form-group">
						<label>Price</label>
						<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">$</span>
							<input type="text" class="form-control" value="<?php echo $art['price']; ?>" name="data[price]">
						</div>
						<p class="text-muted"><small>This price is USD but in front end, system automatic convert to your currency. <a href="<?php echo site_url('index.php/settings#shop'); ?>">Setup exchange rate</a></small></p>
					</div>
					
					<?php if(count($categories)) { ?>
					<div class="form-group">
						<div class="row">
							<div class="col-md-12">
								<label>Category</label>
							</div>
						</div>
						
						<div class="row">
							<div class="col-md-6 col-sm-6">
								<select class="form-control" onchange="store.art.categories(this);">
									<option value="0"> - Select a category <?php echo $art['cate_id']; ?> - </option>
									
									<?php foreach($categories as $cate) { if($cate['parent_id'] != 0) continue; ?>
									<option <?php if($cate_id == $cate['id'] || $art['cate_id'] == $cate['id']) echo 'selected="selected"'; ?> value="<?php echo $cate['id']; ?>"><?php echo $cate['title']; ?></option>
									<?php } ?>
								</select>
							</div>
							
							<div class="col-md-6 col-sm-6">
								<select class="form-control art-subcategories" name="data[cate_id]">								
									<?php if(count($subcategories)) { ?>
									
										<?php foreach($subcategories as $child) { ?>
										
										<option <?php if($art['cate_id'] == $child['id']) echo 'selected="selected"'; ?> value="<?php echo $child['id']; ?>"><?php echo $child['title']; ?></option>
										
										<?php } ?>
										
									<?php } ?>
									
								</select>
							</div>
						</div>
					</div>
					<?php } ?>
					
					<div class="form-group">
						<label>Description</label>
						<textarea class="form-control" name="data[description]" rows="3"><?php echo $art['description']; ?></textarea>					
					</div>
					<div class="form-group">
						<label>Tags</label>
						<textarea class="form-control" name="data[tags]" rows="3"><?php echo $tags; ?></textarea>
						<p class="text-muted"><small>Keywords help your client easy seach design. Keywords should all be in lowercase and separated by commas. e.g. vector,clipart,sport</small></p>
					</div>
				</div>
			</div>
		</div>
		
		<div class="col-md-6">
			<div class="panel panel-default">
				<div class="panel-heading"><i class="clip-pencil-3"></i> Art Info</div>
				
				<div class="panel-body">
					<div class="row">
						<div class="col-md-4">
							<p>ID: <strong><?php echo $art['id']; ?></strong></p>
							<p>Type: <strong><?php echo setValue($art, 'type', ''); ?></strong></p>
							<p>Designer: 
								<?php if(isset($art['is_added_store'])) { ?>
								<strong>Admin Shop</strong>
								<?php } elseif(isset($art['username'])) { ?>
								<a href="<?php echo MAIN_STORE_URL; ?>user/cliparts/<?php echo $art['username']; ?>" title="View Profile" target="_blank"><strong><?php echo $art['username']; ?></strong></a>
								<?php } ?>
							</p>
						</div>
						
						<?php if (isset($art['medium'])) { ?>
						<div class="col-md-8">
							<img src="<?php echo $art['medium']; ?>" class="img-responsive" alt="">
						</div>
						<?php } ?>
					</div>
				</div>
			</div>
		</div>		
	</div>
</form>