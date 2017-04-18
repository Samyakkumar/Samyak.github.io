var player;
var ball;
var score = 0;
function setup() {
  createCanvas(600, 600);
  stroke(0, 120, 255);
  strokeWeight(4);
  player = new Player();
  ball = new Ball(player);
}

function draw() {
  background(51);
  player.show();
  player.move();
  ball.show();
  ball.move();
  ball.trail();
  ball.score();
}


function showScore(x, y, message){
  text(message, x, y);
}

function Player(){
  this.score = 0;
  this.pos = createVector(width/2, height-8)
  this.velocityx = createVector(-5, 0)
  this.show = function(){
    rect(this.pos.x,this.pos.y , 120, 4);
  }
  this.move = function(){
    if(keyIsDown(LEFT_ARROW)){
      this.pos.add(this.velocityx);
    }
    if(keyIsDown(RIGHT_ARROW)){
      this.pos.sub(this.velocityx);
    }
  }
}


function Ball(player){
  this.player = player;
  this.pos = createVector(width/2, height/2)
  this.pathtravelled = [];
  this.v = createVector(0, random(8, 10))
  // this.g = createVector(0, 0.5);
  this.vx = createVector(random(3, 5), 0)
  this.col = color(0, 200, 255, 35)

this.show = function(){
    push();
    fill(this.col);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 15, 15);
    pop();
  }

  this.move = function(){
    this.pos.add(this.v);
    this.pos.add(this.vx);
    // this.v.add(this.g);
    console.log(this.player.pos.y)
    if(this.pos.y > height || this.pos.y < 0){
      this.v.mult(-1);
    }else if(this.pos.x > width || this.pos.x < 0){
      this.vx.mult(-1);
    }else if(this.pos.y > this.player.pos.y - 17 && this.pos.x > this.player.pos.x && this.pos.x < this.player.pos.x + 120){
      this.v.mult(-1);
    }
    this.pathtravelled.push(createVector(this.pos.x, this.pos.y));
    if(this.pathtravelled.length > 5){
      this.pathtravelled.splice(0, 1);
    }
  }
  this.score = function(){
    if(this.pos.y > height - 24){
      score += 1;
      showScore(20, 20, score);
      console.log("HIT")
    }
  }
  this.trail = function(){
    for(var i =0; i < this.pathtravelled.length ; i++){
      var p = this.pathtravelled[i];
      push();
      fill(this.col);
      noStroke();
      ellipse(p.x, p.y, 13,13);
      pop();
    }
  }
}

