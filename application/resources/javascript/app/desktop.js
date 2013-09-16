Ext.require('controller.Desktop');
Ext.require('controller.DesktopIcon');


var desktop = Ext.create('controller.Desktop');
var cMenu;

Ext.onReady(function(){

	Ext.Ajax.on('beforerequest', function(){console.log('show spinner')}, this);
	Ext.Ajax.on('requestcomplete', function(){console.log('hide spinner')}, this);
	Ext.Ajax.on('requestexception', function(){console.log('hide spinner')}, this);

	Ext.getBody().on({
		'contextmenu':function(e,target){
		e.preventDefault();
			
			if(
				e.target.classList.contains("d-icon") ||
				e.target.classList.contains("t_bar") ||
				e.target.classList.contains("x-menu-body") ||
				e.target.classList.contains("x-menu-item-text") ||
				e.target.classList.contains("x-menu-item-link") ||
				e.target.classList.contains("x-menu-item-icon")
			) {
			} else {
				desktop.contextMenu().showAt(e.getXY());
			}
		},
		scope:this,
		preventDefault:true,
	});
	
	desktop.displayDesktopIcons();
	
	//desktop.setDesktopIconsDraggable();
	
	
});
