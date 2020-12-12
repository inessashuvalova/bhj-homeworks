'use strict';

const elementsLink = Array.from(document.querySelectorAll('.menu__link'));
for (let i = 0; i < elementsLink.length; i++) {
   element = elementsLink[i];
   element.onclick = function () {
      let listMenu = Array.from(document.querySelectorAll('.menu'));
      alert(listMenu);
   };
}

let lastActive;

for (let i = 0; i < elementsLink.length; i++) {
   elementsLink[i].onclick = function () {
      const elementSub = this.closest('.menu__item').querySelector('.menu_sub');
      if (elementSub) {
         if (elementSub != lastActive) {
            lastActive.classList.remove('menu_active');
         }
         return false;
      }
   }
} 