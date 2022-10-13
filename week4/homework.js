let particles = [];
const num = 800;

const noiseScale = 0.01;

var music;
var button;

function preload(){
  music = loadSound("Babbling Brook-SoundBible.com-17660315.mp3", loaded)
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function loaded(){
  console.log("loaded");
}
function togglePlaying(){
  music.play();
}

function setup() {
  createCanvas(400, 400);
    music.play();
  for(let i = 0; i < num; i ++){
   particles.push(createVector(random(width), random(height)));
  }
  stroke(100);
}



function draw() {
  background(0, 90);
  for(let i = 0; i < num; i ++){
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if(!onScreen(p)&& frameCount < 1000){
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function mouseReleased(){
  noiseSeed(millis());
}
function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}