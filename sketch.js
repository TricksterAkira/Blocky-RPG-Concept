function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
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
