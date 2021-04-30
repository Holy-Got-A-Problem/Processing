function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	colorMode(HSB)
	pixelDensity(5)
}

function createStar(x,y,rt){
	push()
		translate(x,y)
		rotate(rt)
		noFill()
		beginShape();
			vertex(-30,30);
			vertex(0,0);
			vertex(30,30);
			vertex(0,100);
			vertex(-30,30);
		endShape();
		// ellipse(0,100,10)
	pop()
}

function star(){
	let theX = 0
	let theY = 50*map(cos(frameCount/10),-1,1,0,1)
	for(var i=0;i<8;i++){
		createStar(theX,theY,PI*i/4)
	}
}

function drawStar(){
	translate(width/2,height/2)
	rotate(frameCount/30)
	scale(2+map(sin(frameCount/4),-1,1,0,1))
	strokeWeight(0.01)
	stroke(150,80,100)
	star()
	
}

function draw() {
	// background(0,1);
	drawStar()
}

function mousePressed(){
	save()
}

