<?php

/**
 * WCFM Marketplace Store List Category Filter Widget
 *
 * @since 1.0.0
 *
 */
class WCFMmp_Store_Lists_Category_Filter extends WP_Widget {

	/**
	 * Constructor
	 *
	 * @return void
	 */
	public function __construct() {
		$widget_ops = array( 'classname' => 'wcfmmp-store-lists-category-filter', 'description' => __( 'Store Lists Category Filter', 'wc-multivendor-marketplace' ) );
		parent::__construct( 'wcfmmp-store-lists-category-filter', __( 'Store List: Category Filter', 'wc-multivendor-marketplace' ), $widget_ops );
	}

	/**
	 * Outputs the HTML for this widget.
	 *
	 * @param array  An array of standard parameters for widgets in this theme
	 * @param array  An array of settings for this widget instance
	 *
	 * @return void Echoes it's output
	 */
	function widget( $args, $instance ) {
		global $WCFM, $WCFMmp;

		if ( ! wcfmmp_is_stores_list_page() ) {
			return;
		}
		
		if( !apply_filters( 'wcfmmp_is_allow_store_list_category_filter', true ) ) return;
		
		$product_categories   = get_terms( 'product_cat', 'orderby=name&hide_empty=0&parent=0' );
		if ( !$product_categories ) return;

		extract( $args, EXTR_SKIP );

		$title        = apply_filters( 'widget_title', $instance['title'] );
		
		echo $before_widget;

		if ( ! empty( $title ) ) {
			echo $args['before_title'] . $title . $args['after_title'];
		}
		
		do_action( 'wcfmmp_store_lists_before_sidebar_category_filter' );
		
		$search_category  = isset( $_GET['wcfmmp_store_category'] ) ? sanitize_text_field( $_GET['wcfmmp_store_category'] ) : '';
		
		if ( $product_categories ) {
			?>
			<select id="wcfmmp_store_category" name="wcfmmp_store_category" class="wcfm-select wcfm_ele">
				<option value=""><?php _e( 'Choose Category', 'wc-multivendor-marketplace' ); ?></option>
				<?php
				$WCFM->library->generateTaxonomyHTML( 'product_cat', $product_categories, array($search_category) );
				?>
			</select>
			<?php
		}
		
		do_action( 'wcfmmp_store_lists_after_sidebar_category_filter' );

		echo $after_widget;
	}

	/**
	 * Deals with the settings when they are saved by the admin. Here is
	 * where any validation should be dealt with.
	 *
	 * @param array  An array of new settings as submitted by the admin
	 * @param array  An array of the previous settings
	 *
	 * @return array The validated and (if necessary) amended settings
	 */
	function update( $new_instance, $old_instance ) {

			// update logic goes here
			$updated_instance = $new_instance;
			return $updated_instance;
	}

	/**
	 * Displays the form for this widget on the Widgets page of the WP Admin area.
	 *
	 * @param array  An array of the current settings for this widget
	 *
	 * @return void Echoes it's output
	 */
	function form( $instance ) {
			$instance = wp_parse_args( (array) $instance, array(
					'title'      => __( 'Search by Category', 'wc-multivendor-marketplace' ),
			) );

			$title       = $instance['title'];
			?>
			<p>
				<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:', 'wc-multivendor-marketplace' ); ?></label>
				<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
			</p>
			<?php
	}
}
