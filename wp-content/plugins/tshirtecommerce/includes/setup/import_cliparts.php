<style type="text/css">.filename div{white-space: nowrap;} #design-imports, #tool-imports{display: none!important;}</style>

<?php if($downloaded == true) { ?>

<h2 class="wp-heading-inline">Import your cliparts</h2>
<h4 class="notice-warning notice" style="padding: 8px;background-color: #fff8e5;color: #ff0000;">Please don't navigate away while importing</h4>
<div class="import-progress" style="display: inline-block;padding: 25px 5px;font-size: 18px;">
	<img src="images/wpspin_light-2x.gif" alt="loading" style="vertical-align: middle;padding-right: 10px;"> Loading
</div>

<?php }else{ ?>
<h4 class="notice-warning notice">Your server not allow write file. Please import via FTP.</h4>
<?php } ?>

<div class="import-help">
	<h4>Step by step import via FTP:</h4>
	<ol>
		<li>Download file <a href="<?php echo $link; ?>" target="_blank">cliparts.json</a></li>
		<li>Upload file cliparts.json to folder <strong><?php echo $folder; ?></strong></li>
		<li>Reload this page again</li>
	</ol>
</div>

<script type="text/javascript">
jQuery(document).ready(function(){
	import_cliparts();
});
function import_cliparts(){
	var ajax_url 	= '<?php echo site_url('tshirtecommerce/admin/index.php?/clipart/import'); ?>';
	jQuery.get(ajax_url, function(response){
		alert('Added all clipart to your site.');
		window.location.href = "<?php echo admin_url('admin.php?page=designer_imports'); ?>";
	});
}
</script>