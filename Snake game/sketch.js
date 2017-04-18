var player;
var food;
var ai;
function setup() {
  createCanvas(400,400);
  player = new Player();
  food = new Food();
  ai = new AI();
}

function draw() {
  background(51);
  player.show();
  player.move();
  food.show();
  ai.show();

  if(Math.abs(dist(player.pos.x, player.pos.y, food.pos.x, food.pos.y) <= player.side)){
    food.setEaten(true);
    player.inclength();
  }
  player.addtail();

  player.tail();
  player.edges();

  if(player.pos.y > ai.pos.y){
    ai.move(2);
  }else if(player.pos.y < ai.pos.y){
    ai.move(0);
  }
  if(player.pos.x > ai.pos.x){
    ai.move(1);
  }else if(player.pos.y > ai.pos.y){
    ai.move(3);
  }

}
