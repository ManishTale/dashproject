<style type="text/css">.filename div{white-space: nowrap;} #design-imports, #tool-imports{display: none!important;}.warning-backup{display:none;}</style>

<?php if($downloaded == true) { ?>
<h2 class="wp-heading-inline">Import your design</h2>
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
		<li>Download file <a href="<?php echo $link; ?>" target="_blank"><?php echo $file_name; ?></a></li>
		<li>Upload file <?php echo $file_name; ?> to folder <strong><?php echo $folder; ?></strong></li>
		<li>Reload this page again</li>
	</ol>
</div>

<script type="text/javascript">
jQuery(document).ready(function(){
	import_cliparts();
});
<?php
if(empty($task) || $task == '') $task = 'importStore';
?>
function import_cliparts(){
	var data = {
		'action': 'p9f_download_your_design',
		'site_id': '<?php echo $_GET['site_id']; ?>',
		'api': '<?php echo $_GET['api']; ?>',
	};
	jQuery.post(ajaxurl, data, function(response){
		var ajax_url 	= '<?php echo network_site_url('tshirtecommerce/ajax.php?type=addon&task=store&view='.$task.'&user_id='.$user_id); ?>';
		jQuery.get(ajax_url, function(response){
			alert('Imported all data to your site.');
			window.location.href = "<?php echo admin_url('admin.php?page=designer_imports'); ?>";
		});
	});
}
</script>