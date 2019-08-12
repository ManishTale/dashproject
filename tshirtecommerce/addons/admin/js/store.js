var store = {
	idea:{
		remove: function(e){
			if (typeof e == 'undefined')
			{
				var ids = [], i = 0;
				jQuery('.idea-remove').each(function(){
					if(jQuery(this).is(':checked'))
					{
						ids[i] = jQuery(this).val();
						i++;
					}
				});
				if (ids.length == 0)
				{
					alert('Please tick choose design you want remove.');
					return false;
				}
				
				var check = confirm('You sure want remove?');
				if(check == true)
				{
					jQuery('.idea-remove').each(function(){
						if(jQuery(this).is(':checked'))
						{
							jQuery(this).parents('.box-art').hide('slow', function(){
								jQuery(this).remove();
							});
						}
					});
					
					jQuery.ajax({
						method: "POST",
						url: admin_url_site + "index.php?/store/remove/ideas",
						data: { ids: ids }
					}).done(function(){});
				}
				return false;
			}
			
			if (jQuery(e).is(':checked'))
			{
				jQuery(e).parents('.box-art').css('opacity', '0.3');
			}
			else
			{
				jQuery(e).parents('.box-art').css('opacity', '1');
			}
		},
		featured: function(e){
			var check = jQuery(e).data('featured');
			if (check == 1)
			{
				jQuery(e).html('<i class="fa fa-star-o"></i>');
				jQuery(e).data('featured', 0);
				jQuery(e).attr('title', 'Unfeatured');
				var is_featured = 0;
			}
			else
			{
				jQuery(e).html('<i class="fa fa-star color-success"></i>');
				jQuery(e).data('featured', 1);
				jQuery(e).attr('title', 'Featured');
				var is_featured = 1;
			}
			var id = jQuery(e).data('id');
			jQuery.ajax({
				method: "POST",
				url: admin_url_site + "index.php?/store/featured/idea/"+id+"/"+is_featured,
				data: { id: id }
			}).done(function(){});
		}
	},
	art:{
		remove: function(e){
			if (typeof e == 'undefined')
			{
				var ids = [], i = 0;
				jQuery('.art-remove').each(function(){
					if(jQuery(this).is(':checked'))
					{
						ids[i] = jQuery(this).val();
						i++;
					}
				});
				if (ids.length == 0)
				{
					alert('Please tick choose clipart you want remove.');
					return false;
				}
				
				var check = confirm('You sure want remove?');
				if(check == true)
				{
					jQuery('.art-remove').each(function(){
						if(jQuery(this).is(':checked'))
						{
							jQuery(this).parents('.box-art').hide('slow', function(){
								jQuery(this).remove();
							});
						}
					});
					
					jQuery.ajax({
						method: "POST",
						url: admin_url_site + "index.php?/store/remove/art",
						data: { ids: ids }
					}).done(function(){});
				}
				return false;
			}
			
			if (jQuery(e).is(':checked'))
			{
				jQuery(e).parents('.box-art').css('opacity', '0.3');
			}
			else
			{
				jQuery(e).parents('.box-art').css('opacity', '1');
			}
		},
		featured: function(e){
			var check = jQuery(e).data('featured');
			if (check == 1)
			{
				jQuery(e).html('<i class="fa fa-star-o"></i>');
				jQuery(e).data('featured', 0);
				jQuery(e).attr('title', 'Unfeatured');
				var is_featured = 0;
			}
			else
			{
				jQuery(e).html('<i class="fa fa-star color-success"></i>');
				jQuery(e).data('featured', 1);
				jQuery(e).attr('title', 'Featured');
				var is_featured = 1;
			}
			var id = jQuery(e).data('id');
			jQuery.ajax({
				method: "POST",
				url: admin_url_site + "index.php?/store/featured/art/"+id+"/"+is_featured,
				data: { id: id }
			}).done(function(){});
		},
		page: function(){
			
		},
		categories: function(e){
			var id = jQuery(e).val();
			var parents = true;
			if(id == 0)
			{
				parents = false;
			}			
			
			if(typeof store_categories[id] == 'undefined')
			{
				parents = false;
			}
			
			if (parents == false)
			{
				jQuery('.art-subcategories').html('<option value="0"> - choose a category - </option>');
			}
			else
			{
				var html = '';
				jQuery.each(store_categories[id], function(key, value){
					html = html + '<option value="'+key+'">'+value+'</option>';
				});
				jQuery('.art-subcategories').html(html);
			}
		}		
	},
	charts:{
		ini: function(){
			var div = jQuery('.control-panel-box');
			if (div.length > 0)
			{
				this.views(div);
			}
		},
		search: function(type){
			var div = jQuery('#top-search-'+type);
			if (div.length == 0) return false;
			
			jQuery('.top-search').hide();
			jQuery('.btn-top-search').removeClass('active');
			jQuery('.btn-top-search-'+type).addClass('active');
			div.show();
			div.html('');
			
			jQuery.ajax({
				method: "GET",
				url: admin_url_site + "index.php?/store_charts/search/"+type,			
			}).done(function( txt ) {
				if (txt == '') return false;
				var data = eval ("(" + txt + ")");
				for(i=0; i<data.length; i++)
				{
					var index = i + 1;
					div.append('<tr><td>'+index+'</td><td><a href="#">'+data[i].keyword+'</a></td><td>'+data[i].count+'</td></tr>');
				}
			});
		},
		sales: function(type){
			var div = jQuery('#top-sales-'+type);
			if (div.length == 0) return false;
			
			jQuery('.top-sales').hide();
			jQuery('.btn-top-sales').removeClass('active');
			jQuery('.btn-top-sales-'+type).addClass('active');
			div.show();
			div.html('');
			
			jQuery.ajax({
				method: "GET",
				url: admin_url_site + "index.php?/store_charts/sales/"+type,			
			}).done(function( txt ) {
				if (txt == '') return false;
				var data = eval ("(" + txt + ")");
				for(i=0; i<data.length; i++)
				{
					var index = i + 1;
					var html = '<tr>'
									+ '<td>'+index+'</td>'
									+ '<td>'
										+ '<div class="row"><div class="col-xs-4"><a class="img-thumbnail" href="'+admin_url_site+'index.php?/store/edit/arts/8130"><img width="50" src="'+data[i].thumb+'"></a></div>'
										+ '<div class="col-xs-8"> <strong>'+data[i].title+'</strong><br />'
										+ ' <strong>Price: '+data[i].price+' Credits</strong></div>'
									+ '</div></td>'
									+ '<td>'+data[i].date+'</td>'
									+ '<td>'+data[i].count+'</td>'
								+'</tr>';
					div.append(html);
				}
			});
		},
		views: function(div){
			jQuery.ajax({
				method: "GET",
				url: admin_url_site + "index.php?/store_charts/views/",			
			}).done(function( txt ) {
				if (txt != '')
				{
					var data = eval ("(" + txt + ")");
					div.append('<div class="row"><div class="col-md-12"><hr />'
						+'<div class="panel panel-default">'
						+	'<div class="panel-heading"><i class="clip-stats"></i> Arts Used</div>'
						+	'<div class="panel-body"><canvas id="charts-views" width="800" height="400"></canvas></div>'
						+'</div></div></div>');
					if (data.max > 10)
					{
						var step = '-';
					}
					else
					{
						var step = '1';
					}
					var dataView = {
						labels: data.dates,
						datasets: [
							{
								label: "Arts used",
								fill: false,
								backgroundColor: "rgba(220,220,220,0.2)",
								borderColor: "#EB6355",
								borderCapStyle: 'butt',
								borderDash: [],
								borderDashOffset: 0,
								borderJoinStyle: 'miter',
								pointBorderColor: "#EB6355",
								pointBackgroundColor: "#EB6355",
								pointBorderWidth: 2,
								pointHoverRadius: 5,
								pointHoverBackgroundColor: "#EB6355",
								pointHoverBorderColor: "#EB6355",
								pointHoverBorderWidth: 3,
								lineTension:10,
								data: data.views,
								yAxisID: "y-axis-0",
							}				
						]
					};
					var ctx = document.getElementById("charts-views").getContext("2d");
					var myChart = new Chart(ctx, {
						type: 'line',
						data: dataView,
						options: {
							scales: {
								yAxes: [{
									ticks: {
										beginAtZero:true,
										stepSize: step
									}
								}]
							}
						}
					});					
				}
			});
		}
	}
}
jQuery(document).ready(function(){
	jQuery('.list-tree a.cate-parent').click(function(){
		var elm = jQuery(this).find('.folder-plus');
		jQuery(this).parent().find('.list-tree-children').toggle("slow", function() {
			if(jQuery(this).is(':visible'))
			{
				elm.html('<i class="clip-minus-circle"></i>');
			}
			else
			{
				elm.html('<i class="clip-plus-circle"></i>');
			}
		});		
	});
	
	jQuery( ".list-tree-children" ).sortable({
		connectWith: ".list-tree-children",
		handle: ".tool-sort",
		placeholder: "ui-state-highlight",
		stop: function(event, ui){
			jQuery('.btn-save').show();
		}
	});
	
	jQuery( ".list-tree" ).sortable({
		connectWith: ".list-tree",
		handle: ".tool-sort",
		placeholder: "ui-state-highlight",
		stop: function(event, ui){
			jQuery('.btn-save').show();
		}
	});
	
	jQuery( ".list-tree-children li" ).disableSelection();
});

function removeCategory(e, type)
{
	var parent 	= jQuery(e).parent().parent();
	var id 		= parent.data('id');
	
	var txt 	= 'You sure want remove this category?';
	if(parent.hasClass('list-tree-parent'))
	{
		txt		= txt + ' System will remove all categories children.';
	}
	var check 	= confirm(txt);
	if (check == true)
	{
		parent.hide('slow', function(){
			parent.remove();
		});
		
		jQuery.ajax({
			method: "POST",
			url: admin_url_site + "index.php?/store/removeCategory/"+type,
			data: { id: id }
		})
		.done(function( msg ) {});
	}
}

function storeCategories(e, type)
{
	var btn = jQuery(e).button('loading');
	
	var categories = '';
	jQuery('.list-tree-parent').each(function(){
		var id = jQuery(this).data('id');
		if (id != '' && id != 'undefined')
		{
			if (categories == '')
				categories = id+':';
			else
				categories = categories +';'+ id +':';
			jQuery(this).find('.cate-children').each(function(){
				categories = categories + jQuery(this).data('id')+',';
			});
		}
	});
	jQuery.ajax({
		method: "POST",
		url: admin_url_site + "index.php?/store/sortCategories/"+type,
		data: { categories: categories }
	})
	.done(function( msg ) {
		btn.button('reset');
		jQuery(e).hide();
	});
}