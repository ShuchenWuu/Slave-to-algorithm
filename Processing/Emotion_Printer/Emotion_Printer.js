  let slider1,  slider3, slider4, slider7;
  let lang = 'en-US';//english only
  let speechRec = new p5.SpeechRec(lang, gotSpeech);
  let continuous = true;
  let interim = true;
  let sentence = "";
  let possition_array = [];
  let smallCanvas;
  let img;
  let bigCanvas;
  let started=false;
  let img_logo;
  let xstep = 5;
let ystep = 10;
let y = 0;

let nx;
let ny;
let nz;
  
  function preload() {
  img_logo = loadImage('s.w_logo.png');
  img = loadImage('frame.png');
}


  function setup() {
    colorMode(HSB);
    
        //bigCanvas
    bigCanvas = createGraphics(windowWidth, windowHeight);
    image(bigCanvas, windowWidth / 2, windowHeight / 2);
     frameRate(2);
  createCanvas(windowWidth, windowHeight);
  }
  
  function setup_1(){
    colorMode(HSB);
   createCanvas(windowWidth, windowHeight);
    background(223, 30, 100);
    //frame
    imageMode(CENTER);
    image(img, windowWidth / 2, windowHeight / 2, windowWidth * 0.6, windowHeight * 0.8);
    
    //second canvas
    smallCanvas = createGraphics(windowWidth / 2 - 180, windowWidth / 4 - 50);
    imageMode(CENTER);
    image(smallCanvas, windowWidth / 2, windowHeight / 2);
    smallCanvas.hide();
    
    speechRec.onResult = showResult;
    speechRec.start(continuous, interim);

    //save image button
    button = createButton('Save Image');
    button.position(windowWidth / 2 - 35, windowHeight / 9 + 525);
    button.mousePressed(saveImage);


    textSize(14);
    textFont("Mattire");
    fill(0, 0, 100);

    //mode
    slider1 = createSlider(2, 8, 1);
    slider1.position(windowWidth / 5 - 85, 20);
    slider1.style('width', '150px');
    fill(0, 0, 100);
    text('Shape', windowWidth / 5 - 60, 55);


    //background colour
    slider7 = createSlider(0, 360, 1);
    slider7.position(windowWidth / 5 * 2 - 85, 20);
    slider7.style('width', '150px');
    fill(0, 0, 100);
    text('Background Rainbow', windowWidth / 5 * 2 - 15, 55);

    //letter
    slider3 = createSlider(0, 25, 1);
    slider3.position(windowWidth / 5 * 3 - 85, 20);
    slider3.style('width', '150px');
    fill(0, 0, 100);
    text('Letter', windowWidth / 5 * 3 - 60, 55);

    //line colour
    slider4 = createSlider(0, 360, 1);
    slider4.position(windowWidth / 5 * 4 - 85, 20);
    slider4.style('width', '150px');
    fill(0, 0, 100);
    text('Line Colour', windowWidth / 5 * 4 - 42, 55);

    //line
    strokeWeight(0.5);
    stroke(0, 0, 100);
    line(windowWidth / 2 - 420, windowHeight / 2 - 130, windowWidth / 2 - 360, windowHeight / 2 - 130);

    //text    
    textSize(16);
    fill(0, 0, 100);
    strokeWeight(1);
    stroke(223, 20, 100);
    text('Line colour picker', windowWidth / 2 - 570, windowHeight / 2 - 130);

    //line
    strokeWeight(0.5);
    stroke(0, 0, 100);
    line(windowWidth / 2 - 420, windowHeight / 2 - 80, windowWidth / 2 - 360, windowHeight / 2 - 80);

    //text
    textSize(16);
    strokeWeight(1);
    stroke(223, 20, 100);
    fill(0, 0, 100);
    text('Background colour picker', windowWidth / 2 - 620, windowHeight / 2 - 80);

    textSize(16);
    fill(100);
    textAlign(CENTER, CENTER);
    textFont("Mattire");
    stroke(223, 30, 100);
    text('Talk to me about your emotions, Move those sliders to make your unique drawings.', 0, 700, width);
    text('Feel free to upload on your Instagram and @s.w_design_', 0, 720, width);


  }

  function draw() {
    


    colorMode(HSB);
    
    if (!started) {
    image(bigCanvas, windowWidth / 2, windowHeight / 2);
     colorMode(HSB);
  background(223, 30, 100);

  nx = random(0, 50);
  ny = random(0, 50);
  nz = random(0, 500);
  noFill();
  stroke(225, 70);
  strokeWeight(0.5);
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
  img_logo.resize(120, 150);
  image(img_logo, windowWidth / 2 - 10, 200);

  textSize(70);
  fill(255);
  textAlign(CENTER, CENTER);
  textFont("Mattire");
  text('Emotion', 0, 350, width);
  text('Printer', 0, 420, width);

  textSize(18);
  fill(255);
  strokeWeight(2);
  stroke(223, 30, 100);
  textAlign(CENTER, CENTER);
  textFont("Mattire");
  text('"Here is a place to vent your emotions.', 0, 500, width);
  text('Just say it out loud, ', 0, 520, width);
  text('and your emotions will transform into a drawing."', 0, 540, width);


  textSize(40);
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textFont("Mattire");
  text('Click to Start', 0, 650, width);
  } else {stroke(255);
    noFill();
    strokeWeight(1);
    textSize(16);
    fill(255);


    if(started==false){
 bigCanvas.background(50,30,100);
        image(bigCanvas, windowWidth / 2, windowHeight / 2);
        return;
    }
    let val1 = slider1.value();
    let val3 = slider3.value();
    let val4 = slider4.value();
    let val7 = slider7.value();


    //up one (colour picker)
    strokeWeight(0.5);
    stroke(255);
    fill(val4, 30, 100);
    rect(windowWidth / 2 - 350, windowHeight / 2 - 155, 50, 50);

    //down one (colour picker)
    strokeWeight(0.5);
    stroke(255);
    fill(val7, 60, 100);
    rect(windowWidth / 2 - 350, windowHeight / 2 - 105, 50, 50);

    //text to code,loop
    let x = 0;
    if (textWidth(sentence) > 0) {
      let n = sentence.charCodeAt(x);
      while (x < 200) {
        x += 1;
      }
    }
    let str = sentence;
    if (val1 === 2) { //mode 
      smallCanvas.colorMode(HSB);
      smallCanvas.background(val7, 60, 100);
      console.log(val7);
      for (i = 0; i < textWidth(str) - 4; i += 4) {
        smallCanvas.x1 = (str.charCodeAt(i)) * 2 - 60;
        smallCanvas.y1 = (str.charCodeAt(i + 1)) * 2 - 60;
        smallCanvas.x2 = (str.charCodeAt(i + 2)) * 6;
        smallCanvas.y2 = (str.charCodeAt(i + 3)) * 4.3;
        possition_array.push((smallCanvas.x1, smallCanvas.y1));
        possition_array.push((smallCanvas.x2, smallCanvas.y2));
        if (str.charCodeAt(i) === slideToCharCode(val3)) { //change selected line colour
          smallCanvas.strokeWeight(1);
          smallCanvas.stroke(val4, 30, 100);
          smallCanvas.line(smallCanvas.x1, smallCanvas.y1, smallCanvas.x2, smallCanvas.y2);
          imageMode(CENTER);
          image(smallCanvas, windowWidth / 2, windowHeight / 2);
        } else {
          smallCanvas.strokeWeight(0.5);
          smallCanvas.stroke(100);
          smallCanvas.line(smallCanvas.x1, smallCanvas.y1, smallCanvas.x2, smallCanvas.y2);
          imageMode(CENTER);
          image(smallCanvas, windowWidth / 2, windowHeight / 2);
        }
      }

    } else if (val1 === 3) { //triangle
      smallCanvas.background(val7, 60, 100);
      for (i = 0; i < textWidth(str) - 6; i += 6) {
        smallCanvas.x1 = (str.charCodeAt(i)) * 2 - 60;
        smallCanvas.y1 = (str.charCodeAt(i + 1)) * 2 - 60;
        smallCanvas.x2 = (str.charCodeAt(i + 2)) * 10;
        smallCanvas.y2 = (str.charCodeAt(i + 3)) * 3;
        smallCanvas.x3 = (str.charCodeAt(i + 4)) * 6;
        smallCanvas.y3 = (str.charCodeAt(i + 5)) * 3;
        possition_array.push((smallCanvas.x1, smallCanvas.y1));
        possition_array.push((smallCanvas.x2, smallCanvas.y2));
        possition_array.push((smallCanvas.x3, smallCanvas.y3));
        smallCanvas.noFill();
        smallCanvas.beginShape();
        vertex(smallCanvas.x1, smallCanvas.y1);
        vertex(smallCanvas.x2, smallCanvas.y2);
        vertex(smallCanvas.x3, smallCanvas.y3);
        smallCanvas.endShape(CLOSE);
        imageMode(CENTER);
        image(smallCanvas, windowWidth / 2, windowHeight / 2);
        if (str.charCodeAt(i) === slideToCharCode(val3)) {
          smallCanvas.strokeWeight(1);
          smallCanvas.stroke(val4, 30, 100);
          smallCanvas.noFill();
          smallCanvas.beginShape();
          vertex(smallCanvas.x1, smallCanvas.y1);
          vertex(smallCanvas.x2, smallCanvas.y2);
          vertex(smallCanvas.x3, smallCanvas.y3);
          smallCanvas.endShape(CLOSE);
          imageMode(CENTER);
          image(smallCanvas, windowWidth / 2, windowHeight / 2);
        } else {
          smallCanvas.strokeWeight(0.5);
          smallCanvas.stroke(100);
          smallCanvas.noFill();
          smallCanvas.beginShape();
          vertex(smallCanvas.x1, smallCanvas.y1);
          vertex(smallCanvas.x2, smallCanvas.y2);
          vertex(smallCanvas.x3, smallCanvas.y3);
          smallCanvas.endShape(CLOSE);
          imageMode(CENTER);
          image(smallCanvas, windowWidth / 2, windowHeight / 2);
        }
      }
    } else if (val1 === 4) { //rect
      smallCanvas.background(val7, 60, 100);
      for (i = 0; i < textWidth(str) - 8; i += 8) {
        smallCanvas.x1 = (str.charCodeAt(i)) * 2 - 60;
        smallCanvas.y1 = (str.charCodeAt(i + 1)) * 2 - 60;
        smallCanvas.x2 = (str.charCodeAt(i + 2)) * 2;
        smallCanvas.y2 = (str.charCodeAt(i + 3)) * 2;
        smallCanvas.x3 = (str.charCodeAt(i + 4)) * 4.3;
        smallCanvas.y3 = (str.charCodeAt(i + 5)) * 4.3;
        smallCanvas.x4 = (str.charCodeAt(i + 6)) * 4.3;
        smallCanvas.y4 = (str.charCodeAt(i + 7)) * 4.3;
        possition_array.push((smallCanvas.x1, smallCanvas.y1));
        possition_array.push((smallCanvas.x2, smallCanvas.y2));
        possition_array.push((smallCanvas.x3, smallCanvas.y3));
        possition_array.push((smallCanvas.x4, smallCanvas.y4));
        smallCanvas.noFill();
        smallCanvas.beginShape();
        vertex(smallCanvas.x1, smallCanvas.y1);
        vertex(smallCanvas.x2, smallCanvas.y2);
        vertex(smallCanvas.x3, smallCanvas.y3);
        vertex(smallCanvas.x4, smallCanvas.y4);
        smallCanvas.endShape(CLOSE);
        imageMode(CENTER);
        image(smallCanvas, windowWidth / 2, windowHeight / 2);
        if (str.charCodeAt(i) === slideToCharCode(val3)) {
          smallCanvas.strokeWeight(1);
          smallCanvas.stroke(val4, 30, 100);
          smallCanvas.noFill();
          smallCanvas.beginShape();
          vertex(smallCanvas.x1, smallCanvas.y1);
          vertex(smallCanvas.x2, smallCanvas.y2);
          vertex(smallCanvas.x3, smallCanvas.y3);
          vertex(smallCanvas.x4, smallCanvas.y4);
          smallCanvas.endShape(CLOSE);
          imageMode(CENTER);
          image(smallCanvas, windowWidth / 2, windowHeight / 2);
        } else {
          smallCanvas.strokeWeight(0.5);
          smallCanvas.stroke(100);
          smallCanvas.noFill();
          smallCanvas.beginShape();
          vertex(smallCanvas.x1, smallCanvas.y1);
          vertex(smallCanvas.x2, smallCanvas.y2);
          vertex(smallCanvas.x3, smallCanvas.y3);
          vertex(smallCanvas.x4, smallCanvas.y4);
          smallCanvas.endShape(CLOSE);
          imageMode(CENTER);
          image(smallCanvas, windowWidth / 2, windowHeight / 2);
        }
      }
    } else if (val1 === 5) { //rect
      smallCanvas.background(val7, 60, 100);
      for (i = 0; i < textWidth(str) - 4; i += 4) {
        smallCanvas.x1 = (str.charCodeAt(i)) * 2 - 60;
        smallCanvas.y1 = (str.charCodeAt(i + 1)) * 2 - 60;
        smallCanvas.x2 = (str.charCodeAt(i + 2)) * 4.3;
        smallCanvas.y2 = (str.charCodeAt(i + 3)) * 4.3;

        possition_array.push((smallCanvas.x1, smallCanvas.y1));

        smallCanvas.noFill();
        smallCanvas.rect(smallCanvas.x1, smallCanvas.y1, smallCanvas.x2, smallCanvas.y2);
        imageMode(CENTER);
        image(smallCanvas, windowWidth / 2, windowHeight / 2);
        if (str.charCodeAt(i) === slideToCharCode(val3)) {
          smallCanvas.strokeWeight(1);
          smallCanvas.stroke(val4, 30, 100);
          smallCanvas.noFill();
          smallCanvas.rect(smallCanvas.x1, smallCanvas.y1, smallCanvas.x2, smallCanvas.y2);
          imageMode(CENTER);
          image(smallCanvas, windowWidth / 2, windowHeight / 2);
        } else {
          smallCanvas.strokeWeight(0.5);
          smallCanvas.stroke(100);
          smallCanvas.noFill();
          smallCanvas.rect(smallCanvas.x1, smallCanvas.y1, smallCanvas.x2, smallCanvas.y2);
          imageMode(CENTER);
          image(smallCanvas, windowWidth / 2, windowHeight / 2);
        }
      }
    } else if (val1 === 6) { //ellipe
      smallCanvas.background(val7, 60, 100);
      for (i = 0; i < textWidth(str) - 4; i += 4) {
        smallCanvas.x1 = (str.charCodeAt(i)) * 2 + 130;
        smallCanvas.y1 = (str.charCodeAt(i + 1)) * 2.7 + 10;
        smallCanvas.d1 = (str.charCodeAt(i + 2)) * 4;
        smallCanvas.d2 = (str.charCodeAt(i + 3)) * 2;

        possition_array.push((smallCanvas.x1, smallCanvas.y1));

        smallCanvas.noFill();
        smallCanvas.ellipse(smallCanvas.x1, smallCanvas.y1, smallCanvas.d1, smallCanvas.d2);
        imageMode(CENTER);
        image(smallCanvas, windowWidth / 2, windowHeight / 2);
        if (str.charCodeAt(i) === slideToCharCode(val3)) {
          smallCanvas.strokeWeight(1);
          smallCanvas.stroke(val4, 30, 100);
          smallCanvas.noFill();
          smallCanvas.ellipse(smallCanvas.x1, smallCanvas.y1, smallCanvas.d1, smallCanvas.d2);
          imageMode(CENTER);
          image(smallCanvas, windowWidth / 2, windowHeight / 2);
        } else {
          smallCanvas.strokeWeight(0.5);
          smallCanvas.stroke(100);
          smallCanvas.noFill();
          smallCanvas.ellipse(smallCanvas.x1, smallCanvas.y1, smallCanvas.d1, smallCanvas.d2);
          imageMode(CENTER);
          image(smallCanvas, windowWidth / 2, windowHeight / 2);
        }
      }
    } else if (val1 === 7) { //ellipe
      smallCanvas.background(val7, 60, 100);
      for (i = 0; i < textWidth(str) - 3; i += 3) {
        smallCanvas.x1 = (str.charCodeAt(i)) * 4;
        smallCanvas.y1 = (str.charCodeAt(i + 1)) * 5;
        smallCanvas.d = (str.charCodeAt(i + 2));

        possition_array.push((smallCanvas.x1, smallCanvas.y1));

        smallCanvas.noFill();
        smallCanvas.ellipse(smallCanvas.x1, smallCanvas.y1, smallCanvas.d, smallCanvas.d);
        imageMode(CENTER);
        image(smallCanvas, windowWidth / 2, windowHeight / 2);
        if (str.charCodeAt(i) === slideToCharCode(val3)) {
          smallCanvas.strokeWeight(1);
          smallCanvas.stroke(val4, 30, 100);
          smallCanvas.noFill();
          smallCanvas.ellipse(smallCanvas.x1, smallCanvas.y1, smallCanvas.d, smallCanvas.d);
          imageMode(CENTER);
          image(smallCanvas, windowWidth / 2, windowHeight / 2);
        } else {
          smallCanvas.strokeWeight(0.5);
          smallCanvas.stroke(100);
          smallCanvas.noFill();
          smallCanvas.ellipse(smallCanvas.x1, smallCanvas.y1, smallCanvas.d, smallCanvas.d);
          imageMode(CENTER);
          image(smallCanvas, windowWidth / 2, windowHeight / 2);
        }
      }
    } else if (val1 === 8) { //rect

      smallCanvas.background(val7, 60, 100);
      for (i = 0; i < textWidth(str) - 2; i += 2) {
        smallCanvas.x1 = (str.charCodeAt(i)) * 2.5;
        smallCanvas.y1 = (str.charCodeAt(i + 1)) * 2.5 - 30;

        possition_array.push((smallCanvas.x1, smallCanvas.y1));

        smallCanvas.noFill();
        smallCanvas.rect(smallCanvas.x1, smallCanvas.y1, 60, 60);
        imageMode(CENTER);
        image(smallCanvas, windowWidth / 2, windowHeight / 2);
        if (str.charCodeAt(i) === slideToCharCode(val3)) {
          smallCanvas.strokeWeight(1);
          smallCanvas.stroke(val4, 30, 100);
          smallCanvas.noFill();
          smallCanvas.rect(smallCanvas.x1, smallCanvas.y1, 80, 80);
          imageMode(CENTER);
          image(smallCanvas, windowWidth / 2, windowHeight / 2);
        } else {
          smallCanvas.strokeWeight(0.5);
          smallCanvas.stroke(100);
          smallCanvas.noFill();
          smallCanvas.rect(smallCanvas.x1, smallCanvas.y1, 60, 60);
          imageMode(CENTER);
          image(smallCanvas, windowWidth / 2, windowHeight / 2);
        }
      }
    }
    
  }
    
    //shape 
  }



  function showResult() {
    if (speechRec.resultValue === true) {
      //console.log(sentence.charCodeAt(x));
      sentence = speechRec.resultString;
      //console.log(sentence);
    }
  }


  function gotSpeech() {
    fill(255);
  }

  //select the character
  function slideToCharCode(val) {
    return "a".charCodeAt(0) + val;
  }

  //fucntion save image
  function saveImage() {
    saveCanvas(smallCanvas, 'myEmotions', 'jpg');
  }
  
  function mouseClicked() {
 if (!started) {
    setup_1();
    // remove the background
    bigCanvas.remove();
    bigCanvas = null;
    started = true;
  }
}
