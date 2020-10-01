  let slider1, slider2, slider3, slider4, slider5, slider6;
  let lang = 'en-US';
  //let lang = navigator.language || 'en-US';
  let speechRec = new p5.SpeechRec(lang, gotSpeech);
  let continuous = true;
  let interim = true;
  let runningText;
  let sentence = "";
  let possition_array = [];

  function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    createCanvas(windowWidth, windowHeight);
    speechRec.onResult = showResult;
    speechRec.start(continuous, interim);

    fill(255, 0, 0);
    slider1 = createSlider(2, 8, 1);
    slider1.position(windowWidth / 10, windowHeight / 9 + 50);
    slider1.style('width', '250px');

    slider2 = createSlider(10, 50, 1);
    slider2.position(windowWidth / 10, windowHeight / 9 * 2 + 50);
    slider2.style('width', '250px');

    slider3 = createSlider(0, 25, 1);
    slider3.position(windowWidth / 10, windowHeight / 3 + 50);
    slider3.style('width', '250px');

    slider4 = createSlider(0, 255, 1);
    slider4.position(windowWidth / 10, windowHeight / 9 * 4 + 50);
    slider4.style('width', '250px');

    slider5 = createSlider(0, 255, 1);
    slider5.position(windowWidth / 10, windowHeight / 9 * 5 + 50);
    slider5.style('width', '250px');

    slider6 = createSlider(0, 255, 1);
    slider6.position(windowWidth / 10, windowHeight / 3 * 2 + 50);
    slider6.style('width', '250px');
  }

  function draw() {
    strokeWeight(4);
    stroke(255);
    noFill();
    rect(windowWidth / 2, windowHeight / 9, 500, 480);
    strokeWeight(1);
    textSize(16);
    fill(255);
    //text(sentence, width/2, height/2+200, windowWidth/2-100, windowHeight/2);


    let val1 = slider1.value(); 
    //let val2 = slider2.value();
    let val3 = slider3.value();
    console.log("This is" + slideToCharCode(val3));
    let val4 = slider4.value();
    let val5 = slider5.value();
    let val6 = slider6.value();

    fill(val4, val5, val6);
    rect(50, 50, 50, 50);


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
    let str = sentence;
    translate(windowWidth / 2 - 60, windowHeight / 9 - 60);
    if(val1===2){
    for (i = 0; i < textWidth(str) - 4; i += 4) {
      x1 = (str.charCodeAt(i)) * 2;
      y1 = (str.charCodeAt(i + 1)) * 2;
      x2 = (str.charCodeAt(i + 2)) * 4.3;
      y2 = (str.charCodeAt(i + 3)) * 4.3;
      possition_array.push((x1, y1));
      possition_array.push((x2, y2));
      if (str.charCodeAt(i) === slideToCharCode(val3)) {
        strokeWeight(1);
        stroke(val4, val5, val6);
        line(x1, y1, x2, y2);
      } else {
        strokeWeight(0.5);
        stroke(225);
        line(x1, y1, x2, y2);
      }
    }
    }
    else if(val1===3){ //triangle
       for (i = 0; i < textWidth(str) - 6; i += 6) {
      x1 = (str.charCodeAt(i)) * 2;
      y1 = (str.charCodeAt(i + 1)) * 2;
      x2 = (str.charCodeAt(i + 2)) * 4.3;
      y2 = (str.charCodeAt(i + 3)) * 4.3;
      x3 = (str.charCodeAt(i + 4)) * 4.3;
      y3 = (str.charCodeAt(i + 5)) * 4.3;      
      possition_array.push((x1, y1));
      possition_array.push((x2, y2));
      possition_array.push((x3, y3));
      noFill();
      beginShape();
vertex(x1, y1);
vertex(x2, y2);
vertex(x3, y3);
endShape(CLOSE);
      if (str.charCodeAt(i) === slideToCharCode(val3)) {
        strokeWeight(1);
        stroke(val4, val5, val6);
        noFill();
      beginShape();
vertex(x1, y1);
vertex(x2, y2);
vertex(x3, y3);
endShape(CLOSE);
      } else {
        strokeWeight(0.5);
        stroke(225);
        noFill();
      beginShape();
vertex(x1, y1);
vertex(x2, y2);
vertex(x3, y3);
endShape(CLOSE);
      }
    }
    }
    
        else if(val1===4){ //rect
       for (i = 0; i < textWidth(str) - 8; i += 8) {
      x1 = (str.charCodeAt(i)) * 2;
      y1 = (str.charCodeAt(i + 1)) * 2;
      x2 = (str.charCodeAt(i + 2)) * 4.3;
      y2 = (str.charCodeAt(i + 3)) * 4.3;
      x3 = (str.charCodeAt(i + 4)) * 4.3;
      y3 = (str.charCodeAt(i + 5)) * 4.3;   
      x4 = (str.charCodeAt(i + 6)) * 4.3;
      y4 = (str.charCodeAt(i + 7)) * 4.3; 
      possition_array.push((x1, y1));
      possition_array.push((x2, y2));
      possition_array.push((x3, y3));
      possition_array.push((x4, y4));
      noFill();
      beginShape();
vertex(x1, y1);
vertex(x2, y2);
vertex(x3, y3);
vertex(x4, y4);
endShape(CLOSE);
      if (str.charCodeAt(i) === slideToCharCode(val3)) {
        strokeWeight(1);
        stroke(val4, val5, val6);
        noFill();
      beginShape();
vertex(x1, y1);
vertex(x2, y2);
vertex(x3, y3);
vertex(x4, y4);
endShape(CLOSE);
      } else {
        strokeWeight(0.5);
        stroke(225);
        noFill();
      beginShape();
vertex(x1, y1);
vertex(x2, y2);
vertex(x3, y3);
vertex(x4, y4);
endShape(CLOSE);
      }
    }
    }
    
            else if(val1===5){ //five
       for (i = 0; i < textWidth(str) - 10; i += 10) {
      x1 = (str.charCodeAt(i)) * 2;
      y1 = (str.charCodeAt(i + 1)) * 2;
      x2 = (str.charCodeAt(i + 2)) * 4.3;
      y2 = (str.charCodeAt(i + 3)) * 4.3;
      x3 = (str.charCodeAt(i + 4)) * 4.3;
      y3 = (str.charCodeAt(i + 5)) * 4.3;   
      x4 = (str.charCodeAt(i + 6)) * 4.3;
      y4 = (str.charCodeAt(i + 7)) * 4.3; 
      x5 = (str.charCodeAt(i + 8)) * 4.3;
      y5 = (str.charCodeAt(i + 9)) * 4.3; 
      possition_array.push((x1, y1));
      possition_array.push((x2, y2));
      possition_array.push((x3, y3));
      possition_array.push((x4, y4));
      possition_array.push((x5, y5));
      noFill();
      beginShape();
vertex(x1, y1);
vertex(x2, y2);
vertex(x3, y3);
vertex(x4, y4);
vertex(x5, y5);
endShape(CLOSE);
      if (str.charCodeAt(i) === slideToCharCode(val3)) {
        strokeWeight(1);
        stroke(val4, val5, val6);
        noFill();
      beginShape();
vertex(x1, y1);
vertex(x2, y2);
vertex(x3, y3);
vertex(x4, y4);
vertex(x5, y5);
endShape(CLOSE);
      } else {
        strokeWeight(0.5);
        stroke(225);
        noFill();
      beginShape();
vertex(x1, y1);
vertex(x2, y2);
vertex(x3, y3);
vertex(x4, y4);
vertex(x5, y5);
endShape(CLOSE);
      }
    }
    }
    
                else if(val1===6){ //six
       for (i = 0; i < textWidth(str) - 12; i += 12) {
      x1 = (str.charCodeAt(i)) * 2;
      y1 = (str.charCodeAt(i + 1)) * 2;
      x2 = (str.charCodeAt(i + 2)) * 4.3;
      y2 = (str.charCodeAt(i + 3)) * 4.3;
      x3 = (str.charCodeAt(i + 4)) * 4.3;
      y3 = (str.charCodeAt(i + 5)) * 4.3;   
      x4 = (str.charCodeAt(i + 6)) * 4.3;
      y4 = (str.charCodeAt(i + 7)) * 4.3; 
      x5 = (str.charCodeAt(i + 8)) * 4.3;
      y5 = (str.charCodeAt(i + 9)) * 4.3;
     x6 = (str.charCodeAt(i + 10)) * 4.3;
      y6 = (str.charCodeAt(i + 11)) * 4.3; 
      possition_array.push((x1, y1));
      possition_array.push((x2, y2));
      possition_array.push((x3, y3));
      possition_array.push((x4, y4));
      possition_array.push((x5, y5));
      possition_array.push((x6, y6));
      noFill();
      beginShape();
vertex(x1, y1);
vertex(x2, y2);
vertex(x3, y3);
vertex(x4, y4);
vertex(x5, y5);
vertex(x6, y6);
endShape(CLOSE);
      if (str.charCodeAt(i) === slideToCharCode(val3)) {
        strokeWeight(1);
        stroke(val4, val5, val6);
        noFill();
      beginShape();
vertex(x1, y1);
vertex(x2, y2);
vertex(x3, y3);
vertex(x4, y4);
vertex(x5, y5);
vertex(x6, y6);
endShape(CLOSE);
      } else {
        strokeWeight(0.5);
        stroke(225);
        noFill();
      beginShape();
vertex(x1, y1);
vertex(x2, y2);
vertex(x3, y3);
vertex(x4, y4);
vertex(x5, y5);
vertex(x6, y6);
endShape(CLOSE);
      }
    }
    }
    
               else if(val1===7){ //7
       for (i = 0; i < textWidth(str) - 14; i += 14) {
      x1 = (str.charCodeAt(i)) * 2;
      y1 = (str.charCodeAt(i + 1)) * 2;
      x2 = (str.charCodeAt(i + 2)) * 4.3;
      y2 = (str.charCodeAt(i + 3)) * 4.3;
      x3 = (str.charCodeAt(i + 4)) * 4.3;
      y3 = (str.charCodeAt(i + 5)) * 4.3;   
      x4 = (str.charCodeAt(i + 6)) * 4.3;
      y4 = (str.charCodeAt(i + 7)) * 4.3; 
      x5 = (str.charCodeAt(i + 8)) * 4.3;
      y5 = (str.charCodeAt(i + 9)) * 4.3;
      x6 = (str.charCodeAt(i + 10)) * 4.3;
      y6 = (str.charCodeAt(i + 11)) * 4.3; 
      x7 = (str.charCodeAt(i + 12)) * 4.3;
      y7 = (str.charCodeAt(i + 13)) * 4.3; 
      possition_array.push((x1, y1));
      possition_array.push((x2, y2));
      possition_array.push((x3, y3));
      possition_array.push((x4, y4));
      possition_array.push((x5, y5));
      possition_array.push((x6, y6));
      possition_array.push((x7, y7));
      noFill();
      beginShape();
vertex(x1, y1);
vertex(x2, y2);
vertex(x3, y3);
vertex(x4, y4);
vertex(x5, y5);
vertex(x6, y6);
vertex(x7, y7);
endShape(CLOSE);
      if (str.charCodeAt(i) === slideToCharCode(val3)) {
        strokeWeight(1);
        stroke(val4, val5, val6);
        noFill();
      beginShape();
vertex(x1, y1);
vertex(x2, y2);
vertex(x3, y3);
vertex(x4, y4);
vertex(x5, y5);
vertex(x6, y6);
vertex(x7, y7);
endShape(CLOSE);
      } else {
        strokeWeight(0.5);
        stroke(225);
        noFill();
      beginShape();
vertex(x1, y1);
vertex(x2, y2);
vertex(x3, y3);
vertex(x4, y4);
vertex(x5, y5);
vertex(x6, y6);
vertex(x7, y7);
endShape(CLOSE);
      }
    }
    }
                       else if(val1===8){ //ellipe
       for (i = 0; i < textWidth(str) - 2; i += 2) {
      x1 = (str.charCodeAt(i)) * 3;
      y1 = (str.charCodeAt(i + 1)) * 3;


      possition_array.push((x1, y1));


      noFill();
      ellipse(x1,y1,25,25);
      if (str.charCodeAt(i) === slideToCharCode(val3)) {
        strokeWeight(1);
        stroke(val4, val5, val6);
        noFill();
            ellipse(x1,y1,25,25);
      } else {
        strokeWeight(0.5);
        stroke(225);
        noFill();
           ellipse(x1,y1,25,25);
      }
    }
    
    //               else if(val1===8){ //ellipe
    //   for (i = 0; i < textWidth(str) - 4; i += 4) {
    //  x1 = (str.charCodeAt(i)) * 2;
    //  y1 = (str.charCodeAt(i + 1)) * 2;
    //  x2 = (str.charCodeAt(i + 2)) * 4.3;
    //  y2 = (str.charCodeAt(i + 3)) * 4.3;

    //  possition_array.push((x1, y1));
    //  possition_array.push((x2, y2));

    //  noFill();
    //  ellipse(x1,y1,x2,y2);
    //  if (str.charCodeAt(i) === slideToCharCode(val3)) {
    //    strokeWeight(1);
    //    stroke(val4, val5, val6);
    //    noFill();
    //        ellipse(x1,y1,x2,y2);
    //  } else {
    //    strokeWeight(0.5);
    //    stroke(225);
    //    noFill();
    //       ellipse(x1,y1,x2,y2);
    //  }
    //}
    }
    //shape 

    
    
    
    
    
  }
  


  function showResult() {
    if (speechRec.resultValue === true) {
      background(0);
      textSize(20);
      fill(255);
      //text(speechRec.resultString, 50, height/2, windowWidth-100, windowHeight);
      //text(speechRec.resultString, width/2, height/2+200, windowWidth/2-100, windowHeight);
      //console.log(sentence.charCodeAt(x));
      sentence = speechRec.resultString;
      //sentence=speechRec.resultString.slice(0,textWidth(speechRec.resultString));
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
