/**
 * @author Egee Boy Gutierrez
 * @version 1.0
 * @class Start Controller
 */

var debug 		= require('../../system/core/core').debug,
	Model		= require('../../system/lib/model/Model'),
	dbClient 	= new Model(),
	db 			= dbClient.db("test");

function Test() {
	"use strict";

	var _method = {
		"test"		:  function(callback){
			dbClient.open(function (err, dbClient){

				if(err) throw err;
				debug("Opening mongo client");

				db.collection('test').findOne({}, function(err, doc) {

					if(err) throw err;

					callback(doc);

				});
			});
		}
	};

	return _method;
}

module.exports = Test;