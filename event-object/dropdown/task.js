'use strict';

let lastActiveDropdown;

const dropdownValue = Array.from(document.querySelectorAll('.dropdown__value'));
for (let i = 0; i < dropdownValue.length; i++) {
   dropdownValue[i].addEventListener("click", function (evt) {
      let activeDropdown = this.closest('.dropdown').querySelector('.dropdown__list');
      if (activeDropdown) {
         if (activeDropdown != lastActiveDropdown && lastActiveDropdown) {
            lastActiveDropdown.classList.remove('dropdown__list_active');
         }
      }
      activeDropdown.classList.toggle('dropdown__list_active');
      lastActiveDropdown = activeDropdown;
      evt.preventDefault();
   }, false);
}

const dropdownLink = document.querySelectorAll('.dropdown__link');
dropdownLink.forEach(link => {
  link.addEventListener('click', function(evt) {
    dropdownValue.textContent = link.textContent; 
    dropdownList.classList.remove('dropdown__list_active');
    evt.preventDefault();
  }, false);
})