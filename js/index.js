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

// "select" select and copy some text to clipboard
function getSelectionText() {
  var selectedText = ""
  if (window.getSelection) {
    selectedText = window.getSelection().toString()
  }
  return selectedText
}

// "mouseup" alert with selected text
document.addEventListener('mouseup', function(){
  var theText = getSelectionText()
  if (theText.length > 0){ // check there's some text selected
      alert(`You selected: ${theText}`); // Alerts whatever textual content the user has selected on the page
  }
}, false);

// "doubleclick" change targets color on double click
window.addEventListener('dblclick', (event) => {
  event.target.style.background = "#73dfed"; //change color to blue
  setTimeout(function(){event.target.style.background = ""}, 6000);
});


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