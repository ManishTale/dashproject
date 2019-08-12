<?php 
/* Template Name: Contact Us template */ 

get_header();
?> <!-- Begin page content -->
<main role="main">

  
  <section class="contactuspage">
    <div class="container">

      <div class="section-title">
        <h2>Contact Us</h2>
        <p>Our service team will be happy to answer you any questions related to Dash</p>
      </div>

     <!-- <div class="contactusbox box">
        <h3 class="col-primary f-medium">Send us a message</h3>
        <div class="row position-relative">
          <div class="col-sm-4">
            <div class="form-group float-label">
              <input type="text" id="name" name="" value="John Doe" class="form-control" placeholder="Name">
              <label class="label" for="name">Name</label>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group float-label">
              <input type="email" id="email" name="" class="form-control" placeholder="Email">
              <label class="label" for="email">Email</label>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group float-label">
              <input type="text" id="phone" name="" class="form-control" placeholder="Phone">
              <label class="label" for="Phone">Phone</label>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group float-label">
              <input type="text" id="subject" name="" class="form-control" placeholder="Subject">
              <label class="label" for="subject">Subject</label>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group float-label">
              <input type="text" id="order_number" name="" class="form-control" placeholder="Order Number">
              <label class="label" for="order_number">Order Number</label>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group float-label">
              <input class="form-control" type="file" id="attachment"/>
              <label class="label" for="attachment">Attachment</label>
              <i class="icon zmdi zmdi-attachment"></i>
              <div class="form-controlGroup-inputWrapper">
                  <label class="form-input form-input--file">
                      
                      
                  </label>
              </div>
              
            </div>
          </div>
          <div class="col-sm-12">
            <div class="form-group float-label">
              <textarea id="message" name="" class="form-control" placeholder="Message"></textarea>
              <label class="label" for="message">Message</label>
            </div>
          </div>
          <div class="submitbutton">
            <button type="button" class="btn btn-secondary"><span class="icon fa fa-paper-plane"></span></button>
          </div>
        </div>
      </div>

    </div>-->

    <?php echo do_shortcode( '[contact-form-7 id="1234" title="Contact form 1"]' ); ?>
  </section>

</main>





<?php
get_footer();
?>