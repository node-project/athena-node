(function(){
	Ext.define('controller.Taskbar',{
		displaySystemTime:function(){
			var task = {
				run:function(){					
					Ext.fly('system_time').update(new Date().format('shortTime'));									
				},
				interval:1000
			};
			
			var runner = new Ext.util.TaskRunner();
			runner.start(task);					
		},
		displaySystemDate:function(){
			Ext.fly('system_date').update(new Date().format('m/dd/yyyy'));
		}
	});
})();