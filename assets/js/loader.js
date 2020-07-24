//Preloader
$(window).on("load", function() {
    preloaderFadeOutTime = 1000;
    function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
hidePreloader();
});


$(document).ready(function(){
    $('.logo-img').hide()
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('.logo-img').fadeIn();
    } else {
        $('.logo-img').fadeOut();
    }
});