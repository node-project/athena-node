var exec 		= require('child_process').exec;
var querystring = require('querystring');

function index(request, response) {

	console.log("Routing " + request.url + " to index");
	console.log("Rendering index.html");

	response.render('index',{title:"Index"});
	
	console.log("Rendering successful");	
}

function upload(request, response) {
	console.log("Request handler 'upload' was called.");

	response.send("You typed : " + request.body.text, 202)
}

function notFound(request, response) {
	console.log("Request handler 'notFound' was called.");
	response.send("Not Found!", 404);
}

exports.index 		= index;
exports.upload 		= upload;
exports.notFound 	= notFound;