<div class="wrap">
	<div class="welcome-panel" style="padding-bottom: 35px;">
		<div class="welcome-panel-content">
			<h1>Import Data</h1>
			<p class="about-description">This tool allows you to download theme, plugins, products and design data to your site.</p>
			
			<p class="notice-warning notice warning-backup" <p class="notice-warning notice" style="padding: 8px 10px;background-color: #fff8e5;">Please backup your site before import.</p>
			<br />

			<?php if($html != '') { echo $html; }; ?>

			<div class="welcome-panel-column-container" id="design-imports" style="display: inline-block;width: 100%;">
				<div class="welcome-panel-column">
					<h3>Download Theme & Plugins</h3>
					<p>Free download theme, plugin and update to your site.</p>
					<a href="<?php echo $url; ?>&task=theme" target="_bank" class="button button-primary">Download now</a>
				</div>
				<div class="welcome-panel-column">
					<h3>Import Products</h3>
					<p>Free import product design to your site.</p>
					<a href="<?php echo $url; ?>&task=product" class="button button-primary">View & Import</a>
				</div>
				<div class="welcome-panel-column welcome-panel-last">
					<h3>Import Clipart & Design template</h3>
					<p>Free import our cliparts and design template to your site.</p>
					<a href="<?php echo $url; ?>&task=design" class="button button-primary">View & Import</a>
				</div>
			</div>
		</div>
		
		<div class="welcome-panel-content" id="tool-imports" style="margin-top: 30px;">
			<div class="welcome-panel-column-container">
				<div class="welcome-panel-column">
					<h3>Convert & Import Cliparts</h3>
					<p>You have library clipart with SVG, PDF, PSD...This tool help you easy and fast convert all your file and automatic import to your site.</p>
					<a href="<?php echo $url; ?>&task=toolsart" target="_bank" class="button button-primary">Upload Now</a>
				</div>
				<div class="welcome-panel-column welcome-panel-last">
					<h3>Convert & Import design template</h3>
					<p>You have files design editable in SVG, AI, PSD, EPS. This tool automatic convert your file to design template design tools.</p>
					<a href="<?php echo $url; ?>&task=toolsdesign" target="_bank" class="button button-primary">Convert Now</a>
				</div>
			</div>
		</div>
	</div>
</div>