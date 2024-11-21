function setup() {
  colorMode(HSL);
  frameRate(60);
  createCanvas(400, 400);
}

function draw() {
  background(10);
  stroke(46,93,55.1);
  strokeWeight(3);
  line(mouseX-10,mouseY+18,mouseX-10,mouseY+33);
  line(mouseX+10,mouseY+18,mouseX+10,mouseY+33);
  line(mouseX-18,mouseY,mouseX-30,mouseY+10);
  line(mouseX+18,mouseY,mouseX+30,mouseY+10);
  push();
  noStroke();
  setCenter(mouseX,mouseY);
  polarSquare(0,18);
  pop();
}
