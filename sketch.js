let sky;

function preload(){
  sky = loadImage('./voltron redraw.png')
}

function setup() {
  colorMode(HSL);
  frameRate(60);
  createCanvas(800, 400);
  print("Hold 'F' to interact");
}

function draw() {
  //background
  background(10);
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
  //weapon
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
  //Player character
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
  //NPC
  line(640,168,640,183);
  line(660,168,660,183);
  line(632,150,620,160);
  line(668,150,680,160);
  push();
  fill(185,45,64);
  setCenter(650,150);
  polarSquare(0,18);
  pop();
  //quest marker
  push();
  stroke(202,34,7,.60);
  fill(50,91,55);
  setCenter(650,120);
  polarSquare(0,5);
  pop();
  stroke(202,34,7,.60);
  fill(50,91,55);
  rect(645,85,10,25);
  //button reference
  //rect(540,135,60,50);
  //button
  if(keyIsDown(70)===true && mouseX>=540 && mouseX<=600 && mouseY>=135 && mouseY<=185){
    fill(100);
    noStroke();
    textSize(15);
    textFont("Comic Sans MS");
    text("Way to complete the interact tutorial! :D",685,100,100,300);
    }
}
