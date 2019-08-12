<script type="text/javascript" src="<?php echo site_url('assets/plugins/jquery-fancybox/jquery.fancybox.js'); ?>"></script>
<link rel="stylesheet" href="<?php echo site_url('assets/plugins/jquery-fancybox/jquery.fancybox.css'); ?>">
<form method="POST" action="<?php echo site_url('index.php/store/saveCategory/'.$data['type'].'/'.$data['category']['id']); ?>">
	<div class="row">
		<div class="col-md-12">
			<p class="pull-right">			
				<button type="submit" class="btn btn-success btn-save"><i class="fa fa-floppy-o" aria-hidden="true"></i> Save</button>
				<a href="<?php echo site_url('index.php/store/category/'.$data['type']); ?>" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i> Close</a>
				<a href="<?php echo site_url('index.php/store/edit_category/'.$data['type'].'/'.$data['category']['id']); ?>" class="btn btn-default"><i class="fa fa-refresh" aria-hidden="true"></i> Reload</a>
			</p>
		</div>
	</div>
	<hr />
	
	<div class="col-md-6">
		<div class="panel panel-default">
			<div class="panel-heading"><i class="clip-pencil-3"></i> Edit Category</div>
			
			<div class="panel-body">
				<div class="form-group">
					<label>Title</label>
					<input type="text" class="form-control" value="<?php echo $data['category']['title']; ?>" name="data[title]">
				</div>
				<div class="form-group">
					<label>Description</label>
					<textarea class="form-control" name="data[description]" rows="3"><?php echo $data['category']['description']; ?></textarea>					
				</div>
				
				<?php if(isset($data['category']['children']) && $data['category']['parent_id'] == 0 && count($data['category']['children']) > 0) { ?>
				<input type="hidden" name="data[parent_id]" value="0">
				<?php }else{ ?>
				<div class="form-group">
					<label>Category Parent</label>
					<select class="form-control" name="data[parent_id]">
						<option value="0"> - Choose a Category - </option>
						
						<?php if(count($data['categories'])) { ?>
							
							<?php foreach($data['categories'] as $cate) { if($cate['id'] == $data['category']['id']) continue; ?>
							<option <?php if($data['category']['parent_id'] == $cate['id']) echo 'selected="selected"'; ?> value="<?php echo $cate['id']; ?>"><?php echo $cate['title']; ?></option>
							<?php } ?>
							
						<?php } ?>
						
					</select>
				</div>
				<?php } ?>
			</div>
		</div>
	</div>
	
	<?php if($data['type'] == 'idea') { ?>
	<div class="col-md-6 text-center">
		<?php if(empty($data['category']['thumb']) ) { $data['category']['thumb'] = site_url('uploaded/folder.png', false); }?>
		
		<img src="<?php echo $data['category']['thumb']; ?>" class="img-thumbnail cate_thumb_img" width="250" alt="">
		<input type="hidden" name="data[thumb]" value="<?php echo $data['category']['thumb']; ?>" class="cate_thumb" />		
		
		<br />
		<br />
		<a class="btn btn-default" href="#" onclick="jQuery.fancybox( {href : '<?php echo site_url('index.php/media/modals/productImg/1') ?>', type: 'iframe'} );">Change Image</a>
	</div>
	<?php } ?>
</form>
<script type="text/javascript">
	function productImg(images)
	{
		if(images.length > 0)
		{
			jQuery('.cate_thumb').val(images[0]);
			jQuery('.cate_thumb_img').attr('src', images[0]);
			
			jQuery.fancybox.close();
		}
	}
</script>