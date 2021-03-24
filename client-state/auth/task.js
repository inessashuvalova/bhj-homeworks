'use strict';

const signin = document.querySelector('#signin');
const welcomeElement = document.querySelector('#welcome');
const userIdElement = document.querySelector('#user_id');
const signinForm = document.querySelector('#signin__form');
const logoutBtn = document.querySelector('#logout__btn'); 
let userID = null;

document.addEventListener('DOMContentLoaded', () => {
   const userID = localStorage.getItem('userID');
   if (userID) {
      authorization(userID);
     return;
   }
   signin.classList.add('signin_active');
 });


signinForm.addEventListener('submit', (evt) => {
   evt.preventDefault();
   let formData = new FormData(signinForm);
   login(formData);
}, false);


logoutBtn.addEventListener('click', (evt) => {
   evt.preventDefault();
   localStorage.removeItem('userID');
   welcomeElement.classList.remove('welcome_active');
   signin.classList.add('signin_active');
}, false);



function login(formData) {
   let xhr = new XMLHttpRequest();
   xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
   xhr.responseType ='json';
   xhr.send(formData);
   xhr.addEventListener('readystatechange', function() {
      if (xhr.readyState === 4) {
         let response = xhr.response;
         if (response.success) {
            userID = response.user_id;
            signinForm.reset();
            authorization(userID);
            return;
         } else {
            alert('Неверные логин/пароль');
            signinForm.reset();
            return;
         }
      }
   });
}

function authorization(userID) {
   signin.classList.remove('signin_active')
   welcomeElement.classList.add('welcome_active');
   userIdElement.textContent = userID;
   localStorage.setItem('userID', userID);
}


