import auth from "./auth";
const cardsRestaurants = document.querySelector('.cards-restaurants');        //console.dir(cardsRestaurants);

const partners = () => {    
    const renderItems = (data) => {       
        data.forEach((elem,index,array) => {
            const {image, kitchen, name, price, products,stars, time_of_delivery} = elem;

            const a = document.createElement('a');
            a.setAttribute('href','/restaurant.html');
            a.classList.add('card');
            a.classList.add('card-restaurant');
            // a.products = products;
            a.dataset.products = products;
            a.innerHTML = `
                    <img src="${image}" alt="image" class="card-image" />
                        <div class="card-text">
                            <div class="card-heading">
                                <h3 class="card-title">${name}</h3>
                                <span class="card-tag tag">${time_of_delivery} мин</span>
                            </div>
                            <div class="card-info">
                                <div class="rating">
                                    ${stars}
                                </div>
                                <div class="price">От ${price} ₽</div>
                                <div class="category">${kitchen}</div>
                            </div>
                        </div>`;  
            a.addEventListener('click',(e)=>{
                e.preventDefault();
                if (localStorage.getItem('user')){
                    localStorage.setItem('restaurant', JSON.stringify(elem));
                    window.location.href = "/restaurant.html";
                } else {
                    // auth
                    const buttonAuth = document.querySelector('.button-auth').click() ;

                }

            });
        cardsRestaurants.append(a);
        });
    };

    fetch('./db/partners.json')
        .then((response) => response.json())
        .then((data) => {
            renderItems(data);
        })
        .catch((error)=>{
            console.log(error);
        });
};
export default partners;
// array.forEach((elem,index,array) => {//в фу-ию приходит 3 аргумента, 1 элт ,2 его индех, 3 весь массив
//     console.log(elem);
    // console.log(index);
    // console.log(array);
// });