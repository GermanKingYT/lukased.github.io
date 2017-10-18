$(document).ready(function () {
    $('.link-sidebar-open').click(function () {
        $('.link-sidebar').animate({left: "0"});
    });

    $('.link-sidebar-close').click(function () {
        $('.link-sidebar').animate({left: "-100%"});
    });
});
