<?php
/**
 * Display single product reviews (comments)
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product-reviews.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.5.0
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $product;

if ( ! comments_open() ) {
	return;
}

?>
<div id="reviews" class="woocommerce-Reviews">
	<div id="comments">
<?php	global $product;

$rating_1 = $product->get_rating_count(1);
$rating_2 = $product->get_rating_count(2);
$rating_3 = $product->get_rating_count(3);
$rating_4 = $product->get_rating_count(4);
$rating_5 = $product->get_rating_count(5);

?>
    <style>
    .totalratingsline .ratingsline .progress-bar {
    	background: #68aa50;
	}
    </style>
    <div style="display: none;">
    <span id="_5star_num"><?php echo $rating_5;?></span>
    <span id="_4star_num"><?php echo $rating_4;?></span>
    <span id="_3star_num"><?php echo $rating_3;?></span>
    <span id="_2star_num"><?php echo $rating_2;?></span>
    <span id="_1star_num"><?php echo $rating_1;?></span>
	</div>
   
              <h4 class="f-sbold text-center">Customer Rating</h4>
              <div class="totalratings">
                <span class="icon fa fa-star"></span>
                <span class="icon fa fa-star"></span>
                <span class="icon fa fa-star"></span>
                <span class="icon fa fa-star"></span>
                <span class="icon fa fa-star"></span>
                <span id="total_reviews">0 <span>reviews</span></span>
              </div>

       <div class="ratingscart">
                <div class="ratingsnumber">
                  <span class="f-sbold col-primary" id="rating-avg">0</span>
                </div>
                <div class="totalratingsline">
                  <div class="ratingsline">
                    <span>5 Starts</span>
                    <div class="progress" style="height:12px">
                      <div class="progress-bar _5_star"></div>
                    </div>
                    <span class="_5_star_num">0</span>
                  </div>
                  <div class="ratingsline">
                    <span>4 Starts</span>
                    <div class="progress" style="height:12px">
                      <div class="progress-bar _4_star"></div>
                    </div>
                    <span class="_4_star_num">0</span>
                  </div>
                  <div class="ratingsline">
                    <span>3 Starts</span>
                    <div class="progress" style="height:12px">
                      <div class="progress-bar _3_star"></div>
                    </div>
                    <span class="_3_star_num">0</span>
                  </div>
                  <div class="ratingsline">
                    <span>2 Starts</span>
                    <div class="progress" style="height:12px">
                      <div class="progress-bar _2_star"></div>
                    </div>
                    <span class="_2_star_num">0</span>
                  </div>
                  <div class="ratingsline">
                    <span>1 Starts</span>
                    <div class="progress" style="height:12px">
                      <div class="progress-bar _1_star"></div>
                    </div>
                    <span class="_1_star_num">0</span>
                  </div>
                </div>
              </div>

    <script>
        jQuery(function() {

            function action_rating() {

                var _5star = Math.floor(jQuery('#_5star_num').text());
                var _4star = Math.floor(jQuery('#_4star_num').text());
                var _3star = Math.floor(jQuery('#_3star_num').text());
                var _2star = Math.floor(jQuery('#_2star_num').text());
                var _1star = Math.floor(jQuery('#_1star_num').text());

                var maxVal = Math.max(_5star, _4star, _3star, _2star, _1star);
                var add = _5star+_4star+_3star+_2star+_1star;
                jQuery('#total_reviews').text(add+" "+'reviews');
                //get progress bar width in percentage
                var _5star_wd = _5star * 100 / maxVal;
                var _4star_wd = _4star * 100 / maxVal;
                var _3star_wd = _3star * 100 / maxVal;
                var _2star_wd = _2star * 100 / maxVal;
                var _1star_wd = _1star * 100 / maxVal;

                // set progress bar width in percentage
                jQuery('._5_star').width(_5star_wd + '%');
                jQuery('._4_star').width(_4star_wd + '%');
                jQuery('._3_star').width(_3star_wd + '%');
                jQuery('._2_star').width(_2star_wd + '%');
                jQuery('._1_star').width(_1star_wd + '%');

                // set total star rating numbers
                jQuery('._5_star_num').text(_5star);
                jQuery('._4_star_num').text(_4star);
                jQuery('._3_star_num').text(_3star);
                jQuery('._2_star_num').text(_2star);
                jQuery('._1_star_num').text(_1star);

                // average rating 
                var avg_rating = (5 * _5star + 4 * _4star + 3 * _3star + 2 * _2star + 1 * _1star) / (_5star + _4star + _3star + _2star + _1star);

                if (!isNaN(avg_rating)) {
                    jQuery('#rating-avg').text(avg_rating.toFixed(1));
                }

            }
            // if check button clicked
            jQuery(document).ready(function(){
            // jQuery('#sub-btn').click(function() {
                action_rating();
            });
        });
    </script>

		<h2 class="totalratings  woocommerce-Reviews-title"><?php
			if ( get_option( 'woocommerce_enable_review_rating' ) === 'yes' && ( $count = $product->get_review_count() ) ) {
				/* translators: 1: reviews count 2: product name */
				printf( esc_html( _n( '%1$s review for %2$s', '%1$s reviews for %2$s', $count, 'woocommerce' ) ), esc_html( $count ), '<span>' . get_the_title() . '</span>' );
			} else {
				_e( 'Reviews', 'woocommerce' );
			}
		?></h2>

		<?php if ( have_comments() ) : ?>

			<ol class="commentlist">
				<?php wp_list_comments( apply_filters( 'woocommerce_product_review_list_args', array( 'callback' => 'woocommerce_comments' ) ) ); ?>
			</ol>

			<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) :
				echo '<nav class="woocommerce-pagination">';
				paginate_comments_links( apply_filters( 'woocommerce_comment_pagination_args', array(
					'prev_text' => '&larr;',
					'next_text' => '&rarr;',
					'type'      => 'list',
				) ) );
				echo '</nav>';
			endif; ?>

		<?php else : ?>

			<p class="woocommerce-noreviews"><?php _e( 'There are no reviews yet.', 'woocommerce' ); ?></p>

		<?php endif; ?>
	</div>

	<?php if ( get_option( 'woocommerce_review_rating_verification_required' ) === 'no' || wc_customer_bought_product( '', get_current_user_id(), $product->get_id() ) ) : ?>

		<div id="review_form_wrapper">
			<div id="review_form">
				<?php
					$commenter = wp_get_current_commenter();

					$comment_form = array(
						'title_reply'          => have_comments() ? __( 'Add a review', 'woocommerce' ) : sprintf( __( 'Be the first to review &ldquo;%s&rdquo;', 'woocommerce' ), get_the_title() ),
						'title_reply_to'       => __( 'Leave a Reply to %s', 'woocommerce' ),
						'title_reply_before'   => '<span id="reply-title" class="comment-reply-title">',
						'title_reply_after'    => '</span>',
						'comment_notes_after'  => '',
						'fields'               => array(
							'author' => '<p class="comment-form-author">' . '<label for="author">' . esc_html__( 'Name', 'woocommerce' ) . '&nbsp;<span class="required">*</span></label> ' .
										'<input id="author" name="author" class="form-control" type="text" value="' . esc_attr( $commenter['comment_author'] ) . '" size="30" required /></p>',
							'email'  => '<p class="comment-form-email"><label for="email">' . esc_html__( 'Email', 'woocommerce' ) . '&nbsp;<span class="required">*</span></label> ' .
										'<input id="email" name="email" type="email" class="form-control" value="' . esc_attr( $commenter['comment_author_email'] ) . '" size="30" required /></p>',
						),
						'label_submit'  => __( 'Submit', 'woocommerce' ),
						'logged_in_as'  => '',
						'comment_field' => '',
					);

					if ( $account_page_url = wc_get_page_permalink( 'myaccount' ) ) {
						$comment_form['must_log_in'] = '<p class="must-log-in">' . sprintf( __( 'You must be <a href="%s">logged in</a> to post a review.', 'woocommerce' ), esc_url( $account_page_url ) ) . '</p>';
					}

					if ( get_option( 'woocommerce_enable_review_rating' ) === 'yes' ) {
						$comment_form['comment_field'] = '<div class="comment-form-rating"><label for="rating">' . esc_html__( 'Your rating', 'woocommerce' ) . '</label><select name="rating" id="rating" required>
							<option value="">' . esc_html__( 'Rate&hellip;', 'woocommerce' ) . '</option>
							<option value="5">' . esc_html__( 'Perfect', 'woocommerce' ) . '</option>
							<option value="4">' . esc_html__( 'Good', 'woocommerce' ) . '</option>
							<option value="3">' . esc_html__( 'Average', 'woocommerce' ) . '</option>
							<option value="2">' . esc_html__( 'Not that bad', 'woocommerce' ) . '</option>
							<option value="1">' . esc_html__( 'Very poor', 'woocommerce' ) . '</option>
						</select></div>';
					}

					$comment_form['comment_field'] .= '<p class="comment-form-comment form-group float-label"><textarea id="comment" name="comment" class="form-control" placeholder="Your Review"  cols="45" rows="8" aria-required="true" required></textarea>'.
					'<label for="comment" class="label">' . esc_html__( 'Your review', 'woocommerce' ) . ' <span class="required">*</span></label>'.
					'</p>';

					comment_form( apply_filters( 'woocommerce_product_review_comment_form_args', $comment_form ) );
				?>
			</div>
		</div>

	<?php else : ?>

		<p class="woocommerce-verification-required"><?php _e( 'Only logged in customers who have purchased this product may leave a review.', 'woocommerce' ); ?></p>

	<?php endif; ?>

	<div class="clear"></div>
</div>
