var firework = [];
var explosions = [];
var numbodies = 6;
function setup(){
	createCanvas(600, 600, P2D);
	strokeWeight(2);
	for(var i = 0; i < numbodies; i++){
		var col = color(Math.floor(random(0, 220)), random(0, 255), 100);
		firework.push(new Firework(col, false));
	}
}

function draw(){
	background(51);
	for(var i = 0; i < numbodies; i++){
			firework[i].show();
			firework[i].update();
		firework[i].trail();
		firework[i].repeat();
		// firework[i].showexplosion();
		// firework[i].applyforce();
	if(firework[i].exploded){
		var colo = firework[i].col;
		explosions.push(new Firework(colo, true, firework[i].pos));
	}
	}
	// if(mouseIsPressed){
	// 	noLoop();
	// }
}