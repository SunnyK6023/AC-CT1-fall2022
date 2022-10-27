let bg
let eaters=[]
let colors=['#bf1a2f', '#f00699','#454e9e','#018e42','#f7d002']
let posx
let posy
let radius


function setup() {
	createCanvas(800, 800);
	background(255)
	bg= createGraphics(800, 800);
	bg.noFill()
	
	
	bg.background(0)
	

	
	for(let i=0; i<100; i++){
		eaters.push(new eater(random(width), random(height), random(5, 100)))
	}
}

function draw() {

	image(bg, 0, 0)
	for(let eater of eaters){
		if(frameCount>80){
		eater.move();
		}
     eater.full();
		eater.eat();
		eater.show();
	}
 if(posy + radius >= height || posy - radius<= 0){
    velY *= -1;
  }
  
  if(posx - radius <= 0  || posx + radius>= width){
    velX *= -1
  }{}
}

class eater{

constructor(x, y, s){
	this.pos= createVector(x, y)
	this.vel= p5.Vector.random2D();
  this.color=color (random(colors))
	this.vel.setMag(1)
  this.s=s
  }
	
move(){
	let weight= this.s/1000
	this.vel.setMag(1- weight)
	this.pos.add(this.vel)
	//edges
  if(this.pos.x < 2 || this.pos.x > width -2){
		this.vel.mult(-1) 
	}
	 if(this.pos.y < 2 || this.pos.y > height -2){
		this.vel.mult( -1) 
	}	
}
	
eat(){
	
	let index = eaters.indexOf(this);
		
	for(let i=0; i<eaters.length; i++)
	{
	if(index!=i){
			if(dist(this.pos.x, this.pos.y, eaters[i].pos.x, eaters[i].pos.y)< this.s/2+ eaters[i].s/2){
				//bigger one eats smaller one
				
				if(this.s > eaters[i].s){
					this.s+= eaters[i].s/2;
					eaters.splice(i, 1);
				} 
				
     }
	}
	}
}
	
full(){
	if(this.s>150){
		let divider= int(random(40,120))
		let pie= this.s *4
		while(pie>0){
			let piece= random(5, 10)
			pie-=piece
			let xey= constrain(this.pos.x+ random(-this.s, this.s), 3, width-3)
			let yey= constrain(this.pos.y+ random(-this.s, this.s), 3, height-3)
			eaters.push(new eater(xey, yey, piece))
			
		}
		
		let index = eaters.indexOf(this);
		 eaters.splice(index, 1);
	}
}
	
show(){

	noStroke()
	fill(this.color);
	ellipse(this.pos.x, this.pos.y, this.s)
}



}