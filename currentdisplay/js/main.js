$(function(){

var $btn =$("nan li a");//목적이 되는 선택자

$btn.click(function(){
    $btn.removeClass("on");
    $(this).addClass("on");
});//Isotope 플러그인 연결 
$('.thumb').isotope({
    // options
    itemSelector:'.all',
    layoutMode: 'fitRows',
    stagger:30
  });
  //Isotope을 이용하여 필터링 
  $(".btn_insta").click(function(){
    $('.thumb').isotope({ filter: '.install' });
  });
  $(".btn_all").click(function(){
    $('.thumb').isotope({ filter: '.all' });
  });
  $(".btn_com").click(function(){
    $('.thumb').isotope({ filter: '.pain' });
  });


//갤러리(팬시박스 http://fancybox.net/)
$(".thumb a").fancybox({
  //'transitionIn'	:	'elastic',
		//'transitionOut'	:	'elastic',
		//'speedIn'		:	600, 
		//'speedOut'		:	200, 
		//'overlayShow'	:	false
    transitionEffect:"tube",
    buttons: [
      "zoom",
      "share",
      "slideShow",
      //"fullScreen",
      //"download",
      "thumbs",
      "close"
    ],
});
  
});