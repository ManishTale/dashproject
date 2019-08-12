jQuery(document).on('before.add.text.design', function(event, txt) {
	if(event.namespace != 'add.design.text')
	{
		return false;
	}
	txt.text  = txtDefaultVal;
	txt.color = '#' + text_color.replace('#', '');
});

jQuery(document).on('product.change.design', function(event, p) {
	if(event.namespace == 'change.design');
	{
		if(p.productTxtAsSettingFlg == undefined){
			p.productTxtAsSettingFlg = '1';
		}
		if(p.productTxtAsSettingFlg != '1')
		{
			txtDefaultVal = p.textdefault_attribute != undefined ? p.textdefault_attribute : 'Hello';
			text_color    = p.colordefault_attribute != undefined ? p.colordefault_attribute : 'FF0000';
		}
		else
		{
			txtDefaultVal = txtDefaultValS;
			text_color    = text_colorS;
		}
	}	
});