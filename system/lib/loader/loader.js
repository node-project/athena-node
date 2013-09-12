/**
 * @author Egee Boy Gutierrez
 * @version 1.0
 */
var fs = require('fs');
var config = require('../../../application/config/config');

function Loader(){
	"user strict";

	this.loadController = function(request, response) {
		var controllerName 	= request.params.controller;
		var method			= request.params.method;
		
		console.log("Requesting controller " + controllerName);

		if(typeof controllerName == 'undefined') {
			controllerName = config.controller._default;

			console.log("Requesting default controller " + controllerName);
		}

		fs.exists("./application/controllers/" + controllerName + ".js", function(exists) {
			if(exists) {
				console.log("Controller " + controllerName + " exists");
				console.log("Loading controller");

				var Controller = require('../../../application/controllers/' + controllerName);

				

				if(typeof method == 'undefined') {
					console.log("Loading default[index] function");
					method = 'index';
				}
				
				controller = new Controller(Loader, method);
				controller.load(request, response);
				console.log("Done");

			} else {
				console.log("Controller " + controllerName + " does not exist");
				response.send("Not Found!", 404);
			}
		});
	}
}

module.exports = Loader