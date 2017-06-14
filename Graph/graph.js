function Graph(){
  this.nodes = []
  this.vowels = ["a", "e", "i", "o", "u"]
  this.add = function(node){
    this.nodes.push(node)
  }

  this.analyze = function(){
    var arrtocheck = []
    var nodes = this.nodes;

    for(var i = 0; i < nodes.length; i++){
      //print(nodes[i])
      var split = nodes[i].name.split("")
      //print(split[split.length - 1])
      if(split[split.length - 1] == "k"){
        this.drawline(nodes[i].name, nodes[i].nextname)
      }else{
        print("NO")
      }
    }



    // var firstel = nodes.shift()
    // arrtocheck.push(firstel)
    // var count = 0
    // while(count <= this.nodes.length){
    //   print(arrtocheck)
    //   firstel = nodes.shift()
    //   if(arrtocheck[0].name[-1] == "k"){
    //     ind1 = this.getindex(arrtocheck[0].name)
    //     ind2 = this.getindex(arrtocheck[0].nextname)
    //     print("LINE")
    //     this.drawline(ind1, ind2)
    //   }else{
    //     arrtocheck.push(nodes.shift())
    //   }
    //   count+=1;
    }



  this.getindex = function(name){
    for(var j = this.nodes.length - 1; j >=0 ; j--){
      if(this.nodes[j].name == name){
        return j
      }
    }
    return -1
  }
  this.changenodename = function(from, to){
    var ind = this.getindex(from);
    if(ind != -1){

    }
  }
//   this.drawLines = function(){
//     for(var j = 0; j < this.nodes.length ; j++){
//       if(this.nodes[j].nextname){
//         print(this.nodes[j].nextname)
//         var ind = this.getindex(this.nodes[j].nextname)
//         print(ind)
//         if(ind != -1){
//           line(this.nodes[j].pos.x, this.nodes[j].pos.y, this.nodes[ind].pos.x, this.nodes[ind].pos.y)
//         }
//
//     }
//   }
// }

this.drawline = function(from, to){
  indfrom = this.getindex(from);
  indto = this.getindex(to);

  line(this.nodes[indfrom].pos.x, this.nodes[indfrom].pos.y, this.nodes[indto].pos.x,this.nodes[indto].pos.y)
}
  this.show = function(){
    for(var i = this.nodes.length - 1; i >=0 ; i--){
      this.nodes[i].show();
      // line(this.nodes[i].pos.x, this.nodes[i].pos.y, this.nodes[i+1].pos.x, this.nodes[i].pos.y)
    }
    // this.drawLines();
  }


}
