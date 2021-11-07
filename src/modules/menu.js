const menu = () => {
    const cardsMenu = document.querySelector('.cards-menu');

    const restaurant = JSON.parse(localStorage.getItem('restaurant'));
    const changeTitle = (restaurant) => {
        const restaurantTitle = document.querySelector('.restaurant-title');
        const rating = document.querySelector('.rating');
        const price = document.querySelector('.price');
        const category = document.querySelector('.category');

        restaurantTitle.textContent = restaurant.name;
        rating.textContent = restaurant.stars;
        price.textContent = `От ${restaurant.price} ₽`;
        category.textContent = restaurant.kitchen;
    };
    const renderItems = (data) =>{
        // console.log(data);
        data.forEach((elem,index,array) => {
            // console.log(elem)
            const {description, id, image, name, price} = elem;
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${image}" alt="${name}" class="card-image" />
                <div class="card-text">
                    <div class="card-heading">
                        <h3 class="card-title card-title-reg">${name}</h3>
                    </div>            
                    <div class="card-info">
                        <div class="ingredients">${description}
                        </div>
                    </div>
                    <div class="card-buttons">
                        <button class="button button-primary button-add-cart">
                            <span class="button-card-text">В корзину</span>
                            <span class="button-cart-svg"></span>
                        </button>
                        <strong class="card-price-bold">${price} ₽</strong>
                    </div>
                </div>
            `;
            cardsMenu.append(card);
            });
    };
    // http://erol.qlihost.ru/db.json
    if (restaurant){
        changeTitle(restaurant);
        fetch(`./db/${restaurant.products}`)
        .then((response) => response.json())
        .then((data) => {
            renderItems(data);
        })
        .catch((error)=>{
            console.log(error)
        });
        // .finally()
    }else{
        window.location.href = '/';
    }

};
export default menu;