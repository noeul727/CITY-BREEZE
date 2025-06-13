$(document).ready(function(){

  $(".menu").click(function(){
    $(".gnb-wrap").fadeIn();
  });

  $(".close").click(function(){
    $(".gnb-wrap").fadeOut();
  });

  $(".search").click(function(){
    $(".search-box").slideToggle();
  });

  const main = new Swiper(".main", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    

    speed: 1000,
    loop: true,

  });
  
  $(".tab-list").hide();

  $(".tab-txt li").click(function(){
    $(".tab-list").slideDown();
  });
  $(".tab-list p").click(function(){
    $(".tab-list").slideUp();
  });
  /*$(".tab-txt li").mouseleave(function(){
    $(".tab-list").slideUp();
  });*/

  const slide2 = new Swiper(".slide2", {
    
    breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 10,
        },
        1600: {
            slidesPerView: 3.5,
            spaceBetween: 10,
        },
    },
  });


  $(".store .inner ul li").mouseenter(function() {
    $(this).children(".store .inner .img").animate({"left" : "50%", "border-radius" : "200px"});
    $(this).children(".store .inner .txt").animate({"left" : "60px"});
    });

  $(".store .inner ul li").mouseleave(function() {
    $(this).children(".store .inner .img").animate({"left" : "0", "border-radius" : "0"});
    $(this).children(".store .inner .txt").animate({"left" : "-50%"});
  });

  const sub_main = new Swiper(".sub-main", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    

    speed: 1000,
    loop: true,

  });

  $(".price").hide();

  $(".txt ul li").click(function(){
    $(".price").slideToggle();
  });
});