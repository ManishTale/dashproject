function downloadPNG(view)
{
	var mySVG = document.getElementById('download-png').innerHTML;
	var mySrc 	= 'data:image/svg+xml,'+encodeURIComponent(mySVG);
	var img = new Image();

	$('.container').addClass('loading');
	img.onload = function(){	
		var canvas = document.createElement("canvas");
		canvas.width = img.width;
		canvas.height = img.height;    
		var ctx = canvas.getContext("2d");
		ctx.drawImage(img, 0, 0);
		// Fixed download png on chrome.
		canvas.toBlob(function (blob) {
			var url = (window.webkitURL || window.URL).createObjectURL(blob);
			var link = document.createElement('a');
			link.href = url;
			link.download = view+'.png';
			document.body.appendChild(link);
			link.click();
			$('.container').removeClass('loading');
		});
	}
	img.src = mySrc;
}

function downloadImage(src)
{
	var file_name = src.split('/').pop();
	var a = jQuery("<a>").attr("href", src).attr("download", file_name).appendTo("body");

	a[0].click();
	a.remove();
}

function downloadSVG(e)
{
	var svg      = jQuery(e).html();
	var imgsrc = 'data:image/svg+xml;base64,'+ btoa(svg);
	var a = jQuery("<a>").attr("href", imgsrc).attr("download", 'test.svg').appendTo("body");

	a[0].click();
	a.remove();
}

function changeShapView(svg, zoom, type) {
	var img = svg.find('image');
	if(img.length > 0)
	{
		if(img.css('clip-path') != 'none')
		{
			var clipId  = img.css('clip-path').split('#')[1].split('"')[0];
			var clipEle = svg.find('#' + clipId);
			var viewBox = svg[0].getAttribute('viewBox').split(' ');
			for(i = 0; i < viewBox.length; i ++) {
				viewBox[i] = viewBox[i] * zoom;
			}
			svg[0].setAttribute('viewBox', viewBox.join(' '));
			var transform = jQuery(clipEle.children()[0]).attr('transform');
			if(transform.indexOf(',') != -1)
			{
				var matrixT = jQuery(clipEle.children()[0]).attr('transform').split('(')[1].split(')')[0].split(',');
			} 
			else
			{
				var matrixT = jQuery(clipEle.children()[0]).attr('transform').split('(')[1].split(')')[0].split(' ');
			}
			matrixT[0] = matrixT[0] * zoom;
			matrixT[3] = matrixT[3] * zoom;
			matrixT[4] = matrixT[4] * zoom;
			matrixT[5] = matrixT[5] * zoom;
			clipEle.children().each(function() {
				jQuery(this).attr('transform', 'matrix(' + matrixT[0] + ',0,0,' + matrixT[3] + ',' + matrixT[4] + ',' + matrixT[5] + ')');
			});
			jQuery(img[0]).css('clip-path', 'url(#' + clipId + '-' + type + ')' );
			jQuery(clipEle[0]).attr('id', clipId + '-' + type);
		}
		var g = svg.children('g')[0];
		var transform = g.getAttribute('transform');
		if(typeof g == 'undefined') return;
		if(transform != null)
		{
			if(transform.indexOf('scale(-1,1)') != -1)
			{
				var matrix = transform.split('(')[1].split(')')[0].split(',');
				var newT   = matrix[0];
				g.setAttribute('transform', 'translate(' + newT + ', 0) scale(-1,1)');
			}
		}
	}
}

function HexToRGB(Hex) {

	var Long = parseInt(Hex, 16);
	return {
		R: (Long >>> 16) & 0xff,
		G: (Long >>> 8) & 0xff,
		B: Long & 0xff
	};
}

function changeImgColor(src, color, e) {

	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	var originalPixels = null;
	var currentPixels = null;
	
	var img = new Image();				
	img.onload = function() {
		canvas.width = img.width;
		canvas.height = img.height;
	
		ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, img.width, img.height);
		originalPixels = ctx.getImageData(0, 0, img.width, img.height);
		currentPixels = ctx.getImageData(0, 0, img.width, img.height);
				
	        var newColor = HexToRGB(color);

	        for (var I = 0, L = originalPixels.data.length; I < L; I += 4) {
	            if (currentPixels.data[I + 3] > 0) {
	                currentPixels.data[I] = newColor.R;
	                currentPixels.data[I + 1] = newColor.G;
	                currentPixels.data[I + 2] = newColor.B;
	            }
	        }

	        ctx.putImageData(currentPixels, 0, 0);
	       // e.src = canvas.toDataURL("image/png");
	       jQuery(e).attr('xlink:href', canvas.toDataURL("image/png"));
	};
	img.src = src;
}

function load_file(type)
{
	if(type == 'png')
	{
		var div = '#download-png';
		var url = download_png;
	}
	else
	{
		var div = '#download-pdf';
		var url = download_pdf;
	}
	jQuery('body').append('<div class="mask-clipart"></div><h3 class="mask-status">Creating File Output...</h3>');
	if (url != '' && url != null) {
		jQuery.ajax({
			url: url,
		}).done(function(response) {
			jQuery(div).html(response);
			jQuery('.mask-clipart').remove();
			jQuery('.mask-status').remove();
			if(type == 'png')
			{
				load_file('pdf');
				return;
			}
			if(type == 'pdf')
			{
				init();
			}
		});
	} else {
		jQuery('.mask-clipart').remove();
		jQuery('.mask-status').remove();
	}
}

function init()
{
	var svgPdf  = jQuery('#download-pdf').children('svg')[0];
	var svgPng  = jQuery('#download-png').children('svg')[0];
	var pdfZoom = jQuery(svgPdf).data('zoom');
	var pngZoom = jQuery(svgPng).data('zoom');
	jQuery(svgPdf).find('svg').each(function() {
		changeShapView(jQuery(this), pdfZoom, 'pdf');
	});
	jQuery(svgPng).find('svg').each(function() {
		changeShapView(jQuery(this), pngZoom, 'png');
	});

	jQuery('.set-colors').each(function(){
		var color = jQuery(this).data('color');
		var src = jQuery(this).attr('xlink:href');
		changeImgColor(src, color, this);
	});
}

jQuery(document).ready(function() {
	load_file('png');
});