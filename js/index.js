// Your code goes here

const busInImg = document.querySelector('.hideMe');
const nav = document.querySelector('.nav');
const mainNav = document.querySelector('.main-navigation');
const zoom = document.getElementById('zoom');
// const btn1 = document.querySelector('#btn-1');
const btn = document.getElementsByClassName('btn');
const home = document.getElementById('home');


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
    mainNav.style.background = '';
    busInImg.classList.replace( 'slideRight', 'hideMe');

  }
});

// "select" select and copy some text to clipboard
function getSelectionText() {
  var selectedText = ""
  if (window.getSelection) {
    selectedText = window.getSelection().toString()
  }
  return selectedText
}

// "clipboard" copy selection to clipboard
function copySelectionText(){
  var copy;
  try{
      copy = document.execCommand("copy"); // run command to copy selected 
  } catch(e){
      copy = false
  }

  return copy;
}

// "mouseup" alert with selected text
document.addEventListener('mouseup', function () {
  copySelectionText(); // copies to the clipboard
  var theText = getSelectionText();
  if (theText.length > 0) { // check there's some text selected
    console.log(`You selected: ${theText}`); // Alerts whatever textual content the user has selected on the page
  }
}, false);

// "doubleclick" change targets color on double click
window.addEventListener('dblclick', (e) => {
  e.target.style.background = '#73dfed'; //change color to blue
  setTimeout(function(){
    e.target.style.background = '';
  }, 6000);
});

// another double click
mainNav.addEventListener('dblclick', (e) => {
    e.stopPropagation();
});

// "mouseenter" and "mouseleave" used to make buttons do things
[...btn].forEach(function (val) {
  val.addEventListener('mouseenter', () => {
    val.innerText = 'Are you sure?'
    val.style.color = 'red';
  });

  val.addEventListener('mouseleave', () => {
    val.innerText = 'Sign Me Up!';
    val.style.color = '';
  });
});


// 'keydown' event
document.addEventListener('keydown', () => {
  home.style.background = 'green';
  setTimeout(() => {
    home.style.background = '';
  }, 5000);
});



