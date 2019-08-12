<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-11-26
 *
 * API
 *
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
 $strUrl = str_replace('admin/', '', site_url());
 
 $total_page	= 1;
 if(isset($data['total_page'])) $total_page = $data['total_page'];
 
 $page_curr 	= 1;
 if(isset($data['page_curr'])) 	$page_curr 	= $data['page_curr'];
 
 $per_page 		= 12;
 if(isset($data['per_page'])) 	$per_page 	= $data['per_page'];
 
 $serch_text = '';
 if(isset($data['search_file_name'])) $search_text = $data['search_file_name'];
?>
<link rel="stylesheet" href="<?php echo site_url('assets/plugins/dynatree/src/skin-vista/ui.dynatree.css'); ?>">
<link href="<?php echo site_url('assets/plugins/bootstrap-modal/css/bootstrap-modal-bs3patch.css'); ?>" rel="stylesheet" type="text/css"/>
<link href="<?php echo site_url('assets/plugins/bootstrap-modal/css/bootstrap-modal.css'); ?>" rel="stylesheet" type="text/css"/>
<link href="<?php echo site_url('assets/plugins/jquery-fancybox/jquery.fancybox.css'); ?>" rel="stylesheet" type="text/css"/>

<script src="<?php echo site_url('assets/js/dg-function.js'); ?>"></script>
<script src="<?php echo site_url('assets/plugins/dynatree/src/jquery.dynatree.js'); ?>"></script>
<script src="<?php echo site_url('assets/plugins/bootstrap-modal/js/bootstrap-modal.js'); ?>"></script>
<script src="<?php echo site_url('assets/plugins/bootstrap-modal/js/bootstrap-modalmanager.js'); ?>"></script>
<script src="<?php echo site_url('assets/js/ui-modals.js'); ?>"></script>
<script src="<?php echo site_url('assets/plugins/validate/validate.js'); ?>"></script>
<script src="<?php echo site_url('assets/plugins/jquery-fancybox/jquery.fancybox.js'); ?>"></script>
<script>jQuery(document).ready(function() {dgUI.category.lang.confirm_delete = '<?php lang('confirm_delete'); ?>';});</script>

<form id='designform' method='post' action='<?php echo site_url('index.php/design/user_design/') ?>'>
	<div class='row'>
		<div class='col-md-12'>
			<div class="col-md-8">			
				<div class="col-sm-2">
					<p class='row' style='padding-right:5px;'>
						<?php $option = array('6'=>6, '12'=>12, '18'=>18, '24'=>24, '30'=>30, '96'=>96,'all'=>lang('all', true));?>
						<select id='option_designs' class="col-sm-4 form-control option_designs" name="per_page" onchange='submit_change_perpage()'>
							<?php
								foreach($option as $key=>$val)
								{
									if($key == $data['per_page']) echo '<option value="'.$key.'" selected="">'.$val.'</option>';
									else echo '<option value="'.$key.'">'.$val.'</option>';
								}
							?>
						</select>					
					</p>
				</div>
				<div class="col-sm-4">
					<p class='row' style='padding-right:5px;'>
						<input class='form-control' id='searchtext' name='search_text' value='<?php if(isset($data['search'])) echo $data['search']; ?>' 
							type='text' placeholder='<?php echo $addons->__('addon_user_design_key_search'); ?>'>				
					</p>
				</div>
				<div class='col-sm-3'>
					<p class='row'>
						<button class='btn btn-primary' name='search' type='button' onclick='submit_search()'>
							<?php echo $addons->__('addon_user_design_search');?>
						</button>
					</p>
				</div>			
			</div>
			<div class='col-md-4'>
				<div class='col-sm-6 text-right pull-right'>
					<p class='row'>
						<a id='btnselectalldesign' class="btn btn-warning" title='<?php echo $addons->__('addon_user_design_select_all'); ?>' href='javascript:void(0)'>
							<?php echo $addons->__('addon_user_design_select_all'); ?>
						</a>					
						<button class="btn btn-bricky" name='delete' title='<?php echo $addons->__('addon_user_design_delete_title'); ?>' 
							type='button' onclick='submit_delete(<?php echo $page_curr; ?>)'>
							<i class="glyphicon glyphicon-trash"></i>
						</button>
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class='row'>
		<div class='col-md-12' id='div_design_user'>
			<?php  
				if(isset($data['user_design']))
				{
					foreach((array)$data['user_design'] as $keys => $values)
					{
						foreach($values as $key => $value)
						{
				?>
							<div class='col-lg-2 col-md-3 col-sm-4 col-xs-6 box-art'>
								<div class='box-image'>
									<?php if(isset($value['title'])) echo '<span class="design_title">'.$value['title'].'</span>'; ?>
									<a class="fancybox" href="<?php echo $strUrl . $value['image']; ?>"><img class='img-responsive' alt='' src="<?php echo $strUrl . $value['image']; ?>" /></a>
								</div>
								<a class='box-publish' href='javascript:void(0);'>
									<input class='checkb' type='checkbox' name='ids[]' value='<?php echo $value['design_id']; ?>'>
								</a>
								<div class="dropdown">
									<a id="<?php echo 'dg_'.$key; ?>" class="box-download" data-toggle="dropdown" href="javascript:void(0);"
										title='<?php echo $addons->__('addon_user_design_download_design'); ?>'>
										<i class='fa fa-download'></i>
									</a>
									<ul class="dropdown-menu" aria-labelledby="<?php echo 'dg_'.$key; ?>">
										<?php 
											if(isset($value['print']['elements']))
											{
												$check = false;
												foreach($value['print']['elements'] as $key=>$val)
												{
													if(count($val))
													{
														$check = true;
														echo '<li><a target="_blank" href="'.$strUrl.'design.php?key='.$keys.':'.$value['design_id'].':'.$value['product_id'].':'.$value['product_options'].':'.$value['parent_id'].'&view='.$key.'&idea=1&session_id='.$data['session_id'].'">Download '.$key.'</a></li>';
													}
												}
												if($check == false)
													echo '<li><a href="javascript:void(0);" style="color: #ff0000;">Design not found</a></li>';
											}else
											{
												echo '<li><a href="javascript:void(0);" style="color: #ff0000;">Design not found</a></li>';
											}
										?>
									</ul>
								</div>
								<a target='_blank' class='box-edit' href='<?php echo $strUrl.'sharing.php/'.$keys.':'.$value['design_id'].':'.$value['product_id'].':'.$value['product_options'].':'.$value['parent_id'] ; ?>'
									title='<?php echo $addons->__('addon_user_design_view_title'); ?>'>
									<i class='fa fa-eye'></i>
								</a>
								<div class="box-detail-design text-center"">
									<small class='text-file-name'><?php echo $keys; ?></small>
								</div>
							</div>
				<?php	}
					}
				}
				?>
		</div>
	</div>
	<div class='row'>
		<div class="dataTables_paginate paging_bootstrap" style="float: right;">
			<div class="col-md-12">
				<?php
				if($total_page > 1)
				{
					echo '<ul class="pagination">';
						
						if($data['page_curr'] > 1)
						{
							echo '<li><a onclick="submit_paging(1)" href="javascript:void(0)">&laquo;</a></li>';							
						}
						if($total_page <= 5)
						{
							for($i=1; $i<=$total_page; $i++)
							{
								if($i == $data['page_curr']) echo '<li class="active"><a href="javascript:void(0)">'.$i.'</a></li>';
								else echo '<li><a onclick="submit_paging('.$i.')"  href="javascript:void(0)">'.$i.'</a></li>';
							}
						}
						else
						{
							if($data['page_curr'] < 5)
							{
								for($i=1; $i<=5; $i++)
								{
									if($i == $data['page_curr']) echo '<li class="active"><a href="javascript:void(0)">'.$i.'</a></li>';
									else echo '<li><a onclick="submit_paging('.$i.')" href="javascript:void(0)">'.$i.'</a></li>';
								}
							}
							else
							{
								$start_page = $data['page_curr'];
								$end_page 	= 5 + $data['page_curr'];
								if($end_page > $total_page) 
								{
									$end_page 	= $total_page;
									$start_page = $end_page - 5;
								}
								for($i = $start_page; $i <= $end_page ; $i++)
								{
									if($i < $total_page)
									if($i == $data['page_curr']) echo '<li class="active"><a href="javascript:void(0)">'.$i.'</a></li>';
									else echo '<li><a onclick="submit_paging('.$i.')" href="javascript:void(0)">'.$i.'</a></li>';
								}
							}
							
						}						
						if($data['page_curr'] < $total_page)
						{							
							echo '<li><a onclick="submit_paging('.$total_page.')" href="javascript:void(0)">&raquo;</a></li>';
						} 						
					echo '</ul>';
				}
					?>
			</div>
		</div>
	</div>
</form>
<script type="text/javascript">
	var isCheckedAll = false;
	jQuery('#btnselectalldesign').on('click', function(){
		var inputs = jQuery('#div_design_user input');
		if(isCheckedAll == false) 
		{
			isCheckedAll = true;
			jQuery('#btnselectalldesign').text('<?php echo $addons->__('addon_user_design_unselect_all'); ?>');
			jQuery.each(inputs, function(i, input){
				input.checked = true;
			});
		}		
		else 
		{
			isCheckedAll = false;
			jQuery('#btnselectalldesign').text('<?php echo $addons->__('addon_user_design_select_all'); ?>');
			jQuery.each(inputs, function(i, input){
				input.checked = false;
			});			
		}
	});
	$('input#searchtext').keypress(function(e) {
	  if (e.which == '13') {
		 e.preventDefault();		 
		 submit_search();
	   }
	});
	function submit_paging(segment)
	{
		jQuery('#designform').attr('action', '<?php echo site_url('index.php/design/user_design/'); ?>' + segment);
		jQuery('#designform').submit();
	}
	function submit_change_perpage()
	{
		jQuery('#designform').attr('action', '<?php echo site_url('index.php/design/user_design'); ?>');
		jQuery('#designform').submit();
	}
	function submit_search()
	{
		jQuery('#designform').attr('action', '<?php echo site_url('index.php/design/user_design'); ?>');
		jQuery('#designform').submit();
	}
	function submit_delete(segment)
	{
		var cf = confirm('<?php lang('confirm_delete'); ?>');
		if(cf)
		{
			jQuery('#designform').attr('action', '<?php echo site_url('index.php/design/delete/'); ?>' + segment);
			jQuery('#designform').submit();
		}
	}
	jQuery('.fancybox').fancybox();
</script>