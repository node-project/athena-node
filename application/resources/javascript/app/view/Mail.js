(function(){
	Ext.define('view.Mail',{
		extend		: 'Ext.window.Window' ,
		title		: 'Mail' ,
		id 			: 'win-mail' ,
		iconCls		: 'mail-icon' ,
		
		initComponent : function(){
			console.log('show mail window');
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