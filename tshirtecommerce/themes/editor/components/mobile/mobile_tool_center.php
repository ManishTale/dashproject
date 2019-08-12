<?php 
$products = $GLOBALS['products'];
$addons = $GLOBALS['addons'];
$settings = $GLOBALS['settings'];
?>
<div class="col-center align-center">
	<!-- design area -->
	<div id="design-area" class="div-design-area">
		<div id="app-wrap" class="div-design-area view-mobile">
			<div class="control-views">
				<a href="javascript:void(0);" onclick="design.mobile.changeview('left')" class="control-view control-view-left"><i class="glyph-icon flaticon-back-1"></i></a>
				<a href="javascript:void(0);" onclick="design.mobile.changeview('right')" class="control-view control-view-right"><i class="glyph-icon flaticon-next-1"></i></a>
			</div>

			<?php if ($products === false) { ?>
			<div id="view-front" class="labView active">
				<div class="product-design">
					<strong><?php echo lang('designer_product_data_found'); ?></strong>
				</div>
			</div>
			<?php } else { ?>
			
			<!-- begin front design -->						
			<div id="view-front" class="labView active">
				<div class="product-design"></div>
				<div class="design-area"><div class="content-inner"></div></div>
			</div>						
			<!-- end front design -->
			
			<!-- begin back design -->
			<div id="view-back" class="labView">
				<div class="product-design"></div>
				<div class="design-area"><div class="content-inner"></div></div>
			</div>
			<!-- end back design -->
			
			<!-- begin left design -->
			<div id="view-left" class="labView">
				<div class="product-design"></div>
				<div class="design-area"><div class="content-inner"></div></div>
			</div>
			<!-- end left design -->
			
			<!-- begin right design -->
			<div id="view-right" class="labView">
				<div class="product-design"></div>
				<div class="design-area"><div class="content-inner"></div></div>
			</div>
			<!-- end right design -->
			
		<?php } ?>
		</div>
	</div>
	
	<!-- BEGIN help functions -->
	<?php if(cssShow($settings, 'show_toolbar') == ''){ ?>
	<div id="dg-help-functions">
		<div class="btn-group btn-group-sm" role="group">
			<span class="btn btn-default" onclick="design.tools.flip('x')">
				<i class="glyph-icon flaticon-reflect flaticon-12"></i>
			</span>					
			<span class="btn btn-default" onclick="design.tools.move('vertical')">
				<i class="glyph-icon flaticon-center-alignment-1 flaticon-12"></i>
			</span>
			<span class="btn btn-default" onclick="design.tools.move('horizontal')">
				<i class="glyph-icon flaticon-squares-1 flaticon-12"></i>
			</span>	
			<span class="btn btn-default" onclick="design.tools.move('left')">
				<i class="glyph-icon flaticon-back-1 flaticon-12"></i>
			</span>	
			<span class="btn btn-default" onclick="design.tools.move('right')">
				<i class="glyph-icon flaticon-next-1 flaticon-12"></i>
			</span>	
			<span class="btn btn-default" onclick="design.tools.move('up')">
				<i class="glyph-icon flaticon-up-arrow flaticon-12"></i>
			</span>	
			<span class="btn btn-default" onclick="design.tools.move('down')">
				<i class="glyph-icon flaticon-down-arrow flaticon-12"></i>
			</span>
			<span class="btn btn-default" onclick="design.tools.remove()">
				<i class="glyph-icon flaticon-interface flaticon-12"></i>
			</span>
			<span class="btn btn-default" onclick="design.tools.reset(this)">
				<i class="glyph-icon flaticon-rotate flaticon-12"></i>
			</span>
			<?php $addons->view('tools'); ?>
		</div>
	</div>
	<?php } ?>
	<!-- END help functions -->
</div>
<div class="product-views">
	<div class="" id="product-thumbs"></div>	
</div>