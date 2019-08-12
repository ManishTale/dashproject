<form class="form-layout" id="panel-form" method="POST" action="<?php echo site_url('index.php/layout'); ?>" onsubmit="return false;">
	<div class="row">
		<div class="col-md-12">
			<p style="text-align:right;">
				<a class="btn btn-primary tooltips" title="<?php echo lang('add'); ?>" href="<?php echo site_url('index.php/layout/add'); ?>">
					<i class="glyphicon glyphicon-plus"></i>
				</a>			
			</p>
		</div>
	</div>
	
	<?php if(isset($data['error'])) { ?>
	<div class="alert alert-danger"><?php echo $data['error']; ?></div>
	<?php } ?>
	
	<div class="panel panel-default">
		<div class="panel-heading">
			<i class="fa fa-external-link-square icon-external-link-sign"></i>
			Layouts
			<div class="panel-tools">
				<a class="btn btn-xs btn-link panel-collapse collapses" href="#"></a>				
			</div>
		</div>

		<div class="panel-body" id="panelbody">
			<div id="refresh">
				<table id="sample-table-1" class="table table-bordered table-hover">
					<thead>
						<tr>
							<th class="left">Title</th>						
							<th class="left">Description</th>
							<th class="left">Theme</th>
							<th class="center">Default</th>
							<th class="center">Remove</th>
						</tr>
					</thead>
					<tbody>
					
					<?php if( isset($data['layouts']) && count($data['layouts']) > 0 ){ ?>
					
						<?php foreach($data['layouts'] as $layout) { ?>
					
						<tr>
							<td>
								<a href="<?php echo site_url('index.php/layout/edit/'.$layout['name']); ?>" title="Edit layout">
									<?php echo $layout['title']; ?>
								</a>
							</td>
							<td><?php echo $layout['description']; ?></td>
							
							<td><?php echo $layout['theme']; ?></td>
							
							<td class="center">
								<?php if($layout['default'] == 1){ ?>
									
									<a href="#">
										<i style="font-size: 20px;" class="fa fa-check-square-o"></i>
									</a>
									
								<?php }else{ ?>
								
									<a href="#" onclick="setDefault('<?php echo site_url('index.php/layout/setDefault/'.$layout['name']); ?>');">
										<i style="font-size: 20px;" class="fa fa-square-o"></i>
									</a>
								
								<?php } ?>
							</td>
							
							<td class="center">
								<?php if($layout['default'] != 1){ ?>
									<a class="btn btn-bricky tooltips" href="javascript:void(0);" data-original-title="Remove this layout" onclick="removeLayout('<?php echo $layout['name']; ?>')"> 
										<i class="fa fa-trash-o"></i>
									</a>
								<?php } ?>
							</td>
						</tr>
						
						<?php } ?>
						
					<?php } ?>
					
					</tbody>
				</table>
			</div>
		</div>
	</div>
</form>

<script type="text/javascript">
	jQuery(document).on('click change','input[name="check_all"]',function() {
		var checkboxes = $(this).closest('table').find(':checkbox').not($(this));
		if($(this).prop('checked')) {
		  checkboxes.prop('checked', true);
		} else {
		  checkboxes.prop('checked', false);
		}
	});
	
	function setDefault(url)
	{
		var check = confirm('You sure want setup this theme is default?');
		if(check == true)
		{
			window.location = url;
		}
	}
	
	function removeLayout(id)
	{
		var check = confirm('You sure want remove?');
		if(check == true)
		{
			window.location = '<?php echo site_url('index.php/layout/remove'); ?>/'+id;
		}
	}
</script>
