var campaign = {
	pageViews: function(product_id){
		var tbody = jQuery('.e-pageviews');		
		if (tbody.hasClass('table-loading') == true)
		{
			var url = woocommerce_params.ajax_url + '?action=get_product_pageviews&product_id='+product_id;
			jQuery.ajax({
				url: url,			
			}).done(function(html) {
				tbody.html(html);
				tbody.removeClass('table-loading');				
			});		
		}
	},
	saveMeta: function(){
		jQuery('#e-save-meta').submit();
	},
	productAnalytics: function(product_id, start, end)
	{
		// sale
		var url = woocommerce_params.ajax_url + '?action=get_product_analytics_sale&product_id='+product_id+'&start='+start+'&end='+end;
		jQuery.ajax({
			url: url,			
		}).done(function(html) {
			if (html != '')
			{
				var datas = html.split(',');
				for(i=0; i<datas.length; i++)
				{
					myChart.data.datasets[0].data[i] = datas[i];
				}
				myChart.update();
			}
		});	
		
		// Profits
		var url = woocommerce_params.ajax_url + '?action=get_product_analytics_profits&product_id='+product_id+'&start='+start+'&end='+end;
		jQuery.ajax({
			url: url,			
		}).done(function(html) {
			if (html != '')
			{
				var datas = html.split(',');
				for(i=0; i<datas.length; i++)
				{
					myChart.data.datasets[1].data[i] = datas[i];
				}
				myChart.update();
			}
		});
		
		// views
		var url = woocommerce_params.ajax_url + '?action=get_product_analytics_view&product_id='+product_id+'&start='+start+'&end='+end;
		jQuery.ajax({
			url: url,			
		}).done(function(html) {
			if (html != '')
			{
				var datas = html.split(',');
				for(i=0; i<datas.length; i++)
				{
					myChart.data.datasets[2].data[i] = datas[i];
				}
				myChart.update();
			}
		});
	},
	analytics: function(start, end)
	{
		// sale
		var url = woocommerce_params.ajax_url + '?action=get_user_analytics_sale&start='+start+'&end='+end;
		jQuery.ajax({
			url: url,			
		}).done(function(html) {
			if (html != '')
			{
				var datas = html.split(',');
				for(i=0; i<datas.length; i++)
				{
					myChart.data.datasets[0].data[i] = datas[i];
				}
				myChart.update();
			}
		});	
		
		// Profits
		var url = woocommerce_params.ajax_url + '?action=get_user_analytics_profits&start='+start+'&end='+end;
		jQuery.ajax({
			url: url,			
		}).done(function(html) {
			if (html != '')
			{
				var datas = html.split(',');
				for(i=0; i<datas.length; i++)
				{
					myChart.data.datasets[1].data[i] = datas[i];
				}
				myChart.update();
			}
		});
		
		// views
		var url = woocommerce_params.ajax_url + '?action=get_user_analytics_view&start='+start+'&end='+end;
		jQuery.ajax({
			url: url,			
		}).done(function(html) {
			if (html != '')
			{
				var datas = html.split(',');
				for(i=0; i<datas.length; i++)
				{
					myChart.data.datasets[2].data[i] = datas[i];
				}
				myChart.update();
			}
		});
	}
}

jQuery(document).ready(function() {
	if (typeof tinymce != 'undefined')
	{
		tinymce.init({
		  selector: '#e-form-info',
		  height: 200,
		  menubar: false,
		  statusbar: false,
		  toolbar_items_size: 'small',
		  plugins: [
			'advlist autolink lists link image charmap print preview anchor',
			'searchreplace visualblocks code fullscreen',
			'insertdatetime media table contextmenu paste code'
		  ],
		  toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
		  content_css: [
			'//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
			'//www.tinymce.com/css/codepen.min.css'
		  ]
		});
	}
});
