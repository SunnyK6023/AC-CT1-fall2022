mouseX = 0;
mouseY = 0;
var ranColor;
var relax;
var sneeze;

function preload() {
  relax = loadSound("relax.mp3");
  sneeze = loadSound("sneeze.wav");
}

function setup() {
  createCanvas(600, 600);
  relax.play();
  bgColor = color(random(255), random(255), random(255));
  smooth();
  noStroke();
}

function mousePressed() {
  bgColor = color(random(255), random(255), random(255));
  sneeze.play();
}

function draw() {
  background(bgColor);
  fill(0);
  push(); // save things for the background pattern
  translate(width / 2, height / 2); // move to middle of screen
  drawStar(); // draw the background
  pop();

  push(); // save things for the foreground pattern
  translate(mouseX, mouseY); // move to the mouse's location
  rotate((TWO_PI * frameCount) / 10); // rotate over time
  drawStar(); // draw the foreground
  pop();
}

function drawStar() {
  int((numSpokes = 150)); // draw this many radiating spokes
  for (let i = 0; i < numSpokes; i++) {
    float((t0 = map(i, 0, numSpokes - 1, 0, TWO_PI))); // starting angle
    float((t1 = t0 + TWO_PI / (2 * numSpokes))); // ending angle
    arc(0, 0, 1000, 1000, t0, t1); // draw this stroke
  }
}
mouseX = 0;
mouseY = 0;
var ranColor;
var relax;
var sneeze;

function preload() {
  relax = loadSound("relax.mp3");
  sneeze = loadSound("sneeze.wav");
}

function setup() {
  createCanvas(600, 600);
  relax.play();
  bgColor = color(random(255), random(255), random(255));
  smooth();
  noStroke();
}

function mousePressed() {
  bgColor = color(random(255), random(255), random(255));
  sneeze.play();
}

function draw() {
  background(bgColor);
  fill(0);
  push(); // save things for the background pattern
  translate(width / 2, height / 2); // move to middle of screen
  drawStar(); // draw the background
  pop();

  push(); // save things for the foreground pattern
  translate(mouseX, mouseY); // move to the mouse's location
  rotate((TWO_PI * frameCount) / 10); // rotate over time
  drawStar(); // draw the foreground
  pop();
}

function drawStar() {
  int((numSpokes = 150)); // draw this many radiating spokes
  for (let i = 0; i < numSpokes; i++) {
    float((t0 = map(i, 0, numSpokes - 1, 0, TWO_PI))); // starting angle
    float((t1 = t0 + TWO_PI / (2 * numSpokes))); // ending angle
    arc(0, 0, 1000, 1000, t0, t1); // draw this stroke
  }
}
