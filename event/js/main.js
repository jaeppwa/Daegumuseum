var swiper = new Swiper(".swiper", {
  loop:true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });
  $(".imgbox").mouseenter(function(){
    $(this).find(".cover").stop().fadeIn(800);
    $(this).mouseleave(function(){
      $(".cover").stop().fadeOut(500);
    })
  });
$(window).scroll(function(){
    var scrollH=$(window).scrollTop();
     console.log(scrollH);
     if(scrollH < 600){
       $(".imgInner").removeClass("on,active");
       $(".sectionTxt").removeClass("on")
    }else if( scrollH > 600 && scrollH < 850){
      $("#section1 .imgInner").addClass("active");
      $("#section1 .sectionTxt").addClass("on");
    }
     else if( scrollH > 850 && scrollH < 1700){  
      $("#section2 .sectionTxt.RI").addClass("on");
      $("#section2 .imgInner").addClass("on");
    }
    else if( scrollH > 1700 && scrollH < 2550){
      $("#section3 .imgInner").addClass("active");  
      $("#section3 .sectionTxt").addClass("on");
    }
    else if( scrollH > 2550 && scrollH < 3400){  
      $("#section4 .sectionTxt.RI").addClass("on");
      $("#section4 .imgInner").addClass("on");
    }

});

 
 
   //$(".imgwrap").stop().fadeIn(500)
  
  /*$(".imgwrap").on("mouseenter",function(){
    $(this).find(".imgInner").stop().animate({bottom:0, opacity:1},du,'easeInCubic'); 
    $(this).find("img").stop().animate({top:'-15px'},du,'easeInCubic');   
    $(this).find("span").stop().delay(300).animate({opacity:1},du);    
})
.on("mouseleave",function(){
    $(this).find("strong").stop().animate({bottom:"-100px", opacity:0},du,'easeOutCubic'); 
    $(this).find("img").stop().animate({top:0},du,'easeOutCubic');   
    $(this).find("span").stop().delay(300).animate({opacity:0},du);    
})*/

  
  

