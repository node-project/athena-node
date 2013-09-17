/**
 * @author Egee Boy Gutierrez
 * @version 1.0
 * @class Start Controller
 */

var debug 		= require('../../system/core/core').debug,
	Model		= require('../../system/lib/model/Model'),
	model;

function Users(dbclient) {
	"use strict";

	var schema = {	
		_id 		: String,
		password 	: String 
	};

	var modelName = "users";

	model = new Model(dbclient, schema, modelName);

	var test = new model({
		name 	: "Egee Boy",
		lastname: "Gutierrez"
	});

	var _method = {
		"login"		:  function(username, password, callback){
			model.findOne({_id : username, password : password}, callback);
		}
	};

	return _method;
}

module.exports = Users;