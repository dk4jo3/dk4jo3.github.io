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
        scrollingSpeed: 400,
        responsiveWidth: 768,
        easing: 'easeInOutCubic',
        lazyLoading: true,
        lockAnchors: false,
        scrollBar: true,
        anchors: ['main', 'page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12', 'page13', 'page14', 'page15', 'page16', 'page17', 'page18']
    });
});

// Load header and footer

$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});
