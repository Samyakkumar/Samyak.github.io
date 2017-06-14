function Node(name, neighbours, pos){
  this.name = name;
  this.neighbours = neighbours;
  this.pos = pos
  this.show = function(){
    push()
    fill(255, 255, 255)
    ellipse(this.pos.x, this.pos.y, 10, 10)
    textStyle(BOLD)
    text(this.name, this.pos.x - 15, this.pos.y - 15)
    pop()
  }
}
