/* </> Lukas Eder */

$(document).ready(function () {
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

    // Menu
    function openMenu() {
        $('.menu').animate({left: "0"});
    }


    $('.menu-open').click(function () {
        openMenu();
    });

    $('.menu-close').click(function () {
        $('.menu').animate({left: "-100%"},{duration: 250});
    });
});
