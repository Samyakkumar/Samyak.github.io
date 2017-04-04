var circles = [];
var num_circles = 10;
function setup() {
	pixelDensity(1);
  for(var i = 0; i < num_circles; i++){
    var x = random(10, width) * 6;
    var y = random(10, height)*6 ;
    var col = color(random(255), random(255), random(255), 90);
    var ysp = random(-3, 5);
    var xsp = random(-10, 10);
    var circ = new Circle(x, y, xsp, ysp, col);
    circles.push(circ);
  }
  
}

function draw() {
  createCanvas(700, 700);
  background(51);
  for(var k = 0; k < num_circles; k++){
    // circles[k].changecol();
    circles[k].show();
    circles[k].move();
    circles[k].trail();
  }
}
function Circle(x,y, xspeed, yspeed, col){
  this.col = col;
  this.yacc = 0.5;
  this.xacc = 0;
  this.x = x;
  this.y = y;
  this.xspeed = xspeed;
  this.yspeed = yspeed;
  this.path = [];
  this.move = function(){
    if(this.y > height || this.y < 0){
      this.yspeed *= -1;
      this.yspeed += this.yacc;
    }else{
      this.yspeed *= 1;
      this.yspeed += this.yacc;
    }
    if(this.x >= width || this.x <= 0){
      this.xspeed *= -1;
      this.xspeed += this.xacc;
    }else{
      this.xspeed *= 1;
      this.xspeed += this.xacc;
    }
    this.x += this.xspeed;
    this.y += this.yspeed;
    this.path.push(createVector(this.x, this.y));
    if(this.path.length > 6){
      this.path.splice(0, 1);
    }
    // var distance = int(dist(mouseX, mouseY, this.x, this.y));
    // if(distance <= 20){
    //   console.log("TRUE")
    //   var randmovex = random(5,15)*8;
    //   var randmovey = random(5, 15)*8;
    //   this.y +=randmovey;
    //   this.x += randmovex;
    //   this.show();
    // }
  }
  this.trail = function(){
    for(var j = 0; j < this.path.length; j++){
      var pos = this.path[j];
      ellipse(pos.x, pos.y, 15, 15);
    }
  }
  this.changecol = function(){
    this.col = color(random(255), random(255), random(255), 100);
  }
  this.show = function(){
    fill(this.col);
    noStroke();
    ellipse(this.x, this.y, 20,20);
  }
  }
  
