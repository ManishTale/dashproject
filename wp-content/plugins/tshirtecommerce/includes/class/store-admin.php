<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Add class of store in admin page
 */
class P9f_store_admin
{
	
	function __construct()
	{
		add_filter( 'query_vars', array($this, 'query_vars') );
		add_action( 'update_9file_syn', array($this, 'store_syn') );
	}

	function init_admin()
	{
		$this->setSEOUrl();
		add_action( 'add_meta_boxes_page', array($this, 'add_meta_box') );
		add_action( 'save_post', array($this, 'save_metabox') );
		add_action( 'shortcode_9file_btn', array($this, 'shortcode_btn') );
		add_action( 'tshirtecommerce_setting', array($this, 'setting_page'), 1 );
	}

	/**
	 * Add page store to setting of plugin
	 */
	function store_syn()
	{
		global $P9f;
		$settings = $P9f->settings;
		if( isset($settings['page_store']) && $settings['page_store'] > 0 )
		{
			return;
		}

		$pages 	= get_pages();
		$page_id 	= 0;
		if(count($pages))
		{
			foreach ($pages as $page)
			{
				$content = $page->post_content;
				if ( has_shortcode( $content, 'tshirtecommerce_store' ) )
				{
					$page_id = $page->ID;
					break;
				}
			}
		}
		
		if($page_id > 0)
		{
			$settings['page_store'] = $page_id;
			update_option( 'online_designer', $settings );
		}
	}

	function setSEOUrl()
	{
		global $P9f;
		$settings = $P9f->settings;

		add_rewrite_rule('^product/([^/]*)/([^/]*)/?', 'index.php?product=$matches[1]&idea_id=$matches[2]', 'top');

		if(isset($settings['page_store']))
		{
			$page_id 	= $settings['page_store'];
			$page 	= get_post($page_id);
			$slug 	= $page->post_name;

			add_rewrite_rule(
				'^'.$slug.'/([^/]*)/([^/]*)/?', 
				'index.php?page_id='.$page_id.'&product_cate=$matches[1]&search_design=$matches[2]', 
				'top'
			);

			add_rewrite_rule(
				'^'.$slug.'/([^/]*)/?', 
				'index.php?page_id='.$page_id.'&product_cate=$matches[1]', 
				'top'
			);
		}

		flush_rewrite_rules();
	}
	public function query_vars($vars)
	{
		$vars[] = 'product_cate';
		$vars[] = 'search_design';
		$vars[] = 'idea_id';
		return $vars;
	}

	function setting_page($settings)
	{
		if( empty($settings['page_store']) ) $settings['page_store'] = 0;
		
		$html 	= '<select name="designer[page_store]">';
		$html 	.= '<option value="0"> - Select a page - </option>';
		$pages 	= get_pages();
		foreach($pages as $page)
		{ 
			if ($settings['page_store'] == $page->ID) $selected = 'selected="selected"';
			else $selected = '';
			$html 	.= '<option '.$selected.' value="'.$page->ID.'"> '.$page->post_title.' </option>';
		}
		$html .= '</select>';

		echo  '<tr>'
			. 	'<th scope="row">Page design template</th>'
			.	'<td>'.$html.'</td>'
			.'</tr>';
	}

	function shortcode_btn()
	{
		echo '<a href="javascript:void(0)" onclick="add_shortcode_9file(\'_store\');">Add design template</a>';
	}

	/* 
	* add meta box choose category to edit page 
	*/
	function add_meta_box()
	{
		add_meta_box(
			'store_9file',
			'Design template',
			array($this, 'meta_categories'),
			'page',
			'side',
			'default'
		);
	}

	/*
	* Add list categories of product design in edit page
	* Allow setup category product default
	 */
	function meta_categories($post)
	{
		global $P9f;

		$value = get_post_meta( $post->ID, 'product_design_cate', true );

		echo '<p class="post-attributes-label-wrapper">'
			. 	'<lable class="post-attributes-label">Product category default</lable>'
			. '</p>';

		$categories = $P9f->getData('categories');
		echo '<select name="product_design_cate">';
		if(count($categories))
		{
			for($i=0; $i<count($categories); $i++)
			{
				if($categories[$i]['parent_id'] > 0) continue;
				$selected = '';
				if($value == $categories[$i]['id'])
					$selected = 'selected="selected"';
				echo '<option '.$selected.' value="'.$categories[$i]['id'].'">'.$categories[$i]['title'].'</option>';
			}
		}
		else
		{
			echo '<option value="">Categories not found</option>';
		}
		echo '</select>';

		echo '<p><strong>Note:</strong><br /> 1. this option only works if you active design template in this page.';
		echo '<br /> 2. List categories of product design not categories of Woocommerce.</p>';
	}

	function save_metabox($post_id)
	{ 
	    	if ( ! isset( $_POST['product_design_cate'] ) ) {
	    		return;
    		}
	    	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
	    		return;
	    	}
	 
	 	if ( ! current_user_can( 'edit_post', $post_id ) ) {
	 		return;
	 	}

		if ( isset( $_POST['post_type'] ) && 'page' === $_POST['post_type'] )
		{
			$product_design_cate = $_POST['product_design_cate'];
			update_post_meta( $post_id, 'product_design_cate', $product_design_cate );
		}
	}
}
?>