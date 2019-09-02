<div class="navbar-content">
	<div class="main-navigation navbar-collapse collapse">
		<div class="navigation-logo hidden-xs">
			<div class="navigation-toggler">
				<i class="fa fa-outdent"></i>
			</div>

			<a class="navbar-brand" href="<?php echo site_url();?>">
				<img src="<?php echo site_url('assets/images/logo.png'); ?>" height="35" alt="Dash Logo" />
			</a>
		</div>
		
		<ul class="main-navigation-menu">
		
			<!-- start: dashboard -->
			<li <?php if($segments[0] == 'dashboard') echo 'class="active open"' ?>>
				<a href="<?php echo site_url(); ?>"><i class="clip-home-3"></i>
					<span class="title"> <?php lang('menu_left_dashboard'); ?> </span><span class="selected"></span>
				</a>
			</li>
			<!-- end: dashboard -->
			<?php
			$is_logged = $_SESSION['is_admin'];
			$id = $is_logged['id'];
			?>
			<!-- start: product -->
			<?php 
			// $user_id = $art->session_id;
			if($id == 1){ ?>
			<li <?php if($segments[0] == 'product') echo 'class="active open"' ?>>
				<a href="<?php echo site_url('index.php/product'); ?>">
					<i class="clip-t-shirt"></i>
					<span class="title"> Products Design </span>
				</a>
			</li>
			
			<!-- end: product -->
			
			<?php $addons->view('menu', $addons, $segments); ?>

			<!-- start: addons -->
			<li <?php if($segments[0] == 'addon') echo 'class="active open"' ?>>
				<a href="javascript:void(0)"><i class="clip-puzzle-4"></i>
					<span class="title"> <?php lang('menu_left_addons'); ?> </span><i class="icon-arrow"></i>
					<span class="selected"></span>
				</a>
				<ul class="sub-menu">
					<li <?php if($segments[0] == 'addon' && isset($segments[1]) && $segments[1] == 'installed') echo 'class="active open"' ?>>
						<a href="<?php echo site_url('index.php/addon/installed'); ?>">
							<span class="title"> <?php lang('menu_left_installed'); ?> </span>
						</a>
					</li>
					<li <?php if($segments[0] == 'addon' && isset($segments[1]) && $segments[1] == 'install') echo 'class="active open"' ?>>
						<a href="<?php echo site_url('index.php/addon/install'); ?>">
							<span class="title"> <?php lang('menu_left_install'); ?> </span>
						</a>
					</li>
					<li <?php if(($segments[0] == 'addon' && empty($segments[1])) || ($segments[0] == 'addon' && isset($segments[1]) && $segments[1] == 'index')) echo 'class="active open"' ?>>
						<a href="<?php echo site_url('index.php/addon'); ?>">
							<span class="title"> <?php lang('menu_left_addons'); ?> </span>
						</a>
					</li>					
				</ul>
			</li>
			<!-- end: addons -->
			
			<!-- start: bank -->
			<li <?php if($segments[0] == 'settings' || ($segments[0] == 'settings' && isset($segments[1]) && ($segments[1] == 'fonts' || $segments[1] == 'editfont' || $segments[1] == 'colors' || $segments[1] == 'editcolor'))) echo 'class="active open"' ?>>
				<a href="javascript:void(0)"><i class="	clip-settings"></i>
					<span class="title"><?php echo lang('menu_left_settings');?></span><i class="icon-arrow"></i>
					<span class="selected"></span>
				</a>
				<ul class="sub-menu">
					<li <?php if($segments[0] == 'settings' && (empty($segments[1]) || (isset($segments[1]) && $segments[1] == 'index'))) echo 'class="active open"' ?>>
						<a href="<?php echo site_url('index.php/settings'); ?>">
							<span class="title"><?php echo lang('menu_left_settings_configuration');?></span>
						</a>
					</li>
					
					<li <?php if($segments[0] == 'settings' && isset($segments[1]) && ($segments[1] == 'colors' || $segments[1] == 'editcolor')) echo 'class="active open"' ?>>
						<a href="<?php echo site_url('index.php/settings/colors'); ?>">
							<span class="title"><?php echo lang('menu_left_settings_colors');?></span>
						</a>
					</li>
					
					<li <?php if($segments[0] == 'settings' && isset($segments[1]) && ($segments[1] == 'fonts' || $segments[1] == 'addgooglefont' || $segments[1] == 'editfont')) echo 'class="active open"' ?>>
						<a href="<?php echo site_url('index.php/settings/fonts'); ?>">
							<span class="title"><?php echo lang('menu_left_settings_fonts');?></span>
						</a>
					</li>
					
					<li <?php if($segments[0] == 'settings' && isset($segments[1]) && ($segments[1] == 'languages' || $segments[1] == 'editlanguage')) echo 'class="active open"' ?>>
						<a href="<?php echo site_url('index.php/settings/languages'); ?>">
							<span class="title"><?php echo lang('menu_left_settings_language');?></span>
						</a>
					</li>
					<?php $addons->view('menu-settings', $addons, $segments); ?>

					<li>
						<a href="<?php echo site_url('index.php/cache'); ?>" onclick="return removeCache(this);">
							<span class="title">Remove Cache</span>
						</a>
					</li>
				</ul>
			</li>		
			<!-- end: bank -->
			
			<!-- start: media -->
			<li <?php if($segments[0] == 'media') echo 'class="active open"' ?>>
				<a href="<?php echo site_url('index.php/media'); ?>">
					<i class="clip-image"></i>
					<span class="title"><?php echo lang('menu_left_media');?></span>
					<span class="selected"></span>
				</a>
			</li>
			<!-- end: media -->
			<?php } ?>
		</ul>
	</div>
</div>
<script type="text/javascript">
function removeCache(e) {
	var check = confirm('Your sure want remove cache');
	return check;
}
</script>