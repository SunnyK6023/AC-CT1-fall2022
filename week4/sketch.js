let gridStep = 50
let cRadius = gridStep * 0.37

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, width, 100, 100)
}

function draw() {
    
background(180, 200, 100)

//showGrid()
  noStroke()
  for(let x = 0; x < width/gridStep; x++){
    for(let y = 0; y< height/gridStep; y++){
      let posx = (x * gridStep) + (gridStep * 0.5)
      let posy = y * gridStep + (gridStep * 0.5)
      
      posx += random(-1, 2)
      posy += random(-2, 1)
      
      fill(posx, 80, 80)
      circle(posx, posy, cRadius*2)
    }
  }


  
}

function showGrid(){
  
  stroke(255, 0, 0)
  for(let x = 0; x < width; x = x+gridStep){
    line(x, 0, x, height)
  }
  
  stroke(0, 0, 255)
  for(let y = 0; y < height; y = y+gridStep){
    line(0, y, width, y)
  }
}
