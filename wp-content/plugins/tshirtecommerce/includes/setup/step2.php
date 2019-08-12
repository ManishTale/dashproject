<?php $token	= session_id(); ?>
<div class="e-steps">
	<div class="e-steps-label">
		<div class="e-step-1 e-step e-step-active">
			Settings Plugin <span>1</span>
		</div>
		<div class="e-step-2 e-step e-step-active">
			Verify Purchased<span>2</span>
		</div>
		<div class="e-step-3 e-step">
			Import Data <span>3</span>
		</div>
	</div>

	<div class="progress">
	  <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="66.66" aria-valuemin="0" aria-valuemax="100" style="width: 66.66%">
		<span class="sr-only">25% Complete (success)</span>
	  </div>
	</div>
</div>

<div class="page-content">
	<h2 class="title">Verify Purchased Code</h2>
	<p>Please add purchased code of Envato and verify your site. <a href="https://help.market.envato.com/hc/en-us/articles/202822600-Where-can-I-find-my-Purchase-Code-" target="_bank">Click here</a> for instructions to find your purchase code.</p>
	<p>Note: System will connect to <a href="<?php echo MAIN_STORE_URL; ?>" target="_bank">our site</a> and active your site. After verified your site, you can download FREE theme, product, design...</p>
	<?php if( isset($error) ) { ?>
		<br />
		<div class="alert alert-danger" role="alert">
			<?php echo $error; ?>
		</div>
	<?php } ?>
	
	<hr />
	
	<form class="form-horizontal" method="post" action="<?php echo admin_url('index.php?page=tshirtecommerce-setting&step=verify'); ?>">
		
		<div class="form-group" style="margin-bottom: 0px;">
			<label class="col-xs-7">Enter Purchased Code</label>
			<div class="col-xs-7">
				<input type="text" name="purchased_code" value="<?php echo $purchased_code; ?>" class="form-control">
			</div>
		</div>

		<hr />

		<p class="text-right">
			<a class="btn btn-default pull-left" href="<?php echo admin_url('index.php?page=tshirtecommerce-setting&step=designer'); ?>" role="button">Prev</a>
			<a class="btn btn-default" href="<?php echo admin_url('index.php?page=tshirtecommerce-setting&step=product'); ?>" role="button">Skip this step</a>
			<button type="submit" class="btn btn-success" role="button">Verify Now</button>
		</p>
	</form>
</div>