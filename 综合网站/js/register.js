// 以下是判断手机号码部分
var a=false;
var b=false;
var c=false;
var d=false;
$(".tel-input").blur(function(){
	var reg=/^1\d{10}$/;
	var telInput=$(".tel-input").val();
	if(reg.test(telInput)){
		$("#tel-text").html("手机号符合要求");
		$("#tel-text").css("color","green");
		$(".tel-container").css("borderColor","#ccc");
		a=true;
	}else{
		$("#tel-text").html("输入有误，手机号码为以1开头的11位数字组成");
		$("#tel-text").css("color","red");
		$(".tel-container").css("borderColor","red");
		a=false;
	}
});
//以下是获取验证码部分
$("#getNumber").click(function(){
	b=true;
	$("#random-text").html("验证码正确");
	$(".random-leftContainer").css("borderColor","#ccc");
	$("#random-text").css("color","green");
	var nums=parseInt(Math.random()*1000000-1);
	$(".random-input").val(nums);
	var count=5;
	var timer=setInterval(time,1000);
	function time(){		
		$("#getNumber").attr("disabled","");
		$("#getNumber").css("background","#ccc");
		$("#getNumber").val(count+"秒后重发");
		count--;
		if(count<0){
			clearInterval(timer);
			$("#getNumber").attr("disabled",false);
			$("#getNumber").css("background","#ec868c");
			$("#getNumber").val("获取验证码");
		};
	};			
});
//以下是登录密码部分，密码由1到两个字母和3到6个数字组成
$(".psd-input").blur(function(){
	var reg=/[a-zA-Z]{1,2}\d{3,6}/;
	var psdInput=$(".psd-input").val();
	if(reg.test(psdInput)){
		c=true;
		$("#psd-text").html("密码符合要求");
		$("#psd-text").css("color","green");
		$(".psd-container").css("borderColor","#ccc");
	}else{
		c=false;
		$("#psd-text").html("不符合要求，密码由1-2个字母和3-6个数字组成");
		$("#psd-text").css("color","red");
		$(".psd-container").css("borderColor","red");
	}
});
$(".eyes").click(function(){
	if($("#eyebi").is(":hidden")){
		$(".psd-input").attr("type","password");
		$("#eyeing").hide();
		$("#eyebi").show();
	}else{
		$(".psd-input").attr("type","text");
		$("#eyeing").show();
		$("#eyebi").hide();
	}
});
//以下是确认密码部分
$(".Spsd-input").blur(function(){
	var SpsdInput=$(".Spsd-input").val();
	var psdInput=$(".psd-input").val();
	if(SpsdInput===psdInput){
		d=true;
		$("#Spsd-text").html("两次输入一致");
		$("#Spsd-text").css("color","green");
		$(".Spsd-container").css("borderColor","#ccc");
	}else{
		d=false;
		$("#Spsd-text").html("两次输入的密码不一致！");
		$("#Spsd-text").css("color","red");
		$(".Spsd-container").css("borderColor","red");
	}
});
$(".eyes2").click(function(){
	if($("#eyebi2").is(":hidden")){
		$(".Spsd-input").attr("type","password");
		$("#eyeing2").hide();
		$("#eyebi2").show();
	}else{
		$(".Spsd-input").attr("type","text");
		$("#eyeing2").show();
		$("#eyebi2").hide();
	}
});
//以下是同意协议并提交部分
$("#submit").click(function(){
	if(a&&b&&c&&d){
		window.open("login.html");
		var data=new Object;
		data.name=$(".tel-input").val();
		data.psd=$(".psd-input").val();
		var str = JSON.stringify(data);
		localStorage.setItem(data.name,str);
	};
});
$(".footer-left").click(function(){
	window.open("login.html");
});
