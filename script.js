// const createStatsCollector = require('mocha/lib/stats-collector');

const rgbParagraph = document.getElementById('rgb-color');
const colorsContainer = document.getElementById('colors-container');
const score = document.getElementById('score');
const btnChangeLevel = document.getElementById('change-level');
const btnResetGame = document.getElementById('reset-game');
const pAnswer = document.getElementById('answer');
let idRaffle;
let sumScore = 0;

function generateRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `(${red}, ${green}, ${blue})`;
}

function getSelectedColorBall(event) {
  const colorBall = event.target;
  const bkColor = colorBall.style.backgroundColor;
  const status = bkColor === rgbParagraph.innerHTML ? 'Acertou!' : 'Errou! Tente novamente!';
  pAnswer.innerHTML = status;
  if (status === 'Acertou!') {
    sumScore += 3;
    score.innerHTML = sumScore;
  } else {
    sumScore = 0;
    score.innerHTML = sumScore;
  }
}

function createBalls() {
  colorsContainer.innerHTML = '';
  idRaffle = Math.floor(Math.random() * 6); // 0 a 5
  // console.log(idRaffle);

  const nBalls = 6;
  for (let i = 0; i < nBalls; i += 1) {
    const colorBall = document.createElement('div');
    const rgbRandom = `rgb${generateRGB()}`;
    colorBall.id = i;
    colorBall.classList.add('ball', i);
    colorBall.style.backgroundColor = rgbRandom;
    if (i === idRaffle) rgbParagraph.innerText = rgbRandom;
    colorBall.addEventListener('click', getSelectedColorBall);
    colorsContainer.appendChild(colorBall);
  }
}

function resetGame() {
  createBalls();
  pAnswer.innerText = 'Escolha uma cor';
}

function changeLevel() {}

window.onload = () => {
  createBalls();
  btnChangeLevel.addEventListener('click', changeLevel);
  btnResetGame.addEventListener('click', resetGame);
};
