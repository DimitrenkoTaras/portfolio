$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__list').click(function(event) {
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');
    });

    $("a.scrollto").click(function () {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 80}, 1100);
        return false;
    });

    $('.technology-slider').slick({
        slidesToShow:7,
        speed:1000,
        touchThreshold:5,
        autoplay:true,
        autoplaySpeed:1500,
        responsive:[
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow:5,
                }
            },{
                breakpoint: 710,
                settings: {
                    slidesToShow:4,
                }
            },{
                breakpoint: 620,
                settings: {
                    slidesToShow:3,
                }
            },{
                breakpoint: 479.98,
                settings: {
                    slidesToShow:2,
                }
            },{
                breakpoint: 370,
                settings: {
                    slidesToShow:1,
                }
            }
        ],      
    });
});