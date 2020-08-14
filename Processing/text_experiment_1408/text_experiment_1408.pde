//playing with text
PFont MonNow, didot;
float spin=0;

void setup(){
size (500, 500);
background(255);
fill(0);
smooth(100); 
MonNow=loadFont("Montserrat-Medium-48.vlw");
didot=loadFont("Didot-24.vlw");
textAlign(CENTER,CENTER); //horizontal align, vertical align
frameRate(10);
}

void draw(){
  translate(width/2, height/2);
  spin+=.1;//this is the rotation value
  rotate(spin);
    noFill();
    stroke(255,0,0,90);
    strokeWeight(4);
  ellipse(0,0,320,320);
   
   noStroke();
   fill(255,0,0,90);
  ellipse(0,0,80,80);
  fill(0);
  textFont(MonNow);
  textSize(48);
  text("Here we go", 0, 0);
  fill(255,50);
  noStroke();
  rect(-width/2,-height/2,width,height);//bc we are in the center mode
  
   
  //textFont(didot);
  //textSize(48);
  // text("Didot 48pt", width/2, height/2+60);
}

void keyPressed(){
background(255);
}
