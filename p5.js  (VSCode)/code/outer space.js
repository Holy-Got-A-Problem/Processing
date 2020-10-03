function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0)
}

// 元素1:星宿
function type1(x,y,r) {
	push()
		fill(random(360),random(100),random(100))
		ellipse(x,y,r)
	pop()
}

// 元素2:外圍無限軌跡
function type2(x,y,r) {
	push()
		// noFill()
		fill(frameCount%20,80,80)
		ellipse(x,y,r)
	pop()
}

// 元素3:核心圓
function type3(x,y,r) {
	push()
		// clrB = 1+sin(frameCount/20)
		fill(25,70*sin(frameCount/20),95)
		noStroke()
		ellipse(x,y,r)
		rotate(frameCount/10)
	pop()
}

//元素4:內部無限軌跡
function type4(x,y,r) {
	push()
		noFill()
		strokeWeight(1.5)
		stroke(frameCount%360,80,80)
		ellipse(x,y,r)
	pop()
}

function draw() {
	blendMode(BLEND)
	// background(0,0.05)
	colorMode(HSB)
	blendMode(SCREEN)
	
	let theX = cos(frameCount/20)  //設定x軸的三角函數軌跡
	let theY = sin(frameCount/10)  //設定y軸的三角函數軌跡
	let theR1 = sin(frameCount/20) //設定圓形直徑的三角函數縮放1
	let theR2 = cos(frameCount/30) //設定圓形直徑的三角函數縮放2
	
	for(var i=0; i<20; i++){
		type1(i+random(width),i+random(height),5*theR1)
	}
	translate(width/2,height/2)
	type2(theX*400,theY*400,30)
	type3(0,0,theR1*80)
	type4(theX*100, theY*300, theR2*80)
	type4(theX*250, theY*30, theR1*50)
}
