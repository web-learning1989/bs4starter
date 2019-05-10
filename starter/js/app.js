(function($) {
    'use strict';

    $(function() {
        $(document).ready(function() {
            $(window).on('load', function() {
                setTimeout(() => {
                    const $loader = $("#loader");
                    $loader.addClass('preload-finish');
                }, 2000);

            });
            $('#hero-slider .owl-carousel').owlCarousel({
                items: 1,
                loop: true,
                margin: 10,
                nav: true,
                navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
                loop: false,
                autoplay: false,
                dots: true
            });

        });
    });
})(jQuery);


// define(["jquery", "bootstrap", "owlcarousel"], function($) {
//     'use strict';
//     $(function() {
//         $(document).ready(function() {
//             $(window).on('load', function() {
//                 setTimeout(() => {
//                     const $loader = $("#loader");
//                     $loader.addClass('preload-finish');
//                 }, 2000);

//             });
//             $('#hero-slider .owl-carousel').owlCarousel({
//                 items: 1,
//                 loop: true,
//                 margin: 10,
//                 nav: true,
//                 navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
//                 loop: false,
//                 autoplay: false,
//                 dots: true
//             });

//         });

//     });
// });