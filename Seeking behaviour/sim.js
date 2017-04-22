function Sim(){
  this.foods =[]; //Arrays stores all food objects
  this.poisons = [] // Stores all the poisons
  this.vehicles = [];
  this.makefood = function(amt){
    for(var i = 0; i < amt; i++){
      var x = random(width);
      var y = random(height);
      this.foods.push(new Food(x, y));
    }
  }

  this.update = function(){
    for(var i = 0; i < this.foods.length; i++){
      for(var j = 0; j < this.vehicles.length; j++){
        this.vehicles[j].seek(this.foods[i]);
      }
    }
    // var mouse = {
    //   pos : createVector(mouseX, mouseY)
    // }
    // vehicle.seek(mouse);
  }


  this.eat = function(){
    for(var i = this.foods.length - 1; i >= 0 ; i--){
      for(var j = 0; j < this.vehicles.length; j++){
        if(dist(this.vehicles[j].pos.x, this.vehicles[j].pos.y, this.foods[i].pos.x, this.foods[i].pos.y) <= this.vehicles[j].r + this.foods[i].size){
          this.foods.splice(i, 1);
          this.makefood(1);
        }
      }
    }
  }


  this.makevehicles = function(amt){
    for(var i = 0; i < amt; i++){
      this.vehicles.push(new Vehicle());
    }
  }
  this.makepoison = function(amt){
    for(var i = 0; i < amt; i++){
      var x = random(width);
      var y = random(height);
      this.poisons.push(new Food(x, y, true));
    }
  }
  this.showall = function(){
    for(var i = 0; i < this.foods.length; i++){
      this.foods[i].show();
    }
    for(var i = 0; i < this.poisons.length; i++){
      this.poisons[i].show();
    }
    for(var i = 0; i < this.vehicles.length; i++){
      this.vehicles[i].show();
    }
  }

  this.start = function(){
    this.showall();
    this.update();
    this.eat();
  }

}
