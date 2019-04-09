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
});

$('.telephone-order-button').click(function() {
    let user_firstName = $('#user_firstName').val();
    let user_phoneNumber = $('#user_phoneNumber').val();
    $.post('./php/api.php', 'name': user_firstName, 'telephone': user_phoneNumber, function(){
        $('.popup-container').css('display', 'none');
    });
});