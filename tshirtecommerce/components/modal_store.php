<?php
$settings 	= $GLOBALS['settings'];
$addons  	= $GLOBALS['addons']; 
$store	= $settings->store;
?>
<div class="modal fade store" id="dg-cliparts" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				
				<div class="form-inline">
					<div class="form-group">
						<div class="input-group art-box-search">
							<input type="text" id="art-keyword" autocomplete="off" class="form-control" placeholder="<?php echo lang('designer_clipart_search_for'); ?>">
							<span class="input-group-btn">
								<button class="btn btn-default" onclick="design.store.art.search('keyword', this);" type="button">
									<i class="fa fa-search" aria-hidden="true"></i>
								</button>
							</span>
						</div>
					</div>
					
					<div class="form-group art-keyword-related">
						<div class="list-keyword-related">
							<?php if (isset($_COOKIE['user_arts'])) { ?>
							<span class="link div-viewed" onclick="design.store.art.viewed(this);"><?php echo $addons->__('addon_store_art_viewed'); ?></span>
							<?php } ?>													
						</div>
					</div>
					
					<div class="form-group pull-right store-sort">
						<div class="dropdown pull-right">
							<a id="drop3" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> 
								<span class="art-sort"><?php echo $addons->__('addon_store_featured'); ?></span>
								<span class="caret"></span> 
							</a>							
							
							<ul class="dropdown-menu dropdown-menu-left">
								<li class="active">
									<a href="javascript:void(0);" data-id="art" onclick="design.store.sort(this);" data-type="featured">
										<?php echo $addons->__('addon_store_featured'); ?>
									</a>
								</li>								
								<li>
									<a data-type="newest" data-id="art" onclick="design.store.sort(this);" href="javascript:void(0);">
										<?php echo $addons->__('addon_store_newest'); ?>
									</a>
								</li>
								<li>
									<a data-type="sellers" data-id="art" onclick="design.store.sort(this);" href="javascript:void(0);">
										<?php echo $addons->__('addon_store_best_sellers'); ?>
									</a>
								</li>
								<li>
									<a data-type="views" data-id="art" onclick="design.store.sort(this);" href="javascript:void(0);">
										<?php echo $addons->__('addon_store_best_views'); ?>
									</a>
								</li>
								<li>
									<a data-type="price_down" data-id="art" onclick="design.store.sort(this);" href="javascript:void(0);">
										<?php echo $addons->__('addon_store_price_low'); ?>
									</a>
								</li>
								<li>
									<a data-type="price_up" data-id="art" onclick="design.store.sort(this);" href="javascript:void(0);">
										<?php echo $addons->__('addon_store_price_high'); ?>
									</a>
								</li>
							</ul>
						</div>
						<span class="pull-right text-muted"><?php echo $addons->__('addon_store_sort_by'); ?>: </span>
					</div>
				</div>
				
				<div id="dag-art-panel">
					<span class="btn-round" data-type="art" data-show="1" onclick="design.store.category.show(this)">
						<i class="fa fa-angle-up" aria-hidden="true"></i>
					</span>
				</div>
			</div>
			
			<div class="modal-body">
				<!-- art store -->				
				<div class="dag-art-store main-clipart active">
					<div id="dag-store-categories" class="store-categories" style="display: block;">
						<ol class="breadcrumb art-breadcrumb">
							<li class="breadcrumb-home"><a href="javascript:void(0);" onclick="design.store.category.add();"><?php echo $addons->__('addon_store_art_categories'); ?></a></li>
						</ol>
						<ul></ul>
						
						<div class="top-keyword">
							<div class="col-md-12">
								<span class="text-white"><?php echo $addons->__('addon_store_art_recent'); ?></span><br />
								<div class="top-list-keyword"></div>
							</div>
						</div>
					</div>
					
					<div id="dag-list-store-arts"></div>
					<div id="dag-art-store-detail">
						<button type="button" class="btn btn-danger"><?php echo lang('designer_close_btn'); ?></button>
					</div>
				</div>				
			
			</div>
			
			<div class="modal-footer">
				<div class="align-right" id="store-pagination">
					<button type="button" class="btn btn-primary" onclick="design.store.art.ini()"><?php echo lang('designer_js_show_design'); ?></button>
					<input type="hidden" value="0" autocomplete="off" id="store-cate_id">
				</div>
				<div class="align-right" id="arts-add" style="display:none">
					<div class="art-detail-price"></div>
					<button type="button" class="btn btn-primary"><?php echo lang('designer_add_design_btn'); ?></button>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
lang.store = {
	designer: '<?php echo $addons->__('addon_store_designer'); ?>',
	file_type: '<?php echo $addons->__('addon_store_file_type'); ?>',
}
</script>

<?php
$file = ROOT .DS. 'data' .DS. 'store' .DS. 'fields.json';
$fields = array();
if(file_exists($file))
{
	$content = file_get_contents($file);
	if($content != false)
	{
		$fields = json_decode($content, true);
	}
}
if(count($fields)) {
?>
<script type="text/javascript">
var fields = [];
<?php foreach($fields as $field){ ?>
fields[<?php echo $field['id']; ?>] = '<?php echo addslashes($field['title']); ?>';
<?php } ?>
</script>
<div class="idea-fields">
	<?php foreach($fields as $field){ ?>
		<div class="control-layer-field control-layer-<?php echo $field['id']; ?>" data-id="<?php echo $field['id']; ?>" onclick="design.store.admin.fields.add(this)">
			<button type="button" class="btn btn-default btn-xs">
				<i class="fa fa-square-o"></i>
			</button>
			<span><?php echo $field['title']; ?></span>
		</div>
	<?php } ?>
</div>
<?php } ?>

<?php if( isset($_GET['idea']) && $_GET['idea'] == 1 ){ ?>
<div class="modal fade" id="create-design-idea" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				<h5 class="margin-0">Add Design Template</h5>
			</div>
			
			<div class="modal-body">
				<div class="form-group">
					<label>Title</label>
					<input type="text" class="form-control" id="idea_title">
				</div>
				<div class="form-group">
					<label>Choose List Categories</label>
					<select class="form-control" id="design-ideas-categories" multiple size="10"></select>
				</div>
				<div class="form-group">
					<label>Description</label>
					<textarea class="form-control" id="idea_description" rows="3"></textarea>
				</div>
				<div class="form-group">
					<label>Tags</label><br />
					<small>Keywords help your client easy seach design. Keywords should all be in lowercase and separated by commas. e.g. vector,clipart,sport</small>
					<textarea class="form-control" id="idea_tags" rows="3"></textarea>
				</div>
				
				<?php
				$file_type = ROOT .DS. 'data' .DS. 'store' .DS. 'types.json';
				$types = array();
				if(file_exists($file_type))
				{
					$type_conent = file_get_contents($file_type);
					if($type_conent != false)
					{
						$types = json_decode($type_conent, true);
					}
				}
				if(count($types)) {
				?>
				<div class="form-group">
					<label>Design Type</label><br />
					<small>Please tick choose design type. This option allow show or hidden each design template on each product.</small>
					
					<br />
					<?php foreach($types as $type){ ?>
					<label class="checkbox-inline">
					  <input type="checkbox" class="design_types" value="<?php echo $type['id']; ?>"> <?php echo $type['title']; ?>
					</label>
					<?php } ?>
					
				</div>
				<?php } ?>
			</div>
			
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal"><?php echo lang('designer_close_btn'); ?></button>
				<button type="button" class="btn btn-primary" onclick="design.store.admin.save()"><?php echo lang('designer_add_design_btn'); ?></button>
			</div>
		</div>
	</div>
</div>
				
<script type="text/javascript">
var add_idea = 1;
</script>
<?php } ?>
