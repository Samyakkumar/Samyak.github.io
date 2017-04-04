function Firework(col, explosive, position){
	this.explosive = explosive;
	var gravity = createVector(0, 1);
	if(!this.explosive){
		this.pos = createVector(random(width), random(400, 600));
		this.velocity = createVector(0, random(0, -22));
		this.acc = createVector(0, 0.5);
		this.radius = 10;
	}else{
		this.position = position;
		this.explosiveradius = this.radius/4 ;
	}
	this.pathfollowed = [];
	
	this.temp = 0; 
	this.col = col;
	this.exploded = false;
	console.log(col);
	this.show = function(){
		if(!this.exploded){
			stroke(this.col);
			ellipse(this.pos.x, this.pos.y, this.radius-8, this.radius+8);

		}else{
			stroke(51);
			ellipse(this.pos.x, this.pos.y, this.radius-8, this.radius+8);

		}
	}
	this.applyforce = function(){
		// this.acc.div(gravity);
	}
	// this.showexplosion = function(){
	// 	for(var i = 0; i < 10; i++){
	// 		ellipse(this.position.x + random(-5, 5), this.position.y + random(-5, 5), this.explosiveradius, this.explosiveradius)
	// 	}
	// }
	this.update = function(){
		if(this.velocity.y >= 0){
			this.exploded = true;
			this.temp = createVector(this.pos.x, this.pos.y)
		}else{
			this.exploded = false;
		}
		this.pos.add(this.velocity);
		this.velocity.add(this.acc);
		this.pathfollowed.push(createVector(this.pos.x, this.pos.y));
		if(this.pathfollowed.length > 6){
			this.pathfollowed.splice(0, 1);
		
			}

	}
	this.trail = function(){
		// setTimeout(function(){
		// 	noLoop();
		// }, 1000);
		if(!this.exploded){
			push();
		for(var i = 0; i < this.pathfollowed.length; i++){
			// console.log(this.pathfollowed[i]);
			fill(col);
			var p = this.pathfollowed[i];
			ellipse(p.x, p.y, 4, 4);
		}
		pop();
	}else{
		fill(51);
	}
	}
	this.repeat = function(){
		if(this.pos.y > height){
			fill(this.col);
			this.pos = this.pos = createVector(random(width), random(400, 600));
			this.velocity = createVector(0, random(0, -22));
			this.acc = createVector(0, 0.5);
		}
	}
}