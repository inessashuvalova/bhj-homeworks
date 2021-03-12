'use strict';

const elementsMenuLink = document.querySelectorAll('.menu__link');
let lastActiveMenu;
   elementsMenuLink.forEach(menuLink => { 
      menuLink.addEventListener('click', (evt) => {
         evt.preventDefault();
        const elementMenuSub = menuLink.parentElement.querySelector('.menu_sub');
            if (elementMenuSub) {
                        if (elementMenuSub != lastActiveMenu && lastActiveMenu) {
                           lastActiveMenu.classList.remove('menu_active');
                        }
                        elementMenuSub.classList.toggle('menu_active');
                        lastActiveMenu = elementMenuSub;
                        return false;
                     }
         })
      });

