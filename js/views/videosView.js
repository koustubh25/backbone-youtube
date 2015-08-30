define(["backbone","../collection/videos","underscore","views/videoView","../models/video"], function(Backbone,videosCollection,_,videoView,videoModel){

var videosView = Backbone.View.extend({
	model: videosCollection,
	el: $(".video-list"),
	initialize: function(){

		this.listenTo( this.model, 'reset add change remove', this.render, this );
		this.model.fetch({
			success:function(response){
				//console.log(response.toJSON());
			},	
			error: function(response){
				//console.log(response);
			}
		});
		//this.render();
		
	},
	render: function(){
		var self = this;
		this.$el.html('');
		_.each(this.model.toArray(), function(video) {
			self.$el.append((new videoView({ model: video})).render().$el);
		});
		return this;
	}
});
return videosView;

});