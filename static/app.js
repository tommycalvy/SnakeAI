var canvas;
var unitLength;
var numOfUnits = 102;


function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  unitLength = displayHeight / numOfUnits;
  background(0);
  stroke(255);
  for (var i = 0; i < numOfUnits; i++) {
    line(0, i * unitLength, numOfUnits * unitLength, 0);
    line(i * unitLength, 0, 0, numOfUnits * unitLength);
  }

}

function draw() {


}
