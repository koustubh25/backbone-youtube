define(["backbone","../models/video"], function(Backbone,videoModel){

	var videos = Backbone.Collection.extend({
		model: videoModel

	});
	return videos;
});