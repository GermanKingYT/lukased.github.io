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

    /* -- @menu --*/

    $('.menu-show').click(function () {
        $('.menu').animate({right: 0},{duration: 500});
    });

    $('.menu-hide').click(function () {
        $('.menu').animate({right: '-100%'},{duration: 250});
    });

    /* -- @scroll -- */

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);

        if ($(window).width() < 768) {
            $('.menu').animate({right: '-100%'},{duration: 250});
        }
        return false;
    });
    
    
    /* -- @highlight -- */

    var menuHighlightElements = $('.menu-nav ul li a');

    var menuHighlightCurrent = 0;
    var menuHighlightTop;

    var menuHighlightObject = $(menuHighlightElements[0]);
    menuHighlightObject.addClass('menu-highlight');

    $(window).scroll(function(){

        for(var i = 0; i < menuHighlightElements.length;i++) {

            var menuHighlightLink = $(menuHighlightElements[i]).attr('href');

            if($(menuHighlightLink).length){
                menuHighlightTop = $(menuHighlightLink).offset().top;
            }

            var UD_SCROLL_TOP = $(window).scrollTop();
            var menuHighlightDif = Math.abs(UD_SCROLL_TOP - menuHighlightTop);

            if(i === 0) {
                menuHighlightCurrent = menuHighlightDif;
                menuHighlightObject = $(menuHighlightElements[i]);
                $('nav ul li a').removeClass('menu-highlight');
                menuHighlightObject.addClass('menu-highlight');
            } else {
                if(menuHighlightDif < menuHighlightCurrent || menuHighlightDif === menuHighlightCurrent) {
                    menuHighlightCurrent = menuHighlightDif;
                    menuHighlightObject = $(menuHighlightElements[i]);
                    $('nav ul li a').removeClass('menu-highlight');
                    menuHighlightObject.addClass('menu-highlight');
                }
            }
        }
    });
});