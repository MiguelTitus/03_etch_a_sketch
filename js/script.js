let gridItems, gridSize, gridItemSize;
let gridSizePixels = 640;
let drawMode = "Black";

let btnGrid = document.querySelector('#btn-grid');
let btnReset = document.querySelector('#btn-reset');
let btnBlack = document.querySelector('#btn-black');
let btnRainbow = document.querySelector('#btn-rainbow');
let btnShade = document.querySelector('#btn-shade');
let grid = document.querySelector('#grid');

btnGrid.addEventListener("click", createGrid);
btnReset.addEventListener("click", resetGrid);
btnBlack.addEventListener("click", drawBlack);
btnRainbow.addEventListener("click", drawRainbow);
btnShade.addEventListener("click", drawShade);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createGrid(){
  do {
    gridSize = prompt("Please enter a number between 10 and 30");
  } while (gridSize < 10 || gridSize > 30 || isNaN(gridSize) === true);
  gridItemSize = gridSizePixels / gridSize -2;
  grid.innerHTML = "";
  let dimensions = gridSize * gridSize;
  for (let i = 1; i <= dimensions; i++){
    grid.innerHTML += "<div class='grid-item' style='width: " + gridItemSize + "px; height: " + gridItemSize + "px;'></div>";
  }
  gridItems = document.querySelectorAll('.grid-item');
  for (let i = 0; i < (gridSize * gridSize); i++){
    gridItems[i].addEventListener("mouseover", ()=>{
      gridItems[i].style.backgroundColor = 'black';
    });
  }
}

function resetGrid(){
  for (let i = 0; i < gridSize * gridSize; i++){
      gridItems[i].style.backgroundColor = 'white';
  }
}

function drawBlack(){
  for (let i = 0; i < gridSize * gridSize; i++){
    gridItems[i].addEventListener("mouseover", ()=>{
      gridItems[i].style.backgroundColor = 'black';
    });
  }
}

function drawRainbow(){
    for (let i = 0; i < gridSize * gridSize; i++){
    gridItems[i].addEventListener("mouseover", ()=>{
      var paintMeRainbow = "rgb(" + getRandomInt(0, 255) + " " + getRandomInt(0, 255) + " "  + getRandomInt(0, 255) + ")";
      gridItems[i].style.backgroundColor = paintMeRainbow;
    });
  }
}

function drawShade(){
  for (let i = 0; i < gridSize * gridSize; i++){
    let shadeValue = 90;
    gridItems[i].addEventListener("mouseover", ()=>{
      var paintShade = "hsl(0 0% " + shadeValue + "%";
      gridItems[i].style.backgroundColor = paintShade;
      shadeValue -= 10;
    });
  }
}
