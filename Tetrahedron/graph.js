function Graph(nodes){
  this.nodes = nodes;
  this.show = function(){
    for(var i = 0; i < this.nodes.length; i++){
      this.nodes[i].show()
    }
  }
  this.connect = function(where, to){
    index1 = this.getIndex(where)
    index2 = this.getIndex(to)
    line(this.nodes[index1].pos.x, this.nodes[index1].pos.y, this.nodes[index2].pos.x, this.nodes[index2].pos.y)
  }

  this.getIndex = function(name){
    for(var i = 0; i < this.nodes.length; i++){
      if(this.nodes[i].name == name){
        return i
      }
    }
    return -1
  }

    this.searchPath = function(where, to){
      search_queue = []
      search_queue.push(this.nodes[0])
      var steps = 0
      firstel = [search_queue[0], ]
      while(search_queue){
        firstel = [search_queue.shift(), ]
        print("FEL ", firstel)
        for(var i = 0; i < firstel.length; i++){
          steps += 1;
          print("IT no. " ,steps)
          print( "CHECK ", this.check(firstel[i], to))
          if(this.check(firstel[i], to)){
            print("STEPS : ", steps)
            steps = 0
          }else{
            print("ADDED")
            print(firstel[i].neighbours)
            search_queue.push(firstel[i].neighbours)
          }
        }
      }
    }

    this.check = function(node, to){
      if(node.constructor == Array){
        for(var i = 0; i < node.length; i++){
          for(var j = 0; j < node[i].lengthl; j++){
            if(node[j].neighbours[i] == to){
              return true
            }
          }
        }
      }else{
        for(var i = 0; i < node.neighbours.length; i++){
          if(node.neighbours[i] == to){
            return true
          }
        }
      }
      return false
    }
}
