<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-12-10
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
?>
<div class="row">
	<div class="col-md-12">
		<p class="pull-right">
			<a href="<?php echo site_url('index.php/store/edit_category/'.$data['type']); ?>" class="btn btn-primary"><i class="fa fa-plus" aria-hidden="true"></i> Add New</a>
			<a href="javascript:void(0);" style="display:none;" onclick="storeCategories(this, '<?php echo $data['type']; ?>');" class="btn btn-success btn-save"><i class="fa fa-floppy-o" aria-hidden="true"></i> Save</a>
		</p>
	</div>
</div>
<hr />
<div class="row">
	<div class="col-md-6">
		<?php if(count($data['categories']) && $data['categories'] != false) { ?>

			<ul class="list-tree">
			<?php foreach($data['categories'] as $cate) { ?>
			
				<li data-id="<?php echo $cate['id']; ?>" class="list-tree-parent">
					<a href="javascript:void(0);" class="cate-parent">
						<?php if(isset($cate['children']) && count($cate['children']) > 0) { ?>
						<span class="folder-plus">
							<i class="clip-plus-circle"></i>
						</span>
						<?php } ?>
						<?php echo $cate['title']; ?>
					</a>
					
					<div class="pull-right cate-tool">
						<a href="javascript:void(0);" class="tool-sort"><i class="fa fa-arrows" aria-hidden="true"></i></a>
						<a href="<?php echo site_url('index.php/store/edit_category/'.$data['type'].'/'.$cate['id']); ?>"><i class="fa fa-pencil" aria-hidden="true"></i></a>
						<a href="javascript:void(0);" onclick="removeCategory(this, '<?php echo $data['type']; ?>');"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
					</div>
					
					<?php if(isset($cate['thumb'])) { ?>
					<div class="pull-right">
						<a href="<?php echo $cate['thumb']; ?>" target="_blank">
							<img src="<?php echo $cate['thumb']; ?>" width="42" height="42"/>
						</a>
					</div>
					<?php } ?>
					
					<?php if(isset($cate['children'])) { ?>
					<ul class="list-tree-children" style="display:none;">
						
						<?php foreach($cate['children'] as $children) { ?>
						
						<li class="cate-children" data-id="<?php echo $children['id']; ?>">
							<a href="javascript:void(0);"><?php echo $children['title']; ?></a>
							
							<div class="pull-right cate-tool">
								<a href="javascript:void(0);" class="tool-sort"><i class="fa fa-arrows" aria-hidden="true"></i></a>
								<a href="<?php echo site_url('index.php/store/edit_category/'.$data['type'].'/'.$children['id']); ?>"><i class="fa fa-pencil" aria-hidden="true"></i></a>
								<a href="javascript:void(0);"  onclick="removeCategory(this, '<?php echo $data['type']; ?>');"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
							</div>
							
							<?php if(isset($children['thumb'])) { ?>
							<div class="pull-right">
								<a href="<?php echo $children['thumb']; ?>" target="_blank" style="padding:0;">
									<img src="<?php echo $children['thumb']; ?>" width="30" height="30"/>
								</a>
							</div>
							<?php } ?>
						</li>
						
						<?php } ?>
						
					</ul>
					<?php } ?>
					
				</li>
			
			<?php } ?>
			</ul>

		<?php }else{ ?>

		Data not found!

		<?php } ?>
	</div>
	
	<?php if(count($data['categories']) && $data['categories'] != false) { ?>
	<div class="col-md-6">
		<div class="panel panel-default">
			<div class="panel-heading">Help</div>
			<div class="panel-body">
				<p><a href="javascript:void(0);"><i class="clip-plus-circle"></i></a> Click to open list sub categories</p>
				<p><a href="javascript:void(0);"><i class="fa fa-pencil" aria-hidden="true"></i></a> Click to edit category</p>
				<p><a href="javascript:void(0);"><i class="fa fa-trash-o" aria-hidden="true"></i></a> Click to remove category</p>
				<p><a href="javascript:void(0);"><i class="fa fa-arrows" aria-hidden="true"></i></a> Click and Move to sort categories after click button "Save"</p>
			</div>
		</div>
	</div>
	<?php } ?>
</div>
<br />
<br />