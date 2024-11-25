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
}
