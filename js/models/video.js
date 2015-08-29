define(["backbone"], function(Backbone){

	var Video = Backbone.Model.extend({
		
			defaults:{
				"videoUrl": '',
				"title": '',
				"thumbnail": '',
				"duration": ''
			}
		

	});
	return Video;

});

