'use strict';
const allSections = document.querySelectorAll('.section');

const showSections = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.add('observer--show');
  observer.unobserve(entry.target);
};

const opacityObserver = new IntersectionObserver(showSections, {
  root: null,
  threshold: 0,
});

allSections.forEach((section) => opacityObserver.observe(section));
