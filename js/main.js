$(function(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
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
      var swiper = new Swiper(".coll", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    
      });
  
      /*
$(".swiper-slide>a").mouseenter(function(){
    $(this).siblings(".cover").stop().show();
   
});
$(".swiper-slide>a").mouseleave(function(){
  $(this).siblings(".cover").stop().hide(500);
 
});
*/
$("nav .mainMenu li").mouseenter(function(){
 $(this).find(".submenu").stop().slideDown();

});
$("nav .mainMenu li").mouseleave(function(){
  $(this).find(".submenu").stop().slideUp();
});

$(".ham").click(function(){
  $(".ham").toggleClass('on');
  if($(".ham").hasClass("on")){
      $(".m_menu").css({"opacity":1})
  }else{
    $(".m_menu").css({"opacity":0})

  }
});

$(".m_menu ul li ").mouseenter(function(){
  $(this).find(".m_submenu").stop().slideDown();
});
$(".m_submenu").mouseleave(function(){
  $(".m_submenu").stop().slideUp();
});


var swiper = new Swiper(".mobil", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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
var swiper = new Swiper(".moll", {
  slidesPerView: 1,
  spaceBetween:15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

});
});