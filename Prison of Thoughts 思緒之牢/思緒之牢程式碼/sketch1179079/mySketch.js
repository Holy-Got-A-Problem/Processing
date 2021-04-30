var obj,theBlur,forest

function preload(){
	obj = loadModel("Heart.obj")
	theBlur = loadImage("blurrr.png")
	forest = loadImage("fore2.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight,WEBGL);
	background(0);
	colorMode(HSB)
	drawingContext.shadowOffsetX = 5;
  	drawingContext.shadowOffsetY = 5;
 	drawingContext.shadowBlur = 100;
  	drawingContext.shadowColor = color(0,100);
	// pixelDensity(5)
}

function electricBall(){
	push()
		for(var j=-11; j<11 ; j++){
			// specularMaterial("#b716f7")
			translate(j,0)
			rotateY(frameCount/200)
			fill(280+j*2.5*cos(frameCount/10),50,100)
			// rotateZ(PI/2)
			noStroke()
			torus(250,(noise(j/10))*6,100,2)
		}
	pop()
}

function theHeart(){
	push()
	translate(0,280,-100)
	rotateX(PI)
	rotateY(PI/2)
	// fill(255)
	// sphere(170)
	noFill()
	strokeWeight(0.2)
	stroke(15*sin(frameCount/20),100,100)
	scale(1.8*map(sin(frameCount/10),-1,1,0.9,1))
	// scale(1.5)
	model(obj)
	pop()
}


function setPackage(){
	push()
	// translate(mouseX-380,mouseY-380)
	translate(10,0,0)
	
	theHeart()
	rotate(PI/(5*cos(frameCount/200)))
	electricBall()
	image(theBlur,-10000,-10000)
	
	pop()
}

function worldBall(){
	push()
	translate(0,0)
	// fill(0,0,100)
	noStroke()
	texture(forest)
	sphere(800)
	rotateY(frameCount)
	pop()
}

function draw() {
	blendMode(BLEND)
	blendMode(SCREEN)
	background(0);
	translate(random(-2,2),random(-10,10),0)
	setPackage()
	worldBall()
}

function mousePressed(){
	// save()
}