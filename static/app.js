var canvas;
var unitLength;
var numOfUnits = 32;
var gameRatio = 0.8;
var alive = false;
var posX;
var posY;
var snakeX;
var snakeY;
var direction = 0;


function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  unitLength = (displayHeight / numOfUnits) * gameRatio;
  background(0);
  stroke(100);
  for (var i = 1; i <= numOfUnits; i++) {
    line(unitLength, i * unitLength, numOfUnits * unitLength, i * unitLength);
    line(i * unitLength, unitLength, i * unitLength, numOfUnits * unitLength);
  }
  frameRate(6);
}

function draw() {
  if (direction = 0) {
    posY++;
  } else if (direction = 1) {
    posX++;
  } else if (direction = 2) {
    poxY--;
  } else if (direction = 3) {
    posX--;
  }
  if (isDead()) {
    snakeX = [];
    snakeY = [];
    posX = numOfUnits / 2;
    posY = numOfUnits / 2;
  }
  snakeX.push(posX);
  snakeY.push(posY);
  fill('rgb(0, 100, 0)');
  for (var i = 0; i < snakeX.length; i++) {
    rect(snakeX[i] * unitLength, snakeY[i] * unitLength, unitLength, unitLength);
  }
}

function keyPressed() {
  if (keyCode == 87) {
    direction = 0;
  } else if (keyCode == 68) {
    direction = 1;
  } else if (keyCode == 83) {
    direction = 2;
  } else if (keyCode == 65) {
    direction = 3;
  }
}

function isDead() {
  if (posX < 1 || posX > numOfUnits - 2 || posY < 1 || posY > numOfUnits - 2) {
    return true;
  } else {
    for (var i = 0; i < snakeX.length; i++) {
      if (snakeX[i] == posX && snakeY[i] == posY) {
        return true;
      }
    }
    return false;
  }
}
