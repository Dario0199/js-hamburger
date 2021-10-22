const menuHamburger = document .querySelector('.hamburger-menu')

const hamburger = document .querySelector('.fa-bars')

const exit = document .querySelector('.close');
//Aprire l'hamburger menù
hamburger.addEventListener ('click', function() {

    menuHamburger.classList.add('active')
});
//Chiudere l'hamburger menù
exit.addEventListener ('click', function(){

    menuHamburger.classList.remove('active')
});