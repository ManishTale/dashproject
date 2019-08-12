<?php
/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2015-01-10
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license	   GNU General Public License version 2 or later; see LICENSE
 *
 */
$theme_name = 'editor';
if ( isset($settings->theme) && isset($settings->theme->editor) )
{
	$options = $settings->theme->editor;
	$settings->theme = $theme_name;
}
else
{
	$options = array();
}

$layout 		= 'left';
if(isset($options->layout))
{
	$layout			= $options->layout;
}
$addons				= $GLOBALS['addons'];
$GLOBALS['layout']		= $layout;
function display_color($color)
{
	if(strlen($color) > 6) return $color;
	$color = str_replace('#', '', $color);
	$color = '#'.$color;
	return $color;
}

$custom_font = '';
if(isset($options->custom_font) && $options->custom_font != '')
{
	$custom_font = $options->custom_font;
	$custom_font = strip_tags($custom_font);
	$custom_font = trim($custom_font);
}
if($custom_font == '')
{
	$custom_font = 'Roboto+Slab:100,300,400,700';
}
$custom_font = str_replace(' ', '+', $custom_font);
$font_temp = explode(':', $custom_font);
$custom_font_name = str_replace('+', ' ', $font_temp[0]);

$custom_font_size = 13;
if(isset($options->font_size) && $options->font_size != '')
{
	$custom_font_size = $options->font_size;
}

$logo_icon_url 	= 'assets/images/logo-loading.png';
if(isset($options->custom_logo) && $options->custom_logo != '')
{
	$logo_icon_url = $options->custom_logo;
}
$GLOBALS['logo_icon_url'] = $logo_icon_url;

$full_screen = 1;
if(isset($options->full_screen) && $options->full_screen == 0)
{
	$full_screen = 0;
}
if($full_screen != 0) $full_screen = 1;
?>
<link type="text/css" href="<?php echo 'themes/'.$theme_name.'/fonts/flaticon.css'; ?>" rel="stylesheet" media="all" />
<link href="https://fonts.googleapis.com/css?family=<?php echo $custom_font; ?>" rel="stylesheet">
<style type="text/css">
body{font-family: '<?php echo $custom_font_name; ?>', sans-serif, serif; font-weight: 400; font-size:<?php echo $custom_font_size; ?>px;}
</style>
<script type="text/javascript">
	var active_full_screen = '<?php echo $full_screen; ?>';
</script>

<?php if(isset($addons->is_mobile) && $addons->is_mobile == true) {?>
	<link type="text/css" href="<?php echo 'themes/'.$theme_name.'/css/style_mobile.css'; ?>" rel="stylesheet" media="all" />
<?php }else { ?>
	<link type="text/css" href="<?php echo 'themes/'.$theme_name.'/css/style.css'; ?>" rel="stylesheet" media="all" />
	
	<?php if($layout != 'left') { ?>
		<link type="text/css" href="<?php echo 'themes/'.$theme_name.'/css/style_'.$layout.'.css'; ?>" rel="stylesheet" media="all" />
	<?php } ?>
	<script type="text/javascript" src="<?php echo 'themes/'.$theme_name.'/js/theme.js'; ?>"></script>
	<style type="text/css">
		/* Background */
		<?php if (isset($options->background_color) && $options->background_color != '') { ?>
		.col-center{background-color:<?php echo display_color($options->background_color); ?>!important;}
		<?php } ?>
		
		<?php if (isset($options->background_image) && $options->background_image != '') { ?>
		.col-center{background-image:url('<?php echo $options->background_image; ?>')!important;}
		<?php } ?>
		
		<?php if (isset($options->background_repeat) && $options->background_repeat != '') { ?>
		.col-center{background-repeat:<?php echo $options->background_repeat; ?>;}
		<?php } ?>
		
		<?php if (isset($options->background_position) && $options->background_position != '') { ?>
		.col-center{background-position:<?php echo $options->background_position; ?>!important;}
		<?php } ?>
		
		/* Menu */
		<?php if (isset($options->menu_bg) && $options->menu_bg != '') { ?>
		#dg-designer .col-left{background-color:<?php echo display_color($options->menu_bg); ?>!important;}
		.product-prices button.btn-addcart{background:<?php echo $options->menu_bg; ?>!important;}
		<?php } ?>
		
		<?php if (isset($options->menu_line_color) && $options->menu_line_color != '') { ?>
		#dg-designer .col-left .menu-left > li{border-color:<?php echo display_color($options->menu_line_color); ?>!important;}
		<?php } ?>
		
		<?php if (isset($options->menu_bg_active) && $options->menu_bg_active != '') { ?>
		#dg-designer .col-left .menu-left > li a:hover, #dg-designer .col-left .menu-left > li a.active{background-color:<?php echo display_color($options->menu_bg_active); ?>!important;}
		<?php } ?>
		
		<?php if (isset($options->menu_bg_icon) && $options->menu_bg_icon != '') { ?>
		#dg-designer .col-left .menu-left > li a i:before{color:<?php echo display_color($options->menu_bg_icon); ?>!important;}
		#dg-designer .col-left .menu-left > li a span{color:<?php echo display_color($options->menu_bg_icon); ?>!important;}
		<?php } ?>
		
		<?php if (isset($options->menu_bg_iconhover) && $options->menu_bg_iconhover != '') { ?>
		#dg-designer .col-left .menu-left > li a:hover i:before, #dg-designer .col-left .menu-left > li a.active i:before{color:<?php echo display_color($options->menu_bg_iconhover); ?>!important;}
		#dg-designer .col-left .menu-left > li a:hover span, #dg-designer .col-left .menu-left > li a.active span{color:<?php echo display_color($options->menu_bg_iconhover); ?>!important;}
		<?php } ?>	
	</style>

	<script type='text/javascript'>
	<?php if($layout != 'left') { ?>
	jQuery(document).ready(function(){
		jQuery('body').addClass('layout-<?php echo $layout; ?>');
	});
	<?php } ?>
	</script>
<?php } ?>