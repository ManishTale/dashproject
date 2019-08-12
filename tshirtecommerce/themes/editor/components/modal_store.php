<?php
$settings 	= $GLOBALS['settings'];
$addons  	= $GLOBALS['addons']; 
$store		= $settings->store;

$is_store = false;
if (isset($store->enable))
{
	$is_store = true;
}

$path_extra 	= ROOT .DS. 'uploaded' .DS. 'icons';
$show_icons 	= 0;
if(file_exists($path_extra))
{
	$show_icons = 1;
}

$path_extra 	= ROOT .DS. 'uploaded' .DS. 'frames';
$show_frames	= 0;
if(file_exists($path_extra))
{
	$show_frames = 1;
}

$path_extra 	= ROOT .DS. 'uploaded' .DS. 'patterns';
$show_patterns	= 0;
if(file_exists($path_extra))
{
	$show_patterns = 1;
}

$path_extra 	= ROOT .DS. 'uploaded' .DS. 'shapes';
$show_shapes	= 0;
if(file_exists($path_extra))
{
	$show_shapes = 1;
}

$show_photos = 1;
if(isset($settings->show_pixabay) && $settings->show_pixabay == 0)
{
	$show_photos = 0;
}
?>
<div id="dg-obj-clipart" class="menu-options" style="display: none;">
	<div class="option-panel option-panel-cliparts" style="display: block;">
		<a href="javascript:void(0)" onclick="menu_options.close(this);" class="panel-colose"><i class="glyph-icon flaticon-cross"></i></a>
		<div class="option-panel-content">
			<ul class="menu-item-tabs" style="display: none;">
				<li>
					<a href="#dg-cliparts" class="add_item_clipart" role="tab" data-toggle="tab">
						<img src="assets/images/vectors.svg" class="img-vectors" alt="icon">
						<span><?php echo lang('designer_clipart_title'); ?></span>
					</a>
				</li>
				
				<?php if($show_shapes == 1){ ?>
				<li>
					<a href="#dg-obj-shapes" role="tab" data-toggle="tab" class="obj-elem-item" data-obj="shapes">
						<img src="assets/images/shapes.svg" class="img-shapes" alt="icon">
						<span><?php echo lang('designer_shapes'); ?></span>
					</a>
				</li>
				<?php } ?>
				
				<?php if($show_frames == 1){ ?>
				<li>
					<a href="#dg-obj-frames" role="tab" data-toggle="tab" class="obj-elem-item" data-obj="frames">
						<img src="assets/images/frames.svg" class="img-frames" alt="icon">
						<span><?php echo lang('designer_frames_title'); ?></span>
					</a>
				</li>
				<?php } ?>
				
				<?php if($show_photos == 1){ ?>
				<li>
					<a href="#dg-obj-photos" role="tab" data-toggle="tab" class="obj-elem-item" data-obj="photos">
						<img src="assets/images/photo.svg" class="img-photo" alt="icon">
						<span><?php echo lang('designer_photo'); ?></span>
					</a>
				</li>
				<?php } ?>
				
				<?php if($show_patterns == 1){ ?>
				<li>
					<a href="#dg-obj-patterns"  role="tab" data-toggle="tab" class="obj-elem-item" data-obj="patterns">
						<img src="assets/images/background.svg" class="img-background" alt="icon">
						<span><?php echo lang('designer_patterns'); ?></span>
					</a>
				</li>
				<?php } ?>
				
				<?php if($show_icons == 1){ ?>
				<li>
					<a href="#dg-obj-icons" role="tab" data-toggle="tab" class="obj-elem-item" data-obj="icons">
						<img src="assets/images/icons.svg" class="img-icons" alt="icon">
						<span><?php echo lang('designer_icons'); ?></span>
					</a>
				</li>
				<?php } ?>
			</ul>

			<div class="obj-content">
				<div class="obj-tabs tab-content">
					<div class="obj-tab-content tab-pane active" id="dg-cliparts">
						<div class="obj-header">
							<div class="input-group art-box-search">
								<input type="text" id="art-keyword" autocomplete="off" class="form-control" placeholder="<?php echo lang('designer_clipart_search_for'); ?>">
								<span class="input-group-btn" style="display: none;">
									<button class="btn btn-default" onclick="design.store.art.search('keyword', this);" type="button">
										<i class="fa fa-search" aria-hidden="true"></i>
									</button>
								</span>
								<span class="input-group-btn">
									<button type="button" class="btn btn-default" data-type="art" data-show="1" onclick="design.store.category.show(this)">
										<i class="fa fa-angle-up" aria-hidden="true"></i>
									</button>
								</span>
							</div>
						</div>
						
						<!-- clipart -->
						<div class="dag-art-store main-clipart active">
							<?php
							if($is_store == true){ ?>
							<div id="dag-store-categories" class="store-categories" style="display: none;">
								<ol class="breadcrumb art-breadcrumb">
									<li class="breadcrumb-home"><a href="javascript:void(0);" onclick="design.store.category.add();"><?php echo $addons->__('addon_store_art_categories'); ?></a></li>
								</ol>
								<ul></ul>

								<div class="form-group art-keyword-related" style="display: none;">
									<div class="list-keyword-related">
										<?php if (isset($_COOKIE['user_arts'])) { ?>
										<span class="link div-viewed" onclick="design.store.art.viewed(this);"><?php echo $addons->__('addon_store_art_viewed'); ?></span>
										<?php } ?>													
									</div>
								</div>

								<div class="top-keyword">
									<span><?php echo $addons->__('addon_store_art_recent'); ?></span><br />
									<div class="top-list-keyword"></div>
								</div>
							</div>

							<div id="dag-list-store-arts"></div>
							<?php }else{ ?>
							<div id="dag-art-categories" class="store-categories" style="display: none;">
								<ol class="breadcrumb art-breadcrumb">
									<li class="breadcrumb-home"><a href="javascript:void(0);" onclick="design.designer.art.arts(0);"><?php echo $addons->__('addon_store_art_categories'); ?></a></li>
								</ol>
								<ul></ul>
							</div>
							<div id="dag-list-arts"></div>
							<?php } ?>
							
							<div id="dag-art-store-detail">
								<button type="button" class="btn btn-danger"><?php echo lang('designer_close_btn'); ?></button>
							</div>
						</div>
						<!--footer -->
						<?php if($is_store == true){ ?>
						<div class="align-right" id="store-pagination" style="display:none">
							<button type="button" class="btn btn-primary" onclick="design.store.art.ini()"><?php echo lang('designer_js_show_design'); ?></button>
							<input type="hidden" value="0" autocomplete="off" id="store-cate_id">
						</div>
						<?php }else{ ?>
						<div class="align-right" id="arts-pagination" style="display:none">
							<ul class="pagination"></ul>
							<input type="hidden" value="0" autocomplete="off" id="art-number-page">
						</div>
						<?php } ?>

						<div class="align-right" id="arts-add" style="display:none">
							<div class="art-detail-price"></div>
							<button type="button" class="btn btn-primary"><?php echo lang('designer_add_design_btn'); ?></button>
						</div>
					</div>
					
					<?php if($show_frames == 1){ ?>
					<div class="obj-tab-content tab-pane" id="dg-obj-frames">
						<div class="obj-header">
						</div>
						<div class="obj-main-content"></div>
					</div>
					<?php } ?>
					
					<?php if($show_photos == 1){ ?>
					<div class="obj-tab-content tab-pane" id="dg-obj-photos">
						<div class="obj-header">
							<form method="get" action="#" onsubmit="return design.search('photo');">
								<div class="input-group group-search">
									<input type="text" id="photo-design-keyword" autocomplete="off" class="form-control" placeholder="Search a photo">
									<span class="input-group-btn">
										<button class="btn btn-default" type="submit"><i class="flaticon flaticon-14  flaticon-search-1"></i></button>
									</span>
								</div>
							</form>
						</div>
						<div class="obj-main-content"></div>
					</div>
					<?php } ?>
					
					<?php if($show_patterns == 1){ ?>
					<div class="obj-tab-content tab-pane" id="dg-obj-patterns">
						<div class="obj-header"></div>
						<div class="obj-main-content"></div>
					</div>
					<?php } ?>
					
					<?php if($show_shapes == 1){ ?>
					<div class="obj-tab-content tab-pane" id="dg-obj-shapes">
						<div class="obj-header"></div>
						<div class="obj-main-content"></div>
					</div>
					<?php } ?>
					
					<?php if($show_icons == 1){ ?>
					<div class="obj-tab-content tab-pane" id="dg-obj-icons">
						<div class="obj-header">
							<div class="obj-search">
								<div class="input-group group-search">
									<input type="text" id="icon-keyword" onkeyup="design.elms.icons.search();" autocomplete="off" class="form-control" placeholder="<?php lang('designer_search_icon'); ?>">
									<span class="input-group-btn">
										<button class="btn btn-default" type="button"><i class="flaticon flaticon-14  flaticon-search-1" aria-hidden="true"></i></button>
									</span>
								</div>
							</div>
							<br />
						</div>
						<div class="obj-main-content"></div>
					</div>
					<?php } ?>
				</div>
			</div>
			<div class="obj-footer">
				<a href="javascript:void(0);" class="obj-scrolltop pull-right" onclick="scrolltoTop(this);"><i class="glyph-icon flaticon-12 flaticon-up-arrow"></i></a>
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
<svg xmlns="http://www.w3.org/2000/svg" width="62" height="53.1" viewBox="0 0 62 53.1">
<defs>
  <g id="elemnt-mask-upload">
    <path fill="#000000" d="M113.3,125.2l-3.4-3.4,2.5-1.2a.5.5,0,0,0,.2-.7h0l-.3-.2-4.1-1.4V104.5a.5.5,0,0,0-.5-.5H87.9a.5.5,0,0,0-.5.5v16.6a.5.5,0,0,0,.5.5h16l1.7,4.9a.5.5,0,0,0,.7.2l.2-.2,1.2-2.5,3.4,3.4h.7l1.5-1.5h.1A.5.5,0,0,0,113.3,125.2ZM88.4,105h18.9v9.6l-4.9-4.9a.5.5,0,0,0-.7,0l-6.6,6.6-2.2-2.2a.5.5,0,0,0-.7,0L88.3,118Zm0,15.7v-1.3l4.2-4.2,2.2,2.2a.5.5,0,0,0,.7,0l6.6-6.6,5.2,5.2v2l-4.3-1.5a.5.5,0,0,0-.6.6l1.2,3.6Zm23,5.7-3.5-3.5h-.5l-.3.3-1,2.1-1.4-4.1h0l-1.1-3.3,7.4,2.6-2.1,1a.5.5,0,0,0-.2.7h.1l3.5,3.5Z" transform="translate(-66.4 -74.3)"/>
    <path fill="#000000" d="M93.7,112.1a2.3,2.3,0,1,1,2.3-2.3A2.4,2.4,0,0,1,93.7,112.1Zm0-3.7a1.4,1.4,0,1,0,1.4,1.4h0a1.4,1.4,0,0,0-1.4-1.4Z" transform="translate(-66.4 -74.3)"/>
    <text fill="#000000" transform="translate(0 10.3)" font-size="12" font-family="RobotoSlab-Light, Roboto Slab"><?php echo lang('designer_drag_photo'); ?></text>
    <text fill="#000000" transform="translate(17.7 24.7)" font-size="12" font-family="RobotoSlab-Light, Roboto Slab"><?php echo lang('designer_here'); ?></text>
  </g>
</defs>
</svg>
