jQuery(document).ready(function() {
	getFilesCSS();
});
function createCache(files, is_admin, type)
{
	var posts = {admin: is_admin, type: type};
	if(files.length > 0)
	{
		posts.files = files;
	}
	jQuery.post(admin_url_site+'index.php?/cache/create', posts, function(data, textStatus, xhr) {
		if(data === 'load')
		{
			createCache([], is_admin, type);
		}
		else if(data === 'donecss')
		{
			getFilesJS();
		}
	});
}
function getFilesCSS()
{
	var files = [], i=0;
	jQuery('head link').each(function(){
		var url 	= jQuery(this).attr('href');
		if(url.indexOf('/tshirtecommerce/') > 0)
		{
			var option = url.split('/tshirtecommerce/');
			files[i] = option[1];
			i++;
		}
	});
	if(files.length > 0)
	{
		createCache(files, 1, 'css');
	}
}
function getFilesJS()
{
	var files = [], i=0;
	jQuery('script.minify-file').each(function(){
		var url 	= jQuery(this).attr('src');
		if(url != undefined && jQuery(this).data('load') != undefined)
		{
			if(url.indexOf('/tshirtecommerce/') > 0)
			{
				var option = url.split('/tshirtecommerce/');
				files[i] = option[1];
				i++;
			}
		}
	});
	if(files.length > 0)
	{
		createCache(files, 1, 'js');
	}
}
