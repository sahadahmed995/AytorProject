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
        responsive: [
            {
              breakpoint: 991,
              settings: {
                dots:false,
              }
            },
          ]
    })
    // *banner slider ends
})