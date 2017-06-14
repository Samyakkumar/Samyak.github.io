function Food(){
  this.eaten = false;
  this.side = 15;
  this.pos = createVector(random(width- this.side) , random(height- this.side) );

  this.show = function(){
    if(!this.eaten){
      push();
      noStroke();
      fill(255, 0, 0, 15);
      rect(this.pos.x, this.pos.y, this.side, this.side);
      pop();
    }else{
      this.pos = createVector(random(width- this.side) , random(height- this.side) );
      this.eaten = false;
    }
  }

  this.setEaten = function(val){
    this.eaten = val;
  }


}
