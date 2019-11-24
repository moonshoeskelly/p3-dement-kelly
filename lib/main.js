'use strict';

//Global Variables
var myButtons = document.getElementsByClassName('block');
var mySecondButtons = document.getElementsByClassName('block-2');
var myThirdButtons = document.getElementsByClassName('block-3');

var layerOne = document.getElementById('layer-one');
var layerTwo = document.getElementById('layer-two');
var layerThree = document.getElementById('layer-three');

//Our Functions
function loopThrough() {
  var _this = this;

  var changeColor = function changeColor() {
    return _this.classList.toggle('red');
  };
  var changeColorTwo = function changeColorTwo() {
    return _this.classList.toggle('blue');
  };
  for (var i = 0; i < this.textContent.length * 2; i++) {
    if ([0, 1, 4, 5, 8, 9, 12, 13].indexOf(i) > -1) {
      setTimeout(changeColor, i * 1000);
    } else {
      setTimeout(changeColorTwo, i * 1000);
    }
  }
};

function loopThroughNumber() {
  var _this2 = this;

  var changeColor = function changeColor() {
    return _this2.classList.toggle('red');
  };
  var numStringValue = this.textContent;
  for (var i = 0; i < Number(numstringValue * 2); i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function changeLayer() {
  var swap = function swap() {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  };
  setTimeout(swap, this.textContent.length * 2 * 1000);
};

//Event Listener
for (var i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener('click', loopThrough);
  myButtons[i].addEventListener('click', changeLayer);
};