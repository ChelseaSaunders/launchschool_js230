"use strict";

document.addEventListener('DOMContentLoaded', () => {
  let thumbnails = document.querySelectorAll('li img');

  function enlarge() {
    event.preventDefault();
    let selectedPhoto = event.target.closest('img');
    let enlargedPhoto = document.querySelector('figure img');
    enlargedPhoto.src = selectedPhoto.dataset.imageSource;

    thumbnails.forEach((thumbnail) => {
      if (selectedPhoto === thumbnail) {
        thumbnail.classList.add('selected');
      } else {
        thumbnail.classList.remove('selected');
      }
    });
  }

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', enlarge)
  });
});