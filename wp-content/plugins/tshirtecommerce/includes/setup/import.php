<?php if(count($products)) { ?>
<h2 class="wp-heading-inline">The importer is working</h2>
<h5 class="notice-warning notice" style="padding: 12px;background-color: #fff8e5;color: #ff0000;">Please don't navigate away while importing</h5>
<style type="text/css">.filename div{white-space: nowrap;} #design-imports{display: none!important;}</style>
<div class="media-frame wp-core-ui mode-grid mode-edit">
	<div class="media-frame-content" data-columns="7">
		<ul class="attachments">
			
			<?php foreach($products as $product) { ?>
			<li class="attachment save-ready">
				<div class="attachment-preview js--select-attachment type-image subtype-png landscape">
					<div class="thumbnail product-design" data-id="<?php echo $product['id']; ?>">
						<div class="media-progress-bar"></div>
						<div class="centered"></div>
						<div class="filename"><div><?php echo $product['title']; ?></div></div>
					</div>
				</div>
			</li>
			<?php } ?>
		</ul>
	</div>
</div>
<?php }else{echo '<h3 class="notice notice-error"><strong>Data not found</strong></h3>';} ?>
<script type="text/javascript">
jQuery(document).ready(function(){
	import_product_design();
});
function import_product_design()
{
	var div = jQuery('.product-design');
	if(typeof div[0] != 'undefined')
	{
		var e = jQuery(div[0])
		var id = e.data('id');
		e.removeClass('product-design');
		e.find('.media-progress-bar').html('<div style="width: 100%"></div>');

		var data = {
			'action': 'import_product_design',
			'id': id
		};
		jQuery.post(ajaxurl, data, function(response) {
			if(response != 0)
			{
				e.find('.media-progress-bar').remove();
				e.find('.centered').html('<img src="'+response+'" alt="">');
			}
			import_product_design();
		});
	}
	else
	{
		var data = {
			'action': 'import_product_design',
			'id': '0',
			'remove': 1,
		};
		jQuery.post(ajaxurl, data, function(response){
			window.location.href = "<?php echo site_url('wp-admin/edit.php?post_type=product'); ?>";
		});
	}
}
</script>