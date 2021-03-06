'use strict';
const arrowNext = document.querySelector('.slider__arrow_next');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const sliderItems = Array.from(document.querySelectorAll('.slider__item'));



arrowNext.addEventListener('click', () => {
  let sliderActive = sliderItems.findIndex((element) => element.classList.contains('slider__item_active'));
  changeSlide(sliderActive < sliderItems.length - 1 ? sliderActive + 1 : 0)
});

arrowPrev.addEventListener('click', () => {
  let sliderActive = sliderItems.findIndex((element) => element.classList.contains('slider__item_active'));
  changeSlide(sliderActive <= 0 ? sliderActive + sliderItems.length - 1 : sliderActive - 1)
});


function changeSlide(sliderActive) {
  sliderItems.forEach((element) => element.classList.remove('slider__item_active'));
  sliderItems[sliderActive].classList.add('slider__item_active');
}