let w = 1280;
let h = 720;

let kinectron;



function setup() {
    rectMode(CENTER);

    let canvas = createCanvas(w, h);
    canvas.parent("#sketch")
    background(0);

    kinectron = new Kinectron("10.73.30.86");

    kinectron.makeConnection();

    kinectron.startTrackedBodies(drawBody);


}

function draw() {




}



function drawBody(body){
    background(0);


    for (let i = 0; i < body.joints.length; i++){

        fill(random(255),random(255),random(255));
        rect(body.joints[i].depthX*width, body.joints[i].depthY*height, 20, 20);


    }


}