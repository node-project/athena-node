/**
 * @author Egee Boy Gutierrez
 * @description stores the request handles
 */
var ContentHandler = require("./contentHandler");

var contentHandler = new ContentHandler();

module.exports = exports = {
	"index" 	: contentHandler.index,
	"upload" 	: contentHandler.upload,
	"notFound"	: contentHandler.notFound
};