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

module.exports = Graph
