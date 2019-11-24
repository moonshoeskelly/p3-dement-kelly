//Global Variables
const myButtons = document.getElementsByClassName('block');
const mySecondButtons = document.getElementsByClassName('block-2');
const myThirdButtons = document.getElementsByClassName('block-3');

const layerOne = document.getElementById('layer-one');
const layerTwo = document.getElementById('layer-two');
const layerThree = document.getElementById('layer-three');
const layerFour = document.getElementById('layer-four');



//Functions

//First Layer loop
function loopThrough () {

  const changeColor = () => this.classList.toggle('white');
  for (let i=0; i < this.firstElementChild.textContent.length * 2; i++) {
      setTimeout(changeColor, i * 750);
  }
}

//First Layer Changes to Second Layer
function changeLayer () {
  const swap = () => {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  };
  setTimeout(swap, this.firstElementChild.textContent.length * 2 * 750);
}

//First Layer Event Listener
for (let i=0; i < myButtons.length; i++) {
  myButtons[i].addEventListener('click', loopThrough);
  myButtons[i].addEventListener('click', changeLayer);
}





//Second Layer Loop

function loopThroughNumber () {
  const changeColor2 = () => this.classList.toggle('bob');
  const numStringValue = this.firstElementChild.textContent;
  for (let i=0; i < Number(numStringValue) * 2; i++) {
      setTimeout(changeColor2, i * 750);
    }
}

//Second Layer Changes to Third Layer
function changeLayerTwo () {
  const swap2 = () => {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  };
  setTimeout(swap2, Number(this.firstElementChild.textContent) * 2 * 750);
}

//Second Layer Event Listener
for (let i=0; i < mySecondButtons.length; i++) {
  mySecondButtons[i].addEventListener('click', loopThroughNumber);
  mySecondButtons[i].addEventListener('click', changeLayerTwo);
}




//Third Layer

//Third Layer Changes to Final Layer
function changeLayerThree () {
  const fade3 = () => {
    layerThree.classList.add('hide2');
  };
  setTimeout(fade3, 500);

  const out3 = () => {
    layerThree.classList.add('hide');
  };
  setTimeout(out3, 1000);

  const in4 = () => {
    layerFour.classList.remove('hide');
    layerFour.classList.add('hidden');
  };
  setTimeout(in4, 1000);

  const show4 = () => {
    layerFour.classList.remove('hidden');
    layerFour.classList.add('show');
  };
  setTimeout(show4, 2000);
}

//Third Layer Event Listener
for (let i=0; i < myThirdButtons.length; i++) {
  myThirdButtons[i].addEventListener('click', changeLayerThree);
}




//Fourth layer
const fortuneList = [
  "Someone is looking up to you. Don't let that person down.",
  "Run.",
  "No snowflake in an avalanche ever feels responsible",
  "Help, I'm trapped in an online fortune teller game!",
  "If you eat something and nobody sees you eat it, it has no calories.",
  "Someone in your life needs a letter from you.",
  "Soon you will receive a letter from a loved one.",
  "Don't be afraid to take that big step.",
  "A passionate new romance will appear in your life when you least expect it.",
  "You will move to a wonderful new home within the year.",
  "You will marry a professional athlete - if competetive eating can be considered a sport.",
  "You don't have to be faster than the bear, you just have to be faster than the slowest guy running from it.",
  "You are not illiterate.",
  "If you think we're going to sum up your whole life on this fortune teller game, you're grossly mistaken.",
  "I see money in your future... It is not yours though.",
  "This fortune is never gonna give you up, never gonna let you down.",
  "If you think nobody cares if you are alive, try missing a couple of car payments.",
  "Treat yourself to a good time, instead of waiting for someone else to do it.",
  "Pigeon poop burns the retina for 13 hours. You will learn this the hard way.",
  "There is no angry way to say bubbles.",
  "The smart thing to prepare for is the unexpected.",
  "Life is a series of choices. Today, your are good ones.",
  "You will soon discover a hidden talent.",
  "Only listen to the fortune cookie, disregard all other fortune telling units.",
  "Tomorrow morning, take a left turn as soon as your leave home.",
  "Something wonderful is about to happen.",
  "When in anger, sing the alphabet.",
  "You will find a cat that acts like a dog and you will be happy forever."
];
console.log(fortuneList.sort());

const myFortune = document.getElementById('my-fortune');

const randomFortune = () => {
  myFortune.innerHTML = fortuneList[Math.floor(Math.random() * fortuneList.length)];
};

//Fortune Event Listener
for (let i=0; i < myThirdButtons.length; i++) {
  myThirdButtons[i].addEventListener('click', randomFortune);
}
