var Stack = function () {
  this.top = null
}

Stack.prototype.isEmpty = function () {
  var empty = false
  if (this.top === null) {
    empty = true
    return empty
  }
  return empty
}

Stack.prototype.push = function (node) {
  if (this.isEmpty()) {
    this.top = node
  } else {
    var curr = this.top
    this.top = node
    node.next = curr
  }
  return this
}

Stack.prototype.pop = function () {
  var data
  if (this.isEmpty()) {
    data = null
    return data
  } else {
    var curr = this.top
    this.top = curr.next
    return curr.data
  }
}
module.exports = Stack
