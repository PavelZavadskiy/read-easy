
const mobileMenu = document.querySelector('[data-menu]');
const openMenuBtn = document.querySelector('[data-menu-open]');
const closeMenuBtn = document.querySelector('[data-menu-close]');

function burgerMenu() {

  openMenuBtn.addEventListener('click', toggleMenu);
  // closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    // openMenuBtn.setAttribute('aria-expanded', false);
     document.body.classList.remove("no-scroll");
  });
};

const toggleMenu = () => {
  const isMenuOpen =
  openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  // console.log('mobileMenu= ', mobileMenu.classList);
  mobileMenu.classList.toggle('is-open');
  document.body.classList.toggle("no-scroll");
  // console.log('mobileMenu= ', mobileMenu.classList);

  // const scrollLockMethod = !isMenuOpen
  //   ? 'disableBodyScroll'
  //   : 'enableBodyScroll';
  // bodyScrollLock[scrollLockMethod](document.body);
};


export {burgerMenu, toggleMenu}