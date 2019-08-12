if(jQuery('.dg-product-name').length > 0)
{
	jQuery(document).on('product.change.design', function(event, product){
		jQuery('.dg-product-name').html(product.title);
	});	
}