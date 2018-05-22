'use strict';

let slider = document.getElementById('slider');

let imgArray = [
  'i/airmax-jump.png',
  'i/airmax-on-foot.png',
  'i/airmax-playground.png',
  'i/airmax-top-view.png',
  'i/airmax.png'
];

let count = 0;
slider.src = imgArray[count];

setInterval(() => {
  count++;
  if (count >= imgArray.length) {
    count = 0;
  }
  slider.src = imgArray[count];
}, 5000);