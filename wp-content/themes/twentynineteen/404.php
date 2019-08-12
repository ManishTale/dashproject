<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

get_header();
?>
	<main role="main">

      <section class="pagenotfound">
        <div class="container">

          <div class="pagenotfounddiv">
            <img src="<?php echo get_template_directory_uri(); ?>/img/404.png">
            <span>Opps! We cabt seem to find a page you are looking for!</span>
            <span>Dont worry and try it our again!</span>
            <a href="<?php echo get_home_url();?>" class="btn btn-primary btn-md">Back to Home</a>
          </div>
        </div>
      </section>

    </main>

<?php
get_footer();?>
