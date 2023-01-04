$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
    dots:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        768:{
            items:3
        },
        1000:{
            items:4
        },
        1440:{
            items:5
        }
    }
})
