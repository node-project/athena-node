var http 	= require("http"),
 	url 	= require("url"),
	express = require('express'),
	app 	= express(),
	cons 	= require('consolidate'),
	path 	= require('path'),
	debug 	= require('./core/core').debug;


function start(route) {
	app.engine('html', cons.swig);
	app.set('view engine', 'html');
	app.set('views', __dirname + "/../application/views");
	app.use('/css',express.static(path.join(__dirname, '/../application/resources/css')));
	app.use('/image',express.static(path.join(__dirname, '/../application/resources/images')));
	app.use('/javascript',express.static(path.join(__dirname, '/../application/resources/javascript')));
	app.use(express.bodyParser());
	app.use(app.router);

	
	route(app);

	app.listen(8888);

	debug("Starting server from port 8888");
}

exports.start = start;
