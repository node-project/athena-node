var exec 		= require('child_process').exec;
var querystring = require('querystring');

function ContentHandler() {
	"use strict";

	this.index = function(request, response){
		console.log("Routing " + request.url + " to index");
		console.log("Rendering index.html");

		response.render('index',{title:"Index"});
		
		console.log("Rendering successful");
	};

	this.upload = function(request, response) {
		console.log("Request handler 'upload' was called.");

		response.send("You typed : " + request.body.text, 202)
	};

	this.notFound = function(request, response) {
		console.log("Request handler 'notFound' was called.");
		response.send("Not Found!", 404);
	}
}

module.exports = ContentHandler;