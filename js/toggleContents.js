'use strict';
const pricingContainer = document.querySelector('.pricing--container');

pricingContainer.addEventListener('click', function (e) {
  if (!e.target.classList.contains('view--features--img')) return;
  e.target.classList.toggle('rotate--btn');

  if (e.target.classList.contains('rotate--btn')) {
    // Show Plan Content
    e.target.closest('.view--features').nextElementSibling.style.opacity = 1;
    e.target.closest('.view--features').nextElementSibling.style.height =
      '100%';
    e.target.closest('.view--features').nextElementSibling.style.marginBottom =
      '20px';

    // Show Bottom Blue Div
    e.target.closest(
      '.view--features'
    ).nextElementSibling.nextElementSibling.style.display = 'block';
  } else {
    // Hide Plan Content
    e.target.closest('.view--features').nextElementSibling.style.opacity = 0;
    e.target.closest('.view--features').nextElementSibling.style.height = '0';
    e.target.closest('.view--features').nextElementSibling.style.marginBottom =
      '0';

    // Hide Bottom Blue Div
    e.target.closest(
      '.view--features'
    ).nextElementSibling.nextElementSibling.style.display = 'none';
  }
  // console.log(e.target.closest('.view--features').nextElementSibling);
});
