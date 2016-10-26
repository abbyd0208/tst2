
//側選單=========================================

$(function(){
	var btnState = 0;
	
	//覆蓋
	$(".side").after( '<div class="side_overlap" style="width:100%; height:100%; background:#000; margin-left:200px; position:absolute; top:0px; left:0px; z-index:50; display:none;"></div>' );
	
	//側選單開
	function fnNav_1Open( event ){
		btnState = 1;
		$(".side").show(100);
		$(".wrapper").css({"overflow":"hidden"});
		$(".header").animate({left:200},100);
		$(".kv").animate({left:200},100);
		$(".container").animate({left:200, overflow:"hidden"},100, function(){
			$(".side_overlap").show().css({"opacity":"0.2"}).animate({"opacity":"0.5"});
		});
		$(".btn_switch").addClass("active");
		event.stopPropagation(); // 阻止事件冒泡
	};
	
	//側選單關
	function fnNav_1Close( event ){
		btnState = 0;
		$(".side").hide(100);
		$(".side_overlap").hide();
		$(".wrapper").css({overflow:"visible"});	
		$(".header").animate({left:0},100);
		$(".kv").animate({left:0},100);
		$(".container").animate({left:0, overflow:"visible"},100);
		$(".btn_switch").removeClass("active");
		event.stopPropagation(); // 阻止事件冒泡 
	};
	
	//點開按鈕 fn 選單開
	$(".btn_switch").on("click", fnNav_1Open);
		
	//點side_overlap fn 選單關
	$(".side_overlap").on("click", function(){
		if( btnState == 1){fnNav_1Close();}
	});
	
	//手機旋轉 fn 選單關
	$(window).on("orientationchange", function(){
		if( btnState == 1){fnNav_1Close();}
	});
});



//選單吸住======================================================

$(function(){

	
	$(".header").after($(".nav_1").clone());
	$(".nav_1").eq(0).addClass("nav_1_ori");
	$(".nav_1").eq(1).addClass("nav_1_clone");
	
	
	
	var iNav_1Point = parseInt( $(".nav_1_ori").offset().top + $(".nav_1_ori").outerHeight());
	var iWinScrollT;
	var oScrollTimer = null;
	
	
	$(window).on("scroll", $.throttle(1000/15, function(){
			iWinScrollT = $(window).scrollTop();
			if(iWinScrollT>iNav_1Point){
				$(".nav_1_ori").css({"visibility":"hidden"})
				$(".nav_1_clone").css({"visibility":"visible","top":"0px"})
			}else{
				$(".nav_1_ori").css({"visibility":"visible"})
				$(".nav_1_clone").css({"top":"-85px"})
			}
	}));

	$(window).trigger('scroll');
	
});


//讓捲軸用動畫的方式移動到到指定的位罝======================
$(function(){
	
	//側選單關
	function fnNav_1Close(){
		$(".side").hide(100);
		$(".side_overlap").hide();
		$(".wrapper").css({overflow:"visible"});	
		$(".header").animate({left:0},100);
		$(".kv").animate({left:0},100);
		$(".container").animate({left:0, overflow:"visible"},100);
		$(".btn_switch").removeClass("active");
	};
	
	
	
	
	 $(".scrollgo").click(function(){
		  var sGoTo = $(this).attr("rel"); //取得目標物的id class
		 
		  var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		  
		  $body.animate({
		   scrollTop: $(sGoTo).offset().top-230
		  }, 1000);
		  
		  fnNav_1Close();
		  
		  return false;
	 });
});

//服務項目視差效果
$(function(){
            
		$('.bg').parallax("left", 0.4);
		$('.bg_2').parallax("right", 0.4);

});




//客戶案例========================================================
$(function(){
	
	
	//旋轉木馬選單
	var myNav1 = $('.customer .run .inner').bxSlider({
		//slideWidth:800,//單按鈕寬
		auto: false, //輪播
		pause : 3000, //停留時間
		autoHover : true,//懸停
		controls : false,//隱藏外掛上下頁
		pager : false,//隱藏外掛分頁
		oneToOneTouch : false,//false不隨著手指滑狀 
		swipeThreshold : 20, //滑動距離
		moveSlides : 1,
		minSlides: 1,
		maxSlides:1
	});
	
	
	
	//下一張
	$(".customer .operate .next").click(function(e){
		e.preventDefault();
		myNav1.goToNextSlide();
	});
	
	//下一張
	$(".customer .operate .prev").click(function(e){
		e.preventDefault();
		myNav1.goToPrevSlide();
	});
	
	
});


//gototop
$(function(){
	
	var iScrollPointA = 0;  //回到某一個點
	var iScrollPointB = 700;  //滾到某一個點
	
	var sGototopHtml = '<div class="gototop">TOP</div>';

	$("body").append(sGototopHtml);
	$(".gototop").hide();
	
	$(window).scroll(function(){
		if( $(window).scrollTop() > iScrollPointB) {
			$(".gototop").show();	
		} else {
			$(".gototop").hide();	
		};
	});
	
	
	// 讓捲軸用動畫的方式移動到到指定id位罝
	$(".gototop").click(function(){
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({scrollTop: iScrollPointA}, 1000);
		return false;
	});
	
});