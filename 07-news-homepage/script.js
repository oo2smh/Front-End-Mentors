
// NAVIGATION TOGGLE FUNCTIONALITY
const nav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');

function showNav() {
  const visibility = nav.getAttribute('data-visible');


  if(visibility === "false") {
    nav.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true);
    navToggle.setAttribute('data-open', true);
  } else {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    navToggle.setAttribute('data-open', false);
  }

}

navToggle.addEventListener('click', showNav);
