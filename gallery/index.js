'use strict';

let sliderPhoto = [
  'i/breuer-building.jpg',
  'i/guggenheim-museum.jpg',
  'i/headquarters.jpg',
  'i/IAC.jpg',
  'i/new-museum.jpg'
];

let currentPhoto = document.getElementById('currentPhoto'),
prevPhoto = document.getElementById('prevPhoto'),
nextPhoto = document.getElementById('nextPhoto'),
counter = 0;

currentPhoto.src = sliderPhoto[counter];

nextPhoto.onclick = () => {
  counter++;
  if (counter >= sliderPhoto.length) {
  	counter = 0;
  }
  currentPhoto.src = sliderPhoto[counter];
}

prevPhoto.onclick = () => {
  counter--;
  if (counter < 0) {
  	counter = sliderPhoto.length - 1;
  }
  currentPhoto.src = sliderPhoto[counter];
}

