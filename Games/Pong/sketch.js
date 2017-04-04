
var board = new Board();
var player = new Player();
var ai = new AI();
var ball = new Ball();
var   ballx = 250;
var   bally = 250;
var xplayer, yplayer;
var xAI, yAI;
var aicont = false;
var xballspeed;
var yballspeed;
var playerscore = 0;
var aiscore =  0;
var allowcontact = false;
function setup() {
  xballspeed = random(-6, 6);
  yballspeed = random(-6, 6);
  createCanvas(500, 500);
  xplayer = 80;
  yplayer = 100;
  xAI = 420;
  yAI = 100;
}

function draw() {
    background(51);
    Showscore();
  board.display();
  player.show();
  player.move();
  ai.show();
  ai.move();
  ball.show();
  ball.contact();
  ball.move();
  ball.score();
  if(ballx < xplayer - 5 || ballx > xAI + 5){
    allowcontact = false;
  }else{
    allowcontact = true;
  }
  console.log(allowcontact);
}

function Board(){
  this.display = function(){
    strokeWeight(4);

    stroke(225, 0, 0)

    line(3, 0, 3, 200);
    line(3, 300, 3, 500);

    line(497, 0, 497, 200);
    line(497, 300, 497, 500);
  }


}

function Player(){
  this.show = function(){
    stroke(255);
    line(xplayer, yplayer, xplayer, yplayer + 70);
  }
  this.move = function(){
    var move = true;
    if(xplayer >=250){
      move = false;
      xplayer = 249;
    }else{
      move = true;
    }
    if(xplayer <=0){
      move = false;
      xplayer = 8;
    }else{
      move = true;
    }
    if(yplayer <= 0 ){
      move = false;
      yplayer = 1;
    }else{
      move = true;
    }
    if(yplayer + 70 >= 500 ){
      move = false;
      yplayer = 429;
    }else{
      move = true;
    }
    if(move){
      if(keyIsDown(UP_ARROW)){
        yplayer -= 5;
      }
      if(keyIsDown(DOWN_ARROW)){
        yplayer += 5;
      }
      // if(keyIsDown(LEFT_ARROW)){
      //   xplayer -= 5;
      // }
      // if(keyIsDown(RIGHT_ARROW)){
      //   xplayer += 5;
      // }
    }


  }
}

function Ball(){
  
  this.score = function(){
  	var tempai = 0;
  	var tempplayerscore = 0;
    if(bally >=200 && bally <= 300 && ballx <=1){
      aiscore += 1;
      // if(aiscore % 3 == 0.0 && aiscore > tempai){
      //   aiscore = aiscore/3;
      // }
      tempai = aiscore;
      Showscore();
    }
    if(bally >=200 && bally <= 300 && ballx >=499){
      playerscore += 1;
      // if(playerscore %3 == 0 && tempplayerscore > playerscore){
      //   playerscore = playerscore/3;
      // }
       tempplayerscore = playerscore;
       Showscore();
    }
  }
  this.show = function(){
    noStroke();
    fill(0, 0, 255);
    ellipse(ballx, bally, 10, 10);
  }

  this.contact = function(){
    var distance = dist(ballx, bally, xplayer, yplayer);
    if(allowcontact){
      if(ballx <= xplayer && (bally >= yplayer && bally <= yplayer+70)){
      // if(xballspeed < 15){
      //       xballspeed *= random(0.5, 2);
      // }else{
      //     xballspeed = random(-6, 6);
      // }
      xballspeed *= -1;
      // yballspeed *= -1;
    }
    }
    if(allowcontact || !allowcontact){
      if(ballx >= xAI && (bally >= yAI && bally <= yAI+70)){
      aicont = true;
      // if(xballspeed < 15){
      //       xballspeed *= random(0.5, 2);
      // }else{
      //     xballspeed = random(-6, 6);
      // }
      xballspeed *= -1;
      // yballspeed *= -1;
    }else{
    	aicont = false;
    }
    }
    }

  this.move = function(){
      ballx += xballspeed;
      bally += yballspeed;``
      if(ballx <=0 || ballx > 500){
        xballspeed *= -1;

      }
      if(bally <=0 || bally > 500){
        yballspeed *= -1;
      }

  }

  }


function AI(){
  this.show = function(){
    stroke(255);
    line(xAI, yAI, xAI, yAI + 70);
  }


  this.move = function(){
  	var move = true;
    if(xAI <=250){
      move = false;
      xAI = 251;
    }else{
      move = true;
    }
    if(xAI >=500){
      move = false;
      xAI = 492;
    }else{
      move = true;
    }
    if(yAI <= 0 ){
      move = false;
      yAI = 1;
    }else{
      move = true;
    }
    if(yAI + 70 >= 500 ){
      move = false;
      yAI = 429;
    }else{
      move = true;
    }

    if(aicont){
    	// xAI = 490;
    }else{
    	if(move){
    // 	if(ballx > xAI){
    // 		xAI += 3;
    // 	}else{
    // 		xAI -= 3;
    // 	}
    	if(bally > yAI){
    		yAI += 3;
    	}else{
    		yAI -=3;
    	}
    }
    }

  }
}

function Showscore(){
  var s = "AISCORE : "+ aiscore.toString();
  var p = "Player Score : "+ playerscore.toString();
  text(s, 250, 50);
  text(p, 50, 50);
}

