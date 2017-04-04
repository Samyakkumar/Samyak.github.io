
var droplets = [];
var numdrops = 400;
var col;
var randlist = [];
var shrinklist = []
var te;
function setup() {
  createCanvas(700, 700);
  for(var j =0; j< numdrops; j++){
    randlist.push(random(65, 90));
    shrinklist.push(random(0, numdrops));
  }

  for(var i =0; i<numdrops; i++){
    col = color(0, 120, 255);
    te = String.fromCharCode(randlist[i]);
    var temp = new Drops(col, te);
    droplets.push(temp);
  }

}

function draw() {
background(255);
  for(var i =0; i<numdrops; i++){
    droplets[i].shrink(shrinklist[i]);
    if(i != shrinklist[i]){
      droplets[i].windforce();
      droplets[i].show();
      droplets[i].move();
      droplets[i].repeat();
     }
  }
  text(frameCount, width/2, height/2);
}

function Drops(col, te){
  var x = random(-100, width);
  var y = random(-500, 0);
  var g = random(3, 10);
  var windforce = 0;
  var length = 25;
  this.show = function(){
    strokeWeight(2);
    textSize(20);
    fill(col);
    textFont("cursive");
    textStyle(ITALIC);
    text(te, x, y);
  }
  this.move = function(){
    y += g;
  }
  this.repeat = function(){
    if(y > height || x > width){
      y = random(-500, 0);
    }
  }
  this.shrink = function(){
    textSize(random(5, 10));
    // line(x, y,x, y + length - random(15, 23));
  }
  this.windforce = function(){
    x+= windforce;

  }
}
