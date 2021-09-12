const menuIcon = document.querySelector('.menu');
const menu = document.querySelector('.nav-header');

menuIcon.addEventListener('click', () => {
    console.log('clicked');
    menu.classList.toggle('nav-active');
})