let img;

 function preload() {
    img = loadImage('s.w_logo.png');
  }
function setup() {
  createCanvas(windowWidth,windowHeight);
  

}
let xstep = 5;
let ystep = 10;
let y = 0;

let nx;
let ny;
let nz;


function draw() {
  background(1, 51, 255);
 

  nx = random(0, 50);
  ny = random(0, 50);
  nz = random(0, 500);
  noFill();
  stroke(225,70);
  strokeWeight(1);
  for (let j = 0; height + ystep > j; j += ystep) {
    beginShape();
    vertex(0, j);
    for (let i = 0; i < width + xstep; i += xstep) {
      nx = i / 234;
      ny = j / 165;
      y = map(noise(nx, ny, nz), 0, 1, -100, 100) + j;
      curveVertex(i, y);
          }
    vertex(width, j);
    endShape();
  }
  nz += 0.01;
  
   imageMode(CENTER);
  img.resize(120, 150);
  image(img,windowWidth/2-10, 200);
 
textSize(40);
fill(255);
  textAlign(CENTER, CENTER);
  textFont("MonumentExtended-Ultrabold");
  text('Emotion',0,350,width);
    text('Printer',0,400,width);
    
    textSize(12);
fill(255);
  textAlign(CENTER, CENTER);
  textFont("MonumentExtended-Regular");
  text('"Here is a place to vent your emotions.',0,500,width);
    text('Just say it out loud, ',0,520,width);
    text('and your emotions will transform into a drawing."',0,540,width);
    
    
    textSize(20);
fill(255);
  textAlign(CENTER, CENTER);
  textFont("MonumentExtended-Regular");
    text('Click to Start',0,650,width);
}

function mouseClicked() {
  window.location.href = "https://shuchenwuu.github.io/Slave-to-algorithm//Processing/sketch_newPage_FrameBlack_blue/";
}
