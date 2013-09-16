(function(){
	Ext.define('view.Tickets',{
		extend		: 'Ext.window.Window' ,
		title		: 'Tickets' ,
		id 			: 'win-tickets' ,
		iconCls		: 'ticket-icon' ,
		
		initComponent : function(){
			console.log('show tickets window');
			this.superclass.initComponent.call(this);
		} ,
		
		resizable 	: true,
		layout 		: 'fit' ,
		model 		: true,
		minimizable	: true,
		maximizable : true,
		closeAction : 'destroy',
		maximized	: true,
		maxHeight	: Config.screenHeight - 38 ,
		minHeight	: 500 ,
		minWidth 	: 500
	});
})();