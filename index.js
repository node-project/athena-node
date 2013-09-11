var server	= require("./server"),
	router 	= require("./router"),
	handle 	= require("./handle");

server.start(handle, router.route);