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

// Lazy Images
const images = document.querySelectorAll('.feature--img');

const imgFunc = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy--img');
  });

  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(imgFunc, {
  root: null,
  threshold: 0,
});

images.forEach((image) => {
  imageObserver.observe(image);
});
