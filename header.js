const hamburgerButtonElement = document.querySelector('.header-left');
const drawerElement = document.querySelector('.header__nav');
const bodyElement = document.querySelector('body');

hamburgerButtonElement.addEventListener('click', (event) => {
    drawerElement.classList.toggle('open');
    event.stopPropagation();
});
bodyElement.addEventListener('click', (event) => {
    drawerElement.classList.remove('open');
    event.stopPropagation();
});