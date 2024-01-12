$(function(){

    // *nav starts
    $(".navbar-nav li").click(function(){
        $(this).siblings().removeClass("active")
        $(this).toggleClass("active")
    })
    // *nav ends

    // *banner slider starts
    $(".bannerSlider").slick({
        arrows: false,
        dots: true,
        dotsClass: "container slick-dots",
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover:false,
        pauseOnFocus:false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots:false,
              }
            },
          ]
    })
    // *banner slider ends

    // *NEW product starts
    $(".newArrivalsSlider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows:true,
      prevArrow:".leftArrow",
      nextArrow:".rightArrow",
      autoplay:true,
      autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 992,
          settings:{
            slidesToShow: 2,
          },
        },
      ]
    })
    // *NEW product ends

    // deal fo the day starts
    $(".dealBody").slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      dots:true,
      arrows:false,
    });
    // deal fo the day ends
})