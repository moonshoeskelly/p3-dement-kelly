//Global Variables
const myButtons = document.getElementsByClassName('block');
const mySecondButtons = document.getElementsByClassName('block-2');
const myThirdButtons = document.getElementsByClassName('block-3');

const layerOne = document.getElementById('layer-one');
const layerTwo = document.getElementById('layer-two');
const layerThree = document.getElementById('layer-three');


//Our Functions
function loopThrough () {

  const changeColor = () => this.classList.toggle('red');
  const changeColorTwo = () => this.classList.toggle('blue');
  for (let i=0; i < this.textContent.length * 2; i++) {
    if ([0, 1, 4, 5, 8, 9, 12, 13].indexOf(i) > -1) {
      setTimeout(changeColor, i * 1000);
    } else {
      setTimeout(changeColorTwo, i * 1000);
    }
  }
};

function loopThroughNumber () {
  const changeColor = () => this.classList.toggle('red');
  const numStringValue = this.textContent;
  for (let i=0; i < Number(numstringValue * 2); i++) {
      setTimeout(changeColor, i * 1000);
    }
};

function changeLayer () {
  const swap = () => {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  }
  setTimeout(swap, this.textContent.length * 2 * 1000);
};

//Event Listener
for (let i=0; i < myButtons.length; i++) {
  myButtons[i].addEventListener('click', loopThrough);
  myButtons[i].addEventListener('click', changeLayer);
};
