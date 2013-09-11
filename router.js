function route(app, handle) {
	/*console.log("About to route a request for " +  pathname);

	if(typeof handle[pathname] === "function") {
		handle[pathname](response, postData);
	} else {
		console.log("No request handler for " + pathname);
		response.writeHead( 404, {"Content-Type" : "text/plain"} );
		response.write("404 Not Found");
		response.end();
	}*/
	console.log("Starting router.");

	app.get("/", handle.index);
	app.get("/index", handle.index);
	app.post("/upload", handle.upload);

	app.get('*', handle.notFound);
}

exports.route = route;