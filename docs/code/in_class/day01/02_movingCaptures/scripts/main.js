let capture;
let button;
let snapshots = [];
let counter = 0;
let total = 30;


function setup(){
  
  
  createCanvas(640, 480);
  capture = createCapture(VIDEO,ready);
  capture.hide();
  

 

}

let go = false;

function ready (){
  go = true;

}



function draw(){
  
  
//   push ();
//     translate(width, 0);
//     scale( -1, 1);
//     image(capture, 0, 0, w, h);
//   pop();
  
  
  // const stepSize = round(constrain(mouseX / 8, 6,));
  
  if (go){
  snapshots[counter] = capture.get();
  counter++;
    if (counter == total){
      counter = 0;
    }
  }

  
 
  let x = 0;
  let y = 0;
  let w = 80;
  let h = 60;
  
  for (let i = 0; i < snapshots.length; i++){
    // rotate(frameCount);
    tint (random(255),random(100), random(100), 120);
    let index = (i + frameCount) % snapshots.length;
    
    image(snapshots[index], x, y, w, h);
    x = x + w;
    if (x > w) {
      x = 0;
      y = y + h;
    
  
  }
  

  }
  
  
}
  
