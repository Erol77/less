const cart = ()=>{
    const cartButton = document.getElementById('cart-button');
    const modalCart = document.querySelector('.modal-cart');
    const close = modalCart.querySelector('.close');
    const clearCart = document.querySelector('.clear-cart');
    const body = modalCart.querySelector('.modal-body');

    const decrementCount = (id) =>{
        const cartArray = JSON.parse(localStorage.getItem('cart'));
        cartArray.map((item) =>{
            if (item.id === id){
                if (item.count > 0){
                   item.count--;  
                } else {
                    item.count = 0;
                }
               
            }
            return item;
        });
        localStorage.setItem('cart',JSON.stringify(cartArray));
        renderItems(cartArray);
    };
    const incrementCount = (id) =>{
        const cartArray = JSON.parse(localStorage.getItem('cart'));
        cartArray.map((item) =>{
            if (item.id === id){
               item.count++; 
            }
            return item;
        });
        localStorage.setItem('cart',JSON.stringify(cartArray));
        renderItems(cartArray);
    };

    const renderItems = (data) => {
        body.innerHTML = '';
        data.forEach(cartItem => {
            console.log(cartItem);
            const cartEltm = document.createElement('div');
            cartEltm.classList.add('food-row');
            cartEltm.innerHTML = `
                    <span class="food-name">${cartItem.name}</span>
					<strong class="food-price">${cartItem.price} ₽</strong>
					<div class="food-counter">
						<button class="counter-button btn-dec">-</button>
						<span class="counter">${cartItem.count}</span>
						<button class="counter-button btn-inc">+</button>
					</div>
            `;
            cartEltm.querySelector('.btn-dec').addEventListener('click',()=>{
                console.log('-');
                decrementCount(cartItem.id);
            });
            cartEltm.querySelector('.btn-inc').addEventListener('click',()=>{
                console.log('+');
                incrementCount(cartItem.id);
            });
            body.append(cartEltm);
        });
    };

    cartButton.addEventListener('click', (e)=>{
        
        if (localStorage.getItem('cart')){
            renderItems(JSON.parse(localStorage.getItem('cart')));
        }
        modalCart.classList.add('is-open');
    });
    close.addEventListener('click', ()=>{
        modalCart.classList.remove('is-open');
    });
    clearCart.addEventListener('click', () => {
        modalCart.classList.remove('is-open');
    });
};
export default cart;

/*
				<div class="food-row">
					<span class="food-name">Ролл угорь стандарт</span>
					<strong class="food-price">250 ₽</strong>
					<div class="food-counter">
						<button class="counter-button">-</button>
						<span class="counter">1</span>
						<button class="counter-button">+</button>
					</div>
				</div>*/