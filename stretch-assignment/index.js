const timeLine = new TimelineMax({});
var blocks = document.querySelectorAll('.block');


function redBox() {
  TweenMax.to(".block--red", 1, {
    x: 200, // Translates 200px from left to right
    y: 200, // Translates 200px from bottom to top
    rotation: 90, // Rotates 90 degrees
    rotation: 180,
    yoyo: true,
    repeat: -1,
    ease: Elastic.easeOut.config(1, 0.1)
  });
}

function blueBox() {
  timeLine.to('.block--blue', 1, {
    x: 500,
    rotation: 180,
    ease: Elastic.easeOut.config(1, 0.1)
  });
  timeLine.to('.block--blue', 1, {
    y: 500,
    rotation: 180,
    repeat: -1,
    ease: Elastic.easeOut.config(1, 0.1)
  });
}


[...blocks].forEach((one) => {
  one.addEventListener('click', (e) => {
    if (one.matches('.block--red')) {
      redBox();
    }
    if (one.matches('.block--blue')) {
      blueBox();
    } else {
      timeLine.to(e.target, 1, {
        x: 300
      });
      timeLine.to(e.target, 1, {
        y: 700
      });
    }
  });
});