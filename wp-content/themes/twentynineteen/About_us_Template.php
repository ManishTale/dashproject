<?php 
/* Template Name: About Us template */ 

get_header();
?>

<!-- Begin page content -->
    <main role="main">

      <section class="aboutus">
        <div class="container">
          <h1>About Us</h1>
          <img src="<?php echo get_field('image')['url'];?>" style=" display: inline;" >
            <h1>Welcome to Dash</h1>
              <?php echo get_field('welcome_to_dash');?>
         <div class="row">
           <div class="col-lg-6">
              <h2>Our Mission</h2>
				<?php echo get_field('our_mission');?>
           </div>
           <div class="col-lg-6">
              <h2>Our Vision</h2>
			  <?php echo get_field('our_vision');?>
           </div>
        </div>

        </div>

      </section>

    </main>
	<!-- Begin page content End -->
<?php
get_footer();
?>

 