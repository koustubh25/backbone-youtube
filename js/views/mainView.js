define(["backbone","underscore","../collection/videos","views/videosView","../models/video"], function(Backbone,_,videoCollection,videosView,videoModel){

			//default value
			var vc = new videoCollection({
			searchQuery: 'japan'
			});
			var vv = new videosView({model:vc});
			

		jQuery('#search-query').on('input', function() {
    		var vc = new videoCollection({
			searchQuery: $('#search-query').val()
			});
			var vv = new videosView({model:vc});
		});


		

});