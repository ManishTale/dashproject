<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */
?><!doctype html>
<html <?php language_attributes(); ?> >
<head>
  
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="profile" href="https://gmpg.org/xfn/11" />
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<!--<a class="skip-link screen-reader-text" href="#content"><?php //_e( 'Skip to content', 'twentynineteen' ); ?></a>-->

	<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon.png">

    <title>Dash</title>

    <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Bootstrap core CSS -->
    <link href="<?php echo get_template_directory_uri(); ?>/css/bootstrap.min.css" rel="stylesheet">

    <!-- Swiper Slider-->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/swiper.min.css">

    <!-- Wow Css -->
    <link href="<?php echo get_template_directory_uri(); ?>/css/animation/animate.css" rel="stylesheet">

    <!-- Custom styles-->
    <link href="<?php echo get_template_directory_uri(); ?>/fonts/font-awesome/css/font-awesome.css" rel="stylesheet">
    <link href="<?php echo get_template_directory_uri(); ?>/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css" rel="stylesheet" >
    <link href="<?php echo get_template_directory_uri(); ?>/css/style.css" rel="stylesheet">
    <link href="<?php echo get_template_directory_uri(); ?>/css/responsive.css" rel="stylesheet">

	<script src="<?php echo get_template_directory_uri(); ?>/js/modernizr.js"></script>
  
	<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/themes/smoothness/jquery-ui.css">
  </head>
<?php
$current_user = wp_get_current_user();
?>
  <body>
    <!-- Begin Header -->
    <header>
      <!-- Begin top header -->
      <div class="top-header bg-primary">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-4">
              <div class="top-header-left">
                <span>Phone: <a href="tel:9876 543 210">9876543210</a></span>
                <span>Email: <a href="mailto:info@dash.com">info@dash.com</a></span>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="top-header-right">
                <ul>
				<?php if($current_user->data->display_name!='')
				{?>
				                  <li><a href="<?php echo get_home_url();?>/my-account" title="Sign In"><span class="icon fa fa-user-circle-o"></span> <?php echo $current_user->data->display_name;?></a></li>
								  <li><a href="<?php echo wp_logout_url( home_url() ); ?>" title="Logout"><span class="icon fa fa-sign-out"></span> Logout</a></li>
        <?php }else{?>

                         <li class="dropdown show">
                           <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true" href="<?php echo get_home_url();?>/my-account"><span class="icon fa fa-user-circle-o"></span> Sign in</a>
                           <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(24px, 27px, 0px);">
                         <a class="dropdown-item" href="<?php echo get_home_url();?>/my-account" title="My account"><span class="icon fa fa-user-circle-o"></span> My Account</a>
                         </div>
                        </li>
        <?php }?>
        <li><a  aria-expanded="true" href="<?php echo get_home_url();?>/vendor-login-2/"><span class="icon fas fa-store" ></span> Sell on Dash</a></li>
                  <?php echo do_shortcode('[gtranslate]'); ?>
                  <li class="social">
                    <a href="#"><span class="icon fa fa-facebook"></span></a>
                    <a href="#"><span class="icon fa fa-twitter"></span></a>
                    <a href="#"><span class="icon fa fa-youtube-play"></span></a>
                    <a href="#"><span class="icon fa fa-instagram"></span></a>
                    <a href="#"><span class="icon fa fa-pinterest"></span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End top header -->

      <!-- Begin Main header -->
      <div class="main-header">
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container">

            <a class="navbar-brand" href="<?php echo get_home_url();?>"><img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="Logo"></a>
            

            <div class="main-header-right">
              <ul class="right-links list-inline">
                <li class="list-inline-item dropdown search-item">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Search"><span class="icon fa fa-search"></span></a>
                  <div class="dropdown-menu" aria-labelledby="dropdown07">
                    <!--<form>
                      <div class="form-group">
                        <input type="text" name="" class="form-control">
                        <button type="submit"><span class="icon fa fa-search"></button>
                      </div>
                    </form>-->
                    <?php //echo do_shortcode('[widget id="autocomplete-2"]');?>
                    <?php echo do_shortcode('[aws_search_form]');?>
                    
                  </div>
                </li>
                <?php if($current_user->data->display_name!=''){?>
                  <li class="list-inline-item">
                  <a href="<?php echo get_home_url();?>/wishlist/" title="Wishlist"><span class="icon fa fa-heart-o"></span> <span class="notificon"><?php echo $wishlist_count = YITH_WCWL()->count_products(); ?></span></a>
                </li>
                <?php }else{ ?> 
                <li class="list-inline-item">
                  <a href="<?php echo get_home_url();?>/my-account/" title="Wishlist"><span class="icon fa fa-heart-o"></span> <span class="notificon"><?php echo $wishlist_count = YITH_WCWL()->count_products(); ?></span></a>
                </li><?php }?>
                <li class="list-inline-item">
                <?php global $woocommerce; ?>
                <a  href="<?php echo $woocommerce->cart->get_cart_url(); ?>"
                title="<?php _e('Cart View', 'woothemes'); ?>"><span class="icon fa fa-shopping-basket"><span class="notificon"><?php  echo WC()->cart->get_cart_contents_count();?></span></span>

                <?php echo '<span class="cart-price">'.$woocommerce->cart->get_cart_total();?></span>
                
                </a>
                </li>
              </ul>
            </div>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample07">
                
				<?php wp_nav_menu( array('menu' => 'Dash Main Menu','container'=> '','items_wrap'=>'<ul class="navbar-nav mr-auto">%3$s</ul>')); ?>
				                <li class="nav-item separate-nav text-center createproduct">
                  <a class="nav-link col-primary f-20 f-sbold" href="<?php echo get_home_url();?>/product-category/create/" title="Create">Create <span class="col-lgray f-14 f-normal">Custom Products</span></a>
                </li>
                <li class="nav-item separate-nav text-center shopproduct">
                  <a class="nav-link col-secondary f-20 f-sbold" href="<?php echo get_home_url();?>/shop" title="Shop">Shop <span class="col-lgray f-14 f-normal">Marketplace Designs</span></a>
				</li>
            </div>

          </div>
        </nav>
      </div>
      <!-- End Main header -->

    </header>
    <!-- End Header -->

	<div id="content" class="site-content">
<section class="breadcrumbs">
        <div class="container">
        <?php if(function_exists('bcn_display'))
    {
        bcn_display();
    }?>
        </div>
      </section>

