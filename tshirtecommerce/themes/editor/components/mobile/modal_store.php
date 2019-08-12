<?php
$settings 	= $GLOBALS['settings'];
$addons  	= $GLOBALS['addons']; 
$store		= $settings->store;
?>
<div class="modal fade store" id="dg-cliparts" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				
				<div class="form-inline store-top-tool">
					<?php if(isset($store->your_clipart) && $store->your_clipart == 1){ ?>
					<div class="btn-group">
						<button type="button" class="btn btn-none dropdown-toggle padding-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<i class="glyph-icon flaticon-menu flaticon-14" aria-hidden="true"></i> 
							<span class="menu-art-type"> <?php echo $addons->__('addon_store'); ?></span>
						</button>						
						<ul class="dropdown-menu">
							<li><a data-title="<?php echo $addons->__('addon_store'); ?>" data-id="store" onclick="design.store.type(this);" href="javascript:void(0);"><?php echo $addons->__('addon_store'); ?></a></li>
							<li><a data-title="<?php echo $addons->__('addon_store_shop_all'); ?>" data-id="shop" onclick="design.store.type(this);" href="javascript:void(0);"><?php echo $addons->__('addon_store_shop_all'); ?></a></li>
						</ul>
					</div>
					<?php } ?>
					
					<div class="pull-right text-right">
						<div class="store-sort store-tool-action">
							<div class="dropdown">
								<span class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> 
									<span class="art-sort"><?php echo $addons->__('addon_store_featured'); ?></span>
									<i class="glyph-icon flaticon-mark-1"></i>
								</span>							
								
								<ul class="dropdown-menu dropdown-menu-left text-left">
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
						</div>
						
						<span class="store-tool-action" onclick="jQuery('.art-keyword-related').toggle('slow');">
							<i class="glyph-icon flaticon-view"></i>
						</span>
						
						<span class="store-tool-action" onclick="jQuery('.art-box-search').toggle('slow');">
							<i class="glyph-icon flaticon-search-1"></i>
						</span>
					</div>
					
					<div class="art-box-search" style="display:none">
						<input type="text" id="art-keyword" autocomplete="off" class="form-control input-sm" placeholder="<?php echo lang('designer_clipart_search_for'); ?>">						
					</div>
					
					<div class="form-group art-keyword-related">
						<div class="list-keyword-related">
							<?php if (isset($_COOKIE['user_arts'])) { ?>
							<span class="link div-viewed" onclick="design.store.art.viewed(this);"><?php echo $addons->__('addon_store_art_viewed'); ?></span>
							<?php } ?>													
						</div>
					</div>
				</div>
				
				<div id="dag-art-panel">
					<span class="btn-round" data-type="art" data-show="1" onclick="design.store.category.show(this)">
						<i class="fa fa-angle-up" aria-hidden="true"></i>
					</span>
				</div>
			</div>
			
			<div class="modal-body">
				
				<!-- art shop -->
				<?php if(isset($store->your_clipart) && $store->your_clipart == 1){ ?>
				<div class="dag-art-shop main-clipart">
					<div id="dag-art-categories" class="store-categories"></div>
					<div class="row">
						<div class="col-md-12">
							<div id="dag-list-arts"></div>
							<div id="dag-art-detail">
								<button type="button" class="btn btn-danger"><?php echo lang('designer_close_btn'); ?></button>
							</div>
						</div>								
					</div>
				</div>
				<?php } ?>
				
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
					
					<div class="row">
						<div class="col-md-12">
							<div id="dag-list-store-arts"></div>
						</div>								
					</div>
					
					<div id="dag-art-store-detail">
						<button type="button" class="btn btn-danger"><?php echo lang('designer_close_btn'); ?></button>
					</div>
				</div>
			</div>
			
			<div class="modal-footer">
				<div class="align-right" id="store-pagination">
					<button type="button" class="btn btn-sm btn-primary" onclick="design.store.art.ini()"><?php echo lang('designer_js_show_design'); ?></button>
					<input type="hidden" value="0" autocomplete="off" id="store-cate_id">
				</div>
				<div class="align-right" id="arts-pagination">
					<ul class="pagination"></ul>
					<input type="hidden" value="0" autocomplete="off" id="art-number-page">
				</div>
				<div class="align-right" id="arts-add" style="display:none">
					<div class="art-detail-price"></div>
					<button type="button" class="btn btn-sm btn-primary"><?php echo lang('designer_add_design_btn'); ?></button>
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