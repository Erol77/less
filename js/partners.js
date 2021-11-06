// const array = [11,22,34,65];
'use strict';
const renderItems = (data) => {
    console.log(data);
    data.forEach((elem,index,array) => {
    console.log(elem)});
};

fetch('./db/partners.json')
    .then((response) => response.json())
    .then((data) => {
        renderItems(data);
    })
    .catch((error)=>{
        console.log(error);
    });


// array.forEach((elem,index,array) => {//в фу-ию приходит 3 аргумента, 1 элт ,2 его индех, 3 весь массив
//     if (index ===3 ){        console.log(elem);    }});

// for (let i=0; i < array.length; i++){
// console.log(array[i]);}

// array.forEach((elem,index,array) => {//в фу-ию приходит 3 аргумента, 1 элт ,2 его индех, 3 весь массив
//     console.log(elem);
    // console.log(index);
    // console.log(array);
// });