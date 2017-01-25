var EdgeNode = require('./edge-node.js')
var EdgeList = require('./edge-list.js')

var Vertex = function (name, edgeList) {
  this.name = name
  this.edgeList = edgeList
}

Vertex.prototype.addEdge = function (location, weight) {
  var node = new EdgeNode(location, weight)
  var list
  list = this.edgeList.locationInsert(node)
  return list
}

module.exports = Vertex
