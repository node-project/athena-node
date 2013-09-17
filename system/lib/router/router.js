var Loader 	= require('../loader/loader'),
	debug 	= require('../../core/core').debug,
	URI		= require('../uri/uri');


var loader,
	uri 	= new URI();

function routeController(app, dbclient) {
	debug("Starting router.");
	
	loader = new Loader(dbclient);

	app.all(
		"/*",
		uri.parseURItoSegments,
		loader.loadController
	);
}

exports.routeController = routeController;