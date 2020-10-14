  let slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8;
  let lang = 'en-US';
  let speechRec = new p5.SpeechRec(lang, gotSpeech);
  let continuous = true;
  let interim = true;
  let sentence = "";
  let possition_array = [];
  let smallCanvas;
  let img;
  let bigCanvas;
  let started = false;

  function preload() {
    img = loadImage('frame.png');
  }

  function setup() {
    colorMode(HSB);
  
    
    
    createCanvas(windowWidth, windowHeight);
    background(223,30,100);
    imageMode(CENTER);
    image(img, windowWidth / 2, windowHeight / 2, windowWidth * 0.6, windowHeight * 0.8);



 
 
 
    smallCanvas = createGraphics(windowWidth / 2 - 180, windowWidth / 4 - 50);
    imageMode(CENTER);
    image(smallCanvas, windowWidth / 2, windowHeight / 2);
    
    //bigCanvas
    bigCanvas = createGraphics(windowWidth, windowHeight);
    image(bigCanvas, windowWidth / 2, windowHeight / 2);

    speechRec.onResult = showResult;
    speechRec.start(continuous, interim);


    button = createButton('Save Image');
    button.position(windowWidth / 2 - 35, windowHeight / 9 + 525);
    button.mousePressed(saveImage);

    //buttom
    textSize(12);
    textFont("TTNorms-ExtraBold");

    fill(0, 0,100);
    slider1 = createSlider(2, 8, 1);
    slider1.position(windowWidth / 5 - 50, 20);
    slider1.style('width', '150px');
    //   textSize(12);
    //textFont("MonumentExtended-Regular");
    fill(0, 0,100);
    text('Shape', windowWidth / 5 - 45, 55);


    //background colour
    slider7 = createSlider(0, 360, 1);
    slider7.position(windowWidth / 5 * 2 - 50, 20);
    slider7.style('width', '150px');
    fill(0, 0,100);
    text('Background Rainbow', windowWidth / 5 * 2 - 45, 55);

    //letter
    slider3 = createSlider(0, 25, 1);
    slider3.position(windowWidth / 5 * 3 - 50, 20);
    slider3.style('width', '150px');
    fill(0, 0,100);
    text('Letter', windowWidth / 5 * 3 - 45, 55);
    
    //line colour
    slider4 = createSlider(0, 360, 1);
    slider4.position(windowWidth / 5 * 4 - 50, 20);
    slider4.style('width', '150px');
    fill(0, 0,100);
    text('Line Colour', windowWidth / 5 * 4 - 45, 55);

    //line
    strokeWeight(0.5);
    stroke(0, 0,100);
    line(windowWidth / 2 - 450, windowHeight / 2 - 130, windowWidth / 2 - 380, windowHeight / 2 - 130);

    //text    
    textSize(12);
    fill(0, 0,100);
    //           textSize(12);
    //textFont("MonumentExtended-Regular");
    strokeWeight(1);
    stroke(223,20,100);
    text('Line colour picker', windowWidth / 2 - 570, windowHeight / 2 - 130);



    //line
    strokeWeight(0.5);
    stroke(0, 0,100);
    line(windowWidth / 2 - 450, windowHeight / 2 - 80, windowWidth / 2 - 380, windowHeight / 2 - 80);


    //text
    textSize(12);
    strokeWeight(1);
    stroke(223,20,100);
    fill(0, 0,100);
    text('Background colour picker', windowWidth / 2 - 610, windowHeight / 2 - 80);



    textSize(12);
    fill(100);
    textAlign(CENTER, CENTER);
    textFont("TTNorms-ExtraBold");
        stroke(223,30,100);
    text('Talk to me about your emotions,Move those sliders to make your unique drawings.', 0, 700, width);
    text('Feel free to upload on your Instagram and @s.w_design_', 0, 730, width);



  }

  function draw() {
    if(started==false){
 bigCanvas.background(50,30,100);
        image(bigCanvas, windowWidth / 2, windowHeight / 2);
        return;
    }
   
    
    colorMode(HSB);
    stroke(255);
    noFill();
    //rect(windowWidth / 2, windowHeight / 9, 500, 480);
    strokeWeight(1);
    textSize(16);
    fill(255);
    //text(sentence, width/2, height/2+200, windowWidth/2-100, windowHeight/2);

    let val1 = slider1.value();
    let val3 = slider3.value();
    let val4 = slider4.value();
    let val7 = slider7.value();


    //up one
    strokeWeight(0.5);
    stroke(255);
    fill(val4, 30, 100);
    rect(windowWidth / 2 - 350, windowHeight / 2 - 155, 50, 50);

    //down one
    strokeWeight(0.5);
    stroke(255);
    fill(val7, 60, 100);
    rect(windowWidth / 2 - 350, windowHeight / 2 - 105, 50, 50);

    //text to code
    let x = 0;
    if (textWidth(sentence) > 0) {
      let n = sentence.charCodeAt(x);
      while (x < 200) {
        x += 1;
      }
    }
    //smallCanvas.ellipse(smallCanvas.width / 2, smallCanvas.height / 2, 50, 50);
    let str = sentence;
    //translate(windowWidth / 2 - 60, windowHeight / 9 - 60);
    //smallCanvas.translate(- 60, - 60);
    if (val1 === 2) {
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
        if (str.charCodeAt(i) === slideToCharCode(val3)) {
          smallCanvas.strokeWeight(1);
          smallCanvas.stroke(val4, 30, 100);
          smallCanvas.line(smallCanvas.x1, smallCanvas.y1, smallCanvas.x2, smallCanvas.y2);
          //image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
          imageMode(CENTER);
          image(smallCanvas, windowWidth / 2, windowHeight / 2);
        } else {
          smallCanvas.strokeWeight(0.5);
          smallCanvas.stroke(100);
          smallCanvas.line(smallCanvas.x1, smallCanvas.y1, smallCanvas.x2, smallCanvas.y2);
          //image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
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
    } else if (val1 === 5) { //five
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
    } else if (val1 === 8) { //eight

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

  function slideToCharCode(val) {
    return "a".charCodeAt(0) + val;
  }

  function saveImage() {
    saveCanvas(smallCanvas, 'myCanvas', 'jpg');
  }
