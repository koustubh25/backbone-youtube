define(["backbone","../models/video"], function(Backbone,videoModel){

	var videos = Backbone.Collection.extend({
		model: videoModel,
		url: function(){
			return 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key=AIzaSyCrJffnwG4mdgWoURt7s8Vda8F34HcGUMA&q=' + this.options.searchQuery; 			
		}, 
		initialize: function(options){
			return this.options = options || {};
		},
		parse: function(response){
			var resultsLength = response.items.length;
			for(var i=0;i<resultsLength;i++)
			{
				var tempresults =  {};
				tempresults["videoUrl"] = response.items[i].id.videoId;
				tempresults["title"] = response.items[i].snippet.title;
				tempresults["thumbnail"] = response.items[i].snippet.thumbnails.medium.url;
				this.push(tempresults);	
		}

		return this.models;
	}
		
	});
	return videos;
});