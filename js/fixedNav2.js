'use strict';
// FIXED NAVBAR
const newNavbar = document.querySelector('.navbar');
const newSection = document.querySelector('#section--1');

const navFixed = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    newNavbar.classList.remove('fixed--nav');
    newNavbar.style.backgroundColor = 'transparent';
  } else {
    newNavbar.classList.add('fixed--nav');
    newNavbar.style.backgroundColor = '#fff';
  }
};

const navObserver = new IntersectionObserver(navFixed, {
  root: null,
  threshold: 0,
});

navObserver.observe(newSection);
