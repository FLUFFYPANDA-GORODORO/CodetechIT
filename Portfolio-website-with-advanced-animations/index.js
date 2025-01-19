// ---


// gsap.from(".header__logo-img-cont", {
//   y:-50,
//   opacity:0,
//   delay:0.2
  
// })

gsap.from(".header__main li " , {
  y:-50,
  opacity:0,
  delay:0.3,
  stagger:1
})

gsap.from(".header__logo-sub",{
  y:-50,
  opacity:0,
  delay:0.2,
 
})

gsap.from(".heading-primary" ,{
  x:-300,
  opacity:0,
  delay:0.8
})

gsap.from(".text-primary" ,{
  x:300,
  opacity:0,
  delay:0.8
})





const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close',
);
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');
const circle = document.querySelectorAll('.circle');

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active');
  } else {
    smallMenu.classList.add('header__sm-menu--active');
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  } else {
    headerHamMenuBtn.classList.add('d-none');
    headerHamMenuCloseBtn.classList.remove('d-none');
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active');
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  });
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container');

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html';
});

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.circle');

const colors = [
  '#000',
  // '#ffb56b',
  // '#fdaf69',
  // '#f89d63',
  // '#f59761',
  // '#ef865e',
  // '#ec805d',
  // '#e36e5c',
  // '#df685c',
  // '#d5585c',
  // '#d1525c',
  // '#c5415d',
  // '#c03b5d',
  // '#b22c5e',
  // '#ac265e',
  // '#9c155f',
  // '#950f5f',
  // '#830060',
  // '#7c0060',
  // '#680060',
  // '#60005f',
  // '#48005f',
  // '#3d005e',
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener('mousemove', function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + 'px';
    circle.style.top = y - 12 + 'px';

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

console.log(circle.classList);
