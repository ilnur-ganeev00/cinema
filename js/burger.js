let burger = document.getElementById('burger'),
closeBurger = document.getElementById('closeBurger');

closeBurger.onclick = function () {
    closeBurger.style.display = 'none';
    burger.classList.toggle('showBurgerNav');
}


let burgerButton = document.getElementById('burgerButton');

burgerButton.onclick = function () {
    closeBurger.style.display = 'block';
    burger.classList.add('showBurgerNav');
}