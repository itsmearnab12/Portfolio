// Certificates slider
const slider = document.getElementById('slider');
const leftBtn = document.querySelector('.left.btn');
const rightBtn = document.querySelector('.right.btn');

leftBtn.addEventListener('click', () => {
  slider.scrollBy({ left: -400, behavior: 'smooth' });
});
rightBtn.addEventListener('click', () => {
  slider.scrollBy({ left: 400, behavior: 'smooth' });
});
