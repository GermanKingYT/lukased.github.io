/* </> Lukas Eder */

$(document).ready(function () {

    /* -- @cookie -- */

    if (document.cookie == "") {
        $('.cookie').css('display','block');
    } else {
        $('.cookie').remove();
    }

    function writeCookie (key, value, days) {
        var date = new Date();
        days = days || 365;
        date.setTime(+ date + (days * 86400000));
        window.document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/";
        return value;
    }

    $('.cookieAccept').click(function () {
        $('.cookie').remove();
        writeCookie("cookieAccepted", true, 365);
    });

    $('.cookieDeny').click(function () {
        $('.cookie').remove();
    });

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > $(window).height()) {
            $(".header-navbar").css("background" , "#1A237E");
        }

        else{

            $(".header-navbar").css("background" , "transparent");
        }
    });

    /* -- @menu --*/

    $('.menu-show').click(function () {
        $('.menu').animate({right: 0},{duration: 500});
    });

    $('.menu-hide').click(function () {
        $('.menu').animate({right: '-100%'},{duration: 250});
    });

    $('a').click(function(){
        $('.menu').animate({right: '-100%'},{duration: 250});
    });

    /* -- @scroll -- */

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
    });


});