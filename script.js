const menuIcon = document.querySelector('.menu');
const menu = document.querySelector('.nav-header');
const burgerMenu = document.querySelectorAll('.burger');
const navLinks = document.querySelectorAll('.nav-links');
const btnSign = document.querySelectorAll('.btnSign')


// menu and burger menu toggler and animation
menuIcon.addEventListener('click', () => {
   
    if(menu.classList.contains('hide')) {
        menu.classList.add('fadeIn');
        menu.classList.remove('hide');
        burgerMenu[1].classList.add('fadedMid');
        burgerMenu[0].classList.add('fadedTop');
        burgerMenu[2].classList.add('fadedBot');

    }else if (menu.classList.contains('fadeIn')){
        menu.classList.remove('fadeIn');
        menu.classList.add('hide');
        menu.classList.add('fadeOut');
        burgerMenu[1].classList.remove('fadedMid');
        burgerMenu[0].classList.remove('fadedTop');
        burgerMenu[2].classList.remove('fadedBot');
      
    }
})
navLinks.forEach(links => {
    links.addEventListener('click', ()=> {
        menu.classList.remove('fadeIn');
        menu.classList.add('hide');
        menu.classList.add('fadeOut');
        burgerMenu[1].classList.remove('fadedMid');
        burgerMenu[0].classList.remove('fadedTop');
        burgerMenu[2].classList.remove('fadedBot');
    })
});

// btnSign[0].addEventListener('click', ()=> {
    
// })