Ext.require('controller.StartMenu');
var startMenuOpen = 0;
var startMenu;

Ext.onReady(function(){
	startMenu = Ext.create('controller.StartMenu');
	startMenu.hide();
	
	Ext.getBody().on({
		'click':function(e,target){
			if(e.target.classList.contains('start-menu')) {
				if(startMenuOpen == 0) {
					startMenu.show();
					startMenuOpen = 1 ;
				} else {
					startMenuOpen = 0;
					startMenu.hide();
				}
					
			} else {
				startMenuOpen = 0;
				startMenu.hide();
			}
		}
	});
});