const menuBtn = document.querySelector('[data-menu]');
const navHide = document.querySelector('[data-hide]');

menuBtn.addEventListener('click', ()=> {
    navHide.classList.toggle('hideNav');
    if(menuBtn.src = './assets/images/icon-menu.svg'){
        menuBtn.src= './assets/images/icon-menu-close.svg';
    }else{
        menuBtn.src= './assets/images/icon-menu.svg';
    }
})