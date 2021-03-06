'use strict';

const books = document.querySelectorAll('.book');
const fontSize = document.querySelectorAll('.font-size');
fontSize.forEach(element => {
    element.addEventListener('click', (evt)=> {
        evt.preventDefault();
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        element.classList.add('font-size_active');
        books.forEach(book => {
        if(element.classList.contains('font-size_small')){
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        } else if(element.classList.contains('font-size_big')) {
            book.classList.remove('book_fs-small'); 
            book.classList.add('book_fs-big');
        } else {
           book.classList.remove('book_fs-big', 'book_fs-small') 
        }

    }) 
})    
})

const text = document.querySelector('.book__control_color');
const color = text.querySelectorAll('.color');
color.forEach(element => {
    element.addEventListener('click', (evt)=> {
        evt.preventDefault();
        document.querySelector('.color_active').classList.remove('color_active');
        element.classList.add('color_active');
        books.forEach(book => {
        if(element.classList.contains('text_color_black')){
            book.classList.remove('book_color-gray', 'book_color-whitesmoke');
            book.classList.add('book_color-black');
        } else if(element.classList.contains('text_color_gray')) {
            book.classList.remove('book_color-black', 'book_color-whitesmoke'); 
            book.classList.add('book_color-gray');
        } else {
           book.classList.remove('book_color-gray', 'book_color-black');
           book.classList.add('book_color-whitesmoke');
        }

    }) 
})    
})

const bg = document.querySelector('.book__control_background');
const bgColor = bg.querySelectorAll('.color');
bgColor.forEach(element => {
    element.addEventListener('click', (evt)=> {
        evt.preventDefault();
        document.querySelector('.color_active').classList.remove('color_active');
        element.classList.add('color_active');
        books.forEach(book => {
        if(element.classList.contains('bg_color_black')){
            book.classList.remove('book_bg-gray', 'book_bg-black');
            book.classList.add('book_bg-black');
        } else if(element.classList.contains('bg_color_gray')) {
            book.classList.remove('book_bg-black', 'book_bg-white'); 
            book.classList.add('book_bg-gray');
        } else {
           book.classList.remove('book_bg-gray', 'book_bg-black');
           book.classList.add('book_bg-white');
        }

    }) 
})    
})