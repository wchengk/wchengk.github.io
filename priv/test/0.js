//ajax提交留言
function submsg(){
  var url='/?message/';
  
  $.ajax({
    type: 'POST',
    url: url,
    dataType: 'json',
    data: {
    	contacts: '0',
    	mobile: '0',
    	content: '0',
    	checkcode: '0'
    },
    success: function (response, status) {
      if(response.code){
		 alert("谢谢您的反馈，我们会尽快联系您！");
      }else{ 
    	 if(response.tourl!=""){
    		 if(confirm(response.data+'是否立即跳转登录？')){
    			 location.href=response.tourl; 
   	   	     }
    	 }
      }
    },
    error:function(xhr,status,error){
      alert('返回数据异常！');
    }
  });
  return false;
}
submsg();