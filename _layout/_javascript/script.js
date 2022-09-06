'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const btnPrev = document.getElementById('left');
const btnNext = document.getElementById('right');
const container = document.querySelector('.image-container');
const imgs = document.getElementById('imgs');

const img = document.querySelectorAll('#imgs img');

let idx = 0;
let interval = setInterval(run, 3000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}

btnNext.addEventListener('click', function () {
  idx++;
  changeImage();
  resetInterval();
});

btnPrev.addEventListener('click', function () {
  idx--;
  changeImage();
  resetInterval();
});
