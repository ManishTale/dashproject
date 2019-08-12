<?php
$type	= $data['type'];
?>
<div class="row">
	<div class="col-md-6">
		<div class="panel panel-default">
			<div class="panel-heading"><i class="clip-data"></i> Design Types</div>
			
			<?php if(count($data['rows'])) { ?>
				
				<table class="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>Action</th>							
						</tr>
					</thead>
					
					<tbody>
					<?php foreach($data['rows'] as $row) { ?>
						<tr>
							<td><?php echo $row['id']; ?></td>
							<td><?php echo $row['title']; ?></td>
							<td>
								<a href="<?php echo site_url('index.php/store/types/edit/'.$row['id']); ?>" class="btn btn-primary btn-sm">Edit</a> 
								<a href="<?php echo site_url('index.php/store/types/remove/'.$row['id']); ?>" class="btn btn-danger btn-sm">Remove</a>
							</td>
						</tr>
					<?php } ?>
					</tbody>
					
				</table>
				
			<?php }else{ echo 'Data not found!'; } ?>
		</div>
	</div>
	
	<div class="col-md-6">
		<div class="panel panel-default">
			<div class="panel-heading"><i class="clip-pencil-3"></i> Add or Edit Design Type</div>
			
			<div class="panel-body">
				<form method="POST" action="<?php echo site_url('index.php/store/types'); ?>">
					<?php if($type['id'] > 0) { ?>
					<div class="form-group">
						<label>ID: <?php echo $type['id']; ?></label>
						<input type="hidden" value="<?php echo $type['id']; ?>" name="data[id]">
					</div>
					<?php } ?>
					<div class="form-group">
						<label>Title</label>
						<input type="text" class="form-control" value="<?php echo $type['title']; ?>" name="data[title]" <?php if($type['id'] > 0) echo 'style="border: 1px solid #ff0000;"'; ?>>
					</div>
					
					<button type="submit" class="btn btn-primary">Save</button>
				</form>
			</div>
		</div>
	</div>
</div>