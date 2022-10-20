let radius
let interval = 700
let bgColor
var xoff = 0;


function setup() {
  createCanvas(600, 600); 
  colorMode(HSB, TWO_PI, 1, 1)
  bgColor = color(0, 0, 0)
  noStroke(255)
  radius = 60 

  let timer1 = setInterval(()=>{
 bgColor = color (random(), random(), random());
 }, interval)
}


function draw() {
  background(bgColor);
  translate(width/2,height/2)
 
fill(random(), random(), random())
  
 var x = map(noise(xoff), 0, 1, 0, width);
  
  xoff += 0.1;
  
  
  ellipse(0, xoff, radius) 
  
  
  push()
		var r= 2
	for(var a=0;a < 300; a++){
	fill(5)
	
	
	rotate(0.1)	 
  ellipse(200 + 50 * cos(100+a/10*(frameCount+200)/400),
          random() * sin(a *(frameCount+1000)/100),
          10 * noise(a,frameCount/100))
	

	r=r*0.99+2
	
	}
pop()
  
}