<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-01-10
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */

$is_logged = $_SESSION['is_admin'];
// echo "<pre>"; print_r($is_logged); echo "</pre>"; 
$user = $is_logged['id'];
$sess_name = $is_logged['username'];
$useremail = $is_logged['email'];
if ($user == 1){
	$status = 'Accepted';
} else {
	$status = 'Pending';
}

// $username = $is_logged['display_name'];
?>
<script src="<?php echo site_url('assets/js/dg-function.js'); ?>"></script>
<script src="<?php echo site_url('assets/plugins/validate/validate.js'); ?>"></script>
<div class="row">
	<div class="col-md-6 pull-right text-right">
		<!-- <button type="button" class="btn btn-primary checkdata">Check</button> -->
		<button type="button" class="btn btn-primary saveart" onclick="dgUI.art.validation()"><?php lang('save');?></button>
		<a href="<?php echo site_url('index.php/vendor'); ?>" class="btn btn-danger"><?php lang('close');?></a>
	</div>
</div>
<hr/>
<div class="panel panel-default">
	<div class="panel-heading">
		<i class="clip-list"></i>				
		<?php echo $data['sub_title']; ?>
	</div>
	<div class="panel-body">
		<form enctype="multipart/form-data" id="add-clipart" class="form-horizontal" method="post" action="<?php echo site_url('index.php/vendor/save'); ?>">
			<div class="col-sm-10">
				<!-- <div class="form-group">
					<div class="alert alert-warning fade in">
						<button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>
						<strong><?php lang('art_choose_file_upload'); ?></strong><br>
						<small><?php lang('art_file_support_type'); ?></small><br>
						<small><?php lang('art_file_support_size'); ?> 10MB</small>
					</div>
				</div> -->
			</div>
			<style type="text/css">
				.description {
				  resize: none;
				}
			</style>
			<div class="form-group">
				<label class="col-sm-3"><?php //lang('art_upload'); ?></label>
				<div class="col-sm-7">
				<!-- <input type="file" id="dg-file" value="" name="file[]" multiple=""> -->
				<input type="file" id="dg-file" value="" name="file[]" multiple="" class="hidden">
				<?php
					// echo "<pre>";
					// print_r($data['art']);
					// echo "</pre>";
				?>
				

					<div id="image-list">
						<?php if(setValue($data['art'], 'thumb', '') != '') { ?>
						<img src="<?php echo setValue($data['art'], 'url', '').setValue($data['art'], 'thumb', ''); ?>" width="100" alt="">
						<?php } ?>
					</div>
					<div id="response"></div>
					<div id="file-data">
						<input type="hidden" id="fle_url" name="art[fle_url]" value="<?php echo setValue($data['art'], 'url', ''); ?>">
						<input type="hidden" name="art[file_name]" value="<?php echo setValue($data['art'], 'file_name', ''); ?>">
						<input type="hidden" name="art[file_type]" value="<?php echo setValue($data['art'], 'file_type', ''); ?>">
						<input type="hidden" name="art[colors]" value="<?php echo setValue($data['art'], 'colors', ''); ?>">					
						<input type="hidden" name="art[path]" value="<?php echo setValue($data['art'], 'path', ''); ?>">					
						<input type="hidden" name="art[url]" value="<?php echo setValue($data['art'], 'url', ''); ?>">					
						<input type="hidden" name="art[change_color]" value="<?php echo setValue($data['art'], 'change_color', ''); ?>">					
						<input type="hidden" name="art[thumb]" value="<?php echo setValue($data['art'], 'thumb', ''); ?>">					
						<input type="hidden" name="art[medium]" value="<?php echo setValue($data['art'], 'medium', ''); ?>">					
						<input type="hidden" name="art[description]" value="<?php echo setValue($data['art'], 'description', ''); ?>">
						<!-- <input type="hidden" name="art[session_id]" value="<?php echo setValue($data['art'], 'session_id', $user); ?>">	 -->
						<!-- <input type="text" class="form-control price" name="art[price]" value="<?php echo setValue($data['art'], 'price', ''); ?>"> -->

						<input type="hidden" class="form-control ids" name="id" value="<?php echo $data['id']; ?>">
			<input type="hidden" class="sess_id" name="art[session_id]" value="<?php echo setValue($data['art'], 'session_id', $user); ?>">
			 <input type="hidden" name="art[status]" value="<?php echo setValue($data['art'], 'status', $status); ?>">
			<input type="hidden" name="art[sess_name]" value="<?php echo setValue($data['art'], 'sess_name', $sess_name); ?>">
			<input type="hidden" class="sessemail" name="art[useremail]" value="<?php echo setValue($data['art'], 'useremail', $useremail); ?>">		
			</div>
				</div>
			</div>
			
			<div class="form-group">
				<label class="col-sm-3"><?php lang('title'); ?></label>
				<div class="col-sm-7">
					
					<input type="text" class="form-control title" name="art[title]" value="<?php echo setValue($data['art'], 'title', ''); ?>" id="artlang_title" readonly>
				</div>
			</div>
			<?php if($user == 1){?>
			<div class="form-group">
				<label class="col-sm-3"><?php lang('add_price'); ?></label>
				<div class="col-sm-7">
					<input type="text" class="form-control price" name="art[price]" value="<?php echo setValue($data['art'], 'price', ''); ?>">
					<span id="errprice" style="color: green; margin-top: 10px;"></span>
				</div>
			</div>
			<?php }?>
			<div class="form-group">
				<label class="col-sm-3"><?php lang('art_category_choose'); ?></label>
				<div class="col-sm-7">
					<select name="art[cate_id]" class="form-control" disabled>
						<option value="0"><?php lang('art_category'); ?></option>
						<?php echo dispayCateTree($data['categories'], 0, array(setValue($data['art'], 'cate_id', 0))); ?>
					</select>
				</div>
			</div>
			<?php if($user == 1){?>
			<div class="form-group">
				<label class="col-sm-3"><?php lang('description'); ?></label>
				<div class="col-sm-7">
					<textarea type="text" class="form-control description" name="art[description]" rows="3"><?php echo setValue($data['art'], 'description', ''); ?></textarea>
					<span id="error_res"></span>
					</div>
			</div>
			<?php }?>

			<?php $stat = setValue($data['art'], 'status');  if($user == 1 && $stat == 'Pending'){?>
			<!-- <div class="form-group">
				<label class="col-sm-3">Status</label>
				<div class="col-sm-7">
					<input type="text" class="form-control" name="art[status]" value="<?php echo setValue($data['art'], 'status', ''); ?>">
				</div>
			</div> -->
			<div class="form-group">
				<label class="col-sm-3">Status</label>
				<div class="col-sm-7">
					<select name="art[status]" class="form-control status">
						<option value="<?php echo setValue($data['art'], 'status', ''); ?>"><?php echo setValue($data['art'], 'status', ''); ?></option>
						<option value="Accepted">Accepted</option>
						<option value="Rejected">Rejected</option>
					</select>
				</div>
			</div>
			<?php }?>

			
		</form>
			
	</div>
	<?php 
		?>
</div>
<script>
$(document).ready(function(){
	var price = $('.price').val();
	var status = $('.status').find(":selected").val();
	// alert(status);
		if(price == 0 && status == "Pending"){
			$('.price').attr('readonly',true);
			$('.saveart').hide();
		}
	});
	$('.status').on('change', function() {
		var stat = $('.status').val();
		var price = $('.price').val();
		// var desc = $('textarea.description').val();
		var sessemail = $('.sessemail').val();
		var image = $('#image-list img').attr('src');
		// alert(stat+' '+price+' '+desc+' '+ids+' '+image);

		if (stat == "Pending") {
			$('.saveart').hide();
			document.getElementById("errprice").innerHTML = '';
			$('.price').attr('readonly',true);
		}
		else if(stat == "Rejected"){
			$('.price').attr('readonly',true);
			$('.saveart').show();
			document.getElementById("errprice").innerHTML = '';
			document.getElementById("error_res").innerHTML = 'Please add reason to reject clipart';
			
		}
		else if(stat == "Accepted"){
			$('.price').attr('readonly',false);
			if($('.price').val() == 0){
				document.getElementById("errprice").innerHTML = 'Status is Accepted please add clipart price';
				$('.saveart').hide();
				$('.price').attr('readonly',false);
				document.getElementById("error_res").innerHTML = '';
			} 
			// $(".checkdata").click(function(){
				// $(".checkdata").on("click", function(event) {
				// event.preventDefault();
				// var clipartprice = $('.price').val();
				// var desc = $('.description').val();
            	// $.ajax({
                // url: "<?php echo site_url('../../../wp-includes/mailtest.php');?>",
                // type: "post",
                // data: {stat : stat, clipartprice : clipartprice, desc : desc, sessemail : sessemail, image : image},
                // success: function(d) {
                //     alert(d);
		        //         }
		        //     });
		        // });
		}
	});
	$(".price").on("keyup",function() {
      if($('.price').val() == 0){
		  document.getElementById("errprice").innerHTML = '<p style="color: red">Price should not be 0</p>';
			// $('.saveart').hide();
		  if($('.price').val() == ""){
			  document.getElementById("errprice").innerHTML = '<p style="color: red">Field should not be empty</p>';
			$('.saveart').hide();
		  }		  
	  } else {
		  var reg = /^\d+(\.\d{1,2})?$/;
		  if (!reg.test($('.price').val())){
			document.getElementById("errprice").innerHTML = '<p style="color: red">Please match require pattern ie 00 or 00.00</p>';
			$('.saveart').hide();
		} else {
			  document.getElementById("errprice").innerHTML = '';
			$('.saveart').show();
		  }
		  
	  }
    });

    $(".description").on("keyup",function() {
      if($('.description').val() == '' ){
		  document.getElementById("error_res").innerHTML = '<p style="color: red">Description should not be empty</p>';
			$('.saveart').hide();	  
	  }
	  else {
	  	document.getElementById("error_res").innerHTML = '';
			$('.saveart').show();
	  }
    });

</script>
