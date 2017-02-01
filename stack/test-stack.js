var test = require('tape')
var StackNode = require('./stack-node.js')
var Stack = require('./stack.js')

test('Creating a StackNode', function (t) {
  var stackNode = new StackNode(7)
  t.equal(stackNode.data, 7)
  t.equal(stackNode.next, null)
  t.end()
})

test('Creating a Stack', function (t) {
  var stack = new Stack()
  t.equal(stack.top, null)
  t.end()
})

test('Check is stack is empty', function (t) {
  var stack = new Stack()
  var empty = stack.isEmpty()
  t.equal(empty, true)
  // Add one to the stack
  var stackNode = new StackNode(7)
  stack = stack.push(stackNode)
  empty = stack.isEmpty()
  t.equal(empty, false)
  t.end()
})

test('Add Nodes to a Stack', function (t) {
  var stack = new Stack()
  var stackNode = new StackNode(10)
  // Push to an empty stack
  stack = stack.push(stackNode)
  t.equal(stack.top, stackNode)
  // Push to a stack with items
  for (var i = 0; i < 5; i++) {
    stackNode = new StackNode(i)
    stack = stack.push(stackNode)
  }
  t.equal(stack.top.data, 4)
  t.end()
})

test('Popping Nodes off the Top of a Stack', function (t) {
  var stack = new Stack()
  var dataPop = stack.pop()
  t.equal(dataPop, null)
  for (var i = 0; i < 5; i++) {
    var stackNode = new StackNode(i)
    stack = stack.push(stackNode)
  }
  dataPop = stack.pop()
  t.equal(dataPop, 4)
  t.end()
})
