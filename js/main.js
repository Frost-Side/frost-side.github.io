$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: ['',''],
    items: 1,
    loop: true,
    animateIn: 'slideInRight',
    animateOut: 'slideOutLeft',
    smartSpeed: 1000,
    responsive: {
      768: {
        items: 3
      }
    }
  });

  $('.side-menu-trigger').on('click', function () {
    let sideMenuBlock = $('#side-menu');
    sideMenuBlock.removeClass('side-menu--closed').css({
      "width" : 100 + "%"
    });
  });

  $('.side-menu__close-link').on('click', function () {
    $(this).closest('#side-menu').addClass('side-menu--closed').css({
      "width" : "0"
    });
  });

  $('.side-menu__link').on('click', function () {
    $(this).closest('#side-menu').addClass('side-menu--closed').css({
      "width" : "0"
    });
    let hrefId = $(this).attr('href');
    let scrollPos = $(hrefId).offset().top;
    $('html, body').animate({scrollTop: scrollPos}, 1000);
  });

  $('.main-navigation__link').on('click', function () {
    let hrefId = $(this).attr('href');
    let scrollPos = $(hrefId).offset().top;
    $('html, body').animate({scrollTop: scrollPos}, 1000);
  });
});
