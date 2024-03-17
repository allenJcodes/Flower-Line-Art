let path = document.querySelector('#rose-path');
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDasharray = pathLength;

window.addEventListener('scroll', () => {
  let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - window.innerHeight);
  let drawLength = pathLength * scrollPercentage;
  path.setAttribute('stroke', 'white');
  path.setAttribute('stroke-width', 7);

  path.style.strokeDashoffset = pathLength - drawLength;
  
})

// let path = document.querySelector('#rose-path');
// let pathLength = path.getTotalLength();

// path.style.strokeDasharray = pathLength + ' ' + pathLength;

// path.setAttribute('stroke-width', 7) ;

// window.addEventListener('scroll', () => {
//   var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - window.innerHeight);
//   var drawLength = pathLength * scrollPercentage;
//   path.setAttribute('stroke', '#DABC94');

//   // scrollPercentage > 0.5 ? path.setAttribute('fill', 'white'): path.setAttribute('fill', 'white');
//   console.log(drawLength);
//   path.style.strokeDashoffset = pathLength - drawLength;
//   path.style.strokeDasharray = drawLength + ' ' + pathLength;
// })