'use strict';
const navbar = document.querySelector('.navbar');
const section1 = document.querySelector('#section--1');
const heroPage = document.querySelector('.hero--page');

navbar.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav--link')) {
    e.preventDefault();
    const currentSect = e.target.getAttribute('href');

    document.querySelector(currentSect).scrollIntoView({ behavior: 'smooth' });

    if (!gridDiv.hasAttribute('data-hidden')) {
      menuDropdown();
    }
  }
});

// FIXED NAVBAR

const navFixed = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    navbar.classList.remove('fixed--nav');
    navbar.style.backgroundColor = 'transparent';
  } else {
    navbar.classList.add('fixed--nav');
    navbar.style.backgroundColor = '#fff';
  }
};

const navObserver = new IntersectionObserver(navFixed, {
  root: null,
  threshold: 0,
});

navObserver.observe(section1);

// Scroll Through Services Section
const servicesGrid = document.querySelector('.services--grid');
const scrollDiv = document.querySelector('.scroll--div');

scrollDiv.addEventListener('click', function (e) {
  if (e.target.classList.contains('scroll--left')) {
    servicesGrid.scrollLeft -= 80;
  } else if (e.target.classList.contains('scroll--right')) {
    servicesGrid.scrollLeft += 80;
  } else {
    return;
  }
});
