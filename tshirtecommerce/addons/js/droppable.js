var elemnt_drop = {};
design.drop = {
	init: function(){
		design.drop.upload();
		this.area();
	},
	area: function(){
		jQuery('.labView').each(function(){
			var item_active = '';
			this.ondragover = function(event){
				event.preventDefault();
				var items 	= design.drop.items;
				if(typeof items !== 'undefined' && items.length > 0 && elemnt_drop.item.override == 1)
				{
					var src 	= jQuery(elemnt_drop).attr('src');

					var x = event.pageX;
					var y = event.pageY;
					for(id in items) {
						var item = items[id];

						var images = jQuery('#item-'+id).find('image');
						if(x > item.x && x < item.max_x && y > item.y && y < item.max_y)
						{
							item_active = id;
							images.each(function(){
								jQuery(this).attr('xlink:href', src);
							});
							return false;
						}
						else
						{
							item_active = '';
							images.each(function(){
								var old_src = this.item.old_src;
								jQuery(this).attr('xlink:href', old_src);
							});
						}
					};
				}
			};
			this.ondrop = function(event){
				event.preventDefault();
				if(jQuery(elemnt_drop).hasClass('drop-item'))
				{
					if(item_active != '' && elemnt_drop.item.override == 1)
					{
						var span = jQuery('#item-'+item_active);
						var div = jQuery(elemnt_drop).parents('.box-art');
						if(typeof div[0].item != 'undefined' && div[0].item.large != undefined)
						{
							var src = div[0].item.large;
							if(src.indexOf('http') == -1)
							{
								src = siteURL + src;
							}
						}

						var image 	= span.find('image');
						image.attr('xlink:href', src);
						var use = span.find('use');
						if(use.length > 0 && span.hasClass('hidden-use') == false)
						{
							span.addClass('hidden-use');
						}
						var img_item = div[0].item;
						var item 	= span[0].item;
						if(item.img_zoom != undefined && item.img_zoom.old_w != undefined)
						{
							var width 	= item.img_zoom.old_w;
							var height 	= item.img_zoom.old_h;
						}
						else
						{
							var width 	= item.img_zoom.width;
							var height 	= item.img_zoom.height;
							span[0].item.img_zoom.old_w = width;
							span[0].item.img_zoom.old_h = height;
						}
						if(img_item.width > img_item.height)
						{
							var new_h = height;
							var new_w = (img_item.width * new_h)/img_item.height;
						}
						else
						{
							var new_w = height;
							var new_h = (img_item.height * new_w)/img_item.width;
						}

						var left = (new_w - width)/2;
						if(left > 0) left = left * -1;
						var top = (new_h - height)/2;
						if(top > 0) top = top * -1;
						image.attr('width', new_w);
						image.attr('height', new_h);
						image.attr('x', left);
						image.attr('y', top);
						if(typeof span[0].item.img_zoom != 'undefined')
						{
							span[0].item.img_zoom.width = new_w;
							span[0].item.img_zoom.height = new_h;
							span[0].item.img_zoom.top = top;
							span[0].item.img_zoom.left = left;
						}
					}
					else
					{
						var move = design.drop.addItem(event, this, elemnt_drop);
						var a = elemnt_drop.parentNode;
						if(typeof a.item == 'undefined'){
							a.item = {};
						}
						a.item.move = move;
						var div = a.parentNode;
						if(typeof div.item == 'undefined'){
							div.item = {};
						}
						a.item.move = move;
						div.item.move = move;
						a.click();
					}
				}
				elemnt_drop = {};
			};
		});
	},
	addItem: function(event, div, img){
		var top = event.pageY;
		var left = event.pageX;

		var area = div.getBoundingClientRect();

		top = top - area.top - img.item.top;

		left = left - area.left - img.item.left;
		
		var move = {};
		move.left = left;
		move.top = top;
		return move;
	},
	upload: function(){
		jQuery('.obj-main-content .box-art img').each(function(){
			var img = this;
			this.setAttribute('draggable', true);
			img.ondragstart = function(event){
				jQuery(this).addClass('drop-item');
				
				var top = event.pageY;
				var left = event.pageX;
				var options = this.getBoundingClientRect();
				top = top - options.top;
				left = left - options.left;
				this.item = {};
				this.item.top = top;
				this.item.left = left;
				var div = jQuery(this).parents('.box-art');
				if(typeof div[0].item != 'undefined' && div[0].item.large != undefined)
				{
					this.item.override = 1;
				}
				else
				{
					this.item.override = 0;
				}
				elemnt_drop = this;

				var src = jQuery(this).attr('src');
				if(src.indexOf('http') == -1)
				{
					src = siteURL + src;
				}
				this.src = src;
				this.width = 100;
				design.drop.getItems();
			};
			this.ondragend = function(event){
				elemnt_drop = {};
				jQuery('.obj-main-content .box-art img').removeClass('drop-item').removeAttr('width');
			};
		});
	},
	getItems: function(){
		var items = [];
		jQuery('.labView.active').find('.drag-item').each(function(){
			var item = this.item;
			if(typeof item.is_frame != 'undefined' && item.is_frame == 1)
			{
				var id 	= jQuery(this).attr('id').replace('item-', '');
				var size 	= this.getBoundingClientRect();
				var max_x 	= size.x + size.width;
				var max_y 	= size.y + size.height;
				var options = {};
				options.x = size.x;
				options.y = size.y;
				options.max_x = max_x;
				options.max_y = max_y;
				options.zIndex = item.zIndex;
				items[id] 	= options;
				jQuery(this).find('image').each(function(){
					var src = jQuery(this).attr('xlink:href');
					if(typeof this.item == 'undefined'){
						this.item = {};
					}
					this.item.old_src = src;
				});
			}
		});
		this.items = items;
	}
}

jQuery(document).ready(function($) {
	design.drop.init();
});

jQuery(document).on('added.pages', function(){
	design.drop.area();
});