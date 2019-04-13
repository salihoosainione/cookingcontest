$(window).scroll(() => {
    if ($('.nav-parent').offset().top > 50) {
        $('.navbar-custom').addClass('navbar-custom-animate');
    } else {
        $('.navbar-custom').removeclass('navbar-custom-animate');
    }
});
