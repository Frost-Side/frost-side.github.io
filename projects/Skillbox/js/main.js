"use strict";

$(function(){
    $('.telephone-order-button').click(function(){
        $('.popup-container').css('display', 'flex');
    });

    $('.popup-container').click(function(e){
        if(this === e.target) {
            $('.popup-container').css('display', 'none');
        }
    });
    $('.popup-form__submit-button').click(function() {
        $('.popup-container').css('display', 'none');
    });
});

$(function(){
    $('.footer-upper-block__offer-call').click(function(){
        $('.popup-container').css('display', 'flex');
    });

    $('.popup-container').click(function(e){
        if(this === e.target) {
            $('.popup-container').css('display', 'none');
        }
    });

    $('.popup-form__submit-button').click(function() {
        $('.popup-container').css('display', 'none');
    });
});

