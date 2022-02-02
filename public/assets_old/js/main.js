/**
* Template Name: Bocor - v2.2.1
* Template URL: https://bootstrapmade.com/bocor-bootstrap-template-nice-animation/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
  //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     if (target.length) {
  //       e.preventDefault();

  //       var scrollto = target.offset().top;

  //       $('html, body').animate({
  //         scrollTop: scrollto
  //       }, 1500, 'easeInOutExpo');

  //       if ($(this).parents('.nav-menu, .mobile-nav').length) {
  //         $('.nav-menu .active, .mobile-nav .active').removeClass('active');
  //         $(this).closest('li').addClass('active');
  //       }

  //       if ($('body').hasClass('mobile-nav-active')) {
  //         $('body').removeClass('mobile-nav-active');
  //         $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  //         $('.mobile-nav-overly').fadeOut();
  //       }
  //       return false;
  //     }
  //   }
  // });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Back to top button
  
  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    // $(document).ready(function() {
    //   $('.venobox').venobox();
    // });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });
  // Mobile Slider 
  $(document).ready(function(){
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      parallax: true,
      pagination: ".swiper-pagination"
    });
    
  });
  jQuery(document).ready(function ($) {
    var feedbackSlider = $(".feedback-slider");
    feedbackSlider.owlCarousel({
      items: 1,
      nav: true,
      dots: true,
      autoplay: true,
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      navText: [
        "<i class='fa fa-long-arrow-left'></i>",
        "<i class='fa fa-long-arrow-right'></i>"
      ],
      responsive: {
        // breakpoint from 767 up
        767: {
          nav: true,
          dots: false
        }
      }
    });
  
    feedbackSlider.on("translate.owl.carousel", function () {
      $(".feedback-slider-item h3")
        .removeClass("animated fadeIn")
        .css("opacity", "0");
      $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
        .removeClass("animated zoomIn")
        .css("opacity", "0");
    });
  
    feedbackSlider.on("translated.owl.carousel", function () {
      $(".feedback-slider-item h3").addClass("animated fadeIn").css("opacity", "1");
      $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
        .addClass("animated zoomIn")
        .css("opacity", "1");
    });
    feedbackSlider.on("changed.owl.carousel", function (property) {
      var current = property.item.index;
      var prevThumb = $(property.target)
        .find(".owl-item")
        .eq(current)
        .prev()
        .find("img")
        .attr("src");
      var nextThumb = $(property.target)
        .find(".owl-item")
        .eq(current)
        .next()
        .find("img")
        .attr("src");
      var prevRating = $(property.target)
        .find(".owl-item")
        .eq(current)
        .prev()
        .find("span")
        .attr("data-rating");
      var nextRating = $(property.target)
        .find(".owl-item")
        .eq(current)
        .next()
        .find("span")
        .attr("data-rating");
      $(".thumb-prev").find("img").attr("src", prevThumb);
      $(".thumb-next").find("img").attr("src", nextThumb);
      $(".thumb-prev")
        .find("span")
        .next()
        .html(prevRating + '<i class="fa fa-star"></i>');
      $(".thumb-next")
        .find("span")
        .next()
        .html(nextRating + '<i class="fa fa-star"></i>');
    });
    $(".thumb-next").on("click", function () {
      feedbackSlider.trigger("next.owl.carousel", [300]);
      return false;
    });
    $(".thumb-prev").on("click", function () {
      feedbackSlider.trigger("prev.owl.carousel", [300]);
      return false;
    });
  }); //end ready
  
  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);


