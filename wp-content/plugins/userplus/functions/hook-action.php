<?php 

add_action('init', 'enqueue_scripts_styles');

function enqueue_scripts_styles(){
			wp_enqueue_script('jquery');
			wp_enqueue_style('userplus_style', USERPLUS_URL.'assets/userplus_style.css');
			wp_enqueue_script('upload_min_js', USERPLUS_URL.'assets/scripts/upload.min.js','','',true);
			wp_enqueue_script('userplus_script', USERPLUS_URL.'assets/scripts/userplus-script.js','','',true);
			wp_enqueue_script('userplus-font-awesome', 'https://use.fontawesome.com/5ef9b46a6d.js');
			
		}
?>
