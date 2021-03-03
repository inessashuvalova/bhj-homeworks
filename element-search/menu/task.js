'use strict';

const elementsMenuLink = document.querySelectorAll('.menu__link');

   elementsMenuLink.forEach(menuLink => { 
      menuLink.addEventListener('click', (evt) => {
         const elementMenuSub = this.closest('.menu__item').querySelector('.menu_sub');
         if (elementMenuSub !== null) {
             evt.preventDefault();
             elementMenuSub.classList.add('menu_active');
             elementMenuSub.classList.toggle('menu_active');
 
         }
   })
      })