jQuery(document).on('add.layers.design', function(event, li, item){
	if(typeof item == 'undefined') return;
	if(item.type == 'text')
	{
		if(jQuery('.layer.layer-text.active textarea').length > 0) return;

		var text = item.text;
		var texts = text.split('\n');
		var lines = texts.length;
		jQuery('.layer.layer-text.active').children('span').html('<textarea rows="'+lines+'" onclick="return layer_editer(this);" onkeyup="design.text.quick_edit(this)" class="input-line">'+text+'</textarea>');
	}
});
design.text.quick_edit = function(e){
	var text = jQuery(e).val();
	var texts = text.split('\n');
	var lines = texts.length;
	jQuery(e).attr('rows', lines);
	jQuery('#enter-text').val(text);
	design.text.update('text');
}

function layer_editer(e)
{
	if(typeof theme_default != 'undefined')
	{
		setTimeout(function(){
			jQuery( ".popover" ).hide();
			e.focus();
		}, 10);
	}
}