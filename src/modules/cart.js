const cart = ()=>{
    const cartButton = document.getElementById('cart-button');
    const modalCart = document.querySelector('.modal-cart');
    const close = modalCart.querySelector('.close');
    const clearCart = document.querySelector('.clear-cart');

    cartButton.addEventListener('click', (e)=>{
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