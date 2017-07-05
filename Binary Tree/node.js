function Node(name) {
  this.value = name;
  this.left = null;
  this.right = null;
}

Node.prototype.addValue = function(n) {
    if (n.value < this.value) {
      if (this.left == null) {
        this.left = n;
      } else {
        this.left.addValue(n);
      }
    } else {
        if (this.right == null) {
          this.right = n;
        } else {
          this.right.addValue(n);
        }
    }
  }
//DOUBT!! WHY CONSOLE LOG IN BETWEEN?!!
Node.prototype.visitall = function(){
  if(this.left != null){
    this.left.visitall()
  }
  document.getElementById("ans").innerHTML += "<h2>" + (this.value).toString() + "</h2>"
  if(this.right != null){
    this.right.visitall()
  }


}

Node.prototype.lookFor = function(val){
  if(this.left){
      this.left.lookFor(val);
    }
  if(this.value == val){
    return this
  }
  if(this.right){
      this.right.lookFor(val);
    }

}
