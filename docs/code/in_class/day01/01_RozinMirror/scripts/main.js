let myCapture;

function setup() {
  let canvas = createCanvas(320,240,);
  myCapture = createCapture(VIDEO);
  myCapture.hide();
  fill(255);
  noStroke();
  
}

function draw() {
  
  background(30,50,150);
  
  
  //fill(random(255),random(255), random(255));
  
  //load pixel data to myCapture object
  
  myCapture.loadPixels();
  const stepSize = round(constrain(mouseX / 8,6,32));
  
  for (let y = 0; y < height; y+=stepSize){
    for (let x = 0; x < width; x+=stepSize){
      const i = y * width + x;
      const darkness = (255-myCapture.pixels[i * 4]) / 255;
      const radius = stepSize * darkness; 
    
      
      push();
        translate(width, 0);
        scale(-1,1);
        rect (x, y, radius, radius);
      pop();
      
  }
      
   
      
    }
  
}