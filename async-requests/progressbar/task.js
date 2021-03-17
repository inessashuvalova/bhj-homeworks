'use strict';

const progress = document.getElementById('progress');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php');
xhr.send();
xhr.onload = function () {
    if (xhr.status != 200) {
        alert('Ошибка: ' + xhr.status);
        return;
    }};
    xhr.onprogress = function(event) { 
        if (event.lengthComputable) {
        let number = event.total / event.loaded;
        console.log(number);
    }}