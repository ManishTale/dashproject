<?php
$fields		= $data['fields'];
$field		= $data['field'];
?>
<div class="row">
	<div class="col-md-6">
		<div class="panel panel-default">
			<div class="panel-heading"><i class="clip-data"></i> Design Fields</div>
			
			<?php if(count($fields)) { ?>
				
				<table class="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>Action</th>							
						</tr>
					</thead>
					
					<tbody>
					<?php foreach($fields as $row) { ?>
						<tr>
							<td><?php echo $row['id']; ?></td>
							<td><?php echo $row['title']; ?></td>
							<td>
								<a href="<?php echo site_url('index.php/store/fields/edit/'.$row['id']); ?>" class="btn btn-primary btn-sm">Edit</a> 
								<a href="<?php echo site_url('index.php/store/fields/remove/'.$row['id']); ?>" class="btn btn-danger btn-sm">Remove</a>
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
			<div class="panel-heading"><i class="clip-pencil-3"></i> Add or Edit Field</div>
			
			<div class="panel-body">
				<form method="POST" action="<?php echo site_url('index.php/store/fields'); ?>">
					<?php if($field['id'] > 0) { ?>
					<div class="form-group">
						<label>ID: <?php echo $field['id']; ?></label>
						<input type="hidden" value="<?php echo $field['id']; ?>" name="data[id]">
					</div>
					<?php } ?>
					<div class="form-group">
						<label>Field Name</label>
						<input type="text" class="form-control" value="<?php echo $field['title']; ?>" name="data[title]">
					</div>
					
					<button type="submit" class="btn btn-primary">Save</button>
				</form>
			</div>
		</div>
	</div>
</div>