//以下是全局swiper
var mySwiper=new Swiper(".swiper-container",{
	pagination:".swiper-pagination",
	paginationClickable:true,
	direction:"vertical",
	// effect:"cube",
	onInit:function(swiper){
		swiperAnimateCache(swiper); //隐藏动画元素 
    	swiperAnimate(swiper); //初始化完成开始动画
	},
	onSlideChangeEnd:function(swiper){
		swiperAnimate(swiper); //初始化完成开始动画
		$(".nav").css("opacity","1");	
		if(swiper.activeIndex == 1){
			$(".hands").css("animation","handIn 1s linear forwards");
			$(".table").css("animation","tableIn 1s linear forwards");
		}
		else{				   	
			$(".hands").css("animation"," ");
			$(".table").css("animation"," ");
		}					
	},
	onSlideChangeStart:function(swiper){
		swiperAnimate(swiper);
		$(".nav").css("opacity","0.05");
	}
});
// 以下是头部导航部分
$(".register").mouseover(function(){
	$(".register").css("color","blue");
});
$(".register").mouseout(function(){
	$(".register").css("color","#fff");
});
$(".register").click(function(){
	window.open("register.html");
});
$(".login-right").mouseover(function(){
	$(".login-right").css("color","blue");
});
$(".login-right").mouseout(function(){
	$(".login-right").css("color","#fff");
});
$(".login-right").click(function(){
	window.open("login.html");
});
$("ul>li").mouseover(function(){
	$(this).css("color","blue");
});
$("ul>li").mouseout(function(){
	$(this).css("color","#fff");
});
(function checkUserId () {
	var string =  window.location.search;
	if(string){
		string = string.slice(1);
		var arr = string.split("=");
		var username = arr[1];
		if(localStorage.getItem(username)&& JSON.parse(localStorage.getItem(username)).psd){
			$('#loginName').html(username);
			$('#noLogin').css({
				display:"none"
			});
			$('#username').css({
				display:"block",
				fontSize : "12px"
			})		
		}
	}
})()
