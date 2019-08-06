// Your code goes here

const busInImg = document.querySelector('.hideMe');
const nav = document.querySelector('.nav');
const mainNav = document.querySelector('.main-navigation');

// "mouseover" change color for nav elements for .5ms 
nav.addEventListener('mouseover', (event) => {
  event.target.style.color = 'crimson';

  setTimeout( () => {
    event.target.style.color = '';
  }, 500)
}, false);

// "onload event" make bus animating cross navigation
window.addEventListener('load', () => {
  busInImg.classList.replace('hideMe', 'slideRight');
});


// On page scroll change navigation color
window.addEventListener('scroll', () => {
  if (this.pageYOffset > 0) {
    mainNav.style.background = '#86d089';

  } else if (this.pageYOffset < 100) {
    mainNav.style.background = 'white';
  busInImg.classList.replace( 'slideRight', 'hideMe');

  }
})

function logSelection(event) {
  const log = document.getElementById('log');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector('input');
input.addEventListener('select', logSelection);

// function zoom(event) {
//   event.preventDefault();

//   scale += event.deltaY * -0.01;

//   // Restrict scale
//   scale = Math.min(Math.max(.125, scale), 4);

//   // Apply scale transform
//   el.style.transform = `scale(${scale})`;
// }

// let scale = 1;
// const el = document.querySelector('div');
// el.onwheel = zoom;