const cart = function (){
    
    const btnCart= document.querySelector('.button-cart');
    const cart= document.querySelector('.overlay');//#modal-cart
    const btnClose = cart.querySelector('.modal-close');

    btnCart.addEventListener('click', function () {
        cart.style.display = 'flex';
    });
    btnClose.addEventListener('click', function () {
        cart.style.display = '';
    });
    cart.addEventListener('click', (event) => {
        if(!event.target.closest('.modal'))
        cart.style.display = '';
    });
    window.addEventListener('keydown', (e)=>{
        if(e.key === 'Escape') cart.style.display = '';
    });
};
cart();