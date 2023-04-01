const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

let isLocked = false;
hamburger.addEventListener('click', function (e) {
  e.preventDefault();
  isLocked = !isLocked;

  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  console.log('User scrolled the page!');
  // 在這裡可以編寫畫面滑動時要執行的其他程式碼
  if (isLocked) {
    hamburger.click();
  }
}
