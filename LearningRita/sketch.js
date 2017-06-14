// function setup(){
//   createCanvas(600,600);
//
// }
//
//
// function draw(){
//   background(51);
//
// }

var text, inbox, button, out;

document.addEventListener("DOMContentLoaded", function(){
  inbox = document.getElementById("TextIn");
  button = document.getElementById("Analyze");
  out = document.getElementById("Out");
  button.addEventListener("click", Analyze);


})

function Analyze(){
  getText();
  var rs = new RiString(text);
  var res = rs.analyze();
  console.log(res);

}




function getText(){
  text = inbox.value;
}
