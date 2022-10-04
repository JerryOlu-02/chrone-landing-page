'use strict';

const loader = document.querySelector('#preloader');
const mainSection = document.querySelector('.main');

window.addEventListener('load', function () {
  loader.style.display = 'flex';

  setTimeout(() => {
    loader.style.display = 'none';
    mainSection.style.display = 'block';
  }, 140);
});
