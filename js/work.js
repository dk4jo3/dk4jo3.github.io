// light box script
$(document).on('click',
    '[data-toggle="lightbox"]',
    function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });


// full page scrolling

// Load header and footer

$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});
