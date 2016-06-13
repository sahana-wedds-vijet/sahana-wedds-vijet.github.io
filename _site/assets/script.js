/**
 * @init is function run after loading the page. It is the first function executed.
 *
 * */

var init;
init = function () {
    //The .active class needs to be added to one of the slides. Otherwise, the carousel will not be visible.
    // $('.carousel .item:first').addClass('active');

    //adding carousel avoid using bootstrap data tags for JS events. it get un manageable soon.
    carousel_slider()
    //apply slick slider of featured post
    featured_slider();

    $('.thubmnail').hover(
            function(){
                $(this).find('.caption').slideDown(250); //.fadeIn(250)
            },
            function(){
                $(this).find('.caption').slideUp(250); //.fadeOut(205)
            }
    );
};


var carousel_slider = function(){
    $('#carousel').slick({
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        fade: true,
        pauseOnHover: false,
    });
}

var featured_slider = function(){
    $('.lazy').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
      arrows: true,
      prevArrow: $('.nvgt#prev'),
      nextArrow: $('.nvgt#next'),
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
}

window.onload = init(); //when dom is loaded. run init function
