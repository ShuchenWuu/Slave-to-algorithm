let pg;
function setup() {
  createCanvas(windowWidth, windowHeight);
  pgleft = createGraphics(width/2, height);
  pgright = createGraphics(width/2, height);
  textSize(120);
  textAlign(CENTER,CENTER);
    background(200);
    pgleft.background(0,255,0, 100);
        
}

function draw() {

  fill(0,0,255);

  pgright.background(255,0);

  pgleft.noStroke();
  pgleft.fill(255);
  rect(mouseX-25, mouseY-25, 50, 50);
  pgright.fill(255,0,0);
  pgright.background(mouseX,mouseY,0, 100);
  pgright.ellipse(mouseX-width/2, mouseY, 50, 50);
  image(pgleft, 0, 0,width/2,height);
  image(pgright, width/2, 0, width/2, height);
  text('Slave to the Algorithm', 50, 0,  width, height/2);
}


//let pg;
//function setup() {
//  createCanvas(windowWidth, windowHeight);
//  pgleft = createGraphics(width/2, height);
//  pright = createGraphics(width/2, height);
//  background(200);
//  textSize(16);
//  pgleft.background(0,255,0,100);
//}

//function draw() {
//  fill(0,0,255);
//  text("666", height/3,50,width,height/3);
//    //pgleft.background(255);
//   pgright.background(0,255,0);
//   pgleft.noStroke();
//  pgright.fill(255,0,0);
//  pgright.ellipse(50,50,200,200);
//  pg.ellipse(pg.width / 2, pg.height / 2, 50, 50);
//  image(pgleft, 0, 0,width/2,height/2);
//  image(pgright, width/2, height/2, 0, 0);
//}
