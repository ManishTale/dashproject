jQuery(document).ready(function(){
	jQuery( ".size-number" ).spinner({
		min: 0,
		start: function(){
			return design.team.changeSize();
		},
		stop: function(event, ui){
			design.products.sizes();
		}
	});
	
	if(typeof attr_options != 'undefined' && attr_options != '')
	{
		update_attributes(attr_options);
	}
});

jQuery(document).on('after.load.design', function(event, data){
	if(typeof data.design != 'undefined' && typeof data.design.attributes != 'undefined')
	{
		var options = data.design.attributes;
		if(options.length > 0)
		{
			var attr_options = '';
			for(i=0; i<options.length;i++)
			{
				if(typeof options[i] != 'undefined' && options[i] != null)
				{
					var p_option = options[i];
					for(j=0; j<p_option.length; j++)
					{
						if(p_option[j] != '' && p_option[j] != null)
						{
							if(p_option.length == 1)
								var str = i+'_'+p_option[j];
							else
								var str = i+''+j+'_'+p_option[j];
							if(attr_options == '')
							{
								attr_options = str;
							}
							else
							{
								attr_options = attr_options +'-'+ str;
							}
						}
					}
				}
			}
			update_attributes(attr_options);
		}else if(typeof data.design.item.qty != 'undefined')
		{
			if(data.design.item.qty > 0)
			{
				jQuery('#quantity').val(data.design.item.qty);
			}
		}
	}
});

function update_attributes(attr_options)
{
	if(attr_options != '')
	{
		var p_attributes = [];
		var p_options = attr_options.split('-');		
		for(i=0; i<p_options.length;i++)
		{
			var p_option 	= p_options[i];
			var p_attribute = p_option.split('_');
			if(p_attribute.length > 1)
			{
				p_attributes[p_attribute[0]] = p_attribute[1];
			}
		}
		jQuery("#product-attributes .product-fields").each(function(){
			var n = 0;
			jQuery(this).find("[name^='attribute']").each(function(){
				var temp = jQuery(this).attr('name');
				if(temp != 'undefined')
				{
					var name = temp.replace('attribute', '');
					name = name.split('[').join("");					
					name = name.split(']').join("");
					var type = jQuery(this).attr('type');
					if(typeof p_attributes[name] != 'undefined')
					{
						if(type == 'radio')
						{
							if(p_attributes[name] == n)
							{
								jQuery(this).prop('checked', true);
							}
							n++;
						}
						else if(type == 'checkbox')
						{
							if(p_attributes[name] != '0')
							{
								jQuery(this).prop('checked', true);
							}
						}
						else
						{
							jQuery(this).val(p_attributes[name]);
							design.products.sizes();
						}
					}
					else
					{
						jQuery(this).val('');
					}
				}
			});
		});
	}
}
jQuery(document).on('product.change.design', function(evt, product) {
	jQuery( ".size-number" ).spinner({
		min: 0,
		start: function(){
			return design.team.changeSize();
		},
		stop: function(event, ui){
			design.products.sizes();
		}
	});
});