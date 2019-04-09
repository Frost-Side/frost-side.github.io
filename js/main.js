$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
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
        }
    );
});

function openSideMenu() {
    document.getElementById("side-menu").style.width = "100%";
}

function closeSideMenu() {
    document.getElementById("side-menu").style.width = "0";
}