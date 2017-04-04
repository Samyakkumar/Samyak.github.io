var x, y, radius, start, stop, angle, rate;
var ellipses = [] 
var firstx;
var score;
var direction;
var k;
var playerspeed;
var timer;
var count;
var numballs;
function setup() {
  createCanvas(600, 600);
  stroke(0, 0, 0);
  fill(0, 0, 255);
  x = 1;
  y = 300;
  radius = 50;
  start = PI/4;
  stop = -PI/4;
  rate = 0.05;
  k = 0;
  score = 0;
  numballs = 140;
  for(var i = 0; i < numballs; i++){
    ellipses.push(createVector(random(0, width), random(0, height)));
  }
  playerspeed = 1.5;
  timer = Math.floor(numballs/3);
  count = 0;
}

function draw() {
  background(255);
  showscore(score);
  for(var i = ellipses.length-1; i >= 0 ; i--){
    if(checkcontact(x, y, ellipses[i].x, ellipses[i].y)){
      ellipses.splice(i, 1);
      k+= 1;
      score = k;
      showscore(score);
      console.log(k)
    }
    if(ellipses[i]){
      ellipse(ellipses[i].x, ellipses[i].y, 20, 20);
    }
    
  }
  
  arc(x, y, radius, radius, PI/2 * direction + start, PI/2 * direction + stop, PIE);
    stop += rate;
  start -= rate;
  if(stop >= 0){
    stop =  -PI/4;
    rate *= -1;
  }
  if(start <= 0){
    start = PI/4;
    rate *= -1;
  }
  
  if(x > width){
    x = 0;
  }else if(x < 0){
    x = width;
  }
  if(y > height){
    y = 0;
  }else if(y < 0){
    y = height;
  }
  
  if(keyIsDown(LEFT_ARROW)){
    direction = 2;
    movepac();
  }
  if(keyIsDown(UP_ARROW)){
    direction = 3;
    movepac();
  }
  if(keyIsDown(RIGHT_ARROW)){
    direction = 0;
    movepac();
  }
  if(keyIsDown(DOWN_ARROW)){
    direction = 1;
    movepac();
  }
  if(score == numballs && timer > 0){
    alert("YOU WON!!");
    noLoop();
  }
  if(count >= timer * 60){
    alert("GAME OVER!");
    noLoop();
  }
  
  count += 1;
  showTimer();
}


function checkcontact(a, b, c, d){
  if(dist(a, b, c, d) < radius -30){
    return true;
  }else{
    return false;
  }
}

function movepac(){
  if(direction == 0){ //move right
    x+= playerspeed
  }else if(direction == 2){ //move left
    x-= playerspeed
    
  
  }else if(direction == 1){ //move down
    y+= playerspeed
  }else if(direction == 3){ //move up
    y -= playerspeed
  }
}

function showscore(score){
  push();
      textSize(20);
      text("Score : "+ score.toString(), 100, 100);
      pop();
}
function showTimer(){
push();
      textSize(20);
      text("Time left : "+ Math.ceil(((((timer * 60) - count))/60)).toString(), 50, 50);
      pop();
}