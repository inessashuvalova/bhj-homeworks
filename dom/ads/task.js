'use strict';

const rotatorCase = document.querySelectorAll('.rotator__case');

let i = 0;
let timer = setInterval(() => {
    rotatorCase[i].classList.remove('rotator__case_active');
    i++;
    if (i === rotatorCase.length);
    rotatorCase[i].style.color = rotatorCase[i].dataset.color;
    rotatorCase[i].classList.add('rotator__case_active');
}, rotatorCase[i].dataset.speed);




