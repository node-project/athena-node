var server	= require("./server"),
	router 	= require("./router"),
	handle 	= require("./requestHandler");

server.start(handle, router.route);