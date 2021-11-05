//use strict;
//console.log('main.js');
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');


buttonAuth.addEventListener('click', ()=>{
//    console.dir(modalAuth);
   modalAuth.style.display = 'flex';
});

closeAuth.addEventListener('click', ()=>{
//    console.dir(modalAuth);
   modalAuth.style.display = 'none';
});

