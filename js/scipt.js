$(document).ready(function () {
  $(".slick-carousel5").slick({
    slidesToShow: 1, // Number of items to show at a time on desktop
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
    ],
  });
});