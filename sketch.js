function setup() {
  colorMode(HSL);
  frameRate(60);
  createCanvas(400, 400);
}

function draw() {
  background(10);
  stroke(56);
  line(mouseX+28,mouseY+23,mouseX+34,mouseY+7);
  fill(87);
  beginShape();
  vertex(mouseX+34,mouseY+7);
  vertex(mouseX+27,mouseY+3);
  vertex(mouseX+41,mouseY-15);
  vertex(mouseX+41,mouseY+10);
  vertex(mouseX+34,mouseY+7);
  endShape();
  stroke(183,87,24);
  strokeWeight(3);
  line(mouseX-10,mouseY+18,mouseX-10,mouseY+33);
  line(mouseX+10,mouseY+18,mouseX+10,mouseY+33);
  line(mouseX-18,mouseY,mouseX-30,mouseY+10);
  line(mouseX+18,mouseY,mouseX+30,mouseY+10);
  push();
  stroke(183,87,24);
  fill(183,87,50);
  setCenter(mouseX,mouseY);
  polarSquare(0,18);
  pop();
}
