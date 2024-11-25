let sky;

function preload(){
  sky = loadImage('./voltron redraw.png')
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  image(sky,-550,0);
  stroke(202,34,7,.60);
  //middle ground 1
  fill(31,25,37);
  rect(235,270,750,100);
  fill(91,34,32);
  rect(235,270,750,30);
  //middle ground 2
  fill(31,36,37);
  rect(475,186,400,200);
  fill(91,37,32);
  rect(475,186,400,30);
  //foreground
  fill(31,40,37);
  rect(0,360,800,50);
  fill(91,52,32);
  rect(0,360,800,30);
}
