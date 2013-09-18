(function()
	{Ext.define('controller.DesktopIcon',{
		contextMenu:function(iconId){
			var cMenu = new Ext.menu.Menu({
				width			:200,
				menuBorderStyle : 'dotted',
				style			:{
					position		:'absolute',
					backgroundColor	:'#fff'
				},
				items			:[
					{
						text	: 'Open',
						handler	:function(){
							contextMenuhandler(iconId, 'context-menu-open');
						}
					},
					'-',
					{
						text: 'Cut',						
						handler	:function(){
							contextMenuhandler(iconId, 'context-menu-cut');
						}
					},
					{
						text: 'Copy',
						handler	:function(){
							contextMenuhandler(iconId, 'context-menu-copy');
						}
					},
					'-',
					{
						text: 'Delete',						
						handler	:function(){
							contextMenuhandler(iconId, 'context-menu-delete');
						}
					},
					{
						text: 'Rename',
						handler	:function(){
							contextMenuhandler(iconId, 'context-menu-rename');
						}
					},
					'-',
					{
						text: 'Properties',
						handler	:function(){
							contextMenuhandler(iconId, 'context-menu-properties');
						}
					},
				],
			});
			
			return cMenu;
		},	
		createDesktopIcon:function(desktopIcon){	
			
			Ext.require('view.' + desktopIcon.label);
		
			var panel = Ext.create('Ext.panel.Panel',{
				width:74,
				id:'desktop-icon-' + desktopIcon._id,
				baseCls:'desktop-icon',
				alias : 'Alias',
				pageX:parseFloat(desktopIcon.position.x),
				pageY:parseFloat(desktopIcon.position.y),
				floating:true,
				shadow:false,
				renderTo:Ext.get('maincontentcontainer'),
				html:this.desktopIconTemplate(desktopIcon.label,desktopIcon.image),
				
				listeners : {
					dblclick :{
						fn : function(e,t) {
							var window = Ext.create('view.' + desktopIcon.label);
							window.show();
							console.log('double click ' + desktopIcon.label );
						} ,
						element: 'el' ,
						scope: this
					}
				}
				
			});
			
			Ext.fly('desktop-icon-' + desktopIcon._id).on({
				'contextmenu':function(e){
					this.contextMenu('desktop-icon-' + desktopIcon._id).showAt(e.getXY());
				},
				scope:this,
				preventDefault:true,
			});
		},
		
		desktopIconTemplate:function(label,icon){
			var html = '<div class="section group d-icon"> <div class="col span_2_of_2 d-icon"> <img class="icon d-icon" src="/image' + icon + '"/> </div> </div> <div class="section group d-icon"> <div class="col span_2_of_2 label d-icon"> ' + label + ' </div> </div>';
			
			return html;
		},
	});

	function contextMenuhandler(iconId, menuId){
		console.log("icon id: " + iconId);
		console.log("menu id: " + menuId);
	}
	
})();