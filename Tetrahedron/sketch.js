var mygraph;
var nodes = [];
function setup() {
  createCanvas(600, 600)
  nodes.push(new Node("a", ["b", "e", "c"], createVector(200, 200)))
  nodes.push(new Node("b", ["a", "e"], createVector(200, 300)))
  nodes.push(new Node("c", ["a", "e"], createVector(450, 250)))
  nodes.push(new Node("d", ["e"], createVector(450, 400)))
  nodes.push(new Node("e", ["a", "b", "c", "d"], createVector(350, 300)))
  mygraph = new Graph(nodes);
}

function draw() {
  background(51);
  mygraph.show()
  mygraph.connect("a", "b")
  mygraph.connect("a", "e")
  mygraph.connect("a", "c")
  mygraph.connect("e", "d")
  mygraph.connect("e", "c")
  mygraph.connect("e", "b")
}
