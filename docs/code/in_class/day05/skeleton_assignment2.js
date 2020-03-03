let w = 1280;
let h = 720;

let bird;
let flower;
let dragon;
let butterfly;
let like;
// let forestSound;



let kinectron;

function preload(){

    bird = loadImage("image_assignment/bird.png");

    butterfly = loadImage("image_assignment/butterfly.png");

    bamboo = loadImage("image_assignment/bamboo.png");

    flower = loadImage("image_assignment/flower.png");

    like = loadImage("image_assignment/like.png");

    // forestSound = loadSound("sounds/forest.mp3");
}

function setup() {
    createCanvas(w, h);
    background(0);
    imageMode(CENTER);

    kinectron = new Kinectron("10.75.29.87");

    kinectron.makeConnection();
    kinectron.startTrackedBodies(drawBody);
    console.log(kinectron);
    
    // forestSound.play();

}

 function draw(){


 }

function drawBody(body){

    // background(0);

    let hdd = createVector(body.joints[3].depthX*w, body.joints[3].depthY*h);

    let lh = createVector(body.joints[7].depthX*w, body.joints[7].depthY*h);

    let rh = createVector(body.joints[11].depthX*w, body.joints[11].depthY*h);

    let lf = createVector(body.joints[15].depthX*w, body.joints[15].depthY*h);

    let rf = createVector(body.joints[19].depthX*w, body.joints[19].depthY*h);

    
    noStroke();
   fill(251,255, 135,70);
   ellipse(hdd.x, hdd.y, 60, 60);

   let birdbrush = image(bird,lh.x, lh.y, 50, 50);
   let bamboobrush = image(bamboo,lf.x, lf.y, 200, 200);
   let bflybrush = image(butterfly,rh.x, rh.y, 50, 50);
   let flowerbrush = image(flower,rf.x, rf.y, 50, 50);

   

   if (dist(lh.x, lh.y, rh.x, rh.y) <= 30){
    endScreen();
    
   } 
  
}

function endScreen(){
    background(0);
    // forestSound.stop();
}