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

			var model = loader.loadModel("Test", function(model) {
				model["test"](function(doc){
					docs = doc;

					debug("passing response");
					var params = {
						title 	: "Index",
						doc 	: JSON.stringify(docs),
						page 	: "login"
					};
					loader.loadView('Login', params, response);
				});
			});

		},
		"upload" : function(request, response){
			var text = request.body.text;

			loader.loadView('./upload/upload', {title : "Index", text:text}, response);
		}
	};

	return _method;
}

module.exports = Start;