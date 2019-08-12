var is_save = 0;
design.user = {
	ini: function(e, type)
	{
		var datas = {};
		
		var username = jQuery('#'+type+'-username').val();
		var password = jQuery('#'+type+'-password').val();
		if (username == '')
		{
			alert_text(lang.text.username);
			return false;
		}
		
		if (password == '')
		{
			alert_text(lang.text.password);
			return false;
		}
		datas.username = username;
		datas.password = password;
		
		if (type == 'login')
		{
			var url = mainURL + "wp-admin/admin-ajax.php?action=tshirt_login";

			if (typeof design.platform !== 'undefined') {
				// override prestashop
				if (design.platform == 'prestashop') {
					url = mainURL + '/modules/tshirtecommerce/ajax.php?method=login';
				} 
				// override opencart
				else if (design.platform == 'opencart') {
					url = mainURL + 'index.php?route=tshirtecommerce/designer_api/login'; // need get link again with opencart common // todo
				}
			}
		}
		else if(type == 'register')
		{
			var email = jQuery('#'+type+'-email').val();
			
			if (email == '')
			{
				alert_text(lang.text.email);
				return false;
			}
			datas.email = email;
			
			var url = mainURL + "wp-admin/admin-ajax.php?action=tshirt_register";
		}
		else
		{
			return false;
		}
		jQuery('#'+type+'-status').css('display', 'none');
		var $btn = jQuery(e).button('loading');
		jQuery.ajax({
			type: "POST",
			dataType: "json",
			url: url,
			data: datas
		}).done(function( data ) {
			if (design.platform == 'wordpress') {
				if (typeof data.user != 'undefined')
				{
					user_id = data.user.key;
					jQuery('#f-'+type).modal('hide');
					var page = document.referrer;
					jQuery.ajax({url: page}).done(function(){
						if (is_save == 1)
							design.save();
						else
							design.ajax.mydesign();
					});
				}
				else
				{
					if (typeof data.error != 'undefined')
					{
						jQuery('#'+type+'-status').html(data.error);
						jQuery('#'+type+'-status').css('display', 'block');
						jQuery('#'+type+'-status a').click(function(e){
							e.preventDefault(); 
							var url = jQuery(this).attr('href'); 
							window.open(url, '_blank');
						});
					}
						
				}
				$btn.button('reset');
			} 
			// override presta
			else if (design.platform == 'prestashop') {
				if (typeof data.error != 'undefined' && typeof data.id_cus != 'undefined') {
					var valid_login = data.error;
					if (valid_login == 1) {
						jQuery('#'+type+'-status').html(data.message);
						jQuery('#'+type+'-status').css('display', 'block');
						jQuery('#'+type+'-status a').click(function(e) {
							e.preventDefault(); 
							var url = jQuery(this).attr('href'); 
							window.open(url, '_blank');
						});
					} else {
						user_id = data.id_cus;
						jQuery('#f-'+type).modal('hide');
						var page = document.referrer;
						jQuery.ajax({url: page}).done(function(){
							if (is_save == 1) {
								design.save();
							} else {
								design.ajax.mydesign();
							}
						});
					}
				}
			} 
			// override opencart
			else {
				if (typeof data.error != 'undefined' && typeof data.id != 'undefined')
				{	
					var valid_login = data.error;
					
					if (valid_login == 0)
					{
						jQuery('#'+type+'-status').css('display', 'block');
						jQuery('#'+type+'-status a').click(function(e){
							e.preventDefault(); 
							var url = jQuery(this).attr('href'); 
							window.open(url, '_blank');
						});
					}
					else //if (valid_login >= 1)
					{
						user_id = data.id;
						jQuery('#f-'+type).modal('hide');
						var page = document.referrer;
						jQuery.ajax({url: page}).done(function(){
							if (is_save == 1)
								design.save();
							else
								design.ajax.mydesign();
						});
					}
				}
			}

			$btn.button('reset');
		});
	}
}

// load design of cart
design.imports.cart = function(key){
	design.mask(true);
	
	jQuery.ajax({				
		dataType: "json",
		url: siteURL + "ajax.php?type=cartDesign&cart_id="+key		
	}).done(function( data ) {
		if (data.error == 1)
		{
			alert_text(data.msg);
		}
		else
		{
			if(typeof data.design.item == 'undefined')
			{
				data.design.item = {};
				data.design.item.qty = 1;
			}
			if(typeof data.design.vectors != 'undefined' )
			{
				data.design.vector = data.design.vectors;
			}

			design.fonts = data.design.fonts;
			design.imports.productColor(data.design.color);
			if (design.fonts != '')
			{
				jQuery('head').append(design.fonts);
			}
			design.imports.vector(data.design.vector);
			if (data.design.item.teams != '')
			{
				design.teams = data.design.item.teams;				
				design.team.load(data.design.item.teams);
			}
			
			jQuery(document).triggerHandler( "after.load.design", data);
			
			design.ajax.getPrice();
			
			var a = document.getElementById('product-thumbs').getElementsByTagName('a');
			design.products.changeView(a[0], 'front');
			if(typeof data.design.design != 'undefined')
			{
				setTimeout(function(){
					design.selectAll();
					design.fitToAreaDesign();
					design.item.updateSizes();
					jQuery(document).triggerHandler( "update.design" );
				}, 1500);
			}
		}
	}).always(function(){
		design.mask(false);
	});
}