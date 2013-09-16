(function(){
	Ext.define('view.Chat',{
		extend		: 'Ext.window.Window' ,
		title		: 'Chat' ,
		id 			: 'win-chat' ,
		iconCls		: 'chat-icon' ,
		
		initComponent : function(){
			console.log('show chat window');
			this.superclass.initComponent.call(this);
		} ,
		
		resizable 	: true,
		layout 		: 'fit' ,
		model 		: true,
		minimizable	: true,
		maximizable : true,
		closeAction : 'destroy',
		maxHeight	: Config.screenHeight - 38 ,
		maxWidth	: 300 ,
		minHeight	: 500 ,
		minWidth 	: 300
	});
})();