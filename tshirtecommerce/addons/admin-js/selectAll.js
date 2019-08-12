/**
* Function remove item mark all when click without design area
*/
jQuery(document).ready(function() {
	// add button select all
	var dg_tools = jQuery('#dg-sidebar .dg-tools')[0];
	
	// remove when click without design area
	jQuery('#design-area').click(function(e){
		var topCurso    = !document.all ? e.clientY: event.clientY;
		var leftCurso   = !document.all ? e.clientX: event.clientX;
		if(leftCurso == undefined || topCurso == undefined) return;
		var mouseDownAt = document.elementFromPoint(leftCurso, topCurso);
		if( mouseDownAt.parentNode.className == 'product-design'
			|| mouseDownAt.parentNode.className == 'div-design-area'
			|| mouseDownAt.parentNode.className == 'labView active'
			|| mouseDownAt.parentNode.className == 'content-inner' )
		{
			var markArea = jQuery('.labView.active .mask-items-view .mask-items-area');
			if(markArea.find('.mask-all-item').length > 0)
			{
				markArea.find('.mask-all-item').remove();
				closeChangeColorAll();
			}
			e.preventDefault();
		}
	});
});

/** Remove mark all when select item*/
jQuery(document).on('select.item.design', function(event, e) {
	jQuery('.mask-all-item').remove();
	closeChangeColorAll();
});

jQuery(document).on('unselect.item.design', function(event, e) {
	jQuery('.mask-all-item').remove();
	closeChangeColorAll();
});


/** Remove mark all when add new item */
jQuery(document).on('after.create.item.design', function(event, span) {
	if(event.namespace == 'create.design.item')
	{
		jQuery('.mask-all-item').remove();
	}
});

/** Main process function select all */
design.selectAll = function() {
	var viewActive  = jQuery('.labView.active');
	var designAra   = jQuery('.labView.active .design-area');
	var markItem    = jQuery('.labView.active .mask-items-view')
	var markArea    = jQuery('.labView.active .mask-items-view .mask-items-area');
	var itemContent = designAra.find('.content-inner');
	var itemLst     = itemContent.children('span');
	if(itemLst.length == 0)
	{
		return false;
	}
	/*
	if(itemLst.length == 1)
	{
		design.item.select(itemLst[0]);
		return false;
	}
	*/
	markArea.find('.snap-align-line-h').hide();
	markArea.find('.snap-align-line-v').hide();
	markArea.find('.mark-snap-item').hide();
	jQuery('#dg-popover').css('display', 'none');
	if(markArea.find('.mask-all-item').length == 0)
	{
		markArea.append('<div class="mask-all-item"></div>');
	}
	markArea.find('.mask-item').hide();
	designAra.css({
		'overflow': 'visible'
	});
	markItem.css({
		'display': 'block'
	});
	var style       = designAra.attr('style');
	var desRect     = jQuery('.labView.active .design-area .content-inner')[0].getBoundingClientRect();
	var mrkTop, mrkBtt, mrkLft, mrkRgt, minW, minH;
	var	mrkWidth, mrkHeight, moveFlg = true, resizeFlg = true, rorateFlg = true, count = 0;
	viewActive.find('.mask-items-area').attr('style', style);
	// Get position of mark all area
	itemLst.each(function(index, e) {
		if(jQuery(e).hasClass('item-locked') == true)
		{
			return;
		}
		var cltRect = e.getBoundingClientRect();
		var itemTop = cltRect.top - desRect.top;
		var itemLft = cltRect.left - desRect.left;
		var width   = cltRect.width;
		var height  = cltRect.height;
		var itemBtt = itemTop + height;
		var itemRgt = itemLft + width;
		if(count == 0)
		{
			mrkTop = itemTop;
			mrkBtt = itemBtt;
			mrkLft = itemLft;
			mrkRgt = itemRgt;
			count  = 1; 
		}
		else
		{
			if(itemTop < mrkTop)
			{
				mrkTop = itemTop;
			}
			if(itemBtt > mrkBtt)
			{
				mrkBtt = itemBtt
			}
			if(itemLft < mrkLft)
			{
				mrkLft = itemLft;
			}
			if(itemRgt > mrkRgt)
			{
				mrkRgt = itemRgt;
			}
		}
		if(typeof productLockMoveTextFlg != 'undefined')
		{
			if(jQuery(e).data('type') == 'text')
			{
				if(productLockMoveTextFlg == '0') 
				{
					moveFlg = false;
				}
				if(productLockSizeTextFlg == '0')
				{
					resizeFlg = false;
				}
				if(productLockRotateTextFlg == '0')
				{
					rorateFlg = false;
				}
			}
			else if(jQuery(e).data('type') == 'clipart')
			{
				if(productLockMoveclipFlg == '0') 
				{
					moveFlg = false;
				}
				if(productLockSizeclipFlg == '0')
				{
					resizeFlg = false;
				}
				if(productLockRotateClipFlg == '0')
				{
					rorateFlg = false;
				}
			}
		}
	});
	var mrkW    = parseFloat(mrkRgt) - parseFloat(mrkLft) + 4;
	var mrkH    = parseFloat(mrkBtt) - parseFloat(mrkTop);
	var maskAll = viewActive.find('.mask-all-item');
	jQuery(maskAll[0]).css({
		'z-index' : '999999',
		'position': 'absolute',
		'border'  : '1px dashed #444444',
		'width'   : mrkW + 'px',
		'height'  : mrkH + 'px',
		'top'     : mrkTop + 'px',
		'left'    : mrkLft + 'px',
		'cursor'  : 'move'
	});
	var maskAllTop = 0, maskAllLeft = 0, recoupLeft, recoupTop;
	design.itemsPObj = {};
	// Setting drag event 
	if(moveFlg == true)
	{
		if (jQuery('.labView.active .mask-all-item .item-mask-move').length == 0)
		{
			jQuery('.mask-all-item').append('<div class="item-mask-move fa fa fa-arrows"></div>');
		}
		jQuery(maskAll[0]).draggable({
			scroll: false,
			start: function( event, ui ){
				maskAllTop  = ui.position.top;
				maskAllLeft = ui.position.left;
				var eleLst  = itemContent.children('span');
				eleLst.each(function() {
					if(jQuery(this).hasClass('item-locked') == true)
					{
						return;
					}
					if(jQuery(this).css('top') == 'auto')
					{
						var top = 0;
					}
					else
					{
						var top = convertFloatPixel(jQuery(this).css('top'));
					}
					if(jQuery(this).css('left') == 'auto')
					{
						var left = 0;
					}
					else
					{
						var left = convertFloatPixel(jQuery(this).css('left'));
					}
					design.itemsPObj['' + jQuery(this).attr('id') + '_top']  = top;
					design.itemsPObj['' + jQuery(this).attr('id') + '_left'] = left;
				});
				var left   = parseFloat(jQuery(this).css('left'));
				left       = isNaN(left) ? 0 : left;
				var top    = parseFloat(jQuery(this).css('top'));
				top        = isNaN(top) ? 0 : top;
				recoupLeft = left - ui.position.left;
				recoupTop  = top - ui.position.top;
			},
			drag:function(event, ui){
				dragAll(ui, design.itemsPObj, maskAllTop, maskAllLeft);
				ui.position.left += recoupLeft;
				ui.position.top  += recoupTop;
			},
			stop: function(event, ui) {
				var eleLst = itemContent.children('span');
				if(jQuery(this).attr('style').indexOf('transform: rotate(') != -1)
				{
					var rotate = parseFloat(jQuery(this).attr('style').split('transform: rotate(')[1].split('rad)')[0]);
				}
				else
				{
					var rotate = 0;
				}
				if(rotate < 0)
				{
					rotate = Math.PI * 2 + rotate;
				}
				jQuery(this).attr('data-oldrotate', rotate);
				jQuery(this).data('oldrotate', rotate);
				eleLst.each(function() {
					if(jQuery(this).hasClass('item-locked') == true)
					{
						return;
					}
					var id = jQuery(this).attr('id');
					design.itemsPObj['' + id + '_top']     = convertFloatPixel(jQuery(this).css('top'));
					design.itemsPObj['' + id + '_left']    = convertFloatPixel(jQuery(this).css('left'));
					design.itemsPObj['' + id + '_width']   = convertFloatPixel(jQuery(this).css('width'));
					design.itemsPObj['' + id + '_height']  = convertFloatPixel(jQuery(this).css('height'));
					design.itemsPObj['' + id + '_centerX'] = convertFloatPixel(jQuery(this).css('left')) + convertFloatPixel(jQuery(this).css('width')) / 2;
					design.itemsPObj['' + id + '_centerY'] = convertFloatPixel(jQuery(this).css('top')) + convertFloatPixel(jQuery(this).css('height')) / 2;
				});
			}
		});
	}

	// Setting resize event
	if(resizeFlg == true)
	{
		jQuery(maskAll[0]).resizable({ 
			minHeight: 30, 
			aspectRatio: 'se',
			handles: 'se',
			minWidth: 60,
			ghost: true,
			start: function(event, ui){
				var eleLst = itemContent.children('span');
				initSettingBeforeResize(eleLst);
				jQuery(document).triggerHandler( "resizeAllStart.item.design", ui);
			},
			stop: function(event,ui){
				var eleLst = itemContent.children('span');
				var zoom    = ui.size.width / ui.originalSize.width;
				changeSizeAllItemWithZoom(eleLst, zoom);
				var maskWidth  = convertFloatPixel(jQuery('.mask-all-item').css('width'));
				var maskHeight = convertFloatPixel(jQuery('.mask-all-item').css('height')) * zoom;
				jQuery('.mask-all-item').css({
					'width' : maskWidth + 'px',
					'height': maskHeight + 'px'
				});
				design.selectAll();
				jQuery(document).triggerHandler( "resizeAllStop.item.design", ui);
				design.print.size();
				design.ajax.getPrice();
			}
		});
	}
	if(jQuery('.changeColorAllArea').length == 0)
	{
		showChangeColorAll();
	}
	jQuery(document).triggerHandler( "selectall.item.design", maskAll[0]);
}

design.moveAll = function(type) {
	var markArea = jQuery('.labView.active .mask-items-view .mask-items-area .mask-all-item');
	var content  = jQuery('.labView.active .design-area .content-inner');
	var eleLst   = jQuery(content[0]).children('span');
	var allLeft  = convertFloatPixel(jQuery(markArea[0]).css('left'));
	var allTop   = convertFloatPixel(jQuery(markArea[0]).css('top'));
	
	if(jQuery(markArea[0]).attr('style').indexOf('transform: rotate(') != -1)
	{
		var rotate = parseFloat(jQuery(markArea[0]).attr('style').split('transform: rotate(')[1].split('rad)')[0]);
	}
	else
	{
		var rotate = 0;
	}
	if(rotate < 0)
	{
		rotate = Math.PI * 2 + rotate;
	}
	jQuery(markArea[0]).attr('data-oldrotate', rotate);
	jQuery(markArea[0]).data('oldrotate', rotate);
	
	if(type == 'left')
	{
		jQuery(markArea[0]).css({
			'left': (allLeft - 1) + 'px'
		});
		moveAllItemByValue(type, -1, 0, eleLst);
	}
	if(type == 'right')
	{
		jQuery(markArea[0]).css({
			'left': (allLeft + 1) + 'px'
		});
		moveAllItemByValue(type, 1, 0, eleLst);
	}
	if(type == 'up')
	{
		jQuery(markArea[0]).css({
			'top': (allTop - 1) + 'px'
		});
		moveAllItemByValue(type, 0, -1, eleLst);
	}
	if(type == 'down')
	{
		jQuery(markArea[0]).css({
			'top': (allTop + 1) + 'px'
		});
		moveAllItemByValue(type, 0, 1, eleLst);
	}
	if(type == 'vertical')
	{
		var allW = convertFloatPixel(jQuery(markArea[0]).css('width'));
		var araW = convertFloatPixel(jQuery('.labView.active .design-area').css('width'));
		var cenP = (araW - allW) / 2;
		jQuery(markArea[0]).css({
			'left': cenP + 'px'
		});
		moveAllItemByValue(type, (cenP - allLeft), 0, eleLst);
	}
	if(type == 'horizontal')
	{
		var allH = convertFloatPixel(jQuery(markArea[0]).css('height'));
		var araH = convertFloatPixel(jQuery('.labView.active .design-area').css('height'));
		var cenP = (araH - allH) / 2;
		jQuery(markArea[0]).css({
			'top': cenP + 'px'
		});
		moveAllItemByValue(type, 0, (cenP - allTop), eleLst);
	}
};

design.flipAll = function(n) {
	var content = jQuery('.labView.active .design-area .content-inner');
	var eleLst  = jQuery(content[0]).children('span');
	eleLst.each(function() {
		var e = jQuery(this),
			svg = e.find('svg'),
			transform = '';
			if(typeof svg[0] == 'undefined')
				return false;	
		var viewBox = svg[0].getAttributeNS(null, 'viewBox');
		if (viewBox != null && viewBox != '' )
		{
			var size  = viewBox.split(' ');
			var width = 2*size[0] + parseFloat(size[2]);
		}
		else
		{
			var width = svg[0].getAttributeNS(null, 'width');
			if (typeof width != 'undefined' && width != null)
			{
				width = width.replace('px', '');
			}				
		}
		
		if(typeof e.data('flipX') == 'undefined') e.data('flipX', true);
		if(e.data('flipX') === true){
			transform = 'translate('+width+', 0) scale(-1,1)';
			e.data('flipX', false);
		}
		else{
			transform = 'translate(0, 0) scale(1,1)';
			e.data('flipX', true);
		}					
		var g = jQuery(svg[0]).children('g');
		if (g.length > 0)
		{
			g.each(function() {
				this.setAttributeNS(null, 'transform', transform);
			});
		}
	});
	
};

design.changeColorAllItem = function(ele, color) {
	var colors = jQuery(ele).data('colors');
	for(var e in colors) {
		var o 	= jQuery('#' + e);
		var a   = jQuery('<div></div>');
		a.data('colors', colors[e]);
		if(o.data('type') == 'clipart'){
			design.art.changeColor(a, color);
		}
		else if(o.data('type') == 'text'){
			design.elementChangeColor = o;
			var txt  = o.find('text')[0];
			var fill = jQuery(txt).attr('fill').replace('#', '').toLowerCase();
			var strk = jQuery(txt).attr('stroke').replace('#', '').toLowerCase();
			var sW   = jQuery(txt).attr('stroke-width');
			if(fill == design.allItemColorChangeOrigin)
			{
				jQuery('#txt-color').data('value', color);
				design.text.update('color', color);
			}
			if(strk == design.allItemColorChangeOrigin)
			{
				jQuery('.outline-value').html(sW*50);
				design.text.update('outline', color);
			}
		}
		else if(o.data('type') == 'team'){
			design.elementChangeColor = 0;
			design.text.update('color', '#'+color);
		}
	}
};

design.fitToAreaDesign = function() {
	var ara     = jQuery('.labView.active .design-area');
	var maskAll = jQuery('.labView.active').find('.mask-all-item');
	if(maskAll.length == 0) return false;
	var content = jQuery('.labView.active .design-area .content-inner');
	var eleLst  = jQuery(content[0]).children('span');
	var araRct  = ara[0].getBoundingClientRect();
	var allRct  = maskAll[0].getBoundingClientRect();
	var newW    = araRct.width;
	var newH    = newW * allRct.height / allRct.width;
	if(newH > araRct.height)
	{
		newH    = araRct.height;
		newW    = newH * allRct.width / allRct.height;
	}
	maskAll.css({
		'width' : newW + 'px',
		'height': newH + 'px'
	});
	var zoom = newW / allRct.width;
	initSettingBeforeResize(eleLst);
	changeSizeAllItemWithZoom(eleLst, zoom);
	design.moveAll('vertical');
	design.moveAll('horizontal');
	design.print.size();
	design.ajax.getPrice();
};

var moveAllItemByValue = function(type, leftVal, topVal, lst) {
	jQuery(lst).each(function() {
		var t  = convertFloatPixel(jQuery(this).css('top')) + topVal;
		var l  = convertFloatPixel(jQuery(this).css('left')) + leftVal;
		jQuery(this).css({
			'top' : t + 'px',
			'left': l + 'px'
		});
		var id     = jQuery(this).attr('id');
		design.itemsPObj['' + id + '_top']     = convertFloatPixel(jQuery(this).css('top'));
		design.itemsPObj['' + id + '_left']    = convertFloatPixel(jQuery(this).css('left'));
		design.itemsPObj['' + id + '_width']   = convertFloatPixel(jQuery(this).css('width'));
		design.itemsPObj['' + id + '_height']  = convertFloatPixel(jQuery(this).css('height'));
		design.itemsPObj['' + id + '_centerX'] = convertFloatPixel(jQuery(this).css('left')) + convertFloatPixel(jQuery(this).css('width')) / 2;
		design.itemsPObj['' + id + '_centerY'] = convertFloatPixel(jQuery(this).css('top')) + convertFloatPixel(jQuery(this).css('height')) / 2;
	});
};

/**
* Main process function drag all item
*/
var dragAll = function(ui, itemsPObj, maskAllTop, maskAllLeft) {
	var content = jQuery('.labView.active .design-area .content-inner');
	var eleLst  = jQuery(content[0]).children('span');
	var offsT   = ui.position.top - maskAllTop;
	var offsL   = ui.position.left - maskAllLeft;
	eleLst.each(function() {
		if(jQuery(this).hasClass('item-locked') == true)
		{
			return;
		}
		var top   = itemsPObj['' + jQuery(this).attr('id') + '_top'];
		var left  = itemsPObj['' + jQuery(this).attr('id') + '_left'];
		var newT  = top + offsT;
		var newL  = left + offsL;
		jQuery(this).css({
			'top' : newT + 'px',
			'left': newL + 'px'
		});
	});
}

/**
* Main process function get transform matrix
*/
var getMatrix = function(ele) {
	var IE   = /msie/.test(navigator.userAgent.toLowerCase());
	var IE11 = /trident/.test(navigator.userAgent.toLowerCase());
	var Edge = /edge/.test(navigator.userAgent.toLowerCase());
	var matrix;

	var transform =  jQuery(ele).attr('transform');
	if(transform != undefined)
	{
		if(IE === true || IE11 == true || Edge)
		{
			matrix = transform.split('(')[1].split(')')[0].split(' ');
		} 
		else
		{
			matrix = transform.split('(')[1].split(')')[0].split(',');
		}
	}
	else
	{
		matrix = false;
	}
	return matrix;
}

var showChangeColorAll = function() {
	var div = document.createElement('div');
	var ara = jQuery('.labView.active .design-area');
	var t   = ara.css('top');
	var l   = parseInt(ara.css('left').replace('px', '')) - 260;
	jQuery(div).addClass('changeColorAllArea');
	jQuery(div).click(function(e) {
		e.preventDefault();
		e.stopPropagation();
	});
	
	var itemLst = jQuery('.labView.active .design-area .content-inner').children('span');
	var clrLst  = {};
	itemLst.each(function() {
		var svg = jQuery(this).children('svg');
		var clr = design.svg.getColors(svg);
		var id  = jQuery(this).attr('id');
		for(var color in clr) {
			if(color == 'none') continue;
			var hexColor = getHexColor(color);
			if(!clrLst.hasOwnProperty(hexColor))
			{
				clrLst[hexColor] = {};
			}
			clrLst[hexColor][id] = clr[color];
		}
	});
	for(var color in clrLst) {
		var divURL = document.createElement('div');
		jQuery(divURL).addClass('allItemColorURL');
		jQuery(divURL).data('colors', clrLst[color]);
		jQuery(divURL).css({
			'background-color': color
		});
		jQuery(divURL).data('value', color);
		jQuery(divURL).click(function(e) {
			jQuery('.changeColorAllArea .allItemColorURL').removeClass('active');
			jQuery(this).addClass('active');
			jQuery('.changeColorAllArea .allItemColorURL').each(function() {
				if(jQuery(this).hasClass('active') == false)
				{
					jQuery(this).popover('hide');
				}
			});
			e.preventDefault();
			e.stopPropagation();
		});
		if(typeof productPickerFlg == 'undefined')
		{
			jQuery(divURL).popover({
				html:true,
				placement:'bottom',
				title:lang.text.color+' <a class="close" href="javascript:void(0);">&times;</a>',
				content:function(){
					var div  = document.createElement('div');
					jQuery(div).append(jQuery('.other-colors').html());
					var html = '';
					jQuery(div).children('span').each(function() {
						var c = jQuery(this).attr('data-color');
						var t = jQuery(this).attr('title');
						if(c != 'none')
						{
							html += '<span class="bg-colors" title="'+t+'" style="background-color: #'+c+'" onclick="changeAllColour(\''+c+'\')"></span>';
						}
					});
					return '<div class="list-colors">' + html + '</div>';
				}
			});
		}
		else
		{
			if(productPickerFlg == '0')
			{
				if(productColorStr != '')
				{
					
					jQuery(divURL).popover({
						html:true,
						placement:'bottom',
						title:lang.text.color+' <a class="close" href="javascript:void(0);">&times;</a>',
						content:function(){
							var colors = productColorStr.split(',');
							var html = '';
							jQuery(colors).each(function() {
								var c = this;
								if(c != 'none')
								{
									html += '<span class="bg-colors" style="background-color: #'+c+'" onclick="changeAllColour(\''+c+'\')"></span>';
								}
							});
							return '<div class="list-colors">' + html + '</div>';
						}
					});
				}
				else
				{
					jQuery(divURL).popover({
						html:true,
						placement:'bottom',
						title:lang.text.color+' <a class="close" href="javascript:void(0);">&times;</a>',
						content:function(){
							var div  = document.createElement('div');
							jQuery(div).append(jQuery('.other-colors').html());
							var html = '';
							jQuery(div).children('span').each(function() {
								var c = jQuery(this).attr('data-color');
								var t = jQuery(this).attr('title');
								if(c != 'none')
								{
									html += '<span class="bg-colors" title="'+t+'" style="background-color: #'+c+'" onclick="changeAllColour(\''+c+'\')"></span>';
								}
							});
							return '<div class="list-colors">' + html + '</div>';
						}
					});
				}
			}
			else
			{
				jQuery(divURL).spectrum({
					showAlpha: true,
					color: color,
					showInput: true,
					preferredFormat: "hex",
					showInitial: true,
					showPalette: true,
					showButtons: true,
					containerClassName: 'allColorPicker',
					palette: [
						['#FFFFFF', '#000000', '#FFFF00'],
						['#FFA500', '#A52A2A', '#32CD32'],
						['#0000FF', '#9400D3', '#FF00FF'],
						['#808080', '#ADFF2F', '#D2691E'],
						['#FF0000', '#FFDEAD', '#7B68EE']
					],
					show: function(c) {
						var sp = jQuery(this).spectrum('container');
						var t  = convertFloatPixel(jQuery(sp[0]).css('top'));
						var l  = convertFloatPixel(jQuery(sp[0]).css('left'));
						spRct  = sp[0].getBoundingClientRect();
						desRct = jQuery('.labView.active .design-area')[0].getBoundingClientRect();
						var orgClr = jQuery(this).spectrum('get');
						var slf    = this;
						sp.find('.sp-cancel').click(function() {
							var hexcolor = orgClr.toHexString();
							hexcolor = hexcolor.replace('#', '');
							design.allItemColorChangeOrigin = jQuery(slf).data('value').toLowerCase().replace('#', '');
							jQuery(slf).data('value', hexcolor);
							design.changeColorAllItem(slf, hexcolor);
							jQuery(slf).css('background-color', '#' + hexcolor);
						});
					},
					move: function(c) {
						var hexcolor = c.toHexString();
						hexcolor = hexcolor.replace('#', '');
						design.allItemColorChangeOrigin = jQuery(this).data('value').toLowerCase().replace('#', '');
						jQuery(this).data('value', hexcolor);
						design.changeColorAllItem(this, hexcolor);
						jQuery(this).css('background-color', '#' + hexcolor);
						design.print.colors();
						design.ajax.getPrice();
					}
				});
			}
		}
		jQuery(div).append(divURL);
		var wWidth = jQuery(window).width();
		jQuery(divURL).on('show.bs.popover', function() {
			if(wWidth >= 700)
			{
				jQuery('#dg-designer .col-center').css('z-index', '1');
			}
		});
		jQuery(divURL).on('shown.bs.popover', function() {
			jQuery('.changeColorAllArea').find('.close').click(function() {
				jQuery('.popover').hide();
				jQuery('.allItemColorURL').popover('hide');
				jQuery('.allItemColorURL').removeClass('active');
				jQuery('#dg-designer .col-center').css('z-index', '1');
			});
		});
	}
	jQuery(div).append('<div class="buttonFitToArea"><button type="button" class="btn btn-default btn-sm" onclick="design.fitToAreaDesign();"><i class="fa fa-arrows-alt" aria-hidden="true"></i></button></div>');
	jQuery('.labView.active').prepend(div);
};

var closeChangeColorAll = function() {
	jQuery('.changeColorAllArea').remove();
	jQuery('#dg-designer .col-center').css('z-index', '1');
};

function convertFloatPixel(val) {
	var px = design.convert.px(val);
	return px;
};

function getHexColor(colorStr) {
    var a = document.createElement('div');
    a.style.color = colorStr;
    var colors = window.getComputedStyle( document.body.appendChild(a) ).color.match(/\d+/g).map(function(a){ return parseInt(a,10); });
    document.body.removeChild(a);
    return (colors.length >= 3) ? '#' + (((1 << 24) + (colors[0] << 16) + (colors[1] << 8) + colors[2]).toString(16).substr(1)) : false;
};

function changeSizeAllItemWithZoom(lst, zoom) {
	var maskAll = jQuery('.labView.active').find('.mask-all-item');
	lst.each(function() {
		if(jQuery(this).hasClass('item-locked') == true)
		{
			return;
		}
		var id  = jQuery(this).attr('id');
		var w   = design.itemsPObj['' + id + '_width'];
		var h   = design.itemsPObj['' + id + '_height'];
		var t   = design.itemsPObj['' + id + '_top'];
		var l   = design.itemsPObj['' + id + '_left'];
		var it  = design.itemsPObj['' + id + '_innertop'];
		var il  = design.itemsPObj['' + id + '_innerleft'];
		if(jQuery(this).attr('style').indexOf('transform: rotate(') != -1)
		{
			var r   = jQuery(this).attr('style').split('transform: rotate(')[1].split('rad)')[0];
		}
		else
		{
			var r = 0;
		}
		var nw  = w * zoom;
		var nh  = h * zoom;
		var nt  = convertFloatPixel(jQuery(maskAll[0]).css('top')) + it * zoom;
		var nl  = convertFloatPixel(jQuery(maskAll[0]).css('left')) + il * zoom;
		var svg = jQuery(this).find('svg');
		var img = jQuery(this).find('image');
		jQuery(this).css({
			'width' : nw + 'px',
			'height': nh + 'px',
			'top'   : nt + 'px',
			'left'  : nl + 'px'
		});
		jQuery(svg[0]).attr({
			'width' : nw,
			'height': nh
		});
		design.itemsPObj['' + id + '_top']     = nt;
		design.itemsPObj['' + id + '_left']    = nl;
		design.itemsPObj['' + id + '_width']   = nw;
		design.itemsPObj['' + id + '_height']  = nh;
		design.itemsPObj['' + id + '_centerX'] = nl + nw / 2;
		design.itemsPObj['' + id + '_centerY'] = nt + nh / 2;
		if(img.length > 0)
		{
			jQuery(img[0]).attr({
				'width' : nw,
				'height': nh
			});
			var gEle = jQuery(svg[0]).find('g');
			flipFlg  = true;
			if(gEle.attr('transform') != undefined)
			{
				if(gEle.attr('transform').indexOf('scale(-1,1)') != -1) 
				{
					flipFlg = false;
				}
			}
			if (flipFlg == false)
			{
				jQuery(img[0]).parent().attr('transform', 'translate('+nw+', 0) scale(-1,1)');
			}
			var clipId = jQuery(img[0]).css('clip-path');
		}
		if(jQuery(this).data('type') == 'text')
		{
			var txt     = jQuery(this).find('text')[0];
			var viewBox = svg[0].getAttributeNS(null, 'viewBox').split(' ');
			var zdata   = viewBox[2]/nw + ' ' + viewBox[3]/nh;
			jQuery(txt).data('itemzoom', zdata);
			jQuery(txt).attr('data-itemzoom', zdata);
		}
		var ui = {};
		ui.resizeAllFlg = '1';
		ui.currItem = this;
		jQuery(document).triggerHandler( "resizzing.item.design", [ui, this]);
		jQuery(document).triggerHandler( "resize.item.design", [ui, this]);
	});
};

function initSettingBeforeResize(lst) {
	var maskAll = jQuery('.labView.active').find('.mask-all-item');
	lst.each(function() {
		if(jQuery(this).hasClass('item-locked') == true)
		{
			return;
		}
		var rect   = this.getBoundingClientRect();
		if(jQuery(this).attr('style').indexOf('transform: rotate(') != -1)
		{
			var rotate = jQuery(this).attr('style').split('transform: rotate(')[1].split('rad)')[0];
		}
		else
		{
			var rotate = 0;
		}
		
		var id     = jQuery(this).attr('id');
		var img    = jQuery(this).find('image');
		var t      = convertFloatPixel(jQuery(this).css('top'));
		var l      = convertFloatPixel(jQuery(this).css('left'));
		var w      = convertFloatPixel(jQuery(this).css('width'));
		var h      = convertFloatPixel(jQuery(this).css('height'));
		design.itemsPObj['' + id + '_top']       = t;
		design.itemsPObj['' + id + '_left']      = l;
		design.itemsPObj['' + id + '_width']     = w;
		design.itemsPObj['' + id + '_height']    = h;
		design.itemsPObj['' + id + '_innertop']  = t - convertFloatPixel(jQuery(maskAll[0]).css('top'));
		design.itemsPObj['' + id + '_innerleft'] = l - convertFloatPixel(jQuery(maskAll[0]).css('left'));
		var leftR = -(w / 2) * Math.cos(rotate) + (h / 2) * Math.sin(rotate) + (l + w / 2);
		var topR  = -(w / 2) * Math.sin(rotate) - (h / 2) * Math.cos(rotate) + (t + h / 2);
		design.itemsPObj['' + id + '_leftR'] = leftR;
		design.itemsPObj['' + id + '_topR']  = topR;
	});
};

function changeAllColour(c) {
	var cOrg = jQuery('.changeColorAllArea .allItemColorURL.active')[0];
	design.allItemColorChangeOrigin = jQuery('.changeColorAllArea .allItemColorURL.active').data('value').toLowerCase().replace('#', '');
	design.changeColorAllItem(cOrg, c);
	jQuery(cOrg).css('background-color', '#' + c);
	jQuery('.changeColorAllArea .allItemColorURL.active').data('value', c);
	jQuery('.popover').hide();
	jQuery('.allItemColorURL').popover('hide');
	jQuery('.allItemColorURL').removeClass('active');
	jQuery('#dg-designer .col-center').css('z-index', '1');
	var e = window.event;
	e.preventDefault();
	e.stopPropagation();
	design.print.colors();
	design.ajax.getPrice();
}