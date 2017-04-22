var sim;
var foodamt;
var poisonamt;
var vehiclesamt;
function setup(){
  createCanvas(600, 600);
  sim = new Sim();
  foodamt = 10;
  poisonamt = 3;
  vehiclesamt = 3;
  sim.makepoison(poisonamt);
  sim.makefood(foodamt);
  sim.makevehicles(vehiclesamt);
}

function draw(){
  background(51);
  sim.start();

}
