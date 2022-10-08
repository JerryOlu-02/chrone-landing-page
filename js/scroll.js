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
  if (
    e.target.classList.contains('scroll--left') ||
    e.target.classList.contains('move--left')
  ) {
    servicesGrid.scrollLeft -= 80;
  } else if (
    e.target.classList.contains('scroll--right') ||
    e.target.classList.contains('move--right')
  ) {
    servicesGrid.scrollLeft += 80;
  } else {
    return;
  }
});

// Dots Movement
const slides = document.querySelectorAll('.slide');
const dotDiv = document.querySelector('.dots--div');
const allDots = document.querySelectorAll('.dots');
allDots[0].classList.add('dot--active');

const checkSlide = function (ent, no) {
  if (ent.target.classList.contains(`service--${no}`)) {
    allDots.forEach((dot) => dot.classList.remove('dot--active'));
    allDots[no - 1].classList.add('dot--active');
  }
};

const slideFunc = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  // console.log(entry.target);

  checkSlide(entry, 1);
  checkSlide(entry, 2);
  checkSlide(entry, 3);
  checkSlide(entry, 4);
  checkSlide(entry, 5);
  checkSlide(entry, 6);
};

const slideObserver = new IntersectionObserver(slideFunc, {
  root: null,
  threshold: 0,
});

slides.forEach((sli) => {
  return slideObserver.observe(sli);
});

const checkTarget = function (sect) {
  servicesGrid.scrollLeft += slides[sect - 1].getBoundingClientRect().left - 27;

  allDots.forEach((slide) => slide.classList.remove('dot--active'));
};

dotDiv.addEventListener('click', function (e) {
  if (!e.target.classList.contains('dots')) return;
  let tag = e.target.dataset.current;

  checkTarget(tag);
  e.target.classList.add('dot--active');
});
