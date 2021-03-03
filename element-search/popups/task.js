'use strict';

const modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");
const modalClose = document.querySelectorAll('.modal__close');
    modalClose.forEach(element => {
   element.addEventListener("click", function() {
    element.closest('.modal_active').classList.remove("modal_active");
   })
 }
);

const modalSuccess = document.getElementById("modal_success");
modalClose[1].onclick = function() {
    modalSuccess.classList.add("modal_active");
}