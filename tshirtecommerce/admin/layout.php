<?php include_once('components/header.php'); ?>
	<?php include ('components/top.php'); ?>
		<div class="preloader">
			<svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle> </svg>
		</div>
		<div class="main-container">
			<?php include ('components/left.php'); ?>
			<!-- start: PAGE -->
			<div class="main-content">
				<!-- end: SPANEL CONFIGURATION MODAL FORM -->
				<div class="container">
					<!-- start: PAGE HEADER -->
					<div class="row">
						<div class="col-sm-12">
						
						<!-- <h1>Hi Manish</h1> -->
							<button data-target=".navbar-collapse" data-toggle="collapse" class="navbar-toggle" type="button">
								<span class="clip-list-2"></span>
							</button>
							
							<ol class="breadcrumb">
								<?php if($id == 1){?>
								<li class="home">
									<i class="clip-home-3"></i> <a href="index.php">Home</a>
								</li>
								<li class="active"><?php echo $title; ?></li>
								<?php } ?>
							</ol>
							<?php 
							$id = $is_logged['id'];
							  $name = $is_logged['username'];
								if($id != 1){
									?>
							<div class="page-header" style="text-align: center;">
								<h2>Hi&nbsp;<?php echo $name; ?>!<!--<small><?php echo $sub_title; ?></small>--></h2>
							</div>
							<?php } else {?>
							<div class="page-header">
								<h2><?php echo $title; ?> <small><?php echo $sub_title; ?></small></h2>
							</div>
							<?php }?>
							
						</div>
					</div>
					<?php echo $content; ?>
				</div>
			</div>
			<!-- end: PAGE -->
		</div>
<?php include ('components/footer.php'); ?>	