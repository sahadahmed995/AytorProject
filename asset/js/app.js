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
        infinite: true,
        arrows: false,
        dots: true,
        dotsClass: "container slick-dots",
        autoplay: false,
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


    // *shop starts

    $("#shop .bottom .pageBtn1").click(function(e){
      $("#shop .bottom .pageBtn2").removeClass("active")
      $("#shop .bottom .pageBtn3").removeClass("active")
      $(this).addClass("active")
      $("#shop .page2").removeClass("active")
      $("#shop .page3").removeClass("active")
      $("#shop .page1").addClass("active")
    })
    $("#shop .bottom .pageBtn2").click(function(e){
      $("#shop .bottom .pageBtn1").removeClass("active")
      $("#shop .bottom .pageBtn3").removeClass("active")
      $(this).addClass("active")
      $("#shop .page1").removeClass("active")
      $("#shop .page3").removeClass("active")
      $("#shop .page2").addClass("active")
    })
    $("#shop .bottom .pageBtn3").click(function(e){
      $("#shop .bottom .pageBtn2").removeClass("active")
      $("#shop .bottom .pageBtn1").removeClass("active")
      $(this).addClass("active")
      $("#shop .page2").removeClass("active")
      $("#shop .page1").removeClass("active")
      $("#shop .page3").addClass("active")
    })



    // *grid page starts
    $("#shop .bottom .gridPageBtn1").click(function(e){
      $("#shop .bottom .gridPageBtn2").removeClass("active")
      $("#shop .bottom .gridPageBtn3").removeClass("active")
      $(this).addClass("active")
      $("#shop .gridPage2").removeClass("active")
      $("#shop .gridPage3").removeClass("active")
      $("#shop .gridPage1").addClass("active")
    })
    $("#shop .bottom .gridPageBtn2").click(function(e){
      $("#shop .bottom .gridPageBtn1").removeClass("active")
      $("#shop .bottom .gridPageBtn3").removeClass("active")
      $(this).addClass("active")
      $("#shop .gridPage1").removeClass("active")
      $("#shop .gridPage3").removeClass("active")
      $("#shop .gridPage2").addClass("active")
    })
    $("#shop .bottom .gridPageBtn3").click(function(e){
      $("#shop .bottom .gridPageBtn2").removeClass("active")
      $("#shop .bottom .gridPageBtn1").removeClass("active")
      $(this).addClass("active")
      $("#shop .gridPage2").removeClass("active")
      $("#shop .gridPage1").removeClass("active")
      $("#shop .gridPage3").addClass("active")
    })

    // *grid page ends
    
    // *shop ends

    // *product detas slider starts
    $('.displaySlider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.navSlider'
    });
    $('.navSlider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.displaySlider',
      centerMode: true,
      centerPadding:"0px",
      focusOnSelect: true,
      arrows:false,
    });
    // *product detas slider ends
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

    // *counter starts
    const counterUp = window.counterUp.default
    const callback1 = entries => {
      entries.forEach( entry => {
        const counter1 = entry.target
        if ( entry.isIntersecting )  {
          counterUp( counter1, {
            duration: 1500,
            delay: 16,
          } )
        }
      } )
    }
    
    const observer1 = new IntersectionObserver( callback1, { threshold: 1 } )
    
    const counter1 = document.querySelector( '.counter1' )
    observer1.observe( counter1 )

    const callback2 = entries => {
      entries.forEach( entry => {
        const counter2 = entry.target
        if ( entry.isIntersecting )  {
          counterUp( counter2, {
            duration: 1500,
            delay: 16,
          } )
        }
      } )
    }
    
    const observer2 = new IntersectionObserver( callback2, { threshold: 1 } )
    
    const counter2 = document.querySelector( '.counter2' )
    observer2.observe( counter2 )


    const callback3 = entries => {
      entries.forEach( entry => {
        const counter3 = entry.target
        if ( entry.isIntersecting )  {
          counterUp( counter3, {
            duration: 1500,
            delay: 16,
          } )
        }
      } )
    }
    
    const observer3 = new IntersectionObserver( callback3, { threshold: 1 } )
    
    const counter3 = document.querySelector( '.counter3' )
    observer3.observe( counter3 )


    const callback4 = entries => {
      entries.forEach( entry => {
        const counter4 = entry.target
        if ( entry.isIntersecting )  {
          counterUp( counter4, {
            duration: 1500,
            delay: 16,
          } )
        }
      } )
    }
    
    const observer4 = new IntersectionObserver( callback4, { threshold: 1 } )
    
    const counter4 = document.querySelector( '.counter4' )
    observer4.observe( counter4 )
    
    // *counter ends


