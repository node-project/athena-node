/**
 * @author Egee Boy Gutierrez
 * @version 1.0
 * @class Start Controller
 */

var debug 	= require('../../system/core/core').debug;
var _ = require('underscore');

function Users(loader) {
	"use strict";

	var _method = {
		"login"		:  function(request, response){
				var username = request.body.username,
					password = request.body.password;

				var model = loader.loadModel("Users", function(model) {
				model["login"](username, password, function(err, data){
					if(err) throw err;

					if(!_.isEmpty(data)){
						request.session.user_id = data._id;
					}

					debug('Redirecting...');
					response.writeHead(301,
					  {Location: '/Start'}
					);
					response.end();
				});

				
			});

		},
		"logout" : function(request, response){
			request.session.destroy();

			debug('Redirecting...');
			response.writeHead(301,
			  {Location: '/Start'}
			);
			response.end();
		}
	};

	return _method;
}

module.exports = Users;