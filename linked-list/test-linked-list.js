// test-Linked-List.js

var LinkedList = require('./linked-list.js')
var Node = require('./node.js')
var test = require('tape')

test('creating a Node', function (t) {
  var nodeVal = 'Our First Node'
  var node = new Node(nodeVal)
  t.equal(nodeVal, node.data)
  t.equal(null, node.next)
  t.end()
})

test('creating a LinkedList', function (t) {
  var linkedlist = new LinkedList()
  t.equal(linkedlist.head, null)
  t.end()
})

test('pushing to a LinkedList', function (t) {
  var linkedlist = new LinkedList()
  var value = 7

  // Push to an empty list
  linkedlist.push(value)
  t.notEqual(linkedlist.head, null)
  t.equal(linkedlist.head.data, 7)

  linkedlist.push(6)
  t.equal(linkedlist.head.next.data, 6)

  t.end()
})

test('checking the length of a LL', function (t) {
  var linkedlist = new LinkedList()
  var value = 10
  // Populate LL
  for (var i = 0; i < value; i++) {
    linkedlist.push(value)
  }
  t.equal(linkedlist.length(), value)
  t.end()
})

test('removing a node from LL', function (t) {
  var linkedlist = new LinkedList()
  var value = 6
  var output
  output = linkedlist.remove(0)
  // Test for removing from an empty list
  t.equal('You cannot remove items from an empty list', output)

  // Test for removing from a populated list with a valid index
  for (var i = 0; i < value; i++) {
    linkedlist.push(value)
  }
  output = linkedlist.remove(4)
  t.equal('We removed the node of index 4', output)

  // Test for removing from a populated list with an invalid index
  output = linkedlist.remove(10)
  t.equal('The index does not exist in the Linked List', output)
  t.end()
})

test('inserting a node to a LL', function (t) {
  var linkedlist = new LinkedList()
  var value = 2
  var output
  var node = new Node(value)
  // Inserting with a bad index
  output = linkedlist.insert(12, node)
  t.equal('The index does not exist in the Linked List', output)
  // Inserting to an empty list
  output = linkedlist.insert(0, node)
  t.equal('The list is empty use push instead', output)
  // Inserting correctly
  for (var i = 0; i <= value; i++) {
    linkedlist.push(value)
  }
  output = linkedlist.insert(1, node)
  t.equal('Inserted a node at index 1 with value of 2', output)
  t.end()
})
