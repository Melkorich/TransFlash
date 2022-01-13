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

  $("#phone").mask("+7 (999) 999-99-99");

  $('.menu__link').on('click', function() {
    $('.menu__burger').removeClass('menu__burger--active');
    $('.menu__list').removeClass('menu__list--active');
  });


}); 

const menuBtn = document.querySelector('.menu__burger');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', function() {
  menuList.classList.toggle('menu__list--active');
  menuBtn.classList.toggle('menu__burger--active');
  document.querySelector('body').classList.toggle('scroll-block');
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

wow = new WOW({ mobile: false })
wow.init();



// AOS.init({
//   disable: 'mobile',
//   disable: 'phone', 
//   offset: 100, 
//   easing: 'ease', 
//   once: true,
// });

