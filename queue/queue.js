var Queue = function () {
  this.head = null
  this.tail = null
}

Queue.prototype.isEmpty = function () {
  if (this.head === null && this.tail === null) {
    return true
  }
  return false
}

Queue.prototype.enqueue = function (node) {
  if (this.isEmpty()) {
    this.head = node
    this.tail = node
  } else {
    var curr = this.head
    this.head = node
    node.next = curr
  }
  return this
}

Queue.prototype.checkHead = function () {
  return this.head
}

Queue.prototype.dequeue = function () {
  if (this.isEmpty()) {
    return null
  } else {
    var temp = this.tail
    var curr = this.head
    console.log(curr)
    while (temp !== curr.next) {
      curr = curr.next
    }
    this.tail = curr
    this.tail.next = null
    return temp.data
  }
}

module.exports = Queue
