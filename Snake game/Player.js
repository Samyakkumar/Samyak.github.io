function Player(){
  this.side = 15;
  this.pos = createVector(random(width-this.side), random(height-this.side));
  this.speed = 1.5;
  this.path = [];
  this.traillength = 0;
  this.show = function(){

    push();
    noStroke();
    fill(255);
    rect(this.pos.x, this.pos.y, this.side, this.side);
    pop();

  }

  this.move = function(){

    if(keyIsDown(UP_ARROW)){
      this.pos.y -= this.speed;
    }else if(keyIsDown(RIGHT_ARROW)){
      this.pos.x += this.speed;
    }else if(keyIsDown(DOWN_ARROW)){
      this.pos.y += this.speed;
    }else if(keyIsDown(LEFT_ARROW)){
      this.pos.x -= this.speed;
    }
  }
  this.edges = function(){
    if(this.pos.x > width){
      this.pos.x = 0;
    }else if(this.pos.x < 0){
      this.pos.x = width;
    }
    if(this.pos.y > height){
      this.pos.y = 0;
    }else if(this.pos.y < 0){
      this.pos.y = height;
    }
  }
  
  this.inclength = function(){
    this.traillength += 1;
  }

  this.addtail = function(){
    var np = createVector(this.pos.x, this.pos.y)

    this.path.push(np);
    if(this.path.length > this.traillength){
      this.path.splice(0, 1);
    }


  }
  this.tail = function(){
    if(this.path.length > 0){
          for(var i = this.path.length-1; i >= 0; i--){
        push();
        noStroke();
        fill(255);
        var d = this.path[i];
        // if(keyIsDown(UP_ARROW)){
        //   d.y += i;
        // }else if(keyIsDown(RIGHT_ARROW)){
        //   d.x -= i;
        // }else if(keyIsDown(DOWN_ARROW)){
        //   d.y -= i;
        // }else if(keyIsDown(LEFT_ARROW)){
        // d.x += i;
        // }
        rect(d.x, d.y, this.side, this.side);
        pop();
      }
    }
  }

}
