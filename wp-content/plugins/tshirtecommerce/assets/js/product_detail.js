var design = {};
var fields = [];
var designer_product = [];
var designer_vectors = {};
var siteURL = '';
jQuery('body').append('<div id="dg-design-ideas"></div>');
var quick_designer = {
	lang: [],
	hide_quickview: 0,
	product:{
		mask: function(remove){
			if(remove == true)
			{
				jQuery('.mask-image').remove();
			}
			else
			{
				jQuery('.type-product .images').append('<div class="mask-image"></div>');
			}
		}
	},
	design:{
		load: function(){
			if(typeof this.product_is_blank != 'undefined' && this.product_is_blank == 1) return;
			var id = d_design.product_detail.data.design_id;
			if(id == '' || id == undefined)
			{
				this.product_is_blank = 1;
				return;
			}
			if(typeof quick_designer.design.data != 'undefined' && typeof quick_designer.design.data.design != 'undefined')
			{
				quick_designer.design.init(quick_designer.design.data);
				return;
			}
			var product_ajaxurl	= URL_d_home + '/wp-admin/admin-ajax.php';
			var data = {
				action: 'tshirtecommerce_design_load',
				design_id: id
			};
			jQuery.ajax({
				url: product_ajaxurl,
				method: "GET",
				data: data,
				cache: true,
			}).done(function(response) {
				if(typeof response != '')
				{
					var data = eval ("(" + response + ")");
					if(data == null) return false;
					if(typeof data.design == 'undefined') return false;
					quick_designer.design.data = data;
					quick_designer.design.init(data);
				}
			});
		},
		sync: function(design){
			if(typeof design.thumbs != 'undefined')
			{
				jQuery.each(design.thumbs, function(view, src){
					if(src != '' && src.indexOf('http') == -1)
					{
						design.thumbs[view] = siteURL + src;
					}
				});
			}
			if(typeof design.images != 'undefined')
			{
				jQuery.each(design.images, function(view, src){
					if(src != '' && src.indexOf('http') == -1)
					{
						design.images[view] = siteURL + src;
					}
				});
			}
			return design;
		},
		init: function(data){
			var design = eval ("(" + Base64.decode(data.design) + ")");
			if(design == null) return;
			
			if(typeof design.vector != 'undefined')
				design.vectors = design.vector;
			
			if(typeof design.vectors == 'undefined') return;
			design = this.sync(design);
			var vectors = eval ("(" + design.vectors + ")");
			var i = 0;
			if(typeof data.params != 'undefined')
			{
				quick_designer.design.design_id = data.params;
			}
			jQuery.each(vectors, function(view, items){
				if(typeof items[0] == 'undefined') return;
				quick_designer.design.svg(view);
				designer_vectors[view] = {};
				jQuery.each(items, function(i, item){
					i++;
					if(typeof item.id == 'undefined') item.id = i;					
					designer_vectors[view][item.id] = item;
				});
			});
			quick_designer.custom.ini();
			quick_designer.design.vectors(designer_vectors);
		},
		svg: function(view){
			if(typeof quick_designer.design.design_id == 'undefined') return;
			var design_id = quick_designer.design.design_id +':'+d_design.product_detail.product_id;

			var wp_ajaxurl	= woocommerce_params.ajax_url;
			var data = {
				action: 'get_svg_design',
				view: view,
				design_id: design_id
			};
			jQuery.ajax({
				url: wp_ajaxurl,
				method: "GET",
				data: data
			}).done(function(html) {
				var svg = jQuery(html).children('svg');
				var div = document.createElement('div');
				div.className = 'svg-preview svg-view-'+view;
				jQuery(div).append(svg[0]);
				jQuery('.customize-design').find('h3').after(div);
				quick_designer.design.zoomSVG(view);
			});
		},
		zoomSVG: function(view){
			if(typeof d_design.product_detail.sizes.design == 'undefined') return;

			var sizes = d_design.product_detail.sizes.design;
			var svg = jQuery('.svg-view-'+view).children('svg');
			if(typeof svg[0] == 'undefined') return;
			return;

			var width = sizes.old_width/1.5;
			var height = sizes.old_height/1.5;
			svg.attr('width', width);
			svg.attr('height', height);

			var min_top = 10000, min_left = 10000;
			svg.children('g').each(function(){
				var left = jQuery(this).data('left');
				var top = jQuery(this).data('top');
				if(min_left > left) min_left = left;
				if(min_top > top) min_top = top;
			});
			var viewBox = min_left +' '+ min_top +' '+ width +' '+ height;
			svg[0].setAttributeNS(null, 'viewBox', viewBox);

			/* zoom svg */
			var svg = jQuery('.svg-view-'+view).children('svg');
			var width = d_design.px(svg.attr('width'));
			width = width * 1.5;
			svg.attr('width', width);

			var height = d_design.px(svg.attr('height'));
			height = height * 1.5;
			svg.attr('height', height);
		},
		vectors: function(vectors, reload){
			if(reload == true)
			{
				jQuery('.design-items').remove();
			}
			jQuery.each(vectors, function(view, items){
				jQuery('.customize-design').find('h3').after('<div data-view="'+view+'" class="design-items design-'+view+'"></div>');
				quick_designer.design.items(view, items);
			});

			setTimeout(function(){
				jQuery('.customize-design .color').spectrum({
					preferredFormat: "hex",
					showInitial: true,
					change: function(color) {
						var hex = color.toHexString();
						quick_designer.custom.changeColor(this);
					}
				});
				if(typeof reload == 'undefined')
				{
					quick_designer.design.userDesign();
				}
			}, 1000);
		},
		items: function(view, items){
			var div = jQuery('.customize-design').find('.design-'+view);
			
			var i = 0;
			var images = {};
			jQuery.each(items, function(j, item){
				if(typeof item.allow_edit != 'undefined' && item.allow_edit == false) return;
				if(typeof item.locked != 'undefined' && item.locked == 1) return;
				if(item.type == 'text' && item.svg.indexOf('textPath') == -1)
				{					
					quick_designer.custom.addText(i, div, item);
					i++;
				}
				if(item.type == 'clipart' && item.change_color == 0)
				{
					images[j] = item;
				}
			});
			jQuery.each(images, function(j, item){
				quick_designer.custom.addPhoto(div, item);
			});
			setTimeout(function(){
				if( jQuery('.customize-design').find('.e-custom-product').length == 0 )
				{
					var btn = jQuery('.customize-design').parent().find('.e-custom-product').detach();
					jQuery('.customize-design').append(btn);
				}
			}, 1000);
		},
		userDesign: function(){
			var wp_ajaxurl	= woocommerce_params.ajax_url;
			var data = {
				action: 'user_edit_design',
				design_id: d_design.product_detail.data.design_id,
			};
			jQuery.ajax({
				url: wp_ajaxurl,
				method: "GET",
				dataType: "json",
				data: data
			}).done(function(response) {
				if(typeof response.vector != 'undefined')
				{
					response.vectors = response.vector;
				}
				if(typeof response.vectors != 'undefined')
				{
					var update = confirm(text_confirm_design);
					if(update == true)
					{
						quick_designer.design.vectors(response.vectors, true);
						jQuery('.customize-design .btn-apply').each(function(){
							this.click();
						});
					}
				}
			});
		},
	},
	custom:{
		ini: function(lang){
			var div = jQuery('.customize-design');
			if(div.length > 0)
			{
				div.append('<h3>'+text_designer_head+'</h3>');
				div.show();
			}
		},
		clear: function(e, id){
			jQuery(e).parents('.custom-col').remove();
			jQuery('.layer-item-'+id).remove();
			quick_designer.vectors.update(id, 'remove', 'img')
		},
		addText: function(i, div, item){
			var texts = item.text.split('\n');
			var html = '<div class="custom-row">'
					 + 	'<div class="input-group">';
			html = html + '<div class="group-left">';
			
			for(j=0; j<texts.length;j++)
			{
				html = html + '<input type="text" value="'+texts[j]+'" data-index="'+i+'" id="text-item-line-'+j+'-'+item.id+'" onkeyup="quick_designer.custom.changeText(this)" class="input-edit">';
			}
			html = html + '</div>';		
			html = html +	'<input type="text" class="color" value="'+item.color+'">'
					 + 		'<button type="button" onclick="quick_designer.custom.updateText(this)" class="btn-apply">'+text_update+'</button>'
					 + 	'</div>'
					 + '</div>';
			div.append(html);
		},
		addPhoto: function(div, item){
			var html = '<div class="custom-col">'
					+ 	 	'<div class="custom-image">'
					+ 	 		'<img onclick="quick_designer.custom.changePhoto(this, '+item.id+')" class="photo-design-'+item.id+'" src="'+item.thumb+'" width="100" alt="">'
					+ 	 	'</div>'
					+ 	 	'<div class="custom-action">'
					+ 	 		'<a onclick="quick_designer.custom.changePhoto(this, '+item.id+')" href="javascript:void(0);" title="">'+text_upload_image+'</a>'
					+ 	 	'</div>'
					+  '</div>';
			div.append(html);
			if(typeof item.media != 'undefined')
			{
				var e = div.find('.photo-design-'+item.id);
				if(typeof e[0] != 'undefined')
				{
					this.updatePhoto(e[0], item.media, item.id);
				}
			}
		},
		changePhoto: function(e, index){
			if(jQuery('.mask-design-zoom').length == 0)
			{
				jQuery('body').append('<div class="mask-design-zoom"></div>');
			}
			var mask = jQuery('.mask-design-zoom');
			if(jQuery('.design-upload').length > 0)
			{
				jQuery('.design-upload').remove();
			}
			jQuery('body').append('<div class="design-upload" style="display:none;"><span class="text-loading">Uploading...</span><form id="files-upload-form"><input type="file" name="myfile" id="files-upload" autocomplete="off"></form></div>');

			jQuery("#files-upload").change(function() {
				mask.show();
				jQuery('.design-upload').show();
				var file = this.files[0];
				var imagefile = file.type;
				var match= ["image/jpeg","image/png","image/jpg"];
				if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2])))
				{
					alert(text_upload_filetype);
					mask.hide();
					return false;
				}
				
				var view = jQuery(e).parents('.design-items').data('view');
				quick_designer.custom.svg = jQuery('.svg-view-'+view).find('svg');
				quick_designer.custom.view = view;
				var fr = jQuery('#files-upload-form');
				jQuery.ajax({
					url: siteURL + 'ajax.php?type=upload&remove=0',
					type: "POST",
					data: new FormData(fr[0]),
					contentType: false, 
					cache: false,
					processData:false,
					success: function(content)
					{
						mask.hide();
						var media 	= eval('('+content+')');
						if (media.status == 1)
						{
							quick_designer.custom.updatePhoto(e, media, index);
						}
					}
				});
			});
			
			jQuery('#files-upload').click();
		},
		updatePhoto: function(e, media, index){
			jQuery('.design-upload').remove();
			var img = jQuery(e).parents('.custom-col').find('img');
			if(typeof img[0] != 'undefined')
			{
				var src = media.src;
				if(src.indexOf('http') == -1)
				{
					src = siteURL + src;
				}
				var newImage = new Image();
				newImage.onload = function() {
					media.width = this.width;
					media.height = this.height;

					var canvas = document.createElement('canvas');
					canvas.width = this.width;
					canvas.height = this.height;
						var ctx = canvas.getContext('2d');
						ctx.drawImage(this, 0, 0);

					jQuery(img[0]).attr('src', src);

					var view = quick_designer.custom.view;

					var image = jQuery('g#'+view+'-item-'+index).find('image');
					if(typeof image[0] == 'undefined') return;

					image[0].setAttributeNS('http://www.w3.org/1999/xlink', 'href', canvas.toDataURL());

					var old_width = d_design.px(image.attr('width'));
					var old_height = d_design.px(image.attr('height'));

					var width = jQuery(this).width();
					if(width < old_width)
					{
						width = old_width;
					}
					var height = jQuery(this).height();
					if(height < old_height)
					{
						height = old_height;
					}
					if(media.width > media.height)
					{
						var newWidth = width;
						var newHeight = (media.height * width)/media.width;
					}
					else
					{
						var newHeight = height;
						var newWidth = (media.width * height)/media.height;
					}
					img[0].setAttributeNS(null, 'width', newWidth);
					img[0].setAttributeNS(null, 'height', newHeight);
					jQuery(this).find('svg').attr('width', newWidth).attr('height', newHeight);
					
					media.width = newWidth;
					media.height = newHeight;
					quick_designer.vectors.update(index, 'image', media);
				};
				newImage.src = src;
			}
		},
		changeColor: function(e){
			jQuery(e).parent().children('.btn-apply').show();
		},
		changeText: function(e){
			jQuery(e).parent().parent().children('.btn-apply').show();
		},
		updateText: function(e){
			var view = jQuery(e).parents('.design-items').data('view');
			this.svg = jQuery('.svg-view-'+view).find('svg');
			this.view = view;

			var div = jQuery(e).parent();
			jQuery(e).hide();
			var input = div.find('.input-edit');
			var id = jQuery(input[0]).attr('id');
			var line = jQuery(input[0]).data('index');
			var index = id.replace('text-item-line-'+line+'-', '');
			var color = div.children('.color').val();
			this.text.color(index, color);
			
			var texts = '';
			div.find('.input-edit').each(function(){
				var txt = jQuery(this).val();
				line = jQuery(this).data('index');
				quick_designer.custom.text.txt(index, txt, line);
				if(texts == '')
				{
					texts = txt;
				}
				else
				{
					texts = texts + '\n' + txt;
				}
			});
			var text = {};
			text.color = color;
			text.txt = texts;
			quick_designer.vectors.update(index, 'text', text);
		},
		text:{
			color: function(index, color){
				var view = quick_designer.custom.view;

				var text = jQuery('g#'+view+'-item-'+index).find('text');
				if(typeof text[0] == 'undefined') return;
				text.attr('fill', color);
				
			},
			txt: function(index, txt, line){
				var view = quick_designer.custom.view;
				var text = jQuery('g#'+view+'-item-'+index).find('text');
				if(typeof text[0] == 'undefined') return;

				var tspan = text.find('tspan');
				if(typeof tspan[line] != 'undefined' && txt != '')
				{
					tspan[line].textContent = txt;
					var size = quick_designer.custom.changeSize(jQuery('g#'+view+'-item-'+index));
				}
			}
		},
		changeSize: function(e){
			return;
			var box_svg 	= e.parents('svg')[0].getBoundingClientRect();
			var svg 		= e.find('svg');
			var txt 		= e.find('text');
			var size 		= txt[0].getBoundingClientRect();
			if(size.width > box_svg.width)
			{
				var new_w 	= box_svg.width;
				var nex_h 	= (box_svg.height * size.height)/size.width;
				svg[0].setAttributeNS(null, 'width', new_w);
				svg[0].setAttributeNS(null, 'height', nex_h);
				size.width = new_w;
				size.height = new_h;
			}
			return size;
		}
	},
	vectors:{
		update: function(index, lable, value){
			quick_designer.canvas();
			var view = quick_designer.custom.view;
			if(typeof designer_vectors[view] != 'undefined' && typeof designer_vectors[view][index] != 'undefined')
			{
				if(lable == 'text')
				{
					designer_vectors[view][index].text 	= value.txt;
					designer_vectors[view][index].color = value.color;
				}
				else if(lable == 'size')
				{	
					designer_vectors[view][index].width = value.width+'px';
					designer_vectors[view][index].height = value.height+'px';
				}
				else if(lable == 'remove')
				{
					delete designer_vectors[view][index];
				}
				else if(lable == 'image')
				{
					designer_vectors[view][index].file_name = value.item.file_name;
					designer_vectors[view][index].title = value.item.title;
					designer_vectors[view][index].thumb = siteURL + value.item.thumb;
					designer_vectors[view][index].url = siteURL + value.item.thumb;
					
					designer_vectors[view][index].width = value.width+'px';
					designer_vectors[view][index].height = value.height+'px';
					designer_vectors[view][index].media = value;
				}
				if(designer_vectors[view][index].type == 'text')
				{
					var viewBox = this.sizes(view, index);
					if(viewBox != '')
					{
						designer_vectors[view][index].viewBox = viewBox;
					}
				}

				var svg = jQuery('#'+view+'-item-'+index).html();
				designer_vectors[view][index].svg = svg;
			}
			quick_designer.ajax();
		},
		sizes: function(view, index){
			var item = jQuery('#'+view+'-item-'+index);
			if(typeof item[0] == 'undefined') return;
			var svg = item.find('svg');
			if(typeof svg[0] == 'undefined') return;

			var width 	= parseInt(svg.attr('width'));
			
			var width1 	= parseInt(designer_vectors[view][index].width);

			var height 	= parseInt(svg.attr('height'));
			var viewBox = svg[0].getAttributeNS(null, 'viewBox');

			var size = svg[0].getBoundingClientRect();
			var change_size = parseInt(size.width) - (width1 * 1.5);
			if(change_size > 3)
			{
				var options = viewBox.split(' ');
				var view_w 	= (size.width * options[2])/width;
				var view_h 	= (size.height * options[3])/height;

				var new_viewbox = options[0] +' '+ options[1] +' '+ view_w +' '+ view_h;
				svg[0].setAttributeNS(null, 'viewBox', new_viewbox);
				svg.attr('width', size.width);
				svg.attr('height', size.height);

				var align = 'center';
				if(typeof designer_vectors[view][index].align != 'undefined')
				{
					align = designer_vectors[view][index].align;
				}
				var old_width 	= d_design.px(designer_vectors[view][index].width);
				var left 		= parseInt(item.data('left'));
				var top 		= parseInt(item.data('top'));
				var transform 	= item.attr('transform');
				var attrs  		= transform.split(') ');  
				if(align == 'center')
				{
					var move = (old_width - size.width)/2;
					left = left + move;
				}
				else if(align == 'right')
				{
					var move = size.width - old_width;
					left = left - move;
				}
				var new_transform = 'translate('+left+', '+top+')';
				for(var i = 1; i<attrs.length; i++)
				{
					if(attrs[i] != '')
					{
						new_transform = new_transform +' '+ attrs[i];
					}
				}
				item.attr('transform', new_transform);
				
				return new_viewbox;
			}

			return '';
		}
	},
	canvas: function(){
		var view = this.custom.view;
		var svg = jQuery('.svg-view-'+view).html();
		if(svg == '') return;
		var image = 'data:image/svg+xml,'+encodeURIComponent(svg);

		quick_designer.product.mask();

		d_design.thumb[view] = image;
		setTimeout(function(){
			d_design.product_detail.design(d_design.product_detail.data);
			quick_designer.product.mask(true);
		}, 500);
	},
	ajax: function(){
		var wp_ajaxurl	= woocommerce_params.ajax_url;
		var data = {
			action: 'user_edit_design',
			design_id: d_design.product_detail.data.design_id,
			product_id: d_design.product_detail.product_id,
			vectors: JSON.stringify(designer_vectors),
		};
		jQuery.ajax({
			url: wp_ajaxurl,
			method: "POST",
			data: data
		}).done(function(response) {});
	}
}

var box_width = 500;
var box_height = 500;
jQuery(document).on('product_detail.design', function(event, data){
	if(jQuery('.design-items').length > 0) return;
	box_width = d_design.product_detail.data.box_width;
	box_height = d_design.product_detail.data.box_height;
	siteURL = URL_d_home+'/tshirtecommerce/';
	setTimeout(function(){
		quick_designer.design.load();
		if (typeof data.is_design_idea !== 'undefined' && data.is_design_idea == false && jQuery('.design-store-gallery .item-indicators li.active').length == 0) {
			jQuery('.design-store-gallery .item-indicators li').first().trigger("click");
		}
	}, 500);
	if(jQuery('.dg-poduct-fields .size-number').length == 0)
	{
		jQuery('.input-text.qty').val(0);
	}
});