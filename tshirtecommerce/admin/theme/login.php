<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-01-10
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
 */
if ( ! defined('ROOT')) exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
	<title><?php echo $data['title']; ?></title>
	<!-- start: META -->
	<meta charset="utf-8" />
	<!--[if IE]><meta http-equiv='X-UA-Compatible' content="IE=edge,IE=9,IE=8,chrome=1" /><![endif]-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta content="" name="description" />
	<meta content="" name="author" />
	<!-- end: META -->
	<!-- start: MAIN CSS -->
	<link href="<?php echo site_url('assets/plugins/bootstrap/css/bootstrap.min.css'); ?>" rel="stylesheet" media="screen">
	<link rel="stylesheet" href="<?php echo site_url('assets/css/main.css'); ?>">
	<link rel="stylesheet" href="<?php echo site_url('assets/css/main-responsive.css'); ?>">
	<link rel="shortcut icon" href="<?php echo site_url('media/assets/icon.png'); ?>" />
	<script type="text/javascript" src="<?php echo site_url('assets/js/jquery.min.js'); ?>"></script>
	<script type="text/javascript" src="<?php echo site_url('assets/js/login.js'); ?>"></script>
	<script type="text/javascript">
		var path_admin = '<?php echo ROOT.DS; ?>';

		var admin_url = '<?php echo site_url(); ?>';
		var temp = admin_url.split('/tshirtecommerce');
		var site_url = temp[0];
		var ajax_url = '';
		<?php if($data['version'] == 'wordpress') { ?>
		var ajax_url = site_url + '/wp-admin/admin-ajax.php?action=tshirt_user_is_login';
		<?php } ?>
		tshirtecommerce_login();
	</script>
</head>
<body class="login example2">
	<div class="main-login col-sm-4 col-sm-offset-4">
	
		<div class="logo"><img src="<?php echo site_url('assets/images/logo.svg'); ?>" height="50" alt="logo"/></div>
		
		<!-- start: LOGIN BOX -->
		<div class="box-login">
			<center><h3>Please login with admin of <a href="<?php echo $data['url']; ?>" title="Click to login"><strong><?php echo $data['version']; ?></strong></a></h3></center>
		</div>
	
	</div>
</body>
</html>