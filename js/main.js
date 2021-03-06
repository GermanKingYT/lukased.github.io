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

    /* Header hide if scroll down */

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.header-navbar').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.header-navbar').animate({top: "-100%"}, {duration: 250});
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.header-navbar').animate({top: "0"}, {duration: 300});
            }
        }

        lastScrollTop = st;
    }

    /* -- @menu --*/

    $('.menu-show').click(function () {
        $('.menu').animate({right: 0},{duration: 500});
    });

    $('.menu-hide').click(function () {
        $('.menu').animate({right: '-100%'},{duration: 250});
    });

    $('.menu-nav .list a').click(function(){
        $('.menu').animate({right: '-100%'},{duration: 250});
    });

    /* -- @scroll -- */

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
    });
});