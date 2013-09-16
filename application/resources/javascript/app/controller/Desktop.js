(function(){

	var desktopIcon;
	
	Ext.define('controller.Desktop',{		
		contextMenu:function(){
			var cMenu = new Ext.menu.Menu({
				width			:200,
				menuBorderStyle : 'dotted',
				style			:{
					position		:'absolute',
					backgroundColor	:'#fff'
				},
				items			:[
					{
						text: 'Cut',	
						menu:{
							xtype:'menu',
							items:[
								{text:'Cut sdub menu'},
								{text:'Cut sdub menu 2'},
							],
						},
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
				],
			});
			
			return cMenu;
		}, 
		
		getDesktopIcons:function(){
			Config.screenHeight = Ext.getBody().getViewSize().height;
			Config.screenWidth = Ext.getBody().getViewSize().width;
			// y offset = 12
			// x offset = 0;
			
			//var icons = ajaxProxy(Config.path + '/index.php/Desktop_Icon/getDesktopIcons');
			//var desktopIcons;
			
			Ext.Ajax.request({
				url : Config.path + '/index.php/Desktop_Icon/getDesktopIcons',
				failure : function(){
					console.log("Failed");
				},
				callback: function(opt, success, response){
					desktopIcons = Ext.JSON.decode(response.responseText).results;
					
					var numOfDesktopIcons = desktopIcons.length;
			
					for(icon in desktopIcons){
						var desktopIcon = Ext.create('controller.DesktopIcon');
						desktopIcon.createDesktopIcon(desktopIcons[icon]);
					}
					
					setDesktopIconsDraggable();
				}
			});
			
		},
		
		displayDesktopIcons:function(){
			
			this.getDesktopIcons();					
			
		},		
	});

	function contextMenuhandler(menuId){
		console.log("menu id: " + menuId);
	}
	
	function setDesktopIconsDraggable (){
		//object used to implement drag behaviours
		var overrides = {
			b4StartDrag: function(){
				if (!this.el) {
					this.el = Ext.get(this.getEl());
				}
				
				this.originalXY = this.el.getXY();
			},
			onInvalidDrop : function(){
				this.invalidDrop = true;
			},
			endDrag : function(){
				if(this.invalidDrop === true){
					this.el.removeCls('dropOK');
					
					var animCfgObj = {
						easing 		: 'elasticOut',
						duration	: 1,
						scope 		: this,
						callback 	: function(){
							this.el.dom.style.position = '';
						},
					};
					
					this.el.moveTo(this.originalXY[0],this.originalXY[1],animCfgObj);
					delete this.invalidDrop;
				}
				
				var desktopIconId = this.el.id;
				desktopIconId = desktopIconId.replace('desktop-icon-','');
				
				var x = this.el.getXY()[0],
					y = this.el.getXY()[1];
				
				console.log(Config.path);
				
				Ext.Ajax.request({
					url : Config.path + '/index.php/Desktop_Icon/setDesktopIconPosition?diid=' + desktopIconId + '&x=' + x + '&y=' + y		
				});
			},
			onDragDrop : function(evtObj, targetElId){
				var dropEl = Ext.get(targetElId);
				
				
				dropEl.appendChild(this.el);
					
				this.onDragOut(evtObj, targetElId);
					
					
			},			
		};
		
		//configure desktop icons to be draggable
		var desktopIcons = Ext.get('maincontentcontainer').query('div.desktop-icon');
		
		
		
		
		Ext.each(desktopIcons, function(el){
			
			
			var dd = Ext.create('Ext.dd.DD',el,'desktopIconsDDGroup',{
				isTarget:false,
			});
			
			//apply overrides object to newly created instance of DD
			Ext.apply(dd, overrides);
		});
		
		var mainContainerDDTarget = Ext.create('Ext.dd.DDTarget','maincontentcontainer','desktopIconsDDGroup');
	}
	
})();