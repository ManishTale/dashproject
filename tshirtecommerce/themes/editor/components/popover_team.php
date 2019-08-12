<?php
$addons = $GLOBALS['addons'];
?>
<div id="options-add_item_team" class="dg-options">
	<div class="dg-options-toolbar">
		<div class="pull-left">
			<input type="text" value="00" id="team-edit-number" placeholder="">
			<label class="checkbox-group">
				<input type="checkbox" id="team_add_number" onclick="design.team.addNumber(this)" autocomplete="off"> <strong><?php echo lang('designer_clipart_edit_add_number'); ?></strong>
			</label>
		</div>
		<div class="pull-left">
			<input type="text" value="NAME" id="team-edit-name" placeholder=""> 
			<label class="checkbox-group">
				<input type="checkbox" id="team_add_name" onclick="design.team.addName(this)" autocomplete="off"> <strong><?php echo lang('designer_clipart_edit_add_name'); ?></strong>
			</label>
		</div>
		
		<div class="list-colors check-team-active">
			<a class="dropdown-color" id="team-name-color" data-placement="right" title="<?php echo lang('designer_change_color'); ?>" href="javascript:void(0)" data-color="000000" data-label="colorT" style="background-color:black"></a>
		</div>
		
		<button class="btn btn-default toolbar-font check-team-active" data-toggle="modal" data-target="#dg-fonts">
			<a href="javascript:void(0);" class="pull-left" id="txt-team-fontfamly"><?php echo lang('designer_clipart_edit_arial'); ?></a>
			<i class="fa fa-angle-down" aria-hidden="true"></i>
		</button>
		
		<button class="btn btn-link btn-default" data-target="#dg-item_team_list" data-toggle="modal" type="button"><?php echo lang('designer_clipart_edit_add_list_name'); ?></button>
	</div>
	
	<div class="dg-options-content">
		<input type="hidden" id="team-height" value="">
		<input type="hidden" id="team-width" value="">
		<input type="hidden" id="team-rotate-value" value="0">				
		
		<div class="row toolbar-action-teams">
			<div class="col-md-12 div-box-team-list">
				<table id="item_team_list" class="table table-bordered">
					<thead>
						<tr>
							<td width="70%"><strong><?php echo lang('designer_clipart_edit_name'); ?></strong></td>
							<td width="10%"><strong><?php echo lang('designer_clipart_edit_number'); ?></strong></td>
							<td width="20%"><strong><?php echo lang('designer_clipart_edit_size'); ?></strong></td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td align="left"> </td>
							<td align="center"> </td>
							<td align="center"> </td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<?php $addons->view('team-file'); ?>
	</div>
</div>