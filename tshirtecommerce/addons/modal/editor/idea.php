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
if (isset($settings->store) && isset($settings->store->enable) && $settings->store->enable == 1)
{
	$is_store = true;
}
if($is_store == true) {
?>
<div id="dg-obj-ideas" class="menu-options" style="display: none;">
	<div class="option-panel option-panel-ideas" style="display: block;">
		<a href="javascript:void(0)" onclick="menu_options.close(this);" class="panel-colose"><i class="glyph-icon flaticon-cross"></i></a>

		<div class="option-panel-content">
			<div class="store-main-options">
				<div id="dag-store-idea-categories" class="store-categories">
					<ol class="breadcrumb idea-breadcrumb">
						<li class="breadcrumb-home">
							<a href="javascript:void(0);" onclick="design.store.ideas.categories(0);"><?php echo $addons->__('addon_store_art_categories'); ?></a>
						</li>
					</ol>
					<ul class="menu-item-tabs"></ul>
				</div>
			</div>

			<div class="obj-content">
				<div class="obj-tabs tab-content">
					<!-- Begin design ideas -->
					<div class="obj-tab-content tab-pane active" id="dg-design-ideas">
						<div class="obj-header">
							<div class="input-group box-search">
								<input type="text" id="idea-keyword" autocomplete="off" class="form-control" placeholder="<?php echo lang('designer_clipart_search_for'); ?>">
								<span class="input-group-btn" style="display: none;">
									<button class="btn btn-default" onclick="design.store.ideas.search('keyword', this);" type="button"></button>
								</span>
								<span class="input-group-btn">
									<button type="button" class="btn btn-default" data-type="idea" data-show="0" onclick="design.store.category.show(this)">
										<i class="fa fa-angle-up" aria-hidden="true"></i>
									</button>
								</span>
							</div>
							
							<div class="search-options" style="display: none;">
								<div class="pull-right store-sort">
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
								</div>

								<div class="form-group idea-keyword-related">
									<div class="list-keyword-related">
										<?php if (isset($_COOKIE['user_ideas'])) { ?>
										<span class="link div-viewed" onclick="design.store.ideas.viewed(this);"><?php echo $addons->__('addon_store_art_viewed'); ?></span>
										<?php } ?>
									</div>
								</div>
							</div>
						</div>
						
						<div class="dag-store-ideas"></div>
						<div class="idea-store-detail"></div>
					</div>
					<!-- End design idea -->
					
					<!-- Begin layout -->
					<div class="obj-tab-content tab-pane" id="dg-ideas-layout">
						<div class="obj-header">
						</div>
						Layout
					</div>
					<!-- End layout -->
				</div>
			</div>
			<div class="obj-footer">
				<a href="javascript:void(0);" class="obj-scrolltop pull-right" onclick="scrolltoTop(this);"><i class="glyph-icon flaticon-12 flaticon-up-arrow"></i></a>
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