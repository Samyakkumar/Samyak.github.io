var player;
var food;
function setup() {
  createCanvas(400,400);
  player = new Player();
  food = new Food();
}

function draw() {
  background(51);
  player.show();
  player.move();
  food.show();

  if(Math.abs(dist(player.pos.x, player.pos.y, food.pos.x, food.pos.y) <= player.side)){
    food.setEaten(true);
    player.inclength();
  }
  player.addtail();

  player.tail();
  player.edges();

}
