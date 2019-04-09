$(document).ready(function(){
    $(".owl-carousel").addClass("owl-loaded");
    $(".owl-carousel").animate({
        opacity: 1
    },1000);
    $(".owl-carousel").owlCarousel({
        items: 1
    });
});