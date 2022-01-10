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

const mapBtn = document.querySelectorAll('.map__dot-btn');

mapBtn.forEach(el => {
  el.addEventListener('click' , (e) => {
    const self = e.currentTarget;
    const mapText = self.querySelector('.map__dot-text');

    mapText.classList.toggle('map__dot-text--active');
    self.classList.toggle('btn-circles--active');
  });
});


AOS.init({
  disable: 'mobile',
  disable: 'phone', 
  offset: 100, 
  easing: 'ease', 
  once: true,
});

