function IOSFont(e)
{
	var svg 		= e.find('svg');				
	var html 		= jQuery('<div></div>').html(jQuery(svg).clone()).html();
	
	var canvas 		= document.createElement('canvas');
	canvas.width 	= 500;
	canvas.height 	= 500;
	var context	 	= canvas.getContext('2d');
	
	var mySrc = 'data:image/svg+xml;base64,'+btoa(unescape(encodeURIComponent(html)));
	var images 	= new Image();
	images.onload = function() {
		context.drawImage(images, 0, 0);
	};
	images.src = mySrc;
}