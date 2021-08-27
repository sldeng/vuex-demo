<script>
	jQuery(window).bind('message', (e) => {
	  WfForm.changeFieldValue("field15334", {value:e.originalEvent.data})
	});
	var popup = document.getElementById('childFrame').contentWindow;
	var flagSave = false;
	var flagSubmit  =false
	//违规案件录入
	console.log(flagSave,'flagSave')
	// 发送消息
	jQuery().ready(function(){
	  // 保存
	  var paramsSave = 	{ require:true,nodeType:'EDITCASEJS',action:'saveForm',type:'save'};
	  var paramsSubmit= 	{ require:true,nodeTyep:'EDITCASEJS',action:'submitForm',type:'submit'}
	  WfForm.registerCheckEvent(WfForm.OPER_SAVE, function(callback){
	    console.log('1111111111','test')
		console.log('paramsSave',paramsSave)
		if(flagSave){
			console.log('flagSave成功',flagSave)
			callback()
		}else{
			popup.postMessage(JSON.stringify(paramsSave), '*');
		}
		
       
	  });
	  //提交
	WfForm.registerCheckEvent(WfForm.OPER_SUBMIT, function(callback){
	  	popup.postMessage(JSON.stringify(paramsSubmit), '*');
		    flagSubmit&&callback()
	  });
	})
	  
  window.addEventListener("message", receiveMessage, false);
	// 保存 提交
	function receiveMessage(event){
	 
	  if( !event.origin){
	    return
	  }
	  var data = JSON.parse(event.data) ;
	  console.log('保存回调',data)
	  if(data.action==='save'&&data.status=='success'){
	    flagSave = true;
	    console.log(1111,'true')
	    $('button[title="保存"]')[0].click()
	  }else{
	     console.log(2222,'false')
	    flagSave = false;
	  }
	  if(data.action==='submit'&&data.status=='success'){
	    flagSubmit = true;
	    $('button[title="提交"]')[0].click()
	  }else{
	    flagSubmit = false;
	  }
	}
  
  </script>