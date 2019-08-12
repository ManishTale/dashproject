<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-11-26
 *
 *
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */

$settings 	= $GLOBALS['settings'];	
$addons 	= $GLOBALS['addons'];
$is_store = false;
if (isset($settings->store) && isset($settings->store->enable))
{
	$is_store = true;
}
if($is_store == true) {
?>
<div class="modal fade store" id="dg-design-ideas" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				
				<div class="form-inline">
					<!-- search -->
					<div class="form-group">
						<div class="input-group box-search">
							<input type="text" id="idea-keyword" autocomplete="off" class="form-control" placeholder="<?php echo lang('designer_clipart_search_for'); ?>">
							<span class="input-group-btn">
								<button class="btn btn-default" onclick="design.store.ideas.search('keyword', this);" type="button">
									<i class="fa fa-search" aria-hidden="true"></i>
								</button>
							</span>
						</div>
					</div>
					
					<!-- related -->
					<div class="form-group idea-keyword-related">
						<div class="list-keyword-related">
							<?php if (isset($_COOKIE['user_ideas'])) { ?>
							<span class="link div-viewed" onclick="design.store.ideas.viewed(this);"><?php echo $addons->__('addon_store_art_viewed'); ?></span>
							<?php } ?>
						</div>
					</div>
					
					<!-- sort -->
					<div class="form-group pull-right store-sort">
						<div class="dropdown pull-right">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> 
								<span class="idea-sort"><?php echo $addons->__('addon_store_featured'); ?></span>
								<span class="caret"></span> 
							</a>
							
							<ul class="dropdown-menu dropdown-menu-left">
								<li class="active">
									<a href="javascript:void(0);" onclick="design.store.sort(this);" data-id="idea" data-type="featured"><?php echo $addons->__('addon_store_featured'); ?></a>
								</li>								
								<li>
									<a data-type="newest" onclick="design.store.sort(this);" data-id="idea" href="javascript:void(0);"><?php echo $addons->__('addon_store_newest'); ?></a>
								</li>
							</ul>
						</div>
						
						<span class="pull-right text-muted"><?php echo $addons->__('addon_store_sort_by'); ?>:  </span>
					</div>
				</div>
				
				<div id="dag-idea-panel">
					<span class="btn-round" data-type="idea" data-show="1" onclick="design.store.category.show(this)">
						<i class="fa fa-angle-up" aria-hidden="true"></i>
					</span>
				</div>
			</div>
			<div class="modal-body">
				<div class="store-main-options" style="display: block;">
					<div id="dag-store-idea-categories" class="store-categories">
						<ol class="breadcrumb idea-breadcrumb">
							<li class="breadcrumb-home">
								<a href="javascript:void(0);" onclick="design.store.ideas.categories(0);"><?php echo $addons->__('addon_store_art_categories'); ?></a>
							</li>
						</ol>
						<ul></ul>
					</div>
				</div>
				
				<div class="dag-store-ideas"></div>
				
				<div class="idea-store-detail"></div>
			</div>
			
			<div class="modal-footer" id="store-idea-pagination">
				<div class="align-right">
					<button type="button" class="btn btn-sm btn-primary" onclick="design.store.ideas.ini()"><?php echo lang('designer_js_show_design'); ?></button>					
				</div>
			</div>
		</div>
	</div>
</div>
<?php if( isset($_GET['idea_id']) ) { ?>
<script type="text/javascript">
	jQuery(document).ready(function(){
		design.store.ideas.loadDesign('<?php echo $_GET['idea_id']; ?>');
	});
</script>
<?php } ?>
<?php } ?>