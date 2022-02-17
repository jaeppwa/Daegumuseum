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