design.myart.convertcolor = {
	ini: function(){
		var e = design.item.get();
		if(typeof e == 'undefined') return false;
		if(jQuery('.convertcolor-value').is(':checked'))
		{
			jQuery('#convert-colors').show();
			e[0].item.onecolor = photo_color_default;
			this.changeColor(e, photo_color_default);
		}
		else
		{
			e[0].item.onecolor = '';
			jQuery('#convert-colors').hide();
			this.restore(e);
		}
	},
	HexToRGB: function(hex){
		var Long = parseInt(hex.replace(/^#/, ""), 16);
		return {
			R: (Long >>> 16) & 0xff,
			G: (Long >>> 8) & 0xff,
			B: Long & 0xff
		};
	},
	addEvent: function(){
		setTimeout(function(){
			jQuery('#convert-colors .popover-content .bg-colors').attr('onclick', 'design.myart.convertcolor.setColor(this)');
		}, 100);
	},
	setColor: function(e){
		design.mask(true);
		var color = jQuery(e).data('color');		
		if(color == 'undefined') return false;
		var e = design.item.get();
		if(typeof e == 'undefined') return false;
		e[0].item.onecolor = '#'+color;
		jQuery('#art-change-color').css('background-color', '#'+color);
		this.changeColor(e, '#'+color);
	},
	changeColor: function(e, color){
		if(typeof e[0].item.oldsrc == 'undefined')
		{
			var newImg = jQuery(e).find('image');
			if(newImg.length == 0) return false;
			var src = newImg.attr('xlink:href');
			e[0].item.oldsrc = src;
		}
		else
		{
			var src = e[0].item.oldsrc;
		}
		var img = new Image();
		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");
		design.mask(true);
		img.onload = function() {
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, img.width, img.height);
			var originalPixels = ctx.getImageData(0, 0, img.width, img.height);
			var currentPixels = ctx.getImageData(0, 0, img.width, img.height);
			
			var newColor = design.myart.convertcolor.HexToRGB(color);
			
			for(var I = 0, L = originalPixels.data.length; I < L; I += 4)
			{
				if(currentPixels.data[I + 3] > 0)
				{
					currentPixels.data[I] = newColor.R;
					currentPixels.data[I + 1] = newColor.G;
					currentPixels.data[I + 2] = newColor.B;
				}
			}
			ctx.putImageData(currentPixels, 0, 0);
			
			var data = canvas.toDataURL("image/png");
			
			var e = design.item.get();
			var newImg = jQuery(e).find('image');
			jQuery(newImg[0]).attr('xlink:href', data);
			img.onload = null;
			design.mask(false);
		}
		img.src = src;
	},
	restore: function(e){
		if(typeof e[0].item.oldsrc == 'undefined')
		{
			return false;
		}
		var src = e[0].item.oldsrc;
		var newImg = jQuery(e).find('image');
		if(newImg.length == 0) return false;
		newImg.attr('xlink:href', src);
			
	}
}
if(change_photo_color == 1)
{
	jQuery(document).on('select.item.design', function(event, e){
		if(typeof e == 'undefined' || e.item == 'undefined') return false;
		var item = e.item;
		if(item.type == 'clipart' && typeof item.file != 'undefined' && typeof item.file.type != 'undefined' && item.file.type == 'image')
		{
			jQuery('.toolbar-action-convertcolor').show();
			if(typeof item.onecolor != 'undefined' && item.onecolor != '')
			{
				jQuery('.convertcolor-value').prop('checked', true);
				jQuery('#convert-colors').show();
				jQuery('#art-change-color').css('background-color', '#'+item.onecolor);
			}
			else
			{
				jQuery('.convertcolor-value').prop('checked', false);
				jQuery('#convert-colors').hide();
				jQuery('#art-change-color').css('background-color', photo_color_default);
			}
		}
		else
		{
			jQuery('.toolbar-action-convertcolor').hide();
		}
	});
}