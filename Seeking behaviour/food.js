function Food(x, y, isPoison){
  this.size = 4; //The radius of each food or poison particle
  this.pos = createVector(x, y); // The position of each food particle
  if(isPoison){ //Check to see if the food particle is poison or not
    this.poison = isPoison;
    this.nutrition = -1;
  }else{
    this.poison = false;
    this.nutrition = 1;
  }

  this.show = function(){
    if(this.poison){
      push();
      fill(255, 0 , 0);
      noStroke();
      ellipse(this.pos.x, this.pos.y, this.size, this.size);
      pop();
    }else{
      push();
      fill(0, 255 , 0);
      noStroke();
      ellipse(this.pos.x, this.pos.y, this.size, this.size);
      pop();
    }
  }

}
