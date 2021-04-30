function setup() {
	createCanvas(windowWidth, windowHeight);
	background(25);
	pixelDensity(5)
	
}

function theTree(){
		translate(width*2/3-50,height/3)
	  rotate(PI/-30+frameCount)
		strokeWeight(0.1)
		let theClr = random(["#01ffc3","#01ffff","#ffb3fd","#9d72ff"])
		noFill()
		stroke(theClr)
		let theX = random(-400,400)*sin(frameCount)
		let theY = random(-400,400)*cos(frameCount)
		beginShape()
			// curveVertex(0,0)
			for(var i=0;i<100;i++){
				curveVertex(theX/i*10,theY+i*2)
			}
			// curveVertex(0,0)
		endShape()
		blendMode(SCREEN)
}

function draw() {
	// background(0,5);
	theTree()
}

function mousePressed(){
	save()
	
}