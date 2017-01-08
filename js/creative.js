(function ($) {
    "use strict"; // Start of use strict

    $('.carousel').carousel();

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
                src: 'img/portfolio/1/1a.jpg'
            },
            {
                src: 'img/portfolio/1/2a.jpg'
            },
            {
                src: 'img/portfolio/1/3a.jpg'
            },
            {
                src: 'img/portfolio/1/4a.jpg'
            },
            {
                src: 'img/portfolio/1/5a.jpg '
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
                src: 'img/portfolio/2/1b.jpg'
            },
            {
                src: 'img/portfolio/2/2b.jpg'
            },
            {
                src: 'img/portfolio/2/3b.jpg'
            },
            {
                src: 'img/portfolio/2/4b.jpg'
            },
            {
                src: 'img/portfolio/2/5b.jpg '
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
                src: 'img/portfolio/3/1c.jpg'
            },
            {
                src: 'img/portfolio/3/2c.jpg'
            },
            {
                src: 'img/portfolio/3/3c.jpg'
            },
            {
                src: 'img/portfolio/3/4c.jpg'
            },
            {
                src: 'img/portfolio/3/5c.jpg '
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
                src: 'img/portfolio/4/1d.jpg'
            },
            {
                src: 'img/portfolio/4/2d.jpg'
            },
            {
                src: 'img/portfolio/4/3d.jpg'
            },
            {
                src: 'img/portfolio/4/4d.jpg'
            },
            {
                src: 'img/portfolio/4/5d.jpg '
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
                src: 'img/portfolio/5/1e.jpg'
            },
            {
                src: 'img/portfolio/5/2e.jpg'
            },
            {
                src: 'img/portfolio/5/3e.jpg'
            },
            {
                src: 'img/portfolio/5/4e.jpg'
            },
            {
                src: 'img/portfolio/5/5e.jpg '
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
                src: 'img/portfolio/6/1f.jpg'
            },
            {
                src: 'img/portfolio/6/2f.jpg'
            },
            {
                src: 'img/portfolio/6/3f.jpg'
            },
            {
                src: 'img/portfolio/6/4f.jpg'
            },
            {
                src: 'img/portfolio/6/5f.jpg '
            }
        ]
    });

})(jQuery); // End of use strict
