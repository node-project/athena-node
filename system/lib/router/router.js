var Loader = require('../loader/loader');
var loader = new Loader();
function routeController(app) {
	console.log("Starting router.");

	/*app.get("/", handle.index);
	app.get("/index", handle.index);
	app.post("/upload", handle.upload);

	app.get('*', handle.notFound);*/

	app.get("/",loader.loadController);
	app.get("/:controller",loader.loadController);
	app.get("/:controller/:method",loader.loadController);
}

exports.routeController = routeController;