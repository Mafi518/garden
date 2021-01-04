'use strict';

var disableScroll = function disableScroll() {
  var paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  document.body.classList.toggle('scroll-lock');
  document.body.style.paddingRight = paddingOffset;
};

var burger = document.querySelector('.menu-icon').addEventListener('click', function () {
  var _this = this;

  var menu = document.querySelector('.menu');
  this.classList.toggle('menu-icon__active');
  menu.classList.toggle('menu__active');
  disableScroll();

  var links = document.querySelectorAll('.menu__link').forEach(function (element) {
    element.onclick = function () {
      menu.classList.toggle('menu__active');
      _this.classList.toggle('menu-icon__active');
      disableScroll();
    };
  });
});

$('.lookout__slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});

function arrowToHead() {
  var arrow = document.querySelector('.slick-next');
  var arrow2 = document.querySelector('.slick-prev');
  var h2 = document.querySelector('.lookout__title');
  h2.appendChild(arrow2);
  h2.appendChild(arrow);
}

arrowToHead();

var popupBtns = document.querySelectorAll('.rent-btn').forEach(function (el) {

  var form = document.querySelector('.popup');
  var done = document.querySelector('.done');
  var closeBtn = document.querySelector('.popup__close');
  var closeDone = document.querySelector('.done__close');
  var doneBtn = document.querySelector('.popup__button');
  var donePopup = document.querySelector('.done');

  el.addEventListener('click', function () {
    form.classList.toggle('form__active');
    closeBtn.onclick = function () {
      return form.classList.toggle('form__active');
    };
    doneBtn.onclick = function (e) {
      e.preventDefault();
      donePopup.classList.toggle('form__active');
      closeDone.onclick = function () {
        return done.classList.toggle('form__active');
      };
    };
  });
});