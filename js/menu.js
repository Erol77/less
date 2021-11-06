const restourant = 'food-band';
const renderItems = (data) =>{
    console.log(data);
};
// http://erol.qlihost.ru/db.json
fetch(`http://erol.qlihost.ru/db.json`)
    .then((response) => response.json())
    .then((data) => {
        renderItems(data);
    })
    .catch((error)=>{
        console.log(error)
    });
    // .finally()