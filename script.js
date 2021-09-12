const menuIcon = document.querySelector('.menu');
const menu = document.querySelector('.nav-header');

menuIcon.addEventListener('click', () => {
   
    if(menu.classList.contains('hide')) {
        menu.classList.add('fadeIn');
        menu.classList.remove('hide');
    }else if (menu.classList.contains('fadeIn')){
        menu.classList.remove('fadeIn');
        menu.classList.add('hide');
        menu.classList.add('fadeOut');
    }
})