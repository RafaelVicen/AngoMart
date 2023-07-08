$(function(){
    $(".alimentos-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
        prevArrow: $("#arrow-prev"),
        nextArrow: $("#arrow-prev"),
        responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            }

          ]
        });

    });


$(function(){
    $(".publicidade-slider").slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
        prevArrow: $("#arrow-prev"),
        nextArrow: $("#arrow-prev"),
        responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            }

          ]
        });

    });

