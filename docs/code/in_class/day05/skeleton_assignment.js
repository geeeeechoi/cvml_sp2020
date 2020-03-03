
let w = 1280;
let h = 720;
let particles = [];
let size = 20;



let kinectron;


function setup() {
    createCanvas(w, h);
    background(0);

    kinectron = new Kinectron("10.75.29.87");

    kinectron.makeConnection();
    kinectron.startTrackedBodies(drawBody);
  
    console.log(kinectron);


  }


function draw() {


}


function drawBody(body) {

 
    let c1= color(245, 66, 170);
    let c2 = color(66, 245, 164);
    let c3 = color(0, 0, 255);
    let c4 = color(0, 255, 0);

    let lh = createVector(body.joints[7].depthX*w, body.joints[7].depthY*h);
    let rh = createVector(body.joints[11].depthX*w, body.joints[11].depthY*h);

    let lf = createVector(body.joints[15].depthX*w, body.joints[15].depthY*h);
    let rf = createVector(body.joints[19].depthX*w, body.joints[19].depthY*h);


    let lerpValue = map(sin(frameCount)/4, -1, 1, 0, 1);

    let lerpedColor1 = lerpColor(c1, c2, lerpValue);
    let v1 = p5.Vector.lerp(lh, rh, lerpValue);
  
    let lerpedColor2 = lerpColor(c3, c4, lerpValue/2);
    let v2 = p5.Vector.lerp(lf,rf, lerpValue);

    noStroke();
    fill(c1);
    ellipse(lh.x, lh.y, size);

    fill(c2);
    ellipse(rh.x, rh.y, size);
    
    fill(lerpedColor1);
    ellipse(v1.x, v1.y, size);

    fill (c3);
    ellipse(lf.x, lf.y, size);

    fill (c4);
    ellipse(rf.x, rf.y, size);

    fill(lerpedColor2);
    ellipse(v2.x, v2.y, size);
  
}


class Point {
  
  // the Point constructor accepts two arguments: an x and y position 
  constructor(_x, _y) {
    
    // calculate the hue by mapping the sine of the frameCount to values between
    // 0-255. Divide or multiply the frameCount by a number to speed up or slow
    // down cycling through the hue values
    let hue = map(sin(frameCount/64), -1, 1, 0, 255);
    
    this.pos = createVector(_x, _y);
    this.color = [hue, 255, 255, 255];
    this.age = floor(random(255, 350));
    this.size = this.age/4;
    this.shouldDie = false; // will become true when the Point age = 0
    this.stroke = [0, 0, 255, 255];
    this.rate = floor(random(2, 4)); // used for aging each Point differently
  }
   
   draw() {
     fill(this.color);
     strokeWeight(2.25);
     stroke(255);
     ellipse(this.pos.x, this.pos.y, this.size);    
   }
   
   update() {
     // Age the Point based on the rate that was generated at the time
     // of calling the constructor
     this.age-=this.rate; 
     this.size = this.age/4; // make the size of each Point dependent on the age
     
     // if the age reaches 0, set shouldDie to true
     if(this.age < 0) {
       this.shouldDie = true;
     }
   }
 }