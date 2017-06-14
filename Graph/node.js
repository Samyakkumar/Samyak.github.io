function Node(name, nextname, x, y){
  this.name = name;
  this.nextname = nextname;
  this.radius = 15;
  this.pos  = createVector(x, y)

  this.show = function(){
    ellipse(this.pos.x, this.pos.y, this.radius);
    textSize(14)
    textStyle(BOLD);
    fill(255, 255, 255)
    text(this.name, this.pos.x - this.radius, this.pos.y)
  }

}
