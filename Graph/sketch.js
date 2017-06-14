var mygraph;

function setup() {
  createCanvas(600, 600)
  mygraph = new Graph();

  mygraph.add(new Node("Samyak", "Syamantak", random(10, width), random(10, height)))
  mygraph.add(new Node("Syamantak", "Tanmay", random(10, width), random(10, height)))
  mygraph.add(new Node("Tanmay", "Nidhi", random(10, width), random(10, height)))
  mygraph.add(new Node("Nidhi", "Rishi", random(10, width), random(10, height)))
  // mygraph.add(new Node("e", "f", random(10, width), random(10, height)))
  // mygraph.add(new Node("f", "g", random(10, width), random(10, height)))
  // mygraph.add(new Node("g", "h", random(10, width), random(10, height)))
  // mygraph.add(new Node("h", "i", random(10, width), random(10, height)))

  background(51);
  mygraph.show();
}

function draw() {

}
