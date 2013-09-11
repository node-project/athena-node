/**
 * @author Egee Boy Gutierrez
 * @description stores the request handles
 */
var requestHandlers = require("./requestHandlers");

module.exports = exports = {
	"index" 	: requestHandlers.index,
	"upload" 	: requestHandlers.upload,
	"notFound"	: requestHandlers.notFound
};