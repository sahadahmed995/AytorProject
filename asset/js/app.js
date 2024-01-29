$(function(){

  // *aos starts
  AOS.init();
  // *aos ends

    // *nav starts
    $(".navbar-nav li").click(function(){
        $(this).siblings().removeClass("active")
        $(this).toggleClass("active")
    })

    $(window).click(function(e){
      if ($(e.target).hasClass("dd")) {
        $(".dropDownCtn").toggleClass("active");
      }else{
        $(".dropDownCtn").removeClass("active");
      }
    })
    $(window).scroll(function () { 
      let scroll = $(window).scrollTop()
      if (scroll > 699) {
        $("nav").addClass("stiky")
      }else{
        $("nav").removeClass("stiky")
      }
      let scrollInPer = 100/$("html").height()*scroll + 100/$("html").height()*$(window).height()
      $(".nav-progress-bar").css({
        width: `${scrollInPer}%`,
      });
    });
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
          breakpoint: 1199,
          settings:{
            slidesToShow: 3,
            slidesToScroll:1,
          },
        },
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

    // *about aytor video starts
    new VenoBox({
      selector: '.aboutAytorVideo',
    });
    // *about aytor video ends

    // *team starts
    $(".teamSlider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      speed:500,
      prevArrow: ".leftArrow",
      nextArrow: ".rightArrow",
      responsive: [
        {
          breakpoint: 1199,
          settings:{
            slidesToShow: 3,
            slidesToScroll:1,
          },
        },
        {
          breakpoint: 991,
          settings:{
            slidesToShow: 2,
            slidesToScroll:1,
          },
        },
        {
          breakpoint: 575,
          settings:{
            slidesToShow: 1,
            slidesToScroll:1,
          },
        },
      ]
    })
    // *team ends

    // *coustomer riview starts
    $(".coustomerSlider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots:true,
      speed:500,
      centerMode: true,
      centerPadding: '0px',
    })
    // *coustomer riview ends

    // *aytor insta starts
    $(".instaSlider").slick({
      slidesToShow: 6,
      slidesToScroll: 2,
      arrows: false,
      dots:true,
      speed:500,
      responsive: [
        {
          breakpoint: 1199,
          settings:{
            slidesToShow: 4,
            slidesToScroll:1,
          },
        },
        {
          breakpoint: 991,
          settings:{
            slidesToShow: 3,
            slidesToScroll:2,
          },
        },
        {
          breakpoint: 575,
          settings:{
            slidesToShow: 2,
            slidesToScroll:2,
          },
        },
      ]
    })
    // *aytor insta ends
})
