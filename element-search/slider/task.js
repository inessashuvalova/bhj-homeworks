'use strict';


const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
document.querySelector('.slider__arrow_next').onclick = slideRight;
document.querySelector('.slider__arrow_prev').onclick = slideLeft;
const sliderCount = sliderItem.findIndex((element) => element.classList.contains('slider__item_active'))


function slideRight() {    
  sliderCount[i].classList.remove('slider__item_active');
  sliderCount < sliderItem.length - 1 ? sliderCount + 1 : sliderCount;   
  sliderItem[sliderCount].classList.add('slider__item_active');
}

function slideLeft() {  
  sliderCount[i].classList.remove('slider__item_active'); 
  sliderCount <= 0
  ? (sliderCount + sliderItems.length - 1)
  : (sliderCount - 1);


  sliderItem[sliderCount].classList.add('slider__item_active');
  }





  