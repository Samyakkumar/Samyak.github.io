var w = 50;
var cells = []
function setup() {
  cl = color(51, 51, 51)
  createCanvas(501, 501)
  for(var i = 0; i < width; i+= w){
    for(var j = 0; j < width; j+= w){
      cells.push(new Cell(j, i, w, cl))
    }
  }
  for(var i = 0; i < cells.length; i+= 1){
    cells[i].getneighbours()

  }
}

function draw() {
  background(255)
  for(var i = 0; i < cells.length; i+= 1){
    cells[i].show()

  }
}
function mouseClicked(){
  for(var i = 0; i < cells.length; i+= 1){
    cells[i].checkclick()

  }
}
function Cell(x, y, w, c, mine){
  if(mine){
    this.mine = mine;
  }else{
    this.mine = false;
  }
  this.x = x;
  this.y = y;
  this.width = w;
  this.c = c;
  this.center = createVector(this.x + width/2, this.y + width/2)
  this.neighbours = []
  this.show = function(){
    // line(0, this.start, width, this.start)
    // line(this.start, 0, this.start, height)
    fill(this.c)
    rect(this.x,this.y,this.x + this.width, this.y + this.width)
  }
  this.checkclick = function(){
    if(mouseX > this.x && mouseX < this.x + this.width && mouseY < this.y + this.width && mouseY > this.y){
      this.c = color(255)
      console.log(this.neighbours)
      console.log(this.x, this.y)
    }
  }
  this.getneighbours = function(){

    this.neighbours.push([this.x + this.width, this.y])
    this.neighbours.push([this.x - this.width, this.y])
    this.neighbours.push([this.x, this.y + this.width])
    this.neighbours.push([this.x, this.y - this.width])
    this.neighbours.push([this.x + this.width, this.y + this.width])
    this.neighbours.push([this.x - this.width, this.y + this.width])
    this.neighbours.push([this.x + this.width, this.y - this.width])
    this.neighbours.push([this.x + this.width, this.y - this.width])
    var i = this.neighbours.length - 1
    while(i >= 0){
      var xs = this.neighbours[i][0]
      var ys = this.neighbours[i][1]
      if( xs > width || xs < 0 || ys > height || ys < 0){
        this.neighbours.splice(i, 1)
      }
      i-= 1
    }
  }

}
