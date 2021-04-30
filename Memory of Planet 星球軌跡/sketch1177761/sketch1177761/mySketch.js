let mic,micLevel;
let span = 200;

function preload(){
	theTexture = loadImage("下載 (23).png");
}

function setup() {
	createCanvas(windowWidth, windowHeight,WEBGL);
	background(0);
	rectMode(CENTER);
	colorMode(HSB);
	blendMode(BLEND);
	mic = new p5.AudioIn();
	mic.start();
}

function theSphere(){
	push();
			span = lerp(span,micLevel*ˇ15000,0.01);
			texture(theTexture);
					// strokeWeight(0.5);
					// stroke(frameCount*2%360,80,100);
					noStroke();
					// noFill();
			// fill(pix)
			rotateY(frameCount/15);
			// rotateZ(frameCount/40);
			sphere(span);
			orbitControl()
	pop();
}

function draw() {
	background(0);
	micLevel = mic.getLevel();
	
	theSphere()
	// if (micLevel > 0.01){
	// 	push()
	// 		// rotate(frameCount);
	// 		noFill();
	// 		let clr = map(micLevel,0,0.7,0,360)
	// 		stroke(clr,80,100);
	// 		rect(random(-20,20), random(-5,5), span,span,random(2,10));
	// 	pop()
	// }
	// if(micLevel <= 0.01){
		
	// }
}