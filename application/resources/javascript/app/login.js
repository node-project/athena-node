Ext.require('controller.Login');

var login = Ext.create('controller.Login');

Ext.onReady(function(){
	Ext.application({
		name: 'AM',

		appFolder: 'controller',

		launch: function() {
			login.centerLoginPanel();
		}
	});
});

window.onresize = function(){
	login.centerLoginPanel();
};
