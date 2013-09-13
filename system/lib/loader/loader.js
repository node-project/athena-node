/**
 * @author Egee Boy Gutierrez
 * @version 1.0
 */
var fs 		= require('fs'),
	config 	= require('../../../application/config/config'),
	debug 	= require('../../core/core').debug;

function Loader(){
	"user strict";

	this.loadController = function(request, response) {

		var segments = request.segments;
		var directory = '';

		var controllerName 	= "";
		var method			= "";

		debug("Fetching parsed segments " + segments);

		for(index = 0; index < segments.length - 2; index++){
			directory += segments[index] + "/";
		}

		//check if the second from the last segment is a directory
		if(segments.length >= 2) {
			fs.exists("./application/controllers/" + directory + segments[(segments.length - 2)] , function(dirExists){
				if(dirExists) {
					directory += segments[(segments.length - 2)] + "/";

					//if it is a directory, last segment should be a controller
					//check to see if the last segment is a controller
					
					fs.exists("./application/controllers/" + directory + segments[(segments.length - 1)] + ".js" , function(fileExist) {
						if(fileExist) {
							controllerName = segments[(segments.length - 1)];
							method = "index";

							debug("Controller " + controllerName + " exists");
							debug("Loading controller");

							var Controller = require('../../../application/controllers/' + directory + controllerName);

							

							if(typeof method == 'undefined') {
								debug("Loading default[index] function");
								method = 'index';
							}
							
							controller = new Controller(Loader, method);
							controller.load(request, response);
							debug("Done");

						} else {
							debug("Controller " + controllerName + " does not exist");
							response.send("Not Found!", 404);
						}
					});
				} else {
					//check if second from the last segment is a controller
					fs.exists("./application/controllers/" + directory + segments[(segments.length - 2)] + ".js" , function(fileExist) {
						if(fileExist) {
							controllerName = segments[(segments.length - 2)];
							method = segments[(segments.length - 1)];

							debug("Controller " + controllerName + " exists");
							debug("Loading controller");

							var Controller = require('../../../application/controllers/' + directory + controllerName);

							

							if(typeof method == 'undefined') {
								debug("Loading default[index] function");
								method = 'index';
							}
							
							controller = new Controller(Loader, method);
							controller.load(request, response);
							debug("Done");
						} else {
							debug("Controller " + controllerName + " does not exist");
							response.send("Not Found!", 404);
						}
					});
				}
			});
		} else {
			//check to see if the last segment is a controller
					
			fs.exists("./application/controllers/" + directory + segments[(segments.length - 1)] + ".js" , function(fileExist) {
				if(fileExist) {
					controllerName = segments[(segments.length - 1)];
					method = "index";

					debug("Controller " + controllerName + " exists");
					debug("Loading controller");

					var Controller = require('../../../application/controllers/' + controllerName);

					

					if(typeof method == 'undefined') {
						debug("Loading default[index] function");
						method = 'index';
					}
					
					controller = new Controller(Loader, method);
					controller.load(request, response);
					debug("Done");

				} else {
					debug("Controller " + controllerName + " does not exist");
					response.send("Not Found!", 404);
				}
			});
		}
	}
}

module.exports = Loader