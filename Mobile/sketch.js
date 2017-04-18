// var snd;
// function preload(){
//   snd = loadSound('/../Applying\ Physics/rain/rain-03.mp3');
// }

function setup(){
// snd.setVolume(0.5);
setShakeThreshold(4);
createCanvas(600, 600);

}

function draw(){
background(51);
}


function deviceShaken(){
  fill(100);
  rect(0, 0, 100, 100);
}
