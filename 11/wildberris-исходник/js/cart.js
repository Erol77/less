const cart = function (){
    
    const btnCart= document.querySelector('.button-cart');
    const cart= document.querySelector('.overlay');//#modal-cart
    const btnClose = cart.querySelector('.modal-close');
    const goodsContainer = document.querySelector('.long-goods-list');
    const cartTable = document.querySelector('.cart-table__goods');
    const modalForm = document.querySelector('.modal-form');
    const cardTableTotal = document.querySelector('.card-table__total');

    const deleteCartItem = (id) => {
        const cart =JSON.parse(localStorage.getItem('cart'));
        const newCart = cart.filter(good=>{
            return good.id != id;
        });
        localStorage.setItem('cart', JSON.stringify(newCart));
        renderCartGoods(JSON.parse(localStorage.getItem('cart')));
    };
    const plusCartItem = (id) => {
        const cart =JSON.parse(localStorage.getItem('cart'));
        const newCart =  cart.map(good => {
                if(good.id === id){
                    good.count++;
                } return good;});
        localStorage.setItem('cart', JSON.stringify(newCart));
        renderCartGoods(JSON.parse(localStorage.getItem('cart')));
    };
    const minusCartItem = (id) => {
        const cart =JSON.parse(localStorage.getItem('cart'));
        const newCart =  cart.map(good => {
                if(good.id === id){
                    if(good.count > 0){
                        good.count--;
                    }
                } return good;});
        localStorage.setItem('cart', JSON.stringify(newCart));
        renderCartGoods(JSON.parse(localStorage.getItem('cart')));
    };

    const addToCart = (id) => {
        const goods = JSON.parse(localStorage.getItem('goods'));
        const clickedGood = goods.find(good => good.id === id);
        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')):[];
        if(cart.some(good => good.id === clickedGood.id)){
            cart.map(good => {
                if(good.id === clickedGood.id){
                    good.count++;
                } return good;
            });
        } else {
            clickedGood.count = 1;
            cart.push(clickedGood);
        };
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const renderCartGoods = (goods) =>{
        cartTable.innerHTML='';
        let arrayTotal = 0;
        goods.forEach(good =>{
            const tr = document.createElement('tr');
            tr.innerHTML=`
                        <td>${good.name}</td>
						<td>${good.price}$</td>
						<td><button class="cart-btn-minus"">-</button></td>
						<td>${good.count}</td>
						<td><button class=" cart-btn-plus"">+</button></td>
						<td>${+good.price * +good.count}$</td>
						<td><button class="cart-btn-delete"">x</button></td>
                        `;
                        arrayTotal += +good.price * +good.count;
                        cartTable.append(tr);
                        tr.addEventListener('click',(e)=>{
                            if(e.target.classList.contains('cart-btn-minus')){
                                minusCartItem(good.id);
                            } else if(e.target.classList.contains('cart-btn-plus')){
                                plusCartItem(good.id);
                            } else if(e.target.classList.contains('cart-btn-delete')){
                                deleteCartItem(good.id);
                            }
                        });
        }); cardTableTotal.textContent = arrayTotal;
        
    };

    btnCart.addEventListener('click', function () {
        const cartArray = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')):[];
        renderCartGoods(cartArray);
        cart.style.display = 'flex';
    });
    btnClose.addEventListener('click', function () {
        cart.style.display = '';
    });
    cart.addEventListener('click', (event) => {
        if(!event.target.closest('.modal') && event.target.classList.contains('overlay'))
        cart.style.display = '';
    });
    window.addEventListener('keydown', (e)=>{
        if(e.key === 'Escape') cart.style.display = '';
    });

    const sendForm = () =>{
        const iModalForm = modalForm.querySelector('.modal-input-name');
        const pModalForm = modalForm.querySelector('.modal-input-phone');

        const cartArray = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')):[];
        fetch(//'https://erol.qlihost.ru/veliev-portfolio/json/json',
             'https://jsonplaceholder.typicode.com/posts',
             {
            method: 'POST', 
            //mode: 'no-cors', // no-cors, *cors, same-origin
            //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            //credentials: 'omit',//'include',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            //redirect: 'follow', // manual, *follow, error
            //referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify({
                cart: cartArray,
                name: iModalForm.value ,
                phone: pModalForm.value
            })
        }).then(()=>{cart.style.display = '';
                localStorage.removeItem('cart');
            });
    };
    modalForm.addEventListener('submit',(e)=>{
        e.preventDefault();        
        sendForm();}      );
    
    if(goodsContainer){
        goodsContainer.addEventListener('click',(event)=>{         
            if(event.target.closest('.add-to-cart')){
                const buttonToCard = event.target.closest('.add-to-cart');
                const goodId = buttonToCard.dataset.id;
                addToCart(goodId);
            }

        });
    }
};
cart();