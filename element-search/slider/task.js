'use strict';


const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
document.querySelector('.slider__arrow_next').onclick = function () {
  slideRight();    
}

document.querySelector('.slider__arrow_prev').onclick = function () {   
  slideLeft();
}


function slideRight() {    
     findIndex(sliderItem[i].classList.remove("slider__item_active"));
      ++i;

      if (i === sliderItem.length) i = 0;
      sliderItem[i].classList.add("slider__item_active");
  }



function slideLeft() {   

      findIndex(sliderItem[i].classList.remove("slider__item_active"));
      --i;

      if (i === -1) i = sliderItems.length - 1;
      sliderItem[i].classList.add("slider__item_active");
  }




