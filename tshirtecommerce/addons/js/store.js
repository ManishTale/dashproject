design.store = {
	design: {
		art: function(e){
			var item = e.item;
			if (typeof item == 'undefined') return false;
			jQuery('#dg-cliparts').modal('hide');
			if(typeof item.is_shop != 'undefined')
			{
				if (item.file_type != 'svg')
				{
					e.item.imgMedium = item.thumb;
				}
				var clipart_id = item.clipart_id;
				jQuery(e).data('clipart_id', clipart_id);
				design.art.create(e);
				return;
			}

			design.mask(true);
			jQuery.ajax({
				url: siteURL + "ajax.php?type=addon&task=store&view=art&id="+item.id,
				type: "GET",
				complete: function(data) {
					design.mask(false);
					if (data.responseText != '')
					{
						var art = eval ("(" + data.responseText + ")");
						
						if(art.content == '')
						{
							alert_text(lang.designer.datafound);
							return false;
						}
						
						if (item.type == 'vector')
						{
							var svg = encrypt_api.Base64.decode(art.content);
						}
						else
						{
							var svg = art.content;
						}
						item.content = svg;
						item.art_key = art.key;
						item.width 	= art.width;
						item.height = art.height;
						item.price 	= art.price;
						jQuery(document).triggerHandler( "before.store.item.design", item);
						design.store.design.create(item);
						jQuery(document).triggerHandler("after.store.item.design", item);
					}
				}
			});
		},
		create: function(item){
			$jd('.ui-lock').attr('checked', false);			
			var o 			= {};
			o.type 			= 'clipart';			
			o.upload 		= 0;
			o.clipart_id 	= item.id;
			o.clipar_type 	= 'store';
			o.price			= item.price;
			o.title 		= item.title;
			o.url 			= item.thumb;
			o.file_name 	= item.thumb;
			o.thumb 		= item.thumb;
			o.remove 		= true;
			o.edit 			= true;
			o.rotate 		= true;
			o.confirmColor	= false;
			
			
			if (item.type != 'vector')
			{
				o.file			= {};
				o.file.type		= 'image';
				o.confirmColor	= true;
				var img = new Image();
				img.onload = function() {
					o.width 	= this.width;
					o.height	= this.height;
					if (this.width > 100)
					{
						o.width 	= 100;						
						o.height 	= (100/this.width) * this.height;
					}
					o.change_color = 0;					
						
					jQuery(document).triggerHandler( "myitem.create.item.design", o);
					
					var src = 'data:image/PNG;base64,'+item.content;
					var content = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="'+o.width+'" height="'+o.height+'" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink">'
								 + '<g><image x="0" y="0" width="'+o.width+'" height="'+o.height+'" preserveAspectRatio="none" xlink:href="'+src+'" /></g>'
								 + '</svg>';
					o.svg 		= jQuery.parseHTML(content);
					
					design.item.create(o);
					$jd('#dg-myclipart').modal('hide');
				}
				img.src = item.medium;
				return true;
			}
			else
			{
				o.change_color	= true;
				o.width 		= item.width;
				o.height		= item.height;
				o.file			= 'svg';
				o.art_key 		= item.art_key;
				o.svg 			= jQuery.parseHTML(item.content);
				design.item.create(o);
				var elm = design.item.get();			
				var svg = elm.children('svg');
				jQuery(svg[0]).removeAttr('style');
				$jd('.modal').modal('hide');
				var e = design.item.get();
				design.item.setup(e[0].item);
			}
		},
		idea: function(e){
			jQuery('#dg-design-ideas').modal('hide');
			var id = jQuery(e).data('id');
			var ideas = design.store.ideas.data.rows;
			if(typeof ideas[id] != 'undefined')
			{
				var idea = ideas[id];
				if(idea.fonts != '')
				{
					jQuery('head').append("<link href='https://fonts.googleapis.com/css?family="+idea.fonts+"' rel='stylesheet' type='text/css'>");
				}
				design.store.ideas.loadDesign(id);
			}
			else
			{
				alert_text(lang.designer.datafound);
				return false;
			}
		}
	},
	ideas:{
		product_id: 0,
		data: [],
		cate_id: 0,
		searchValues:[],
		products: [],
		ini: function(){
			jQuery('.dag-store-ideas').show();
			jQuery('.idea-store-detail').hide();
			
			var div 		= jQuery('.dag-store-ideas');
			
			var product 	= this.getProduct();
			var imgs	 	= this.product(product);
			if(div.html() != '')
			{
				var ideas	 = this.data;
				this.idea(ideas.rows, imgs, product.areaDesign);
			}
			else
			{
				var options = {};
				
				var type = jQuery('.idea-sort').data('type');
				if (typeof type == 'undefined')
				{
					options.sort = 'featured';
				}
				else
				{
					options.sort = type;
				}
				
				options.keyword = jQuery('#idea-keyword').val();
				
				var tags = jQuery('.idea-keyword-related .keyword-tag');
				if(tags.length > 0)
				{
					options.tags	= tags.text();
				}
				
				var designer = jQuery('.idea-keyword-related .keyword-designer');
				if(designer.length > 0)
				{
					options.designer	= designer.data('id');
				}
				
				if(jQuery('.idea-viewed').length > 0)
				{
					options.viewed = 1;
				}
				options.cate_id	= this.cate_id;
				var seft = this;
				var div = jQuery('#dg-design-ideas .modal-body');
				div.addClass('loading');
				jQuery('#store-idea-pagination').hide();
				jQuery('.idea-store-detail').hide();
				jQuery.ajax({
					beforeSend: function(){
						jQuery('#dg-design-ideas .modal-body').css('opacity', '0.5');
					},
					url: siteURL + "ajax.php?type=addon&task=store&view=ideas&product_id="+product_id,
					type: "POST",
					data: {options: options},
					complete: function(data) {
						div.removeClass('loading');
						
						if(data.status == 200)
						{
							var ideas = eval ("(" + data.responseText + ")");
							if(ideas.count == 0)
							{
								jQuery('.dag-store-ideas').html(lang.designer.datafound);
								return false;
							}
							seft.data = ideas;
							seft.idea(ideas.rows, imgs, product.areaDesign);
						}
						gridArt('.dag-store-ideas');
					}
				});
			}
			setTimeout(function(){
				jQuery('.dag-store-ideas').css('height', 'auto');
			}, 1000);
		},
		view: function(e){
			var id = jQuery(e).data('id');
			var data = this.data.rows[id];
			if(data != 'undefined')
			{
				
				var tags = '';
				if(typeof data.tags != 'undefined')
				{
					for(i=0; i<data.tags.length; i++)
					{
						if(data.tags[i] != '')
							tags = tags + '<a href="javascript:void(0);" data-title="'+data.tags[i]+'" data-id="'+data.tags[i]+'" onclick="design.store.ideas.search(\'tag\', this);" class="btn-tag">'+data.tags[i]+'</a>';
					}
				}
				var designer = '';
				if(typeof data.username != 'undefined')
				{
					designer = lang.store.designer+': <a href="javascript:void(0);" data-title="'+data.username+'" data-id="'+data.user_id+'" onclick="design.store.ideas.search(\'designer\', this);">'+data.username+'</a>';
				}
				var html = '<div class="row">'
						 + 		'<div class="col-sm-6">'
						 + 			'<img src="'+data.image+'" class="img-responsive" alt="">'
						 + 		'</div>'
						 + 		'<div class="col-sm-6">'
						 + 			'<h4>'+data.title+'</h4>'
						 + 			'<p class="help-block">'+data.description+'</p>'
						 + 			designer
						 + 			'<hr />'
						 + 			tags
						 + 		'</div>'
						 + '</div>'
						 + '<button type="button" class="close" onclick="jQuery(\'.idea-store-detail\').hide();jQuery(\'.dag-store-ideas\').show()">×</button>';
				jQuery('.idea-store-detail').html(html).show('slow');
				jQuery('.dag-store-ideas').hide();
			}
		},
		resets: function(){
			var view = jQuery('#app-wrap .labView.active');
			view.find('.drag-item').each(function(){
				var id = jQuery(this).attr('id');
				var index = id.replace('item-', '');
				design.layers.remove(index);
			});
		},
		resetSearch: function(e){
			var type = jQuery(e).data('type');
			jQuery(e).parent().remove();
			jQuery('.dag-store-ideas').html('');
			this.ini();
		},
		search: function(type, e){
			var title = jQuery(e).data('title');
			var id = jQuery(e).data('id');
			if(type == 'designer')
			{
				var html = '<span data-id="'+id+'" class="btn btn-default keyword-'+type+'">'
						 + 		'<a href="#" data-type="'+type+'" onclick="design.store.ideas.resetSearch(this)">'
						 + 		'<i class="fa fa-times" aria-hidden="true"></i>'
						 + 		'</a>'
						 + 		'<i class="fa fa-user" aria-hidden="true"></i> '+title
						 + '</span>';
			}
			else if(type == 'tag')
			{
				var html = '<span class="btn btn-default keyword-'+type+'">'
						 + 		'<a href="#" data-type="'+type+'" onclick="design.store.ideas.resetSearch(this)">'
						 + 		'<i class="fa fa-times" aria-hidden="true"></i>'
						 + 		'</a>'
						 + 		'<i class="fa fa-tag" aria-hidden="true"></i> '+title
						 + '</span>';
			}
			jQuery('.idea-keyword-related .keyword-'+type).remove();
			jQuery('.idea-keyword-related').append(html);
			jQuery('.dag-store-ideas').html('');
			this.ini();
		},
		viewed: function(e){
			var elm = jQuery(e);
			var txt = elm.text();
			if (elm.hasClass('btn'))
			{
				elm.removeClass('btn btn-default').html(txt);
			}
			else
			{
				elm.addClass('btn btn-default').html('<a href="#" class="idea-viewed"><i class="fa fa-times" aria-hidden="true"></i></a> <i class="fa fa-eye" aria-hidden="true"></i> ' + txt);
			}
			jQuery('.dag-store-ideas').html('');
			this.ini();
		},
		loadDesign: function(id){
			design.mask(true);
			jQuery(document).triggerHandler( "before.add.idea.design", id);
			jQuery.ajax({
				url: siteURL + "ajax.php?type=addon&task=store&view=design&id="+id,
				type: "GET",
				complete: function(data) {
					if (data.responseText != '')
					{
						var idea = eval ("(" + data.responseText + ")");
						
						if(idea.content == '')
						{
							alert_text(lang.designer.datafound);
							return false;
						}
						var ids = [];
						jQuery(document).on('before.imports.item.design', function(event, span, item){
							if(item.type == 'clipart')
							{
								ids.push(item.clipart_id);
								item.clipar_type = 'store';
								span.item.clipar_type = 'store';
							}							
						});
						
						jQuery(document).on('after.imports.item.design', function(event, span, item){
							if(item.type == 'text' && item.fontFamily != '' && item.fontFamily != 'arial')
							{
								design.text.update('fontfamily', item.fontFamily); 
								design.text.baseencode(item.fontFamily, 'google', span);
							}
							else if(item.type == 'clipart' && typeof item.thumb != 'undefined' && item.thumb != '')
							{
								var src = jQuery(span).find('image').attr('xlink:href');
								if(typeof src == 'undefined') return;
								src = src.replace(siteURL, '');
								if(src.indexOf('http') == 0)
								{
									var image = new Image();
									image.onload = function(){
										var canvas = document.createElement('canvas');
										canvas.width = image.width;
										canvas.height = image.height;
										var ctx = canvas.getContext("2d");
										ctx.drawImage(image, 0, 0, image.width, image.height);
										var data_img = canvas.toDataURL();
										jQuery(span).find('image').attr('xlink:href', data_img);
									};
									image.src = siteURL +'image-tool/index.php?src='+ src;
								}
							}
						});
						jQuery(document).triggerHandler( "before.added.idea.design", idea);
						design.store.ideas.resets();
						var str = encrypt_api.Base64.decode(idea.content);
						var view = design.products.viewActive();
						var vectors = str.replace('{"front":{', '{"'+view+'":{');
						design.imports.vector(vectors);
						design.selectAll();
						design.fitToAreaDesign();
						design.mask(false);
						
						jQuery(document).triggerHandler( "after.added.idea.design", idea);
						
						setTimeout(function(){
							design.ajax.getPrice();
						}, 1000);
						design.store.ideas.setView(id, ids);
					}
				}
			});
		},
		setView: function(id, ids){
			jQuery.ajax({
				url: siteURL + "ajax.php?type=addon&task=store&view=viewDesign&id="+id,
				type: "POST",
				data: {ids: ids},
				complete: function(data) {
					if( ids.length > 0 && data.responseText != '' )
					{
						var arts_key = eval ("(" + data.responseText + ")");
						jQuery('#app-wrap .drag-item').each(function(){
							var item = this.item;
							if(item.clipar_type == 'store' && typeof item.art_key == 'undefined' && typeof arts_key[item.clipart_id] != 'undefined')
							{
								this.item.art_key = arts_key[item.clipart_id];
							}
						});
					}
				}
			});
		},
		getProduct: function(){
			if(jQuery('.labView.active .design-area').length > 0)
			{
				var zoom = 220/max_box_width;
				this.products[product_id]	= [];
				
				var images 	= [], i=0,zIndex = 1;
				jQuery('.labView.active .product-design img').each(function(){
					images[i] 			= [];
					images[i].src 		= jQuery(this).attr('src');
					
					var width 			= jQuery(this).css('width');
					images[i].width		= parseFloat(width.replace('px', ''));
					images[i].width		= images[i].width * zoom;
					
					var height 			= jQuery(this).css('height');
					images[i].height 	= parseFloat(height.replace('px', ''));
					images[i].height	= images[i].height * zoom;
					
					var	top 			= jQuery(this).css('top');
					images[i].top 		= parseFloat(top.replace('px', ''));
					images[i].top		= images[i].top * zoom;
					
					var left 			= jQuery(this).css('left');
					images[i].left 		= parseFloat(left.replace('px', ''));
					images[i].left		= images[i].left * zoom;
					
					images[i].zindex 	= jQuery(this).css('z-index');
					if(images[i].zindex == 'auto')
						images[i].zindex = zIndex;
					i++;
					zIndex++;
				});
				this.products[product_id].images = images;
				
				var div = jQuery('.labView.active .design-area');
				var areaDesign = [];
				var width 				= div.css('width');
				areaDesign.width 		= parseFloat(width.replace('px', ''));
				areaDesign.width		= areaDesign.width * zoom;
				
				var height 				= div.css('height');
				areaDesign.height 		= parseFloat(height.replace('px', ''));
				areaDesign.height		= areaDesign.height * zoom;
				
				var top 				= div.css('top');
				areaDesign.top 			= parseFloat(top.replace('px', ''));
				areaDesign.top			= areaDesign.top * zoom;
				
				var left 				= div.css('left');
				areaDesign.left 		= parseFloat(left.replace('px', ''));
				areaDesign.left			= areaDesign.left * zoom;
				
				areaDesign.zindex 		= div.css('z-index');
				if(areaDesign.zindex == 'auto')
					areaDesign.zindex	= zIndex;
					
				this.products[product_id].areaDesign = areaDesign;
				this.products[product_id].zoom = zoom;
				
				return this.products[product_id];
			}
			else
			{
				return false;
			}
		},
		load: function(e){
			var product = this.getProduct();
			if(jQuery('#dg-design-ideas').hasClass('modal')){
				jQuery('#dg-design-ideas').modal('show');
			}
			if(this.product_id != product_id)
			{
				var div = jQuery('.dag-store-ideas').html('');
				this.ajax(product);
				this.product_id = product_id;
			}
			return false;
		},
		product: function(product){
			var html = '';
			if(product.images.length > 0)
			{
				for(i=0; i<product.images.length; i++)
				{
					var img = product.images[i];
					html = html + '<img src="'+img.src+'" alt="" style="width:'+img.width+'px; height:'+img.height+'px;top:'+img.top+'px; left:'+img.left+'px; z-index:'+img.zindex+';">';
				}
			}
			return html;
		},
		categories: function(cate_id, parent_id, reload){		
			var categories	= this.data.categories;
			
			var rows = false;
			var li = jQuery('.idea-breadcrumb li');
			if(cate_id == 0)
			{
				rows = categories;
				if (typeof li[1] != 'undefined') jQuery(li[1]).remove();
				if (typeof li[2] != 'undefined') jQuery(li[2]).remove();
			}
			else if(categories[cate_id] != 'undefined' && parent_id == 0)
			{
				if (typeof li[1] != 'undefined') jQuery(li[1]).remove();
				if (typeof li[2] != 'undefined') jQuery(li[2]).remove();
				
				var category = categories[cate_id];
				if(category.id != 'undefined')
				{
					jQuery('.idea-breadcrumb').append('<li><a href="javascript:void(0);" onclick="design.store.ideas.categories('+category.id+', 0)">'+category.title+'</a></li>');
				}
				if(typeof category.children != 'undefined')
				{
					rows = categories[cate_id].children;
				}				
			}
			else
			{
				if(categories[parent_id] != 'undefined' && categories[parent_id].children != 'undefined')
				{
					if (typeof li[2] != 'undefined') jQuery(li[2]).remove();
					categories = categories[parent_id].children;
					var category = categories[cate_id];
					if(category.id != 'undefined')
					{
						jQuery('.idea-breadcrumb').append('<li><a href="javascript:void(0);" onclick="design.store.ideas.categories('+category.id+', '+parent_id+')">'+category.title+'</a></li>');
					}
				}
			}
			
			parent_id = cate_id;
			
			html	= '';
			if(rows != false)
			{
				var sortable=[];
				for (var idx in rows) {
					if (rows.hasOwnProperty(idx)) {
						sortable.push(rows[idx]);
					}
				}
				sortable.sort(function(a, b) {
					return a.sort - b.sort;
				});
				if (sortable.length > 0) {
					jQuery.each(sortable, function(key, value){
						if(value.parent_id == 0)
						{
							html = html + '<li><a href="javascript:void(0);" class="btn-thumb" onclick="design.store.ideas.categories('+value.id+', '+parent_id+')"><img src="'+value.thumb+'" alt="" class="img-background"><span>'+value.title+'</span></a></li>';
						}
						else
						{
							html = html + '<li><a href="javascript:void(0);" onclick="design.store.ideas.categories('+value.id+', '+parent_id+')">'+value.title+'</a></li>';
						}
					});
				}
			}
			jQuery('#dag-store-idea-categories ul').html(html);
			this.cate_id = cate_id;
			if(typeof reload != 'undefined' && reload == false)
			{
				return false;
			}
			jQuery('.dag-store-ideas').html('');
			this.ini();
		},
		idea: function(rows, imgs, areaDesign){
			if (Object.keys(rows).length > 30)
			{
				jQuery('#store-idea-pagination').css('display', 'block');
			}
			else
			{
				jQuery('#store-idea-pagination').css('display', 'none');
			}
			var count 	= Object.keys(rows).length;
			var seft 	= this;
			var start 	= jQuery('.dag-store-ideas .box-idea').length;
			var end 	= start + 30;
			var i = 0;
			jQuery.each(rows, function(id, art){
				if(i>=start && i<end)
				{
					seft.add(art, imgs, areaDesign);
				}
				if(i>end)
				{
					return;
				}
				i++;
				if(count == i)
				{
					jQuery('#store-idea-pagination').css('display', 'none');
					return false;
				}
			});
		},
		add: function(data, imgs, areaDesign){
			if(typeof data.color == 'undefined') data.color = 'FFFFFF';
			var html = '<div class="box-art box-idea">'
					 + 		'<a href="javascript:void(0);" data-id="'+data.id+'" class="images-design" title="'+data.title+'" onclick="design.store.design.idea(this)">'
					 +			imgs
					 +			'<img src="'+data.thumb+'" class="thumb-idea" id="thumb-idea-'+data.id+'" alt="'+data.title+'" style="width:'+areaDesign.width+'px; height:auto;max-height:'+areaDesign.height+'px;top:'+areaDesign.top+'px;left:'+areaDesign.left+'px; z-index:'+areaDesign.zindex+';">'
					 +		'</a>'
					 +		'<div class="hide-hover" data-id="'+data.id+'" onclick="design.store.design.idea(this)" style="background-color: #'+data.color+';"><img src="'+data.thumb+'" alt="'+data.title+'" class="img-responsive"></div>'
					 + 		'<span class="art-view" data-id="'+data.id+'" onclick="design.store.ideas.view(this);" title="'+data.title+'">'
					 + 			'<i class="fa fa-info" aria-hidden="true"></i>'
					 + 		'</span>'
					 + '</div>';
			jQuery('.dag-store-ideas').append(html);
			var img = jQuery('#thumb-idea-'+data.id);
			var height = img.height();
			var top = (areaDesign.height - height)/2;
			if(top < areaDesign.top) top = areaDesign.top;
			//img.css('top', top);
		},
		ajax: function(product){
			if(this.product_id == product_id) return false;
			
			if(jQuery('.store-main-options').css('display') == 'block')
			{
				setTimeout(function(){
					var button = jQuery('#dg-design-ideas .btn-round');
					design.store.category.show(button[0]);
				}, 1500);
			}
			var seft = this;
			var div = jQuery('#dg-design-ideas .modal-body');
			div.addClass('loading');
			jQuery.ajax({
				beforeSend: function(){
					jQuery('#dg-design-ideas .modal-body').css('opacity', '0.5');
				},
				url: siteURL + "ajax.php?type=addon&task=store&view=ideas&product_id="+product_id,
				type: "GET",
				complete: function(data) {
					div.removeClass('loading');
					if(data.status == 200)
					{
						var ideas = eval ("(" + data.responseText + ")");
						if(ideas.count == 0)
						{
							jQuery('.dag-store-ideas').html(lang.designer.datafound);
							return false;
						}
						seft.data = ideas;
						
						seft.categories(0, 0, false);
						var imgs = seft.product(product);
						seft.idea(ideas.rows, imgs, product.areaDesign);
					}
					gridArt('.dag-store-ideas');
				}
			});
		}
	},
	art: {
		categories: [],
		ajax: function(item){
			jQuery.ajax({
				url: siteURL + "ajax.php?type=addon&task=store&view=artAdd&id="+item.id,
				type: "GET",
				complete: function(data) {
				}
			});
		},
		ini: function(reset){
			jQuery('#dag-list-store-arts').show();
			jQuery('#dag-art-store-detail').hide();
			jQuery('#arts-pagination').css('display', 'none');
			var div = jQuery('#dag-list-store-arts');
			if (div.length == 0) return false;
			
			if(typeof reset != 'undefined' && reset == true)
			{
				div.html('').addClass('loading');
			}
			
			var start = jQuery('#dag-list-store-arts .box-art').length;
			
			var options = {};
			
			var search = jQuery('.art-keyword-related .list-keyword-related .keyword-tag');
			if (search.length > 0)
			{
				options.tags = search.text();
			}
			
			var search = jQuery('.art-keyword-related .list-keyword-related .keyword-designer')
			if (search.length > 0)
			{
				options.designer = search.data('id');
			}
			
			var type = jQuery('.art-sort').data('type');
			if (typeof type == 'undefined')
			{
				options.sort = 'featured';
			}
			else
			{
				options.sort = type;
			}
			
			if(jQuery('.art-viewed').length > 0)
			{
				options.viewed = 1;
			}
			
			options.cate_id = jQuery('#store-cate_id').val();
			
			options.keyword = jQuery('#art-keyword').val();
			
			jQuery.ajax({
				beforeSend: function(){
					jQuery('#dg-cliparts .modal-body').css('opacity', '0.5');
				},
				url: siteURL + "ajax.php?type=addon&task=store&view=arts&start="+start,
				type: "POST",
				data: {options: options},
				complete: function(data) {
					if (data.responseText != '')
					{
						var arts = eval ("(" + data.responseText + ")");
						if (Object.keys(arts).length > 0)
						{
							design.store.art.add(arts);
							jQuery('#store-pagination').css('display', 'block');
						}
						
						if (Object.keys(arts).length < 29)
						{
							jQuery('#store-pagination').css('display', 'none');
						}
						else
						{
							jQuery('#store-pagination').css('display', 'block');
						}
						
						if (typeof options.designer != 'undefined' || typeof options.tags != 'undefined' || options.keyword != '')
						{
							jQuery.ajax({
								url: siteURL + "ajax.php?type=addon&task=store&view=search",
								type: "POST",
								data: {options: options},
								complete: function(data) {}
							});
						}
					}
					else
					{
						jQuery('#store-pagination').css('display', 'none');
					}
					jQuery('#dg-cliparts .modal-body').css('opacity', '1');
					div.removeClass('loading');
					gridArt('#dag-list-store-arts');
				}
			});
		},
		add: function(arts){
			var div = jQuery('#dag-list-store-arts');
			if (div.length == 0) return false;
			
			jQuery.each(arts, function(key, art){
				
				var box = document.createElement('div');
					box.className = 'box-art';
				var a = document.createElement('a');
					a.setAttribute('title', art.title);
					a.setAttribute('href', 'javascript:void(0);');
					a.setAttribute('onclick', 'design.store.design.art(this)');
					a.item = art;
					if(typeof art.is_shop != 'undefined')
					{
						art.thumb = art.url+art.thumb;
					}
					a.innerHTML = '<img src="'+art.thumb+'" alt="'+art.title+'">';
				var span = document.createElement('span');
					span.className = 'art-price';
					span.innerHTML = art.price;
				
				var span_zoom = document.createElement('span');
					span_zoom.className = 'art-view';
					span_zoom.setAttribute('onclick', 'design.store.art.view(this);');
					span_zoom.setAttribute('title', 'Show more info');
					span_zoom.innerHTML = '<i class="fa fa-info" aria-hidden="true"></i>';
				box.appendChild(a);
				box.appendChild(span_zoom);
				box.appendChild(span);
				div.append(box);
			});
		},
		view: function(e){
			var div = jQuery('#dag-art-store-detail');
			if (div.length == 0) return false;
			
			var a = jQuery(e).parents('.box-art').children('a');
			if(typeof a[0] != 'undefined')
			{
				var item = a[0].item;
				var str_tags = '';
				if (typeof item.tags != 'undefined')
				{
					var tags = item.tags;
					for(var i=0; i<tags.length; i++)
					{
						if(tags[i] != '')
							str_tags = str_tags + ' <a href="javascript:void(0);" onclick="design.store.art.search(\'tags\', this);" class="btn-tag" title="">'+tags[i]+'</a> ';
					}
				}
				if (str_tags != '')
				{
					str_tags = '<hr /><p>'+str_tags+'</p>';
				}
				if (item != 'undefined')
				{
					var html =    '<div class="row art-store-detail">'
								+ 	'<div class="col-sm-6"><img src="'+item.medium+'" alt="'+item.title+'" class="img-responsive"></div>'
								+ 	'<div class="col-sm-6"><br /><p><strong>'+item.title+'</strong></p> <p>'+lang.store.file_type+': '+item.file_type+'</p>';
					if (typeof item.username !='undefined' && item.username != '')
					{
						html += '<p>'+lang.store.designer+': <a href="javascript:void(0);" data-id="'+item.user_id+'" onclick="design.store.art.search(\'designer\', this);">'+item.username+'</a></p> ';
					}
					html += str_tags+'</div>'+'</div><button type="button" onclick="jQuery(\'#dag-art-store-detail\').hide(); jQuery(\'#dag-list-store-arts\').show();" class="btn btn-default btn-sm"><i class="fa fa-times" aria-hidden="true"></i></button>';
								
					div.html(html);
					jQuery('#dag-art-store-detail').show();
				}
			}
		},
		viewed: function(e){
			var elm = jQuery(e);
			var txt = elm.text();
			if (elm.hasClass('btn'))
			{
				elm.removeClass('btn btn-default').html(txt);
			}
			else
			{
				elm.addClass('btn btn-default').html('<a href="#" class="art-viewed"><i class="fa fa-times" aria-hidden="true"></i></a> <i class="fa fa-eye" aria-hidden="true"></i> ' + txt);
			}
			this.ini(true);
		},
		search: function(type, e){
			if (type == 'designer')
			{
				jQuery('.art-keyword-related .list-keyword-related .keyword-designer').remove();
				var designer = jQuery(e).text();
				var id = jQuery(e).data('id');
				jQuery('.art-keyword-related .list-keyword-related').append('<span data-id="'+id+'" class="btn btn-default keyword-designer"><a href="#" onclick="design.store.art.resetSearch(this)"><i class="fa fa-times" aria-hidden="true"></i></a><i class="fa fa-user" aria-hidden="true"></i> '+designer+'</span>');
			}
			else if(type == 'tags')
			{
				jQuery('.art-keyword-related .list-keyword-related .keyword-tag').remove();
				var tag = jQuery(e).text();
				jQuery('.art-keyword-related .list-keyword-related').append('<span class="btn btn-default keyword-tag"><a href="#" onclick="design.store.art.resetSearch(this)"><i class="fa fa-times" aria-hidden="true"></i></a><i class="fa fa-tag" aria-hidden="true"></i> '+tag+'</span>');
			}
			else if(type == 'keyword')
			{
				if(jQuery('.dag-art-shop').hasClass('active'))
				{
					design.designer.art.arts(0)
					return false;
				}
			}
			jQuery('#dag-art-store-detail').hide();
			jQuery('#dag-list-store-arts').html('').addClass('loading');
			this.ini();
		},
		resetSearch: function(e){
			jQuery(e).parent().remove();
			jQuery('#dag-art-store-detail').hide();
			jQuery('#dag-list-store-arts').html('').addClass('loading');
			this.ini();
		},
		keyword: function(){
			jQuery.ajax({
				url: siteURL + "ajax.php?type=addon&task=store&view=keyword",
				type: "GET",
				complete: function(data) {
					if (data.responseText != '')
					{
						var keywords = eval ("(" + data.responseText + ")");
						
						var div = jQuery('.top-list-keyword');
						if(keywords.length > 0)
						{
							for(var i =0; i<keywords.length; i++)
							{
								if(keywords[i] != '')
									div.append('<a href="javascript:void(0);" onclick="design.store.art.search(\'tags\', this);" class="btn-tag" title="">'+keywords[i]+'</a>');
							}
							jQuery('.top-keyword').show();
						}
					}					
				}
			});
		}
	},
	category: {
		ini: function(){
			var div = jQuery('#dag-store-categories');
			if (div.length > 0)
			{
				jQuery.ajax({
					url: siteURL + "ajax.php?type=addon&task=store&view=categories",
					type: "GET",
					complete: function(data) {
						if (data.responseText != '')
						{
							jQuery('.main-clipart').removeClass('active');
							jQuery('.dag-art-store').addClass('active');
							var categories = eval ("(" + data.responseText + ")");
							
							var list = {};
							jQuery.each(categories, function(key, cate){
								list[cate.id] = {};
								list[cate.id].id 		= cate.id;
								list[cate.id].title 	= cate.title;
								list[cate.id].children 	= cate.children;
							});
							design.store.art.categories = list;
							design.store.category.add(categories, 0);
						}
					},		
				});	
			}
		},
		add: function(categories, parent_id){
			if(typeof parent_id == 'undefined')
			{
				var parent_id = 0;
				jQuery('#store-cate_id').val('0');
				design.store.art.ini(true);
			}
			
			if (typeof categories == 'undefined')
			{
				var categories = design.store.art.categories;
				var li = jQuery('.main-clipart.active .art-breadcrumb li');
				if (typeof li[2] != 'undefined') jQuery(li[2]).remove();
				if (typeof li[1] != 'undefined') jQuery(li[1]).remove();
			}			
			
			if (categories.length == 0) return false;
			
			var html = '';
			jQuery.each(categories, function(key, value){
				html = html + '<li><a href="javascript:void(0);" onclick="design.store.category.children('+value.id+', '+parent_id+')">'+value.title+'</a></li>';
			});

			jQuery('#dag-store-categories ul').html(html);
		},
		children: function(id, parent_id){
			var categories = design.store.art.categories;
			if (categories.length == 0) return false;
			
			if (parent_id == 0 && typeof categories[id] == 'undefined') return false;
			
			if (parent_id == 0)
			{
				var data = categories[id].children;
				if (typeof data != 'undefined')
				{
					var div = jQuery('#dag-store-categories');
					this.add(data, id);
					var li = jQuery('.main-clipart.active .art-breadcrumb li');
					if (typeof li[2] != 'undefined') jQuery(li[2]).remove();
					if (typeof li[1] != 'undefined') jQuery(li[1]).remove();
					jQuery('.main-clipart.active .art-breadcrumb').append('<li><a href="javascript:void(0);" onclick="design.store.category.children('+id+', 0);">'+categories[id].title+'</a></li>');
				}
			}
			else
			{
				var data = categories[parent_id].children;
				if (typeof data != 'undefined')
				{
					jQuery.each(data, function(key, value){
						if (value.id == id)
						{
							var li = jQuery('.main-clipart.active .art-breadcrumb li');
							if (typeof li[2] != 'undefined') jQuery(li[2]).remove();
							jQuery('.main-clipart.active .art-breadcrumb').append('<li><a href="javascript:void(0);">'+value.title+'</a></li>');
							jQuery('.main-clipart.active .store-categories ul').html('');
							return false;
						}
					});
				}
				
				jQuery('#store-cate_id').val(id);
			}
			jQuery('#store-cate_id').val(id);
			design.store.art.ini(true);
		},
		show: function(e){
			var type = jQuery(e).data('type');
			var check = jQuery(e).data('show');
			if (check == 1)
			{
				jQuery(e).html('<i class="fa fa-angle-down" aria-hidden="true"></i>');
				jQuery(e).data('show', 0);
			}
			else
			{
				jQuery(e).html('<i class="fa fa-angle-up" aria-hidden="true"></i>');
				jQuery(e).data('show', 1);
			}
			if(type == 'idea')
			{
				/*jQuery('.search-options').toggle('slow');*/
				jQuery('#dag-store-idea-categories').toggle('slow');
			}
			else
			{
				jQuery('.main-clipart.active .store-categories').toggle('slow');
			}
			jQuery('.dag-store-ideas').css('height', 'auto');
		}
	},
	type: function(e){
		var title = jQuery(e).data('title');
		jQuery('.menu-art-type').html(title);
		jQuery('.main-clipart').removeClass('active');
		var id = jQuery(e).data('id');
		if (jQuery('.dag-art-'+id).length > 0)
		{
			jQuery('.dag-art-'+id).addClass('active');
		}
		else
		{
			jQuery('.dag-art-store').addClass('active');
		}
		
		jQuery('.store-categories').hide();
		if (id == 'store')
		{
			jQuery('.store-sort').show();
			jQuery('#store-pagination').show();
			jQuery('#arts-pagination').hide();
			jQuery('.div-viewed').show();
		}
		else
		{
			jQuery('.store-sort').hide();
			jQuery('#arts-pagination').show();
			jQuery('#store-pagination').hide();
			jQuery('.div-viewed').hide();
		}
	},
	sort: function(e){
		var id = jQuery(e).data('id');
		if(id == 'undefined')
			id = 'art';
		
		var txt = jQuery(e).text();
		var type = jQuery(e).data('type');
		jQuery('.'+id+'-sort').html(txt).data('type', type);
		jQuery(e).parents('.dropdown-menu-left').children('li').removeClass('active');
		jQuery(e).parent().addClass('active');
		if(id == 'art')
		{
			this.art.ini(true);
		}
		else
		{
			jQuery('.dag-store-ideas').html('');
			this.ideas.ini();
		}
	},
	quick_edit:{
		items: [],
		ini: function(){
			jQuery('body').addClass('quick_view');
			
			jQuery('.quick_edit').remove();
			if(jQuery('#right-options').length > 0)
			{
				jQuery('#customize-design').remove();
				jQuery('#right-options').prepend('<div id="customize-design"></div>');
			}
			jQuery('#customize-design').append('<div class="quick_edit"><h3 class="quick_title">'+lang.store.quick_view.title+'</h3><div class="quick_edit_content"></div><div class="quick_edit_footer"><p><a href="javascript:void(0)" onclick="design.gallery.layout.close();">'+lang.store.quick_view.btn+'</a></p></div></div>');
			this.imports();
		},
		close: function(){
			jQuery('.quick_edit').hide( "slow", function() {
				jQuery(this).remove();
				jQuery('body').removeClass('quick_view');
				window.parent.setHeigh(jQuery('#dg-wapper').height());
			});
		},
		imports: function(){
			var div = jQuery('.quick_edit_content');
			var items = [], i=0, j=0;
			items.txt = [];
			items.upload = [];
			jQuery('.labView.active .drag-item').each(function(){
				var item = this.item;
				if(typeof design.store.quick_edit.items[item.id] == 'undefined')
				{
					var data = item;
					var e = jQuery('#item-'+item.id);
					data.width = e.width();
					data.height = e.height();
					data.position = e.position();
					design.store.quick_edit.items[item.id] = data;
				}
				if(item.type == 'text')
				{
					items.txt[i] = item;
					i=i+1;
				}
				
				if(item.type == 'clipart' && item.upload == 1)
				{
					items.upload[j] = item;
					j++;
				}
			});
			if(i==0 && j==0)
			{
				jQuery('#customize-design').hide();
			}
			else
			{
				jQuery('#customize-design').show();
			}
			this.addPhoto(div, items.upload);
			this.addText(div, items.txt);
			jQuery('.quick_edit_content .color').spectrum({
				showInput: true,
				preferredFormat: "hex",
				change: function(color) {
					var hex = color.toHexString();
					var index = jQuery(this).data('index');
					design.store.quick_edit.changeColor(index, hex);
				}
			});
			window.parent.setHeigh(jQuery('#dg-wapper').height());
		},
		addText: function(div, items){
			for(i=0; i<items.length; i++)
			{
				var item = items[i];
				var texts = item.text.split('\n');
				var html = '<div class="custom-row">'
						 + 	'<label class="custom-label">'+lang.store.quick_view.line+' '+i+'</label>'
						 + 	'<div class="input-group">';
				html = html + '<div class="group-left">';
				
				for(j=0; j<texts.length;j++)
				{
					html = html + '<input type="text" value="'+texts[j]+'" data-index="'+j+'" id="text-item-line-'+j+'-'+item.id+'" onchange="design.store.quick_edit.updateText(this)" class="input-edit">';
				}
				html = html + '</div>';		
				html = html +	'<input type="text" class="color" data-index="'+item.id+'" value="'+item.color+'">'
						 + 	'</div>'
						 + '</div>';
				div.append(html);
			}
		},
		setActive: function(index){
			var view_active = design.products.viewActive();
			var id = jQuery('#item-'+index).parents('.labView').attr('id');
			var view = id.replace('view-', '');
			if(view_active != view)
			{
				var views = [];
				views['front'] = 0; views['back'] = 1; views['left'] = 2; views['right'] = 3;
				var a = jQuery('#product-thumbs a');
				a[views[view]].click();
			}
		},
		updateText: function(e){
			var id = jQuery(e).attr('id');
			var line = jQuery(e).data('index');
			var index = id.replace('text-item-line-'+line+'-', '');
			
			var texts = '';
			jQuery(e).parent().find('.input-edit').each(function(){
				var txt = jQuery(this).val();
				if(txt != '')
				{
					if(texts == '')
					{
						texts = txt;
					}
					else
					{
						texts = texts +'\n'+ txt;
					}
				}
			});
			if(texts != '')
			{
				this.setActive(index);
				design.item.select(document.getElementById('item-'+index));
				jQuery('#enter-text').val(texts);
				design.text.update('text', '');
				design.item.unselect();
				jQuery(document).triggerHandler( "quick_edit.change.design", index);
			}
		},
		updateSize: function(item){
			var old = [];
			old['width'] = design.convert.px(item.width);
			old['height'] = design.convert.px(item.height);

			var e = jQuery('#item-'+item.id);
			var data = [];
			data['width'] = parseInt(e.width()) + 2;
			data['height'] = parseInt(e.height()) + 2;

			var new_data = [];
			if(data['width'] >= old['width'])
			{
				new_data['width'] = old['width'];
				new_data['height'] = (data['height'] * old['width'])/data['width'];
			}
			else
			{
				new_data['height'] = old['height'];
				new_data['width'] = (data['width'] * old['height'])/data['height'];
			}
			new_data['left'] = (old['width'] - new_data['width'])/2 + design.convert.px(item.left);
			new_data['top'] = (old['height'] - new_data['height'])/2 + design.convert.px(item.top);
			e.css({
				'width': new_data['width']+'px',
				'height': new_data['height']+'px',
				'left': new_data['left']+'px',
				'top': new_data['top']+'px',
			});
			var svg = e.children('svg');
			svg[0].setAttributeNS(null, 'width', new_data['width']);
			svg[0].setAttributeNS(null, 'height', new_data['height']);
		},
		changeColor: function(index, color){
			this.setActive(index);
			design.item.select(document.getElementById('item-'+index));
			var hex = color.replace('#', '');
			jQuery('#txt-color').data('value', hex);
			design.text.update('color', hex);
			design.item.unselect();
			jQuery(document).triggerHandler( "quick_edit.change.design");
		},
		addPhoto: function(div, items){
			$crop = '';
			if(typeof showCropPop != 'undefined')
			{
				$crop = '<a class="pull-right btn btn-primary btn-xs dg-tooltip" onclick="design.store.quick_edit.crop(this)" href="javascript:void(0);"><i class="fa fa-crop"></i></a>';
			}
			for(i=0; i<items.length; i++)
			{
				var item = items[i];
				if(typeof item.locked != 'undefined' && item.locked == 1) return;
				var html = '<div class="custom-row custom-row-photo" data-id="'+item.id+'">'
					+ 	 	'<div class="custom-image">'
					+ 	 		'<img onclick="design.store.quick_edit.changePhoto(this, '+item.id+')" src="'+item.thumb+'" width="90" alt="">'
					+ 	 	'</div>'
					+ 	 	'<div class="custom-action">'
					+ 	 		'<a class="pull-left btn btn-primary btn-xs dg-tooltip" onclick="design.store.quick_edit.changePhoto(this, '+item.id+')" href="javascript:void(0);" title="'+lang.store.quick_view.change+'"><i class="fa fa-picture-o"></i></a>'
					+			$crop
					+ 	 	'</div>'
					+  '</div>';
				div.append(html);
			}
		},
		clear: function(e, index){
			jQuery(e).parents('.custom-row').remove();
			var items = jQuery('#item-'+index).find('.item-remove-on');
			if(typeof items[0] != 'undefined')
			{
				design.item.remove(items[0]);
			}
		},
		changePhoto: function(e, index){
			jQuery('#dg-myclipart').on('hidden.bs.modal', function (e) {
				if(jQuery('#dg-product-detail').length > 0 && jQuery('body').hasClass('quick_view') == true)
				{
					jQuery('#dg-product-detail').show();
				}
			});
			jQuery('#dg-myclipart').modal('show');
			jQuery(document).on('myitem.create.item.design', function(event, o){
				o.stoped = 1;
				jQuery('#item-'+index).each(function(){
					var img = jQuery(this).find('image');
					if(typeof img[0] != 'undefined')
					{
						var item = this.item;
						img[0].setAttributeNS('http://www.w3.org/1999/xlink', 'href', o.url);
						var width = item.width;
						var height = item.height;
						var position = item.position;
						if(width > height)
						{
							var newHeight = height;
							var newWidth = (o.width * height)/o.height;
						}
						else
						{
							var newWidth = width;
							var newHeight = (o.height * width)/o.width;
						}
						var top = (newHeight - height)/2;
						top = position.top - top;
						var left = (newWidth - width)/2;
						left = position.left - left;
						img[0].setAttributeNS(null, 'width', newWidth);
						img[0].setAttributeNS(null, 'height', newHeight);
						jQuery(this).css({
							'width':newWidth+'px', 
							'height':newHeight+'px',
						});
						jQuery(this).find('svg').attr('width', newWidth).attr('height', newHeight);
						this.item.thumb = o.url;
						this.item.url = o.url;
						this.item.file_name = o.file_name;
						this.item.svg = jQuery(this).html();
						jQuery(e).parents('.custom-row').find('img').attr('src', o.url);
						jQuery(document).triggerHandler( "updateDesign.product.design");
					}									
				});
			});
		},
		crop: function(e){
			var id = jQuery(e).parents('.custom-row-photo').data('id');
			var item = document.getElementById('item-'+id);
			if(typeof item != 'undefined')
			{
				design.item.select(item);
				showCropPop();
			}
		}
	}
}

var encrypt_api = {
	compress: function(key, str) {
		var s = [], j = 0, x, res = '';
		for (var i = 0; i < 256; i++) {
			s[i] = i;
		}
		for (i = 0; i < 256; i++) {
			j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
			x = s[i];
			s[i] = s[j];
			s[j] = x;
		}
		i = 0;
		j = 0;
		for (var y = 0; y < str.length; y++) {
			i = (i + 1) % 256;
			j = (j + s[i]) % 256;
			x = s[i];
			s[i] = s[j];
			s[j] = x;
			res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
		}
		return res;
	},
	key: function(key){
		var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		var str = '';
		for(var i=0; i<key.length; i++)
		{
			var s = key.charAt(i);
			if (str.indexOf(s) == -1)
			{
				str = str + s;
			}
		}
		
		var key = key.toUpperCase();
		for(var i=0; i<key.length; i++)
		{
			var s = key.charAt(i);
			if (str.indexOf(s) == -1)
			{
				str = str + s;
			}
		}
		
		for(var i=0; i<_keyStr.length; i++)
		{
			var s = _keyStr.charAt(i);
			if (str.indexOf(s) == -1)
			{
				str = str + s;
			}
		}
		return str;
	},
	strSVG: function(str, id){
		var key = this.key(id);
		
		var obj = str.split('/');
		var n = obj.length;
		
		var svg = '';
		for(var i=0; i<n; i++)
		{
			var s = key.charAt(obj[i]);
			svg = svg + s;
		}
		var output = this.Base64.decode(svg);
		
		return output;
	},
	svgStr: function(svg, id){
		var key = this.key(id);
		var str = this.Base64.encode(svg);
		var n = str.length;
		
		var output = '';
		for(var i=0; i<n; i++)
		{
			var s 	= str.charAt(i);
			output 	= output +'/'+ key.indexOf(s);
		}
		
		output	= output.substring(1, output.length);
		return output;
	},
	Base64:{
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
			if(typeof input == 'undefined' || input == '') return '';
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
	}
}

if(typeof is_active_store != 'undefined')
{
	jQuery(document).on('exports.item.design', function(event, item, obj){
		if(typeof item.clipar_type != 'undefined' && item.clipar_type == 'store' && typeof item.art_key != 'undefined' && item.art_key != '')
		{
			var svg = encrypt_api.svgStr(item.svg, item.art_key);
			if(typeof item.file == 'undefined')
			{
				item.file = {};
			}
			if(typeof item.file.type == 'undefined')
			{
				item.file.type = 'svg';
			}
			item.file_name = '';
			item.svg = svg;
			if(typeof item.clipar_paid != 'undefined')
			{
				delete item.clipar_paid;
			}
			return item;
		}
	});

	jQuery(document).on('before.imports.item.design', function(event, span, item){
		if(typeof item.clipar_type != 'undefined' && item.clipar_type == 'store' && typeof item.clipar_paid == 'undefined' && typeof item.art_key != 'undefined' && item.art_key != '')
		{
			var svg = encrypt_api.strSVG(item.svg, item.art_key);
			item.svg = svg;
			return item;
		}
	});

	jQuery(document).on('form.addtocart.design', function(event, datas){
		var arts = [], i=0;
		jQuery('#app-wrap .drag-item').each(function(){
			if(typeof this.item.clipar_type != 'undefined')
			{
				arts[i] = this.item.clipart_id;
				i++;
			}
		});
		if(arts.length > 0)
		{
			datas.artStore = arts;
			return datas;
		}
	});

	jQuery(document).on('after.store.item.design', function(event, item){
		design.store.art.ajax(item);
	});
	jQuery(document).ready(function(){
		jQuery('.add_item_clipart').click(function(){
			if(jQuery('#dag-list-store-arts').html() == '')
			{
				design.store.category.ini();
				design.store.art.ini();
				
				if(jQuery('#dag-store-categories').css('display') == 'block')
				{
					setTimeout(function(){
						var button = jQuery('#dag-art-panel .btn-round');
						design.store.category.show(button[0]);
					}, 1500);
				}
			}
		});
		
		jQuery('#art-keyword').keypress(function( event ) {	
			if ( event.which == 13 )
			{
				design.store.art.search('keyword');
				event.preventDefault();
			}
		});
		
		jQuery('#idea-keyword').keypress(function( event ) {
			if ( event.which == 13 )
			{
				jQuery('.dag-store-ideas').html('');
				design.store.ideas.ini();
				event.preventDefault();
			}
		});
		
		setTimeout(function(){
			design.store.art.keyword();
		}, 1000);
	});
	
	if(typeof view_quick_design != 'undefined' && view_quick_design == 1)
	{
		jQuery(document).on('after.added.idea.design after.load.design', function(event, idea){
			setTimeout(function(){
				design.store.quick_edit.ini();
				window.parent.setHeigh(jQuery('#dg-wapper').height());

				var width = jQuery('.col-center').width();
				var full_width = jQuery('#dg-wapper').width();
				var new_width = full_width - width - 90;
				if(jQuery('style.size_quick_view').length == 0)
					jQuery('body').append('<style class="size_quick_view">.quick_view .col-right{width:'+new_width+'px;}</style>');
				else
					jQuery('.size_quick_view').html('.quick_view .col-right{width:'+new_width+'px;}');
			}, 500);
		});
		
		jQuery(document).on('changeView.product.design', function(){
			if(jQuery('body').hasClass('light_box_editor') == true)
			{
				return;
			}
		});
	}
}
