<?php 
/* Template Name: Legal-Information template */ 

get_header();
?>

<!-- Begin page content -->
    <main role="main">

      <section class="privacypoicy  legal_information">
        <div class="container">
         <h2>Legal Information</h2>
          <div class="row">
           <div class="col-lg-3">
            <img src="<?php echo get_field('image')['url'];?>" style="display: block;" width="360">
           
           </div>
           <div class="col-lg-9">
			<?php echo get_field('description');?>
           </div>
       
        </div>
      
         
  <div class="row legal_information_padding-top">
           <div class="col-lg-6">
            <div class="row">
              <div class="col-sm-6"> <p><b>Address:</b><br>
              <?php echo get_field('address');?></p>
              </div>
            <div class="col-sm-6"> <p><b>E-Mail:</b><br>
           <?php echo get_field('e-mail');?>
			</p>
              </div>

            </div>
           
           </div>
           <div class="col-lg-6">
                <div class="row">
              <div class="col-sm-6"> <p><b>DMCA:</b><br>
           <?php echo get_field('dmca');?>
			</p>
              </div>
                <div class="col-sm-6"> <p><b>Fax:</b><br>
           <?php echo get_field('fax');?>
			</p>
              </div>

            </div>
           </div>
       
        </div>
   
        </div>

      </section>

    </main>
<?php
get_footer();
?>