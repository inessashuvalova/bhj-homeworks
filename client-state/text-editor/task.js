'use strict';

const textArea = document.getElementById('editor');

document.addEventListener('DOMContentLoaded', () => loadDataFromLocalStorage());
textArea.addEventListener('input', () => saveDataInLocalStorage());

function saveDataInLocalStorage() {
  localStorage.setItem('text', textArea.value);
}

function loadDataFromLocalStorage() {
  textArea.value = localStorage.getItem('text');
}
