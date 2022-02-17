$(function(){
    $(window).resize();
    
    //해더가 위에서 부터 얼마 떨어져 있는지 
    var headerTop =$("header").offset().top;
    console.log("해더가 위에서 부터 떨어져있는 거리는?"+headerTop)
    
    var headerH=$("header").height(); 
    console.log("해더의 높이는?"+headerH);
    var headerAll= headerH + headerTop;

    $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    console.log("현재스크롤된 거리는?"+scroll);
    if(  scroll > 1300){
       $("#scroll").slideDown(500);
       $("header").slideUp(300);
       
    }else{
        $("#scroll").slideUp(300);
        $("header").slideDown(500);;
       
      
    }
 });
 $("nav .mainMenu li").mouseenter(function(){
    $(this).find(".submenu").stop().slideDown();
   
   });
   $("nav .mainMenu li").mouseleave(function(){
     $(this).find(".submenu").stop().slideUp();
   });
   

 var windowHeight=$(window).height();
 $("section").css("height", windowHeight); 

 $(window).resize(function(){ 
     var windowHeight=$(window).height();
     $("section").css("height", windowHeight);
     });

 var wd = $(window);
 $("section[data-type='background']").each(function(){
    var bg=$("section[data-type='background']");
    wd.scroll(function(){
        $(".current").animate({"top":"500px"},3000)
    });

});




   });