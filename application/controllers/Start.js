/**
 * @author Egee Boy Gutierrez
 * @version 1.0
 * @class Start Controller
 */

var debug 	= require('../../system/core/core').debug;

function Start(loader) {
	"use strict";

	var _method = {
		"index"		:  function(request, response){
			var result = '';
			var docs = '';

			debug("Loading index function");

			var params = {
				title 	: "Index",
				page 	: request.session.user_id ? "desktop" : "login"
			};
			
			loader.loadView(request.session.user_id ? 'Desktop' : 'Login', params, response);

		},
		"upload" : function(request, response){
			var text = request.body.text;

			loader.loadView('./upload/upload', {title : "Index", text:text}, response);
		}
	};

	return _method;
}

module.exports = Start;