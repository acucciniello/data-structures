var EdgeNode = require('./edge-node.js')

var EdgeList = function () {
  this.head = null
}
// Add a node to the end of a linked list
EdgeList.prototype.push = function (location, weight) {
  var addNode = new EdgeNode(location, weight)
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
EdgeList.prototype.length = function () {
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
EdgeList.prototype.remove = function (index) {
  var previous = null
  var current = this.head
  console.log(this.length())
  if (this.length() < index || index < 0) {
    return 'The index does not exist in the EdgeList'
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
EdgeList.prototype.insert = function (index, node) {
  var previous = null
  var current = this.head
  if (this.length() < index || index < 0) {
    return 'The index does not exist in the EdgeList'
  } else if (this.head === null) {
    return 'The list is empty use push instead'
  } else {
    for (var i = 0; i <= index; i++) {
      previous = current
      current = current.next
    }
    previous.next = node
    node.next = current
    return 'Inserted a node at index ' + index + ' with a weight of ' + node.weight
  }
}

EdgeList.prototype.locationInsert = function (node) {
  var previous = null
  var current = this.head
  var placed = false
  if (this.head === null) {
    this.head = node
  } else {
    while (placed === false) {
      if (current === null) {
        previous.next = node
        node.next = current
        placed = true
      } else if (node.location > current.location) {
        previous = current
        current = current.next
      } else {
        if (previous === null) {
          previous = node
          node.next = current
          placed = true
        } else {
          previous.next = node
          node.next = current
          placed = true
        }
      }
    }
  }
  return this
}

module.exports = EdgeList
