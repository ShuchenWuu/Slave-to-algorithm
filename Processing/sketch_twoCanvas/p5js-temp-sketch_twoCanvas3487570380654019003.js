  let slider1, slider2, slider3, slider4, slider5, slider6,slider7,slider8;
  let lang = 'en-US';
  //let lang = navigator.language || 'en-US';
  let speechRec = new p5.SpeechRec(lang, gotSpeech);
  let continuous = true;
  let interim = true;
  //let runningText;
  let sentence = "";
  let possition_array = [];
  let smallCanvas;


  function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    //rect(windowWidth / 2, windowHeight / 9, 500, 480);
    
    smallCanvas = createGraphics(500, 480);
    //smallCanvas.background(50);
    //smallCanvas.strokeWeight(4);
    //smallCanvas.stroke(255);
    image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
    speechRec.onResult = showResult;
    speechRec.start(continuous, interim);
    
     button = createButton('Start Recording');
  button.position(windowWidth / 2+360-400, windowHeight / 9+510);

    button = createButton('Save Image');
  button.position(windowWidth / 2+360, windowHeight / 9+510);
  button.mousePressed(saveImage);


    fill(255, 0, 0);
    slider1 = createSlider(2, 8, 1);
    slider1.position(windowWidth / 10+110, windowHeight / 11 +50);
    slider1.style('width', '250px');
    
    slider7 = createSlider(0, 150, 1);
    slider7.position(windowWidth / 10+110, windowHeight / 11 * 2+50);
    slider7.style('width', '250px');
    
    slider8 = createSlider(0, 150, 1);
    slider8.position(windowWidth / 10+110, windowHeight /11*3+50);
    slider8.style('width', '250px');

    slider2 = createSlider(0, 150, 1);
    slider2.position(windowWidth / 10+110, windowHeight / 11 * 4 + 50);
    slider2.style('width', '250px');

    slider3 = createSlider(0, 25, 1);
    slider3.position(windowWidth / 10+110, windowHeight / 11 * 5 + 50);
    slider3.style('width', '250px');

    slider4 = createSlider(0, 255, 1);
    slider4.position(windowWidth / 10+110, windowHeight / 11 * 6 + 50);
    slider4.style('width', '250px');

    slider5 = createSlider(0, 255, 1);
    slider5.position(windowWidth / 10+110, windowHeight / 11 * 7 + 50);
    slider5.style('width', '250px');

    slider6 = createSlider(0, 255, 1);
    slider6.position(windowWidth / 10+110, windowHeight / 11 * 8 + 50);
    slider6.style('width', '250px');
  }

  function draw() {
    stroke(255);
    noFill();
    //rect(windowWidth / 2, windowHeight / 9, 500, 480);
    strokeWeight(1);
    textSize(16);
    fill(255);
    //text(sentence, width/2, height/2+200, windowWidth/2-100, windowHeight/2);


    let val1 = slider1.value();
    let val2 = slider2.value();
    let val3 = slider3.value();
    //console.log("This is" + slideToCharCode(val3));
    let val4 = slider4.value();
    console.log(val4);
    let val5 = slider5.value();
    let val6 = slider6.value();
    let val7 = slider7.value();
    let val8 = slider8.value();

    fill(val4, val5, val6);
    rect(windowWidth / 2-120, windowHeight / 9+1, 50, 50);
    
    fill(val2, val7, val8);
    rect(windowWidth / 2-120, windowHeight / 9+51, 50, 50);
    
    //smallCanvas.background(val2,val7,val8);
    //console.log(smallCanvas.background);

    //text to code
    let x = 0;
    //console.log(textWidth(sentence));
    if (textWidth(sentence) > 0) {
      let n = sentence.charCodeAt(x);
      while (x < 100) {
        x += 1;
        //text(n,50,50, windowWidth, windowHeight);
        //console.log(text);   
      }
    }
//smallCanvas.ellipse(smallCanvas.width / 2, smallCanvas.height / 2, 50, 50);
    let str = sentence;
    //translate(windowWidth / 2 - 60, windowHeight / 9 - 60);
    //smallCanvas.translate(- 60, - 60);
    if (val1 === 2) {
      smallCanvas.background(val2,val7,val8);
      for (i = 0; i < textWidth(str) - 4; i += 4) {
        smallCanvas.x1 = (str.charCodeAt(i))*2-60;
        smallCanvas.y1 = (str.charCodeAt(i + 1)) * 2-60;
        smallCanvas.x2 = (str.charCodeAt(i + 2)) * 4.3;
        smallCanvas.y2 = (str.charCodeAt(i + 3)) * 4.3;
        possition_array.push((smallCanvas.x1, smallCanvas.y1));
        possition_array.push((smallCanvas.x2, smallCanvas.y2));
        if (str.charCodeAt(i) === slideToCharCode(val3)) {
          smallCanvas.strokeWeight(1);
          smallCanvas.stroke(val4, val5, val6);
          smallCanvas.line(smallCanvas.x1, smallCanvas.y1, smallCanvas.x2, smallCanvas.y2);
        image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
      } else {
          smallCanvas.strokeWeight(0.5);
          smallCanvas.stroke(225);
          smallCanvas.line(smallCanvas.x1, smallCanvas.y1, smallCanvas.x2, smallCanvas.y2);
        image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
      }
      }
    } else if (val1 === 3) { //triangle
    smallCanvas.background(val2,val7,val8);
      for (i = 0; i < textWidth(str) - 6; i += 6) {
        smallCanvas.x1 = (str.charCodeAt(i)) * 2-60;
        smallCanvas.y1 = (str.charCodeAt(i + 1)) * 2-60;
        smallCanvas.x2 = (str.charCodeAt(i + 2)) * 4.3;
        smallCanvas.y2 = (str.charCodeAt(i + 3)) * 4.3;
        smallCanvas.x3 = (str.charCodeAt(i + 4)) * 4.3;
        smallCanvas.y3 = (str.charCodeAt(i + 5)) * 4.3;
        possition_array.push((smallCanvas.x1, smallCanvas.y1));
        possition_array.push((smallCanvas.x2, smallCanvas.y2));
        possition_array.push((smallCanvas.x3, smallCanvas.y3));
        smallCanvas.noFill();
        smallCanvas.beginShape();
        vertex(smallCanvas.x1, smallCanvas.y1);
        vertex(smallCanvas.x2, smallCanvas.y2);
        vertex(smallCanvas.x3, smallCanvas.y3);
        smallCanvas.endShape(CLOSE);
        image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
        if (str.charCodeAt(i) === slideToCharCode(val3)) {
          smallCanvas.strokeWeight(1);
          smallCanvas.stroke(val4, val5, val6);
          smallCanvas.noFill();
          smallCanvas.beginShape();
          vertex(smallCanvas.x1, smallCanvas.y1);
          vertex(smallCanvas.x2, smallCanvas.y2);
          vertex(smallCanvas.x3, smallCanvas.y3);
          smallCanvas.endShape(CLOSE);
          image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
        } else {
          smallCanvas.strokeWeight(0.5);
          smallCanvas.stroke(225);
          smallCanvas.noFill();
          smallCanvas.beginShape();
          vertex(smallCanvas.x1, smallCanvas.y1);
          vertex(smallCanvas.x2, smallCanvas.y2);
          vertex(smallCanvas.x3, smallCanvas.y3);
          smallCanvas.endShape(CLOSE);
          image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
        }
      }
    } else if (val1 === 4) { //rect
    smallCanvas.background(val2,val7,val8);
      for (i = 0; i < textWidth(str) - 8; i += 8) {
        smallCanvas.x1 = (str.charCodeAt(i)) * 2-60;
        smallCanvas.y1 = (str.charCodeAt(i + 1)) * 2-60;
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
        image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
        if (str.charCodeAt(i) === slideToCharCode(val3)) {
          smallCanvas.strokeWeight(1);
          smallCanvas.stroke(val4, val5, val6);
          smallCanvas.noFill();
          smallCanvas.beginShape();
          vertex(smallCanvas.x1, smallCanvas.y1);
          vertex(smallCanvas.x2, smallCanvas.y2);
          vertex(smallCanvas.x3, smallCanvas.y3);
          vertex(smallCanvas.x4, smallCanvas.y4);
          smallCanvas.endShape(CLOSE);
          image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
        } else {
          smallCanvas.strokeWeight(0.5);
          smallCanvas.stroke(225);
          smallCanvas.noFill();
          smallCanvas.beginShape();
          vertex(smallCanvas.x1, smallCanvas.y1);
          vertex(smallCanvas.x2,smallCanvas. y2);
          vertex(smallCanvas.x3, smallCanvas.y3);
          vertex(smallCanvas.x4, smallCanvas.y4);
          smallCanvas.endShape(CLOSE);
          image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
        }
      }
    } else if (val1 === 5) { //five
    smallCanvas.background(val2,val7,val8);
      for (i = 0; i < textWidth(str) - 4; i += 4) {
        smallCanvas.x1 = (str.charCodeAt(i)) * 2-60;
        smallCanvas.y1 = (str.charCodeAt(i + 1)) * 2-60;
        smallCanvas.x2 = (str.charCodeAt(i + 2)) * 4.3;
        smallCanvas.y2 = (str.charCodeAt(i + 3)) * 4.3;
        
        possition_array.push((smallCanvas.x1, smallCanvas.y1));
        
        smallCanvas.noFill();
        smallCanvas.rect(smallCanvas.x1, smallCanvas.y1, smallCanvas.x2, smallCanvas.y2);
        image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
        if (str.charCodeAt(i) === slideToCharCode(val3)) {
          smallCanvas.strokeWeight(1);
          smallCanvas.stroke(val4, val5, val6);
          smallCanvas.noFill();
          smallCanvas.rect(smallCanvas.x1, smallCanvas.y1, smallCanvas.x2, smallCanvas.y2);
          image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
      } else {
          smallCanvas.strokeWeight(0.5);
          smallCanvas.stroke(225);
          smallCanvas.noFill();
          smallCanvas.rect(smallCanvas.x1, smallCanvas.y1, smallCanvas.x2, smallCanvas.y2);
          image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
      }
      }
    } else if (val1 === 6) { //ellipe
    smallCanvas.background(val2,val7,val8);
      for (i = 0; i < textWidth(str) - 4; i += 4) {
        smallCanvas.x1 = (str.charCodeAt(i)) * 2;
        smallCanvas.y1 = (str.charCodeAt(i + 1)) * 2.7;
        smallCanvas.d1 =  (str.charCodeAt(i + 2))*4;
        smallCanvas.d2 =  (str.charCodeAt(i + 3))*2;

        possition_array.push((smallCanvas.x1, smallCanvas.y1));

        smallCanvas.noFill();
        smallCanvas.ellipse(smallCanvas.x1, smallCanvas.y1, smallCanvas.d1, smallCanvas.d2);
        image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
        if (str.charCodeAt(i) === slideToCharCode(val3)) {
          smallCanvas.strokeWeight(1);
          smallCanvas.stroke(val4, val5, val6);
          smallCanvas.noFill();
          smallCanvas.ellipse(smallCanvas.x1, smallCanvas.y1, smallCanvas.d1, smallCanvas.d2);
          image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
      } else {
          smallCanvas.strokeWeight(0.5);
          smallCanvas.stroke(225);
          smallCanvas.noFill();
          smallCanvas.ellipse(smallCanvas.x1, smallCanvas.y1, smallCanvas.d1, smallCanvas.d2);
          image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
        }
      }
    } else if (val1 === 7) { //ellipe
    smallCanvas.background(val2,val7,val8);
      for (i = 0; i < textWidth(str) - 3; i += 3) {
        smallCanvas.x1 = (str.charCodeAt(i)) * 4;
        smallCanvas.y1 = (str.charCodeAt(i + 1)) * 5;
        smallCanvas.d =  (str.charCodeAt(i + 2));

        possition_array.push((smallCanvas.x1, smallCanvas.y1));

        smallCanvas.noFill();
        smallCanvas.ellipse(smallCanvas.x1, smallCanvas.y1, smallCanvas.d, smallCanvas.d);
        image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
        if (str.charCodeAt(i) === slideToCharCode(val3)) {
          smallCanvas.strokeWeight(1);
          smallCanvas.stroke(val4, val5, val6);
          smallCanvas.noFill();
          smallCanvas.ellipse(smallCanvas.x1, smallCanvas.y1, smallCanvas.d, smallCanvas.d);
          image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
      } else {
          smallCanvas.strokeWeight(0.5);
          smallCanvas.stroke(225);
          smallCanvas.noFill();
          smallCanvas.ellipse(smallCanvas.x1, smallCanvas.y1, smallCanvas.d, smallCanvas.d);
          image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
      }
      }
    } else if (val1 === 8) { //eight
    smallCanvas.background(val2,val7,val8);
      for (i = 0; i < textWidth(str) - 3; i += 3) {
        smallCanvas.x1 = (str.charCodeAt(i)) * 2-60;
        smallCanvas.y1 = (str.charCodeAt(i + 1)) * 2-60;
        smallCanvas.x2 = (str.charCodeAt(i + 2)) * 4.3;
        
        possition_array.push((smallCanvas.x1, smallCanvas.y1));
        
        smallCanvas.noFill();
        smallCanvas.rect(smallCanvas.x1, smallCanvas.y1, smallCanvas.x2, smallCanvas.x2);
        image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
        if (str.charCodeAt(i) === slideToCharCode(val3)) {
          smallCanvas.strokeWeight(1);
          smallCanvas.stroke(val4, val5, val6);
          smallCanvas.noFill();
          smallCanvas.rect(smallCanvas.x1, smallCanvas.y1, smallCanvas.x2, smallCanvas.x2);
          image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
      } else {
          smallCanvas.strokeWeight(0.5);
          smallCanvas.stroke(225);
          smallCanvas.noFill();
          smallCanvas.rect(smallCanvas.x1, smallCanvas.y1, smallCanvas.x2, smallCanvas.x2);
          image(smallCanvas, windowWidth / 2-50, windowHeight / 9);
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

    //if(speechRec.resultValue){
    //  createP(speechRec.resultString);
    //runningText=speechRec.resultString;
    //}
    fill(255);
  }

  function slideToCharCode(val) {
    return "a".charCodeAt(0) + val;
  }
  
function saveImage(){
  saveCanvas(smallCanvas, 'myCanvas', 'jpg');
}
