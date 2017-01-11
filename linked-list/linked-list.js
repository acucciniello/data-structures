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
  console.log(this.length())
  if (this.length() < index || index < 0) {
    return 'The index does not exist in the Linked List'
  } else if (this.head === null) {
    return 'You cannot remove items from an empty list'
  } else {
    for (var i = 0; i <= index; i++) {
      previous = current
      current = current.next
    }
    if (current === null) {
      previous.next = null
    } else {
      previous.next = current.next
      current = null
    }
    return 'We removed the node of index ' + index
  }
}

// insert a node to a specific index in list
LinkedList.prototype.insert = function (index, node) {
  var previous = null
  var current = this.head
  if (this.length() < index || index < 0) {
    return 'The index does not exist in the Linked List'
  } else if (this.head === null) {
    return 'The list is empty use push instead'
  } else {
    for (var i = 0; i <= index; i++) {
      previous = current
      current = current.next
    }
    previous.next = node
    node.next = current
    return 'Inserted a node at index ' + index + ' with value of ' + node.data
  }
}

module.exports = LinkedList
