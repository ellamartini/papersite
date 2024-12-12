// TOGGLE 'MUSCLY MEN' TEXT

const musclyMen = document.getElementById('muscle');
const openSign = document.getElementById('openSign');

musclyMen.addEventListener('mouseover', () => {
  document.body.style.backgroundImage = "url('assets/kiryu_nishiki.jpg')";
  hyperlinkTrigger.style.visibility = 'hidden';
  openSign.style.visibility = 'hidden';
})

musclyMen.addEventListener('mouseout', () => {
  document.body.style.backgroundImage = "url('assets/kamurocho_street_night.jpg')"
  hyperlinkTrigger.style.visibility = 'visible';
  openSign.style.visibility = 'visible';
})


//TOGGLE HYPERLINK TEXT BOX AND HIDDEN IMAGE

const hyperlinkTrigger = document.getElementById('hypertextRectTrigger');
const hyperlinkTextBox = document.getElementById('hypertextRect');
const textBox = document.getElementsByClassName('rect')[0];
const ichiKiryu = document.getElementById('ichiKiryu');

hyperlinkTrigger.addEventListener('mouseover', () => {
  hyperlinkTextBox.style.visibility = 'visible';
  ichiKiryu.style.visibility = 'visible';
  textBox.style.color = 'black';
  musclyMen.style.color = 'black';
  //////ADD IMAGE HERE
})

hyperlinkTrigger.addEventListener('mouseout', () => {
  hyperlinkTextBox.style.visibility = 'hidden';
  ichiKiryu.style.visibility = 'hidden';
  textBox.style.color = null;
  musclyMen.style.color = null;
})


//TOGGLE 'MOVE FORWARD' BUTTON

const bg = document.querySelector('body.home');
const btn = document.querySelector('button');
const insideBtn = document.getElementById('goInsideButton');
let zoomLevel = 100;

function moveForward() {
 if(document.getElementsByClassName('rect')[0].style.display == 'none')
  {
    document.getElementById('goInsideButton').style.display = 'block';

  }else{
    document.getElementsByClassName('rect')[0].style.display = 'none';
    btn.style.visibility = 'hidden';
    hyperlinkTrigger.style.visibility = 'hidden';
    insideBtn.style.visibility = 'visible';
    // put fun little interactive things here
  }

  zoomLevel += 150;
  bg.style.backgroundPosition = '50% 35%';
  bg.style.backgroundSize = `${zoomLevel}%`;
  bg.style.transition = 'ease-in-out 0.5s';

  if (zoomLevel > 150) {
    zoomLevel = 100;
  }
 }