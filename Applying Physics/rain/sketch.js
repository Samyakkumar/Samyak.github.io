
var droplets = [];
var numdrops = 600;
var col;
var randlist = []
var fc;
var sound;
function preload(){
  sound = loadSound('rain-03.mp3');
}
function setup() {
  createCanvas(600, 600);
  for(var i =0; i<numdrops; i++){
    col = color(3, 74, 236, 50);
    var temp = new Drops(col);
    droplets.push(temp);
  }
  for(var j =0; j< numdrops; j++){
    randlist.push(Math.floor(random(0, numdrops-1)));
  }
  sound.loop();
}
function draw() {
background(255);
  for(var i =0; i<numdrops; i++){
    droplets[i].shrink(randlist[i]);
        droplets[i].move();
      droplets[i].repeat();
      droplets[i].applywindforce();
      droplets[i].trail();
    if(i != randlist[i]){
      droplets[i].show();
    }
  }
  text(frameCount, width/2, height/2);
  // setTimeout(function(){
  //   noLoop();
  // }, 2000);
}

function Drops(col){
  this.x = random(-100, width);
  this.y = random(-500, 0);
  this.z = random(0, -50);
  this.g = random(3, 10);
  this.windforce = 0;
  this.widthdrop = random(2, 4);
  this.uniform = 4;
  this.length = random(15, 20);
  this.pathfollowed = [];
  this.show = function(){
  	// translate(width/2, height/2);
  	// rotate(PI)
    strokeWeight(2);
    stroke(col);
    fill(col);
    ellipse(this.x, this.y, this.widthdrop, this.length);
    this.pathfollowed.push(createVector(this.x, this.y));
    if(this.pathfollowed.length > 2){
      this.pathfollowed.splice(0, 1);
    }
  }
  this.move = function(){
    this.y += this.g;
    this.g *= 1.01;
  }
  this.repeat = function(){
    if(this.y > height || this.x > width){
      this.y = random(-500, 0);
      this.g = random(3, 10);
      this.widthdrop = random(2, 4);
    }
  }
  this.shrink = function(){
      //   strokeWeight(2);
      // stroke(col);
      // line(x, y,x, y + length - random(23, 30));
  }
  this.applywindforce = function(){
    this.x+= this.windforce;

  }
  this.trail = function(){
      for(var t = 0; t < this.pathfollowed.length; t++){
        var pos = this.pathfollowed[t];
        ellipse(pos.x, pos.y, this.widthdrop/2, this.length/2);
      }
  }
}
