function preload(){
	myFace = loadImage("face.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	pixelDensity(5)

}

function draw() {
	background(0)
	push()
		scale(0.3)
		let span = 10
		for(var i=0; i<myFace.width; i+=span){
			for(var j=0; j<myFace.height; j+=span){
				pix= myFace.get(i,j)
				strokeWeight(1)
				stroke(pix)
				noFill()
				let moveS =  sin(frameCount/10)
				let moveC = cos(frameCount/20)
				line(1+i,1+j,random(-50,50)+i,random(-200,300)+j)
				// rect(i+random(-50.50),j+random(-50.50),random(80,100)*moveS,random(80,90))
				
			}
		}
	pop()

}

function mousePressed(){
    save()
}