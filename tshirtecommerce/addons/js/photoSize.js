if(check_dpi == 1)
{
	jQuery(document).on('resize.item.design', function(event, ui){
		var e = design.item.get();
		if(typeof e[0] != 'undefined')
		{
			var item = e[0].item;
			if(typeof jQuery(e[0]).data('maxWidth') != 'undefined' && typeof jQuery(e[0]).data('maxHeight') != 'undefined')
			{
				if(item.type == 'clipart' && typeof item.file != 'undefined' && typeof item.file.type != 'undefined' && item.file.type == 'image')
				{
					var maxWidth = jQuery(e[0]).data('maxWidth')/dpioutput;
					maxWidth = maxWidth * 2.54;
					var maxHeight = jQuery(e[0]).data('maxHeight')/dpioutput;
					maxHeight = maxHeight * 2.54;
					
					var id = jQuery('.labView.active').attr('id');
					var view = id.replace('view-', '');
					var width   = ui.size.width * sizesCn[view];
					var height  = ui.size.height * sizesCn[view];
					var viewDes = jQuery('#design-area .labView.active .design-area');
					var zoom    = -1;
					if(viewDes.hasClass('zoom')) {
						zoom   = viewDes.data('zoom');
						width  = width / zoom;
						height = height / zoom;
					}
					width = width.toFixed(2);
					height = height.toFixed(2);
					if(width > maxWidth || height > maxHeight)
					{
						jQuery(e[0]).find('svg').css('outline', '2px dashed #f00');
						jQuery('.error-message').show();
						jQuery(e[0]).data('allow_addcart', 0);
					}
					else
					{
						jQuery(e[0]).find('svg').css('outline', 'none');
						jQuery('.error-message').hide();
						jQuery(e[0]).data('allow_addcart', 1);
					}
				}
			}
		}
	});

	var photoSize = {};
	photoSize.maxWidth = 0; 
	photoSize.maxHeight = 0; 
	jQuery(document).on('uploaded', function(event, values, e){
		photoSize.maxWidth = values.size.width; 
		photoSize.maxHeight = values.size.height;
	});

	jQuery(document).on('checkItem.item.design', function(event, check){
		jQuery('.drag-item').each(function(){
			if( typeof jQuery(this).data('allow_addcart') != 'undefined' && jQuery(this).data('allow_addcart') == 0 )
			{
				check.status = false;
				check.callback = true;
				alert_text(addon_photo_size_cart_msg);
				return check;
			}
		});
		return check;
	});

	function checkPhotoDPI()
	{
		var maxWidth = jQuery(this).data('maxWidth')/dpioutput;
		maxWidth = maxWidth * 2.54;
		var maxHeight = jQuery(this).data('maxHeight')/dpioutput;
		maxHeight = maxHeight * 2.54;
		
		var error = 0;
		jQuery('.drag-item').each(function(){
			var e = jQuery(this);
			if(typeof e.data('maxWidth') != 'undefined' && typeof e.data('maxHeight') != 'undefined')
			{
				var item = this.item;
				if(item.type == 'clipart' && typeof item.file != 'undefined' && typeof item.file.type != 'undefined' && item.file.type == 'image')
				{
					var id = e.parents('.labView').attr('id');
					var view = id.replace('view-', '');
					var width   = e.width() * sizesCn[view];
					var height  = e.height() * sizesCn[view];
					var viewDes = jQuery('#'+id +' .design-area');
					var zoom    = -1;
					if(viewDes.hasClass('zoom')) {
						zoom   = viewDes.data('zoom');
						width  = width / zoom;
						height = height / zoom;
					}
					width = width.toFixed(2);
					height = height.toFixed(2);
					if(width > maxWidth || height > maxHeight)
					{
						e.find('svg').css('outline', '2px dashed #f00');
						e.data('allow_addcart', 0);
						error = 1;
					}
					else
					{
						e.find('svg').css('outline', 'none');
						e.data('allow_addcart', 1);
					}
				}
			}
		});
		if(error == 1)
		{
			jQuery('.error-message').show();
		}
		else
		{
			jQuery('.error-message').hide();
		}
	}

	jQuery(document).on('product.change.design', function(event, product){
		if(typeof product.dpioutput == 'undefined')
			dpioutput = dpioutput_default;
		else
			dpioutput = product.dpioutput;
		
		checkPhotoDPI();
	});

	jQuery(document).on('added.uploaded', function(event, e){
		var item = e.item;	
		if(item.type == 'clipart' && typeof item.file != 'undefined' && typeof item.file.type != 'undefined' && item.file.type == 'image')
		{
			if(photoSize.maxWidth > 0)
			{
				jQuery(e).data('maxWidth', photoSize.maxWidth);
				jQuery(e).data('maxHeight', photoSize.maxHeight);		
				var maxWidth = jQuery(e).data('maxWidth')/dpioutput;
				maxWidth = maxWidth * 2.54;
				var maxHeight = jQuery(e).data('maxHeight')/dpioutput;
				maxHeight = maxHeight * 2.54;
				
				var id = jQuery('.labView.active').attr('id');
				var view = id.replace('view-', '');
				var width   = jQuery(e).width() * sizesCn[view];
				var height  = jQuery(e).height() * sizesCn[view];
				var viewDes = jQuery('#design-area .labView.active .design-area');
				var zoom    = -1;
				if(viewDes.hasClass('zoom')) {
					zoom   = viewDes.data('zoom');
					width  = width / zoom;
					height = height / zoom;
				}
				width = width.toFixed(2);
				height = height.toFixed(2);
				if(width > maxWidth || height > maxHeight)
				{
					jQuery(e).find('svg').css('outline', '2px dashed #f00');
					jQuery('.error-message').show();
					jQuery(e).data('allow_addcart', 0);
				}
				else
				{
					jQuery(e).find('svg').css('outline', 'none');
					jQuery('.error-message').hide();
					jQuery(e).data('allow_addcart', 1);
				}
				photoSize.maxWidth = 0;
			}
		}
	});

	jQuery(document).on('remove.item.design', function(event, e){
		jQuery('.error-message').hide();
	});

	// save data
	jQuery(document).on('exports.item.design', function(event, item, e){
		if(typeof jQuery(e).data('maxHeight') != 'undefined')
		{
			item.maxHeight = jQuery(e).data('maxHeight');
		}
		if(typeof jQuery(e).data('maxWidth') != 'undefined')
		{
			item.maxWidth = jQuery(e).data('maxWidth');
		}
		return item;
	});

	// load design
	jQuery(document).on('after.imports.item.design', function(event, span, item){
		if(typeof item.maxWidth != 'undefined')
		{
			jQuery(span).data('maxWidth', item.maxWidth);
		}
		if(typeof item.maxHeight != 'undefined')
		{
			jQuery(span).data('maxHeight', item.maxHeight);
		}
	});

	jQuery(document).ready(function(){
		if(jQuery('#dg-wapper .error-message').length == 0)
		{
			jQuery('#dg-wapper').append('<div class="error-message">'+addon_photo_size_msg+'</div>');
		}
	});
};