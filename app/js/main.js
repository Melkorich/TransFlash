$(function(){

  $('.hero-slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
  });

  $('.process__tabs-btn').on('click', function(e) {
    e.preventDefault();
    $('.process__tabs-btn').removeClass('process__tabs-btn--active');
    $(this).addClass('process__tabs-btn--active');

    $('.process-item').removeClass('process-item--active');
    $($(this).attr('href')).addClass('process-item--active');
  })
 
});