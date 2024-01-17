$(function(){

  // *aos starts
  AOS.init();
  // *aos ends

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
        speed:1000,
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

    // *deal fo the day starts
    $(".dealSlider").slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      dots:true,
      arrows:false,
      autoplay:true,
      autoplaySpeed:3000,
      responsive: [
        {
          breakpoint: 992,
          settings:{
            slidesToShow: 1,
            slidesToScroll:1,
          },
        },
      ]
    });


    // *Deal Of The Day CountDown Starts
    $('.timer').countdown('2024/02/10', function(event) {
      $('.timer .sec').html(event.strftime('%S'));
      $('.timer .min').html(event.strftime('%M'));
      $('.timer .hour').html(event.strftime('%H'));
      $('.timer .day').html(event.strftime('%D'));
    })
    // *Deal Of The Day CountDown Ends 
    new VenoBox({
      selector: '.popUpBox',
      spinner: 'rotating-plane'
  });
    // *deal fo the day ends

    // *latest news starts
    $(".latestSlider").slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows: false,
      dots: true,
      autoplay:true,
      autoplaySpeed:2500,
      speed:1000,
      responsive: [
        {
          breakpoint: 992,
          settings:{
            slidesToShow: 2,
            slidesToScroll:1,
          },
        },
        {
          breakpoint: 767,
          settings:{
            slidesToShow: 1,
            slidesToScroll:1,
          },
        },
        {
          breakpoint: 575,
          settings:{
            slidesToShow: 1,
            slidesToScroll:1,
            dots:false,
          },
        },
      ]
    })
    // *latest news ends
})