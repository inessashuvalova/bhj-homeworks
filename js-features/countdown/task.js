"use strict";

const timerId = setInterval(countdown, 1000);

   function countdown() {
    if (timerId == 0) {
       clearInterval(timerId); 
       alert("Вы победили в конкурсе!");
    document.getElementById("timer").textContent;
    }
  }
