$(document).ready(function () {
    var slides = $('.slider .slide');
    var currentSlide = 0;
    var timeout = 10000;
    setTimeout(slider_js, timeout);

    function slider_js() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'slide showing';
        setTimeout(slider_js, timeout);
    }

    $('#user-toggle-but').click(function () {
        $('.user-collapse').toggleClass('show');
    });

    $('#toggle-but').click(function () {
        $('.navbar-collapse').toggleClass('show');
    });


    $('.dropdown .nav-text').click(function () {
        if (window.screen.width > 1200)
            $(this).next('.dropdown-panel').toggleClass('show-dropdown-nav');
        else
            $(this).next('.dropdown-panel').toggleClass('show');
    });

    $('.sub-menu .title').click(function () {
        $(this).next('.list').toggleClass('show');
    });

    $('.option-items .radio').change(function () {
        if ($(this).prop('checked')) {
            $(this).parent('.option-items').css({});
        }
    })


});
