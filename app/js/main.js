$(function(){

  //sliders (slick)
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

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  //tabs
  $('.process__tabs-btn').on('click', function(e) {
    e.preventDefault();
    $('.process__tabs-btn').removeClass('process__tabs-btn--active');
    $(this).addClass('process__tabs-btn--active');

    $('.process-item').removeClass('process-item--active');
    $($(this).attr('href')).addClass('process-item--active');
  });

  $("#phone").mask("+7 (999) 999-99-99");

  //smooth scroll
    $(".menu").on("click","a", function (event) {
      event.preventDefault();
      let id  = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
    });

}); 

//burger-menu functionality
const menuBtn = document.querySelector('.menu__burger');
const menuList = document.querySelector('.menu__list');
const menuLink = document.querySelectorAll('.menu__link');

menuBtn.addEventListener('click', function() {
  menuList.classList.toggle('menu__list--active');
  menuBtn.classList.toggle('menu__burger--active');
  document.querySelector('body').classList.toggle('scroll-block');
}); 

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', function () {
    menuList.classList.remove('menu__list--active');
    menuBtn.classList.remove('menu__burger--active');
  });
}

//modal-window functionality
const modal = document.querySelector('.modal');
const modalBtnOpen = document.querySelector('.open-modal');
const modalBtnClose = document.querySelector('.modal__close');
const modalOverlay = document.querySelector('.modal__overlay');


const openModal = function() {
  modal.classList.remove('hidden');
  modalOverlay.classList.remove('hidden');
}

const closeModal = function() {
  modal.classList.add('hidden');
  modalOverlay.classList.add('hidden');
}

modalBtnOpen.addEventListener('click', openModal);
modalBtnClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
})


//map-dots functionality
const mapBtn = document.querySelectorAll('.map__dot-btn');

mapBtn.forEach(el => {
  el.addEventListener('click' , (e) => {
    const self = e.currentTarget;
    const mapText = self.querySelector('.map__dot-text');

    mapText.classList.toggle('map__dot-text--active');
    self.classList.toggle('btn-circles--active');
  });
});

//wow js animation
wow = new WOW({ mobile: false })
wow.init();


