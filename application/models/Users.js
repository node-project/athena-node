/**
 * @author Egee Boy Gutierrez
 * @version 1.0
 * @class Start Controller
 */

var debug 		= require('../../system/core/core').debug,
	model;

function Users(db) {
	"use strict";


	var model = db.collection("users");

	var _method = {
		"login"		:  function(username, password, callback){
			model.findOne({_id : username, password : password}, callback);
		}
	};

	return _method;
}

module.exports = Users;