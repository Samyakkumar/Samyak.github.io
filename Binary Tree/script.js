var mytree;
var data;
var initButton;
var searchButton;
var searchdata;
function setup(){
  noCanvas()
  initButton = document.getElementById("init");
  searchButton = document.getElementById("search")
  data;
  initButton.addEventListener("click", function(){
   data = document.getElementById("arr").value
    data = data.split(",")
    for(var i = 0; i < data.length; i++){
      data[i] = parseInt(data[i])
    }
     console.log(data)
     initTree()
     document.querySelector("#ans").innerHTML += (mytree.present())
  })

  searchButton.addEventListener("click", function(){
    var element = document.getElementById("searchbox").value
    console.log(mytree.search(element))
  })

}

function draw(){
  background(51);
}

function initTree(){
  mytree = new BT()
  numbers = []
  for(var i=0; i < data.length; i++){
    var num = data[i]
    numbers.push(num)
    mytree.addNode(num)
  }
}
