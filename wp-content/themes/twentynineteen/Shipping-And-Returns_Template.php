<?php 
/* Template Name: Shipping And Returns template */ 

get_header();
?>

<main role="main">

      <section class="aboutus">
        <div class="container">


          <h1>Shipping And Returns</h1>
        <?php echo get_field('description_top');?>
          <img src="<?php echo get_field('image')['url'];?>" style=" display: inline;" >
       
             
         <div class="row">
           <!-- <div class="col-lg-6"> -->
             <?php echo get_field('description_bottom');?>

         
           <!-- </div> -->
       
        </div>
    
        </div>

      </section>

    </main>

<?php
get_footer();
?>