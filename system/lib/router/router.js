var Loader 	= require('../loader/loader'),
	debug 	= require('../../core/core').debug,
	URI		= require('../uri/uri');


var loader 	= new Loader()
	uri 	= new URI();

function routeController(app) {
	debug("Starting router.");

	app.get(
		"/*",
		uri.parseURItoSegments,
		loader.loadController
	);
}

exports.routeController = routeController;