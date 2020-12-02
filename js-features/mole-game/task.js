'use strict';
const winCounter = 0, looseCounter = 0;

for (let i = 1, element; i < 10; i++) {
   element = document.getElementById(`hole${i}`); 

   element.onclick = function() { 
      if (this.className == "hole hole_has-mole") {
         winCounter++; 
         document.getElementById("dead").textContent = winCounter;
         if (winCounter == 10) {alert("Winner!"); reset();} 
      } else {
         looseCounter++;
         document.getElementById("lost").textContent = looseCounter;
         if (looseCounter == 10) {alert("Loser!"); reset();}
      }
   }
}

function reset() {
   winCount = looseCounter = 0;
   document.getElementById("dead").textContent = winCounter;
   document.getElementById("lost").textContent = looseCounter;
};
