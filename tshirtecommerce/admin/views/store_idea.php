<?php
$idea 		= $data['idea'];
$categories 	= $data['categories'];
$cate_ids 		= $data['cate_ids'];
$ideas_types 	= $data['ideas_types'];
$types 		= $data['types'];
$tags 		= '';
if( isset($idea['tags']) && is_array($idea['tags']) && count($idea['tags']) )
{
	foreach($idea['tags'] as $tag)
	{
		if($tags == '')
			$tags = $tag;
		else
			$tags = $tags.','.$tag;
	}
}
?>
<form method="POST" action="<?php echo site_url('index.php/store/idea/'.$data['id']); ?>">
<div class="row">
	<div class="col-md-12">
		<?php if($data['save']) echo '<p class="pull-left btn btn-xs btn-success"><i class="clip-checkmark-2"></i> Save success</p>'; ?>
		<p class="pull-right">
			<button type="submit" class="btn btn-success btn-save"><i class="fa fa-floppy-o" aria-hidden="true"></i> Save</button>
			<a href="<?php echo site_url('index.php/store/ideas'); ?>" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i> Close</a>
			<a href="<?php echo site_url('index.php/store/idea/'.$data['id']); ?>" class="btn btn-default"><i class="fa fa-refresh" aria-hidden="true"></i> Reload</a>			
		</p>
	</div>
</div>
<hr />

<div class="row">
	<div class="col-md-6">
		<div class="panel panel-default">
			<div class="panel-heading"><i class="clip-pencil-3"></i> Edit Design Template</div>
			
			<div class="panel-body">
				<div class="form-group">
					<label>Title</label>
					<input type="text" class="form-control" value="<?php echo $idea['title']; ?>" name="data[title]">
				</div>
				
				<?php if(count($categories)) { ?>
				<div class="form-group">
					<label>Choose List Categories</label>
					
					<select class="form-control" multiple size="20" name="data[categories][]">								
						<?php foreach($categories as $cate) {?>
							<option <?php if(in_array($cate['id'], $cate_ids)) echo 'selected="selected"'; ?> value="<?php echo $cate['id']; ?>"><?php echo $cate['title']; ?></option>
							
							<?php if( isset($cate['children']) && count($cate['children']) ) { ?>
						
								<?php foreach($cate['children'] as $child) { ?>
								
								<option <?php if(in_array($child['id'], $cate_ids)) echo 'selected="selected"'; ?> value="<?php echo $child['id']; ?>"> &nbsp;&nbsp;&nbsp;- <?php echo $child['title']; ?></option>
								
								<?php } ?>
								
							<?php } ?>
						
						<?php } ?>

					</select>
				</div>
				<?php } ?>
				
				<div class="form-group">
					<label>Description</label>
					<textarea class="form-control" name="data[description]" rows="3"><?php echo $idea['description']; ?></textarea>					
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
			<div class="panel-heading"><i class="clip-pencil-3"></i> Thumb</div>
			
			<div class="panel-body">
				<div class="row">
				<div class="col-md-6">
					<p>ID: <strong><?php echo $idea['id']; ?></strong></p>
					<p>
					Designer: 
					<?php if(isset($idea['type']) && $idea['type'] == 'shop') { ?>
						<a href="#">
					<?php }else{ ?>
						<a href="<?php echo MAIN_STORE_URL; ?>user/ideas/<?php echo $idea['username']; ?>" title="View Profile" target="_blank">
					<?php } ?>
						<strong><?php echo $idea['username']; ?></strong>
					</a>
					</p>
					
					<?php if(count($types) > 0) { ?>
					<hr />
					<p><strong>Design Type</strong>
					<br />
					<small>Please tick choose design type. This option allow show or hidden each design template on each product.</small>
					</p>
					
					<?php foreach($types as $type) { ?>
					<div class="checkbox">
						<label>
							<input type="checkbox" <?php if(isset($ideas_types[$type['id']]) && in_array($data['id'], $ideas_types[$type['id']])) echo 'checked="checked"'; ?> name="data[types][]" value="<?php echo $type['id']; ?>"> <?php echo $type['title']; ?>
						</label>
					</div>
					<?php } ?>
					
					<?php } ?>
					<br />
					<a href="<?php echo site_url('index.php/store/types'); ?>">Add New Type</a>
				</div>
				
				<?php if (isset($idea['image'])) { ?>
				<div class="col-md-6">
					<img src="<?php echo $idea['image']; ?>" class="img-responsive" alt="">
				</div>
				<?php } ?>
			</div>
			</div>
		</div>
	</div>
</div>
</form>