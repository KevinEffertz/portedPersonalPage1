// Add class to Navbar when page is scrolled

/*global $*/

$(document).ready(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('#mainNav').addClass("navbar-shrink");
        } else {
            $('#mainNav').removeClass("navbar-shrink");
        }
    });

});
