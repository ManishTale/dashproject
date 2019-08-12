jQuery(document).on('ini.design', function() {
	//setCookie('isClosedF', 0, 1);
	//sessionStorage.isClosed = 0;
	var wWidth   = jQuery(window).width();
	tshirtIntroduction.windowSize = wWidth;
	if(wWidth < 768)
	{
		tshirtIntroduction.isMobie = true;
	}
	else
	{
		tshirtIntroduction.isMobie = false;
	}
	if(tshirtIntroduction.checkedEnable() == false)
	{
		if(tshirtIntroduction.isMobie = true)
		{
			jQuery('#dg-left .dg-box').animate({ scrollLeft: jQuery('#dg-left .dg-box').prop("scrollWidth")}, 5000);
			jQuery('#dg-left .dg-box').animate({ scrollLeft: 0}, 500);
			jQuery('.dg-tools .list-tools').animate({ scrollLeft: jQuery('.dg-tools .list-tools').prop("scrollWidth")}, 5000);
			jQuery('.dg-tools .list-tools').animate({ scrollLeft: 0}, 500);
		}
		return false;
	}
	tshirtIntroduction.start();
});

var tshirtIntroduction = {
	currentStep: 0,
	isMobie    : true,
	show       : function(introEle) {
		introAutoTimeVal = parseInt(introAutoTimeVal);
		var autoIntro = setTimeout(function() {
			if(tshirtIntroduction.isLastEle != '1')
			{
				if(tshirtIntroduction.currentStep != 0)
				{
					tshirtIntroduction.nextIntro();
				}
			}
			else
			{
				tshirtIntroduction.closeInro();
				if(tshirtIntroduction.isMobie)
				{
					jQuery('#dg-left .dg-box').animate({
						scrollLeft: 1
					}, 1000);
				}
			}
		}, introAutoTimeVal);
		tshirtIntroduction.autoIntro = autoIntro;
		var container  = jQuery('#dg-wapper').parent('.container-fluid');
		var conRct     = container[0].getBoundingClientRect();
		var desinRct   = jQuery('#dg-designer')[0].getBoundingClientRect();
		var target     = jQuery('' + introEle.target);
		if(target.hasClass('div-layers') == true)
		{
			var lyr    = target.find('.layers-toolbar')[0];
			if(jQuery(lyr).css('display') != 'none')
			{
				target = jQuery(lyr);
				introEle.position = 'bottom';
			}
		}
		var targetC    = target.clone();
		var divIntro   = document.createElement('div');
		var divMark    = document.createElement('div');
		var divArrow   = document.createElement('span');
		if(target.length == 0 && introEle.target != 'tshirt-intro-start')
		{
			tshirtIntroduction.nextIntro();
			return false;
		}
		if(introEle.isActive == '0' && introEle.target != 'tshirt-intro-start')
		{
			tshirtIntroduction.nextIntro();
			return false;
		}
		if(introEle.target != 'tshirt-intro-start')
		{
			var targetRct = target[0].getBoundingClientRect();
			var topIntro  = targetRct.top - desinRct.top;
			var leftIntro = targetRct.left - desinRct.left + targetRct.width + 20;
		}
		/** Create mask overlay layer */
		jQuery(divMark).addClass('introduction-mask');
		jQuery(divMark).css({
			'width' : conRct.width + 'px',
			'height': conRct.height + 'px'
		});
		jQuery(divMark).click(function() {
			tshirtIntroduction.closeInro();
			tshirtIntroduction.setSessStorage();
			clearTimeout(tshirtIntroduction.autoIntro);
		});
		jQuery('#dg-designer').append(divMark);

		/** Create mask of element */
		if(introEle.target != 'tshirt-intro-start')
		{
			jQuery(target).each(function() {
				if(jQuery(this).css('display') == 'none')
				{
					return true;
				}
				var targetC   = jQuery(this).clone();
				var targetRct = this.getBoundingClientRect();
				jQuery(targetC).addClass('introduction-ele-mask');
				jQuery(targetC).copyCSS(target);
				var targetChildLst = target.find('*');
				targetC.find('*').each(function(index, e) {
					jQuery(e).copyCSS(targetChildLst[index])
				});
				targetC.css({
					'position': 'absolute',
					'z-index' : 10002,
					'top'     : (targetRct.top - desinRct.top) + 'px',
					'left'    : (targetRct.left - desinRct.left) + 'px',
					'display' : 'none'
				});
				if(target.css('background-color') == 'rgba(0, 0, 0, 0)' && tshirtIntroduction.windowSize <= 770)
				{
					if(!tshirtIntroduction.isMobie)
					{
						targetC.css({
							'background-color': '#FFFFFF'
						});
					}
					else
					{
						targetC.css({
							'background-color': '#F9F9F9'
						});
					}
				}
				jQuery('#dg-designer').append(targetC);
			});
			
		}

		/** Create introduction desc layer */
		jQuery(divIntro).addClass('introduction-desc');
		if(introEle.target != 'tshirt-intro-start')
		{
			jQuery(divIntro).append(divArrow);
		}
		jQuery(divIntro).append(jQuery(introEle).html());
		//jQuery(divIntro).append('<span class="intro-step-pos">'+ (tshirtIntroduction.currentStep + 1) + '/' + (tshirtIntroduction.introLst.length) + '</span>');
		jQuery('#dg-designer').append(divIntro);
		if(introEle.position == 'left')
		{
			jQuery(divArrow).addClass('introduction-arrow introduction-arrow-left');
			var topDiv = topIntro;
			if((topIntro + 400) > 572)
			{
				topDiv = 574 - 400 - 20;
				jQuery(divIntro).find('.introduction-arrow-left').css('top', (topIntro - topDiv) + 'px');
			}
			jQuery(divIntro).css({
				'top': topDiv + 'px',
				'left': leftIntro + 'px',
				'opacity': 0
			});
		}
		else if(introEle.position == 'right')
		{
			jQuery(divArrow).addClass('introduction-arrow introduction-arrow-right');
			var topDiv = topIntro;
			if((topIntro + 400) > 572)
			{
				topDiv = 574 - 400 - 20;
				jQuery(divIntro).find('.introduction-arrow-right').css('top', (topIntro - topDiv) + 'px');
			}
			jQuery(divIntro).css({
				'top': topDiv + 'px',
				'left': (targetRct.left - 435) + 'px',
				'opacity': 0
			});
		}
		else if(introEle.position == 'top')
		{
			if(!tshirtIntroduction.isMobie)
			{
				jQuery(divArrow).addClass('introduction-arrow introduction-arrow-top');
				var leftDiv = targetRct.left - desinRct.left;
				if((leftDiv + 400) > (conRct.width - 10))
				{
					leftDiv = conRct.width - 400 - 40;
					jQuery(divIntro).find('.introduction-arrow-top').css('left', (targetRct.left - desinRct.left - leftDiv) + 'px');
				}
				jQuery(divIntro).css({
					'top': (topIntro + targetRct.height + 20) + 'px',
					'left': leftDiv + 'px',
					'opacity': 0
				});
			}
			else
			{
				jQuery(divArrow).addClass('introduction-arrow introduction-arrow-top');
				jQuery(divIntro).css({
					'top': (topIntro + targetRct.height + 20) + 'px',
					'opacity': 0
				});
				var left = targetRct.left + targetRct.width / 2 - 20 - (jQuery(window).width() * 0.02);
				if(left < 7)
				{
					left = 7;
				}
				jQuery(divIntro).find('.introduction-arrow-top').css('left', left + 'px');
			}
		}
		else if(introEle.position == 'bottom')
		{
			jQuery(divArrow).addClass('introduction-arrow introduction-arrow-bottom');
			if(!tshirtIntroduction.isMobie)
			{
				jQuery(divArrow).addClass('introduction-arrow introduction-arrow-bottom');
				var topDiv  = targetRct.top - 420;
				var leftDiv = targetRct.left - desinRct.left;
				if((leftDiv + 400) > conRct.width)
				{
					leftDiv = conRct.width - 400 - 40;
					jQuery(divIntro).find('.introduction-arrow-bottom').css('left', (targetRct.left - desinRct.left - leftDiv) + 'px');
				}
				jQuery(divIntro).css({
					'top': topDiv + 'px',
					'left': leftDiv + 'px',
					'opacity': 0
				});
			}
			else
			{
				var h = divIntro.getBoundingClientRect().height;
				var topDiv = targetRct.top - h - 20;
				var left = targetRct.left + targetRct.width / 2 - 20 - (jQuery(window).width() * 0.02);
				if(left < 7)
				{
					left = 7;
				}
				jQuery(divIntro).find('.introduction-arrow-bottom').css('left', left + 'px');
				jQuery(divIntro).css({
					'top': topDiv + 'px',
					'opacity': 0
				});
			}
		}
		else if(introEle.position == 'center')
		{
			if(!tshirtIntroduction.isMobie)
			{
				jQuery('.introduction-desc').css({
					'top' : (desinRct.height - 400) / 2 + 'px',
					'left': (desinRct.width - 400) / 2 + 'px'
				});
			}
			else
			{
				jQuery('.introduction-desc').css({
					'top' : '10%'
				});
			}
		}

		/** Create handler when click buttons next, close */
		jQuery('.intro-desc-taskbar .close-desc').click(function() {
			tshirtIntroduction.closeInro();
			tshirtIntroduction.setSessStorage();
			clearTimeout(tshirtIntroduction.autoIntro);
			if(tshirtIntroduction.isMobie = true)
			{
				jQuery('#dg-left .dg-box').animate({ scrollLeft: jQuery('#dg-left .dg-box').prop("scrollWidth")}, 5000);
				jQuery('#dg-left .dg-box').animate({ scrollLeft: 0}, 500);
				jQuery('.dg-tools .list-tools').animate({ scrollLeft: jQuery('.dg-tools .list-tools').prop("scrollWidth")}, 5000);
				jQuery('.dg-tools .list-tools').animate({ scrollLeft: 0}, 500);
			}
		});
		jQuery('.intro-desc-taskbar .next-step').click(function() {
			tshirtIntroduction.nextIntro();
		});
		jQuery('.intro-closeBtn').click(function() {
			tshirtIntroduction.closeInro();
			tshirtIntroduction.setSessStorage();
			clearTimeout(tshirtIntroduction.autoIntro);
			if(tshirtIntroduction.isMobie = true)
			{
				jQuery('#dg-left .dg-box').animate({ scrollLeft: jQuery('#dg-left .dg-box').prop("scrollWidth")}, 5000);
				jQuery('#dg-left .dg-box').animate({ scrollLeft: 0}, 500);
				jQuery('.dg-tools .list-tools').animate({ scrollLeft: jQuery('.dg-tools .list-tools').prop("scrollWidth")}, 5000);
				jQuery('.dg-tools .list-tools').animate({ scrollLeft: 0}, 500);
			}
		});
		jQuery('.intro-desc-taskbar .close-forever').click(function() {
			tshirtIntroduction.closeInro();
			tshirtIntroduction.setCookie();
			clearTimeout(tshirtIntroduction.autoIntro);
			if(tshirtIntroduction.isMobie = true)
			{
				jQuery('#dg-left .dg-box').animate({ scrollLeft: jQuery('#dg-left .dg-box').prop("scrollWidth")}, 5000);
				jQuery('#dg-left .dg-box').animate({ scrollLeft: 0}, 500);
				jQuery('.dg-tools .list-tools').animate({ scrollLeft: jQuery('.dg-tools .list-tools').prop("scrollWidth")}, 5000);
				jQuery('.dg-tools .list-tools').animate({ scrollLeft: 0}, 500);
			}
		});

		/** Create effect show */
		setTimeout(function() {
			jQuery('.introduction-ele-mask').show(800);
		}, 1);
		
		setTimeout(function() {
			jQuery('.introduction-desc').animate({
				opacity: 1
			}, 1000);
		}, 800);
	},
	nextIntro: function() {
		/** Action next step production */
		clearTimeout(tshirtIntroduction.autoIntro);
		tshirtIntroduction.closeInro();
		tshirtIntroduction.currentStep += 1;
		var step    = tshirtIntroduction.currentStep;
		var ele     = tshirtIntroduction.introLst[step];
		var lastEle = tshirtIntroduction.introLst.length - 1;
		var lastChk = false;
		if(ele.target == tshirtIntroduction.introLst[lastEle].target)
		{
			lastChk = true;
		}
		if(ele != undefined)
		{
			if(tshirtIntroduction.isMobie)
			{
				var target    = jQuery('' + ele.target);
				var targetRct = target[0].getBoundingClientRect();
				var wapRct    = jQuery('#dg-wapper')[0].getBoundingClientRect();
				var divMark   = document.createElement('div');
				if((targetRct.left + targetRct.width) > wapRct.width)
				{
					jQuery(divMark).addClass('introduction-mask introduction-mask-buff');
					jQuery(divMark).css({
						'width' : wapRct.width + 'px',
						'height': wapRct.height + 'px'
					});
					jQuery('#dg-designer').append(divMark);
					var newScrll = jQuery('#dg-left .dg-box').scrollLeft() + targetRct.left;
					jQuery('#dg-left .dg-box').animate({
						scrollLeft: newScrll
					}, 1000, function() {
						jQuery('#dg-designer .introduction-mask-buff').remove();
						tshirtIntroduction.show(ele);
					});
				}
				else
				{
					tshirtIntroduction.show(ele);
				}
			}
			else
			{
				tshirtIntroduction.show(ele);
			}
		}
		if(lastChk)
		{
			jQuery('.intro-desc-taskbar .next-step').remove();
			tshirtIntroduction.isLastEle = '1';
		}
	},
	closeInro: function() {
		/** Action close production */
		jQuery('.introduction-desc').remove();
		jQuery('.introduction-mask').remove();
		jQuery('.introduction-ele-mask').remove();
	},
	setSessStorage: function() {
		sessionStorage.isClosed = 1;
	},
	setCookie: function() {
		setCookie('isClosedF', 1, 90);
	},
	checkedEnable: function() {
		var result    = true;
		var isClosedF = getCookie('isClosedF');
		if(sessionStorage.isClosed == 1 || isClosedF == 1 || enableIntroFlg == '0')
		{
			result = false;
		}
		return result;
	},
	start: function() {
		var introLst = jQuery('#introduction-desc-lst').children('li');
		var introActieLst = [];
		introLst.each(function(index, ele) {
			this.order    = jQuery(this).attr('data-order');
			this.target   = jQuery(this).attr('data-selecter');
			this.position = jQuery(this).attr('data-position');
			this.isActive = jQuery(this).attr('data-isActive');
			if(this.target == 'tshirt-intro-start')
			{
				introActieLst.push(this);
			}
			var target = jQuery('' + this.target);
			if(target.length > 0)
			{
				cssShow = target.css('display');
				if(cssShow == 'none')
				{
					this.isActive = '0';
				}
			}
			else if(target.length == 0)
			{
				this.isActive = '0';
			}
			if(jQuery(this).hasClass('introduction-design-tool') == true)
			{
				if(tshirtIntroduction.windowSize <= 770)
				{
					this.isActive = 0;
				}
				else if(tshirtIntroduction.windowSize > 770 && tshirtIntroduction.windowSize < 1024)
				{
					this.position = 'bottom';
					this.target   = '#dg-help-functions .btn-group-vertical';
				}
			}
			if(this.isActive != '0')
			{
				introActieLst.push(this);
			}
		});
		introActieLst.sort(function(obj1, obj2) {
			return obj1.order - obj2.order;
		});
		
		tshirtIntroduction.introLst  = introActieLst;
		tshirtIntroduction.isLastEle = '0';
		tshirtIntroduction.show(introActieLst[0]);
	}
};

/** Method copy all CSS of element */
(function($){
	
	$.fn.getStyles = function(only, except) {
		
		// the map to return with requested styles and values as KVP
		var product = {};
		
		// the style object from the DOM element we need to iterate through
		var style;
		
		// recycle the name of the style attribute
		var name;
		
		var IE11 = /trident/.test(navigator.userAgent.toLowerCase());
		
		// if it's a limited list, no need to run through the entire style object
		if (only && only instanceof Array) {
			
			for (var i = 0, l = only.length; i < l; i++) {
				// since we have the name already, just return via built-in .css method
				name = only[i];
				product[name] = this.css(name);
			}
			
		} else {
		
			// prevent from empty selector
			if (this.length) {
				
				// otherwise, we need to get everything
				var dom = this.get(0);
				var source = this;
				
				// standards
				if (window.getComputedStyle) {
					
					// convenience methods to turn css case ('background-image') to camel ('backgroundImage')
					var pattern = /\-([a-z])/g;
					var uc = function (a, b) {
							return b.toUpperCase();
					};			
					var camelize = function(string){
						return string.replace(pattern, uc);
					};
					
					// make sure we're getting a good reference
					if (style = window.getComputedStyle(dom, null)) {
						var camel, value;
						// opera doesn't give back style.length - use truthy since a 0 length may as well be skipped anyways
						if (style.length) {
							for (var i = 0, l = style.length; i < l; i++) {
								name = style[i];
								camel = camelize(name);
								if(IE11)
								{
									if(camel == 'width')
									{
										if(source.hasClass('fa-search') || source.hasClass('fa-eye') || source.hasClass('fa-save') || source.hasClass('fa-share-alt'))
										{
											value = '100%';
										}
										else
										{
											value = source[0].getBoundingClientRect().width + 'px';
										}
									}
									else if(camel == 'height')
									{
										value = source[0].getBoundingClientRect().height + 'px';
									}
									else
									{
										value = style.getPropertyValue(name);
									}
								}
								else
								{
									value = style.getPropertyValue(name);
								}
								product[camel] = value;
							}
						} else {
							// opera
							for (name in style) {
								camel = camelize(name);
								value = style.getPropertyValue(name) || style[name];
								product[camel] = value;
							}
						}
					}
				}
				// IE - first try currentStyle, then normal style object - don't bother with runtimeStyle
				else if (style = dom.currentStyle) {
					for (name in style) {
						product[name] = style[name];
					}
				}
				else if (style = dom.style) {
					for (name in style) {
						if (typeof style[name] != 'function') {
							product[name] = style[name];
						}
					}
				}
			}
		}
		
		// remove any styles specified...
		// be careful on blacklist - sometimes vendor-specific values aren't obvious but will be visible...  e.g., excepting 'color' will still let '-webkit-text-fill-color' through, which will in fact color the text
		if (except && except instanceof Array) {
			for (var i = 0, l = except.length; i < l; i++) {
				name = except[i];
				delete product[name];
			}
		}
		
		// one way out so we can process blacklist in one spot
		return product;
	
	};
	
	// sugar - source is the selector, dom element or jQuery instance to copy from - only and except are optional
	$.fn.copyCSS = function(source, only, except) {
		var styles = $(source).getStyles(only, except);
		this.css(styles);
		
		return this;
	};
	
})(jQuery);