/**
 * @author Egee Boy Gutierrez
 * @version 1.0
 * @class Start Controller
 */

var debug 	= require('../../system/core/core').debug;
var _ = require('underscore');

function DesktopIcons(loader) {
	"use strict";

	var _method = {
		"getDesktopIcons"		:  function(request, response){
				var username = request.body.username,
					password = request.body.password;

				var model = loader.loadModel("DesktopIcons", function(model) {
					model["getDesktopIcons"](request.session.user_id, function(err, data){
						if(err) throw err;

						response.writeHead(200, {"Content-Type":"application/json"});
						response.end(JSON.stringify(data));
					});

					
				});

		}
	};

	return _method;
}

module.exports = DesktopIcons;