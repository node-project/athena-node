Ext.define('controller.Login',{
	centerLoginPanel:function(){
		var screenHeight = Ext.getBody().getViewSize().height;
		var screenWidth = Ext.getBody().getViewSize().width;
		
		Ext.get('login_container').setStyle({
			display:'block',
		});
		
		var loginPanelHeight = Ext.get('login_container').getHeight();
		var loginPanelWidth = Ext.get('login_container').getWidth();
		
		var top = (screenHeight - loginPanelHeight) / 2;
		var left = (screenWidth - loginPanelWidth) / 2;
		
		Ext.get('login_container').setStyle({
			top : top + 'px',
			left : left + 'px',
			
		});

		loginPanelWidth = Ext.get('login_logo_container').getWidth();

		left = (screenWidth - loginPanelWidth)/2;

		Ext.get('login_logo_container').setStyle({
			left : left + 'px'
			
		});
	}
});