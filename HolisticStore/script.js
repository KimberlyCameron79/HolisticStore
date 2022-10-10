const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

const cart = document.getElementById('cart');
const cartInfo = document.getElementById('cart-info')

cartInfo.addEventListener('click',function(){
    cart.classList.toggle('show-cart')
})