(function(){
	Ext.define('controller.StartMenu',{
		extend:'Ext.menu.Menu',
		width:200,
		margin: '0 0 0 0',
		floating: false,  // usually you want this set to True (default)
		renderTo: Ext.get('start_menu_items'),  // usually rendered by it's containing component
		cls:"t_bar",
		items: [{
				text: 'Cut',	
				cls:"t_bar",
				menu:{
					xtype:'menu',
					cls:"t_bar",
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
				cls:"t_bar",
				handler	:function(){
					contextMenuhandler(iconId, 'context-menu-copy');
				}
			},
			{
				text: 'Copy',
				cls:"t_bar",
				handler	:function(){
					contextMenuhandler(iconId, 'context-menu-copy');
				}
			},
			{
				text: 'Copy',
				cls:"t_bar",
				handler	:function(){
					contextMenuhandler(iconId, 'context-menu-copy');
				}
			},
		],						
	});
})();