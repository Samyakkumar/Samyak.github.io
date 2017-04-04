var board; // Store the board object
var carol; // Store the Carol object
var carolpositions = []; // Store carol's previous positions
var flowers = []; // Store various flower objects.
var count;
function setup() {
  createCanvas(660, 660);
  stroke(255, 0, 0);
  strokeWeight(2);
  board = new Board(); // Initialize the board
  carol = new Carol(); // Initialize carol
  count = 0;
  for(var i = 0; i < 1500; i++){
    flowers.push(new Flower()); // make an array of Flowers
  }
}

function draw() {
  background(0);
  board.show();
  carol.show();
  carol.move();
  carolpositions.push(carol.pos);
   console.log(carolpositions[0])
   for(var i = count/60 ; i < carolpositions.length; i++){
     if(count % 60 == 0){
       flowers[i].drop(carolpositions[i].pos);
     }
   }
  count += 1;
}

// The board object
function Board(){
  
  this.show = function(){
    for(var i = 0; i < width; i++){
    if(i%60 == 0){
      line(i, 0, i, height);
      line(0, i, width, i);
    }
  }
  }
}
// End of board object

// The Carol object
function Carol(){
  this.rightallowed = true;
  this.leftallowed = false;

  this.pos = createVector(30, 30); // Starting position of Carol

  this.show = function(){ // Display Carol
    push();
    fill(255,224,189);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 15, 15);
    pop();
  }

  this.flowerpresent = function(flowerpos){ // Check if flower is present (Does not work properly. NEED TO FIX!!)
    if(dist(this.pos.x, this.pos.y, flowerpos.x, flowerpos.y) < 30){
      return true;
    }else{
      return false;
    }
  }
  this.move = function(){ // Move Carol (NOT COMPLETE)
    if(dist(this.pos.x, this.pos.y, width, 30) <= 30){
      this.rightallowed = false;
      this.leftallowed = true;
    }
    if(dist(this.pos.x, this.pos.y, 0, 30) <= 30){
      this.leftallowed = false;
      this.rightallowed = true;
    }
    if(this.rightallowed){
      
      this.pos.add(10, 0);
    }
    if(this.leftallowed){
      this.pos.add(-10, 0)
    }
  }
}
// End of Carol object

// The flower object
function Flower(){
  this.picked = false;
  this.drop = function(location){
    if(!this.picked){
      push();
    fill(255,105,180);
    noStroke();
    // if(location){
      console.log("DROPPED")
      ellipse(location.x, location.y, 10, 10);
    // }
    pop();
    }
  }
  this.pick = function(){ // Find a way to remove the object from the array.
    
  }
}
// End of flower object

// Drop bleeper
function Bleeper(){
  this.show = function(loc){
    push();
    fill(255,0,0);
    noStroke();
    ellipse(loc.x, loc.y, 10, 10);
    pop();
  }
}
