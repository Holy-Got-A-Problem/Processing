let capture  //抓出視訊
let cacheGraphics  //操作視訊
var mode = 0   //預設mode模式

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	capture = createCapture(VIDEO)
	capture.size(640,480)
	cacheGraphics = createGraphics(640,480)
	cacheGraphics.translate(640,0)   //鏡像
	cacheGraphics.scale(-1,1)        //鏡像
	capture.hide()
}

function windowResized(){
	resizeCanvas(windowWidth,windowHeight)
}

function draw() {
	background(0);
	
	//叫出視訊與設定
	cacheGraphics.image(capture,0,0)
	scale(1.5)
	
	//控制像素
	let span = 15 + mouseX/30      //建議未來創作時元素長寬都定一個span連動
	for(var i=0; i<cacheGraphics.width; i+=span){
		for(var j=0; j<cacheGraphics.height; j+=span){
			
			//像素色初始設定
			let pixel = cacheGraphics.get(i,j)  //像素色
			fill(pixel)
			noStroke()
			let bk = (pixel[0]+pixel[1]+pixel[2])/2.5  //亮度值
			
			//mode 0:原影像
			if(mode==0){
				colorMode(RGB)
				// fill(pixel)
				rect(i,j,span)
			}
			
			//mode 1:黑白圈
			if(mode==1){  //mode 1
				fill(bk)   //亮度值直接套入顏色使之灰階
				ellipse(i,j,span*map(bk,0,255,0,1))   //用亮度值控制像素大小
																							//越亮越大;越暗越小
			}
			
			//mode 2:旋轉方塊
			if(mode==2){
				colorMode(HSB)
				fill(pixel[0],80,80)
				push()
					translate(i,j)
					rotate(pixel[0]/10)  //用顏色控制旋轉大小
					rectMode(CENTER)
					rect(0,0,span*0.3+pixel[2]/20) //用顏色種類來控制大小(ex:藍色會變大)
					fill(0)
					ellipse(0,0,3)
				pop()
			} 
			
			//mode 3:文字雲
			if(mode==3){
				colorMode(RGB)
				let txt = "也許有一天我見不到你了" //使用單字串
				let bkmap = int(map(bk,30,255,10,0))  //用0-255的亮度控制txt
				fill(pixel[0]+30,pixel[1]+30,pixel[2]+30)
				textSize(span)
				textStyle(BOLD)
				text(txt[bkmap],i,j)
			}
			
		}
	}
	// image(capture,mouseX,mouseY)
}

function keyPressed() {
	if(key == "0"){
		mode=0
	}
	if(key == "1"){
		mode=1
	}
	if(key == "2"){
		mode=2
	}
	if(key == "3"){
		mode=3
	}
}