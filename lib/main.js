'use strict';

//Global Variables
var myButtons = document.getElementsByClassName('block');
var mySecondButtons = document.getElementsByClassName('block-2');
var myThirdButtons = document.getElementsByClassName('block-3');

var layerOne = document.getElementById('layer-one');
var layerTwo = document.getElementById('layer-two');
var layerThree = document.getElementById('layer-three');

//Our Functions

//First Layer loop
function loopThrough() {
  var _this = this;

  var changeColor = function changeColor() {
    return _this.classList.toggle('white');
  };
  for (var i = 0; i < this.firstElementChild.textContent.length * 2; i++) {
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
function changeLayer() {
  var swap = function swap() {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  };
  setTimeout(swap, this.firstElementChild.textContent.length * 2 * 750);
};

//First Layer Event Listener
for (var i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener('click', loopThrough);
  myButtons[i].addEventListener('click', changeLayer);
};

//Second Layer Loop

function loopThroughNumber() {
  var _this2 = this;

  var changeColor2 = function changeColor2() {
    return _this2.classList.toggle('bob');
  };
  var numStringValue = this.firstElementChild.textContent;
  for (var _i = 0; _i < Number(numStringValue) * 2; _i++) {
    setTimeout(changeColor2, _i * 750);
  }
};

//Second Layer Changes to Third Layer
function changeLayerTwo() {
  var swap = function swap() {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  };
  setTimeout(swap, Number(this.firstElementChild.textContent) * 2 * 750);
};

//Second Layer Event Listener
for (var _i2 = 0; _i2 < mySecondButtons.length; _i2++) {
  mySecondButtons[_i2].addEventListener('click', loopThroughNumber);
  mySecondButtons[_i2].addEventListener('click', changeLayerTwo);
};

//Third Layer Loop

function loopThroughNumber() {
  var _this3 = this;

  var changeColor2 = function changeColor2() {
    return _this3.classList.toggle('blue');
  };
  var numStringValue = this.firstElementChild.textContent;
  for (var _i3 = 0; _i3 < Number(numStringValue) * 2; _i3++) {
    setTimeout(changeColor2, _i3 * 750);
  }
};

//Second Layer Changes to Third Layer
function changeLayerTwo() {
  var swap = function swap() {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  };
  setTimeout(swap, Number(this.firstElementChild.textContent) * 2 * 750);
};

//Second Layer Event Listener
for (var _i4 = 0; _i4 < mySecondButtons.length; _i4++) {
  mySecondButtons[_i4].addEventListener('click', loopThroughNumber);
  mySecondButtons[_i4].addEventListener('click', changeLayerTwo);
};