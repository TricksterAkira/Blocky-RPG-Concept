function setup() {
  colorMode(HSL);
  frameRate(60);
  createCanvas(400, 400);
}

function draw() {
  background(10);
  push();
  setCenter(mouseX,mouseY);
  polarSquare(0,18);
  pop();
  stroke(200);
  line(mouseX-10,mouseY+15,mouseX-10,mouseY+33);
  line(mouseX+10,mouseY+15,mouseX+10,mouseY+33);
}
