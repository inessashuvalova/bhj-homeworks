'use strict';


const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
let sliderItemActive = 0;
document.querySelector('.slider__arrow_prev').onclick = function () {
    sliderItemActive --;
}

document.querySelector('.slider__arrow_next').onclick = function () {
   sliderItemActive ++;
}



