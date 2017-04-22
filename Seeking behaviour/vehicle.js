function Vehicle(){
  this.pos = createVector(random(width), random(height));
  this.r  =10;
  this.health = 1000;
  this.vel = createVector(random(-2, 2), random(-2, 2));
  this.maxspeed = 3;
  this.maxforce = 2;

  this.show = function(){
    push();
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
    pop();
  }

  this.applyforce = function(force){
    this.pos.add(force);
  }

  this.seek = function(other){
    var desired = p5.Vector.sub(other.pos, this.pos);
    desired.setMag(this.maxspeed);
    var steering = p5.Vector.sub(desired, this.vel);
    steering.limit(this.maxforce);
    this.applyforce(steering);
  }

}
