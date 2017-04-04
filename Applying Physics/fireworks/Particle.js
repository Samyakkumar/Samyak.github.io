function Particle(x, y){
	this.position = createVector(x, y);
	this.show = function(){
		for(var i = 0; i < 50; i++){
			ellipse(this.x, this.y, 2, 2);
		}
	}
}