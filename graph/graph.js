var Graph = function () {
  this.vertices = []
}

Graph.prototype.addVertex = function (vertex) {
  this.vertices.push(vertex)
}

module.exports = Graph
