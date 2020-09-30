  let slider1, slider2, slider3, slider4, slider5, slider6;
  let lang = 'en-US';
   //let lang = navigator.language || 'en-US';
  let speechRec = new p5.SpeechRec(lang, gotSpeech);
  let continuous = true;
  let interim = true;
  let runningText;
  let sentence = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  createCanvas(windowWidth, windowHeight);
  speechRec.onResult = showResult;
  speechRec.start(continuous, interim);
  
  fill(255,0,0); 
  slider1 = createSlider(2, 8, 1);
  slider1.position(windowWidth/10, windowHeight/9 + 50);
  slider1.style('width', '250px');
  
  slider2 = createSlider(10, 50, 1);
  slider2.position(windowWidth/10, windowHeight/9*2+50);
  slider2.style('width', '250px');
  
  slider3 = createSlider(1, 26, 1);
  slider3.position(windowWidth/10, windowHeight/3+50);
  slider3.style('width', '250px');
  
  slider4 = createSlider(0, 255, 1);
  slider4.position(windowWidth/10, windowHeight/9*4+50);
  slider4.style('width', '250px');
  
  slider5 = createSlider(0, 255, 1);
  slider5.position(windowWidth/10, windowHeight/9*5+50);
  slider5.style('width', '250px');
  
  slider6 = createSlider(0, 255, 1);
  slider6.position(windowWidth/10, windowHeight/3*2+50);
  slider6.style('width', '250px'); 
}

function draw() {
  textSize(16);
  fill(255);
  text(sentence, width/2, height/2+200, windowWidth/2-100, windowHeight/2);
  
  //let val1 = slider1.value1(); 
  //let val2 = slider2.value2();
  //let val3 = slider3.value3();
  //let val4 = slider4.value4();
  //let val5 = slider5.value5();
  //let val6 = slider6.value6();
  //text to code
  let x=0;
  console.log(textWidth(sentence));
    if(textWidth(sentence)>0){
      let n = sentence.charCodeAt(x);
      while(x<100){
         x+=1;
         text(n,50,50, windowWidth, windowHeight);
         console.log(text);   
  }
    }
  //rect(windowWidth/2-200,windowHeight/9 + 50,500,500);
  
  //let val = slider.value();
  //background(val6);
  
  
}

function showResult(){
  if (speechRec.resultValue === true){
    background(0);
    textSize(20);
    fill(255);
    //text(speechRec.resultString, 50, height/2, windowWidth-100, windowHeight);
    //text(speechRec.resultString, width/2, height/2+200, windowWidth/2-100, windowHeight);
    //console.log(sentence.charCodeAt(x));
    sentence=speechRec.resultString;
    //sentence=speechRec.resultString.slice(0,textWidth(speechRec.resultString));
    console.log(sentence);
  }
  }
  
  
  function gotSpeech(){
    
    //if(speechRec.resultValue){
    //  createP(speechRec.resultString);
      //runningText=speechRec.resultString;
    //}
    fill(255);
  }
