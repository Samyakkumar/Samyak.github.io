var canvas, capture;
var constraints = {
  video : {
    mandatory : {
      maxWidth : 300,
      maxHeight : 300
    }
  },
  audio : false
};

function setup(){
  canvas = createCanvas(300, 300);
  canvas.parent("#canvas");
  capture = createCapture(constraints,
    function showfeed(capture){
      var img = image(capture,0, 0, 300, 300);
      img.parent("#videofeed")
    }
  );

}

function draw(){
  background(51);

}
