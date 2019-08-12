<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2016-07-01
 *
 * shortcode of plugin
 *
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
/**
* All options of 9file store
*/
class P9f_shortcode
{
	function __construct()
	{
		add_action('init', array($this, 'init'));
	}

	function init()
	{
		add_action( 'media_buttons', array($this, 'btn_shortcode') );
	}

	/*
	* Add button shortcode in edit page
	* Add short code with action shortcode_9file_btn
	* Ex: <a href="javascript:void(0)" onclick="add_shortcode_9file('_store');">Text</a>
	 */
	public function btn_shortcode()
	{
		$post = get_post();
		if($post->post_type != 'page')
		{
			return;
		}
		echo '<script>function add_shortcode_9file(type){
			var shortcode = "[tshirtecommerce"+type+"]";
			var text = tinyMCE.get("content").getContent();
			if(text.indexOf(shortcode) != -1){alert("You added this shortcode.");}
			else{tinymce.execCommand("mceInsertContent", false, shortcode);}
		}</script>';
		echo '<style>.shortcode_9file {position: absolute;left: 110px;background-color: #fff;border: 1px solid #ddd;padding: 10px 15px;border-radius: 3px;width: 170px;}.shortcode_9file a{color: #0073aa;font-size: 14px;line-height: 30px;}.toggle-arrow{float: right;padding-top: 3px;padding-left: 10px;}.toggle-arrow:before{content: "\f140";display: inline-block;font: 400 20px/1 dashicons;speak: none;}</style>';
      	echo '<button type="button" onclick="jQuery(\'.shortcode_9file\').toggle()" class="button button-primary">Product Design ShortCode <span class="toggle-arrow"></span></button>';
      	echo '<div class="shortcode_9file" style="display:none;">'
      		. 	'<a href="javascript:void(0)" onclick="add_shortcode_9file(\'\');">Add design tools</a><br />';
      	
      	do_action( 'shortcode_9file_btn' );
      	
      	echo '</div>';
	}
}

new P9f_shortcode();
?>