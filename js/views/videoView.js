define(["backbone","../models/video","underscore"], function(Backbone,videoModel,_){

	var videoView = Backbone.View.extend({
		model: videoModel,
		tagName: 'div',
		initialize: function(){
			this.template = _.template($('.video-template').html());
		},
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}


	});
	return videoView
});