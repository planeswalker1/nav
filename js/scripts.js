let menu = document.querySelector('.nav__menu');
let responsveNav = document.querySelector('.nav__responsive');
let textOpen = document.querySelector('.text--open');
let textClose = document.querySelector('.text--close');

menu.addEventListener('click', function () {
  responsveNav.classList.toggle('nav__menu--open');
  textOpen.classList.toggle('hidden');
  textClose.classList.toggle('hidden');
});
