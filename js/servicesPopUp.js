'use strict';
const sectionThreeShadow = document.querySelector('.section--3--shadow');
const sectionThree = document.querySelector('#section--3');
const popUps = document.querySelectorAll('.pop--up');

const togglePopups = function (cur, hide1, hide2, hide3, hide4, hide5) {
  popUps[cur].classList.add('show--pop--up');
  popUps[hide1].classList.remove('show--pop--up');
  popUps[hide2].classList.remove('show--pop--up');
  popUps[hide3].classList.remove('show--pop--up');
  popUps[hide4].classList.remove('show--pop--up');
  popUps[hide5].classList.remove('show--pop--up');
  sectionThreeShadow.classList.add('pop--up--shadow');
};

sectionThree.addEventListener('click', function (e) {
  if (!e.target.classList.contains('btn--learn')) {
    popUps.forEach((popUp) => popUp.classList.remove('show--pop--up'));
    sectionThreeShadow.classList.remove('pop--up--shadow');
  } else {
    if (e.target.closest('.slide').classList.contains('service--1')) {
      togglePopups(0, 1, 2, 3, 4, 5);
    } else if (e.target.closest('.slide').classList.contains('service--2')) {
      togglePopups(1, 0, 2, 3, 4, 5);
    } else if (e.target.closest('.slide').classList.contains('service--3')) {
      togglePopups(2, 0, 1, 3, 4, 5);
    } else if (e.target.closest('.slide').classList.contains('service--4')) {
      togglePopups(3, 1, 2, 0, 4, 5);
    } else if (e.target.closest('.slide').classList.contains('service--5')) {
      togglePopups(4, 1, 2, 3, 0, 5);
    } else if (e.target.closest('.slide').classList.contains('service--6')) {
      togglePopups(5, 1, 2, 3, 4, 0);
    }
    console.log(e.target.closest('.slide'));
  }
  return;
});
