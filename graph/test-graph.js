var test = require('tape')
// var Graph = require('./graph.js')
var EdgeNode = require('./edge-node.js')
var EdgeList = require('./edge-list.js')
var Vertex = require('./vertex.js')
var Graph = require('./graph.js')

test('Creating an Edge Node', function (t) {
  var location = 0
  var weight = 45
  var edgeNode = new EdgeNode(location, weight)
  t.equal(location, edgeNode.location)
  t.equal(weight, edgeNode.weight)
  t.equal(null, edgeNode.next)
  t.end()
})

test('creating a EdgeList', function (t) {
  var edgeList = new EdgeList()
  t.equal(edgeList.head, null)
  t.end()
})

test('pushing to a EdgeList', function (t) {
  var edgeList = new EdgeList()
  var location = 7
  var weight = 85

  // Push to an empty list
  edgeList.push(location, weight)
  t.notEqual(edgeList.head, null)
  t.equal(edgeList.head.location, 7)
  t.equal(edgeList.head.weight, 85)

  edgeList.push(8, 105)
  t.equal(edgeList.head.next.location, 8)

  t.end()
})

test('checking the length of a EdgeList', function (t) {
  var edgeList = new EdgeList()
  var location = 0
  var weight = 10
  // Populate LL
  for (var i = 0; i < weight; i++) {
    edgeList.push(location, weight)
    location++
  }
  t.equal(edgeList.length(), weight)
  t.end()
})

test('removing a node from EdgeList', function (t) {
  var edgeList = new EdgeList()
  var weight = 6
  var location = 1
  var output
  output = edgeList.remove(0)
  // Test for removing from an empty list
  t.equal('You cannot remove items from an empty list', output)

  // Test for removing from a populated list with a valid index
  for (var i = 0; i < weight; i++) {
    edgeList.push(location, weight)
    location++
  }
  output = edgeList.remove(4)
  t.equal('We removed the node of index 4', output)

  // Test for removing from a populated list with an invalid index
  output = edgeList.remove(10)
  t.equal('The index does not exist in the EdgeList', output)
  t.end()
})

test('inserting a node to a EdgeList', function (t) {
  var edgeList = new EdgeList()
  var location = 1
  var value = 2
  var output
  var node = new EdgeNode(location, value)
  // Inserting with a bad index
  output = edgeList.insert(12, node)
  t.equal('The index does not exist in the EdgeList', output)
  // Inserting to an empty list
  output = edgeList.insert(0, node)
  t.equal('The list is empty use push instead', output)
  // Inserting correctly
  for (var i = 0; i <= value; i++) {
    edgeList.push(value)
  }
  output = edgeList.insert(1, node)
  t.equal('Inserted a node at index 1 with a weight of 2', output)
  t.end()
})

test('LocationInsert in EdgeList', function (t) {
  var edgeList = new EdgeList()
  var location = 0
  var weight = 5
  var node = new EdgeNode(location, weight)
  var list
  list = edgeList.locationInsert(node)
  t.deepEqual(list, edgeList)
  location = 7
  weight = 10
  node = new EdgeNode(location, weight)
  list = edgeList.locationInsert(node)
  t.deepEqual(list, edgeList)
  location = 3
  weight = 100
  node = new EdgeNode(location, weight)
  list = edgeList.locationInsert(node)
  t.deepEqual(list, edgeList)
  t.end()
})

test('Create a Vertex from a EdgeList ', function (t) {
  var name = 'A'
  var edgeList = new EdgeList()
  var location = 1
  var weight = 5
  var loopCount = 5
  for (var i = 0; i < loopCount; i++) {
    edgeList.push(location, weight)
    location++
    weight = weight + 5
  }
  var vertex = new Vertex(name, edgeList)
  t.equal(vertex.name, name)
  t.deepEqual(vertex.edgeList, edgeList)

  location = 0
  weight = 4
  var list = vertex.addEdge(location, weight)
  t.deepEqual(list, vertex.edgeList)
  t.end()
})

test('Making a Graph', function (t) {
  var graph = new Graph()
  t.equal(graph.vertices.length, 0)

  // Set up AList
  var AList = new EdgeList()
  // Add B 25
  var location = 1
  var weight = 25
  var node = new EdgeNode(location, weight)
  AList.locationInsert(node)
   // Add C 45
  location = 2
  weight = 45
  node = new EdgeNode(location, weight)
  AList.locationInsert(node)

  var BList = new EdgeList()
  // Add D 50
  location = 50
  weight =
  node = new EdgeNode(location, weight)
  BList.locationInsert(node)
   // Add E 60
  location = 4
  weight = 60
  node = new EdgeNode(location, weight)
  BList.locationInsert(node)
  // Add F 55
  location = 5
  weight = 55
  node = new EdgeNode(location, weight)
  BList.locationInsert(node)

  var CList = new EdgeList()
  // Add B 10
  location = 1
  weight = 10
  node = new EdgeNode(location, weight)
  CList.locationInsert(node)
   // Add G 70
  location = 6
  weight = 70
  node = new EdgeNode(location, weight)
  CList.locationInsert(node)

  var DList = new EdgeList()

  var EList = new EdgeList()
   // Add C 65
  location = 2
  weight = 65
  node = new EdgeNode(location, weight)
  EList.locationInsert(node)
   // Add D 20
  location = 3
  weight = 20
  node = new EdgeNode(location, weight)
  EList.locationInsert(node)
  // Add F 55
  location = 5
  weight = 30
  node = new EdgeNode(location, weight)
  EList.locationInsert(node)

  var FList = new EdgeList()
  // Add D 15
  location = 3
  weight = 15
  node = new EdgeNode(location, weight)
  FList.locationInsert(node)

  var GList = new EdgeList()
  // Add E 40
  location = 4
  weight = 40
  node = new EdgeNode(location, weight)
  GList.locationInsert(node)
  // Add F 35
  location = 5
  weight = 35
  node = new EdgeNode(location, weight)
  FList.locationInsert(node)

  var vertexA = new Vertex('A', AList)
  var vertexB = new Vertex('B', BList)
  var vertexC = new Vertex('C', CList)
  var vertexD = new Vertex('D', DList)
  var vertexE = new Vertex('E', EList)
  var vertexF = new Vertex('F', FList)
  var vertexG = new Vertex('G', GList)

  graph.addVertex(vertexA)
  t.deepEqual(vertexA, graph.vertices[0])
  graph.addVertex(vertexB)
  t.deepEqual(vertexB, graph.vertices[1])
  graph.addVertex(vertexC)
  t.deepEqual(vertexC, graph.vertices[2])
  graph.addVertex(vertexD)
  t.deepEqual(vertexD, graph.vertices[3])
  graph.addVertex(vertexE)
  t.deepEqual(vertexE, graph.vertices[4])
  graph.addVertex(vertexF)
  t.deepEqual(vertexF, graph.vertices[5])
  graph.addVertex(vertexG)
  t.deepEqual(vertexG, graph.vertices[6])
  t.end()
})
