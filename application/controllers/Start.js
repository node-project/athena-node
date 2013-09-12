/**
 * @author Egee Boy Gutierrez
 * @version 1.0
 * @class Start Controller
 */

function Start(loader, method) {
	"use strict";

	var _method = {};

	_method["index"] = function(request, response){
		console.log("Loading index function");

		response.render('index', {title : "Index"});
	}

	this.load = function(request, response){
		_method[method](request, response);
	}
}

module.exports = Start;