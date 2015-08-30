define(["backbone","underscore","../collection/videos","views/videosView","../models/video"], function(Backbone,_,videoCollection,videosView,videoModel){

		
var mod1 = new videoModel({

			"videoUrl": 'http://assets-s3.usmagazine.com/uploads/assets/celebrities/95-justin-timberlake/1251227338_justin_timberlake_290x402.jpg',
				"title": 'something',
				"thumbnail": 'http://assets-s3.usmagazine.com/uploads/assets/celebrities/95-justin-timberlake/1251227338_justin_timberlake_290x402.jpg',
				"duration": ''
});

var mod2 = new videoModel({

			"videoUrl": 'http://assets-s3.usmagazine.com/uploads/assets/celebrities/95-justin-timberlake/1251227338_justin_timberlake_290x402.jpg',
				"title": 'something',
				"thumbnail": 'http://assets-s3.usmagazine.com/uploads/assets/celebrities/95-justin-timberlake/1251227338_justin_timberlake_290x402.jpg',
				"duration": ''
});

var mod3 = new videoModel({

			"videoUrl": 'http://assets-s3.usmagazine.com/uploads/assets/celebrities/95-justin-timberlake/1251227338_justin_timberlake_290x402.jpg',
				"title": 'something',
				"thumbnail": 'http://assets-s3.usmagazine.com/uploads/assets/celebrities/95-justin-timberlake/1251227338_justin_timberlake_290x402.jpg',
				"duration": ''
});
var mod4 = new videoModel({

			"videoUrl": 'http://assets-s3.usmagazine.com/uploads/assets/celebrities/95-justin-timberlake/1251227338_justin_timberlake_290x402.jpg',
				"title": 'something',
				"thumbnail": 'http://assets-s3.usmagazine.com/uploads/assets/celebrities/95-justin-timberlake/1251227338_justin_timberlake_290x402.jpg',
				"duration": ''
});
var mod5 = new videoModel({

			"videoUrl": 'http://assets-s3.usmagazine.com/uploads/assets/celebrities/95-justin-timberlake/1251227338_justin_timberlake_290x402.jpg',
				"title": 'something',
				"thumbnail": 'http://assets-s3.usmagazine.com/uploads/assets/celebrities/95-justin-timberlake/1251227338_justin_timberlake_290x402.jpg',
				"duration": ''
});
var mod6 = new videoModel({

			"videoUrl": 'http://assets-s3.usmagazine.com/uploads/assets/celebrities/95-justin-timberlake/1251227338_justin_timberlake_290x402.jpg',
				"title": 'something',
				"thumbnail": 'http://assets-s3.usmagazine.com/uploads/assets/celebrities/95-justin-timberlake/1251227338_justin_timberlake_290x402.jpg',
				"duration": ''
});

		var vc = new videoCollection([mod1,mod2,mod3,mod4,mod5,mod6]);
		var vv = new videosView({model:vc});

});