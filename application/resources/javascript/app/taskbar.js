Ext.require('controller.Taskbar');

Ext.onReady(function(){
	var taskBar = Ext.create('controller.Taskbar');
	taskBar.displaySystemTime();
	taskBar.displaySystemDate();
});