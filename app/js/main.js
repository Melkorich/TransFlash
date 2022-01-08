$(function(){

  $('.hero-slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.news-slider').slick({
    slidesToShow: 3, 
    prevArrow:'<button type="button" class="slick-prev arrow-left"><img src="images/news/ar-left.svg" alt=""></button>',
    nextArrow:'<button type="button" class="slick-next arrow-right"><img src="images/news/ar-right.svg" alt=""></button>',

    infinite:false,
  });

  $('.process__tabs-btn').on('click', function(e) {
    e.preventDefault();
    $('.process__tabs-btn').removeClass('process__tabs-btn--active');
    $(this).addClass('process__tabs-btn--active');

    $('.process-item').removeClass('process-item--active');
    $($(this).attr('href')).addClass('process-item--active');
  });
 
});