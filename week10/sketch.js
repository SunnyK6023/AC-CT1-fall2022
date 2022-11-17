var notes = [60, 62, 64, 65, 67, 69, 71];
var trigger = 0;
var index = 0;

var autoplay = false;
var song = tnt;

var osc;

let capture = null;
let tracker = null;
let positions = null;
let w = 0,
  h = 0;

function setup() {
  w = 700;
  h = 400;
  createCanvas(w, h);
  osc = new p5.Oscillator("triangle");
  osc.start();
  osc.amp(0);

  capture = createCapture(VIDEO);
  capture.size(w, h);
  //capture.hide();

  frameRate(10);
  colorMode(HSB);
  background(0);

  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);
}

function playNote(note, duration) {
  osc.freq(midiToFreq(note));
  osc.fade(1, 0.1);

  if (duration) {
    setTimeout(function () {
      osc.fade(0, 0.2);
    }, duration - 50);
  }
}

function draw() {
  if (mouseIsPressed) {
    if (mouseY < height) {
      var key = floor(map(mouseX, 0, width, 0, notes.length));
      playNote(notes[key]);
    }
  }

  if (song.length == 0) {
    autoplay = false;
  }

  if (autoplay && millis() > trigger) {
    if (song[index].note !== -1) {
      playNote(notes[song[index].note], song[index].duration);
    }
    trigger = millis() + song[index].duration;
    index++;
  } else if (index >= song.length) {
    autoplay = false;
  }

  let w = width / notes.length;
  for (let i = 0; i < notes.length; i++) {
    let x = i * w;
    if (mouseX > x && mouseX < x + w && mouseY < height) {
      if (mouseIsPressed) {
        fill(80, 255, 190);
      } else {
        fill(140);
      }
    } else {
      fill(220);
    }

    if (autoplay && i === song[index - 1].note) {
      fill(255, 170, 30);
    }

    //rect(x, 0, w, height);
  }

  // Flip the canvas so that we get a mirror image
  //translate(w, 0);
  //scale(-1.0, 1.0);
  // Uncomment the line below to see the webcam image (and no trail)
  //image(capture, 0, 0, w, h);
  positions = tracker.getCurrentPosition();

  if (positions.length > 0) {
    const eye1 = {
      outline: [23, 63, 24, 64, 25, 65, 26, 66].map(getPoint),
      center: getPoint(27),
      top: getPoint(24),
      bottom: getPoint(26),
    };

    //const irisColor = color(random(360), 80, 80, 0.4);
    //drawEye(eye1, irisColor);
    eyeTrigger(eye1);
  }
}

function getPoint(index) {
  return createVector(positions[index][0], positions[index][1]);
}

function eyeTrigger(eye) {
  //noFill();
  stroke(255, 0.4);
  ellipse(eye.center.x, eye.center.y, 20, 20);
  //drawEyeOutline(eye);
  let key = floor(map(eye.center.x, 0, width, 0, notes.length));
  if (eye.center.x <= 100 && eye.center.x >= 0) {
    // fill(255, 170, 30);
    playNote(notes[key]);
  }

  if (eye.center.x <= 200 && eye.center.x >= 100) {
    playNote(notes[key]);
  }

  if (eye.center.x <= 300 && eye.center.x >= 200) {
    playNote(notes[key]);
  }

  if (eye.center.x <= 400 && eye.center.x >= 300) {
    playNote(notes[key]);
  }

  if (eye.center.x <= 500 && eye.center.x >= 400) {
    playNote(notes[key]);
  }

  if (eye.center.x <= 600 && eye.center.x >= 500) {
    playNote(notes[key]);
  }

  if (eye.center.x <= 700 && eye.center.x >= 600) {
    playNote(notes[key]);
  }
}

function keyPressed() {
  // Clear background
  //background(255);
}

function timestampString() {
  return (
    year() +
    nf(month(), 2) +
    nf(day(), 2) +
    "-" +
    nf(hour(), 2) +
    nf(minute(), 2) +
    nf(second(), 2)
  );
}