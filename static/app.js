var canvas;
var unitLength;
var numOfUnits;
var gameRatio;
var posX;
var posY;
var snakeX = [];
var snakeY = [];
var direction;
var appleX;
var appleY;
var count;
var border;
var valid;


function setup() {
  numOfUnits = 32;
  gameRatio = 0.9;
  posX = numOfUnits / 2;
  posY = numOfUnits / 2;
  snakeX.push(posX);
  snakeY.push(posY);
  unitLength = (windowHeight / numOfUnits) * gameRatio;
  direction = 0;
  border = 1;
  appleX = Math.floor(Math.random() * (numOfUnits - border) + border);
  appleY = Math.floor(Math.random() * (numOfUnits - border) + border);
  count = 0;
  canvas = createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(100);
  for (var i = border; i < numOfUnits + border; i++) {
    line(unitLength, i * unitLength, numOfUnits * unitLength, i * unitLength);
    line(i * unitLength, unitLength, i * unitLength, numOfUnits * unitLength);
  }
  fill('rgb(100, 0, 0)');
  rect(appleX * unitLength, appleY * unitLength, unitLength, unitLength);
  frameRate(10);
}

function draw() {
  if (direction == 0) {
    posY--;
  } else if (direction == 1) {
    posX++;
  } else if (direction == 2) {
    posY++;
  } else if (direction == 3) {
    posX--;
  }
  if (isDead()) {
    for (var i = 0; i < snakeX.length; i++) {
      fill(0);
      rect(snakeX[i] * unitLength, snakeY[i] * unitLength, unitLength, unitLength);
    }
    snakeX = [];
    snakeY = [];
    posX = numOfUnits / 2;
    posY = numOfUnits / 2;
    count = 0;
  } else {
    fill('rgb(0, 100, 0)');
    rect(posX * unitLength, posY * unitLength, unitLength, unitLength);
    if (posX == appleX && posY == appleY) {
      count++;
      console.log(count);
      valid = false;
      while (!valid) {
        appleX = Math.floor(Math.random() * (numOfUnits - border) + border);
        appleY = Math.floor(Math.random() * (numOfUnits - border) + border);
        valid = true;
        for (var i = 0; i < snakeX.length; i++) {
          if (appleX == snakeX[i] && appleY == snakeY[i]) {
            valid = false;
            break;
          }
        }
      }

      fill('rgb(100, 0, 0)');
      rect(appleX * unitLength, appleY * unitLength, unitLength, unitLength);
    } else {
      fill(0);
      rect(snakeX.shift() * unitLength, snakeY.shift() * unitLength, unitLength, unitLength);
    }
  }
  snakeX.push(posX);
  snakeY.push(posY);
}
/*
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
*/
function keyPressed() {
  if (keyCode === UP_ARROW) {
    direction = 0;
  } else if (keyCode === RIGHT_ARROW) {
    direction = 1;
  } else if (keyCode === DOWN_ARROW) {
    direction = 2;
  } else if (keyCode === LEFT_ARROW) {
    direction = 3;
  }
}

function isDead() {
  if (posX < border || posX > numOfUnits - border || posY < border || posY > numOfUnits - border) {
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
