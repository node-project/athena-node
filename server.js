var http 	= require("http"),
 	url 	= require("url"),
	express = require('express'),
	app 	= express(),
	cons 	= require('consolidate');


function start(handle, route) {
	app.engine('html', cons.swig);
	app.set('view engine', 'html');
	app.set('views', __dirname + "/views");
	app.use(express.bodyParser());
	app.use(app.router);
	
	route(app, handle);

	app.listen(8888);

	console.log("Starting server from port 8888");
}

exports.start = start;
