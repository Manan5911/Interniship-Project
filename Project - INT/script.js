$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav_head').addClass("sticky");
        }else{
            $('.nav_head').removeClass("sticky");  
        }
        if(this.scrollY > 200){
          $('.scroll-up-btn').addClass("show");
        }
        else{
          $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide-up script
    $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0})
    });

    // toggle menu javascript
    $('.menu-btn').click(function(){
        $('.nav_head .menu-nav').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});