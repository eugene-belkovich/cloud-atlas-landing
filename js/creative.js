(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('#popup-gallery-one').magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },
        items: [
            {
                src: 'img/portfolio/1/1.jpg'
            },
            {
                src: 'img/portfolio/1/2.jpg'
            },
            {
                src: 'img/portfolio/1/3.jpg'
            },
            {
                src: 'img/portfolio/1/4.jpg'
            },
            {
                src: 'img/portfolio/1/5.jpg '
            }
        ]
    });

    $('#popup-gallery-two').magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },
        items: [
            {
                src: 'img/portfolio/2/1.jpg'
            },
            {
                src: 'img/portfolio/2/2.jpg'
            },
            {
                src: 'img/portfolio/2/3.jpg'
            },
            {
                src: 'img/portfolio/2/4.jpg'
            },
            {
                src: 'img/portfolio/2/5.jpg '
            }
        ]
    });

    $('#popup-gallery-three').magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },
        items: [
            {
                src: 'img/portfolio/3/1.jpg'
            },
            {
                src: 'img/portfolio/3/2.jpg'
            },
            {
                src: 'img/portfolio/3/3.jpg'
            },
            {
                src: 'img/portfolio/3/4.jpg'
            },
            {
                src: 'img/portfolio/3/5.jpg '
            }
        ]
    });

    $('#popup-gallery-four').magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },
        items: [
            {
                src: 'img/portfolio/4/1.jpg'
            },
            {
                src: 'img/portfolio/4/2.jpg'
            },
            {
                src: 'img/portfolio/4/3.jpg'
            },
            {
                src: 'img/portfolio/4/4.jpg'
            },
            {
                src: 'img/portfolio/4/5.jpg '
            }
        ]
    });

    $('#popup-gallery-five').magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },
        items: [
            {
                src: 'img/portfolio/5/1.jpg'
            },
            {
                src: 'img/portfolio/5/2.jpg'
            },
            {
                src: 'img/portfolio/5/3.jpg'
            },
            {
                src: 'img/portfolio/5/4.jpg'
            },
            {
                src: 'img/portfolio/5/5.jpg '
            }
        ]
    });

    $('#popup-gallery-six').magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },
        items: [
            {
                src: 'img/portfolio/6/1.jpg'
            },
            {
                src: 'img/portfolio/6/2.jpg'
            },
            {
                src: 'img/portfolio/6/3.jpg'
            },
            {
                src: 'img/portfolio/6/4.jpg'
            },
            {
                src: 'img/portfolio/6/5.jpg '
            }
        ]
    });

})(jQuery); // End of use strict
