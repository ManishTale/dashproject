<?php 
/* Template Name: FAQ template */ 

get_header();
?>

<!-- Begin page content -->
    <main role="main">

      <section class="faq">
        <div class="container">
          <!------ Include the above in your HEAD tag ---------->
 
    <h1>Frequently Asked Questions</h1>
    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
		<?php $i=1; while( have_rows('faq') ): the_row(); 

		// vars
		$question = get_sub_field('question');
		$answer = get_sub_field('answer');
        

    ?>
    
        <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="heading<?php echo $i;?>">
                <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse<?php echo $i;?>" aria-expanded="false" aria-controls="collapse<?php echo $i;?>">
                         <i class="fa fa-plus" aria-hidden="true"></i>
                       <?php echo $question;?>
                    </a>
                </h4>
            </div>
            <div id="collapse<?php echo $i;?>" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading<?php echo $i;?>">
                <div class="panel-body">
                 <?php echo $answer;?>
                </div>
            </div>
        </div>
       
   <!-- panel-group -->
    <?php $i++; endwhile; ?>
<!-- container -->
        
</div>
    
      </section>
    </main>
<?php
get_footer();
?>
