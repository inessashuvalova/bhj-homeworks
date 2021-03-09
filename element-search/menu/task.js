'use strict';

const elementsMenuLink = document.querySelectorAll('.menu__link');

   elementsMenuLink.forEach(menuLink => { 
      menuLink.addEventListener('click', (evt) => {
        const elementMenuSub = menuLink.parentElement.querySelector('.menu_sub');
         if (elementMenuSub !== null) {
             evt.preventDefault()
             elementMenuSub.classList.toggle('menu_active');
 
         }
   })
      })


   
