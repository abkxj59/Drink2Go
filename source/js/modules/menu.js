const menuOpenButton = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav');

const toggleMenu = () => {
  menu.classList.toggle('nav--opened');
}

const initializeMenu = () => {
  menu.classList.remove('nav--nojs');
  menu.classList.remove('nav--opened');
  menuOpenButton.addEventListener('click', toggleMenu);
}

export {initializeMenu};
