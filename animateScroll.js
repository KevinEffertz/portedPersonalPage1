{/* <!--Animate scrolling in navigation bar --> */}
$('a[href^="#"][href!="#experience"][href!="#education"][href!="#service"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});