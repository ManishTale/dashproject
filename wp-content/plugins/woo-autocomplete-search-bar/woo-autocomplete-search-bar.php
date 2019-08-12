<?php
/*
	 Plugin Name: Woo Autocomplete Search Bar
	 Plugin URI:
	 Description: This plugin gives visitors an autocomplete search bar of all published WooCommerce products and/or categories via shortcode or widget
	 Author: Gabriel Alfaro
	 Version: 1.5
	 Author URI:
	 License: GPLv2
*/

// Block direct requests
if ( !defined('ABSPATH') )
	die('-1');

/*------------------------------------------  WooCommerce Autocomplete Searchbar Widget Setup -------------------------------------------*/
// Register the widget
add_action( 'widgets_init', function(){
     register_widget( 'Autocomplete' );
});

/**
 * Add Autocomplete widget.
 */
class Autocomplete extends WP_Widget {
	/**
	 * Register widget with WordPress.
	 * Initialisation of the widget
	 */
	function __construct() {
		parent::__construct(
			'Autocomplete', // Base ID, Register Widget
			__('Woo Autocomplete', 'text_domain'), // Name of widget
			array( 'description' => __( 'Autocomplete Search Bar for WooCommerce', 'text_domain' ), ) // Args, Widget Description
		);
	}
    
	/**
	 * Front-end display of widget.
	 *
	 * @see WP_Widget::widget()
	 *
	 * @param array $args     Widget arguments.
	 * @param array $instance Saved values from database.
	 */
	public function widget( $args, $instance ) {
     	echo $args['before_widget'];
            if ( ! empty( $instance['title'] ) ) {
                echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ). $args['after_title'];
            }
            // Display Autocomplete Search Bar
            auto_search_bar();
		echo $args['after_widget'];
	}
    
	/**
	 * Back-end widget form.
	 *
	 * @see WP_Widget::form()
	 *
	 * @param array $instance Previously saved values from database.
	 */
	public function form( $instance ) {
        // Widgets Front End Title Display
		if ( isset( $instance[ 'title' ] ) ) {
			$title = $instance[ 'title' ];
		}
		else {
			$title = __( 'Woo Autocomplete Search', 'text_domain' );
		}
		?>
		<p>
			<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:' ); ?></label> 
			<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
		</p>
		<?php 
	}
    
	/**
	 * Sanitize widget form values as they are saved.
	 *
	 * @see WP_Widget::update()
	 *
	 * @param array $new_instance Values just sent to be saved.
	 * @param array $old_instance Previously saved values from database.
	 *
	 * @return array Updated safe values to be saved.
	 */
	public function update( $new_instance, $old_instance ) {
		$instance = array();
		$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
		return $instance;
	}
}
/*------------------------------------------  WooCommerce Autocomplete Searchbar Widget Setup -------------------------------------------*/

/*------------------------------------------  WooCommerce Autocomplete Searchbar Function & Shortcode Setup -------------------------------------------*/
function auto_search_bar(){
	 // Get Placeholder text or set it to Search Products....
	if (get_option('woo_autocomplete_placeholder') != ""){
		$woo_form_placeholder = get_option('woo_autocomplete_placeholder');
	}else{
		$woo_form_placeholder = "Search for Products...";
	}

	 // Get Button text or set it to Search....
	if (get_option('woo_submit_placeholder') != ""){
		$woo_button_placeholder = get_option('woo_submit_placeholder');
	}else{
		$woo_button_placeholder = "Search";
	}
	
	// Set search bar name type. 
	if (get_option('autocomplete_categories') != false){
		$name = "product_cat";	
	}elseif (get_option('autocomplete_tags') != false){
	    $name = "product_tag";
	}elseif (get_option('autocomplete_taxonomies') != false){
	    $name = strtolower(get_option('woo_custom_taxonomy'));
	}else{
		$name = "s";		
	}
    ?>
	<form role="search" method="get" id="auto-searchform" action="<?php echo esc_url( home_url( '/'  ) ); ?>">
	<div class="form-group">
		<input type="text" id="wasb-input" class="form-control" value="<?php echo _e( get_search_query() ); ?>" name="<?php echo esc_attr__( $name ); ?>" placeholder="<?php _e( $woo_form_placeholder, 'woocommerce' ); ?>" />
		<button type="submit" id="#wasb-submit" value=""><span class="icon fa fa-search"></span></button>
		<?php
		  // Display hidden field based on seach type.
		  if ( get_option('autocomplete_categories') != false || get_option('autocomplete_tags') != false ){
		  }elseif ( get_option('autocomplete_taxonomies') != false ){
			   ?><input type="hidden" name="s" value="" /><?php
		  }else{
			   ?><input type="hidden" name="post_type" value="product" /><?php
		  }
		?>
		</div>
    </form>
    <?php	 
}

// Add Shortcode
add_shortcode('autocomplete_search_bar', 'auto_search_bar');
/*------------------------------------------  End Of WooCommerce Autocomplete Searchbar Shortcode & Function Setup  -------------------------------------------*/

/*------------------------------------------  Autocomplete Searchbar JS Setup -------------------------------------------*/
function auto_search_js() {
    echo '
        <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
        <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
        <script>
            jQuery(function($){
                var availableTags = [
                ';
					if (get_option('autocomplete_categories') != false){
						 
						 // Get included categories if selected
						 if (get_option('include_autocomplete_categories') != false){
							  $include = get_option('include_autocomplete_categories');
						 }

						 // Get excluded categories if selected
						 if (get_option('exclude_autocomplete_categories') != false){
							  $exclude = get_option('exclude_autocomplete_categories');
						 }
						 
						// Set Arguments for Category search
						$args = array(
							'type'                     => 'post',
							'child_of'                 => 0,
							'parent'                   => '',
							'orderby'                  => 'id',
							'order'                    => 'ASC',
							'hide_empty'               => true,
							'hierarchical'             => 1,
							'exclude'                  => "$exclude",
							'include'                  => "$include",
							'number'                   => '',
							'taxonomy'                 => 'product_cat',
							'pad_counts'               => false 
						
						);
						
						// Display all categories based on its arguments
						$categories = get_categories( $args );
						
						// Loop though each category and display their titles.
						foreach ( $categories as $category ) {
							$category = '"' . sanitize_text_field( $category->name ) . '",';
							echo $category;
						}
						
					}elseif (get_option('autocomplete_tags') != false){

						 // Get included categories if selected
						 if (get_option('include_autocomplete_tags') != false){
							  $include = get_option('include_autocomplete_tags');
						 }

						 // Get excluded categories if selected
						 if (get_option('exclude_autocomplete_tags') != false){
							  $exclude = get_option('exclude_autocomplete_tags');
						 }
						 
						 // Get Terms for selected Toxonomy
						 $args = array(
							   'orderby'           => 'name', 
							   'order'             => 'ASC',
							   'hide_empty'        => true, 
							   'exclude'           => $exclude, 
							   'include'           => $include,
							   'fields'            => 'all', 
							   'hierarchical'      => true, 
							   'child_of'          => 0,
							   'childless'         => false,
							   'pad_counts'        => false, 
							   'cache_domain'      => 'core'
						  ); 						 
						 $tags_array = get_terms( 'product_tag', $args );
						 
						 foreach($tags_array as $key){
							  $name = '"' . ucfirst( $key->name ) . '",';			   
							  echo $name;
						 }
						 
					}elseif (get_option('autocomplete_taxonomies') != false){
						 
						 // Get included categories if selected
						 if (get_option('include_autocomplete_taxonomies') != false){
							  $include = get_option('include_autocomplete_taxonomies');
						 }

						 // Get excluded categories if selected
						 if (get_option('exclude_autocomplete_taxonomies') != false){
							  $exclude = get_option('exclude_autocomplete_taxonomies');
						 }
						 
						 if (get_option('woo_custom_taxonomy') != ""){
							 $woo_custom_taxonomy = strtolower(get_option('woo_custom_taxonomy'));
						 }
						 
						 // Get Terms for selected Toxonomy
						 $args = array(
							   'orderby'           => 'name', 
							   'order'             => 'ASC',
							   'hide_empty'        => true, 
							   'exclude'           => $exclude, 
							   'include'           => $include,
							   'fields'            => 'all', 
							   'hierarchical'      => true, 
							   'child_of'          => 0,
							   'childless'         => false,
							   'pad_counts'        => false, 
							   'cache_domain'      => 'core'
						  ); 
						  $taxonomies = get_terms( $woo_custom_taxonomy, $args );
						  
						  // Loop though the toxonomy and display the term titles.
						  foreach ( $taxonomies as $term ) {
							   $term = '"' . sanitize_text_field( $term->name ) . '",';
							   echo $term;
						  }
						  
					}else{
						 
						// Get All Products 
						$args = array(
							'post_type'     =>  'product', // Get Product Post Type
							'numberposts'   =>  -1,        // Display all Products
							'order'         =>  'ASC'      // Order By Ascend
							);
						
						// Get All Products & data
						$selectableOptions = get_posts( $args );
						
						// Loop though each product and display their titles.
						foreach ($selectableOptions as $key => $val){
							$products = '"' . sanitize_text_field( $val->post_title ) . '",';
							echo $products;
						}
						
					}
                echo '
                ];
                $( "#wasb-input" ).autocomplete({
					source: availableTags,
					select:function(){
						setTimeout(function(){
						$("#auto-searchform").submit();
					},500);
					}
                });
            });
        </script>
    ';
}

// Add hook for front-end <head></head> section
add_action('wp_head', 'auto_search_js');
/*------------------------------------------ End Of Autocomplete Searchbar JS Setup -------------------------------------------*/

/*------------------------------------------  Backend Options Panel -------------------------------------------*/
add_action( 'admin_menu', 'woo_autocomplete_custom_admin_menu' );

/*------ Create Admin Page & Register its Options ---------*/
function woo_autocomplete_custom_admin_menu() {

	// Setup the args.
	$page_title = "Woo Autocomplete";
	$menu_title = 'Woo Autocomplete';
	$capability = "manage_options";
	$menu_slug  = "woo-autocomplete";
	$function   = "woo_autocomplete_options_page";
	$image 		= plugins_url( 'images/woo_autocomplete.png', __FILE__ ) ;

	// pass the args to the menu page
	add_menu_page( $page_title, $menu_title, $capability, $menu_slug, $function, $image);
}

/*------ Create configurations form ---------*/
function woo_autocomplete_options_page() {
    ?>
		<div class="wrap">
			<h1>Woo Autocomplete Searchbar Settings</h1>
			<form method="post" action="options.php">
				<?php wp_nonce_field(); ?>
			   
				<?php
					settings_fields("section"); // Register a section with and ID called section
					do_settings_sections("woo-autocomplete-options"); // Create a Groupd ID that all the fields belongin to a section
					submit_button(); // echo Submit button
				?>
			</form>
		</div>
    <?php
}

/*------ Create form fields ---------*/
// Create form fields for search bar placeholder text
function display_placeholder_element(){
	if (get_option('woo_autocomplete_placeholder') != ""){
		$woo_autocomplete_placeholder = get_option('woo_autocomplete_placeholder');
	}
	?><input type="text" name="woo_autocomplete_placeholder" id="woo_autocomplete_placeholder" value="<?php echo sanitize_text_field($woo_autocomplete_placeholder); ?>" placeholder="Search Products..." /><?php
}

// Button placeholder text
function display_submit_element(){
	if (get_option('woo_submit_placeholder') != ""){
		$woo_submit_placeholder = get_option('woo_submit_placeholder');
	}
	?><input type="text" name="woo_submit_placeholder" id="woo_submit_placeholder" value="<?php echo sanitize_text_field($woo_submit_placeholder); ?>" placeholder="Search" /><?php
}

/************ Create Category fields ************/
// Option for autocomplete search of categories
function display_categories_element(){
	?>
		<hr style="margin-top: -28px" /><input type="checkbox" class="wasbcheckbox" name="autocomplete_categories" value="1" <?php checked(1, get_option('autocomplete_categories'), true); ?> />
	<?php
}

// Option for including categories
function include_categories_element(){
	?>
		<input type="text" name="include_autocomplete_categories" value="<?php echo _e( get_option('include_autocomplete_categories') ); ?>" />
		<br /><span style="font-size: 10px;">Enter Category ID. Example: 1,2,3,4</span>
	<?php
}

// Option for excluding categories
function exclude_categories_element(){
	?>
		<input type="text" name="exclude_autocomplete_categories" value="<?php echo _e( get_option('exclude_autocomplete_categories') ); ?>" />
		<br /><span style="font-size: 10px;">Enter Category ID. Example: 1,2,3,4</span>
	<?php
}

/************ Create Tag fields ************/
// Option for autocomplete search of tags
function display_tags_element(){
	?>
		<hr style="margin-top: -12px" /><input type="checkbox" class="wasbcheckbox" name="autocomplete_tags" value="1" <?php checked(1, get_option('autocomplete_tags'), true); ?> /> 
	<?php
}

// Option for including tags
function include_tags_element(){
	?>
		<input type="text" name="include_autocomplete_tags" value="<?php echo _e( get_option('include_autocomplete_tags') ); ?>" /> 
		<br /><span style="font-size: 10px;">Enter Tag ID. Example: 1,2,3,4</span>
	<?php
}

// Option for excluding tags
function exclude_tags_element(){
	?>
		<input type="text" name="exclude_autocomplete_tags" value="<?php echo _e( get_option('exclude_autocomplete_tags') ); ?>" />
		<br /><span style="font-size: 10px;">Enter Tag ID. Example: 1,2,3,4</span>
	<?php
}

/************ Create Taxonomy fields ************/
// Option/Checkbox for autocomplete search of taxonomy
function display_taxonomies_element(){
	?>
		<hr style="margin-top: -28px" /><input type="checkbox" class="wasbcheckbox" name="autocomplete_taxonomies" value="1" <?php checked(1, get_option('autocomplete_taxonomies'), true); ?> />
	<?php
}

// Taxonomie tags input field
function display_taxonomies_field_element(){
	if (get_option('woo_custom_taxonomy') != ""){
		$woo_custom_taxonomy = get_option('woo_custom_taxonomy');
	}	 
	?>
	<input type="text" name="woo_custom_taxonomy" id="woo_custom_taxonomy" value="<?php echo $woo_custom_taxonomy; ?>" placeholder="Custom Taxonomy Name" /><?php
}

// Option for including taxonomies
function include_taxonomy_element(){
	?>
		<input type="text" name="include_autocomplete_taxonomies" value="<?php echo _e( get_option('include_autocomplete_taxonomies') ); ?>" /> 
		<br /><span style="font-size: 10px;">Enter Taxonmy ID. Example: 1,2,3,4</span>
	<?php
}

// Option for excluding taxonomies
function exclude_taxonomy_element(){
	?>
		<input type="text" name="exclude_autocomplete_taxonomies" value="<?php echo _e( get_option('exclude_autocomplete_taxonomies') ); ?>" />
		<br /><span style="font-size: 10px;">Enter Taxonmy ID. Example: 1,2,3,4</span>
	 
		<!----- Script for allowing one selectable checkbox  ------>
		<script>
		jQuery('input.wasbcheckbox').on('change', function() {   
			jQuery('input.wasbcheckbox').not(this).prop('checked', false);  
		});
		</script>
	<?php
}

/*------ Add CSS or js to admin panel ---------*/
function my_enqueue() {
	 // Check for admin and admin page to avoide jQuery Conflict
	wp_enqueue_style( 'WASBAstyles', plugins_url('woo-autocomplete-search-bar/css/admin.css'), false );
}
add_action( 'admin_enqueue_scripts', 'my_enqueue' );

/*------ Add css and javascript files to website pages ---------*/
function woo_autocomplete_search_bar_scripts() {
	wp_enqueue_style( 'WASBstyles', plugins_url('woo-autocomplete-search-bar/css/styles.css'), false );
}
add_action( 'wp_enqueue_scripts', 'woo_autocomplete_search_bar_scripts' );

/*------ Register form fields ---------*/
function display_wooautocomplete_fields(){
	add_settings_section("section", "<br />", null, "woo-autocomplete-options"); 
	
	// Set Field Titles, Set Field Value, Create Value Group Name, Register the Section
	add_settings_field("woo_autocomplete_placeholder", "Placeholder Text", "display_placeholder_element", "woo-autocomplete-options", "section");
	add_settings_field("woo_submit_placeholder", "Submit Button Text", "display_submit_element", "woo-autocomplete-options", "section");
     add_settings_field("autocomplete_categories", "<hr/>Autocomplete Product Categories<br /><span class='woo_auto_admin_spans'>Product listings by categories</span>", "display_categories_element", "woo-autocomplete-options", "section");
     add_settings_field("include_autocomplete_categories", "Included Categories<br /><span class='woo_auto_admin_spans'>Leave empty to display all categories</span>", "include_categories_element", "woo-autocomplete-options", "section");
     add_settings_field("exclude_autocomplete_categories", "Excluded Categories<br /><span class='woo_auto_admin_spans'>Leave empty to display all categories</span>", "exclude_categories_element", "woo-autocomplete-options", "section");
     add_settings_field("autocomplete_tags", "<hr/>Autocomplete Product Tags<br /><span class='woo_auto_admin_spans'>Product listings by tags</span>", "display_tags_element", "woo-autocomplete-options", "section");
     add_settings_field("include_autocomplete_tags", "Included Tags<br /><span class='woo_auto_admin_spans'>Leave empty to display all tags</span>", "include_tags_element", "woo-autocomplete-options", "section");
     add_settings_field("exclude_autocomplete_tags", "Excluded Tags<br /><span class='woo_auto_admin_spans'>Leave empty to display all tags</span>", "exclude_tags_element", "woo-autocomplete-options", "section");
     add_settings_field("autocomplete_taxonomies", "<hr/>Autocomplete Product Taxonomies<br /><span class='woo_auto_admin_spans'>Product listings by taxonomies</span>", "display_taxonomies_element", "woo-autocomplete-options", "section");
     add_settings_field("woo_custom_taxonomy", "Single Taxonomy Name", "display_taxonomies_field_element", "woo-autocomplete-options", "section");
     add_settings_field("include_autocomplete_taxonomies", "Included Taxonomies<br /><span class='woo_auto_admin_spans'>Leave empty to display all taxonomies</span>", "include_taxonomy_element", "woo-autocomplete-options", "section");
     add_settings_field("exclude_autocomplete_taxonomies", "Excluded Taxonomies<br /><span class='woo_auto_admin_spans'>Leave empty to display all taxonomies</span>", "exclude_taxonomy_element", "woo-autocomplete-options", "section");
	
	// Register the field settings
     register_setting("section", "woo_autocomplete_placeholder");
     register_setting("section", "woo_submit_placeholder");
     register_setting("section", "autocomplete_categories");	
     register_setting("section", "include_autocomplete_categories");	
     register_setting("section", "exclude_autocomplete_categories");	
     register_setting("section", "autocomplete_tags");	
     register_setting("section", "include_autocomplete_tags");	
     register_setting("section", "exclude_autocomplete_tags");
     register_setting("section", "autocomplete_taxonomies");	
     register_setting("section", "woo_custom_taxonomy");
     register_setting("section", "include_autocomplete_taxonomies");	
     register_setting("section", "exclude_autocomplete_taxonomies");	
}
add_action("admin_init", "display_wooautocomplete_fields");
/*------------------------------------------  End of Backend Options Panel -------------------------------------------*/

/*------------------------------------------  Filter for results with spaces -------------------------------------------*/
function wasb_modify_search_term($request) {
    if (!empty($request['product_cat'])) {
        if(is_string($request['product_cat'])){
            $request['product_cat'] = strtolower(str_replace('+', '-', $request['product_cat']));
        }
    }
    if (!empty($request['product_tag'])) {
        if(is_string($request['product_tag'])){
            $request['product_tag'] = strtolower(str_replace('+', '-', $request['product_tag']));
        }
    }
    if (!empty($request['woo_custom_taxonomy'])) {
        $request['woo_custom_taxonomy'] = strtolower(str_replace('+', '-', $request['woo_custom_taxonomy']));
    }
    return $request;
}
/**** Add Filter ****/
add_filter('request', 'wasb_modify_search_term', 100);
/*------------------------------------------  End of Filter for results with spaces -------------------------------------------*/
?>
