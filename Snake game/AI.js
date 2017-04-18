function AI(){
  this.side = 15;
  this.pos = createVector(random(width - this.side), random(height - this.side));
  this.speed = 1;

  this.show = function(){

    push();
    noStroke();
    fill(0, 0, 255);
    rect(this.pos.x, this.pos.y, this.side, this.side);
    pop();

  }

  this.move = function(dir){

    if(dir == 0){
      this.pos.y -= this.speed;
    }else if(dir == 1){
      this.pos.x += this.speed;
    }else if(dir == 2){
      this.pos.y += this.speed;
    }else if(dir == 3){
      this.pos.x -= this.speed;
    }
  }


}
