var Queue = require('./../Queue/queue.js')
var QueueNode = require('./../Queue/queue-node.js')

var Graph = function () {
  this.vertices = []
}

Graph.prototype.addVertex = function (vertex) {
  this.vertices.push(vertex)
}

Graph.prototype.DFT = function (vertex, outputSequence) {
  if (vertex.visited === 0) {
    outputSequence.push(vertex.name)
  }
  vertex.visited = 1
  var lengthEL = vertex.edgeList.length()
  var curr = vertex.edgeList.head
  for (var i = 0; i < lengthEL; i++) {
    if (this.vertices[curr.location].visited === 0) {
      this.DFT(this.vertices[curr.location], outputSequence)
    }
    curr = curr.next
  }
  vertex.visited = 2
  return
}

Graph.prototype.BFT = function (vertexLocation, outputSequence) {
  var q = new Queue()
  this.clearVisited()
  this.vertices[vertexLocation].visited = 1
  this.vertices[vertexLocation].parent = 0
  var qNode = new QueueNode(vertexLocation)
  q.enqueue(qNode)
  outputSequence.push(this.vertices[vertexLocation].name)
  while (!q.isEmpty()) {
    var parentLocation = q.dequeue()
    // need to loop through all the of the unvisited nodes of this parent
    var lengthEL = this.vertices[parentLocation].edgeList.length()
    var curr = this.vertices[parentLocation].edgeList.head
    for (var i = 0; i < lengthEL; i++) {
      // console.log('We are at node ' this.vertices[curr.location])
      if (this.vertices[curr.location].visited === 0) {
        this.vertices[curr.location].visited = 1
        this.vertices[curr.location].parent = parentLocation
        qNode = new QueueNode(curr.location)
        q.enqueue(qNode)
        outputSequence.push(this.vertices[curr.location].name)
      }
      curr = curr.next
    }
    this.vertices[parentLocation].visited = 2
  }
  return
}

Graph.prototype.clearVisited = function () {
  var length = this.vertices.length
  for (var i = 0; i < length; i++) {
    this.vertices[i].visited = 0
    console.log(this.vertices[i].name + ' is cleared')
  }
  return
}

module.exports = Graph
