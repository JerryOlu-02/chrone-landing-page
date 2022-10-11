'use strict';

// Menu Bar
const menuBar = document.querySelector('.hamburger--menu');

// Navbar Elements
const navbarEl = document.querySelector('.nav');
const navUlEl = document.querySelector('.nav--ul');
const gridDiv = document.querySelector('.grid--div');
const gridDivBars = document.querySelectorAll('.grid--div div');
const bar1El = document.querySelector('.bar--1');
const bar2El = document.querySelector('.bar--2');
const bar3El = document.querySelector('.bar--3');

gridDiv.style.height = '0';

const menuDropdown = function () {
  navbarEl.toggleAttribute('data-visible');
  navUlEl.toggleAttribute('data-visible');
  gridDiv.toggleAttribute('data-hidden');
  document.querySelector('.header--logo').toggleAttribute('data-visible');

  gridDivBars.forEach((gridDivBar) => {
    gridDivBar.toggleAttribute('data-visible');
  });

  if (gridDiv.hasAttribute('data-hidden')) {
    setTimeout(() => {
      gridDiv.style.height = '0';
    }, 1200);
  } else {
    gridDiv.style.height = '100vh';
  }

  bar1El.toggleAttribute('data-visible');
  bar2El.toggleAttribute('data-visible');
  bar3El.toggleAttribute('data-visible');
};

menuBar.addEventListener('click', menuDropdown);
