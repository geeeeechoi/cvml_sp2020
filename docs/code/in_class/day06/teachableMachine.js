let capture;
let classifier;
let imageModelURL = "https://teachablemachine.withgoogle.com/models/qgDCUhvd/model.json";
let label = "thinking...";
let size;

let w = 640;
let h = 480;


function preload() {
 classifier = ml5.imageClassifier(imageModelURL); 
}

function setup() {
  createCanvas(w, h);
  angleMode(DEGREES);
  
  let constraints = {audio:false,video:{width:{min:320,ideal:w,max:1920},height:{min:240,ideal:h,max:1080},frameRate: {min: 1.0, max: 60.0}}};
  
  frameRate(500);
  
  capture = createCapture(constraints);
  
  capture.hide();
  
  classifyVideo();
  
}

function draw() {
  background(0);
  
  // image(capture, 0, 0);
  textSize(20);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width/2, height-50)
  
  let emoji = '🤔';
  let p1 = createVector(width/3, height/2);
  let p2 = createVector(2*width/3, height/2);
  let lerpValue = map(cos(frameCount), -1, 1, 0, 1);
  let lerpedPosition = p5.Vector.lerp(p1, p2, lerpValue);
  
  if (label == 'face'){
    emoji = '👽'
  }
  else if (label == 'coffee'){
    emoji = '☕️'
  }
  else if (label == 'phone'){
    emoji = '📱'
  }
    
  else if (label == 'hello'){
    emoji = '👋'
  }
  textSize(100);
  text(emoji,lerpedPosition.x, lerpedPosition.y);
  
 
  
}


function classifyVideo() {
  
  classifier.classify(capture, gotResults);
  
}

function gotResults(error, results) {
  if(error) {
    console.error(error);
    return;
  }
  
  label = results[0].label;
  
  // size = map(results[0].confidence, 0, 1, 0, 300);
  
  
  
  // console.log(results);
  
  classifyVideo();
}









