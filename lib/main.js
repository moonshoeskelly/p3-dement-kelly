'use strict';

//Global Variables
var myButtons = document.getElementsByClassName('block');
var mySecondButtons = document.getElementsByClassName('block-2');
var myThirdButtons = document.getElementsByClassName('block-3');

var layerOne = document.getElementById('layer-one');
var layerTwo = document.getElementById('layer-two');
var layerThree = document.getElementById('layer-three');
var layerFour = document.getElementById('layer-four');

//Functions

//First Layer loop
function loopThrough() {
  var _this = this;

  var changeColor = function changeColor() {
    return _this.classList.toggle('white');
  };
  for (var i = 0; i < this.firstElementChild.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 750);
  }
}

//First Layer Changes to Second Layer
function changeLayer() {
  var swap = function swap() {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  };
  setTimeout(swap, this.firstElementChild.textContent.length * 2 * 750);
}

//First Layer Event Listener
for (var i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener('click', loopThrough);
  myButtons[i].addEventListener('click', changeLayer);
}

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
}

//Second Layer Changes to Third Layer
function changeLayerTwo() {
  var swap2 = function swap2() {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  };
  setTimeout(swap2, Number(this.firstElementChild.textContent) * 2 * 750);
}

//Second Layer Event Listener
for (var _i2 = 0; _i2 < mySecondButtons.length; _i2++) {
  mySecondButtons[_i2].addEventListener('click', loopThroughNumber);
  mySecondButtons[_i2].addEventListener('click', changeLayerTwo);
}

//Third Layer

//Third Layer Changes to Final Layer
function changeLayerThree() {
  var fade3 = function fade3() {
    layerThree.classList.add('hide2');
  };
  setTimeout(fade3, 500);

  var out3 = function out3() {
    layerThree.classList.add('hide');
  };
  setTimeout(out3, 1000);

  var in4 = function in4() {
    layerFour.classList.remove('hide');
    layerFour.classList.add('hidden');
  };
  setTimeout(in4, 1000);

  var show4 = function show4() {
    layerFour.classList.remove('hidden');
    layerFour.classList.add('show');
  };
  setTimeout(show4, 2000);
}

//Third Layer Event Listener
for (var _i3 = 0; _i3 < myThirdButtons.length; _i3++) {
  myThirdButtons[_i3].addEventListener('click', changeLayerThree);
}

//Fourth layer
var fortuneList = ["Someone is looking up to you. Don't let that person down.", "Run.", "No snowflake in an avalanche ever feels responsible", "Help, I'm trapped in an online fortune teller game!", "If you eat something and nobody sees you eat it, it has no calories.", "Someone in your life needs a letter from you.", "Soon you will receive a letter from a loved one.", "Don't be afraid to take that big step.", "A passionate new romance will appear in your life when you least expect it.", "You will move to a wonderful new home within the year.", "You will marry a professional athlete - if competetive eating can be considered a sport.", "You don't have to be faster than the bear, you just have to be faster than the slowest guy running from it.", "You are not illiterate.", "If you think we're going to sum up your whole life on this fortune teller game, you're grossly mistaken.", "I see money in your future... It is not yours though.", "This fortune is never gonna give you up, never gonna let you down.", "If you think nobody cares if you are alive, try missing a couple of car payments.", "Treat yourself to a good time, instead of waiting for someone else to do it.", "Pigeon poop burns the retina for 13 hours. You will learn this the hard way.", "There is no angry way to say bubbles.", "The smart thing to prepare for is the unexpected.", "Life is a series of choices. Today, your are good ones.", "You will soon discover a hidden talent.", "Only listen to the fortune cookie, disregard all other fortune telling units.", "Tomorrow morning, take a left turn as soon as your leave home.", "Something wonderful is about to happen.", "When in anger, sing the alphabet.", "You will find a cat that acts like a dog and you will be happy forever."];
console.log(fortuneList.sort());

var myFortune = document.getElementById('my-fortune');

var randomFortune = function randomFortune() {
  myFortune.innerHTML = fortuneList[Math.floor(Math.random() * fortuneList.length)];
};

//Fortune Event Listener
for (var _i4 = 0; _i4 < myThirdButtons.length; _i4++) {
  myThirdButtons[_i4].addEventListener('click', randomFortune);
}