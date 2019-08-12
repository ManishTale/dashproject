design.text.sizes = {
	set: function(e, item){
		var sizes = item.fontSize;
		var new_h = jQuery(e).outerHeight();

		var fontSize = (new_h * sizes.size)/sizes.height;
		this.update(fontSize);
	},
	update: function(size){
		var val = Math.round(size);
		jQuery('#text-size').val(val);
	},
	addSize: function(){
		var size = jQuery('#text-size').val();
		var items = design.item.get();
		if(typeof items[0] == 'undefined') return;
		var item = items[0].item;
		if(item.type == 'text')
		{
			var sizes = item.fontSize;
			var new_h = Math.round((size * sizes.height)/sizes.size);
			var old_h = items.outerHeight();
			var old_w = items.outerWidth();
			var new_w = Math.round((old_w * new_h)/old_h);
			this.updateText(items, new_w, new_h);
		}
	},
	change: function(e){
		var ul = jQuery(e).parents('ul');
		ul.find('li').removeClass('active');
		jQuery(e).parent().addClass('active');
		var size = jQuery(e).data('val');
		this.update(size);
		this.addSize();
	},
	updateText: function(e, w, h){
		e.css({
			width: w+'px',
			height: h+'px',
		});
		var svg = e.find('svg');
		svg.attr('width', w);
		svg.attr('height', h);
		jQuery('.mask-item').css({
			width: w+'px',
			height: h+'px',
		});
		var type = e[0].item.type;
		jQuery(document).triggerHandler( "update.design" );
		jQuery(document).triggerHandler( "info.size.design", [type, w, h]);
	}
}

jQuery(document).on('before.create.item.design before.imports.item.design', function(event, span){
	var item = span.item;
	if(item.type == 'text')
	{
		var sizes = {};
		if(typeof item.height == 'number')
		{
			sizes.height = item.height;
		}
		else
		{
			sizes.height = design.convert.px(item.height);
		}
		sizes.size = (sizes.height * 14) / 24;
		span.item.fontSize = sizes;
		design.text.sizes.update(sizes.size);
	}
});

jQuery(document).on('resize.item.design', function(){
	var e = design.item.get();
	if(typeof e[0] == 'undefined') return;

	var item = e[0].item;
	if(item.type == 'text')
	{
		design.text.sizes.set(e[0], item);
	}
});

jQuery(document).on('select.item.design', function(event, e){
	if(typeof e == 'undefined') return;
	var item = e.item;
	if(item.type == 'text')
	{
		design.text.sizes.set(e, item);
	}
});

jQuery(document).on('beforechangefont.item.design', function(event){
	var e = design.item.get();
	if(typeof e[0] == 'undefined') return;
	var item = e[0].item;
	if(item.type == 'text')
	{
		design.text.sizes.set(e[0], item);
	}
});