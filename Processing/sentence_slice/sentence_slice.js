var myText = 'we are the most beatiful cretures on the planet';
var words;
function setup() {
createCanvas (windowWidth, windowHeight);
background (0);
textSize (32); 
textFont ('Times');
words=myText.split(' ');
}
//to have this 'appear over time' you can use the ongoing variable 'frameCount'
function draw() {
  background (0);
  fill(255);
  for (i=0; i<words.length; i++){
    if (frameCount>100*i){
      text(words[i], i*int(random(0,20)), i*30, width, height); //(x,y, length of x, length of y)
    }
  }
}
