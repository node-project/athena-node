/**
 * @author Egee Boy Gutierrez
 * @version 1.0
 * @class Start Controller
 */

var debug 	= require('../../system/core/core').debug;

function Start(loader, method) {
	"use strict";

	var _method = {};

	_method["index"] = function(request, response){
		debug("Loading index function");

		response.render('index', {title : "Index"});
	}

	this.load = function(request, response){
		if(_method[method]) {
			_method[method](request, response);
		} else {
			debug("Method does not exist");
			response.send("Not Found!", 404);
		}
	}
}

module.exports = Start;