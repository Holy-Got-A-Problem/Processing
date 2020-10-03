class Ball{
	//設值
	constructor(values){     
		this.r = values.r || 100  //使用or為預設值
		this.p = values.p
		this.v = values.v
		this.a = values.a
		this.clr = random(["#D17B0F","#FF206E","#FBFF12","#41EAD4","#D3CDD7"])
		this.mode = random(["Happy","Sad"])
		this.randomSet = random(10000) //製造每隻精靈動作不同步
	}
	//draw圖形
	draw(){
		push()
			translate(this.p.x,this.p.y)
			//球體身體
			noStroke()
			fill(this.clr)
			ellipse(0,0,this.r)	
			if (this.mode == "Happy"){
				fill(255)
				ellipse(0,0,this.r/1.5)
				fill(0)
				ellipse(0,0,20)
			}else{
				fill(255)
				arc(0,0,this.r/2,this.r/2,0,PI)
				fill(0)
				arc(0,0,this.r/3,this.r/3,0,PI)
			}
			//腳
			stroke(this.clr)
			strokeWeight(4)
			noFill()
			for(var o=0;o<8;o++){
				rotate(PI/4)
				beginShape()
				for(var i=0;i<30;i++){
					vertex(this.r/2+i,sin(i/5+(-frameCount/5)+this.randomSet)*10)
				}
				endShape()
			}
		pop()
	}
	//draw動作行為
	update(){
		//速度:速度累加於位置
		this.p.x += this.v.x
		this.p.y += this.v.y
		
		//表情條件
		if(this.mode == "Happy"){
			this.p.y += sin(frameCount/(10+this.randomSet/100))*5
		}
		if(this.mode == "Crazy"){
			this.v.x += random(-5,5)
		}
	}
	//draw額外狀態條件
	isBallInRange(){
		let d = dist(mouseX,mouseY,this.p.x,this.p.y)
		if(d<this.r){
			return true
		}
		else{
			return false
		}
	}
	//mousePressed動作行為
	escape(){
		this.v.x = random(-10,10)
		this.v.y = random(-10,10)
	}
	setMode(mode){
		this.mode = mode
	}
}

var ball //一顆球
var balls = [] //多顆球

//Class的數值設在setup內
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	
	for(var i=0;i<30;i++){
		let ball = new Ball({
			r:50,
			p:{x:width/2,y:height/2},
			v:{x:random(-1,1),y:random(-1,1)},
			a:{x:0,y:1}
		})
		balls.push(ball)
	}
}

function draw() {
	background(0)
	for(let ball of balls){  	//等於for(var i=0;i<balls.length;i++) 
		ball.draw()							//let ball = balls[i]	
		ball.update()
		if(ball.isBallInRange()){
			ball.clr = "#96e076"
			ball.setMode("Crazy")
		}
	}
}

function mousePressed(){
	let ball = new Ball({
			r:50,
			p:{x:width/2,y:height/2},
			v:{x:random(-1,1),y:random(-1,1)},
			a:{x:0,y:1}
		})
		balls.push(ball)
	
	for(let ball of balls){
		ball.setMode("Happy")
		ball.escape()
	}
	
	
}
