/**
 * @author Egee Boy Gutierrez
 * @version 1.0
 * @class Start Controller
 */

var debug 		= require('../../system/core/core').debug,
	Model		= require('../../system/lib/model/Model'),
	model;

function DesktopIcons(dbclient) {
	"use strict";

	var schema = {	
		_id 		: String,
		password 	: String ,
		desktop_icons:  [
			{
				_id 	:Number,
				label 	:String,
				image 	:String,
				position : {
					x : Number,
					y : Number
				}
			}
		]
	};

	var modelName = "users";

	model = new Model(dbclient, schema, modelName);

	var test = new model({
		name 	: "Egee Boy",
		lastname: "Gutierrez"
	});

	var _method = {
		"getDesktopIcons"		:  function(user_id, callback){
			model.findOne({_id : user_id},{"_id" : 0, "desktop_icons" : 1}, callback);
		},
		"setDesktopIconPosition" : function(user_id, icon_id, position, callback) {
			console.log("icon_id: " + icon_id);
			console.log("x: " + position.x);
			console.log("y: " + position.y);
			
			var condition = { _id : user_id , "desktop_icons._id" : icon_id};
			var update = {$set : {
				"desktop_icons.position" : position
			}};

			//model.update(condition, update, callback);
		}
	};

	return _method;
}

module.exports = DesktopIcons;