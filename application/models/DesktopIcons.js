/**
 * @author Egee Boy Gutierrez
 * @version 1.0
 * @class Start Controller
 */

var debug 		= require('../../system/core/core').debug,
	model;

function DesktopIcons(db) {
	"use strict";


	var model = db.collection("users");

	var _method = {
		"getDesktopIcons"		:  function(user_id, callback){
			model.findOne({_id : user_id},{"_id" : 0, "desktop_icons" : 1}, callback);
		},
		"setDesktopIconPosition" : function(user_id, icon_id, position, callback) {
			console.log("user_id: " + user_id);
			console.log("icon_id: " + icon_id);
			console.log("x: " + position);

			model.update(
				{ "_id" : user_id, "desktop_icons._id" : parseInt(icon_id)},
				{ "$set" : { "desktop_icons.$.position" : position}},
				{ "multi" : true}, 
				callback
			);
		}
	};

	return _method;
}

module.exports = DesktopIcons;