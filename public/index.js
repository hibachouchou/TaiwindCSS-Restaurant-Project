const restau = document.querySelector('#restau');
const menu = document.querySelector('#menu');

restau.addEventListener('click', (e) => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});