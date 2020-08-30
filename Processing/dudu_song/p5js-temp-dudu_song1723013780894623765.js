var song;
var analyzer;

function preload(){
  song = loadSound('data/dudu.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255,0,0); 
  //song.loop();
  //set analyer to check amptitude
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  //stroke(255);
}


function draw() {
  background(0,50);
  var volume = analyzer.getLevel();
  volume = (volume*windowWidth)+100;
  ellipse(windowWidth/2,windowHeight/2,volume,volume);
}

function mousePressed(){
  if (song.isPlaying()){
    fill(255);
    song.stop();
    song.noLoop();
  } else{
           fill(255,0,0);
           song.play();
           song.loop();
        } 
}
