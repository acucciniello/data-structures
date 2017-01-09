// linked-list.js

var Node = require('./node.js')

// Constructor for Simple Linked List has a property to the head of the List
var LinkedList = function () {
  this.head = null
}

// Add a node to the end of a linked list
LinkedList.prototype.push = function (value) {
  var addNode = new Node(value)
  if (this.head === null) {
    this.head = addNode
  } else {
    var current = this.head
    while (current.next !== null) {
      current = current.next
    }
    current.next = addNode
  }
  return
}

// find the number of nodes in a Linked List
// returns the length of the list
LinkedList.prototype.length = function () {
  var length = 0
  var current = this.head
  if (current === null) {
    return length
  } else {
    length = 1
    while (current.next !== null) {
      current = current.next
      length++
    }
    return length
  }
}

// Remove a node from the list
LinkedList.prototype.remove = function (index) {
  var previous = null
  var current = this.head
  for (var i = 0; i <= index; i++) {
  	previous = current
  	current = current.next
  }
  previous.next = current.next
  current = null
}

// insert a node to a specific index in list
LinkedList.prototype.insert = function (index, node) {
  var previous = null
  var current = this.head
  for (var i = 0; i <= index; i++) {
    previous = current
    current = current.next
  }
  previous.next = node
  node.next = current
  return
}

module.exports = LinkedList
