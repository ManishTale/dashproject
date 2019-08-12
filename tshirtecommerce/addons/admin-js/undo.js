var dataDesign = [];
var max_save_length = 10;
var undo_redo_active = -1;
var undo_redo = {
	init: function(){
		jQuery('.btn-undo').removeClass('disabled');
		jQuery('.btn-redo').addClass('disabled');
		var n = dataDesign.length;
		if(undo_redo_active > -1 && undo_redo_active < n)
		{
			n = undo_redo_active;
			this.remove(undo_redo_active);
			undo_redo_active = -1;
		}
		var i = 0;
		if(n == max_save_length)
		{
			i = n-1;
			undo_redo.update();
		}
		else
		{
			i = n;
		}
		dataDesign[i] = JSON.stringify(design.exports.vector());
	},
	items: function(i){
		
		if(i >= dataDesign.length) return;
		jQuery('.labView.active .drag-item').each(function(){
			var id = jQuery(this).attr('id');
			var index = id.replace('item-', '');
			design.layers.remove(index);
			jQuery(this).remove();
		});
		if(i < 0) return;

		if(typeof dataDesign[i] != 'undefined')
		{
			var view = design.products.viewActive();
			var vector = dataDesign[i];
			design.imports.vector(vector, view);
		}
	},
	update: function(){
		var n = dataDesign.length;
		var max = n - 1;
		for(var i=0; i<n; i++)
		{
			dataDesign[i] = dataDesign[i+1];
		}
	},
	remove: function(max){
		var n = dataDesign.length;
		for(var i=max; i<=n; i++)
		{
			if(typeof dataDesign[i] != 'undefined')
			{
				dataDesign.splice(i, 1);
			}
		}
	}
};
design.tools.undo = function(){
	var n = dataDesign.length;
	if(undo_redo_active < 0)
	{
		undo_redo_active = n-1;
	}
	undo_redo_active = undo_redo_active - 1;
	if(undo_redo_active < 0)
	{
		jQuery('.btn-undo').addClass('disabled');
	}
	else
	{
		jQuery('.btn-undo').removeClass('disabled');
	}
	jQuery('.btn-redo').removeClass('disabled');
	undo_redo.items(undo_redo_active);
};
design.tools.redo = function(){
	var n = dataDesign.length;
	n = n - 1;
	if(undo_redo_active >= n)
	{
		jQuery('.btn-redo').addClass('disabled');
	}
	undo_redo_active = undo_redo_active + 1;

	jQuery('.btn-undo').removeClass('disabled');
	undo_redo.items(undo_redo_active);
}

jQuery(document).on('update.design', function(){
	if( jQuery('.drag-item').length == 0 ) return;
	var e = design.item.get();
	if(e.length == 0) return;
	setTimeout(function(){
		undo_redo.init();
	}, 100);
});

jQuery(document).on('design_undo_redo', function(){
	setTimeout(function(){
		undo_redo.init();
	}, 100);
});

jQuery(document).on('after.load.design', function(event, data) {
	setTimeout(function(){
		undo_redo.init();
	}, 100);
});