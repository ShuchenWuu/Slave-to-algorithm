PImage photo;
int smallPoint, largePoint;
color pix;
int x;
int y;
float pointillise;
int dotSize;
int t;

void setup(){

size(640,480);
background (255);
imageMode(CENTER);
photo = loadImage("3_marionettes-ru029.jpg");
smallPoint=4;
largePoint=40;
frameRate(60);
}

void draw(){
//image (photo,320,240);//loads the image to fill the sketch

x=int(random(photo.width));//finds random point across the sketch
y=int(random(photo.height));
pointillise = map (mouseX, 0, photo.width, smallPoint, largePoint);
dotSize = int(pointillise);


pix = photo.get(x,y);//get colour value from the random point on my image
t=int (random(256));
stroke (pix, t);
//fill (pix, t);// this updates the colour of the fill() ro the pixel values as set by colour
//noStroke();
line(x,y,x+dotSize,y+dotSize);
}
