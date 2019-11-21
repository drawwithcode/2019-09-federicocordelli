var positionx, positiony, gradoRotazioneX = 0, gradoRotazioneY = 0, incrementX = 0, incrementY = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  positionx = windowWidth/2;
  positiony = windowHeight/2;
  frameRate(60);
}

function draw() {
  var moltiplicaX, moltiplicaY;
  background("#FA8072");
  noStroke();
  // fill("#FA8072");
  ellipseMode(CENTER);
  // text("README", width/2, height/2);

  incrementX = map(rotationY, -180, 180, -130, 130);
  incrementY = map(rotationX, -180, 180, -130, 130);

  positiony = positiony + incrementY;
  positionx = positionx + incrementX;

  if(positionx > width-30){
    positionx = width - 31;
  } else if(positionx < 30){
    positionx = 31;
  }
  if(positiony > height-30){
    positiony = height-31;
  } else if(positiony < 30){
    positiony = 31;
  }
  fill("blue");
  ellipse(positionx, positiony, 60);

  textSize(100);
  textStyle(BOLD);
  textAlign(CENTER);
  fill("#FA8072");
  text("README", width/2, height/2);
}


function touchEnded(event) {
  DeviceOrientationEvent.requestPermission()
}

/*function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background('black');
  noStroke();
  textSize(32);
  // Understanding device orientation: ALPHA = rotationZ
  // draw ALPHA red rectangle
  fill('red');
  rect(0,0,map(rotationZ, 0, 360, 1, width), height/3);
  // print values
  textAlign(CENTER)
  fill(255);
  text(round(rotationZ), width/2, height/6);

  // Understanding device orientation: BETA = rotationX
  fill('blue');
  rect(0,height/3,map(rotationX, -180, 180, 1, width), height/3);
  // print values
  fill(255);
  text(round(rotationX), width/2, height/2);

  // Understanding device orientation: GAMMA = rotationY
  fill('green');
  rect(0,height/3 * 2,map(rotationY, -180, 180, 1, width), height/3);
  // print values
  fill(255);
  text(round(rotationY), width/2, height/6*5);
}


function touchEnded(event) {
  DeviceOrientationEvent.requestPermission()
}*/
