'use strict';

const divTitle = document.querySelector('div#poll__title');
const divAnswers = document.querySelector('div#poll__answers');


function addTemplate (answer) {
    const newButton = document.createElement('button');
    newButton.className = "poll__answer";
    newButton.innerHTML = answer;
    newButton.addEventListener('click', (evt) => {
        alert('Спасибо, ваш голос засчитан!')
    });
    divAnswers.append(newButton);
 }

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.setRequestHeader('Content-Type','application/json');
xhr.responseType ='json';
xhr.send();
xhr.addEventListener('readystatechange', function() {
   if (xhr.readyState === 4) {
      const pollResponce = xhr.response;
      divTitle.insertAdjacentHTML('afterbegin', pollResponce.data.title);

      Object.values(pollResponce.data.answers).forEach((element) => addTemplate(element));
   };
});
