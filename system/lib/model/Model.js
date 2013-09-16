/**
 * @author Egee Boy Gutierrez
 * @version  1.0
 * @class  Model DB Handler
 */

var config 	= require('../../../application/config/config'),
	debug 	= require('../../core/core').debug;

function Model() {

	var MongoClient = require('mongodb').MongoClient,
		Server = require('mongodb').Server;

	var mongoclient = new MongoClient( new Server(config.database.host, config.database.port, { 'native_parser' : true}) );

	debug("MongoDB Client connected");

	//var dbconn = mongoclient.db(config.database.dbname);

	/*mongoclient.open(function (err, mongoclient){

		if(err) throw err;

		app.listen(8080);

		console.log("Server started"); 
	});*/

	return mongoclient;
}

module.exports = Model;