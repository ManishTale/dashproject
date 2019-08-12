<?php
$settings 	= $GLOBALS['settings'];
$dg 		= $GLOBALS['dg'];
// check store
$is_store = false;
if (isset($settings->store) && isset($settings->store->enable))
{
	$is_store = true;
}

if ($is_store == true)
{
	$dg->view('modal_store');
}
else
{
?>
<script>lang.store = {};</script>
<div class="modal fade" id="dg-cliparts" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<div class="pull-left">
					<div class="pull-left">
						<a href="javascript:void(0);" class="btn btn-sm btn-default" onclick="jQuery('#dag-art-categories').toggle('slow');"><i class="fa fa-bars" aria-hidden="true"></i></a>
					</div>
					<div class="pull-left input-group-search">
						<div class="input-group">
						  <input type="text" id="art-keyword" autocomplete="off" class="form-control input-sm" placeholder="<?php echo lang('designer_clipart_search_for'); ?>">
						  <span class="input-group-btn">
							<button class="btn btn-default btn-sm" onclick="design.designer.art.arts(0)" type="button"><?php echo lang('designer_clipart_search'); ?></button>
						  </span>
						</div>
					</div>
				</div>
			</div>
			<div class="modal-body">
				<div id="dag-art-categories"></div>
				<div class="row">
					<div class="col-md-12">
						<div id="dag-list-arts"></div>
						<div id="dag-art-detail">
							<button type="button" class="btn btn-danger"><?php echo lang('designer_close_btn'); ?></button>
						</div>
					</div>								
				</div>
			</div>
			
			<div class="modal-footer">
				<div class="align-right" id="arts-pagination" style="display:none">
					<ul class="pagination"></ul>
					<input type="hidden" value="0" autocomplete="off" id="art-number-page">
				</div>
				<div class="align-right" id="arts-add" style="display:none">
					<div class="art-detail-price"></div>
					<button type="button" class="btn btn-primary"><?php echo lang('designer_add_design_btn'); ?></button>
				</div>
			</div>
		</div>
	</div>
</div>
<?php } ?>