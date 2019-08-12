design.admin = {
	ini: function(){
		jQuery('.product-prices').append('<button style="display:inline-block;" class="btn btn-primary" type="button" onclick="design.admin.product.add()">'+lang.store.create+'</button>');
		jQuery(".e-input-date").datepicker();		
		jQuery('#e-form-tags').tagsInput();
		design.admin.product.minOrder();
		jQuery( "#store-profit" ).spinner({
			min: 0,
			max: 50,
			stop: function( event, ui ) {
				design.admin.product.iniPrice();
			}
		});
	},
	product:{
		prices: [],
		minOrder: function(){
			setTimeout(function(){
				var n = jQuery('#quantity').val();
				jQuery('#store-product-minorder').html(n);
			}, 1000);
		},
		iniPrice: function(){
			var prices = this.prices;
			var profit = jQuery('#store-profit').val();
			if (profit == '')
			{
				profit = 0;
				jQuery('#store-profit').val(0);
			}
			profit = parseFloat(profit);
			if (isNaN(profit) == true || profit < 0){
				profit = 0;
				jQuery('#store-profit').val(0);
			}
			var total = parseFloat(profit) + parseFloat(prices.sale);
			jQuery('.store-price-product-base').html(parseFloat(prices.sale));
			jQuery('.store-price-product-sale').html(total);
			
			jQuery('.list-options-price .options-price-value').each(function(){
				var price = jQuery(this).data('value');
				price = parseFloat(price) + parseFloat(prices.printing) + profit;
				jQuery(this).html(price);
			});
		},
		datas: {},
		add: function(){			
			var item = jQuery('#app-wrap .drag-item');
			if (item.length == 0)
			{
				alert(lang.store.blank);
				return false;
			}
			jQuery('#dg-designer-store').modal('show');
		},
		url: function(e)
		{
			var check = true;
			var div = jQuery(e).parent().parent().children('.text-danger');
			var title = jQuery(e).val();
			if (title.length < 4)
			{
				div.html('<small>Enter between 4 and 30 characters.</small>');
				check = false;
			}
			
			filter = /^[a-z0-9-_]+$/;
			if (filter.test(title))
			{
			}
			else
			{
				div.html('<small>Letters, numbers, dashes and underscores only!</small>');
				check = false;
			}
			
			var button = jQuery('#dg-designer-store button.create-product');
			if (check == true)
			{
				div.css('visibility', 'hidden');
				jQuery('#store_product_url').css({'color':'#555', 'border-color':'#CCC'});
				button.removeAttr('disabled', 'disabled');
			}
			else
			{
				div.css('visibility', 'visible');
				jQuery('#store_product_url').css({'color':'#FF0000', 'border-color':'#FF0000'});
				button.attr('disabled', 'disabled');
			}
		},
		save: function(e){
			// title
			var title = jQuery('#store_product_title').val();
			if (title == '')
			{
				alert(lang.store.title);
				jQuery('#store_product_title').css({'color':'#FF0000', 'border-color':'#FF0000'});
				return false;
			}
			else
			{
				jQuery('#store_product_title').css({'color':'#555', 'border-color':'#CCC'});
			}
			
			// description
			var description = jQuery('#store_product_description').val();
			if (description == '')
			{
				alert(lang.store.description);
				jQuery('#store_product_description').css({'color':'#FF0000', 'border-color':'#FF0000'});
				return false;
			}
			else
			{
				jQuery('#store_product_description').css({'color':'#555', 'border-color':'#CCC'});
			}
			
			// tags
			var tags = jQuery('#e-form-tags').val();
			if (tags == '')
			{
				alert(lang.store.tags);
				jQuery('#e-form-tags').css({'color':'#FF0000', 'border-color':'#FF0000'});
				return false;
			}
			else
			{
				jQuery('#e-form-tags').css({'color':'#555', 'border-color':'#CCC'});
			}
			
			// URL
			var slug = jQuery('#store_product_url').val();
			if (slug == '')
			{
				alert(lang.store.url);
				jQuery('#store_product_url').css({'color':'#FF0000', 'border-color':'#FF0000'});
				return false;
			}
			else
			{
				jQuery('#store_product_url').css({'color':'#555', 'border-color':'#CCC'});
			}
			
			if (jQuery('#store-campaign-end').length > 0)
			{
				var end = jQuery('#store-campaign-end').val();
				if (end == '')
				{
					alert(lang.store.time);
					jQuery('#store-campaign-end').css({'color':'#FF0000', 'border-color':'#FF0000'});
					return false;
				}
				else
				{
					jQuery('#store-campaign-end').css({'color':'#555', 'border-color':'#CCC'});
				}
				
				var today 	= new Date();
				var dd 		= today.getDate();
				var mm 		= today.getMonth()+1;
				var yyyy 	= today.getFullYear();

				if(dd<10) {
					dd='0'+dd
				} 

				if(mm<10) {
					mm='0'+mm
				} 

				today = mm+'/'+dd+'/'+yyyy; 
				
				var d_start = Date.parse(today);
				var d_end = Date.parse(end);
				
				if (isNaN(d_start) || isNaN(d_end))
				{
					alert(lang.store.time);
					return false;
				}
				
				if (d_start >= d_end)
				{
					alert(lang.store.time);
					return false;
				}
				
				this.datas.end = end;
			}		
			
			// setup profit
			if ( jQuery('#store-profit').length > 0)
			{
				var profit = jQuery('#store-profit').val();
				if (profit == '')
				{
					alert(lang.store.profit);
					jQuery('#store-profit').css({'color':'#FF0000', 'border-color':'#FF0000'});
					return false;
				}
				else
				{
					jQuery('#store-profit').css({'color':'#555', 'border-color':'#CCC'});
				}
				this.datas.profit = profit;
			}
			
			if (jQuery('.agree-store-terms').is(":checked") == false)
			{
				alert(lang.store.terms);
				return false;
			}
			
			this.datas.title = title;
			this.datas.slug = slug;
			this.datas.description = description;
			this.datas.tags = tags;
			
			var $btn = jQuery(e).button('loading');
			jQuery.ajax({
				type: "POST",
				url: mainURL + 'wp-admin/admin-ajax.php?action=tshirt_product_url_exits',
				data: { path: slug }
			}).done(function( data ) {				
				if (data == 1)
				{
					alert(lang.store.vaid);
					jQuery('#store_product_url').css({'color':'#FF0000', 'border-color':'#FF0000'});
					return false;
				}
				else
				{
					jQuery('#store_product_url').css({'color':'#555', 'border-color':'#CCC'});
					if (jQuery('.labView.active .design-area').hasClass('zoom'))
					{
						design.tools.zoom();
					}
					design.mask(true);
					design.ajax.active = 'back';
					design.svg.items('front', design.admin.product.thumbs);
				}
			}).always(function(){
				$btn.button('reset');
			});
		},
		post: function(){
			var options		= {};
			options.vectors	= JSON.stringify(design.exports.vector());
			
			options.images	= {};
			if (typeof design.output.front != 'undefined')
				options.images.front = design.output.front.toDataURL();
				
			if (typeof design.output.back != 'undefined')
				options.images.back = design.output.back.toDataURL();
				
			if (typeof design.output.left != 'undefined')
				options.images.left = design.output.left.toDataURL();
				
			if (typeof design.output.right != 'undefined')
				options.images.right = design.output.right.toDataURL();
			
			var datas = design.ajax.form();
			datas.design = options;			
			datas.fonts = design.fonts;
			
			datas.attribute = [];
			datas.quantity = 1;
			
			countTimeini();
			jQuery('.dg-progress').css('display', 'block');
			
			// save design
			jQuery.ajax({				
				type: "POST",
				processData: false,
				data: JSON.stringify(datas),
				dataType: "json",
				contentType: "application/json; charset=utf-8",	
				url: siteURL + "ajax.php?type=addCart"					
			}).done(function( data ){
				if (data != '')
				{
					var content = data;
					if (content.error == 0)
					{
						content.product.product_id = parent_id;
						
						// create product
						var datas = design.admin.product.datas;
						
						datas.color_hex = content.product.color_hex;
						datas.product_id = product_id;
						datas.parent_id = parent_id;
						datas.price = content.product.price;
						datas.design_id = content.product.rowid;
						datas.images = content.product.images;
						
						jQuery.ajax({							
							type: "POST",
							url: mainURL + 'wp-admin/admin-ajax.php?action=tshirt_product_add',
							data: {datas},
							complete: function(data){
								setTime = 100;
								jQuery('.dg-progress').css('display', 'none');
								jQuery('#dg-designer-store').modal('hide');
								alert('Add product successful');															
								design.mask(false);
								
								var url = window.parent.location.href;
								var newLink = url.replace('task=desinger', 'task=store');
								window.parent.location.href = newLink;
							},
							always: function(){
								design.mask(false);
							}
						});
					}
					else
					{
						alert(content.msg);
					}
				}
			});
		},
		thumbs: function(){
			if (design.ajax.active == 'back')
			{
				design.ajax.active = 'left';
				if (jQuery('#view-back .product-design').html() != '' && jQuery('#view-back .product-design').find('img').length > 0)
				{
					design.svg.items('back', design.admin.product.thumbs);
				}
				else
				{
					delete design.output.back;
					design.admin.product.thumbs();
				}
			}
			else if (design.ajax.active == 'left')
			{
				design.ajax.active = 'right';
				if (jQuery('#view-left .product-design').html() != '' && jQuery('#view-left .product-design').find('img').length > 0)
				{
					design.svg.items('left', design.admin.product.thumbs);
				}
				else
				{
					delete design.output.left;
					design.admin.product.thumbs();
				}	
			}
			else if (design.ajax.active == 'right')
			{
				if (jQuery('#view-right .product-design').html() != '' && jQuery('#view-right .product-design').find('img').length > 0)
				{
					design.svg.items('right', design.admin.product.post);
				}
				else
				{
					delete design.output.right;
					design.admin.product.post();
				}
			}
		}
	}
}

var setTime = 0;

function countTimeini() {
    myVar = setTimeout(countTimeProset, 1000);
}
 
function countTimeProset()
{
	setTime++;
	
	jQuery('.dg-progress .progress-bar').css('width', (setTime*2)+'%');
	
	if (setTime < 50)
	{
		countTimeini();
	}
}

jQuery(document).ready(function(){
	design.admin.ini();
});

// set quantity = 1
jQuery(document).on('form.addtocart.design', function(event, datas){
	datas.attribute = [];
	datas.quantity = 1;
});

// load price and install to info price
jQuery(document).on('price.addtocart.design', function(event, datas){
	design.admin.product.prices = datas;
	design.admin.product.iniPrice();
});

// add min order
jQuery(document).on('product.change.design', function(event, product){
	design.admin.product.minOrder();
	
	var ul = jQuery('.list-options-price .dropdown-menu');
		ul.html('');
		
	if (typeof product.prices != 'undefined' && typeof product.prices.price != 'undefined')
	{
		var prices 			= product.prices.price;
		var min_quantity 	= product.prices.min_quantity;
		var max_quantity 	= product.prices.max_quantity;
		var html = '';
		for(i=0; i<prices.length; i++)
		{
			html = html + '<li>'
						+ 	'<a href="javascript:void(0);">'
							
						+		'<span class="full-left">'+min_quantity[i]+' - '+max_quantity[i]+' '+lang.store.sale+'</span>'
						+		'<span class="full-right">'+currency_symbol+'<strong data-value="'+prices[i]+'" class="options-price-value">'+prices[i]+'</strong></span>'
							
						+	'</a>'
						+'</li>';
			
		}
		ul.html(html);
	}
});