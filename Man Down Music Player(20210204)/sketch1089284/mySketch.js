let mic;
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	mic = new p5.AudioIn();
	mic.start();
}

let r = 100;

function ball() {
	rectMode(CENTER);
	let micLevel = mic.getLevel();
	r = lerp(r,micLevel*8000,0.2);  //micLevel值域只有0-1，需要額外乘數字
	noFill();
	strokeWeight(2);
	stroke('#0ff7ff');
	if(micLevel > 0.13){
		for(var i=0; i<width; i+=40){
			for(var j=0; j<height; j+=40){
				stroke("#2200ff");
				rect(i,j,40);
			}
		}
	}
	if(micLevel > 0.04){
		stroke('red');
		rect(width/2,height/2,r*1.5);
	}
	if(micLevel > 0.06){
		push();
			translate(width/2,height/2);
			rectMode(CORNERS);
			rotate(frameCount*10);
			stroke('yellow');
			rect(0,0,200);
		pop();
	}
	ellipse(width/2,height/2,r*2);
	if(micLevel > 0.1){
		push();
			noFill();
			stroke("#a500ff");
			ellipse(width/2,height/2,r);
		pop();
		push();
			textAlign(CENTER);
			fill(r/random(5),r/random(5),r/random(10));
			noStroke();
			textSize(r/10);
			text("MAN DOWN",width/2,height/1.8);
		pop();
	}
	
}

function draw() {
	background(0,10);
	ball();
}