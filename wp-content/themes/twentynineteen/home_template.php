<?php 
/* Template Name: Home template */ 

get_header();
?>
<!-- Begin page content -->
<main role="main">
        
        <!-- Begin Banner Slider -->
        <section class="banner-slider p-0">
  
          <div class="swiper-container">
            <div class="swiper-wrapper">
            <?php if( have_rows('banner') ): ?>

            <?php while( have_rows('banner') ): the_row(); 

		// vars
		$image = get_sub_field('banner_image');
		$title1 = get_sub_field('title1');
        $title2 = get_sub_field('title2');
        $title3 = get_sub_field('title3');

		?>

              <div class="swiper-slide slide1">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-sm-5">
                      <h1 class="col-secondary f-bold"><?php echo $title1;?></h1>
                      <h2 class="col-primary f-bold"><?php echo $title2;?></h2>
                      <h3 class="col-secondary f-bold"><?php echo $title3;?></h3>
                      <a href="<?php echo get_home_url();?>/product-category/create/" class="btn btn-primary btn-lg d-block">Create your own design now!</a>
                    </div>
                    <div class="col-sm-7 banner-img">
                      <img src="<?php echo $image['url']; ?>" alt="<?php echo $title1;?>">
                    </div>
                  </div>
                </div>
              </div>
              <?php endwhile; ?>
              <?php endif; ?>
              
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
  
        </section>
        <!-- End Banner Slider -->
  
        <!-- Begin Creat Design -->
        <section class="createdesign">
          <div class="container">
            <div class="section-title text-center mb-35">
              <h3 class="col-primary wow fadeInUp">Create your own design</h3>
              <p class="col-gray wow fadeInUp">Browse our catalog of hundreds of apparel styles and colors.</p>
            </div>
            <!-- <div class="row">
              <div class="col-sm-8">
                <div class="creatdesgin-box wow fadeIn" data-wow-delay="0.2s">
                  <img src="<?php echo get_template_directory_uri(); ?>/img/createdesign1.jpg" alt="Create Design">
                  <div class="boxinside">
                    <h3 class="f-sbold">Corporate Wear</h3>
                    <p class="col-gray">Lorem ipsum dolor</p>
                    <a href="#" class="btn btn-primary btn-sm">Create Now</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="creatdesgin-box wow fadeIn" data-wow-delay="0.4s">
                  <img src="<?php echo get_template_directory_uri(); ?>/img/createdesign2.jpg" alt="Create Design">
                  <div class="boxinside">
                    <h3 class="f-sbold">T-Shirt</h3>
                    <p class="col-gray">Lorem ipsum dolor</p>
                    <a href="#" class="btn btn-primary btn-sm">Create Now</a>
                  </div>
                </div>
              </div>
            </div> -->
            <div class="row">
            <?php
                $get_featured_cats = array(
                  'taxonomy'     => 'product_cat',
                    'orderby'      => 'name',
                    'hide_empty'   => '0',
                  'include'      => $cat_array
                );
                $all_categories = get_categories( $get_featured_cats );
                $j = 1;
                foreach ($all_categories as $cat) {
                    if($cat->term_id == '83' || $cat->term_id == '84' || $cat->term_id == '85' || $cat->term_id == '86' || $cat->term_id == '87') 
                    {
                        $cat_id   = $cat->term_id;
                        $cat_link = get_category_link( $cat_id );
                        
                        $thumbnail_id = get_woocommerce_term_meta( $cat->term_id, 'thumbnail_id', true ); 
                        $image = wp_get_attachment_url( $thumbnail_id ); 
                        
                        ?>
          
          <div class="<?php if($cat_id == '83'){ echo 'col-sm-8';}else {echo 'col-sm-4';}?>">
                  <div class="creatdesgin-box wow fadeIn" data-wow-delay="0.6s">
                      <?php
                      if ( $image ) {
                    
                          echo '<img src="' . $image . '" alt="Create Design">';
                      }?>
                    <div class="boxinside">
                      <h3 class="f-sbold"><?php  echo $cat->name; ?></h3>
                      <p class="col-gray"><?php  echo $cat->description; ?></p>
                      <a href="<?php echo $cat_link;?>" class="btn btn-primary btn-sm">Create Now</a>
                    </div>
                  </div>
                </div>
          <?php
      }
    $j++;
  }

wp_reset_query();
?>



         
            
          </div>
        </section>
        <!-- End Creat Design -->
  
        <!-- Begin Box Layout -->
        <section class="boxlayout">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6">
                <div class="boxlayout-box wow fadeInLeft" data-wow-delay="0.4s">
                  <div class="boxlayout-content">
                    <h5 class="f-medium col-primary"><?php echo get_field('banner_left_title');?></h5>
                    <p class="col-gray"><?php echo get_field('banner_left_description');?></p>
                    <a href="<?php echo get_home_url();?>/product-category/create/" class="btn btn-secondary btn-sm">Create Now <span class="icon fa fa-long-arrow-right align-middle"></span></a>
                  </div>
                  <div class="boxlayout-img">
                    <img src="<?php echo get_field('offer_banner_left')['url'];?>">
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="boxlayout-box wow fadeInRight" data-wow-delay="0.4s">
                  <div class="boxlayout-content">
                    <h5 class="f-medium col-primary"><?php echo get_field('banner_right_title');?></h5>
                    <p class="col-gray"><?php echo get_field('banner_right_description');?></p>
                    <a href="<?php echo get_home_url();?>/shop" class="btn btn-secondary btn-sm">Shop Now <span class="icon fa fa-long-arrow-right align-middle"></span></a>
                  </div>
                  <div class="boxlayout-img">
                    <img src="<?php echo get_field('banner_right')['url'];?>">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End Box Layout -->
  
        <!-- Begin How it works -->
        <section class="howitworks">
          <div class="container">
            <div class="section-title text-center mb-35">
              <h3 class="col-primary wow fadeInUp">How it Works</h3>
              <p class="col-gray wow fadeInUp">Create your own shirts and more in our online design studio.</p>
            </div>
            <div class="row">
            <?php if( have_rows('image') ): ?>

<?php while( have_rows('image') ): the_row(); 

// vars
$how_it_work_image = get_sub_field('image');
$how_it_work_title = get_sub_field('title');
$how_it_work_description = get_sub_field('description');

?>
              <div class="col-sm-4">
                <div class="howworkbox text-center wow fadeInUp" data-wow-delay="0.3s">
                  <img src="<?php echo $how_it_work_image['url'];?>" alt="<?php echo $how_it_work_title;?>">
                  <h6 class="f-medium"><?php echo $how_it_work_title;?></h6>
                  <p class="col-gray"><?php echo $how_it_work_description;?></p>
                </div>
              </div>
         <?php
         endwhile;
        endif;
         ?>
  
            </div>
          </div>
        </section>
        <!-- End How it works -->
  
        <!-- Begin promise -->
        <!-- <section class="promise">
          <div class="container">
            <div class="row align-items-center">
              
              <div class="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                <img src="<?php echo get_template_directory_uri(); ?>/img/cards.png" alt="Cards">
              </div>
              <div class="col-sm-4 wow fadeIn" data-wow-delay="0.4s">
                <h5 class="col-white f-medium">Our Promise to You </h5>
                <p class="col-white">If you're not 100% satisfied,<br>we'll take your order back within 30 days.</p>
              </div>
              <div class="col-sm-4 wow bounceIn" data-wow-delay="0.5s">
                <a href="#" class="btn btn-sm btn-primary">View More Details</a>
              </div>
  
            </div>
          </div>
        </section> -->

        <?php
        echo do_shortcode('[widget id="custom_html-3"]');
        ?>

        <!-- End promise -->
  
        <!-- Begin shop by Category -->
        <section class="shopbycategory">
          <div class="container">
            <div class="section-title text-center mb-50">
              <h3 class="col-primary wow fadeInUp">Shop by Categories</h3>
            </div>
           <div class="row">
              
             
             
           <div class="col-sm-6 col-md-3 mt-20 wow fadeInUp" data-wow-delay="0.3s">
              <?php

                $taxonomy     = 'product_cat';
                $orderby      = 'name';  
                $show_count   = 0;      // 1 for yes, 0 for no
                $pad_counts   = 0;      // 1 for yes, 0 for no
                $hierarchical = 1;      // 1 for yes, 0 for no  
                $title        = '';  
                $empty        = 0;

                $args = array(
                      'taxonomy'     => $taxonomy,
                      'orderby'      => $orderby,
                      'show_count'   => $show_count,
                      'pad_counts'   => $pad_counts,
                      'hierarchical' => $hierarchical,
                      'title_li'     => $title,
                      'hide_empty'   => $empty
                );
                  $all_categories = get_categories( $args );
                  foreach ($all_categories as $cat) {
                    if($cat->term_id == '15')
                    {
                    if($cat->category_parent == 0) {
                        $category_id = $cat->term_id;       
                        echo ' <ul><li class="rowtitle f-sbold"><br /><a href="'. get_term_link($cat->slug, 'product_cat') .'">'. $cat->name .'</a></li>';

                        $args2 = array(
                                'taxonomy'     => $taxonomy,
                                'child_of'     => 0,
                                'parent'       => $category_id,
                                'orderby'      => $orderby,
                                'show_count'   => $show_count,
                                'pad_counts'   => $pad_counts,
                                'hierarchical' => $hierarchical,
                                'title_li'     => $title,
                                'hide_empty'   => $empty
                        );
                        $sub_cats = get_categories( $args2 );
                        if($sub_cats) {
                            foreach($sub_cats as $sub_category) {
                                echo  '<li><a href="'.get_term_link($sub_category->slug,'product_cat').'">'.$sub_category->name .'</a></li>';
                            }   
                        }
                    } 
                  }
                    echo '</ul>';   
                  }
                ?>
              </div>
              <div class="col-sm-6 col-md-3 mt-20 wow fadeInUp" data-wow-delay="0.3s">
              <?php

                $taxonomy     = 'product_cat';
                $orderby      = 'name';  
                $show_count   = 0;      // 1 for yes, 0 for no
                $pad_counts   = 0;      // 1 for yes, 0 for no
                $hierarchical = 1;      // 1 for yes, 0 for no  
                $title        = '';  
                $empty        = 0;

                $args = array(
                      'taxonomy'     => $taxonomy,
                      'orderby'      => $orderby,
                      'show_count'   => $show_count,
                      'pad_counts'   => $pad_counts,
                      'hierarchical' => $hierarchical,
                      'title_li'     => $title,
                      'hide_empty'   => $empty
                );
                  $all_categories = get_categories( $args );
                  foreach ($all_categories as $cat) {
                    if($cat->term_id == '38')
                    {
                    if($cat->category_parent == 0) {
                        $category_id = $cat->term_id;       
                        echo ' <ul><li class="rowtitle f-sbold"><br /><a href="'. get_term_link($cat->slug, 'product_cat') .'">'. $cat->name .'</a></li>';

                        $args2 = array(
                                'taxonomy'     => $taxonomy,
                                'child_of'     => 0,
                                'parent'       => $category_id,
                                'orderby'      => $orderby,
                                'show_count'   => $show_count,
                                'pad_counts'   => $pad_counts,
                                'hierarchical' => $hierarchical,
                                'title_li'     => $title,
                                'hide_empty'   => $empty
                        );
                        $sub_cats = get_categories( $args2 );
                        if($sub_cats) {
                            foreach($sub_cats as $sub_category) {
                                echo  '<li><a href="'.get_term_link($sub_category->slug,'product_cat').'">'.$sub_category->name .'</a></li>';
                            }   
                        }
                    } 
                  }
                    echo '</ul>';   
                  }
                ?>
              </div>
              <div class="col-sm-6 col-md-3 mt-20 wow fadeInUp" data-wow-delay="0.3s">
              <?php

                $taxonomy     = 'product_cat';
                $orderby      = 'name';  
                $show_count   = 0;      // 1 for yes, 0 for no
                $pad_counts   = 0;      // 1 for yes, 0 for no
                $hierarchical = 1;      // 1 for yes, 0 for no  
                $title        = '';  
                $empty        = 0;

                $args = array(
                      'taxonomy'     => $taxonomy,
                      'orderby'      => $orderby,
                      'show_count'   => $show_count,
                      'pad_counts'   => $pad_counts,
                      'hierarchical' => $hierarchical,
                      'title_li'     => $title,
                      'hide_empty'   => $empty
                );
                  $all_categories = get_categories( $args );
                  foreach ($all_categories as $cat) {
                    if($cat->term_id == '39')
                    {
                    if($cat->category_parent == 0) {
                        $category_id = $cat->term_id;       
                        echo ' <ul><li class="rowtitle f-sbold"><br /><a href="'. get_term_link($cat->slug, 'product_cat') .'">'. $cat->name .'</a></li>';

                        $args2 = array(
                                'taxonomy'     => $taxonomy,
                                'child_of'     => 0,
                                'parent'       => $category_id,
                                'orderby'      => $orderby,
                                'show_count'   => $show_count,
                                'pad_counts'   => $pad_counts,
                                'hierarchical' => $hierarchical,
                                'title_li'     => $title,
                                'hide_empty'   => $empty
                        );
                        $sub_cats = get_categories( $args2 );
                        if($sub_cats) {
                            foreach($sub_cats as $sub_category) {
                                echo  '<li><a href="'.get_term_link($sub_category->slug,'product_cat').'">'.$sub_category->name .'</a></li>';
                            }   
                        }
                    } 
                  }
                    echo '</ul>';   
                  }
                ?>
              </div>
              <div class="col-sm-6 col-md-3 mt-20 wow fadeInUp" data-wow-delay="0.3s">
              <?php

                $taxonomy     = 'product_cat';
                $orderby      = 'name';  
                $show_count   = 0;      // 1 for yes, 0 for no
                $pad_counts   = 0;      // 1 for yes, 0 for no
                $hierarchical = 1;      // 1 for yes, 0 for no  
                $title        = '';  
                $empty        = 0;

                $args = array(
                      'taxonomy'     => $taxonomy,
                      'orderby'      => $orderby,
                      'show_count'   => $show_count,
                      'pad_counts'   => $pad_counts,
                      'hierarchical' => $hierarchical,
                      'title_li'     => $title,
                      'hide_empty'   => $empty
                );
                  $all_categories = get_categories( $args );
                  foreach ($all_categories as $cat) {
                    if($cat->term_id == '15')
                    {
                    if($cat->category_parent == 0) {
                        $category_id = $cat->term_id;       
                        echo ' <ul><li class="rowtitle f-sbold"><br /><a href="'. get_term_link($cat->slug, 'product_cat') .'">'. $cat->name .'</a></li>';

                        $args2 = array(
                                'taxonomy'     => $taxonomy,
                                'child_of'     => 0,
                                'parent'       => $category_id,
                                'orderby'      => $orderby,
                                'show_count'   => $show_count,
                                'pad_counts'   => $pad_counts,
                                'hierarchical' => $hierarchical,
                                'title_li'     => $title,
                                'hide_empty'   => $empty
                        );
                        $sub_cats = get_categories( $args2 );
                        if($sub_cats) {
                            foreach($sub_cats as $sub_category) {
                                echo  '<li><a href="'.get_term_link($sub_category->slug,'product_cat').'">'.$sub_category->name .'</a></li>';
                            }   
                        }
                    } 
                  }
                    echo '</ul>';   
                  }
                ?>
              </div>
           </div>
            </div>
          
        </section>
        <!-- End shop by Category -->
  
      </main>
  
<?php
get_footer();
?>