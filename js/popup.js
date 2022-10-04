'use strict';
const linksPopUp = document.querySelectorAll('.pop--up');

linksPopUp.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
  });
});
