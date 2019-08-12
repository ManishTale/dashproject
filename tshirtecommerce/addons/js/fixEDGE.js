var fixBugEDGE = function(e) {
	if(navigator.userAgent.toLowerCase().indexOf('edge/') == -1)
	{
		return false;
	}
	if(jQuery(e).data('type') == 'text')
	{	
		var svg = jQuery(e).find('svg');									
		svg[0].setAttributeNS(null, 'preserveAspectRatio', 'none');		
	}
};

jQuery(document).on('after.item.changecolor', function(event, t, c){
	var e = design.item.get();
	fixBugEDGE(e);
});

jQuery(document).on('select.item.design', function(event, e){
	setTimeout(function() {
		fixBugEDGE(e);
	}, 1);
});

jQuery(document).on('update.text.design', function(event, l, v){
	var e = design.item.get();
	setTimeout(function() {
		fixBugEDGE(e);
	}, 1);
});

jQuery(document).on('after.imports.item.design', function(event, span, item){
	var svg = jQuery(span).find('svg')[0];
	if(navigator.userAgent.toLowerCase().indexOf('edge/') != -1)
	{
		svg.removeAttribute('xmlns:xml');
	}
});