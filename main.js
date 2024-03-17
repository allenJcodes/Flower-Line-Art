const html = document.documentElement;
const roseSvg = document.getElementById('rose-svg');
const rosePath = document.querySelector('#rose-path');
const rosePathLength = rosePath.getTotalLength();
const text = document.querySelector('#text');
text.innerHTML = 'Scroll down slowly :)';

let scrollBottom;
let vh = window.innerHeight * 0.01;
// set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('scroll', () => {
  // get the scroll percentage based on the position of the scroll bar to the top of the document.
  let scrollPercentage = (html.scrollTop + document.body.scrollTop) / (html.scrollHeight - window.innerHeight);

  // gets the length of the path multiplied by the scroll percentage
  let drawLength = rosePathLength * scrollPercentage;

  // sets the attributes of the svg element upon scrolling
  roseSvg.setAttribute('stroke-width', 7);
  roseSvg.setAttribute('stroke', '#DABC94');

  // hides the text on first scroll.
  if (scrollPercentage <= 0) {
    text.style = 'color : rgba(255, 255, 255, 1)';
    text.innerHTML = 'Scroll down slowly :)'
    if (scrollBottom) {
      text.innerHTML = 'Enjoy your day! stay hydrated :p';
    }
  }
  if (scrollPercentage > 0.001 && scrollPercentage < 100) {
    text.style = 'color : rgba(0, 0, 0, 0)';
  }

  // change the innerHTML depending on the scrollPercentage
  if (scrollPercentage >= 0.27 && scrollPercentage <= 0.35) {
    text.innerHTML = 'Happy Birthday Aevie <3';
    text.style = 'color : rgba(255, 255, 255, 1)';
  }
  if (scrollPercentage >=.41 && scrollPercentage <= 0.5) {
    text.style = 'color : rgba(255, 255, 255, 1)';
    text.innerHTML = 'I Love You';
  }

  if (scrollPercentage == 1) {
    text.style = 'color : rgba(255, 255, 255, 1)';
    text.innerHTML = 'Scroll to Top';
    scrollBottom = true;
  }
  
  // changes the strokeDashOffset and strokeDashArray properties
  rosePath.style.strokeDasharray = drawLength+ ' ' + rosePathLength;
  rosePath.style.strokeDashoffset = rosePathLength - drawLength;
})