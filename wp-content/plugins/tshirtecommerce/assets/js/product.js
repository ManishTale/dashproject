var product_images = [];
var design_page_active = 'list';
var d_design = {
	data: [],
	page_list: {
		init: function(){
			if(typeof product_gallery == 'undefined') return;
			var str = Base64.decode(product_gallery);
			this.hooks();
			design_page_active = 'list';
			if(str != '')
			{
				this.data = jQuery.parseJSON(str);
				this.items();
			}
			else
			{
				jQuery('.store-ideas img').show();
			}
		},
		items: function(){
			var data = this.data;
			var end = true;
			jQuery('.store-design-wapper').each(function(){
				if(jQuery(this).hasClass('loaded') == false)
				{
					end = false;
					var product_id = jQuery(this).data('id');
					if(typeof product_id != 'undefined' && product_id != '' && product_id != 0 && typeof data[product_id] != 'undefined')
					{
						d_design.page_list.loadDesign(this, data[product_id]);
					}
					else
					{
						jQuery(this).find('img').show();
					}
					jQuery(this).addClass('loaded');
					return false;
				}
			});
			if(end === true)
			{
				jQuery(document).triggerHandler( "products.design", data);
			}
		},
		loadDesign: function(e, data){
			d_design.thumb = [];
			var thumb = jQuery(e).find('img');
			try {
				var color 		= jQuery(e).data('color');
				d_design.product_detail.getProductColor(data, color);

				jQuery(e).data('color', d_design.product_detail.product_color_hex);

				data.product_id 	= jQuery(e).data('id');
				data.design_id 		= jQuery(e).data('design_id');

				d_design.thumb['front'] 	= thumb.attr('src');
				d_design.view 	= 'front';
				d_design.design(data, 'front', d_design.product_detail.product_color_index, d_design.product_detail.product_color_hex);
			}
			catch(err) {
				jQuery(e).find('.store-idea-thumb').addClass('active');
			}
		},
		hooks: function(){
			jQuery(document).on('added.thumb.design', function(event, canvas, view, data){
				var div = jQuery('#store-design-'+data.product_id+'-'+data.design_id);

				view = view + '-' + data.product_id +'-'+ data.design_id;
				d_design.page_list.add_thumb(div, view, canvas);
			});
		},
		add_thumb: function(div, view, img, gallery){
			var href = div.find('.store-idea-thumb a').attr('href');
			var active = '';
			if(view.indexOf('front') != -1)
			{
				var active = 'active';
			}
			div.append('<div id="design-idea-'+view+'" class="store-design '+active+'"><a class="design-thumb" href="'+href+'"></a></div>');
			jQuery('#design-idea-'+view+' .design-thumb').append(img);
			if(typeof gallery == 'undefined'){
				this.items();
			}
			this.add_item(div, active);
		},
		add_item: function(div, active){
			var li = '<li class="'+active+'" onclick="dgslide(this)"></li>';
			var ol = div.find('.item-indicators');
			ol.append(li);
		}
	},
	product_detail:{
		area: {},
		init: function(view){
			if(typeof product_design == 'undefined') return;
			design_page_active = 'detail';

			if(typeof view == 'undefined') view = 'front';

			var data = false;
			if(typeof this.data == 'undefined')
			{
				var str = Base64.decode(product_design);
				if(str != '')
				{
					var data = jQuery.parseJSON(str);
					if(typeof data.idea != 'undefined' && typeof data.idea.thumb != 'undefined' )
					{
						jQuery.each(data.idea.thumb, function(view, src) {
							if(src.indexOf('http') == -1)
							{
								data.idea.thumb[view] = URL_d_home +'/tshirtecommerce/'+ src;
							}
						});
					}
					this.data = data;
					this.hooks();
					jQuery(document).on('product.color.images', function(){
						d_design.product_detail.design(data);
					});
				}
			}
			else
			{
				data = this.data;
			}
			if(data !== false)
			{
				
				d_design.view = view;
				this.sizes.area(data, view);
				this.design(data);
			}
		},
		hooks: function(){
			jQuery(document).on('added.thumb.design', function(event, canvas, view){
				var div = jQuery('.woocommerce-product-gallery .store-design-wapper');
				if(jQuery('#design-idea-'+view).length == 0)
				{
					d_design.product_detail.add_thumb(div, view, canvas);
				}
			});

			jQuery(document).on('product.size.quantity', function(){
				setTimeout(function(){
					d_design.product_detail.getPrice();
				}, 300);
			});
		},
		getProductColor: function(data, design_color){ /* get product color similar with color of design */
			var colors = data.design.color_hex;

			var similar = [], points = [];
			for(var i=0; i<colors.length; i++)
			{
				similar[i] = d_design.hexColorDelta(design_color, colors[i]);
				points[i] = similar[i];
			}
			points.sort(function(a, b){return b-a});

			var max = points[0];
			var index = similar.indexOf(max);
			var front = data.design.front;
			if(typeof front[index] != 'undefined')
			{
				var product_color_hex = colors[index];
				var product_color_index = index;
			}
			else
			{
				var product_color_hex = colors[0];
				var product_color_index = 0;
			}
			this.product_color_hex = product_color_hex;
			this.product_color_index = product_color_index;
		},
		getColorActive: function(data, color){
			if(jQuery('.designer-attributes .bg-colors.active').length > 0)
			{
				var a = jQuery('.designer-attributes .bg-colors.active');
				this.product_color_index = a.data('index');
				this.product_color_hex = a.data('color');
			}
			else
			{
				this.getProductColor(data, color);
			}
		},
		design: function(data)
		{
			this.product_id = data.product_id;
			this.idea_id = data.design_id;
			d_design.product_detail.area = {};
			var color = '#FFFFFF';
			var div = this.init_gallery();
			this.getColorActive(data, color);
			var index_color = this.product_color_index;
			var design_color = this.product_color_hex;

			var img = '';
			data.is_design_idea = false;
			if(typeof data.idea != 'undefined' && typeof data.idea.thumb != 'undefined')
			{
				data.is_design_idea = true;
				d_design.thumb = data.idea.thumb;
				if(typeof data.is_shop_product == 'undefined')
				{
					img = '<img style="background-color:#'+design_color+';" src="'+data.idea.thumb[d_design.view]+'" alt="">';
					this.add_thumb(div, 'thumb', img);
				}
			}

			var views = ['front', 'back', 'left', 'right'];
			jQuery.each(views, function(i, view){
				if(typeof data.design[view] != 'undefined' && typeof data.design[view][0] != 'undefined' && data.design[view][0] != '')
				{
					d_design.design(data, view, index_color, design_color);
				}
			});
			data.product_color = design_color;
			jQuery(document).triggerHandler( "product_detail.design", data);
			setTimeout(function(){
				d_design.product_detail.getPrice();
			}, 500);
		},
		add_thumb: function(div, view, img){
			var active = '';
			if(d_design.view == view && jQuery('.store-design.active').length == 0)
			{
				var active = 'active';
			}
			jQuery('#design-idea-'+view).remove();
			div.append('<div id="design-idea-'+view+'" class="store-design '+active+'"><div class="design-thumb"></div></div>');
			jQuery('#design-idea-'+view+' .design-thumb').append(img);
			this.add_item(img, active, view);
		},
		init_gallery: function(){
			var wapper = jQuery('.design-store-gallery');

			wapper.find('.store-design').each(function(){
				if(jQuery(this).hasClass('woo-thumb') == false){
					jQuery(this).remove();
				}
			});
			wapper.find('.item-indicators li').each(function(){
				if(jQuery(this).hasClass('li-woo') == false){
					jQuery(this).remove();
				}
			});
			jQuery('.woo-thumb').removeClass('active');

			var html 	= '';
			var li 	= '';
			if(wapper.find('.store-design-wapper').length == 0)
			{
				wapper.find('.woocommerce-product-gallery__image').each(function(){
					var img = jQuery(this).find('a').html();
					html = html + '<div class="store-design woo-thumb">'
							+ 	'<div class="design-thumb">'
							+ 		img
							+ 	'</div>'
							+ '</div>';
					li = li + '<li onclick="dgslide(this)" class="li-woo">'+img+'</li>';
				});
				wapper.html('<div class="store-design-wapper item-slideshow"></div>');
				wapper.append('<ol class="item-carousel item-indicators item-thumb"></ol>');

				wapper.find('.store-design-wapper').append('<a onclick="dgslide(this)" class="item-carousel item-control  item-control-left"><i class="dgflaticon-back"></i></a>');
				wapper.find('.store-design-wapper').append('<a onclick="dgslide(this)" class="item-carousel item-control item-control-right"><i class="dgflaticon-next"></i></a>');
			}

			var div = wapper.find('.store-design-wapper');
			if(html != '') div.append(html);

			var ol = wapper.find('.item-indicators');
			ol.append(li);

			return div;
		},
		load: function(product_id, idea_id){
			var wp_ajaxurl	= woocommerce_params.ajax_url;
			var data = {
				action: 'get_design_idea',
				product_id: product_id,
				idea_id: idea_id
			};
			jQuery.ajax({
				url: wp_ajaxurl,
				method: "get",
				dataType: "json",
				data: data
			}).done(function(response) {
				if(typeof response.error != 'undefined' && response.error == 0)
				{
					var data = response.data;
					d_design.ideas.image(data);
				}
			});
		},
		getPrice: function(retrun){
			if(design_page_active == 'list') return;
			var wp_ajaxurl	= woocommerce_params.ajax_url;
			var colors = {};
			colors[this.product_color_index] = this.product_color_hex;

			var quantity = 1;
			if(jQuery('.quantity input.input-text.qty').length)
			{
				quantity = jQuery('.quantity input.input-text.qty').val();
			}
			var attributes = this.attributes();
			var product = this.data;
			var data = {
				action: 'get_design_price',
				quantity: quantity,
				attributes: attributes,
				view: d_design.view,
				print_type: product.print_type,
				tax: product.tax,
				product_id: this.product_id,
				idea_id: this.idea_id,
				sizes: JSON.stringify(this.area),
				colors: JSON.stringify(colors),
				design: JSON.stringify(this.sizes.design),
			};
			if(typeof retrun != 'undefined' && retrun == true)
			{
				return data;
			}
			jQuery('button.single_add_to_cart_button').attr('disabled', 'disabled');
			jQuery.ajax({
				url: wp_ajaxurl,
				method: "POST",
				dataType: "json",
				data: data
			}).done(function(response) {
				if(typeof response.error != 'undefined' && response.error == 0)
				{
					jQuery('.entry-summary .price').html(response.data);
				}
				jQuery('button.single_add_to_cart_button').removeAttr('disabled');
			});
		},
		attributes: function(){
			var data = {};
			var regexp = /[0-9]/gi;
			jQuery('.product-attributes [name^=attribute]').each(function(){
				var val = jQuery(this).val();

				var attribute = jQuery(this).attr("name");
				attribute = attribute.replace('attribute[', '');
				
				var matches = attribute.match(regexp);

				var type = jQuery(this).attr('type');
				if(type == 'checkbox' && jQuery(this).is(':checked') == false){
					return;
				}
				if(type == 'radio' && jQuery(this).is(':checked') == false){
					return;
				}

				if(matches.length == 1)
				{
					data[ matches[0] ] = val;
				}
				else if(matches.length == 2)
				{
					if(typeof data[ matches[0] ] == 'undefined')
					{
						data[ matches[0] ] = {};
					}
					data[ matches[0] ][ matches[1] ] = val;
				}
			});
			return data;
		},
		add_item: function(img, active, view)
		{
			var ol = jQuery('.item-indicators');
			if(ol.length == 0) return;
			
			jQuery('li.item-idea-'+view).remove();
			if(typeof img == 'string')
			{
				var li = '<li class="'+active+' item-idea-'+view+'" onclick="dgslide(this)">'+img+'</li>';
			}
			else
			{
				var canvas = document.createElement('canvas');
				canvas.width = img.width;
				canvas.height = img.height;
				var context = canvas.getContext('2d');
				context.drawImage(img, 0, 0);
				var li = document.createElement('li');
				li.setAttribute('onclick', 'dgslide(this)');
				li.setAttribute('class', active+' item-idea-'+view);
				li.appendChild(canvas);
			}
			ol.append(li);
		},
		sizes:{
			sizeCM: 0,
			design: {},
			init: function(sizes, view)
			{
				var area = {};
				area.width = sizes.width * this.sizeCM;
				area.height = sizes.height * this.sizeCM;
				area.size = this.perpage(area.width, area.height);
				this.design = sizes;
				return area;
			},
			area: function(data, view){
				var area = eval ("(" + data.design.area[view] + ")");
				var params = eval ("(" + data.design.params[view] + ")");
				this.sizeCM =  params.width/area.width;
			},
			perpage: function(width, height){
		            var pagesW = [], pagesH = [];
		            pagesW[0] = 10.5, pagesW[1] = 14.8, pagesW[2] = 21, pagesW[3] = 29.7, pagesW[4] = 42, 
		            pagesW[5] = 59.4, pagesW[6] = 84.1;
		            pagesH[0] = 14.8, pagesH[1] = 21, pagesH[2] = 29.7, pagesH[3] = 42, pagesH[4] = 59.4, 
		            pagesH[5] = 84.1, pagesH[6] = 118.9;
					width = width.toFixed(1);
					height = height.toFixed(1);
		            if (width < pagesW[0] && height < pagesH[0]) return 6;
		            var size = 6;
		            for (i = 1; i <= 6; i++) {
		                if ((width <= pagesW[i] && height <= pagesH[i]) || (width <= pagesH[i] && height <= pagesW[i])) {
		                    return 6 - i;
		                }
		            }
		            return 0;
		      }
		}
	},
	hexColorDelta: function(hex1, hex2) {
		hex1 = hex1.replace('#', '');
		hex2 = hex2.replace('#', '');
		var r1 = parseInt(hex1.substring(0, 2), 16);
		var g1 = parseInt(hex1.substring(2, 4), 16);
		var b1 = parseInt(hex1.substring(4, 6), 16);
		var r2 = parseInt(hex2.substring(0, 2), 16);
		var g2 = parseInt(hex2.substring(2, 4), 16);
		var b2 = parseInt(hex2.substring(4, 6), 16);
		var r = 255 - Math.abs(r1 - r2);
		var g = 255 - Math.abs(g1 - g2);
		var b = 255 - Math.abs(b1 - b2);
		r /= 255;
		g /= 255;
		b /= 255;
		return (r + g + b) / 3;
	},
	design: function(data, view, index, product_color){
		var design = data.design[view];

		var layers = eval ("(" + design[index] + ")");
		var count = Object.keys(layers).length;
		count = parseInt(count) - 1;
		var items = [], j = 0;
		for (var i= count; i> -1; i--)
		{
			items[j] = layers[i];
			j++;
		}
		var area 	= eval ("(" + data.design.area[view] + ")");

		var canvas = document.createElement('canvas');
		if(typeof data.box_width != 'undefined')
			canvas.width = data.box_width;
		else
			canvas.width = data.width;
		if(typeof data.box_height != 'undefined')
			canvas.height = data.box_height;
		else
			canvas.height = data.height;
		var ctx = canvas.getContext('2d');
		if(typeof this.thumb != 'undefined' && typeof this.thumb[view] != 'undefined')
		{
			var thumb = this.thumb[view];
			if(thumb.indexOf('http') == -1) thumb = siteURL + thumb;
		}

		var radius = 0;
		if (area.radius == '50%')
		{
			var areaHight = parseInt(area.height);				
			var radius = areaHight / 2;				
		}
		else
		{
			var radius = parseInt(d_design.px(area.radius));
		}

		var i = 0;
		createThumb(i, items);
		function createThumb(i, items)
		{
			if(typeof items[i] == 'undefined')
			{
				jQuery(document).triggerHandler( "added.thumb.design", [canvas, view, data]);
				return;
			}
			
			var item = items[i];
			i++;
			if(item.id == 'area-design')
			{
				if(typeof thumb == 'undefined')
				{
					createThumb(i, items);
					return;
				}

				if (radius != 0)
				{
					ctx.save();
					var x = parseInt(d_design.px(area.left));
					var y = parseInt(d_design.px(area.top));
					var w = d_design.px(area.width), h = d_design.px(area.height);
					var r = x + w; var b = y + h;
					ctx.beginPath();
					
					if (area.radius == '50%') 
					{
						if (w == h)
						{
							ctx.arc(radius, radius, radius, 0, 2 * Math.PI, false);
						}
						else
						{
							ctx.scale(w/h, 1);
							ctx.arc(radius, radius, radius, 0, 2 * Math.PI, false);
							ctx.scale(1/(w/h), 1);
						}
					}
					else
					{
						ctx.moveTo(x+radius, y);
						ctx.lineTo(r-radius, y);
						ctx.quadraticCurveTo(r, y, r, y+radius);
						ctx.lineTo(r, y+h-radius);
						ctx.quadraticCurveTo(r, b, r-radius, b);				
						ctx.lineTo(x+radius, b);
						ctx.quadraticCurveTo(x, b, x, b-radius);				
						ctx.lineTo(x, y+radius);
						ctx.quadraticCurveTo(x, y, x+radius, y);
					}
					ctx.closePath();
					ctx.clip();					
				}
				var image_index = md5(thumb);

				if(typeof product_images[image_index] != 'undefined')
				{
					createArea(product_images[image_index]);
				}
				else
				{
					var image = new Image();
					image.onload = function(){
						product_images[image_index] = image;
						createArea(product_images[image_index]);
					}
					image.src = thumb;
				}

				function createArea(image)
				{
					var width = d_design.px(area.width);
					var height = d_design.px(area.height);
					var top = d_design.px(area.top);
					var left = d_design.px(area.left);

					var new_w = image.width;
					var new_h = image.height;
					if(image.width > area.width)
					{
						new_h = (image.height * area.width)/image.width;
						new_w = area.width;
					}
					if(new_h > area.height)
					{
						new_w = (new_w * area.height)/new_h;
						new_h = area.height;
					}
					var new_top =  (area.height - new_h)/2 + parseInt(top);
					var new_left =  (area.width - new_w)/2 + parseInt(left);
					
					if(typeof data.design.change_bg != 'undefined' && data.design.change_bg == 1)
					{
						var temp_canvas = document.createElement('canvas');
						temp_canvas.width = area.width;
						temp_canvas.height = area.height;
						var temp_context = temp_canvas.getContext('2d');
						temp_context.rect(0, 0, area.width, area.height);
						temp_context.fillStyle = '#'+product_color;
						temp_context.fill();
						ctx.drawImage(temp_canvas, left, top, area.width, area.height);
					}
					ctx.drawImage(image, 0, 0, image.width, image.height, new_left, new_top, new_w, new_h);
					ctx.restore();
					if(design_page_active != 'list')
					{
						if(typeof d_design.thumb[view] != 'undefined')
						{
							var sizes = {};
							sizes.width = new_w;
							sizes.height = new_h;
							sizes.top = new_top;
							sizes.left = new_left;

							sizes.area_top = new_top - top
							sizes.area_left = new_left - left;

							sizes.old_width = image.width;
							sizes.old_height = image.height;
							sizes.old_left = left;
							sizes.old_top = top;
							d_design.product_detail.area[view] = d_design.product_detail.sizes.init(sizes, view);
						}
					}
					createThumb(i, items);
				}
			}
			else
			{
				var image_index = md5(item.img);
				if(typeof product_images[image_index] != 'undefined')
				{
					productThumb(product_images[image_index]);
				}
				else
				{
					var image = new Image();
					image.onload = function(){
						product_images[image_index] = image;
						productThumb(product_images[image_index]);
					}
					image.src = item.img;
				}

				function productThumb(image)
				{
					var width = d_design.px(item.width);
					var height = d_design.px(item.height);
					var top = d_design.px(item.top);
					var left = d_design.px(item.left);
					if(typeof item.is_change_color != 'undefined' && typeof data.design.change_bg == 'undefined' && item.is_change_color == 1 && (typeof item.ismask == 'undefined' || (item.ismask == 0) ) )
					{
						var temp_canvas = document.createElement('canvas');
						temp_canvas.width = image.width;
						temp_canvas.height = image.height;
						var temp_context = temp_canvas.getContext('2d');
						temp_context.rect(0, 0, image.width, image.height);
					      temp_context.fillStyle = '#'+product_color;
					      temp_context.fill();
					      temp_context.drawImage(image, 0, 0, image.width, image.height);
					      ctx.drawImage(temp_canvas, 0, 0, image.width, image.height, left, top, width, height);
					}
					else
					{
						ctx.drawImage(image, 0, 0, image.width, image.height, left, top, width, height);
					}
					createThumb(i, items);
				}
			}
		}
	},
	quick_view: function(e, close){
		if(typeof close != 'undefined')
		{
			jQuery(e).parents('.design-store-gallery').removeClass('gallery-zoom');
			jQuery('.mask-design-zoom').hide('slow');
			jQuery('body').css('overflow', 'auto');
			return false;
		}
		if(jQuery('.mask-design-zoom').length == 0)
		{
			jQuery('body').append('<div class="mask-design-zoom"></div>');
		}
		var mask = jQuery('.mask-design-zoom');
		mask.show();
		jQuery('body').css('overflow', 'hidden');
		jQuery(e).parents('.design-store-gallery').addClass('gallery-zoom');
	},
	px: function(value){
		if(typeof value == 'number') return value;
		return value.replace('px', '');
	}
};
jQuery(document).ready(function() {
	d_design.page_list.init();
	d_design.product_detail.init('front');
});

function dgslide(e){
	var e = jQuery(e);
	if(e.hasClass('active')) return false;

	if(e.hasClass('item-control') == false)
	{
		var li = e.parent().find('li');
		var count = li.length;
		var index = li.index(e);
	}
	else
	{
		var div = e.parent().find('.store-design');
		var div_active = e.parent().find('.store-design.active');

		var index = div.index(div_active);
		if(e.hasClass('item-control-left'))
		{
			index = index - 1;
			if(index < 0) index = div.length - 1;
		}
		else if(e.hasClass('item-control-right'))
		{
			index = index + 1;
			if(index == div.length) index = 0;
		}
	}
	
	if(e.parents('.design-store-gallery').length)
	{
		var parent = e.parents('.design-store-gallery');

		var li = parent.find('.item-indicators li');
		li.removeClass('active');
		jQuery(li[index]).addClass('active');

		var div = parent.find('.store-design');
		div.removeClass('active');
		jQuery(div[index]).addClass('active').css('opacity', 0);
		div.animate({
			opacity: '1',
		});
		
	}
}

var Base64 = {
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	encode: function(input){
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		input = this._utf8_encode(input);

		while (i < input.length) {

			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

		}
		return output;
	},
	decode: function(input){
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		while (i < input.length) {

			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}

		}
		output = this._utf8_decode(output);
		return output;
	},
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	},
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;

		while ( i < utftext.length ) {

			c = utftext.charCodeAt(i);

			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}

		}
		return string;
	}
};
!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}"function"==typeof define&&define.amd?define(function(){return A}):"object"==typeof module&&module.exports?module.exports=A:n.md5=A}(this);
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.Perspective=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){var d=window.html5jp||{};!function(){d.perspective=function(a,b){if(a&&a.strokeStyle&&b&&b.width&&b.height){var c=document.createElement("canvas");c.width=parseInt(b.width),c.height=parseInt(b.height);var d=c.getContext("2d");d.drawImage(b,0,0,c.width,c.height);var e=document.createElement("canvas");e.width=a.canvas.width,e.height=a.canvas.height;var f=e.getContext("2d");this.p={ctxd:a,cvso:c,ctxo:d,ctxt:f}}};var a=d.perspective.prototype;a.draw=function(a){for(var b=a[0][0],c=a[0][1],d=a[1][0],e=a[1][1],f=a[2][0],g=a[2][1],h=a[3][0],i=a[3][1],j=[Math.sqrt(Math.pow(b-d,2)+Math.pow(c-e,2)),Math.sqrt(Math.pow(d-f,2)+Math.pow(e-g,2)),Math.sqrt(Math.pow(f-h,2)+Math.pow(g-i,2)),Math.sqrt(Math.pow(h-b,2)+Math.pow(i-c,2))],k=this.p.cvso.width,l=this.p.cvso.height,m=0,n=0,o=0,p=0;4>p;p++){var q=0;q=p%2?j[p]/k:j[p]/l,q>n&&(m=p,n=q),0==j[p]&&o++}if(!(o>1)){var r=2,s=5*r,t=this.p.ctxo,u=this.p.ctxt;if(u.clearRect(0,0,u.canvas.width,u.canvas.height),m%2==0){var v=this.create_canvas_context(k,s);v.globalCompositeOperation="copy";for(var w=v.canvas,x=0;l>x;x+=r){var y=x/l,z=b+(h-b)*y,A=c+(i-c)*y,B=d+(f-d)*y,C=e+(g-e)*y,D=Math.atan((C-A)/(B-z)),E=Math.sqrt(Math.pow(B-z,2)+Math.pow(C-A,2))/k;v.setTransform(1,0,0,1,0,-x),v.drawImage(t.canvas,0,0),u.translate(z,A),u.rotate(D),u.scale(E,E),u.drawImage(w,0,0),u.setTransform(1,0,0,1,0,0)}}else if(m%2==1){var v=this.create_canvas_context(s,l);v.globalCompositeOperation="copy";for(var w=v.canvas,F=0;k>F;F+=r){var y=F/k,z=b+(d-b)*y,A=c+(e-c)*y,B=h+(f-h)*y,C=i+(g-i)*y,D=Math.atan((z-B)/(C-A)),E=Math.sqrt(Math.pow(B-z,2)+Math.pow(C-A,2))/l;v.setTransform(1,0,0,1,-F,0),v.drawImage(t.canvas,0,0),u.translate(z,A),u.rotate(D),u.scale(E,E),u.drawImage(w,0,0),u.setTransform(1,0,0,1,0,0)}}this.p.ctxd.save(),this.p.ctxd.drawImage(u.canvas,0,0),this._applyMask(this.p.ctxd,[[b,c],[d,e],[f,g],[h,i]]),this.p.ctxd.restore()}},a.create_canvas_context=function(a,b){var c=document.createElement("canvas");c.width=a,c.height=b;var d=c.getContext("2d");return d},a._applyMask=function(a,b){a.beginPath(),a.moveTo(b[0][0],b[0][1]);for(var c=1;c<b.length;c++)a.lineTo(b[c][0],b[c][1]);a.closePath(),a.globalCompositeOperation="destination-in",a.fill(),a.globalCompositeOperation="source-over"}}(),b.exports=d.perspective},{}]},{},[1])(1)});