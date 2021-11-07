// const array = [11,22,34,65];
const cardsRestaurants = document.querySelector('.cards-restaurants');
        //console.dir(cardsRestaurants);
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
/*
<a href="restaurant.html" class="card card-restaurant">
    <img src="img/pizza-plus/preview.jpg" alt="image" class="card-image" />
    <div class="card-text">
        <div class="card-heading">
            <h3 class="card-title">Пицца плюс</h3>
            <span class="card-tag tag">50 мин</span>
        </div>
        <!-- /.card-heading -->
        <div class="card-info">
            <div class="rating">
                4.5
            </div>
            <div class="price">От 900 ₽</div>
            <div class="category">Пицца</div>
        </div>
        <!-- /.card-info -->
    </div>
    <!-- /.card-text -->
</a>
<!-- /.card --></div>

*/
// array.forEach((elem,index,array) => {//в фу-ию приходит 3 аргумента, 1 элт ,2 его индех, 3 весь массив
//     if (index ===3 ){        console.log(elem);    }});

// for (let i=0; i < array.length; i++){
// console.log(array[i]);}

// array.forEach((elem,index,array) => {//в фу-ию приходит 3 аргумента, 1 элт ,2 его индех, 3 весь массив
//     console.log(elem);
    // console.log(index);
    // console.log(array);
// });