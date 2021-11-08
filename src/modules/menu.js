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
    const cartArray = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    const addToCart = (cartItem)=>{
        // console.log();
        if (cartArray.some((item) => item.id === cartItem.id)){
            cartArray.map((item =>{
                 if (item.id === cartItem.id){
                     item.count++;}                 
            return item;}));
        } else{
        cartArray.push(cartItem);
     }
        localStorage.setItem('cart',JSON.stringify(cartArray));
   
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
             card.querySelector('.button-card-text').addEventListener('click', () => {
                 const cartItem = {name: name,price: price,id:id,count: 1, };
                 addToCart(cartItem);
             });
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