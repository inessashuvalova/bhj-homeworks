"use strict";

const counterClick = document.getElementById("clicker__counter").textContent;
const cookie = document.getElementById("cookie"); 

cookie.onclick = function() {
   if(counterClick.textContent % 2 !== 0) {
    cookie.width = 300;
    cookie.height = 150;
    } else {
        cookie.width = 200;
        cookie.height = 200;
    }
   document.getElementById("clicker__counter").textContent = counterClick;

};
