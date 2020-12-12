'use strict';

const modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");

const modalClose = document.getElementsByClassName("modal__close");
modalClose.onclick = function () {
    modalMain.classList.remove("modal_active")
};

const modalSuccess = document.getElementById("modal_success");
modalClose.onclick = function() {
    modalSuccess.classList.add("modal_active");
}



