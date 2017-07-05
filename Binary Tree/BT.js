function BT(){
  this.root = null
  this.sorted = []

}

BT.prototype.addNode = function(n){
  var n = new Node(n);
  if(this.root == null){
    this.root = n
  }else{
    this.root.addValue(n)
  }
}

BT.prototype.present = function(){
this.root.visitall()
}

BT.prototype.search = function(val){
  var res = this.root.lookFor(val);
  return res
}
