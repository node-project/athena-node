/**
 * @author Egee Boy Gutierrez
 * @version 1.0
 */
var fs 		= require('fs'),
	debug 	= require('../../core/core').debug;

function Loader(){
	"user strict";

	var me = this;

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
							
							controller = new Controller(me);
							if(controller[method]) {
								controller[method](request, response);
							} else {
								debug("Method does not exist");
								response.send("Not Found!", 404);
							}
							
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
							
							controller = new Controller(me);
							if(controller[method]) {
								controller[method](request, response);
							} else {
								debug("Method does not exist");
								response.send("Not Found!", 404);
							}
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
					
					controller = new Controller(me);
					if(controller[method]) {
						controller[method](request, response);
					} else {
						debug("Method does not exist");
						response.send("Not Found!", 404);
					}
					debug("Done");

				} else {
					debug("Controller " + controllerName + " does not exist");
					response.send("Not Found!", 404);
				}
			});
		}
	}

	this.loadModel = function(modelName, callback){
		debug("Loading model: " + modelName);
		var directory = '';
		var model = '';

		var segments = modelName.split("/");

		debug("Fetching parsed segments " + segments);

		for(index = 0; index < segments.length - 2; index++){
			directory += segments[index] + "/";
		}

		//check if the second from the last segment is a directory
		if(segments.length >= 2) {
			fs.exists("./application/models/" + directory + segments[(segments.length - 2)] , function(dirExists){
				if(dirExists) {
					directory += segments[(segments.length - 2)] + "/";

					//if it is a directory, last segment should be a model
					//check to see if the last segment is a model
					
					fs.exists("./application/models/" + directory + segments[(segments.length - 1)] + ".js" , function(fileExist) {
						if(fileExist) {
							modelName = segments[(segments.length - 1)];

							debug("Model " + modelName + " exists");
							debug("Loading controller");

							var Model = require('../../../application/models/' + directory + modelName);

							
							model = new Model();
							callback(model);
							
							debug("Done");

						} else {
							debug("Controller " + controllerName + " does not exist");
							response.send("Not Found!", 404);
						}
					});
				}
			});
		} else {
			//check to see if the last segment is a model
					
			fs.exists("./application/models/" + directory + segments[(segments.length - 1)] + ".js" , function(fileExist) {
				if(fileExist) {
					modelName = segments[(segments.length - 1)];

					debug("Model " + modelName + " exists");
					debug("Loading model");

					var Model = require('../../../application/models/' + directory + modelName);

					
					model = new Model();
					callback(model);
					debug("Done");

				} else {
					debug("Model " + modelName + " does not exist");
					response.send("Not Found!", 404);
				}
			});
		}
	}

	this.loadView = function(viewName, data, response) {
		response.render(viewName, data);
	}
}

module.exports = Loader