const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

let isLocked = false;
hamburger.addEventListener('click', function (e) {
  e.preventDefault();
  if (!isLocked) {
    document.body.classList.add('lock-scroll');
    isLocked = true;
  } else {
    document.body.classList.remove('lock-scroll');
    isLocked = false;
  }
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);
