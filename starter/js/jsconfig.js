requirejs.config({
    baseUrl: 'js',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        //jquery: 'jquery-1.9.0'
        jquery: ['//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min', 'vendor/jquery-3.4.1.min'],
        modernizr: ['//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min', 'vendor/modernizr.min'],
        popper: 'libs/popper.min.js',
        bootstrap: '//stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min',
        owlcarousel: 'libs/owl.carousel.min'
        // "initBootstrap" : "...wotever..."
    },
    shim: {
        bootstrap: {
            deps: ["jquery"]
        }
    },
});


// define("initBootstrap", ["popper"], function(popper) {
//     // set popper as required by Bootstrap
//     window.Popper = popper;
//     require(["bootstrap"], function(bootstrap) {
//         // do nothing - just let Bootstrap initialise itself
//     });
// });

// require(["popper"], function(popper) {
//     window.Popper = popper;
//     require(["bootstrap"]);
// });
