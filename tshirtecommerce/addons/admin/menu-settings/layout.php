<?php
/*
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2017-10-01
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 *
*/

$url = $_SERVER['REQUEST_URI'];
?>
<li <?php if(strpos($url, 'layout')) echo 'class="active open layout_menu"' ?>>
	<a href="<?php echo site_url('index.php/layout'); ?>">
		<span class="title">UI & Layouts</span>
	</a>
</li>

<?php if(strpos($url, 'layout')){ ?>
	<script type="text/javascript">
		jQuery('.layout_menu').parent('.sub-menu').show();
		jQuery('.layout_menu').parent('.sub-menu').parent('li').addClass('open');
	</script>
<?php } ?>