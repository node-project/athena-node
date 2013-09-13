/**
 * @author Egee Boy Gutierrez
 * @version 1.0
 * @class URI handles the URI request parameters
 */
var debug 		= require('../../core/core').debug,
	fs 			= require('fs'),
	appConfig 	= require("../../../application/config/config");

function URI() {
	this.parseURItoSegments = function(request, response, next) {
		
		var segments = [];		

		debug("========================================================");

		if(request.params == "favicon.ico") {

			var maxAge = 86400000;
			

			path = appConfig.favicon;

			fs.readFile("./application/resources/" + path, function(err, buf){
	        	if (err) return next(err);
	          	icon = {
	            	headers: {
	                	'Content-Type': 'image/x-icon',
	                	'Content-Length': buf.length,
	                	'Cache-Control': 'public, max-age=' + (maxAge / 1000)
	            	},
	            	body: buf
	          	};
	          	response.writeHead(200, icon.headers);
	          	response.end(icon.body);
	        });

		} else {

			var reqParams = request.params.toString();

			debug("Request params : " + reqParams);
			debug("Request params length : " + reqParams.length);

			if(reqParams.length <=1) {
				debug("Request params empty.");
				debug("Loading default controller from config");

				controller = appConfig.controller._default;

				if(controller.length == 0) {
					debug("Default controller not set");

	          		response.send("Default controller not set.", 500);
	          		
	          		debug("Done\n");
				} else {
					debug("Setting default controller");
					request.segments = [controller];
					next();	
				}
			} else {
				debug("Getting request parameters: " + reqParams);
				debug("Parsing request to segments");

				var segments = reqParams.split("/");
				request.segments = segments;

				debug("Done parsing request parameters to segments");
				next();	
			}
		}
		
	}
}

module.exports = URI;