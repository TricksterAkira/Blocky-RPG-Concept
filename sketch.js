let sky;

function preload(){
  sky = loadImage('./assets/voltron redraw.png')
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(sky,-550,0);
}
