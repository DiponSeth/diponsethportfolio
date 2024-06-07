// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});

// Menu Toggle
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('active');
};


// Scroll Features

document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const leftButton = document.getElementById('left-arrow');
  const rightButton = document.getElementById('right-arrow');
  const slideWidth = slides[0].getBoundingClientRect().width;

  let currentIndex = 0;

  rightButton.addEventListener('click', () => {
      currentIndex++;
      if (currentIndex >= slides.length) {
          currentIndex = 0;
      }
      track.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
  });

  leftButton.addEventListener('click', () => {
      currentIndex--;
      if (currentIndex < 0) {
          currentIndex = slides.length - 1;
      }
      track.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
  });

  // Add touch support for mobile devices
  track.addEventListener('touchstart', handleTouchStart, false);
  track.addEventListener('touchmove', handleTouchMove, false);

  let x1 = null;
  let y1 = null;

  function handleTouchStart(evt) {
      const firstTouch = evt.touches[0];
      x1 = firstTouch.clientX;
      y1 = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
      if (!x1 || !y1) {
          return;
      }

      const x2 = evt.touches[0].clientX;
      const y2 = evt.touches[0].clientY;
      const xDiff = x2 - x1;
      const yDiff = y2 - y1;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
          // Horizontal swipe
          if (xDiff > 0) {
              // Swipe right
              currentIndex--;
              if (currentIndex < 0) {
                  currentIndex = slides.length - 1;
              }
          } else {
              // Swipe left
              currentIndex++;
              if (currentIndex >= slides.length) {
                  currentIndex = 0;
              }
          }
          track.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
      }

      // Reset values
      x1 = null;
      y1 = null;
  }
});