var myfont;
var txt;
var pts = [];
function preload(){
  myfont = loadFont("Xerox-Sans-Serif-Narrow.ttf")
}
function setup(){
  createCanvas(800,600)
  textFont(myfont)
  // textSize(400)
  txt = myfont.textToPoints("Syamantak", 100, 200, 150)
  strokeWeight(8)
  stroke(255)
  for(var i = 0; i < txt.length; i ++){
    pts.push(new dot(txt[i].x, txt[i].y))
  }
}
function draw(){
  background(51)
  // var tex = text("Samyak", 100, 100)
  for(var i = 0; i < pts.length; i ++){
    pts[i].show()
    pts[i].hover()
  }

}

function dot(x, y){
  this.x = x;
  this.y = y;
  this.show = function(){
    point(this.x, this.y)
  }
  this.hover = function(){
    if (dist(mouseX, mouseY, this.x, this.y) <= 8){
      stroke(0, 255, 0)
    }else{
      stroke(255)
    }
  }
}
