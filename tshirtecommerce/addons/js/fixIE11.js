design.createSvgthumb = function(pos, callback) {
	var can     = document.createElement('canvas');
	var color   = jQuery('#product-list-colors span').index(jQuery('#product-list-colors span.active'));
	var lyr     = eval ("(" + items["design"][color][pos] + ")");
	can.width   = 1;
	can.height  = 1;
	var itemLst = jQuery('#view-' +pos+ ' .design-area .drag-item');
	itemLst.each(function() {
		this.zIndex = this.style.zIndex;
	});
	itemLst.sort(function(obj1, obj2) {
		return obj1.zIndex - obj2.zIndex;
	});
	var count = Object.keys(lyr).length;
	count = parseInt(count) - 1;
	var obj = [], j = 0;
	for (i= count; i> -1; i--)
	{
		obj[j] = lyr[i];
		j++;
	}
	var ara  = jQuery('.labView.active .design-area')[0];
	var lft  = parseFloat(jQuery(ara).css('left').replace('px', ''));
	var top  = parseFloat(jQuery(ara).css('top').replace('px', ''));
	var aW   = parseFloat(jQuery(ara).css('width').replace('px', ''));
	var aH   = parseFloat(jQuery(ara).css('height').replace('px', ''));
	var rdu  = ara.style.borderRadius;
	var html = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="'+max_box_width+'" height="'+max_box_height+'" viewBox="0 0 '+max_box_width+' '+max_box_height+'">';
	createSvgElement(0);
	function createSvgElement(idx) {
		if(obj[idx] == undefined)
		{
			html += '<defs><clipPath id="design-area-clip-'+pos+'"><rect x="'+Math.round(lft - 1)+'" y="'+Math.round(top - 1)+'" width="'+Math.round(aW)+'" height="'+Math.round(aH)+'" rx="'+rdu+'" ry="'+rdu+'" stroke-width="1" stroke="#000000" /></clipPath></defs>';
			html += '</svg>';
			design[pos] = {};
			design[pos].svgThum = html;
			if(typeof callback != 'undefined')
			{
				callback();
			}
			return false;
		}
		else
		{
			var slf = obj[idx];
			if(slf.id != 'area-design')
			{
				var el  = parseFloat(slf.left.replace('px', ''));
				var et  = parseFloat(slf.top.replace('px', ''));
				var w   = parseFloat(slf.width.replace('px', ''));
				var h   = parseFloat(slf.height.replace('px', ''));
				var img = new Image();
				var can = document.createElement('canvas');
				var ctx = can.getContext('2d');
				img.onload = function() {
					can.width  = img.width;
					can.height = img.height;
					ctx.drawImage(img, 0, 0);
					html += '<g><image x="'+el+'" y="'+et+'" width="'+w+'" height="'+h+'" xlink:href="'+can.toDataURL()+'"></image></g>';
					createSvgElement(idx + 1);
				};
				img.src = jQuery('#' + pos + '-img-' + slf.id).attr('src');
			}
			else
			{
				html += '<g style="clip-path:url(#design-area-clip-'+pos+');">';
				createSvgDesignElement(0, idx);
				function createSvgDesignElement(i, order) {
					if(itemLst[i] == undefined)
					{
						html += '</g>';
						createSvgElement(order + 1);
						return false;
					}
					var slf   = jQuery(itemLst[i]);
					var el    = parseFloat(slf.css('left').replace('px', ''));
					var et    = parseFloat(slf.css('top').replace('px', ''));
					var w     = parseFloat(slf.css('width').replace('px', '')) / 2;
					var h     = parseFloat(slf.css('height').replace('px', '')) / 2;
					var svg   = slf.find('svg')[0];
					var rot   = slf.data('rotate');
					var clone = jQuery(svg).clone();
					var div   = document.createElement('div');
					var svgW  = clone.attr('width');
					var svgH  = clone.attr('height');
					var viewB = clone[0].getAttributeNS(null, 'viewBox');
					clone.find('*').each(function() {
						if(this.nodeName == 'sodipodi:namedview')
						{
							jQuery(this).remove();
						}
						var attributeElement = this;
						var attLst = this.attributes;
						var removeArr = [];
						for(j = 0; j < attLst.length; j++) {
							var attr = attLst[j];
							if(attr.name.toLowerCase().indexOf('inkscape:') != -1 
								|| attr.name.toLowerCase().indexOf('xmlns:ns') != -1
								|| attr.name.toLowerCase().indexOf('ns1:') != -1
								|| attr.name.toLowerCase().indexOf('ns2:') != -1
								|| attr.name.toLowerCase().indexOf('ns3:') != -1
								|| attr.name.toLowerCase().indexOf('ns4:') != -1
								|| attr.name.toLowerCase().indexOf('ns5:') != -1
								|| attr.name.toLowerCase().indexOf('ns6:') != -1
								|| attr.name.toLowerCase().indexOf('ns7:') != -1
								|| attr.name.toLowerCase().indexOf('sodipodi:') != -1)
							{
								removeArr.push(attr.name);
							}
						}
						jQuery(removeArr).each(function() {
							attributeElement.removeAttribute(this);
						});
					});
					if(viewB  == undefined || viewB == '')
					{
						viewB = 'viewBox="0 0 '+svgW+' '+svgH+'"';
					}
					else
					{
						viewB = 'viewBox="'+viewB+ '"';
					}
					var pA    = clone[0].getAttributeNS(null, 'preserveAspectRatio');
					if(pA == undefined)
					{
						pA = 'none';
					}
					var img = clone.find('image');
					if(slf.data('type') == 'text')
					{
						var txtPath = clone.find('textPath');
						if(txtPath.length > 0)
						{
							var pthID = txtPath[0].getAttribute('xlink:href');
							var path  = clone.find(''+pthID);
							var idU   = design.createUniqueId();
							txtPath[0].setAttribute('xlink:href', (pthID + idU));
							jQuery(path[0]).attr('id', (pthID.replace('#', '') + idU));
							var style = clone.find('style');
							clone.prepend(style);
						}
					}
					if(img.length > 0)
					{
						var clipP  = jQuery(img[0]).css('clip-path');
						if(clipP  != 'none')
						{
							var defs = clone.find('defs')[0];
							var p    = jQuery(defs).find('clipPath')[0];
							var nId  = jQuery(p).attr('id') + design.createUniqueId() + '1';
							jQuery(p).attr('id', nId);
							jQuery(img[0]).css('clip-path', 'url(#'+nId+')');
						}
						var src    = jQuery(img[0]).attr('xlink:href');
						var canvas = document.createElement('canvas');
						var ctx    = canvas.getContext('2d');
						var ig = new Image();
						ig.onload = function() {
							canvas.width  = max_box_width;
							canvas.height =  max_box_height * ig.height / ig.width;
							ctx.drawImage(ig, 0, 0, canvas.width, canvas.height);
							img[0].setAttribute('xlink:href', canvas.toDataURL());
							clone.children().each(function() {
								jQuery(div).append(this);
							});
							var svgHtml = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="'+pA+'" '+viewB+' x="'+(el + lft)+'" y="'+(et + top)+'" width="'+svgW+'" height="'+svgH+'">'+jQuery(div).html()+'</svg>';
							html += '<g transform="rotate('+rot+' '+(el + lft + w)+' '+(et + top + h)+')">' + svgHtml + '</g>';
							createSvgDesignElement(i + 1, order);
						};
						ig.src = src;
					}
					else
					{
						clone.children().each(function() {
							jQuery(div).append(this);
						});
						var svgHtml = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="'+pA+'" '+viewB+' x="'+(el + lft)+'" y="'+(et + top)+'" width="'+svgW+'" height="'+svgH+'">'+jQuery(div).html()+'</svg>';
						html += '<g transform="rotate('+rot+' '+(el + lft + w)+' '+(et + top + h)+')">' + svgHtml + '</g>';
						createSvgDesignElement(i + 1, order);
					}
				};
				//html += '</g>';
			}
		}
	}
};

design.isIE = function() {
	var IE     = /msie/.test(navigator.userAgent.toLowerCase());
	var IE11   = /trident/.test(navigator.userAgent.toLowerCase());
	var result = false;
	if(IE == true || IE11 == true)
	{
		result = true;
	}
	return result;
};

design.createUniqueId = function() {
	var id = new Date().valueOf();
	return id;
};

jQuery(document).ready(function() {
	jQuery('#dg-mydesign').on('shown.bs.modal', function() {
		if(design.isIE())
		{
			var listDesignWrap = jQuery('#dg-mydesign').find('.list-design-saved')[0];
			var designLst      = jQuery(listDesignWrap).find('.design-box');
			designLst.each(function(idx, e) {
				var a    = jQuery(this).find('a')[0];
				var img  = jQuery(a).find('img')[0];
				var src  = jQuery(img).attr('src');
				if(src.match(".svg$"))
				{
					jQuery(img).attr('width', '100%');
					var width = a.getBoundingClientRect().width;
					jQuery(a).children('img').attr('height', width - 4);
				}
			});
			setTimeout(function() {
				jQuery(listDesignWrap).css('opacity', '1');
				jQuery('#dg-mydesign .modal-body .loadingImage').remove();
			}, 1000);
		}
	});
	
	jQuery('#dg-mydesign').on('show.bs.modal', function() {
		if(design.isIE())
		{
			var loadingURL = siteURL + '/addons/images/ajax-loader.gif';
			jQuery('#dg-mydesign').find('.modal-body').append('<img style="position: absolute; top: 40%; left: 50%" class="loadingImage" src="'+loadingURL+'"></img>');
			jQuery('#dg-mydesign').find('.list-design-saved').css({
				'opacity': '0'
			});
		}
	});
});