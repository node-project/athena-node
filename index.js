var server	= require("./system/server"),
	router 	= require("./system/lib/router/router");

server.start(router.routeController);