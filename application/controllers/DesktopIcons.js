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

		},
		"setDesktopIconPosition" : function(request, response) {
			var x = request.query.x;
			var y = request.query.y;
			var icon_id = request.query.diid;

			var position = { x : parseInt(x), y : parseInt(y)};

			

			var model = loader.loadModel("DesktopIcons", function(model){
				model["setDesktopIconPosition"]( request.session.user_id, icon_id, position, function(err, numAffected, raw) {
					if(err) throw err;
					debug(JSON.stringify(raw));
					response.writeHead(200, {"Content-Type":"text/plain"});
					response.end(JSON.stringify(raw));
				});
			});
		}
	};

	return _method;
}

module.exports = DesktopIcons;