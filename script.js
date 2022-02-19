let rgbList = [];
const rgbParagraph = document.getElementById('rgb-color');
const colorsContainer = document.getElementById('colors-container')

//-- Butons
const btnChangeLevel = document.getElementById('change-level')
const btnResetGame = document.getElementById('reset-game')
const colors = document.getElementsByClassName('ball');
const pAnswer = document.getElementById('answer')


//------------------------//----------------------------------

function generateRGB() {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  return '(' + red + ', ' + green + ', ' + blue + ')';
}
// adiciona uma cor ao parágrafo


//------------------------//----------------------------------

function createBalls() {
    //-- Limpa o container para reuso.
    while (colorsContainer.firstChild) {
      colorsContainer.removeChild(colorsContainer.firstChild);
    }
  let nBalls = 6;
  for (let i = 0; i < nBalls; i++) {
    const colorsBall = document.createElement('div')
    colorsBall.id = 'ball '+i;
    colorsBall.className = 'ball'
    colorsBall.style.backgroundColor = 'rgb'+generateRGB();
    colorsContainer.appendChild(colorsBall);
    rgbParagraph.innerText = generateRGB();
  }
}


function changeLevel() {

}

function resetGame() {
  createBalls();
  pAnswer.innerText = 'Escolha uma cor';

}


window.onload = function () {
  createBalls();
  btnChangeLevel.addEventListener('click', changeLevel)
  btnResetGame.addEventListener('click', resetGame)
  // btnResetGame.addEventListener('click', generateRGB)


}
