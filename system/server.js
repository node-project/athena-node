var http 	= require("http"),
 	url 	= require("url"),
	express = require('express'),
	app 	= express(),
	cons 	= require('consolidate'),
	path 	= require('path'),
	MongoClient = require('mongodb').MongoClient,
	Server = require('mongodb').Server,
	debug 	= require('./core/core').debug,
	appConfig 	= require("../application/config/config");


function start(route) {
	var host = appConfig.database.host;
	var port = appConfig.database.port;
	var dbname = appConfig.database.dbname;

	var mongoclient = new MongoClient( new Server(host, port, { 'native_parser' : true}) );
	var db = mongoclient.db(dbname);

	mongoclient.open(function (err, mongoclient){

		if(err) throw err;

		app.use(express.cookieParser());
		app.use(express.session({secret: '1234567890QWERTY'}));

	  	app.engine('html', cons.swig);
		app.set('view engine', 'html');
		app.set('views', __dirname + "/../application/views");
		app.use('/css',express.static(path.join(__dirname, '/../application/resources/css')));
		app.use('/image',express.static(path.join(__dirname, '/../application/resources/images')));
		app.use('/javascript',express.static(path.join(__dirname, '/../application/resources/javascript')));
		app.use(express.bodyParser());
		app.use(app.router);

		
		route(app, db);

		app.listen(8888);

		
		debug("Starting server from port 8888");
	});

	
	/*mongoose.connect('mongodb://' + host + ':' + port + '/' + dbname);
	
	var db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
		
	});*/
	
}

exports.start = start;
