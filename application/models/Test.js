/**
 * @author Egee Boy Gutierrez
 * @version 1.0
 * @class Start Controller
 */

var debug 		= require('../../system/core/core').debug,
	Model		= require('../../system/lib/model/Model'),
	model;

function Test(dbclient) {
	"use strict";

	var schema = {	
		name 		: String,
		lastname 	: String 
	};

	var modelName = "user";

	model = new Model(dbclient, schema, modelName);

	var test = new model({
		name 	: "Egee Boy",
		lastname: "Gutierrez"
	});

	var _method = {
		"save"		:  function(callback){
			test.save( function(err, test) {
				if(err) callback(err, null);

				callback(null, test);
			});
		}
	};

	return _method;
}

module.exports = Test;