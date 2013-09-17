/**
 * @author Egee Boy Gutierrez
 * @version  1.0
 * @class  Model DB Handler
 */

var config 	= require('../../../application/config/config'),
	debug 	= require('../../core/core').debug;

function Model(dbclient, schemaObj, modelName) {

	var schema = dbclient.Schema(schemaObj);
	var model;

	try {
		model = dbclient.model(modelName, schema);
	} catch(error) {
		model = dbclient.model(modelName);
	}


	return model;
}

module.exports = Model;