// 以下是登录名区域的判断
var userName=false;
var passWord=false;
var checkWord=false;
$(".username-input").blur(function(){
	var username=$(".username-input").val();
	if(localStorage.getItem(username)){
		var str = localStorage.getItem(username);
		var data = JSON.parse(str);
		var result  = data.name;
		var boolean = false;
		if( result == username ) {
			boolean = true;
		}
	}
	if(boolean==true){
    	$("#username-text").html("用户名正确");
    	$("#username-text").css("color","green");
    	$(".username-container").css("borderColor","#ccc");
    	userName=true;
    }else{
    	$("#username-text").html("用户名不存在，请重新输入！");
    	$("#username-text").css("color","red");
    	$(".username-container").css("borderColor","red");
    	userName=false;
    };
});
// 以下是登陆密码区域的判断
$(".psd-input").blur(function(){
	var username=$(".username-input").val();
	var password=$(".psd-input").val()
		var str = localStorage.getItem(username);
		var data = JSON.parse(str);
		var result  = data.psd;
		var boolean = false;
		if( result == password ) {
			boolean = true;
		}
	if(boolean==true){
    	$("#psd-text").html("密码正确");
    	$("#psd-text").css("color","green");
    	$(".psd-container").css("borderColor","#ccc");
    	passWord=true;
    }else{
    	$("#psd-text").html("密码错误，请重新输入！");
    	$("#psd-text").css("color","red");
    	$(".psd-container").css("borderColor","red");
    	passWord=false;
    };
});
$(".eyes").click(function(){
	if($("#bi").is(":hidden")){
		$("#bi").show();
		$("#zheng").hide();
		$(".psd-input").attr("type","password");
	}else{
		$("#bi").hide();
		$("#zheng").show();
		$(".psd-input").attr("type","text");
	}
});
// 以下是随机验证码区域
function changeNum(){
	var nums=["A","B",'2',"D",'4',"F","G",'5',"H",'9',"I","J",'1','L',"M",'6',"K",'3','4','8'];
	var newNum=[];
	for(var i=1;i<=4;i++){	
		var num=parseInt(Math.random()*20);
		newNum[newNum.length]=nums[num];
    };   
    $("#random-text").html(newNum[0]+newNum[1]+newNum[2]+newNum[3]);
    checkRandom();
}
$("#random-left1").blur(function(){
	checkRandom();
});
function checkRandom(){
	var set=$("#random-left1").val();
	var show=$("#random-text").html();
	if(set==show){
		$("#underRandom").html("验证码正确");
		$("#underRandom").css("color","green");
		$(".random-left-container").css("borderColor","#ccc");
		checkWord=true;
	}else{
		$("#underRandom").html("验证码输入不正确，请重新输入");
		$("#underRandom").css("color","red");
		$(".random-left-container").css("borderColor","red");
		checkWord=false;
	}
};
var logined = new Object();
//以下是登陆按钮区域
$("#submit").click(function(){
	if(userName&&passWord&&checkWord){		
		loginedname = $(".username-input").val();	
		window.open("website.html?userId=" + loginedname);
	}
});
//以下是footer部分
$(".footer-left").click(function(){
	window.open("register.html");
});


