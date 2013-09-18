var Loader 	= require('../loader/loader'),
	debug 	= require('../../core/core').debug,
	URI		= require('../uri/uri');


var loader,
	uri 	= new URI();

function routeController(app, db) {
	debug("Starting router.");
	
	loader = new Loader(db);

	app.all(
		"/*",
		uri.parseURItoSegments,
		loader.loadController
	);
}

exports.routeController = routeController;