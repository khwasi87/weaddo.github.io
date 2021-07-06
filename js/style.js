$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            autoplay: true,
        },
        600: {
            items: 3,
            nav: false,
            autoplay: true,
        },
        1000: {
            items: 6,
            nav: false,
            loop: true
        }
    }
})
