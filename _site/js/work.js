// light box script
$(document).on('click',
    '[data-toggle="lightbox"]',
    function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });


// full page scrolling
$(document).ready(function () {
    $('#fullpage').fullpage({
        scrollingSpeed: 900,
        responsiveWidth: 9999,
        recordHistory: true,
        lazyLoading: true,
        lockAnchors: false,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
    });
});

// Load header and footer

$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});
