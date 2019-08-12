design.mobile = {
	areaDesign: function(zoomItem){
		var width_site = window.parent.getfullWidth();
		if (width_site < 500)
		{
			var zoomMobile     = width_site / max_box_width;
			design.mobile.zoom = zoomMobile;
			var changed = false;
			jQuery('#app-wrap .design-area').each(function(){			
				if (jQuery(this).data('changeArea') != 1)
				{
					var mobile = {};
					mobile.zoom = zoomMobile ;
					jQuery('#app-wrap .labView').removeClass('active');
					jQuery(this).parent().addClass('active');
					var areaWidth = parseFloat(jQuery(this).css('width'));
					mobile.width = areaWidth;
					areaWidth= areaWidth * zoomMobile;
					var areaHeight = parseFloat(jQuery(this).css('height'));
					mobile.height = areaHeight;
					areaHeight = areaHeight * zoomMobile;
					var areaPosition = jQuery(this).position();
					var areaTop 	= areaPosition.top * zoomMobile;
					var areaLeft 	= areaPosition.left * zoomMobile;
					var radius      = jQuery(this).css('border-radius');
					if(radius.indexOf('px') != -1 && typeof jQuery(this).data('mobile') == 'undefined')
					{
						radius = (design.convert.px(radius) * zoomMobile) + 'px';
					}
					if (typeof jQuery(this).data('mobile') == 'undefined')
					{
						mobile.top 		= areaPosition.top;
						mobile.left 	= areaPosition.left;
						mobile.moveLeft	= areaPosition.left - areaLeft;
						mobile.moveTop	= areaPosition.top - areaTop;
						
						jQuery(this).data('mobile', mobile);
					}
					else
					{
						var mobile		= jQuery(this).data('mobile');
					}
					
					jQuery(this).css({
						'width': areaWidth + 'px',
						'height': areaHeight + 'px',
						'top': areaTop + 'px',
						'left': areaLeft + 'px',
						'border-radius': radius
					});
					if (typeof zoomItem != 'undefined')
					{
						var id = jQuery(this).parent().attr('id'); 
						var position = id.replace('view-', '');
						design.mobile.items(position, mobile, false);
					}
					jQuery(this).data('changeArea', 1);
					changed = true;
				}
			});
			if (changed == true)
			{
				jQuery('#app-wrap .labView').removeClass('active');
				var ii = 0;
				var a = jQuery('#product-thumbs a');
				jQuery('.labView').each(function() {
					if(jQuery(this).find('.product-design').html() != '')
					{
						jQuery('.labView').removeClass('active');
						jQuery(this).addClass('active');
						if(typeof a[ii] != 'undefined')
						{
							a[0].click();
						}
						return false;
					}
					ii++;
				});
				var height_site = zoomMobile * max_box_height;
				jQuery('body').append('<style>#app-wrap.view-mobile .labView{max-width:'+width_site+'px;max-height:'+height_site+'px;}</style>');
			}
		}
	},
	viewWeb: function(position){
		var elm = jQuery('#view-'+position+' .design-area');
		if(elm.length > 0)
		{
			elm.data('changeArea', 0);
			var mobile = elm.data('mobile');
			if(typeof mobile == 'undefined')
			{
				var mchange = items.area[position];
				mchange = mchange.replace(/'/g, '"');
				mobile = JSON.parse(mchange);
			}
			elm.css({
				'width': mobile.width + 'px',
				'height': mobile.height + 'px',
				'top': mobile.top + 'px',
				'left': mobile.left + 'px',
			});
			this.items(position, mobile, true);
		}		
	},
	items: function(position, mobile, type){
		jQuery('#view-'+position).find('.drag-item').each(function(){
			var css = {};
				css.top 	= design.convert.px(this.style.top);
				css.left 	= design.convert.px(this.style.left);
				css.width 	= design.convert.px(this.style.width);
				css.height 	= design.convert.px(this.style.height);
			
			var svg = jQuery(this).find('svg');
			var img = jQuery(svg).find('image');				
			var itemsCss	= {};
			if (type === false)
			{
				itemsCss.top 	= css.top * mobile.zoom;
				itemsCss.left 	= css.left * mobile.zoom;
				itemsCss.width 	= css.width * mobile.zoom;
				itemsCss.height = css.height * mobile.zoom;
				
				if (typeof img[0] != 'undefined')
				{
					var imgW 	= img[0].getAttributeNS(null, 'width') * mobile.zoom;
					var imgH 	= img[0].getAttributeNS(null, 'height') * mobile.zoom;
				}
			}
			else
			{
				itemsCss.top 	= (css.top + 0)/mobile.zoom;
				itemsCss.left 	= (css.left + 0)/mobile.zoom;
				itemsCss.width 	= css.width / mobile.zoom;
				itemsCss.height = css.height / mobile.zoom;
				if (typeof img[0] != 'undefined')
				{
					var imgW 	= img[0].getAttributeNS(null, 'width') / mobile.zoom;
					var imgH 	= img[0].getAttributeNS(null, 'height') / mobile.zoom;
				}
			}
			jQuery(this).css({"width": itemsCss.width, "height": itemsCss.height, "top":itemsCss.top, "left": itemsCss.left});
			svg[0].setAttributeNS(null, 'width', itemsCss.width);
			svg[0].setAttributeNS(null, 'height', itemsCss.height);				
			if (typeof img[0] != 'undefined')
			{
				img[0].setAttributeNS(null, 'width', imgW);
				img[0].setAttributeNS(null, 'height', imgH);
				var gEle = jQuery(svg[0]).find('g');
				flipFlg  = true;
				if(gEle.attr('transform') != undefined)
				{
					if(gEle.attr('transform').indexOf('scale(-1,1)') != -1) {
						flipFlg = false;
					}
				}
				var viewBox = svg[0].getAttributeNS(null, 'viewBox');
				if (viewBox != null && viewBox != '' )
				{
					var size = viewBox.split(' ');
					var width = size[2];
				}
				else
				{
					var width = imgW;
				}
				if(flipFlg == false)
				{
					transform = 'translate('+width+', 0) scale(-1,1)';
				}
				else
				{
					transform = 'translate(0, 0) scale(1,1)';
				}
				if(gEle.attr('transform') != undefined)
				{
					gEle[0].setAttributeNS(null, 'transform', transform);
				}
			}			
		});
	},
	close: function(){
		window.parent.tshirt_close();
	}
}
jQuery(document).ready(function(){
	jQuery('.dg-options-toolbar li').click(function(){
		var check = jQuery(this).hasClass('active');
		jQuery('.dg-options-toolbar li').removeClass('active');
		var elm = jQuery(this).parents('.dg-options');
		var type = jQuery(this).data('type');
		
		if (check == true)
		{
			elm.children('.dg-options-content').removeClass('active');
			jQuery('.toolbar-action-'+type).removeClass('active');
		}
		else
		{				
			jQuery(this).addClass('active');				
			elm.children('.dg-options-content').addClass('active');
			elm.children('.dg-options-content').children('div').removeClass('active');
			jQuery('.toolbar-action-'+type).addClass('active');
		}			
	});
	
	//zoom
	var width_site = window.parent.getfullWidth();
	if(width_site<500)
	{
		window.parent.designer.setSize(true);
		design.mobile.areaDesign();
		jQuery('.modelImage').each(function(){
			var css = {};
				css.top 	= design.convert.px(this.style.top);
				css.left 	= design.convert.px(this.style.left);
				css.width 	= design.convert.px(this.style.width);
				css.height 	= design.convert.px(this.style.height);
			jQuery(this).css({
				'top'    : (css.top * design.mobile.zoom) + 'px',
				'left'   : (css.left * design.mobile.zoom) + 'px',
				'width'  : (css.width * design.mobile.zoom) + 'px',
				'max-width'  : (css.width * design.mobile.zoom) + 'px',
				'height' : (css.height * design.mobile.zoom) + 'px',
				'max-height' : (css.height * design.mobile.zoom) + 'px'
			});
		});
	}
	jQuery('button.btn-desktop').css('display', 'none');
	jQuery('li.selectall-mobile-element').css('display', 'block');
	var wscreen = jQuery(window).width();
	var wtool = jQuery('.dg-tools').width();
	if(wscreen < 768 && wtool >= wscreen-120)
		jQuery('.dg-tools').css('left', '40px');
	else
		jQuery('.dg-tools').css('left', 'auto');
});

// change view when change area design
jQuery(document).on('changeView.product.design', function(event, e){
	design.mobile.areaDesign();
	design.changeViewEventFlg = false;
});

// fix team, qrcode
jQuery('.add_item_team, .add_item_qrcode').click(function(){
	jQuery('#dg-sidebar-action').show();
	jQuery('.btn-group-custom li').removeClass('active');
});
jQuery(document).on('select.item.design', function(event, e){
	if(jQuery(e).hasClass('add-by-import') == false
		&& jQuery('#dg-help-functions').css('display') == 'none'
		&& design.changeViewEventFlg != true)
	{
		jQuery('#dg-sidebar-action').show();
		jQuery('.btn-group-custom li').removeClass('active');
		jQuery('#dg-help-functions').css('width', '100%');
		jQuery('#dg-help-functions').show('slow');
		jQuery('.product-views').hide('slow');
		jQuery('#dg-left').hide();
	}
});
jQuery(document).on('name.add.team.design remove.team.design number.add.team.design', function(event, e){
	jQuery('.btn-group-custom li').removeClass('active');
	jQuery('#mobile-add-name-number').trigger('click');
	return;
});

// create thumb with mobile
jQuery(document).on('start.canvas.design', function(event, position){
	var elm = jQuery('#view-'+position+' .design-area');
	if(elm.length > 0)
	{
		var is_changeArea = elm.data('changeArea');
		if(is_changeArea == 0)
		{
			design.mobile.areaDesign(true);
		}
	}
	design.mobile.viewWeb(position);
});
jQuery(document).on('end.canvas.design', function(event, postion){
	design.mobile.areaDesign(true);
});

jQuery(document).on('remove.item.design', function(event, e){	
	jQuery('#dg-sidebar-action').hide();
	jQuery('#dg-help-functions').hide('slow');
	jQuery('.product-views').show('slow');
	jQuery('#dg-left').show();
});
function e_display(elm, type)
{
	if (type == 'show')
	{
		jQuery(elm).show( "slow", function() {
			jQuery(this).addClass('active');
		});
	}
	else
	{
		jQuery(elm).hide( "slow", function() {
			jQuery(this).removeClass('active');
		});
	}
}
jQuery('.btn_edit_product').click(function(){
	jQuery('#dg-right').animate({ scrollTop: 0}, 1000);
});
jQuery('.btn_add_cart').click(function(){
	jQuery('#dg-right').animate({ scrollTop: jQuery('#dg-right').prop("scrollHeight")}, 1000);
});

jQuery(document).on("change.product.design", function(event, product){
	if (typeof event.namespace == 'undefined' || event.namespace != 'design.product') return;
	jQuery.each(product.design.area, function(key, data){
		var elm = jQuery('#view-'+key+' .design-area');
		if(elm.length > 0)
		{
			elm.data('changeArea', 0);
			elm.removeData('mobile');
		}
	});
	if(typeof product.box_width != 'undefined')
	{
		max_box_width = product.box_width;
	}
	else
	{
		max_box_width = 500;
	}
	if(typeof product.box_height != 'undefined')
	{
		max_box_height = product.box_height;
	}
	else
	{
		max_box_height = 500;
	}
	design.mobile.areaDesign();
	jQuery('.modelImage').each(function(){
		var css = {};
			css.top 	= design.convert.px(this.style.top);
			css.left 	= design.convert.px(this.style.left);
			css.width 	= design.convert.px(this.style.width);
			css.height 	= design.convert.px(this.style.height);
		jQuery(this).css({
			'top'    : (css.top * design.mobile.zoom) + 'px',
			'left'   : (css.left * design.mobile.zoom) + 'px',
			'width'  : (css.width * design.mobile.zoom) + 'px',
			'height' : (css.height * design.mobile.zoom) + 'px'
		});
	});
});

jQuery(document).on('selectall.item.design', function(event, maskAll){
	var markAllAction = jQuery('.labView.active .changeColorAllArea');
	jQuery('#dg-wapper .col-left').before(markAllAction);
	jQuery(markAllAction).attr('style', '');
	markAllAction.css({
		'float'   : 'left',
		'position': 'absolute',
		'width'   : '100%',
		'bottom'  : '0px',
		'height'  : 'auto',
		'border-top'      : '1px solid #D3D3D3',
		'border-bottom'   : '1px solid #D3D3D3',
		'background-color': '#F9F9F9'
	});
	markAllAction.find('.headerDesc').css({
		'text-align': 'center'
	});
	markAllAction.find('.allItemColorURL').css({
		'width' : '25px',
		'height': '24px',
		'margin': '5px',
		'border-radius': '5px'
	});
	markAllAction.find('.buttonFitToArea').css({
		'text-align': 'center',
		'padding'   : '5px'
	});
	jQuery('#dg-sidebar-action').show();
	jQuery('.btn-group-custom li').removeClass('active');
	jQuery('#dg-help-functions').css('width', '100%');
	jQuery('#dg-help-functions').show('slow');
	jQuery('.product-views').hide('slow');
	jQuery('#dg-left').hide();
});

jQuery(document).on('before.imports.item.design', function(event, span, item) {
	jQuery(span).addClass('add-by-import');
	var top    = (design.convert.px(item.top) * design.mobile.zoom);
	var left   = (design.convert.px(item.left) * design.mobile.zoom);
	var width  = (design.convert.px(item.width) * design.mobile.zoom);
	var height = (design.convert.px(item.height) * design.mobile.zoom);
	item.top   = top + 'px';
	item.left  = left + 'px';
	item.width = width + 'px';
	item.height= height + 'px';
	jQuery(span).css({
		'top'   : top + 'px',
		'left'  : left + 'px',
		'width' : width + 'px',
		'height': height + 'px'
	});
});

jQuery(document).on('after.imports.item.design', function(event, span, item) {
	var width  = (design.convert.px(item.width));
	var height = (design.convert.px(item.height));
	var svg = jQuery(span).find('svg')[0];
	jQuery(svg).attr({
		'width' : width,
		'height': height
	});
	var img = jQuery(svg).find('image');
	if(img.length > 0)
	{
		img.attr({
			'width' : width,
			'height': height
		});
	}
});

jQuery(document).on('beforexports.item.design', function(event, item, svg) {
	var top     = design.convert.px(item.top) / design.mobile.zoom;
	var left    = design.convert.px(item.left) / design.mobile.zoom;
	var width   = design.convert.px(item.width) / design.mobile.zoom;
	var height  = design.convert.px(item.height) / design.mobile.zoom;
	item.top    = top + 'px';
	item.left   = left + 'px';
	item.width  = width + 'px';
	item.height = height + 'px';
	svg.attr({
		'width' : width,
		'height': height
	});
	var img = svg.find('image');
	if(img.length > 0)
	{
		img.attr({
			'width' : width,
			'height': height
		});
		if(img.css('clip-path') != 'none' && img.css('clip-path') != '')
		{
			var clipId  = img.css('clip-path').split('#')[1].split('"')[0];
			var clipEle = svg.find('#' + clipId);
			var viewBox = svg[0].getAttribute('viewBox').split(' ');
			for(i = 0; i < viewBox.length; i ++) {
				viewBox[i] = viewBox[i] / design.mobile.zoom;
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
			matrixT[0] = matrixT[0] / design.mobile.zoom;
			matrixT[3] = matrixT[3] / design.mobile.zoom;
			matrixT[4] = matrixT[4] / design.mobile.zoom;
			matrixT[5] = matrixT[5] / design.mobile.zoom;
			clipEle.children().each(function() {
				jQuery(this).attr('transform', 'matrix(' + matrixT[0] + ',0,0,' + matrixT[3] + ',' + matrixT[4] + ',' + matrixT[5] + ')');
			});
		}
		var g = svg.children('g')[0];
		var transform = g.getAttribute('transform');
		if(transform != null)
		{
			if(transform.indexOf('scale(-1,1)') != -1)
			{
				var matrix = transform.split('(')[1].split(')')[0].split(',');
				var newT   = matrix[0] / design.mobile.zoom;
				g.setAttribute('transform', 'translate(' + newT + ', 0) scale(-1,1)');
			}
		}
	}
});

design.mobile.unselectItemDesign = function() {
	design.item.unselect();
	jQuery('#dg-sidebar-action').hide();
	jQuery('#dg-help-functions').hide('slow');
	jQuery('.product-views').show('slow');
	jQuery('#dg-left').show();
};

jQuery(document).on('changeColor.product.design', function(event, e, n) {
	jQuery('.modelImage').each(function(){
		var css = {};
			css.top 	= design.convert.px(this.style.top);
			css.left 	= design.convert.px(this.style.left);
			css.width 	= design.convert.px(this.style.width);
			css.height 	= design.convert.px(this.style.height);
		jQuery(this).css({
			'top'    : (css.top * design.mobile.zoom) + 'px',
			'left'   : (css.left * design.mobile.zoom) + 'px',
			'width'  : (css.width * design.mobile.zoom) + 'px',
			'height' : (css.height * design.mobile.zoom) + 'px'
		});
	});
});