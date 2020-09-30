let sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

function setup() { 
  createCanvas(400, 400);
 
  }
  
  
 function draw(){
 console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);

 }
