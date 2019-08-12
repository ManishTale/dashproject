window.onbeforeunload = function(e) {
	if(enableAutoImport == '1' )
	{
		var dialogText = 'Are you sure?';
		e.returnValue = dialogText;
		return dialogText;
	}
	design.saveDesignToCookie();
};

design.saveDesignToCookie = function() {
	var vector = design.exports.vector();
	localStorage.setItem('productId-' + product_id, JSON.stringify(vector));
};

jQuery(document).on('ini.design', function(event) {
	if(enableAutoImport != '1' )
	{
		return false;
	}
	try {
		var str  = localStorage.getItem('productId-' + product_id);
		var href = location.href;
		if(href.indexOf('user=') > 0 || href.indexOf('cart_id=') > 0)
		{
			return false;
		}
		if(str != undefined)
		{
			design.imports.vector(str);
			if(design.isIE())
			{
				jQuery('.content-inner .drag-item svg').each(function() {
					removeErrorAttrIE(jQuery(this));
				});
			}
		}
	}
	catch (e)
	{
		return;
	}
});

jQuery(document).on('change.product.design', function(event, p) {
	try {
		if(event.namespace != 'design.product')
		{
			return false;
		}
		if(enableAutoImport != '1' )
		{
			return false;
		}
		var items = jQuery('.labView .design-area .content-inner span');
		if(items.length > 0)
		{
			return false;
		}
		var str = localStorage.getItem('productId-' + product_id);
		if(str != undefined)
		{
			design.imports.vector(str);
			if(design.isIE())
			{
				jQuery('.content-inner .drag-item svg').each(function() {
					removeErrorAttrIE(jQuery(this));
				});
			}
		}
	}
	catch (e)
	{
		return;
	}
});

var removeErrorAttrIE = function(svg) {
	svg.find('*').each(function() {
		if(this.nodeName == 'sodipodi:namedview')
		{
			jQuery(this).remove();
		}
		var attributeElement = this;
		var attLst = this.attributes;
		var removeArr = [];
		for(j = 0; j < attLst.length; j++) {
			var attr = attLst[j];
			if(attr.name.toLowerCase().indexOf('inkscape:') != -1 
				|| attr.name.toLowerCase().indexOf('xmlns:ns') != -1
				|| attr.name.toLowerCase().indexOf('ns1:') != -1
				|| attr.name.toLowerCase().indexOf('ns2:') != -1
				|| attr.name.toLowerCase().indexOf('ns3:') != -1
				|| attr.name.toLowerCase().indexOf('ns4:') != -1
				|| attr.name.toLowerCase().indexOf('ns5:') != -1
				|| attr.name.toLowerCase().indexOf('ns6:') != -1
				|| attr.name.toLowerCase().indexOf('ns7:') != -1
				|| attr.name.toLowerCase().indexOf('sodipodi:') != -1)
			{
				removeArr.push(attr.name);
			}
		}
		jQuery(removeArr).each(function() {
			attributeElement.removeAttribute(this);
		});
	});
};