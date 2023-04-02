const hamburger = document.querySelector('.hamburger');
const popupnav = document.querySelector('.popup');
const popup = document.querySelector('.popup');

let isLocked = false;
hamburger.addEventListener('click', function (e) {
  e.preventDefault();
  isLocked = !isLocked;

  if (isLocked) {
    hamburger.classList.toggle('active');
    popup.classList.toggle('show');
    // popupnav.style.display = 'block';
  } else {
    hamburger.classList.remove('active');
    popup.classList.remove('show');
    // popupnav.style.display = 'none';
  }
});
