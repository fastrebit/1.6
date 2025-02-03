const menu = document.querySelector('.menu');

function checkWindowSize() {
  if (window.innerWidth >= 1366) {
    menu.classList.remove('menu--active'); //
  }
}
window.addEventListener('resize', checkWindowSize);
