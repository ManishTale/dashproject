<?php 
/* Template Name: Privacy Policy template */ 

get_header();
?>

<!-- Begin page content -->
    <main role="main">

      <section class="privacypoicy">
        <div class="container">


          <h2>Dash Privacy Policy</h2>
       
         <div class="row">
           <div class="col-lg-4">
         
          <img src="<?php echo get_field('image')['url'];?>" style="display: inline;" width="375">
           
           </div>
           <div class="col-lg-8">
            <?php echo get_field('image_right_description');?>
           </div>
       
        </div>
      
          <?php echo get_field('privacy_policy');?>
      
        </div>

        
      
     

      </section>

    </main>

<?php
get_footer();
?>