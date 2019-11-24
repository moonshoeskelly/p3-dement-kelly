//Global Variables
const myButtons = document.getElementsByClassName('block');
const mySecondButtons = document.getElementsByClassName('block-2');
const myThirdButtons = document.getElementsByClassName('block-3');

const layerOne = document.getElementById('layer-one');
const layerTwo = document.getElementById('layer-two');
const layerThree = document.getElementById('layer-three');


//Our Functions

//First Layer loop
function loopThrough () {

  const changeColor = () => this.classList.toggle('white');
  for (let i=0; i < this.firstElementChild.textContent.length * 2; i++) {
      setTimeout(changeColor, i * 750);
  }
};

// function loopThrough () {
//
//   const changeColor = () => this.classList.toggle('white');
//   const changeColorTwo = () => this.classList.toggle('blue');
//   for (let i=0; i < this.firstElementChild.textContent.length * 2; i++) {
//     if ([0, 1, 4, 5, 8, 9, 12, 13].indexOf(i) > -1) {
//       setTimeout(changeColor, i * 1000);
//     } else {
//       setTimeout(changeColorTwo, i * 1000);
//     }
//   }
// };

//First Layer Changes to Second Layer
function changeLayer () {
  const swap = () => {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  }
  setTimeout(swap, this.firstElementChild.textContent.length * 2 * 750);
};

//First Layer Event Listener
for (let i=0; i < myButtons.length; i++) {
  myButtons[i].addEventListener('click', loopThrough);
  myButtons[i].addEventListener('click', changeLayer);
};





//Second Layer Loop

function loopThroughNumber () {
  const changeColor2 = () => this.classList.toggle('bob');
  const numStringValue = this.firstElementChild.textContent;
  for (let i=0; i < Number(numStringValue) * 2; i++) {
      setTimeout(changeColor2, i * 750);
    }
};

//Second Layer Changes to Third Layer
function changeLayerTwo () {
  const swap = () => {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  }
  setTimeout(swap, Number(this.firstElementChild.textContent) * 2 * 750);
};

//Second Layer Event Listener
for (let i=0; i < mySecondButtons.length; i++) {
  mySecondButtons[i].addEventListener('click', loopThroughNumber);
  mySecondButtons[i].addEventListener('click', changeLayerTwo);
};




//Third Layer Loop

function loopThroughNumber () {
  const changeColor2 = () => this.classList.toggle('blue');
  const numStringValue = this.firstElementChild.textContent;
  for (let i=0; i < Number(numStringValue) * 2; i++) {
      setTimeout(changeColor2, i * 750);
    }
};

//Second Layer Changes to Third Layer
function changeLayerTwo () {
  const swap = () => {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  }
  setTimeout(swap, Number(this.firstElementChild.textContent) * 2 * 750);
};

//Second Layer Event Listener
for (let i=0; i < mySecondButtons.length; i++) {
  mySecondButtons[i].addEventListener('click', loopThroughNumber);
  mySecondButtons[i].addEventListener('click', changeLayerTwo);
};
