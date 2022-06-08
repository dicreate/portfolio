$(document).ready(function(){
$('.slider').slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    prevArrow:"<svg class='slick-prev'><use xlink:href='./img/sprite.svg#slider-left'></use></svg>",
    nextArrow:"<svg class='slick-next'><use xlink:href='./img/sprite.svg#slider-right'></use></svg>",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          }
        },
    ]
});
});