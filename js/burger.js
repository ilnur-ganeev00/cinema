let burger = document.getElementById('burger'),
closeBurger = document.getElementById('closeBurger');

closeBurger.onclick = function () {
    burger.style.display = 'none';
    closeBurger.style.display = 'none';
    
}


let burgerButton = document.getElementById('burgerButton');

burgerButton.onclick = function () {
    burger.style.display = 'block';
    closeBurger.style.display = 'block';
}