function dg_full_screen(e)
{
	if(typeof window.parent.setHeigh == 'undefined') return false;
	var check = window.parent.dg_full_screen();
	if(check == 1)
	{
		jQuery(e).html('<i class="glyph-icon flaticon-shrink"></i>');
		jQuery('body').addClass('dg_screen');
	}
	else
	{
		jQuery(e).html('<i class="glyph-icon flaticon-expand-2"></i>');
		jQuery('body').removeClass('dg_screen');
	}
}

function show_cartoption(){
	design.item.unselect();
	jQuery('.col-right.col-botton').toggle('slow');
}

function toobar_menu(e, div){
	var elm = jQuery('.dropdown-toolbar-'+div);
	var display = elm.css('display');
	if(display != 'none'){
		jQuery('.dropdown-toolbar').hide();
		return;
	}

	jQuery('.dropdown-toolbar').hide();
	elm.show();
}

var menu_options = {
	close: function(e){
		jQuery(e).parent().hide('slow', function(){
			jQuery(this).removeClass('active');
			if(jQuery('.menu-options .option-panel.active').length == 0)
			{
				jQuery('body').addClass('hide-menu');
			}
			jQuery(this).parent().hide();
		});
	},
	show: function(div){
		jQuery('.menu-options').hide();
		jQuery('.menu-options .option-panel').hide();
		jQuery('body').removeClass('hide-menu');
		var e = jQuery('.option-panel.option-panel-'+div);
		e.show().addClass('active');
		e.parent().show();
	}
}

jQuery(document).ready(function(){
	if(active_full_screen == 1)
	{
		dg_full_screen(null);
	}
	jQuery('.icon-ui-lock').click(function(){
		var input = jQuery(this).parent().find('.ui-lock');
		if(input.length > 0)
		{
			if(input.is(':checked') == true)
			{
				jQuery(this).html('<i class="fa fa-lock" aria-hidden="true"></i>');
			}
			else
			{
				jQuery(this).html('<i class="fa fa-unlock-alt" aria-hidden="true"></i>');
			}
			input.click();
		}
	});

	jQuery('#upload-copyright').change(function(){
		var div = jQuery('#files-upload-form');
		if(jQuery(this).is(':checked'))
		{
			div.removeClass('upload-disabled');
		}
		else
		{
			div.addClass('upload-disabled');
		}
	});
	if(jQuery('#upload-tabs li').length == 1)
	{
		jQuery('#upload-tabs').hide();
	}
	jQuery('#drop-area').click(function(){
		document.getElementById('files-upload').click();
	});
	jQuery('#files-upload').change(function(){
		document.getElementById('action-upload').click();
	});
});

function show_upload(){
	jQuery('#dg-myclipart').toggle();
}

jQuery(document).on('product.change.design', function(event, product){
	jQuery('.product-detail-title').html(product.title);
	jQuery('.product-detail-image').attr('src', baseURL + product.image);
});

jQuery(document).on('update.text.design', function(){
	var e = design.item.get();
	if(typeof e[0] == 'undefined') return;
	var item = e[0].item;
	jQuery('#txt-textoptions').html(item.text).css('font-family', item.fontFamily);
	var textalign = '<i class="glyphicons align_center glyphicons-12"></i>';
	if(item.align == 'left')
	{
		textalign = '<i class="glyphicons align_left glyphicons-12"></i>';
	}
	else if(item.align == 'right')
	{
		textalign = '<i class="glyphicons align_right glyphicons-12"></i>';
	}
	jQuery('.textalign').html(textalign);
});

jQuery(document).on('unselect.item.design', function(){
	jQuery('.dropdown-toolbar').hide();
});

jQuery(document).on('select.item.design', function(event, e){
	if(typeof e == 'undefined' || typeof e.item == 'undefined') return false;
	var item = e.item;
	if(typeof item.lockedProportion != 'undefined' && item.lockedProportion == 1)
	{
		jQuery('.icon-ui-lock').html('<i class="fa fa-unlock-alt" aria-hidden="true"></i>');
	}
	else
	{
		jQuery('.icon-ui-lock').html('<i class="fa fa-lock" aria-hidden="true"></i>');
	}
	if(item.type == 'text')
	{
		jQuery('#txt-textoptions').html(item.text).css('font-family', item.fontFamily);

		var textalign = '<i class="glyphicons align_center glyphicons-12"></i>';
		if(item.align == 'left')
		{
			textalign = '<i class="glyphicons align_left glyphicons-12"></i>';
		}
		else if(item.align == 'right')
		{
			textalign = '<i class="glyphicons align_right glyphicons-12"></i>';
		}
		jQuery('.textalign').html(textalign);
	}
});

jQuery(document).on('price.addtocart.design', function(){
	setTimeout(function(){
		jQuery('.tools-price').html(jQuery('#product-price-sale').html());
	}, 100);
});