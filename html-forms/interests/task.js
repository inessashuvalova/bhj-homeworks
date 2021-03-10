'use strict';

const interestsMain = document.querySelector('.interests_main');
interestsMain.addEventListener('click', (e) => {
   let currentElement = e.target;
   const childElements = Array.from(e.target.closest('li').querySelectorAll('label input'));
   for (let i = 1; i < childElements.length; i++) {
      childElements[i].checked = childElements[0].checked;
   }

   childElements.forEach((el) => el.checked = childElements[0].checked)
});



