'use strict';
const emailValue = document.querySelector('.email');
const submit = document.querySelector('.submit--input');
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validiateEmail = function (input) {
  if (input.value.match(validRegex)) {
    // If mail Input is correct
    document
      .querySelector('.email--block > p:nth-of-type(2)')
      .classList.remove('hidden');
    document
      .querySelector('.email--block > p:nth-of-type(1)')
      .classList.add('hidden');

    emailValue.focus();
    return true;
  } else {
    // If Mail input is incorrect
    document
      .querySelector('.email--block > p:nth-of-type(1)')
      .classList.remove('hidden');

    document
      .querySelector('.email--block > p:nth-of-type(2)')
      .classList.add('hidden');

    emailValue.focus();
    return false;
  }
};

emailValue.addEventListener('input', function (e) {
  e.preventDefault();
  validiateEmail(emailValue);
});

submit.addEventListener('click', function (e) {
  if (validiateEmail(emailValue)) {
    document
      .querySelector('.email--block > p:nth-of-type(1)')
      .classList.add('hidden');

    document
      .querySelector('.email--block > p:nth-of-type(2)')
      .classList.add('hidden');

    emailValue.blur();
  } else {
    e.preventDefault();
  }
});
