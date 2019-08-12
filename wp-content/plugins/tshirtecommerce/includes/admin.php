<?php
/**
 * admin of plugin
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
function setPermission($file, $mode = 0755)
{
	global $TSHIRTECOMMERCE_ROOT;
	if (is_array($file))
	{
		foreach($file as $f)
		{
			$path = $TSHIRTECOMMERCE_ROOT.$f;
			if (file_exists($path) !== false)
			{
				chmod($path, $mode);
			}
		}
	}
	else
	{
		$path = $TSHIRTECOMMERCE_ROOT.$file;
		if (file_exists($path) !== false)
		{
			chmod($path, $mode);
		}
	}
}

/*
 * admin setting
*/
add_action( 'admin_menu', 'online_designer_menu' );
function online_designer_menu() {
	if ( current_user_can( 'administrator' ) )
	{
		add_menu_page( 'Product Designer', 'Product Designer', 'administrator', 'online_designer', 'designer_manage', plugins_url( 'logo.svg', dirname(__FILE__) ), 30 );	
		add_submenu_page( 'online_designer', 'Dashboard Product Designer', 'Dashboard', 'administrator', 'online_designer', 'designer_manage');
		add_submenu_page( 'online_designer', 'Settings Product Designer', 'Woo Settings', 'administrator', 'online_designer_config', 'online_designer_config');
		
		do_action( 'tshirtecommerce_menu');
		
		add_submenu_page( 'online_designer', 'Update Product Designer', 'Update', 'administrator', 'online_designer_update', 'online_designer_update');	
	}
	elseif ( current_user_can( 'editor' ) )
	{
		add_menu_page( 'Product Designer', 'Product Designer', 'editor', 'online_designer', 'designer_manage', plugins_url( 'logo.svg', dirname(__FILE__) ), 30 );	
		add_submenu_page( 'online_designer', 'Dashboard Product Designer', 'Dashboard', 'editor', 'online_designer', 'designer_manage');
		//add_submenu_page( 'online_designer', 'Settings Product Designer', 'Woo Settings', 'editor', 'online_designer_config', 'online_designer_config');
		
		do_action( 'tshirtecommerce_menu');
		
		//add_submenu_page( 'online_designer', 'Update Product Designer', 'Update', 'editor', 'online_designer_update', 'online_designer_update');
	}
}

if(!ini_get('allow_url_fopen') )
{
	function P9f_admin_error_notice()
	{
		$class = "error";
		$message = 'You can not use automatic update because your server not support <strong>allow_url_fopen</strong>. Please upload your hosting with <strong>allow_url_fopen = ON</strong>. Click <a href="http://tshirtecommerce.com/wp-content/uploads/2015/04/allow_url_fopen.png" target="_blank"><strong>HERE</strong></a>!';
		echo"<div class=\"$class\"> <p>$message</p></div>"; 
	}
	add_action( 'admin_notices', 'P9f_admin_error_notice' ); 
}

// update function
function online_designer_update()
{
	global $TSHIRTECOMMERCE_ROOT;
	// check settings
	$allow_update = true;
	$settings = get_option('online_designer');
	if (empty($settings['purchased_code']))
	{
		$allow_update	= false;
		$error = 'Please <a href="?page=online_designer_config">validate your purchase code</a> to update latest version. <a href="https://help.market.envato.com/hc/en-us/articles/202822600-Where-can-I-find-my-Purchase-Code-" target="_bank">Click here</a> for instructions to find your purchase code.';
	}
	else
	{
		if (empty($settings['verified_code']))
			$settings['verified_code'] = 0;
		
		if ($settings['verified_code'] != 1)
		{
			$allow_update	= false;
			$error = 'Your purchase code <strong>no-verified</strong>. Please check and <a href="?page=online_designer_config">validate your purchase code</a> to update latest version. <a href="https://help.market.envato.com/hc/en-us/articles/202822600-Where-can-I-find-my-Purchase-Code-" target="_bank">Click here</a> for instructions to find your purchase code.';
		}
	}
	
	// update file
	$msg = '';
	if (!empty($_GET['action']) && $allow_update == true)
	{
		$action 	= $_GET['action'];
		$version 	= $_GET['file'];		
		$file 		= 'http://updates.tshirtecommerce.com/api.php?code='.$settings['purchased_code'].'&platform=woocommerce&version='.$version;
		$data 		= openURL($file);
		if ($data != false)
		{
			$path = $TSHIRTECOMMERCE_ROOT . $version.'.zip';
			if(file_put_contents($path, $data))
			{
				WP_Filesystem();
				$unzipfile = unzip_file( $path, dirname($TSHIRTECOMMERCE_ROOT). '/');
				if ( $unzipfile ) {
					$msg = 'Update successful!';
				}
				else
				{
					$msg = 'Sorry, you can not update because your server not allow writable file. You can download, upload to root folder and unzip.';
				}
			}
			else
			{
				$msg = 'Sorry, you can not update because your server not allow writable file. You can download, upload to root folder and unzip.';
			}
		}
	}
	echo '<div class="wrap">';
	echo '<h1 class="wp-heading-inline"> Update Plugin ';
	$file = plugin_dir_path( dirname(__FILE__) ) . 'version.json';
	if (file_exists($file))
	{
		$version = json_decode(file_get_contents($file));
		
		echo '<a href="#" class="add-new-h2"><small>(Using version: '.$version->version.')</small></a>';
		
	}
	echo '</h1>';
	
	if (isset($error) && $error != '')
	{
		echo "<div class='notice notice-error'><p>".$error."</p></div>";
	}
	
	if ($msg != '')
	{
		echo "<div id='notice' class='updated fade'><p>".$msg."</p></div>";
	}
	try {
		$curl = curl_init();
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl, CURLOPT_URL, 'http://updates.tshirtecommerce.com/wp/updates.json');
		$content = curl_exec($curl);
		curl_close($curl);
		
		if ($content !== false)
		{
			$data 		= json_decode($content, true);
			if( isset($data[0]) )
			{
				$new_version 	= $data[0]['version'];
				$new_version 	= str_replace('.', '', $new_version);
				$new_version 	= str_replace('.', '', $new_version);

				$extra = '<br /><p><a href="http://docs.tshirtecommerce.com/wordpress/kb/changelog" class="button button-default button-lager" target="_blank">View Changelog</a></p>';
				if(isset($version) && $allow_update == true)
				{
					$old_version 	= str_replace('.', '', $version->version);
					if($new_version > $old_version)
					{
						$url 		= 'http://updates.tshirtecommerce.com/api.php?code='.$settings['purchased_code'].'&platform=woocommerce&version=';

						$extra .= '<hr /><p>Please backup your site before update! If you can not update via admin page, please download file zip and <a href="http://docs.tshirtecommerce.com/wordpress/article/update-plugin/" target="_blank">update via FTP</a>.</p>';
						$extra .= '<p><a class="button button-primary" href="?page=online_designer_update&action=update&file='.$data[0]['version'].'">Update plugin</a> or '
								.'<em><a target="_blank" href="'.$url.$data[0]['version'].'">Download file zip</a></em></p>';
					}
				}
				echo '<div class="notice-warning settings-error notice is-dismissible"><p><strong>Plugin latest version: '.$data[0]['version'].'</strong> (updated '.$data[0]['date'].')</p>'.$extra.'</div>';
			}
		}
		else
		{
			echo '<h2>Please load page again!</h2>';
		}
	}
	catch (Exception $e) {
		echo '<h2>Please load again!</h2>';
	}
	echo '</div>';
}

function collect_file($url){
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_VERBOSE, 1);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_AUTOREFERER, false);
	curl_setopt($ch, CURLOPT_REFERER, "http://www.xcontest.org");
	curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	$result = curl_exec($ch);
	curl_close($ch);
	return($result);
}
function write_to_file($text,$new_filename){

	if ( ! $fp = @fopen($new_filename, 'w'))
	{
		return FALSE;
	}

	$fp = fopen($new_filename, 'w');
	fwrite($fp, $text);
	fclose($fp);

	return TRUE;
}
?>