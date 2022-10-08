'use strict';
// Contact Form Validaition
const fullName = document.querySelector('#full--name');
const phoneNo = document.querySelector('#phone--no');
const businessName = document.querySelector('#business--name');
const emailAddress = document.querySelector('#email--address');
const plansSelect = document.querySelector('#pricing--plans');
const textAreaMsg = document.querySelector('#textarea--message');
const submitBtn = document.querySelector('#submit--btn');

textAreaMsg.value = '';

const fullNameCheck = function () {
  if (fullName.value === '' || fullName.value.length < 4) {
    document
      .querySelector('.full--name--error--msg')
      .classList.remove('hidden');
    submitBtn.disabled = true;
  } else {
    document.querySelector('.full--name--error--msg').classList.add('hidden');
    submitBtn.disabled = false;
  }
};

const phoneNoCheck = function () {
  if (
    phoneNo.value === '' ||
    phoneNo.value.length < 11 ||
    phoneNo.value.length > 13
  ) {
    document.querySelector('.phone--no--error--msg').classList.remove('hidden');
    submitBtn.disabled = true;
  } else {
    document.querySelector('.phone--no--error--msg').classList.add('hidden');
    submitBtn.disabled = false;
  }
};

const businessNameCheck = function () {
  if (businessName.value === '') {
    document
      .querySelector('.business--name--error--msg')
      .classList.remove('hidden');
    submitBtn.disabled = true;
  } else {
    document
      .querySelector('.business--name--error--msg')
      .classList.add('hidden');
    submitBtn.disabled = false;
  }
};

const emailCheck = function () {
  if (emailAddress.value.match(validRegex)) {
    document
      .querySelector('.email--address--error--msg')
      .classList.add('hidden');
    submitBtn.disabled = false;
  } else {
    document
      .querySelector('.email--address--error--msg')
      .classList.remove('hidden');
    submitBtn.disabled = true;
  }
};

const plansSelectCheck = function () {
  // console.log(this.value);
  if (
    !this.value === 'pro' ||
    !this.value === 'premium' ||
    !this.value === 'standard' ||
    !this.value === 'special' ||
    !this.value === 'other'
  ) {
    document
      .querySelector('.select--btn--error--msg')
      .classList.remove('hidden');
    submitBtn.disabled = true;
  } else {
    document.querySelector('.select--btn--error--msg').classList.add('hidden');
    submitBtn.disabled = false;
  }
};

const textAreaCheck = function () {
  if (textAreaMsg.value === '' || textAreaMsg.value < 10) {
    document.querySelector('.textarea--error--msg').classList.remove('hidden');
    submitBtn.disabled = true;
  } else {
    document.querySelector('.textarea--error--msg').classList.add('hidden');
    submitBtn.disabled = false;
  }
};

fullName.addEventListener('input', fullNameCheck);
phoneNo.addEventListener('input', phoneNoCheck);
businessName.addEventListener('input', businessNameCheck);
emailAddress.addEventListener('input', emailCheck);
plansSelect.addEventListener('change', plansSelectCheck);
textAreaMsg.addEventListener('input', textAreaCheck);

submitBtn.addEventListener('click', function (e) {
  fullNameCheck();
  phoneNoCheck();
  businessNameCheck();
  emailCheck();
  textAreaCheck();
  if (plansSelect.value === 'Select Plan') {
    document
      .querySelector('.select--btn--error--msg')
      .classList.remove('hidden');
  } else {
    document.querySelector('.select--btn--error--msg').classList.add('hidden');
  }

  if (
    fullName.value === '' ||
    fullName.value.length < 4 ||
    phoneNo.value === '' ||
    phoneNo.value.length < 11 ||
    phoneNo.value.length > 13 ||
    businessName.value === '' ||
    !emailAddress.value.match(validRegex) ||
    textAreaMsg.value === '' ||
    textAreaMsg.value < 10 ||
    plansSelect.value === 'Select Plan'
  ) {
    submitBtn.disabled = true;
    e.preventDefault();
  } else {
    submitBtn.disabled = false;
  }
});

// Changing Visible Plan Div
const allPlans = document.querySelectorAll('.slide');
const toggleVisibility = function (visi, hid1, hid2, hid3) {
  // Current Visible Plan
  allPlans[visi].style.opacity = 1;

  // Hidden Plans
  allPlans[hid1].style.opacity = 0;
  allPlans[hid2].style.opacity = 0;
  allPlans[hid3].style.opacity = 0;
};

plansSelect.addEventListener('change', function (e) {
  // console.log(this.value);
  if (this.value === 'standard') {
    toggleVisibility(0, 1, 2, 3);
  } else if (this.value === 'pro') {
    toggleVisibility(1, 0, 2, 3);
  } else if (this.value === 'special') {
    toggleVisibility(2, 0, 1, 3);
  } else if (this.value === 'premium') {
    toggleVisibility(3, 0, 1, 2);
  } else if (this.value === 'other') {
    // Current Visible Plan
    allPlans[0].style.opacity = 0;

    // Hidden Plans
    allPlans[1].style.opacity = 0;
    allPlans[2].style.opacity = 0;
    allPlans[3].style.opacity = 0;
  } else {
    return;
  }
});
