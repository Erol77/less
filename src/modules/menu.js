'use strict';
const menu = () => {
    const restourant = 'food-band';
    const renderItems = (data) =>{
        console.log(data);
        data.forEach((elem,index,array) => {
            console.log(elem)});
    };
    // http://erol.qlihost.ru/db.json
    fetch(`./db/${restourant}.json`)
        .then((response) => response.json())
        .then((data) => {
            renderItems(data);
        })
        .catch((error)=>{
            console.log(error)
        });
        // .finally()
};
export default menu;